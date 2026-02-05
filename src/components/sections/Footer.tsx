"use client";

import { FadeIn } from "@/components/ui/Animations";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

/**
 * Footer Component
 * 
 * Simple footer with:
 * - Copyright notice
 * - Social links
 * - Built with credit
 */

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/adeildovieira",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/adeildovieira",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:me@adeildovieira.com",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <FadeIn>
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Copyright */}
            <p className="text-sm text-foreground-muted">
              © {currentYear} Adeildo Vieira. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-muted transition-colors hover:text-opalite-400"
                  aria-label={link.name}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Built With */}
          <div className="mt-6 flex items-center justify-center gap-1 text-sm text-foreground-muted">
            <span>Built with</span>
            <Heart size={14} className="text-opalite-500" fill="currentColor" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
