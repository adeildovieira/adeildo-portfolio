import type { Metadata } from "next";
import { Reveal } from "@/components/terminal/Reveal";
import { RESUME_URL } from "@/lib/routes";

const DESCRIPTION =
  "Production SSO at BTG Pactual, occupancy ML for Duke Facilities, and an AI agent built with Microsoft — Adeildo Vieira's engineering experience.";

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

/**
 * Ordered most-recent first, matching the résumé. Every figure here is quoted
 * from it — if the résumé changes, this changes with it, because a recruiter
 * who opens both will compare them.
 */

const ROLES: Role[] = [
  {
    role: "Data Analytics Fellow (Analyst, IT)",
    org: "Duke University",
    where: "Durham, NC",
    dates: "Starts Aug 2026",
    impact:
      "Building production data workflows, dimensional warehouse models, and dashboards for Duke and Duke Health research.",
    stack: ["SQL", "Dimensional modeling", "ETL", "Dashboards"],
  },
  {
    role: "Founding Software Engineer, Backend",
    org: "Aquara.ai",
    where: "Philadelphia, PA",
    dates: "Jul 2026–Present",
    impact:
      "Building the backend for an AWS-to-Azure database migration, and the authentication flows on top of it.",
    stack: ["AWS", "Azure", "Authentication", "Backend"],
  },
  {
    role: "Software Engineer Intern",
    org: "BTG Pactual Bank",
    where: "São Paulo, BR",
    dates: "Jun–Aug 2025",
    impact:
      "Built and shipped “Log in with BTG ID”, a production distributed SSO service giving 6,000+ employees and 8,000+ small-business clients one authentication path across BTG Pay products. Cut authentication latency 47% toward a 1-second target by caching session state in Redis, and personalized content on EXAME, BTG's news platform, by connecting GraphQL banking-profile data to the OAuth 2.0 flow. Owned rollout and reliability — authored the RFC, shipped behind feature flags, and restored service within SLA leading incident triage with live telemetry and a fallback path.",
    stack: ["OAuth 2.0", "OIDC", "PKCE", "TypeScript", "Node.js", "GraphQL", "Redis"],
  },
  {
    role: "Technical Assistant, Prototyping & Fabrication",
    org: "Duke OIT Innovation Co-Lab",
    where: "Durham, NC",
    dates: "Jun 2023–Dec 2024",
    impact:
      "Cut 3D-printing turnaround from 3+ to 1–2 business days by managing end-to-end delivery for 24 stakeholders. Held client satisfaction at 95% while producing 47 custom models for Duke Health research and standardizing production specifications.",
    stack: ["Prototyping", "Fabrication", "Process design"],
  },
  {
    role: "Software Engineering and AI Mentee",
    org: "Microsoft and Persistent Systems",
    where: "New York City, NY",
    dates: "Jul–Aug 2024",
    impact:
      "Cut healthy-food search time 85% — from 5 minutes to 45 seconds, at 80% task success — by building MealPilot with Microsoft Copilot Studio and the Azure Maps API. Selected as 1 of 18 students nationwide for the Microsoft NYC Summer Mentorship Program and AI Hackathon.",
    stack: ["Copilot Studio", "Azure Maps API", "Python", "AI agents"],
  },
  {
    role: "Software Engineer Intern (Code+ Program)",
    org: "Duke University",
    where: "Durham, NC",
    dates: "May–Jul 2024",
    impact:
      "Saved Duke Facilities 2 hours a day on data requests by deploying a dashboard backed by a REST API, Docker, Linux and Postgres. Reached 95% precision on three-class occupancy classification and a cross-validated R² of 0.72 on regression, training scikit-learn models on 2M+ anonymized Wi-Fi and CO₂ records, then built WCAG-aligned visualizations with Facilities across 4 Agile sprints to support HVAC planning.",
    stack: ["Docker", "Linux", "PostgreSQL", "REST", "Python", "Scikit-Learn"],
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
            href={RESUME_URL}
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