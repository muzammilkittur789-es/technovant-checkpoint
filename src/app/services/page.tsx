import React from "react";
import Link from "next/link";
import { 
  Code2, 
  Smartphone, 
  Layers, 
  Compass, 
  Cloud, 
  Bot, 
  Settings2, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight,
  ShieldCheck,
  Zap,
  HelpCircle
} from "lucide-react";
import { SERVICES_LIST } from "@/data/services";

export const metadata = {
  title: "Technology Services | Technovant",
  description: "End-to-end technology services for growing businesses — from custom software, web, and mobile development to cloud architecture and AI automation.",
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    "web-development": <Code2 className="w-6 h-6" />,
    "mobile-development": <Smartphone className="w-6 h-6" />,
    "custom-software": <Layers className="w-6 h-6" />,
    "ui-ux-design": <Compass className="w-6 h-6" />,
    "cloud-devops": <Cloud className="w-6 h-6" />,
    "ai-automation": <Bot className="w-6 h-6" />,
    "it-consulting": <Settings2 className="w-6 h-6" />,
    "maintenance-support": <Wrench className="w-6 h-6" />,
  };

  return (
    <div className="space-y-20 pb-24">
      
      {/* 1. Services Hero */}
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-slate-200/80 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-blue-700 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Full-Lifecycle Technical Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-[800] text-slate-900 tracking-[-0.03em] max-w-4xl mx-auto leading-[1.14]">
            Technology Services for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Growing Businesses
            </span>
          </h1>

          <p className="text-base sm:text-lg font-normal text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We provide end-to-end technology services from initial solution architecture and UI/UX design to modern full-stack development, cloud deployment, and long-term support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all"
            >
              Discuss Your Project
            </Link>
            <a
              href="#services-index"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm shadow-xs transition-all"
            >
              Browse 8 Core Services
            </a>
          </div>
        </div>
      </section>

      {/* Quick Navigation Anchor Bar */}
      <section id="services-index" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4">
          <div className="text-xs font-medium uppercase tracking-wider text-slate-500 mb-2 px-2">
            Jump to service:
          </div>
          <div className="flex flex-wrap gap-2">
            {SERVICES_LIST.map((service, index) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 hover:border-blue-400 hover:text-blue-600 text-xs font-medium text-slate-700 transition-all"
              >
                0{index + 1}. {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SERVICES_LIST.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs hover:border-slate-300 transition-all"
          >
            {/* Header of Service */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  {iconMap[service.id] || <Code2 className="w-6 h-6" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-blue-600">
                      0{index + 1}
                    </span>
                    <span className="text-slate-300">&bull;</span>
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Service Domain
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-[-0.025em] mt-0.5">
                    {service.title}
                  </h2>
                </div>
              </div>

              <Link
                href={`/contact?service=${service.id}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition-all shrink-0 self-start md:self-auto"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Content Grid: 2 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
              
              {/* Left Column: What it is & Business Problem */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                    What It Is
                  </h3>
                  <p className="text-base text-slate-800 leading-relaxed font-normal">
                    {service.whatItIs}
                  </p>
                </div>

                <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
                    <HelpCircle className="w-4 h-4 text-amber-600" />
                    <span>Business Problem Solved</span>
                  </div>
                  <p className="text-sm text-amber-950 leading-relaxed font-normal">
                    {service.businessProblem}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Technologies &amp; Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: What We Can Build & Typical Use Cases */}
              <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-slate-100 lg:pl-8">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2.5">
                    What We Can Build
                  </h3>
                  <ul className="space-y-2.5">
                    {service.whatWeCanBuild.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
                    Typical Business Use Cases
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {service.typicalUseCases.map((uc, i) => (
                      <li key={i} className="bg-slate-50 rounded-xl p-3 border border-slate-100 leading-relaxed font-normal">
                        &bull; {uc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Bottom Footer CTA for Service */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
              <span className="font-medium">
                Tailored scope &bull; Sprint-based deliverables &bull; Documented source code
              </span>
              <Link
                href={`/contact?service=${service.id}`}
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
              >
                <span>Request a consultation for {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Bottom CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-[-0.025em]">
            Need a Combination of Services?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Most projects require a blend — such as UI/UX design followed by custom software engineering and cloud deployment. We configure cross-functional sprint teams tailored to your roadmap.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all"
            >
              <span>Schedule an Initial Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
