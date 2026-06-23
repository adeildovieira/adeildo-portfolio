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
    <footer className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between px-6 pb-5 text-xs sm:text-sm">
      <div className="flex items-center gap-4">
        {SOCIALS.map((s) => {
          const external = s.href.startsWith("http");
          return (
            <a
              key={s.label}
              href={s.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              className="text-muted transition-colors duration-200 hover:text-fg"
            >
              <s.icon size={16} strokeWidth={1.5} />
            </a>
          );
        })}
        <span aria-hidden="true" className="select-none text-[#333]">
          ✦
        </span>
        <PrivacyToggle />
      </div>

      <Weather />
    </footer>
  );
}
