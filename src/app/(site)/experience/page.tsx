import { Reveal } from "@/components/terminal/Reveal";
import { DragRow } from "@/components/terminal/DragRow";

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
    role: "Software Engineer Intern",
    org: "BTG Pactual",
    where: "São Paulo, BR",
    dates: "Jun–Aug 2025",
    impact:
      "Built identity & authentication systems in production — OIDC, OAuth 2.0, PKCE — with feature-flagged rollout, logging/telemetry, and Redis-backed session state.",
    stack: ["OIDC", "OAuth 2.0", "PKCE", "Redis", "Telemetry"],
  },
  {
    role: "Software Engineer Intern",
    org: "Duke Code+ Program",
    where: "Durham, NC",
    dates: "May–Aug 2024",
    impact:
      "Shipped a Docker-containerized, ML-based occupancy-analytics platform for Duke Facilities — REST + PostgreSQL, models trained on 2M+ Wi-Fi / CO2 datapoints.",
    stack: ["Docker", "PostgreSQL", "scikit-learn", "REST", "Linux"],
  },
  {
    role: "3D Printing Lead",
    org: "Duke OIT Innovation Co-Lab",
    where: "Durham, NC",
    dates: "Jun 2023–Dec 2024",
    impact:
      "Owned end-to-end 3D-printing delivery for 24 stakeholders — 47 custom models for health research — and standardized intake/handoff workflows.",
    stack: ["Hardware", "Workflow", "Docs"],
  },
];

function ExperiencePanel({ r }: { r: Role }) {
  return (
    <article className="flex h-full flex-col border border-line bg-white/[0.012] p-6 transition-colors duration-200 hover:border-line-bright">
      <h2 className="text-base font-bold leading-tight sm:text-lg">{r.role}</h2>
      <p className="mt-1 text-sm text-fg">{r.org}</p>
      <p className="mt-0.5 text-xs text-muted">
        {r.where} · {r.dates}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{r.impact}</p>
      <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
        {r.stack.map((s) => (
          <li key={s} className="border border-line px-2 py-0.5 text-[11px] text-muted">
            {s}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ExperiencePage() {
  return (
    <section aria-labelledby="exp-heading" className="w-full">
      <Reveal>
        {/* Added flex container to align the heading and the resume link */}
        <div className="flex items-center justify-between">
          <h1 id="exp-heading" className="text-xs uppercase tracking-[0.3em] text-muted">
            experience
          </h1>
          
          {/* New Resume Link */}
          <a
            href="/Adeildo_Vieira_Silva_Neto_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted transition-colors duration-200 hover:text-fg hover:underline underline-offset-4"
          >
            view resume in PDF ↗
          </a>
        </div>
        <p className="mb-8 mt-2 text-sm text-muted sm:text-base">I've shipped end-to-end on:</p>
      </Reveal>
      
      <Reveal delay={0.1}>
        <DragRow
          ariaLabel="Experience"
          slideClassName="basis-[86%] sm:basis-[400px]"
          slides={ROLES.map((r) => (
            <ExperiencePanel key={r.org} r={r} />
          ))}
        />
      </Reveal>
    </section>
  );
}