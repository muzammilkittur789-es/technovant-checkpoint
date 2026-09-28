"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Code2, 
  Users, 
  Briefcase, 
  ChevronRight, 
  FileText, 
  X, 
  Send,
  HelpCircle,
  Clock,
  MapPin,
  Laptop
} from "lucide-react";
import { CAREERS_CONFIG, CareerTrack } from "@/data/careers";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<CareerTrack | null>(null);
  const [isGeneralApplication, setIsGeneralApplication] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [applicationRef, setApplicationRef] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    experienceLevel: "Fresher / Final Year Student",
    interests: "Engineering",
    coverNote: "",
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = "TECH-APPLY-" + Math.floor(100000 + Math.random() * 900000);
    setApplicationRef(refCode);
    setSubmitted(true);
  };

  const closeModal = () => {
    setSelectedRole(null);
    setIsGeneralApplication(false);
    setSubmitted(false);
  };

  return (
    <div className="space-y-20 pb-24">
      
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-slate-200/80 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 text-xs font-semibold text-emerald-800 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{CAREERS_CONFIG.hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto">
            {CAREERS_CONFIG.hero.headline}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {CAREERS_CONFIG.hero.supportingText}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#open-roles"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all"
            >
              View Open Positions
            </a>
            <button
              onClick={() => {
                setIsGeneralApplication(true);
                setSubmitted(false);
              }}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm shadow-xs transition-all"
            >
              Submit General Application
            </button>
          </div>
        </div>
      </section>

      {/* 2. WHY JOIN US Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
            Growth &amp; Culture
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Why Join Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            We prioritize rapid learning, hands-on execution, and real mentorship over repetitive busywork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAREERS_CONFIG.whyJoinUs.map((item) => (
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
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHO WE LOOK FOR Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
              Candidate Profiles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Who We Look For
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              We care about curiosity, problem-solving discipline, and hunger to build useful software — regardless of non-traditional backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAREERS_CONFIG.whoWeLookFor.map((profile) => (
              <div
                key={profile.title}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-2 hover:border-blue-300 transition-colors"
              >
                <h3 className="text-base font-bold text-slate-900">
                  {profile.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HIRING PROCESS (01 - 05) */}
      <section id="process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
            Transparent Evaluation
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Our Hiring Process
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            No convoluted trick questions. We evaluate your practical problem-solving ability, curiosity, and communication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CAREERS_CONFIG.hiringProcess.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-blue-300 transition-all"
            >
              <div>
                <span className="text-2xl font-black font-mono text-blue-600 block mb-2">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {step.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OPEN POSITIONS SECTION */}
      <section id="open-roles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
              Current Openings
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Open Positions
            </h2>
          </div>
          <button
            onClick={() => {
              setIsGeneralApplication(true);
              setSubmitted(false);
            }}
            className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            <span>Don&apos;t see your profile? Submit General Application</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {CAREERS_CONFIG.openPositions.length > 0 ? (
          <div className="space-y-6">
            {CAREERS_CONFIG.openPositions.map((role) => (
              <div
                key={role.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-blue-50 text-blue-700">
                      {role.category}
                    </span>
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                      {role.type}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {role.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {role.role}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {role.summary}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-500">
                    <span><strong>Key Tech:</strong> TypeScript, Next.js, Node.js, Cloud</span>
                    <span>&bull;</span>
                    <span>Direct engineering mentorship</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => {
                      setSelectedRole(role);
                      setIsGeneralApplication(false);
                      setSubmitted(false);
                    }}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-all active:scale-[0.98]"
                  >
                    Apply for Role
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-12 text-center space-y-4">
            <h3 className="text-xl font-bold text-slate-900">No current openings</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              We are not actively advertising specific roles right now, but we are always eager to review talented candidates for upcoming cohorts.
            </p>
            <button
              onClick={() => {
                setIsGeneralApplication(true);
                setSubmitted(false);
              }}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs transition-all"
            >
              Submit General Application
            </button>
          </div>
        )}
      </section>

      {/* 6. Application Modal */}
      {(selectedRole || isGeneralApplication) && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
            
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div className="space-y-5">
                <div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-blue-50 text-blue-700">
                    Application Form
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    {selectedRole ? selectedRole.role : "General Talent Application"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your details below. We review every application and respond within 48-72 business hours.
                  </p>
                </div>

                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 / +1 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      GitHub Profile, Portfolio, or LinkedIn *
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://github.com/yourhandle"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Status / Experience Level
                    </label>
                    <select
                      value={formData.experienceLevel}
                      onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Fresher / 2025-2026 Graduate</option>
                      <option>Final-Year College Student</option>
                      <option>Self-Taught Builder</option>
                      <option>1-2 Years Professional Experience</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Brief Note on What You&apos;ve Built &amp; Why You Want to Join
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about a personal project, tool, or framework you enjoyed working with..."
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all"
                  >
                    <span>Submit Application</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Application Submitted!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your application has been logged under reference code:
                </p>
                <div className="inline-block px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 font-mono text-xs font-bold text-blue-700">
                  {applicationRef}
                </div>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Our engineering team reviews submissions weekly and will reach out to <strong>{formData.email}</strong> regarding the next step.
                </p>
                <div className="pt-2">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
