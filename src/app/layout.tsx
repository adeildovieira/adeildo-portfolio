import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Crosshair } from "@/components/terminal/Crosshair";
import { MotionProvider } from "@/components/terminal/MotionProvider";
import { ConsentProvider } from "@/components/terminal/ConsentProvider";
import { ConsentBanner } from "@/components/terminal/ConsentBanner";

/**
 * Space Grotesk is the primary font for the new aesthetic.
 * Geist Mono is kept for terminal accents (e.g., tags, index numbers).
 */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adeildovieira.com"),
  title: {
    default: "Adeildo Vieira - Software Engineer",
    template: "%s - Adeildo Vieira",
  },
  description:
    "Adeildo Vieira - 2026 Duke University CS new grad. Software engineer. Prev. identity & auth at BTG Pactual; ML occupancy analytics at Duke Code+.",
  keywords: [
    "Adeildo Vieira",
    "Adeildo Vieira Silva Neto",
    "Software Engineer",
    "New Grad",
    "Duke University",
    "Ex-Aluno IFAL Santana",
    "BTG Pactual",
    "OAuth 2.0",
    "OIDC",
    "Next.js",
    "TypeScript",
    "AI Developer",
    "ML Engineer",
    "Full-Stack Developer",
    "Python",
    "C",
    "React",
    "MacOS",
    "Linux",
  ],
  authors: [{ name: "Adeildo Vieira" }],
  creator: "Adeildo Vieira",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adeildovieira.com",
    siteName: "Adeildo Vieira",
    title: "Adeildo Vieira - Software Engineer",
    description:
      "2026 Duke CS new grad. Software engineer. Identity & auth, AI/ML, full-stack.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeildo Vieira - Software Engineer",
    description:
      "2026 Duke CS new grad. Software engineer. Identity & auth, AI/ML, full-stack.",
    creator: "@adeildovieira",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adeildo Vieira",
  url: "https://adeildovieira.com",
  email: "mailto:me@adeildovieira.com",
  jobTitle: "Software Engineer",
  sameAs: [
    "https://github.com/adeildovieira",
    "https://linkedin.com/in/adeildovieira",
  ],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Duke University" },
  nationality: "Brazilian",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // 1. Removed inline style={{ backgroundColor: "#000" }} 
    <html lang="en">
      <body
        // 2. Swapped to Space Grotesk and Geist Mono variables
        // 3. Removed bg-bg so it's transparent, added 'relative' for z-index stacking
        className={`${spaceGrotesk.variable} ${geistMono.variable} relative font-sans text-fg crosshair-cursor`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        
        {/* --- GRAIN BACKGROUND --- */}
        {/* 4. Added bg-[#000] here so the black background exists behind the grain */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[-1] h-full w-full bg-[#000] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/grain.gif')" }}
        />
        
        <ConsentProvider>
          <Crosshair />
          <MotionProvider>
            {children}
            <ConsentBanner />
          </MotionProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}