"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceNeeded: "Web Development",
    projectDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setRefNumber("ENQ-" + Math.floor(100000 + Math.random() * 900000));
    }, 700);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-10">
      {isSubmitted ? (
        <div className="text-center py-10 space-y-5 animate-in fade-in duration-200">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">
              Enquiry Received
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <strong className="text-slate-900">{formState.name}</strong>. Our team will review your project details and respond via <strong className="text-slate-900">{formState.email}</strong> within 24 business hours.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto text-left text-xs space-y-2">
            <div className="flex justify-between text-slate-500">
              <span>Reference Number:</span>
              <span className="font-mono font-bold text-blue-600">{refNumber}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Selected Scope:</span>
              <span className="font-semibold text-slate-800">{formState.serviceNeeded}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormState({
                  name: "",
                  email: "",
                  company: "",
                  phone: "",
                  serviceNeeded: "Web Development",
                  projectDetails: "",
                });
              }}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1 pb-2">
            <h3 className="text-xl font-bold text-slate-900">
              Start a Conversation
            </h3>
            <p className="text-xs text-slate-500">
              Fill in your details below to schedule an initial technical discussion.
            </p>
          </div>

          {/* 1. Name & Work Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* 2. Company & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Company Name *
              </label>
              <input
                type="text"
                required
                placeholder="Your Organization"
                value={formState.company}
                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 / +91 ..."
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* 3. What do you need? */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              What do you need? *
            </label>
            <select
              value={formState.serviceNeeded}
              onChange={(e) => setFormState({ ...formState, serviceNeeded: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option>Web Development</option>
              <option>Mobile App Development</option>
              <option>Custom Software Development</option>
              <option>UI/UX Design</option>
              <option>Cloud &amp; DevOps</option>
              <option>AI &amp; Automation</option>
              <option>IT Consulting &amp; Architecture Audit</option>
              <option>Maintenance &amp; Support</option>
              <option>SaaS Products Early Access</option>
              <option>Other Technology Inquiry</option>
            </select>
          </div>

          {/* 4. Project details */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Project Details &amp; Objectives *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell us about the business problem, current bottlenecks, target timeline, or specific requirements..."
              value={formState.projectDetails}
              onChange={(e) => setFormState({ ...formState, projectDetails: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-70"
          >
            <span>{isSubmitting ? "Submitting..." : "Send Enquiry"}</span>
            <Send className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-slate-400 text-center">
            Your details remain confidential. We never share your contact information with third parties.
          </p>
        </form>
      )}
    </div>
  );
}
