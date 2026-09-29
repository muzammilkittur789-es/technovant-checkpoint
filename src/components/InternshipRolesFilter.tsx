"use client";

import React, { useState, useMemo } from "react";
import { 
  Code2, 
  TrendingUp, 
  Megaphone, 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Send
} from "lucide-react";
import { INTERNSHIP_ROLES, InternshipRole } from "@/data/internships";
import ApplicationModal from "@/components/ApplicationModal";

export default function InternshipRolesFilter({ initialDepartment }: { initialDepartment?: string }) {
  const [selectedDept, setSelectedDept] = useState<string>(initialDepartment || "all");
  const [searchQuery, setSearchQuery] = useState("");
  const [workModeFilter, setWorkModeFilter] = useState<string>("all");
  const [expandedRoleId, setExpandedRoleId] = useState<string | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeApplyingRole, setActiveApplyingRole] = useState<InternshipRole | null>(null);

  const filteredRoles = useMemo(() => {
    return INTERNSHIP_ROLES.filter((role) => {
      const matchDept = selectedDept === "all" || role.department === selectedDept;
      const matchMode = workModeFilter === "all" || role.workMode === workModeFilter;
      const matchQuery =
        searchQuery === "" ||
        role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.requirements.some((req) => req.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchDept && matchMode && matchQuery;
    });
  }, [selectedDept, workModeFilter, searchQuery]);

  const handleApplyClick = (role: InternshipRole) => {
    setActiveApplyingRole(role);
    setIsModalOpen(true);
  };

  const counts = {
    all: INTERNSHIP_ROLES.length,
    engineering: INTERNSHIP_ROLES.filter((r) => r.department === "engineering").length,
    sales: INTERNSHIP_ROLES.filter((r) => r.department === "sales").length,
    marketing: INTERNSHIP_ROLES.filter((r) => r.department === "marketing").length,
  };

  return (
    <div id="roles" className="space-y-8">
      {/* Controls Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        
        {/* Department Track Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedDept("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedDept === "all"
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            All Tracks ({counts.all})
          </button>
          <button
            onClick={() => setSelectedDept("engineering")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedDept === "engineering"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-blue-50 text-blue-700 hover:bg-blue-100/70 border border-blue-100"
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Software Development ({counts.engineering})</span>
          </button>
          <button
            onClick={() => setSelectedDept("sales")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedDept === "sales"
                ? "bg-indigo-600 text-white shadow-xs"
                : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100/70 border border-indigo-100"
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>B2B Tech Sales ({counts.sales})</span>
          </button>
          <button
            onClick={() => setSelectedDept("marketing")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedDept === "marketing"
                ? "bg-amber-600 text-white shadow-xs"
                : "bg-amber-50 text-amber-800 hover:bg-amber-100/70 border border-amber-200"
            }`}
          >
            <Megaphone className="w-3.5 h-3.5" />
            <span>Growth & Marketing ({counts.marketing})</span>
          </button>
        </div>

        {/* Search and Mode Filter */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2 border-t border-slate-100">
          <div className="sm:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by role title, programming language (e.g. Next.js, Python), or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs md:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50 focus:bg-white"
            />
          </div>

          <div className="sm:col-span-4">
            <select
              value={workModeFilter}
              onChange={(e) => setWorkModeFilter(e.target.value)}
              aria-label="Filter roles by work mode"
              className="w-full text-xs md:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50 focus:bg-white font-medium text-slate-700"
            >
              <option value="all">All Locations (Remote & Hybrid)</option>
              <option value="Remote">100% Remote Only</option>
              <option value="Hybrid">Hybrid (SF / Bengaluru)</option>
            </select>
          </div>
        </div>

      </div>

      {/* Roles Count Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>Showing <strong className="text-slate-900">{filteredRoles.length}</strong> available internship positions</span>
        <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Rolling Admissions Active for Summer/Fall
        </span>
      </div>

      {/* Role Cards List */}
      <div className="space-y-4">
        {filteredRoles.map((role) => {
          const isExpanded = expandedRoleId === role.id;

          const badgeStyles = {
            engineering: "bg-blue-50 text-blue-700 border-blue-200",
            sales: "bg-indigo-50 text-indigo-700 border-indigo-200",
            marketing: "bg-amber-50 text-amber-800 border-amber-200",
          }[role.department];

          return (
            <div
              key={role.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-blue-400 hover:shadow-md transition-all space-y-4"
            >
              {/* Card Top Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${badgeStyles}`}>
                      {role.departmentLabel}
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {role.workMode}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      {role.positionsAvailable} spots open
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{role.title}</h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleApplyClick(role)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm shadow-blue-500/20 transition-all active:scale-[0.98]"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setExpandedRoleId(isExpanded ? null : role.id)}
                    className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                    aria-label="Toggle details"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Overview snippet */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {role.overview}
              </p>

              {/* Metadata Badges */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                  <span>Stipend: <strong className="text-slate-800">{role.stipend}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Duration: <strong className="text-slate-800">{role.duration}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Location: <strong className="text-slate-800">{role.location}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-500" />
                  <span>Mentorship: <strong className="text-blue-700">{role.mentorsAssigned}</strong></span>
                </div>
              </div>

              {/* Collapsible Expanded Details */}
              {isExpanded && (
                <div className="pt-4 border-t border-slate-100 space-y-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Responsibilities */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        Core Responsibilities:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {role.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5"></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        Who We Are Looking For:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {role.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5"></span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Learning Outcomes */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      What You Will Master During This Program:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {role.learningOutcomes.map((outcome, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-end pt-2">
                    <button
                      onClick={() => handleApplyClick(role)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-500/20 transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Application for {role.title}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredRoles.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-3">
            <p className="text-sm font-semibold text-slate-700">No internship roles found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedDept("all");
                setSearchQuery("");
                setWorkModeFilter("all");
              }}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedRole={activeApplyingRole}
      />
    </div>
  );
}
