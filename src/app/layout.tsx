import type { Metadata } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Technovant | Technology That Moves Your Business Forward",
  description: "Building practical digital solutions for businesses — from IT services and custom software to the next generation of SaaS products.",
  keywords: [
    "IT services",
    "software development",
    "web development",
    "custom software",
    "AI automation",
    "cloud services",
    "IT solutions",
    "SaaS products",
    "UI UX design",
    "tech careers",
  ],
  authors: [{ name: "Technovant" }],
  openGraph: {
    title: "Technovant | Technology That Moves Your Business Forward",
    description: "Building practical digital solutions for businesses — from IT services and custom software to the next generation of SaaS products.",
    url: "https://technovant.io",
    siteName: "Technovant",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/app-icon.svg",
    shortcut: "/app-icon.svg",
    apple: "/app-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
