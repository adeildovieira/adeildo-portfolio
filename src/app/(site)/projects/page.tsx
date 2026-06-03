import { Reveal } from "@/components/terminal/Reveal";
import { DragRow } from "@/components/terminal/DragRow";
import { AsciiArt, SLATS } from "@/components/terminal/AsciiArt";

interface Project {
  idx: string;
  title: string;
  tagline: string;
  blurb: string;
  stack: string[];
  href?: string;
  hrefLabel?: string;
}

const PROJECTS: Project[] = [
  {
    idx: "01",
    title: "RepSense AI",
    tagline: "ESP32 + OpenAI workout coach",
    blurb:
      "Gym rep counters don't say much. RepSense is a real-time, on-device coach that uses an ESP32-S3 and IMU data to analyze bench-press form and provide feedback - rep count, imbalance, tempo, rest quality - via the OpenAI API.",
    stack: ["C", "ESP32", "IMU", "OpenAI API", "IoT"],
    href: "https://github.com/adeildovieira/RepSense-IoT-and-AI-Gym-Helper",
  },
  {
    idx: "02",
    title: "MealPilot",
    tagline: "Microsoft AI for Good hackathon",
    blurb:
      "Agentic AI meets urban nutrition: A Copilot Studio agent using Azure Maps to surface geo-personalized healthy-meal options across NYC. A 28-student pilot hit 80% task success in 45s (vs ~5 min), targeting >30% food-insecure areas.",
    stack: ["Python", "Copilot Studio", "Azure Maps"],
  },
  {
    idx: "03",
    title: "Mini Amazon",
    tagline: "full-stack e-commerce",
    blurb:
      "A Database Systems build with a five-person team. I owned the seller side - inventory CRUD, order fulfillment, stock - plus the UI/UX. Flask + PostgreSQL with complex queries; search, carts, checkout end to end.",
    stack: ["Python", "Flask", "PostgreSQL", "SQL"],
    href: "/Mini_Amazon_Report.pdf",
    hrefLabel: "Report",
  },
  {
    idx: "04",
    title: "CNN Waste Classification",
    tagline: "deep learning for recycling",
    blurb:
      "A convolutional neural net that sorts waste imagery into recyclables, organics, and landfill - trained for sustainable waste-management workflows.",
    stack: ["Python", "TensorFlow", "CNN"],
    href: "https://github.com/adeildovieira/ML-Class-Final-Project",
  },
  {
    idx: "05",
    title: "DartHub",
    tagline: "Star Wars to-do app",
    blurb:
      "A Flutter + Firebase to-do app with authentication and real-time sync, a playful Dark Side aesthetic, and Android + Web support. Team project.",
    stack: ["Flutter", "Dart", "Firebase"],
    href: "https://github.com/adeildovieira/StarWars-To-Do-App-Flutter",
  },
  {
    idx: "06",
    title: "This Portfolio",
    tagline: "the site you're on",
    blurb:
      "Retro-terminal, monospace, no-scroll. Next.js + TypeScript + Tailwind, embla drag-to-pull, live Open-Meteo weather, static-exported - built on a main/prod branch strategy with semantic versioning.",
    stack: ["Next.js", "TypeScript", "Tailwind", "embla"],
    href: "https://github.com/adeildovieira/adeildo-portfolio",
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="flex h-full flex-col border border-line bg-white/[0.012] p-6 transition-colors duration-200 hover:border-line-bright sm:flex-row sm:gap-6">
      {/* left — title + tagline + stack */}
      <div className="flex flex-col sm:w-1/3">
        <span className="text-xs text-muted">{p.idx}</span>
        <h2 className="mt-1 text-lg font-bold leading-tight">{p.title}</h2>
        <p className="mt-1 text-sm text-muted">{p.tagline}</p>
        <ul className="mt-auto hidden flex-wrap gap-1.5 pt-5 sm:flex">
          {p.stack.map((s) => (
            <li key={s} className="border border-line px-1.5 py-0.5 text-[10px] text-muted">
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* middle — monochrome visual tile */}
      <div className="my-4 flex items-center justify-center border border-line py-7 sm:my-0 sm:w-1/5 sm:py-0">
        <span className="text-4xl font-bold tracking-tighter text-[#2a2a2a] sm:text-5xl">
          {p.idx}
        </span>
      </div>

      {/* right — blurb + link */}
      <div className="flex flex-col sm:w-[46%]">
        <p className="text-sm leading-relaxed text-muted">{p.blurb}</p>
        {p.href && (
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex w-fit items-center gap-1 pt-5 text-sm text-fg underline-offset-4 hover:underline"
          >
            {p.hrefLabel ?? "GitHub"} ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <section aria-labelledby="proj-heading" className="relative w-full">
      {/* ASCII motifs bleeding off the edges — there's more to pull into view */}
      <AsciiArt
        art={SLATS}
        className="absolute -left-6 top-1/2 hidden -translate-y-1/2 text-sm xl:block"
      />
      <AsciiArt
        art={SLATS}
        className="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-sm xl:block"
      />

      <Reveal>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h1 id="proj-heading" className="text-xs uppercase tracking-[0.3em] text-muted">
              projects
            </h1>
            <p className="mt-2 text-sm text-muted sm:text-base">things I&apos;ve built.</p>
          </div>
          <a
            href="https://github.com/adeildovieira"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs text-muted transition-colors hover:text-fg sm:text-sm"
          >
            view all projects ↗
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <DragRow
          ariaLabel="Projects"
          slideClassName="basis-[90%] sm:basis-[600px]"
          slides={PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        />
      </Reveal>
    </section>
  );
}
