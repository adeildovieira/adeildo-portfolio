import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

/**
 * Font Configuration
 * 
 * Typography that reflects personality:
 * - Playfair Display: Elegant serif for headlines — expressive, artistic energy
 * - Geist Sans: Clean modern sans-serif for body text
 * - Geist Mono: Code blocks and technical elements
 */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Metadata Configuration
 * 
 * SEO-optimized metadata for better discoverability.
 * Update these values with your actual information.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://adeildovieira.com"),
  title: {
    default: "Adeildo Vieira | Software Engineer",
    template: "%s | Adeildo Vieira",
  },
  description:
    "Computer Science at Duke '26. New Grad. Prev. SWE Intern at BTG Pactual Bank, SWE Intern at Duke Code+ Program.",
  keywords: [
    "Adeildo Vieira Silva Neto",
    "Adeildo Vieira",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "New Grad",
    "Duke University",
    "BTG Pactual",
  ],
  authors: [{ name: "Adeildo Vieira Silva Neto" }],
  creator: "Adeildo Vieira Silva Neto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adeildovieira.com",
    siteName: "Adeildo Vieira",
    title: "Adeildo Vieira | Software Engineer",
    description:
      "Computer Science at Duke '26. New Grad. Prev. SWE Intern at BTG Pactual Bank, SWE Intern at Duke Code+ Program.",
    // og:image is generated at build time by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeildo Vieira | Software Engineer",
    description:
      "Computer Science at Duke '26. New Grad. Prev. SWE Intern at BTG Pactual Bank, SWE Intern at Duke Code+ Program.",
    creator: "@adeildovieira",
    // twitter:image falls back to the generated opengraph-image
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    // apple-touch-icon is generated at build time by app/apple-icon.tsx
  },
};

export const viewport: Viewport = {
  // Match the true page background so Safari bars / safe areas don't flash navy.
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adeildo Vieira Silva Neto",
  alternateName: "Ade Vieira",
  url: "https://adeildovieira.com",
  email: "mailto:me@adeildovieira.com",
  jobTitle: "Software Engineer",
  sameAs: [
    "https://github.com/adeildovieira",
    "https://linkedin.com/in/adeildovieira",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Duke University",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Durham",
    addressRegion: "NC",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: "#050505" }}>
      <body
        className={`${playfair.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground cursor-none`}
        style={{ backgroundColor: "#050505" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
