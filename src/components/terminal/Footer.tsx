import { Github, Linkedin, Mail } from "lucide-react";
import { Weather } from "./Weather";
import { PrivacyToggle } from "./PrivacyToggle";

const SOCIALS = [
  { href: "https://github.com/adeildovieira", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/adeildovieira", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:me@adeildovieira.com", icon: Mail, label: "Email" },
];

/**
 * Fixed footer: icon links on the left, live weather on the right.
 */
export function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 px-6 pt-6 pb-2 text-xs sm:text-sm">
      {/* Mirror of the Nav scrim, inverted — see Nav.tsx for the rationale. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-transparent backdrop-blur-[6px] [mask-image:linear-gradient(to_top,black_55%,transparent)]"
      />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2">
          {SOCIALS.map((s) => {
            const external = s.href.startsWith("http");
            return (
              <a
                key={s.label}
                href={s.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                // 16px icon inside a 44px hit box: the target grows, the mark
                // stays the same size. These were 16x16 targets.
                className="inline-flex min-h-11 min-w-11 items-center justify-center text-muted transition-colors duration-200 hover:text-fg"
              >
                <s.icon size={16} strokeWidth={1.5} />
              </a>
            );
          })}
          <span aria-hidden="true" className="select-none text-line-bright">
            ✦
          </span>
          <PrivacyToggle />
        </div>

        <Weather />
      </div>
    </footer>
  );
}
