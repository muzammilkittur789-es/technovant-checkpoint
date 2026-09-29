import React from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  Code2, 
  Sparkles,
  BookOpen,
  Eye,
  HeartHandshake
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata = {
  title: "About Us | Technovant",
  description: "Building technology through talent, learning and execution — delivering reliable IT services while engineering scalable software products.",
};

export default function AboutPage() {
  const leadershipPlaceholders = [
    {
      role: "Engineering Leadership",
      focus: "System Architecture & Quality Standards",
      desc: "Guides technical strategy, code reviews, and architectural consistency across all client deliverables and SaaS prototypes.",
    },
    {
      role: "Product & Delivery Leads",
      focus: "Milestone Management & Client Collaboration",
      desc: "Ensures transparent sprint cycles, thorough requirement discovery, and clear communication between clients and development teams.",
    },
    {
      role: "Talent Development & Mentorship",
      focus: "Hands-on Training & Engineering Discipline",
      desc: "Pairs emerging developers with structured learning tracks, code audits, automated testing practices, and production workflows.",
    },
  ];

  return (
    <div className="space-y-20 pb-24">
      
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-slate-200/80 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-blue-700 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Our Foundation &amp; Philosophy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-[800] text-slate-900 tracking-[-0.03em] max-w-4xl mx-auto leading-[1.14]">
            Building Technology Through <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Talent, Learning, and Execution
            </span>
          </h1>

          <p className="text-base sm:text-lg font-normal text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {COMPANY_INFO.philosophy}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all"
            >
              Talk to Our Team
            </Link>
            <Link
              href="/careers"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm shadow-xs transition-all"
            >
              Explore Career Pathways
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Our Philosophy (5 Core Growth Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-medium uppercase tracking-wider text-blue-600">
              Core Belief
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-[-0.025em] mt-1">
              How We Develop Capable Builders
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-normal">
              We do not treat engineering as theoretical. We develop high-performing technology teams by providing a proven, supportive framework:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "Real Projects", desc: "No mock tutorials. Hands-on execution on genuine client systems and internal tools." },
              { title: "Structured Learning", desc: "Curated technical curricula covering modern frameworks, testing, and cloud environments." },
              { title: "Senior Mentorship", desc: "Pair programming, line-by-line code reviews, and architecture guidance from day one." },
              { title: "True Responsibility", desc: "Ownership of features, modules, and documentation to build genuine confidence." },
              { title: "Continuous Feedback", desc: "Regular sprint reviews and post-mortems focused on constant, measurable progress." },
            ].map((pillar, i) => (
              <div key={pillar.title} className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-2">
                <span className="text-xs font-medium text-blue-600">0{i + 1}</span>
                <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-medium uppercase tracking-wider text-blue-600">
              Our Story
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-[-0.025em]">
              Bridging Practical Services with Product Innovation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {COMPANY_INFO.name} was established with a dual conviction: that businesses deserve practical, cost-effective digital solutions without excessive overhead, and that emerging technology talent thrives when immersed in genuine, project-based engineering.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              By combining disciplined technical mentorship with modern technology stacks, our young, adaptable team delivers reliable web platforms, mobile utilities, and custom software systems. As we solve recurring operational bottlenecks for our clients, we channel these practical insights into developing our own proprietary SaaS tools.
            </p>
          </div>

          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white">
              The Dual-Engine Model
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0 mt-0.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Client IT Services</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-0.5 font-normal">
                    Engineering custom software, responsive web portals, and cloud infrastructure directly aligned with client operational goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-indigo-600 text-white shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Proprietary SaaS Labs</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-0.5 font-normal">
                    Transforming common business pain points into scalable, in-development software products that make advanced automation accessible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-blue-600 block">
              Our Mission
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Accessible Technology &bull; Real-World Opportunity
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              &ldquo;{COMPANY_INFO.mission}&rdquo;
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-indigo-600 block">
              Our Vision
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Sustainable Services &bull; Scalable Software Products
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              &ldquo;{COMPANY_INFO.vision}&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* 5. Our Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-medium uppercase tracking-wider text-blue-600">
            Guiding Principles
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-[-0.025em] mt-1">
            Our Core Values
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            The values that shape every codebase we build, every client interaction, and every engineer we develop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.values.map((val) => (
            <div
              key={val.title}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-start space-y-2.5"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <h3 className="text-lg font-bold text-slate-900">
                  {val.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7 font-normal">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Clean Team Structure (No Fake People) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-medium uppercase tracking-wider text-blue-600">
              Team &amp; Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-[-0.025em] mt-1">
              Engineers, Mentors, and Builders
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-normal">
              Our team combines experienced technical leadership with a vibrant, ambitious group of emerging software engineers, designers, and systems architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipPlaceholders.map((team) => (
              <div
                key={team.role}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                  {team.role.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{team.role}</h3>
                  <div className="text-xs text-blue-600 font-semibold">{team.focus}</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {team.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-[-0.025em]">
            Ready to Partner With Us?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Whether you are looking to build a new digital tool or join our growing technology team, we would love to connect.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all"
            >
              <span>Discuss a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
            >
              <span>Explore Careers</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
