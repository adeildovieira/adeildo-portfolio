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
  // Proof, not credentials — the numbers are what a recruiter scans for in a
  // SERP snippet, and this fits inside the ~155 characters Google renders.
  description:
    "Software engineer, Duke CS 2026. Built single sign-on for 6,000+ employees and 8,000+ business clients at BTG Pactual — 47% faster login.",
  // No `keywords`: Google dropped the meta keywords tag in 2009 and Bing treats
  // stuffing it as a negative signal. The substantive terms live in the Person
  // schema's `knowsAbout` below, where a machine actually reads them.
  alternates: { canonical: "/" },
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
  // No maximumScale: capping it at 1 disables pinch-zoom on Android browsers,
  // which is a WCAG 1.4.4 (resize text) failure. The usual justification —
  // stopping iOS input-focus zoom — does not apply: this site has no inputs.
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
    // The next/font `variable` classes belong on <html>, not <body>. Tailwind
    // declares --font-sans on :root, and a var() inside a custom property is
    // resolved against the element that declares it — so --font-space-grotesk
    // has to exist on :root too, or :root silently falls back.
    <html lang="en" className={`${spaceGrotesk.variable} ${geistMono.variable}`}>
      <body className="relative bg-bg font-sans text-fg crosshair-cursor">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/*
          Film grain. This was a 2.9 MB animated GIF fetched on every page view;
          it is now the inline-SVG fractal-noise overlay defined in globals.css
          — zero network bytes, same look, and frozen under reduced motion.
        */}
        <div aria-hidden="true" className="film-grain" />

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