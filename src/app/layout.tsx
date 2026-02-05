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
    "Software Engineer passionate about building elegant solutions and crafting experiences that matter. New grad ready to make an impact.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "New Grad",
  ],
  authors: [{ name: "Adeildo Vieira" }],
  creator: "Adeildo Vieira",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adeildovieira.com",
    siteName: "Adeildo Vieira",
    title: "Adeildo Vieira | Software Engineer",
    description:
      "Software Engineer passionate about building elegant solutions and crafting experiences that matter.",
    images: [
      {
        url: "/og-image.png", // TODO: Add OG image
        width: 1200,
        height: 630,
        alt: "Adeildo Vieira - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeildo Vieira | Software Engineer",
    description:
      "Software Engineer passionate about building elegant solutions.",
    creator: "@adeildovieira",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  // iOS 26 "Liquid Glass" uses this color to tint Safari bars
  themeColor: "#0a1929",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: '#0a1929' }}>
      <body
        className={`${playfair.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        style={{ backgroundColor: '#0a1929' }}
      >
        {children}
      </body>
    </html>
  );
}
