import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Layers, 
  Code2, 
  Smartphone, 
  Compass, 
  Cloud, 
  Bot, 
  Wrench, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Clock,
  Settings2,
  Workflow,
  Cpu,
  RefreshCw,
  FolderGit2
} from "lucide-react";
import Digital3DGrid from "@/components/Digital3DGrid";
import { COMPANY_INFO } from "@/data/company";
import { SERVICES_LIST } from "@/data/services";
import { SOLUTIONS_LIST } from "@/data/solutions";
import { PRODUCTS_CONFIG } from "@/data/products";

export const metadata = {
  title: "Technovant | Technology That Moves Your Business Forward",
  description: "Building practical digital solutions for businesses — from IT services and custom software to the next generation of SaaS products.",
};

export default function HomePage() {
  // Service icons map
  const serviceIcons: Record<string, React.ReactNode> = {
    "web-development": <Code2 className="w-5 h-5" />,
    "mobile-development": <Smartphone className="w-5 h-5" />,
    "custom-software": <Layers className="w-5 h-5" />,
    "ui-ux-design": <Compass className="w-5 h-5" />,
    "cloud-devops": <Cloud className="w-5 h-5" />,
    "ai-automation": <Bot className="w-5 h-5" />,
    "it-consulting": <Settings2 className="w-5 h-5" />,
    "maintenance-support": <Wrench className="w-5 h-5" />,
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-20 md:pt-28 pb-24 border-b border-slate-200/80 bg-white isolate">
        {/* Subtle Flat 2D Grid with Localized Interactive Depression & Data Pulses */}
        <Digital3DGrid />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200 shadow-xs text-xs font-bold text-slate-800 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-slate-500 font-bold text-[11px] uppercase tracking-wider">IT Services &amp; SaaS Labs</span>
              <span className="text-slate-300">|</span>
              <span className="text-blue-700">Practical &bull; Scalable &bull; Reliable</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-[800] text-slate-900 tracking-[-0.03em] leading-[1.12]">
              Technology That Moves <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800">
                Your Business Forward
              </span>
            </h1>

            {/* Supporting Message */}
            <p className="text-base sm:text-lg md:text-xl font-normal text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {COMPANY_INFO.supportingMessage}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm shadow-xs transition-all"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Value Highlights */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs font-normal text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Young &amp; Adaptable Tech Team
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Project-Based Execution
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Transparent &amp; Cost-Conscious
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* 2. SECTION: TRUST / VALUE PROPOSITION ("Built for Modern Business") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200/80 p-8 sm:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Why Work With Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-[-0.02em] mt-1">
              Built for Modern Business
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
              We eliminate technical friction and bureaucratic bloat. Our delivery model is engineered for clarity, speed, and real-world results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.pillars.map((pillar) => (
              <div 
                key={pillar.title}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700">
                    {pillar.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 pt-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 3. SECTION: WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Our Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.02em]">
            Technology Services Built Around Your Business
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            We work with businesses to design, develop, deploy, and maintain digital solutions that solve practical operational challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {serviceIcons[service.id] || <Code2 className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {service.tagline}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors"
                >
                  <span>Learn Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            <span>View Full Service Scope &amp; Tech Stack</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      {/* 4. SECTION: HOW WE WORK (Timeline / 4-Step Process) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-0.02em] mt-1">
              From Idea to Implementation
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 font-normal">
              A structured 4-step delivery pipeline ensuring clear milestones, rigorous testing, and continuous accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {COMPANY_INFO.workProcess.map((step) => (
              <div 
                key={step.step}
                className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between space-y-4 hover:border-blue-500/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-400">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Phase
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {step.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. SECTION: WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Pragmatic Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.02em]">
            Technology Without Unnecessary Complexity
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            We focus on clean architecture, reliable deliverables, and transparent communication rather than buzzwords and hype.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-start space-y-2.5"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7 font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* 6. SECTION: SOLUTIONS (Categorized around business problems) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50/80 rounded-3xl border border-slate-200 p-8 sm:p-12 lg:p-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Business-First Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-[-0.02em]">
                Solutions for Different Business Needs
              </h2>
              <p className="text-sm text-slate-600 font-normal">
                We address your operational bottlenecks first and select the appropriate technology stack second.
              </p>
            </div>

            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOLUTIONS_LIST.slice(0, 3).map((sol) => (
              <div
                key={sol.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700">
                    {sol.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {sol.tagline}
                  </p>
                  <div className="pt-2 text-xs text-slate-500 italic font-normal">
                    &ldquo;{sol.businessProblem.slice(0, 110)}...&rdquo;
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 mt-5">
                  <Link
                    href={`/solutions#${sol.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
                  >
                    <span>Read Business Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 7. SECTION: SaaS VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white border border-blue-800/40 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>{PRODUCTS_CONFIG.hero.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-white leading-tight">
              {PRODUCTS_CONFIG.visionStatement.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {PRODUCTS_CONFIG.visionStatement.body}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <span className="text-xs text-blue-200/80 font-normal">
                &bull; Currently in active architecture &amp; development
              </span>
            </div>

          </div>

          {/* Conceptual Roadmap Preview Card */}
          <div className="mt-10 pt-8 border-t border-blue-800/40 grid grid-cols-1 md:grid-cols-3 gap-4">
            {PRODUCTS_CONFIG.productsInDevelopment.map((prod) => (
              <div
                key={prod.id}
                className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-xs space-y-2"
              >
                <div className="flex items-center justify-between text-[11px] font-bold text-blue-300">
                  <span>{prod.conceptBadge}</span>
                  <span className="text-blue-400/80">{prod.developmentStage}</span>
                </div>
                <div className="text-sm font-bold text-white">{prod.name}</div>
                <div className="text-xs text-slate-300 line-clamp-2 font-normal">{prod.shortDescription}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 8. SECTION: CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 lg:p-14 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Let&apos;s Collaborate
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.02em]">
            Have a Technology Idea?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you need a website, software solution, automation system or a technology partner for your next project, let&apos;s discuss it.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all active:scale-[0.98]"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-2 flex items-center justify-center gap-6 text-xs text-slate-500 font-normal">
            <span>Direct engineer consultation</span>
            <span>&bull;</span>
            <span>Transparent estimates</span>
            <span>&bull;</span>
            <span>No vendor lock-in</span>
          </div>
        </div>
      </section>

    </div>
  );
}
