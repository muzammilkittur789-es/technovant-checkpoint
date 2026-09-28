"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  CheckCircle2, 
  GraduationCap, 
  Upload, 
  Send, 
  Sparkles, 
  FileText, 
  User, 
  Mail, 
  Globe,
  Share2,
  Code2
} from "lucide-react";
import { INTERNSHIP_ROLES, InternshipRole } from "@/data/internships";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRole?: InternshipRole | null;
}

export default function ApplicationModal({ isOpen, onClose, selectedRole }: ApplicationModalProps) {
  const [selectedRoleId, setSelectedRoleId] = useState<string>(selectedRole?.id || INTERNSHIP_ROLES[0].id);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationRef, setApplicationRef] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolioOrGithub: "",
    educationStatus: "Undergraduate (Junior/Senior)",
    graduationYear: "2026",
    motivation: "",
    resumeFileName: "",
  });

  useEffect(() => {
    if (selectedRole) {
      setSelectedRoleId(selectedRole.id);
    }
  }, [selectedRole]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentRole = INTERNSHIP_ROLES.find((r) => r.id === selectedRoleId) || INTERNSHIP_ROLES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomRef = "TECH-" + Math.floor(100000 + Math.random() * 900000);
      setApplicationRef(randomRef);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-blue-200 text-xs font-semibold tracking-wider uppercase mb-1">
            <GraduationCap className="w-4 h-4 text-blue-300" />
            <span>Technovant Internship Academy &bull; Cohort Application</span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-white">
            {isSubmitted ? "Application Received!" : "Apply for Technovant Internship"}
          </h2>
          <p className="text-xs md:text-sm text-blue-100/90 mt-1">
            {isSubmitted
              ? "Your profile has been routed to our recruiting and department mentors."
              : "Software Engineering, B2B Tech Sales & Growth Marketing Tracks"}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">
                  Congratulations, {formData.fullName || "Applicant"}!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your application for <strong className="text-slate-900">{currentRole.title}</strong> has been successfully registered.
                </p>
              </div>

              {/* Reference Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-2">
                  <span>Candidate Ref ID</span>
                  <span className="font-mono font-bold text-blue-600 text-sm">{applicationRef}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Track Assigned</span>
                  <span className="font-semibold text-slate-900">{currentRole.departmentLabel}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Assigned Mentor</span>
                  <span className="font-medium text-slate-700">{currentRole.mentorsAssigned}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Response SLA</span>
                  <span className="font-semibold text-emerald-600">Within 48 Business Hours</span>
                </div>
              </div>

              <div className="bg-blue-50 text-blue-800 text-xs p-3.5 rounded-lg max-w-md mx-auto text-left flex gap-2.5">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  Check your inbox at <strong>{formData.email}</strong> for our Candidate Welcome Guide and preparation notes for your practical evaluation.
                </span>
              </div>

              <button
                onClick={handleReset}
                className="w-full max-w-md py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20"
              >
                Close & Explore Academy Resources
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Role Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Role & Department
                </label>
                <select
                  value={selectedRoleId}
                  onChange={(e) => setSelectedRoleId(e.target.value)}
                  className="w-full text-sm font-medium border border-slate-300 rounded-lg px-3.5 py-2.5 bg-slate-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <optgroup label="Software Engineering">
                    {INTERNSHIP_ROLES.filter((r) => r.department === "engineering").map((role) => (
                      <option key={role.id} value={role.id}>
                        {role.title} ({role.workMode})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="B2B Tech Sales">
                    {INTERNSHIP_ROLES.filter((r) => r.department === "sales").map((role) => (
                      <option key={role.id} value={role.id}>
                        {role.title} ({role.workMode})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Growth & Digital Marketing">
                    {INTERNSHIP_ROLES.filter((r) => r.department === "marketing").map((role) => (
                      <option key={role.id} value={role.id}>
                        {role.title} ({role.workMode})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Stipend and Mentor Quick Info banner */}
              <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-xs flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-slate-500 font-medium">Stipend: </span>
                  <span className="font-semibold text-slate-900">{currentRole.stipend}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Duration: </span>
                  <span className="font-semibold text-slate-900">{currentRole.duration}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Mentorship: </span>
                  <span className="font-semibold text-blue-700">{currentRole.mentorsAssigned}</span>
                </div>
              </div>

              {/* Applicant Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Legal Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full text-sm pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Primary Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="alex@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-sm pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    LinkedIn Profile URL *
                  </label>
                  <div className="relative">
                    <Share2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/username"
                      value={formData.linkedIn}
                      onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                      className="w-full text-sm pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {currentRole.department === "engineering" ? "GitHub Profile or Repo Link *" : "Portfolio / Work Sample URL *"}
                  </label>
                  <div className="relative">
                    {currentRole.department === "engineering" ? (
                      <Code2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    ) : (
                      <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    )}
                    <input
                      type="url"
                      required
                      placeholder={
                        currentRole.department === "engineering"
                          ? "https://github.com/username"
                          : "https://myportfolio.com or Drive link"
                      }
                      value={formData.portfolioOrGithub}
                      onChange={(e) => setFormData({ ...formData, portfolioOrGithub: e.target.value })}
                      className="w-full text-sm pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Expected Graduation Year
                  </label>
                  <select
                    value={formData.graduationYear}
                    onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="2025">2025 (Graduating Soon)</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028+">2028 or later</option>
                    <option value="Graduated">Already Graduated / Career Switcher</option>
                  </select>
                </div>
              </div>

              {/* Resume File Upload Simulation */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Upload Resume / CV (PDF or DOCX, max 5MB) *
                </label>
                <div className="border-2 border-dashed border-slate-300 hover:border-blue-400 rounded-xl p-3.5 text-center cursor-pointer bg-slate-50/50 hover:bg-blue-50/20 transition-all flex flex-col items-center justify-center gap-1.5">
                  <Upload className="w-5 h-5 text-blue-600" />
                  <div className="text-xs text-slate-600">
                    <span className="font-semibold text-blue-600">Click to upload</span> or drag and drop
                  </div>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="opacity-0 absolute inset-0 cursor-pointer"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFormData({ ...formData, resumeFileName: e.target.files[0].name });
                      }
                    }}
                  />
                  {formData.resumeFileName ? (
                    <div className="mt-1 text-xs font-semibold text-emerald-600 flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" /> Attached: {formData.resumeFileName}
                    </div>
                  ) : (
                    <div className="text-[11px] text-slate-400">PDF, DOC, DOCX up to 5MB</div>
                  )}
                </div>
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Why do you want to join Technovant, and what project or skill are you most proud of? *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Share a project you built, a deal you prospected, a campaign you analyzed, or what excites you about working on enterprise SaaS/IT..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm shadow-blue-500/20 hover:shadow-md transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
