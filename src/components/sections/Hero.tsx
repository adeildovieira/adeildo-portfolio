"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Download } from "lucide-react";
import { MagneticElement } from "@/components/ui/ScrollAnimations";

/**
 * Hero Section — Cinematic Scroll-Linked Landing
 *
 * - Massive name that scales down + fades as you scroll
 * - Parallax layers for depth
 * - Magnetic CTA buttons
 * - Scroll progress indicator line at bottom
 */
export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Scroll-linked transforms
  const nameScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const ctaY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={heroRef} id="hero" className="relative z-20">
      {/* Sticky viewport */}
      <div className="sticky top-0 flex h-screen items-center justify-center px-6 overflow-hidden">
        <div className="mx-auto max-w-5xl text-center">
          {/* Full legal name — hidden visually, visible to search engines */}
          <h2 className="sr-only">Adeildo Vieira Silva Neto — Software Engineer Portfolio</h2>

          {/* Open to Work Badge */}
          <motion.div
            style={{ opacity: subtitleOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium tracking-wide text-emerald-400">
              Open to work
            </span>
          </motion.div>

          {/* Role Label — moves faster (parallax) */}
          <motion.p
            style={{ y: subtitleY, opacity: subtitleOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-opalite-400 text-shadow"
          >
            Software Engineer
          </motion.p>

          {/* Name — massive, scales down on scroll */}
          <motion.h1
            style={{ scale: nameScale, opacity: nameOpacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-8 font-display text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.95] tracking-tight text-foreground"
          >
            Adeildo
            <br />
            <span className="text-opalite-500">Vieira</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            style={{ y: subtitleY, opacity: subtitleOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-foreground-muted text-shadow-sm md:text-xl"
          >
            Computer Science at Duke &apos;26. Full Scholarship.
            <br />
            Prev. SWE Intern at BTG Pactual Bank, SWE Intern at Duke Code+ Program.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            style={{ opacity: ctaOpacity, y: ctaY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MagneticElement strength={0.2}>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 font-medium text-white text-shadow-sm glass-btn-primary"
              >
                See my experience
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </MagneticElement>

            <MagneticElement strength={0.2}>
              <div className="inline-flex h-12 items-center rounded-full glass-btn-outline overflow-hidden">
                <a
                  href="/Adeildo_Vieira_Silva_Neto_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-full items-center gap-2 px-6 font-medium text-foreground text-shadow-sm transition-colors hover:text-opalite-400"
                >
                  <FileText size={18} />
                  Resume
                </a>
                <span className="h-6 w-px bg-white/15" />
                <a
                  href="/Adeildo_Vieira_Silva_Neto_Resume.pdf"
                  download="Adeildo_Vieira_Resume.pdf"
                  className="inline-flex h-full items-center px-3 text-foreground text-shadow-sm transition-colors hover:text-opalite-400"
                  aria-label="Download Resume"
                  title="Download Resume"
                >
                  <Download size={16} />
                </a>
              </div>
            </MagneticElement>

            <MagneticElement strength={0.2}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 font-medium text-foreground text-shadow-sm glass-btn-outline"
              >
                Get in touch
              </a>
            </MagneticElement>
          </motion.div>

          {/* Social Links */}
          <motion.div
            style={{ opacity: ctaOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { href: "https://github.com/adeildovieira", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/adeildovieira", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:me@adeildovieira.com", icon: Mail, label: "Email" },
            ].map((link) => (
              <MagneticElement key={link.label} strength={0.4}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="text-foreground-muted transition-colors duration-300 hover:text-opalite-400"
                  aria-label={link.label}
                >
                  <link.icon size={22} />
                </a>
              </MagneticElement>
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-opalite-500/0 via-opalite-500 to-opalite-500/0"
          style={{ width: progressWidth }}
        />
      </div>

      {/* Extra scroll height for the hero to dissolve into the next section */}
      <div className="h-[40vh]" />
    </section>
  );
}
