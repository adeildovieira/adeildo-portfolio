"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText, Download } from "lucide-react";
import { FadeUp } from "@/components/ui/Animations";

/**
 * Hero Section
 * 
 * The first thing visitors see - makes a strong first impression.
 * Features:
 * - Large, bold name and title
 * - Brief tagline
 * - Call-to-action buttons
 * - Scroll indicator
 * - Social links
 */
export function Hero() {
  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative z-20 flex min-h-screen items-center justify-center px-6"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Full legal name — hidden visually, visible to search engines */}
        <h2 className="sr-only">Adeildo Vieira Silva Neto — Software Engineer Portfolio</h2>

        {/* Open to Work */}
        <FadeUp delay={0.15}>
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-400 tracking-wide">Open to work</span>
          </div>
        </FadeUp>

        {/* Greeting */}
        <FadeUp delay={0.2}>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-opalite-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Software Engineer
          </p>
        </FadeUp>

        {/* Name - Using Playfair Display for elegant, expressive energy */}
        <FadeUp delay={0.3}>
          <h1 className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Adeildo
            <span className="text-opalite-500"> Vieira</span>
          </h1>
        </FadeUp>

        {/* Tagline */}
        <FadeUp delay={0.4}>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-foreground-muted drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:text-xl">
            Computer Science at Duke '26. Full Scholarship.
            <br />
            Prev. SWE Intern at BTG Pactual Bank, SWE Intern at Duke Code+ Program.
          </p>
        </FadeUp>

        {/* CTA Buttons */}
        <FadeUp delay={0.5}>
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md px-8 font-medium text-white text-shadow-sm glass-btn-primary"
            >
              See my experience
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <div className="inline-flex h-12 items-center rounded-md glass-btn-outline overflow-hidden">
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
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md px-8 font-medium text-foreground text-shadow-sm glass-btn-outline"
            >
              Get in touch
            </a>
          </div>
        </FadeUp>

        {/* Social Links */}
        <FadeUp delay={0.6}>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/adeildovieira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted transition-colors hover:text-opalite-400"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/adeildovieira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted transition-colors hover:text-opalite-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:me@adeildovieira.com"
              className="text-foreground-muted transition-colors hover:text-opalite-400"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScrollToAbout}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground-muted transition-colors hover:text-opalite-400"
        aria-label="Scroll to content"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}
