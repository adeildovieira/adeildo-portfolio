"use client";

import { FadeUp } from "@/components/ui/Animations";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";

/**
 * Contact Section
 * 
 * Minimalist contact info:
 * - Email
 * - Location
 * - Social links
 * - Availability status
 */

export function Contact() {
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

  return (
    <section
      id="contact"
      className="relative z-10 py-24 px-6 md:py-32"
    >
      <div className="mx-auto max-w-2xl text-center">
        {/* Section Header */}
        <FadeUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-opalite-400 text-shadow">
            Contact
          </p>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground text-shadow sm:text-4xl md:text-5xl">
            Let&apos;s Connect
          </h2>
        </FadeUp>

        {/* Quick Contact */}
        <FadeUp delay={0.2}>
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground text-shadow">
              Quick Contact
            </h3>
            <a
              href="mailto:me@adeildovieira.com"
              className="inline-flex items-center gap-2 text-opalite-400 text-shadow transition-colors hover:text-opalite-300"
            >
              <Mail size={18} />
              me@adeildovieira.com
            </a>
          </div>
        </FadeUp>

        {/* Location */}
        <FadeUp delay={0.3}>
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground text-shadow">
              Location
            </h3>
            <p className="inline-flex items-center gap-2 text-foreground-muted text-shadow-sm">
              <MapPin size={18} className="text-opalite-400" />
              Durham, NC, USA
            </p>
          </div>
        </FadeUp>

        {/* Social Links */}
        <FadeUp delay={0.4}>
          <div className="mb-10">
            <h3 className="mb-4 text-lg font-semibold text-foreground text-shadow">
              Find Me Online
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-md text-foreground-muted glass-btn-icon hover:text-opalite-400"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Availability Status */}
        <FadeUp delay={0.5}>
          <div className="mx-auto max-w-md rounded-2xl border border-emerald-500/20 bg-emerald-900/10 p-6">
            <div className="flex items-center justify-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
              <span className="font-medium text-foreground text-shadow">
                Open to opportunities
              </span>
            </div>
            <p className="mt-2 text-sm text-foreground-muted text-shadow-sm">
              Currently looking for full-time Software Engineering roles. 
              Let&apos;s talk!
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
