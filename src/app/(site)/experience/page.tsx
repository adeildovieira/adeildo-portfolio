import type { Metadata } from "next";
import { Reveal } from "@/components/terminal/Reveal";

const DESCRIPTION =
  "Identity and auth at BTG Pactual, ML occupancy analytics at Duke Code+, and AI agent work with Microsoft — the roles behind Adeildo Vieira's engineering work.";

export const metadata: Metadata = {
  title: "Experience",
  description: DESCRIPTION,
  alternates: { canonical: "/experience" },
  openGraph: {
    url: "/experience",
    title: "Experience - Adeildo Vieira",
    description: DESCRIPTION,
  },
};

interface Role {
  role: string;
  org: string;
  where: string;
  dates: string;
  impact: string;
  stack: string[];
}

const ROLES: Role[] = [
  {
    role: "Founding Software Engineer",
    org: "Stealth AI Startup",
    where: "USA",
    dates: "May 2026–Present",
    impact: "",
    stack: ["AI API", "OpenAI", "OIDC", "HTTPS", "TypeScript", "React", "Next.js"],
  },
  {
    role: "Software Engineer Intern",
    org: "BTG Pactual Bank",
    where: "São Paulo, BR",
    dates: "Jun–Aug 2025",
    impact:
      "Built 'Login with BTG ID' (OIDC, OAuth 2.0, PKCE) with a feature-flagged rollout, logging/telemetry, and Redis-backed session state. Cut sign-in time 47% toward a 1-second target, for 8,000+ small businesses and 5,000+ clients.",
    stack: ["OIDC", "OAuth 2.0", "PKCE", "Redis", "Telemetry"],
  },
  {
    role: "Software Engineering and AI Mentee",
    org: "Microsoft and Persistent Systems",
    where: "New York City, NY",
    dates: "Jul–Aug 2024",
    impact:
      "Built MealPilot, a conversational AI agent that finds healthier food options across the NYC metro area, combining Microsoft Copilot Studio with Azure Maps for location and place search. Cut a 5-minute manual search to about 45 seconds.",
    stack: ["Azure Maps API", "Copilot Studio", "Python", "Figma", "AI Agent Design"],
  },
  {
    role: "Software Engineer Intern",
    org: "Duke Code+ Program",
    where: "Durham, NC",
    dates: "May–Aug 2024",
    impact:
      "Shipped a Docker-containerized, ML-based occupancy-analytics platform for Duke Facilities — REST + PostgreSQL, models trained on 2M+ Wi-Fi and CO2 datapoints. Saved staff roughly 2 hours a day previously spent pulling the data by hand.",
    stack: ["Docker", "PostgreSQL", "scikit-learn", "REST", "Linux"],
  },
  {
    role: "3D Printing Lead",
    org: "Duke OIT Innovation Co-Lab",
    where: "Durham, NC",
    dates: "Jun 2023–Dec 2024",
    impact:
      "Owned end-to-end 3D-printing delivery for 24 stakeholders, produced 47 custom models for health research, and standardized the intake and handoff workflows. Turnaround dropped from 3+ business days to 1-2.",
    stack: ["Hardware", "Workflow", "Docs"],
  },
];

function ExperienceItem({ r }: { r: Role }) {
  return (
    // Increased gap from gap-2 to gap-3
    <article className="flex flex-col gap-3">
      <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        {/* Bumped title from text-sm to text-base, sm:text-base to sm:text-lg */}
        <h2 className="text-base font-medium text-fg sm:text-lg">
          {r.role} <span className="font-normal text-muted">— {r.org}</span>
        </h2>
        {/* text-muted (#7a7a7a, 4.89:1). Was text-muted/70, which Tailwind v4
            compiles to oklab(... / 0.7) and alpha-composites to #565656 on
            black — 2.86:1, a WCAG 1.4.3 failure. Opacity modifiers silently
            destroy contrast on dark grounds; use discrete tokens instead. */}
        <div className="mt-1 flex items-center gap-2 text-sm text-muted sm:mt-0">
          <time>{r.dates}</time>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">{r.where}</span>
        </div>
      </header>
      
      {/* Guarded: an empty impact string rendered an empty <p>, leaving a gap
          under the most recent role. No paragraph is better than a blank one. */}
      {r.impact && (
        <p className="text-[15px] leading-relaxed text-muted sm:text-base">
          {r.impact}
        </p>
      )}

      {/* Was text-muted/80 -> #626262, 3.44:1. Now 4.89:1. */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-2 text-xs text-muted">
        {r.stack.map((s, i) => (
          <span key={s} className="flex items-center gap-2">
            {s}
            {i < r.stack.length - 1 && (
              <span aria-hidden="true" className="text-line-bright">
                •
              </span>
            )}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function ExperiencePage() {
  return (
    // Added mx-auto and max-w-4xl to perfectly align with your About section width
    <section aria-labelledby="exp-heading" className="mx-auto w-full max-w-4xl">
      <Reveal>
        <div className="mb-12 flex items-center justify-between border-b border-line pb-4">
          {/* Bumped section heading from text-xs to text-sm */}
          <h1 id="exp-heading" className="text-sm uppercase tracking-[0.3em] text-muted">
            experience
          </h1>
          
          {/* Bumped link from text-xs to text-sm */}
          <a
            href="/Adeildo_Vieira_Silva_Neto_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center text-sm text-muted underline-offset-4 transition-colors duration-200 hover:text-fg hover:underline"
          >
            view resume ↗
          </a>
        </div>
      </Reveal>
      
      {/* Increased row gap from gap-10 to gap-12 to accommodate larger text */}
      <div className="flex flex-col gap-12">
        {ROLES.map((r, index) => (
          <Reveal key={r.org} delay={0.1 + index * 0.1}>
            <ExperienceItem r={r} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}