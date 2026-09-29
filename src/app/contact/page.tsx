import React from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import ContactConsultationForm from "@/components/ContactConsultationForm";

export const metadata = {
  title: "Contact Us | Technovant",
  description: "Let's build something useful — connect with our engineering team for IT services, custom software, and upcoming SaaS inquiries.",
};

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-24">
      
      {/* 1. Contact Hero */}
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-slate-200/80 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-blue-700 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Direct Engineering Consultation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-[800] text-slate-900 tracking-[-0.03em] max-w-4xl mx-auto leading-[1.14]">
            Let&apos;s Build <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Something Useful
            </span>
          </h1>

          <p className="text-base sm:text-lg font-normal text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you need a new website, custom software application, workflow automation, or a dependable technology partner, we are ready to listen and assist.
          </p>
        </div>
      </section>

      {/* 2. Main Grid: Info + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info & Value Commitments (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                Direct Communication
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Reach Out to Our Team
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We respect your time. When you message us, you speak directly with technical builders who understand architecture, scope, and delivery.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Email Inquiries
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {COMPANY_INFO.contact.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    For project RFPs, technology discovery, and general questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Phone &amp; Direct Voice
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    {COMPANY_INFO.contact.phone}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Monday to Friday, 9:00 AM – 6:00 PM IST / PST.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Office Hubs
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    {COMPANY_INFO.contact.address}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Available for in-person project kickoff workshops by appointment.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Social Links */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                Official Channels:
              </span>
              <div className="flex items-center gap-4 text-xs font-semibold">
                <a
                  href={COMPANY_INFO.contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>
                <span className="text-slate-300">&bull;</span>
                <a
                  href={COMPANY_INFO.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 hover:underline"
                >
                  GitHub
                </a>
                <span className="text-slate-300">&bull;</span>
                <a
                  href={COMPANY_INFO.contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline"
                >
                  Twitter / X
                </a>
              </div>
            </div>

            {/* Commitments */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent scoping with no hidden fees</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Documented milestones &amp; full source code ownership</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NDA protected discussions upon request</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactConsultationForm />
          </div>

        </div>
      </section>

    </div>
  );
}
