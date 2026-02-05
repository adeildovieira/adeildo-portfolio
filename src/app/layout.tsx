import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * Font Configuration
 * 
 * Using Geist font family for a modern, clean aesthetic.
 * - Geist Sans: Primary text
 * - Geist Mono: Code blocks and technical elements
 */
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
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
