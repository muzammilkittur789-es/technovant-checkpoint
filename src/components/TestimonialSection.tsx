"use client";

import React, { useState } from "react";
import { Star, Quote, Building2, GraduationCap, CheckCircle } from "lucide-react";
import { TESTIMONIALS, Testimonial } from "@/data/testimonials";

export default function TestimonialSection() {
  const [filter, setFilter] = useState<"all" | "client" | "intern">("all");

  const filtered = TESTIMONIALS.filter((t) => (filter === "all" ? true : t.type === filter));

  return (
    <div className="space-y-8">
      {/* Tab Switcher */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === "all"
              ? "bg-slate-900 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          All Testimonials ({TESTIMONIALS.length})
        </button>
        <button
          onClick={() => setFilter("client")}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === "client"
              ? "bg-blue-600 text-white shadow-xs"
              : "bg-blue-50 text-blue-700 hover:bg-blue-100/70 border border-blue-100"
          }`}
        >
          <Building2 className="w-3.5 h-3.5" />
          <span>Enterprise Clients (3)</span>
        </button>
        <button
          onClick={() => setFilter("intern")}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === "intern"
              ? "bg-indigo-600 text-white shadow-xs"
              : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100/70 border border-indigo-100"
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Intern Alumni & PPOs (3)</span>
        </button>
      </div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {/* 5-star rating */}
                <div className="flex text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    item.type === "client"
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  }`}
                >
                  {item.highlight}
                </span>
              </div>

              <p className="text-slate-700 text-sm italic leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                {item.avatarInitials}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">{item.name}</div>
                <div className="text-[11px] text-slate-500 font-medium">{item.role}</div>
                <div className="text-[10px] text-blue-600 font-semibold">{item.companyOrTrack}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
