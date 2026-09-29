"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Bot, 
  Cloud, 
  ShieldCheck, 
  X,
  Send,
  HelpCircle,
  Users
} from "lucide-react";
import { PRODUCTS_CONFIG, ProductConcept } from "@/data/products";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductConcept | null>(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [companyInput, setCompanyInput] = useState("");

  const handleEarlyAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setEmailSubmitted(true);
  };

  const productIcons: Record<string, React.ReactNode> = {
    "workflow-automation": <Layers className="w-6 h-6 text-blue-600" />,
    "knowledge-assistant": <Bot className="w-6 h-6 text-indigo-600" />,
    "cloud-monitor": <Cloud className="w-6 h-6 text-sky-600" />,
  };

  return (
    <div className="space-y-20 pb-24">
      
      {/* 1. Products Hero */}
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-slate-200/80 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-xs font-bold text-blue-700 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Product Innovation Labs</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-[800] text-slate-900 tracking-[-0.025em] max-w-4xl mx-auto leading-[1.14]">
            {PRODUCTS_CONFIG.hero.headline}
          </h1>

          <p className="text-base sm:text-lg font-normal text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {PRODUCTS_CONFIG.hero.supportingText}
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>Current Status: Architecture &amp; Prototype Development</span>
          </div>
        </div>
      </section>

      {/* 2. Product Vision & Strategy Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Our Product Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-[-0.02em]">
              {PRODUCTS_CONFIG.visionStatement.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {PRODUCTS_CONFIG.visionStatement.body}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-bold">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" /> Grounded in real client friction
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" /> Transparent roadmap without false claims
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" /> Built for modern growing businesses
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products in Development Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Upcoming Software Suite
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-[-0.02em] mt-1">
              Products in Development
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md font-normal">
            The software concepts below are currently being engineered. You can join the early access waitlist to participate in private beta testing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCTS_CONFIG.productsInDevelopment.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Product Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                    {productIcons[product.id] || <Layers className="w-6 h-6 text-blue-600" />}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60">
                    {product.developmentStage}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    {product.conceptBadge}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Conceptual Preview Box */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                    <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                    <span>Problem Solved:</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic font-normal">
                    &ldquo;{product.problemSolved}&rdquo;
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Planned Capabilities:
                  </span>
                  <ul className="space-y-2">
                    {product.keyFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Users */}
                <div className="text-xs text-slate-500 flex items-center gap-1.5 pt-2">
                  <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Target: {product.targetUsers}</span>
                </div>

              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-slate-100 mt-8 flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setEmailSubmitted(false);
                    setEmailInput("");
                    setCompanyInput("");
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition-all active:scale-[0.98]"
                >
                  <span>Request Early Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setEmailSubmitted(false);
                    setEmailInput("");
                    setCompanyInput("");
                  }}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                >
                  Details
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Early Access Request Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
            
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!emailSubmitted ? (
              <div className="space-y-5">
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-blue-50 text-blue-700">
                    Early Access Request
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-normal">
                    Join our beta testing program. We will notify you when early access sandboxes and interactive previews become available.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 text-xs text-slate-600 space-y-1 font-normal">
                  <div className="font-bold text-slate-900">Current Phase:</div>
                  <div>{selectedProduct.estimatedPhase} &bull; {selectedProduct.developmentStage}</div>
                </div>

                <form onSubmit={handleEarlyAccessSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-normal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company Inc."
                      value={companyInput}
                      onChange={(e) => setCompanyInput(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-normal"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all"
                  >
                    <span>Join Early Access List</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center font-normal">
                    Zero spam. We will only contact you regarding beta access for this specific tool.
                  </p>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  You&apos;re on the Early Access List!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto font-normal">
                  Thank you for your interest in <strong>{selectedProduct.name}</strong>. We will reach out to <strong>{emailInput}</strong> as soon as the first beta wave opens.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* 5. Custom Software Consultation Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-[-0.02em]">
            Need a Private Solution Built Right Now?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
            If you need a dedicated software tool built exclusively for your organization today, our IT services team can engineer it to your exact specifications.
          </p>
          <div className="pt-2">
            <Link
              href="/services#custom-software"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-xs transition-all"
            >
              <span>Explore Custom Software Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
