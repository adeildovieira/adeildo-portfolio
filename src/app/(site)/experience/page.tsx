import { Reveal } from "@/components/terminal/Reveal";

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
      "Direct impact on small-business (>8000) and clients (>5000), 47% faster login torwards a 1-second goal. Built 'Login with BTG ID' (OIDC, OAuth 2.0, PKCE) with feature-flagged rollout, logging/telemetry, and Redis-backed session state.",
    stack: ["OIDC", "OAuth 2.0", "PKCE", "Redis", "Telemetry"],
  },
  {
    role: "Software Engineering and AI Mentee",
    org: "Microsoft and Persistent Systems",
    where: "New York City, NY",
    dates: "Jul–Aug 2024",
    impact:
      "Direct impact on tiem to find healthier food options across NYC Metro Area, 45s vs 5-minute manual baseline. Built MealPilot, a conversational AI agent that helps users find healthier food options across NYC, combining Microsoft Copilot Studio with Azure Maps for location and place search.",
    stack: ["Azure Maps API", "Copilot Studio", "Python", "Figma", "AI Agent Design"],
  },
  {
    role: "Software Engineer Intern",
    org: "Duke Code+ Program",
    where: "Durham, NC",
    dates: "May–Aug 2024",
    impact:
      "Direct impact on employees productivity, reduced 2h/day consulting data. Shipped a Docker-containerized, ML-based occupancy-analytics platform for Duke Facilities — REST + PostgreSQL, models trained on 2M+ Wi-Fi / CO2 datapoints.",
    stack: ["Docker", "PostgreSQL", "scikit-learn", "REST", "Linux"],
  },
  {
    role: "3D Printing Lead",
    org: "Duke OIT Innovation Co-Lab",
    where: "Durham, NC",
    dates: "Jun 2023–Dec 2024",
    impact:
      "Direct impact on researchers time, reducing turnarout from 3+ to 1-2 business days. Owned end-to-end 3D-printing delivery for 24 stakeholders, made 47 custom models for health research, and standardized intake/handoff workflows.",
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
        {/* Bumped metadata from text-xs to text-sm */}
        <div className="mt-1 flex items-center gap-2 text-sm text-muted/70 sm:mt-0">
          <time>{r.dates}</time>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">{r.where}</span>
        </div>
      </header>
      
      {/* Bumped description from text-sm to [15px] to match your About section, and sm:text-base */}
      <p className="text-[15px] leading-relaxed text-muted sm:text-base">
        {r.impact}
      </p>
      
      {/* Bumped tags from text-[11px] to text-xs, increased top padding */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-2 text-xs text-muted/80">
        {r.stack.map((s, i) => (
          <span key={s} className="flex items-center gap-2">
            {s}
            {i < r.stack.length - 1 && <span className="text-muted/30">•</span>}
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
            className="text-sm text-muted transition-colors duration-200 hover:text-fg hover:underline underline-offset-4"
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