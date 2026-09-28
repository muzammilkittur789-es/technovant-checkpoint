import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  Users, 
  LayoutDashboard, 
  Globe2, 
  BarChart3, 
  Bot, 
  CloudRain, 
  HelpCircle,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { SOLUTIONS_LIST } from "@/data/solutions";

export const metadata = {
  title: "Business Solutions | Technovant",
  description: "Technology solutions designed around real business problems — business automation, client portals, internal tools, digital presence, and cloud transformation.",
};

export default function SolutionsPage() {
  const iconMap: Record<string, React.ReactNode> = {
    "business-automation": <Workflow className="w-6 h-6 text-blue-600" />,
    "customer-experience": <Users className="w-6 h-6 text-indigo-600" />,
    "internal-business-tools": <LayoutDashboard className="w-6 h-6 text-blue-600" />,
    "digital-presence": <Globe2 className="w-6 h-6 text-emerald-600" />,
    "data-analytics": <BarChart3 className="w-6 h-6 text-purple-600" />,
    "ai-solutions": <Bot className="w-6 h-6 text-blue-600" />,
    "cloud-transformation": <CloudRain className="w-6 h-6 text-sky-600" />,
  };

  return (
    <div className="space-y-20 pb-24">
      
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-slate-200/80 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-blue-700 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Business-First Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto">
            Technology Solutions Designed Around <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Business Problems
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We prioritize operational outcomes over technical jargon. Every solution is architected to eliminate bottlenecks, cut manual overhead, and unlock organizational scale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all"
            >
              Discuss Your Challenge
            </Link>
            <a
              href="#solutions-list"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm shadow-xs transition-all"
            >
              Explore 7 Solution Areas
            </a>
          </div>
        </div>
      </section>

      {/* 2. Solutions Catalog */}
      <section id="solutions-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SOLUTIONS_LIST.map((solution, index) => (
          <div
            key={solution.id}
            id={solution.id}
            className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs hover:border-slate-300 transition-all"
          >
            {/* Solution Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  {iconMap[solution.id] || <Workflow className="w-6 h-6 text-blue-600" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-600">
                      AREA 0{index + 1}
                    </span>
                    <span className="text-slate-300">&bull;</span>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {solution.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    {solution.title}
                  </h2>
                </div>
              </div>

              <Link
                href={`/contact?solution=${solution.id}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <span>Request Solution Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Business Problem First */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
              
              {/* Problem Statement */}
              <div className="lg:col-span-6 space-y-4">
                <div className="bg-red-50/50 border border-red-200/60 rounded-2xl p-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-800 font-mono">
                    <HelpCircle className="w-4 h-4 text-red-600" />
                    <span>The Business Problem First</span>
                  </div>
                  <p className="text-sm sm:text-base text-red-950 leading-relaxed font-medium">
                    {solution.businessProblem}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Our Solution Approach
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {solution.ourApproach}
                  </p>
                </div>
              </div>

              {/* Business Outcomes & Technology Second */}
              <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-slate-100 lg:pl-8">
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 mb-3">
                    Target Business Outcomes
                  </h3>
                  <ul className="space-y-2.5">
                    {solution.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2.5 text-sm text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Sample Deliverables
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {solution.sampleDeliverables.map((sd, i) => (
                      <li key={i} className="bg-slate-50 rounded-lg p-2.5 border border-slate-100">
                        &bull; {sd}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Applied Technologies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {solution.technologiesUsed.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        ))}
      </section>

      {/* 3. Bottom Consultation Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Have a Specific Operational Challenge?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Tell us about your team&apos;s current friction, manual bottlenecks, or outdated tools. We will outline a practical, cost-effective digital solution plan.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Schedule an Engineering Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
