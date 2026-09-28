import React from "react";
import LogoMark from "./LogoMark";

interface TechnovantBrandIconProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

/**
 * Standalone circular brand icon badge for Technovant.
 * Reusable across navbar, footer, app headers, splash screens, and mobile icons.
 */
export default function TechnovantBrandIcon({ 
  size = "md", 
  className = "" 
}: TechnovantBrandIconProps) {
  const sizeClasses = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const markSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 ${className}`}
    >
      <LogoMark className={markSizes[size]} />
    </div>
  );
}
