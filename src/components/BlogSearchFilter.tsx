"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, SlidersHorizontal, BookOpen } from "lucide-react";
import { BlogArticle, BlogCategory } from "@/data/blog";
import BlogCard from "@/components/BlogCard";

interface BlogSearchFilterProps {
  initialArticles: BlogArticle[];
  categories: BlogCategory[];
  currentCategorySlug?: string;
  hideCategoryTabs?: boolean;
}

export default function BlogSearchFilter({
  initialArticles,
  categories,
  currentCategorySlug = "all",
  hideCategoryTabs = false,
}: BlogSearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(currentCategorySlug);

  const filteredArticles = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return initialArticles.filter((article) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "all" || article.category.slug === selectedCategory;

      if (!matchesCategory) return false;

      // Search filter
      if (!query) return true;

      const matchesTitle = article.title.toLowerCase().includes(query);
      const matchesExcerpt = article.excerpt.toLowerCase().includes(query);
      const matchesCatName = article.category.name.toLowerCase().includes(query);
      const matchesTags = article.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesTitle || matchesExcerpt || matchesCatName || matchesTags;
    });
  }, [initialArticles, searchQuery, selectedCategory]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  return (
    <div className="space-y-8">
      {/* Search & Category Filter Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, topic, or keyword (e.g. cloud, custom software, AI)..."
            className="w-full pl-12 pr-10 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-normal placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-3.5 p-1 rounded-md text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        {!hideCategoryTabs && (
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Browse by Category</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === "all"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All Topics ({initialArticles.length})
              </button>

              {categories.map((cat) => {
                const count = initialArticles.filter((a) => a.category.slug === cat.slug).length;
                const isActive = selectedCategory === cat.slug;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <span>{cat.name}</span>
                    {count > 0 && <span className="ml-1 opacity-70">({count})</span>}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Filter status banner */}
      {(searchQuery || selectedCategory !== "all") && (
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <div>
            Showing <strong className="text-slate-900 font-semibold">{filteredArticles.length}</strong> {filteredArticles.length === 1 ? "article" : "articles"}
            {selectedCategory !== "all" && (
              <span> in <strong className="text-blue-600 font-semibold">{categories.find((c) => c.slug === selectedCategory)?.name}</strong></span>
            )}
            {searchQuery && (
              <span> matching &ldquo;<span className="text-slate-800 font-semibold">{searchQuery}</span>&rdquo;</span>
            )}
          </div>

          <button
            onClick={handleClearFilters}
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Articles Grid or Empty State */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-slate-50 rounded-3xl border border-dashed border-slate-300 p-12 text-center max-w-xl mx-auto space-y-4 my-8">
          <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              No matching articles found
            </h3>
            <p className="text-sm text-slate-600 font-normal">
              We couldn&apos;t find any articles matching &ldquo;<strong>{searchQuery}</strong>&rdquo;. Try searching with broader keywords or clear your category selection.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={handleClearFilters}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition-all"
            >
              Clear Search &amp; View All Articles
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
