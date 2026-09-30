import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, Rss } from "lucide-react";
import { 
  getAllArticles, 
  getFeaturedArticle, 
  getAllCategories, 
  getLatestArticles 
} from "@/data/blog";
import { COMPANY_INFO } from "@/data/company";
import BlogCard from "@/components/BlogCard";
import BlogSearchFilter from "@/components/BlogSearchFilter";
import BlogNewsletterCTA from "@/components/BlogNewsletterCTA";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Technovant Blog | Technology, AI, Software & Business Insights",
  description: "Practical insights on software development, AI, automation, cloud technology, cybersecurity, SaaS and digital transformation from Technovant.",
  alternates: {
    canonical: "https://technovant.io/blog",
  },
  openGraph: {
    title: "Technovant Blog | Technology, AI, Software & Business Insights",
    description: "Practical insights on software development, AI, automation, cloud technology, cybersecurity, SaaS and digital transformation from Technovant.",
    url: "https://technovant.io/blog",
    siteName: "Technovant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/blog/custom-software-vs-off-the-shelf.svg",
        width: 1200,
        height: 630,
        alt: "Technovant Technology Insights & Software Engineering Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technovant Blog | Technology, AI, Software & Business Insights",
    description: "Practical insights on software development, AI, automation, cloud technology, cybersecurity, SaaS and digital transformation from Technovant.",
    images: ["/blog/custom-software-vs-off-the-shelf.svg"],
  },
};

export default function BlogIndexPage() {
  const allArticles = getAllArticles();
  const featuredArticle = getFeaturedArticle();
  const categories = getAllCategories();
  const latestArticles = getLatestArticles(featuredArticle.slug);

  // Structured Data Schema for Blog Index
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://technovant.io/#organization",
        name: "Technovant",
        url: "https://technovant.io",
        logo: "https://technovant.io/app-icon.svg",
        description: COMPANY_INFO.supportingMessage,
        sameAs: [
          COMPANY_INFO.contact.linkedIn,
          COMPANY_INFO.contact.github,
          COMPANY_INFO.contact.twitter,
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://technovant.io/blog/#webpage",
        url: "https://technovant.io/blog",
        name: "Technovant Blog | Technology, AI, Software & Business Insights",
        description: "Practical insights on software development, AI, automation, cloud technology, cybersecurity, SaaS and digital transformation from Technovant.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://technovant.io/#website",
          url: "https://technovant.io",
          name: "Technovant",
        },
        about: {
          "@id": "https://technovant.io/#organization",
        },
        breadcrumb: {
          "@id": "https://technovant.io/blog/#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://technovant.io/blog/#breadcrumb",
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
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={blogJsonLd} />

      <div className="space-y-16 md:space-y-24 pb-24">
        {/* 1. HERO HEADER */}
        <section className="relative overflow-hidden pt-14 md:pt-20 pb-12 border-b border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
                <Rss className="w-3.5 h-3.5" />
                <span>Technovant Editorial &bull; Engineering Perspectives</span>
              </div>

              {/* H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-[800] text-slate-900 tracking-[-0.025em] leading-[1.12]">
                Technology Insights
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg md:text-xl font-normal text-slate-600 leading-relaxed max-w-2xl">
                Practical perspectives on technology, software, AI and digital transformation for modern businesses.
              </p>

              {/* Category Quick Tags Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                  Popular Topics:
                </span>
                {categories.slice(0, 5).map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/blog/${cat.slug}`}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {/* 2. FEATURED ARTICLE */}
          {featuredArticle && (
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Lead Editorial
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-[-0.02em] mt-0.5">
                    Featured Analysis
                  </h2>
                </div>
              </div>

              <BlogCard article={featuredArticle} featuredLayout={true} />
            </section>
          )}

          {/* 3. SEARCH & ALL ARTICLES */}
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Publication Archive
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-[-0.02em] mt-0.5">
                  Latest Articles &amp; Insights
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-normal max-w-sm">
                Explore guides, architectural deep-dives, and strategic analyses authored by our engineering practice.
              </p>
            </div>

            {/* Interactive Search + Filter + Grid */}
            <BlogSearchFilter
              initialArticles={allArticles}
              categories={categories}
              currentCategorySlug="all"
            />
          </section>

          {/* 4. NEWSLETTER / DISPATCH CTA */}
          <BlogNewsletterCTA />

          {/* 5. CONSULTATION STRIP */}
          <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Technology Partnerships
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-[-0.02em]">
              Have a Technology Challenge?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
              Let&apos;s discuss how Technovant can help your business build, automate or modernize its technology.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Talk to Technovant</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
