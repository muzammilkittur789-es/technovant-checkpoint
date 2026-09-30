import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Lightbulb,
  CheckCircle2
} from "lucide-react";
import { 
  BLOG_ARTICLES, 
  BLOG_CATEGORIES, 
  getArticleBySlug, 
  getCategoryBySlug, 
  getArticlesByCategory,
  getLatestArticles
} from "@/data/blog";
import { COMPANY_INFO } from "@/data/company";
import BlogCard from "@/components/BlogCard";
import BlogSearchFilter from "@/components/BlogSearchFilter";
import BlogNewsletterCTA from "@/components/BlogNewsletterCTA";
import SocialShareButtons from "@/components/SocialShareButtons";
import TableOfContents from "@/components/TableOfContents";
import JsonLd from "@/components/JsonLd";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Static Generation for all articles and categories
export async function generateStaticParams() {
  const categoryParams = BLOG_CATEGORIES.map((cat) => ({ slug: cat.slug }));
  const articleParams = BLOG_ARTICLES.map((art) => ({ slug: art.slug }));
  return [...categoryParams, ...articleParams];
}

// 2. Dynamic SEO Metadata Generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // Check if it's a category
  const category = getCategoryBySlug(slug);
  if (category) {
    const title = `${category.name} Articles & Technology Insights | Technovant`;
    const description = `Practical articles, architecture guides, and strategic perspectives on ${category.name} from Technovant.`;
    const canonical = `https://technovant.io/blog/${category.slug}`;

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: "Technovant",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
    };
  }

  // Check if it's an article
  const article = getArticleBySlug(slug);
  if (article) {
    const canonical = article.canonicalUrl || `https://technovant.io/blog/${article.slug}`;

    return {
      title: `${article.seoTitle || article.title} | Technovant`,
      description: article.seoDescription || article.excerpt,
      keywords: article.tags,
      alternates: { canonical },
      openGraph: {
        title: article.title,
        description: article.excerpt,
        url: canonical,
        siteName: "Technovant",
        type: "article",
        publishedTime: article.publishedAt,
        modifiedTime: article.updatedAt || article.publishedAt,
        authors: [article.author.name],
        tags: article.tags,
        images: [
          {
            url: article.featuredImage,
            width: 1200,
            height: 630,
            alt: article.imageAlt,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description: article.excerpt,
        images: [article.featuredImage],
      },
    };
  }

  return {
    title: "Article Not Found | Technovant",
  };
}

export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params;

  const category = getCategoryBySlug(slug);
  const article = getArticleBySlug(slug);

  if (!category && !article) {
    notFound();
  }

  // =========================================================================
  // VIEW A: CATEGORY ARCHIVE PAGE
  // =========================================================================
  if (category) {
    const categoryArticles = getArticlesByCategory(category.slug);
    const otherCategories = BLOG_CATEGORIES.filter((c) => c.slug !== category.slug);

    const categoryJsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": `https://technovant.io/blog/${category.slug}#webpage`,
          url: `https://technovant.io/blog/${category.slug}`,
          name: `${category.name} Insights | Technovant`,
          description: category.description,
          breadcrumb: {
            "@id": `https://technovant.io/blog/${category.slug}#breadcrumb`,
          },
        },
        {
          "@type": "BreadcrumbList",
          "@id": `https://technovant.io/blog/${category.slug}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://technovant.io",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: "https://technovant.io/blog",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: category.name,
              item: `https://technovant.io/blog/${category.slug}`,
            },
          ],
        },
      ],
    };

    return (
      <>
        <JsonLd data={categoryJsonLd} />

        <div className="space-y-16 md:space-y-20 pb-24">
          {/* Category Header */}
          <section className="pt-12 md:pt-16 pb-12 border-b border-slate-200/80 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-normal">
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-900 font-semibold">{category.name}</span>
              </nav>

              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  <span>Category Topic Archive</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-[-0.025em]">
                  {category.name}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                  {category.description}
                </p>

                {/* Other category chips */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 mr-1">Other Topics:</span>
                  {otherCategories.slice(0, 4).map((c) => (
                    <Link
                      key={c.id}
                      href={`/blog/${c.slug}`}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                  <Link
                    href="/blog"
                    className="text-xs px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 transition-colors"
                  >
                    View All Topics &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Category Articles Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <BlogSearchFilter
              initialArticles={categoryArticles}
              categories={BLOG_CATEGORIES}
              currentCategorySlug={category.slug}
              hideCategoryTabs={true}
            />

            <BlogNewsletterCTA />
          </div>
        </div>
      </>
    );
  }

  // =========================================================================
  // VIEW B: INDIVIDUAL ARTICLE READING PAGE
  // =========================================================================
  if (!article) return notFound();

  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedUpdateDate = article.updatedAt
    ? new Date(article.updatedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  // Resolve related articles
  const relatedArticles = article.relatedArticleSlugs
    .map((rSlug) => getArticleBySlug(rSlug))
    .filter(Boolean) as typeof BLOG_ARTICLES;

  const fallbackArticles = relatedArticles.length > 0 
    ? relatedArticles 
    : getLatestArticles(article.slug, 3);

  // Article JSON-LD Schema
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${article.canonicalUrl}#article`,
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://technovant.io/#website",
          url: "https://technovant.io",
          name: "Technovant",
        },
        headline: article.title,
        description: article.excerpt,
        url: article.canonicalUrl,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt || article.publishedAt,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": article.canonicalUrl,
        },
        image: {
          "@type": "ImageObject",
          url: `https://technovant.io${article.featuredImage}`,
          caption: article.imageAlt,
        },
        author: {
          "@type": "Organization",
          name: article.author.name,
          url: "https://technovant.io/about",
        },
        publisher: {
          "@type": "Organization",
          name: "Technovant",
          url: "https://technovant.io",
          logo: {
            "@type": "ImageObject",
            url: "https://technovant.io/app-icon.svg",
          },
        },
        articleSection: article.category.name,
        keywords: article.tags.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${article.canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://technovant.io",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://technovant.io/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.category.name,
            item: `https://technovant.io/blog/${article.category.slug}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: article.title,
            item: article.canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />

      <article className="pb-24 space-y-12">
        {/* 1. ARTICLE HEADER & BREADCRUMB */}
        <header className="pt-10 md:pt-14 pb-8 border-b border-slate-200/80 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            {/* Top Navigation & Breadcrumbs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 font-normal flex-wrap">
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <Link 
                  href={`/blog/${article.category.slug}`} 
                  className="hover:text-blue-600 transition-colors font-medium text-slate-700"
                >
                  {article.category.name}
                </Link>
              </nav>

              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors self-start sm:self-auto"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Articles</span>
              </Link>
            </div>

            {/* Category Pill */}
            <div>
              <Link
                href={`/blog/${article.category.slug}`}
                className={`text-xs font-semibold px-3 py-1 rounded-md border ${article.category.badgeColor.bg} ${article.category.badgeColor.text} ${article.category.badgeColor.border} hover:opacity-80 transition-opacity`}
              >
                {article.category.name}
              </Link>
            </div>

            {/* Primary H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-[-0.025em] leading-[1.18]">
              {article.title}
            </h1>

            {/* Sub-headline / Excerpt */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
              {article.excerpt}
            </p>

            {/* Author, Date & Reading Time Metadata Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-slate-500 font-normal">
                <span className="font-semibold text-slate-900">{article.author.name}</span>
                <span className="text-slate-300">&bull;</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Published {formattedDate}</span>
                </span>
                {formattedUpdateDate && (
                  <>
                    <span className="text-slate-300">&bull;</span>
                    <span className="text-slate-500">Updated {formattedUpdateDate}</span>
                  </>
                )}
                <span className="text-slate-300">&bull;</span>
                <span className="flex items-center gap-1 font-medium text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{article.readingTime}</span>
                </span>
              </div>

              {/* Social Share Buttons */}
              <SocialShareButtons title={article.title} url={article.canonicalUrl} />
            </div>

          </div>
        </header>

        {/* 2. MAIN READING CONTAINER (Optimized 680-760px readable layout) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Image */}
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm mb-10">
            <Image
              src={article.featuredImage}
              alt={article.imageAlt}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              priority
              className="object-cover"
            />
          </div>

          {/* Core Content Layout (Content + Table of Contents) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Reading Column (Approx 700px width on desktop) */}
            <main className="lg:col-span-8 max-w-[720px] space-y-10 text-slate-800 leading-[1.75] font-normal text-base sm:text-lg">
              
              {/* Introduction Paragraphs */}
              <div className="space-y-5 text-slate-700 leading-relaxed font-normal">
                {article.content.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Table of Contents for Mobile / Quick Access */}
              <div className="lg:hidden">
                <TableOfContents items={article.tableOfContents} />
              </div>

              {/* Article Content Sections */}
              <div className="space-y-12">
                {article.content.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28 space-y-4">
                    {section.level === 2 ? (
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-[-0.02em] pt-4 border-t border-slate-100">
                        {section.heading}
                      </h2>
                    ) : (
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-[-0.015em] pt-2">
                        {section.heading}
                      </h3>
                    )}

                    <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                      {section.body.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {/* Bullet Points if applicable */}
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="space-y-2.5 my-4 text-sm sm:text-base text-slate-700">
                        {section.bulletPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Contextual Callout Box */}
                    {section.callout && (
                      <div className="my-6 p-6 rounded-2xl bg-blue-50/70 border border-blue-200/90 text-slate-800 space-y-2.5">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800">
                          <Lightbulb className="w-4 h-4 text-blue-600" />
                          <span>{section.callout.title}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                          {section.callout.text}
                        </p>
                        {section.callout.linkHref && (
                          <div className="pt-1">
                            <Link
                              href={section.callout.linkHref}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900 hover:underline"
                            >
                              <span>{section.callout.linkText || "Learn more"}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Conclusion Paragraphs */}
              {article.content.conclusion && article.content.conclusion.length > 0 && (
                <div className="pt-8 border-t border-slate-200 space-y-4">
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-[-0.02em]">
                    Key Takeaway &amp; Summary
                  </h2>
                  <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                    {article.content.conclusion.map((cParagraph, cIdx) => (
                      <p key={cIdx}>{cParagraph}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Internal Related Service Callout Box */}
              {article.content.relatedService && (
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                    Relevant Capability
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {article.content.relatedService.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {article.content.relatedService.description}
                  </p>
                  <div>
                    <Link
                      href={article.content.relatedService.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-xs"
                    >
                      <span>{article.content.relatedService.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Article Tags & Social Sharing Footer */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 mr-1">Tags:</span>
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <SocialShareButtons title={article.title} url={article.canonicalUrl} />
              </div>

              {/* Author Bio Box */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center shrink-0 text-sm">
                  TV
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900">{article.author.name}</h4>
                    <span className="text-xs text-blue-600 font-semibold">&bull; {article.author.team}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Written by Technovant&apos;s practical engineering and architecture group. We build scalable web platforms, automation workflows, and specialized SaaS applications.
                  </p>
                </div>
              </div>

            </main>

            {/* Right Desktop Sticky Sidebar (TOC & Fast Navigation) */}
            <aside className="hidden lg:block lg:col-span-4 space-y-6">
              <div className="sticky top-28 space-y-6">
                <TableOfContents items={article.tableOfContents} />

                {/* Sidebar Consultation Mini-Card */}
                <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                    Need Engineering Advice?
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Our team can evaluate your technical architecture or scope an automation workflow.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900 hover:underline"
                  >
                    <span>Schedule an architecture call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>

          </div>
        </div>

        {/* 3. RELATED ARTICLES GRID */}
        {fallbackArticles.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Recommended Reading
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-[-0.02em] mt-0.5">
                  Related Technology Insights
                </h2>
              </div>

              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:gap-2 transition-all"
              >
                <span>View all articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {fallbackArticles.slice(0, 3).map((relArt) => (
                <BlogCard key={relArt.id} article={relArt} />
              ))}
            </div>
          </section>
        )}

        {/* 4. MANDATORY BOTTOM CTA STRIP */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 border border-slate-800 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Technology Partnerships
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-[-0.02em]">
              Have a technology challenge?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl mx-auto">
              Let&apos;s discuss how Technovant can help your business build, automate or modernize its technology.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Talk to Technovant</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </article>
    </>
  );
}
