import { Reveal } from "@/components/terminal/Reveal";

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
    tagline: "Microcontroller + OpenAI API workout coach",
    blurb:
      "Gym rep counters don't say much. RepSense is a real-time, on-device coach that uses an ESP32-S3 and IMU data to analyze bench-press form and provide feedback - rep count, imbalance, tempo, rest quality - via the OpenAI API.",
    stack: ["C", "ESP32", "IMU", "OpenAI API", "IoT"],
    href: "https://github.com/adeildovieira/RepSense-IoT-and-AI-Gym-Helper",
  },
  {
    idx: "02",
    title: "Can LLMs Unlearn?",
    tagline: "Evaluating ROME & MEMIT Knowledge Editing Across GPT-2 Models",
    blurb:
      "Tested whether an AI can be made to forget or correct specific facts without full retraining, a core question for privacy and the 'right to be forgotten.' Led the evaluation of two leading editing methods (ROME and MEMIT, Meng et al.) across GPT-2 model sizes, measuring whether edits worked, stayed contained, survived rephrasing, and kept the model fluent. Found that the smallest model corrupted unrelated facts and the largest failed to hold edits when they were rephrased, while mid-size models performed best",
    stack: ["PyTorch", "Python", "NLP", "ML", "LLMs"],
    href: "https://docs.google.com/presentation/d/10Vp9TeQUrAgbz3R3MHKGxuFuVl-hxv3zXkx0wBsSz0M/edit?slide=id.p#slide=id.p",
    hrefLabel: "Presentation",
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
      "A convolutional neural network that sorts waste imagery into recyclables, organics, and landfill - trained for sustainable waste-management workflows.",
    stack: ["Python", "TensorFlow", "CNN"],
    href: "https://github.com/adeildovieira/ML-Class-Final-Project",
  },
  {
    idx: "05",
    title: "DartHub",
    tagline: "Star Wars to-do app",
    blurb:
      "A Flutter + Firebase to-do app with authentication and real-time sync, a playful Dark Side aesthetic, and Android + Web support. Team project.",
    stack: ["Flutter", "Dart", "Firebase", "Android Studio"],
    href: "https://github.com/adeildovieira/StarWars-To-Do-App-Flutter",
  },
  {
    idx: "06",
    title: "This Portfolio",
    tagline: "the site you're on",
    blurb:
      "Retro-terminal, monospace, no-scroll. Next.js + TypeScript + Tailwind, embla drag-to-pull, live Open-Meteo weather, static-exported - built on a main/prod branch strategy with semantic versioning.",
    stack: ["Cloudflare", "Next.js", "TypeScript", "Tailwind", "embla"],
    href: "https://github.com/adeildovieira/adeildo-portfolio",
  },
];

function ProjectItem({ p }: { p: Project }) {
  return (
    // Increased gap from gap-2 to gap-3
    <article className="flex flex-col gap-3">
      {/* Header: Title + Tagline on left, Link on right */}
      <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        {/* Bumped title from text-sm to text-base, sm:text-base to sm:text-lg */}
        <h2 className="text-base font-medium text-fg sm:text-lg">
          {/* Bumped index from text-xs to text-sm */}
          <span className="mr-3 font-mono text-sm text-muted/40">{p.idx}</span>
          {p.title} <span className="font-normal text-muted">— {p.tagline}</span>
        </h2>
        {p.href && (
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            // Bumped link from text-xs to text-sm
            className="mt-1 text-sm text-muted transition-colors duration-200 hover:text-fg hover:underline underline-offset-4 sm:mt-0"
          >
            {p.hrefLabel ?? "GitHub"} ↗
          </a>
        )}
      </header>
      
      {/* Bumped blurb description to [15px] and sm:text-base */}
      <p className="text-[15px] leading-relaxed text-muted sm:text-base">
        {p.blurb}
      </p>
      
      {/* Bumped tags from text-[11px] to text-xs, increased top padding */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-2 text-xs text-muted/80">
        {p.stack.map((s, i) => (
          <span key={s} className="flex items-center gap-2">
            {s}
            {i < p.stack.length - 1 && <span className="text-muted/30">•</span>}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    // Added mx-auto and max-w-4xl to center and bound the section
    <section aria-labelledby="proj-heading" className="mx-auto w-full max-w-4xl">
      <Reveal>
        <div className="mb-12 flex items-center justify-between border-b border-line pb-4">
          {/* Bumped section heading from text-xs to text-sm */}
          <h1 id="proj-heading" className="text-sm uppercase tracking-[0.3em] text-muted">
            projects
          </h1>
          
          {/* Bumped main link from text-xs to text-sm */}
          <a
            href="https://github.com/adeildovieira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors duration-200 hover:text-fg hover:underline underline-offset-4"
          >
            view all projects ↗
          </a>
        </div>
      </Reveal>

      {/* Increased row gap from gap-10 to gap-12 */}
      <div className="flex flex-col gap-12">
        {PROJECTS.map((p, index) => (
          <Reveal key={p.title} delay={0.1 + index * 0.1}>
            <ProjectItem p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}