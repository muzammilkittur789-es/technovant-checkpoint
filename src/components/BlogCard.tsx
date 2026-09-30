import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BlogArticle } from "@/data/blog";

interface BlogCardProps {
  article: BlogArticle;
  featuredLayout?: boolean;
}

export default function BlogCard({ article, featuredLayout = false }: BlogCardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (featuredLayout) {
    return (
      <article className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col lg:flex-row">
        {/* Left / Top: Featured Image */}
        <div className="relative w-full lg:w-7/12 aspect-[16/10] lg:aspect-auto min-h-[260px] lg:min-h-[380px] bg-slate-900 overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:hidden" />
          
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-blue-700 backdrop-blur-md shadow-xs border border-white/20">
              Featured Insight
            </span>
          </div>
        </div>

        {/* Right / Content */}
        <div className="p-8 sm:p-10 lg:w-5/12 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/blog/${article.category.slug}`}
                className={`text-xs font-semibold px-2.5 py-1 rounded-md border transition-colors ${article.category.badgeColor.bg} ${article.category.badgeColor.text} ${article.category.badgeColor.border} hover:opacity-80`}
              >
                {article.category.name}
              </Link>
              <span className="text-slate-300">&bull;</span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-normal">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.readingTime}</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-[-0.02em] leading-snug group-hover:text-blue-600 transition-colors">
              <Link href={`/blog/${article.slug}`}>
                {article.title}
              </Link>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3 font-normal">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-normal">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{formattedDate}</span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-slate-700 font-medium">{article.author.name}</span>
            </div>

            <Link
              href={`/blog/${article.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:gap-3 transition-all"
            >
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Card Image */}
        <Link href={`/blog/${article.slug}`} className="block relative w-full aspect-[16/9] bg-slate-900 overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Card Body */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <Link
              href={`/blog/${article.category.slug}`}
              className={`font-semibold px-2 py-0.5 rounded-md border ${article.category.badgeColor.bg} ${article.category.badgeColor.text} ${article.category.badgeColor.border} hover:opacity-85`}
            >
              {article.category.name}
            </Link>

            <div className="flex items-center gap-1 text-slate-500 font-normal">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{article.readingTime}</span>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-[-0.015em] leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
            <Link href={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500 font-normal">{formattedDate}</span>

        <Link
          href={`/blog/${article.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-blue-600 group-hover:text-blue-700 group-hover:gap-2 transition-all"
        >
          <span>Read Article</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
