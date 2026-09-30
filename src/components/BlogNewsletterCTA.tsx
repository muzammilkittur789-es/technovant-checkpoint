"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

export default function BlogNewsletterCTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-xl relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
          <Mail className="w-3.5 h-3.5 text-blue-400" />
          <span>Technovant Technology Briefing</span>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[-0.02em] text-white">
            Practical Software &amp; AI Perspectives Delivered Monthly
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            No marketing fluff or spam. We deliver concise, engineering-backed insights on software architecture, automation blueprints, and technology decision-making directly to your inbox.
          </p>
        </div>

        {subscribed ? (
          <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 flex items-center justify-center gap-3 animate-in fade-in duration-300">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            <div className="text-left text-xs sm:text-sm">
              <strong className="block text-white font-semibold">You&apos;re subscribed!</strong>
              We&apos;ve added <span className="text-emerald-200">{email}</span> to our monthly dispatch. You can unsubscribe anytime with one click.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email..."
              className="flex-1 px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-800/80 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-normal"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all shrink-0 active:scale-[0.98]"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-normal">
          <span>&bull; Zero spam guarantee</span>
          <span>&bull; Published once a month</span>
          <span>&bull; Instant 1-click unsubscribe</span>
        </div>
      </div>
    </section>
  );
}
