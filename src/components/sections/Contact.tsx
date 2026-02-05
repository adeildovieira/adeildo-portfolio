"use client";

import { FadeUp } from "@/components/ui/Animations";
import { Github, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { useState } from "react";

/**
 * Contact Section
 * 
 * Call-to-action for recruiters and collaborators:
 * - Contact form
 * - Social links
 * - Location info
 * - Professional email
 */

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement actual form submission
    // For now, just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    alert("Form submission will be implemented. For now, please email directly!");
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
      name: "Twitter",
      href: "https://twitter.com/adeildovieira",
      icon: Twitter,
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
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <FadeUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-opalite-400">
            Contact
          </p>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Let&apos;s Connect
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mb-12 max-w-2xl text-lg text-foreground-muted">
            I&apos;m currently open to new opportunities. Whether you have a question, 
            want to collaborate, or just say hi — my inbox is always open.
          </p>
        </FadeUp>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <FadeUp delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-background-secondary px-4 py-3 text-foreground placeholder:text-foreground-muted focus:border-opalite-500 focus:outline-none focus:ring-1 focus:ring-opalite-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-background-secondary px-4 py-3 text-foreground placeholder:text-foreground-muted focus:border-opalite-500 focus:outline-none focus:ring-1 focus:ring-opalite-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-background-secondary px-4 py-3 text-foreground placeholder:text-foreground-muted focus:border-opalite-500 focus:outline-none focus:ring-1 focus:ring-opalite-500 transition-colors"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-opalite-600 font-medium text-white transition-all hover:bg-opalite-500 hover:shadow-lg hover:shadow-opalite-600/25 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto sm:px-8"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </FadeUp>

          {/* Contact Info */}
          <FadeUp delay={0.4}>
            <div className="space-y-8 lg:pl-12">
              {/* Quick Contact */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Quick Contact
                </h3>
                <a
                  href="mailto:me@adeildovieira.com"
                  className="inline-flex items-center gap-2 text-opalite-400 transition-colors hover:text-opalite-300"
                >
                  <Mail size={18} />
                  me@adeildovieira.com
                </a>
              </div>

              {/* Location */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Location
                </h3>
                <p className="flex items-center gap-2 text-foreground-muted">
                  <MapPin size={18} className="text-opalite-400" />
                  [Your City, State/Country]
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Find Me Online
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-foreground-muted transition-all hover:border-opalite-500/50 hover:bg-white/5 hover:text-opalite-400"
                      aria-label={link.name}
                    >
                      <link.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-900/10 p-6">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-medium text-foreground">
                    Open to opportunities
                  </span>
                </div>
                <p className="mt-2 text-sm text-foreground-muted">
                  Currently looking for full-time Software Engineering roles. 
                  Let&apos;s talk!
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
