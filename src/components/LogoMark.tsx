import React from "react";

interface LogoMarkProps {
  className?: string;
  size?: number | string;
}

/**
 * Technovant Custom Geometric Brand Mark
 * 
 * Design Architecture:
 * - Upper horizontal platform represents stability, cloud infrastructure, and the letter "T" (TECHNO).
 * - Central vertical connector represents digital data flow and system connectivity.
 * - Dynamic upward chevron represents velocity, forward innovation, SaaS scalability, and the letter "V" (VANT).
 * 
 * Together, it forms an abstract monogram of T + V symbolizing connected digital intelligence.
 */
export default function LogoMark({ className = "w-5 h-5", size }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`${className} fill-none stroke-current stroke-[2.2]`}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Upper digital platform / T-bar */}
      <path d="M6 7.5h12" />
      {/* Central data connector */}
      <path d="M12 7.5v3.5" />
      {/* Dynamic upward velocity chevron / V-node */}
      <path d="M7.5 16.5L12 11l4.5 5.5" />
    </svg>
  );
}
