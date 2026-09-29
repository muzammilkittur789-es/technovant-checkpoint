"use client";

import React, { useState } from "react";
import { 
  Check, 
  Sparkles, 
  TrendingDown, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Activity, 
  Server, 
  Bot, 
  Key, 
  Layers,
  ChevronRight
} from "lucide-react";
import { SAAS_PRODUCTS, SaaSProduct } from "@/data/saasProducts";

function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function SaaSInteractiveSuite() {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">("annual");
  const [cloudSpend, setCloudSpend] = useState(35000); // For FinOps calculator

  const activeProduct = SAAS_PRODUCTS[selectedProductIndex];

  // Calculated ROI values for CloudPulse
  const estimatedSavings = Math.round(cloudSpend * 0.32);
  const annualSavings = estimatedSavings * 12;
  const zombieResourcesDetected = Math.max(8, Math.round(cloudSpend / 2400));

  return (
    <div className="space-y-12">
      {/* Product Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {SAAS_PRODUCTS.map((product, idx) => {
          const isSelected = selectedProductIndex === idx;
          return (
            <button
              key={product.id}
              onClick={() => setSelectedProductIndex(idx)}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-semibold transition-all ${
                isSelected
                  ? "bg-white border-blue-600 text-blue-700 shadow-lg shadow-blue-500/10 ring-2 ring-blue-600/20"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300"
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  isSelected ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-700"
                }`}
              >
                {idx === 0 && <TrendingDown className="w-4 h-4" />}
                {idx === 1 && <Bot className="w-4 h-4" />}
                {idx === 2 && <ShieldCheck className="w-4 h-4" />}
              </div>
              <div className="text-left">
                <div className="leading-tight">{product.name}</div>
                <div className="text-[11px] text-slate-500 font-normal">{product.category}</div>
              </div>
              {product.badge && (
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 ml-1">
                  {product.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Product Showcase Hero Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left details (7 cols) */}
          <div className="p-8 lg:p-12 lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  {activeProduct.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-amber-600 font-bold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  ★ {activeProduct.rating} / 5.0 ({activeProduct.reviewsCount} enterprise reviews)
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900 tracking-[-0.02em]">
                  {activeProduct.name}
                </h3>
                <p className="text-lg text-blue-600 font-bold mt-1">
                  {activeProduct.tagline}
                </p>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-3 font-normal">
                  {activeProduct.description}
                </p>
              </div>

              {/* Key Metric Highlights */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-100">
                {activeProduct.keyStats.map((stat, i) => (
                  <div key={i} className="text-left">
                    <div className="text-xl md:text-2xl font-black text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-500 font-bold mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Highlight Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeProduct.highlightFeatures.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-5 h-5 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{f.title}</h4>
                      <p className="text-xs text-slate-500 leading-normal mt-0.5 font-normal">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pricing-grid"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all hover:gap-3"
              >
                <span>View Plans & Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-white text-slate-700 font-semibold text-sm transition-all"
              >
                <span>Request Custom Enterprise Demo</span>
              </a>
            </div>
          </div>

          {/* Right Live Simulation Console (5 cols) */}
          <div className="bg-slate-900 text-white p-8 lg:p-10 lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-medium text-slate-400 ml-2">live-sandbox.technovant.io</span>
                </div>
                <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800 font-medium">
                  ● ACTIVE TELEMETRY
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="text-xs uppercase font-medium tracking-wider text-slate-400">
                  {activeProduct.demoDetails.videoPlaceholderText}
                </div>

                {/* Simulated Telemetry Cards */}
                <div className="grid grid-cols-1 gap-3">
                  {activeProduct.demoDetails.metrics.map((m, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-400 font-medium">{m.label}</div>
                        <div className="text-lg font-bold text-white mt-0.5">{m.value}</div>
                      </div>
                      <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">
                        {m.change}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Dynamic Product-Specific Widget */}
                {selectedProductIndex === 0 && (
                  <div className="mt-6 p-4 rounded-xl bg-slate-800/40 border border-slate-700 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium">Estimated Monthly Cloud Spend</span>
                      <span className="font-bold text-emerald-400">${formatNumber(cloudSpend)}</span>
                    </div>
                    <input
                      type="range"
                      min={5000}
                      max={200000}
                      step={5000}
                      value={cloudSpend}
                      onChange={(e) => setCloudSpend(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <div className="pt-2 border-t border-slate-750 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Calculated Annual Savings:</span>
                      <span className="font-bold text-emerald-300 text-sm">+{formatNumber(annualSavings)} / yr</span>
                    </div>
                  </div>
                )}

                {selectedProductIndex === 1 && (
                  <div className="mt-6 p-4 rounded-xl bg-slate-800/40 border border-slate-700 space-y-2 text-xs text-slate-300">
                    <div className="text-emerald-400 font-medium">⚡ AI Autonomous Agent Log:</div>
                    <div className="text-slate-400">→ Ticket #8942 received: "VPN gateway latency &gt; 350ms"</div>
                    <div className="text-slate-400">→ Analyzed logs, restarted idle tunnel interface</div>
                    <div className="text-emerald-400 font-semibold">✓ Resolved in 14.2s (Zero human escalation)</div>
                  </div>
                )}

                {selectedProductIndex === 2 && (
                  <div className="mt-6 p-4 rounded-xl bg-slate-800/40 border border-slate-700 space-y-2 text-xs text-slate-300">
                    <div className="text-blue-400 font-medium">🔐 Zero-Trust Ephemeral Access Vault:</div>
                    <div className="text-slate-400">Token request: Production PostgreSQL Read-Only</div>
                    <div className="text-slate-400">Generated short-lived TLS cert (Valid: 45 min)</div>
                    <div className="text-emerald-400 font-semibold">✓ Auto-revoking upon session termination</div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
              <span>SOC2 Type II & ISO 27001 Certified</span>
              <span className="text-blue-400 font-medium">Technovant Cloud Fabric v4.2</span>
            </div>
          </div>

        </div>
      </div>

      {/* Pricing Matrix with Annual / Monthly Switcher */}
      <div id="pricing-grid" className="pt-10 space-y-8">
        <div className="text-center space-y-3">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            Transparent, Predictable Enterprise Pricing
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Choose the ideal scale for <span className="font-semibold text-slate-900">{activeProduct.name}</span>. Every plan includes seamless API access and SOC 2 security.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 mt-2">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === "annual"
                  ? "bg-white text-blue-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all">
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900">Starter</h4>
                <p className="text-xs text-slate-500 mt-1 font-normal">Essential toolkit for scaling startups and fast teams.</p>
              </div>

              <div className="flex items-baseline gap-1 py-2">
                <span className="text-4xl font-bold text-slate-900">
                  ${billingCycle === "annual" ? activeProduct.pricing.starter.annual : activeProduct.pricing.starter.monthly}
                </span>
                <span className="text-xs text-slate-500 font-medium">/ month</span>
              </div>
              <div className="text-[11px] text-slate-400">
                {billingCycle === "annual" ? "Billed annually" : "Billed monthly"}
              </div>

              <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
                {activeProduct.pricing.starter.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <LinkButton
                href="/contact"
                className="w-full py-2.5 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-bold text-center block transition-all"
              >
                Start 14-Day Free Trial
              </LinkButton>
            </div>
          </div>

          {/* Growth Plan (Popular) */}
          <div className="bg-blue-50/40 rounded-2xl border-2 border-blue-600 p-6 md:p-8 flex flex-col justify-between shadow-xl relative hover:shadow-2xl transition-all">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-sm">
              Recommended Choice
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900">Growth</h4>
                <p className="text-xs text-slate-500 mt-1 font-normal">Advanced automation, multi-cloud sync & priority SLA.</p>
              </div>

              <div className="flex items-baseline gap-1 py-2">
                <span className="text-4xl font-bold text-blue-700">
                  ${billingCycle === "annual" ? activeProduct.pricing.growth.annual : activeProduct.pricing.growth.monthly}
                </span>
                <span className="text-xs text-slate-500 font-medium">/ month</span>
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                {billingCycle === "annual" ? "Billed annually (Save 20%)" : "Billed monthly"}
              </div>

              <ul className="space-y-3 pt-4 border-t border-blue-100 text-xs text-slate-700 font-medium">
                {activeProduct.pricing.growth.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <LinkButton
                href="/contact"
                className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold text-center block shadow-md shadow-blue-500/25 transition-all"
              >
                Deploy Growth Plan
              </LinkButton>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all">
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900">Custom Enterprise</h4>
                <p className="text-xs text-slate-500 mt-1 font-normal">Tailored security controls, custom connectors & dedicated TAM.</p>
              </div>

              <div className="flex items-baseline gap-1 py-2">
                <span className="text-4xl font-bold text-slate-900">Custom</span>
              </div>
              <div className="text-[11px] text-slate-400">Volume licensing & custom SLA</div>

              <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
                {activeProduct.pricing.enterprise.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <LinkButton
                href="/contact"
                className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold text-center block transition-all"
              >
                Contact Sales for Custom Quote
              </LinkButton>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function LinkButton({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
