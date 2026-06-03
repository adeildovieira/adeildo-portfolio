import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Grain } from "@/components/terminal/Grain";
import { Crosshair } from "@/components/terminal/Crosshair";
import { MotionProvider } from "@/components/terminal/MotionProvider";

/**
 * Monospace is the only family on the site (spec). JetBrains Mono is the
 * primary; Geist Mono is the fallback. Departure Mono can be dropped in as a
 * local next/font ahead of these later without touching anything else.
 */
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
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
    default: "Adeildo Vieira — Software Engineer",
    template: "%s — Adeildo Vieira",
  },
  description:
    "Adeildo Vieira — 2026 Duke University CS new grad. Software engineer. Prev. identity & auth at BTG Pactual; ML occupancy analytics at Duke Code+.",
  keywords: [
    "Adeildo Vieira",
    "Software Engineer",
    "New Grad",
    "Duke University",
    "BTG Pactual",
    "OAuth 2.0",
    "OIDC",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Adeildo Vieira" }],
  creator: "Adeildo Vieira",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adeildovieira.com",
    siteName: "Adeildo Vieira",
    title: "Adeildo Vieira — Software Engineer",
    description:
      "2026 Duke CS new grad. Software engineer. Identity & auth, ML, full-stack.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeildo Vieira — Software Engineer",
    description:
      "2026 Duke CS new grad. Software engineer. Identity & auth, ML, full-stack.",
    creator: "@adeildovieira",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  // Lock to one viewport — the site is built around no vertical scroll.
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
    <html lang="en" style={{ backgroundColor: "#000" }}>
      <body
        className={`${jetbrains.variable} ${geistMono.variable} font-mono bg-bg text-fg crosshair-cursor`}
        style={{ backgroundColor: "#000" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Grain />
        <Crosshair />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
