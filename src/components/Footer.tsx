import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import LogoMark from "@/components/LogoMark";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/90">
          
          {/* Brand info (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20">
                <LogoMark className="w-5 h-5" />
              </div>
              <div className="flex items-center tracking-tight">
                <span className="font-extrabold text-xl text-white">TECHNO</span>
                <span className="font-extrabold text-xl text-blue-500">VANT</span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {COMPANY_INFO.supportingMessage}
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{COMPANY_INFO.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" />
                </svg>
              </a>
              <a
                href={COMPANY_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href={COMPANY_INFO.contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/services#web-development" className="hover:text-white transition-colors">Web Development</Link>
              </li>
              <li>
                <Link href="/services#mobile-development" className="hover:text-white transition-colors">Mobile Development</Link>
              </li>
              <li>
                <Link href="/services#custom-software" className="hover:text-white transition-colors">Custom Software</Link>
              </li>
              <li>
                <Link href="/services#ui-ux-design" className="hover:text-white transition-colors">UI/UX Design</Link>
              </li>
              <li>
                <Link href="/services#cloud-devops" className="hover:text-white transition-colors">Cloud &amp; DevOps</Link>
              </li>
              <li>
                <Link href="/services#ai-automation" className="hover:text-white transition-colors">AI &amp; Automation</Link>
              </li>
              <li>
                <Link href="/services#it-consulting" className="hover:text-white transition-colors">IT Consulting</Link>
              </li>
              <li>
                <Link href="/services#maintenance-support" className="hover:text-white transition-colors">Maintenance &amp; Support</Link>
              </li>
            </ul>
          </div>

          {/* SaaS Products & Careers Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Future Products &amp; Talent</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Product Roadmap</span>
                  <span className="text-[10px] bg-blue-900/80 text-blue-300 px-1.5 py-0.5 rounded font-bold">In Dev</span>
                </Link>
              </li>
              <li>
                <Link href="/products#early-access" className="hover:text-white transition-colors">Early Access Requests</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Careers &amp; Freshers</span>
                  <span className="text-[10px] bg-emerald-900/80 text-emerald-300 px-1.5 py-0.5 rounded font-bold">Hiring</span>
                </Link>
              </li>
              <li>
                <Link href="/careers#process" className="hover:text-white transition-colors">Hiring Process</Link>
              </li>
              <li>
                <Link href="/careers#roles" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 font-bold">
                  <span>Open Positions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright and Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Terms &amp; Conditions</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Contact Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
