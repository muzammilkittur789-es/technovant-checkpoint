"use client";

import React, { useState, useEffect } from "react";
import { ListOrdered } from "lucide-react";

interface TableOfContentsProps {
  items: {
    id: string;
    title: string;
    level: 2 | 3;
  }[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = items
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 140;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveId(el.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <nav className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-5 space-y-3">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
        <ListOrdered className="w-4 h-4 text-blue-600" />
        <span>Table of Contents</span>
      </div>

      <ul className="space-y-1.5 text-xs">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              className={`${item.level === 3 ? "pl-3.5" : "pl-0"}`}
            >
              <a
                href={`#${item.id}`}
                className={`block py-1 transition-colors leading-relaxed ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-slate-600 hover:text-slate-900 font-normal"
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
