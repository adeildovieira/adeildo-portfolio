import { Reveal } from "@/components/terminal/Reveal";
import { Panel } from "@/components/terminal/Panel";
import { AsciiArt, STARFIELD } from "@/components/terminal/AsciiArt";

const FACTS = [
  "Duke University, B.S. Computer Science, class of 2026.",
  "From Alagoas, Brazil / roots in the Nordeste Sertão.",
  "Fluent in Portuguese and English.",
  "Interests: MPB and regional Nordeste music, literature, astronomy, film.",
  "Cares about digital literacy/digital divide in Brazil's interior (Espaço 4.0).",
];

export default function AboutPage() {
  return (
    <section
      aria-labelledby="about-heading"
      className="grid w-full gap-5 sm:gap-6 lg:grid-cols-[1.5fr_1fr]"
    >
      <Reveal>
        <Panel label="about me" className="h-full p-6 sm:p-8">
          <h1 id="about-heading" className="sr-only">
            About me
          </h1>
          <p className="text-sm text-muted">$ who_am_i</p>
          <p className="mt-2 text-xl font-bold sm:text-2xl">Adeildo Vieira</p>

          <ul className="mt-7 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
            {FACTS.map((fact, i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden="true" className="select-none text-fg">
                  ›
                </span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </Reveal>

      <Reveal delay={0.1} className="hidden lg:block">
        <Panel className="flex h-full items-center justify-center p-6">
          <AsciiArt art={STARFIELD} className="text-sm" />
        </Panel>
      </Reveal>
    </section>
  );
}
