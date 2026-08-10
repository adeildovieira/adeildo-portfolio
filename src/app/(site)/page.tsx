import { Reveal } from "@/components/terminal/Reveal";
import { AsciiArt, STARFIELD } from "@/components/terminal/AsciiArt";

/**
 * revamped as a sleek, terminal-inspired landing page with a starfield background, oversized monospaced name, and a subtle developer-style
 * reason: matches more my vibe
 */

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center text-center">
      <AsciiArt art={STARFIELD} className="mb-7 text-[10px] sm:mb-9 sm:text-xs" />

      <Reveal>
        <h1 className="text-left text-[clamp(2.5rem,7vw,5.5rem)] font-bold lowercase leading-[0.95] tracking-[0.04em]">
          a<span className="dev">de</span>ildo
          <br />
          {/*
            The second line is indented by an invisible copy of "ad" — exactly
            the glyphs that precede the "e" on the line above. Reserving their
            real rendered advance puts the "v" directly under the "e" at every
            size, so the accent reads downward as d-e-v.

            A ch-based padding cannot do this. 1ch is the width of "0", and
            Space Grotesk is proportional, so the old pl-[1.5ch]/[2.5ch] landed
            the "v" +29px right of the "e" at 1440 and 13px left of it at 390.
            visibility:hidden keeps the box but drops it from the a11y tree.
          */}
          <span className="inline-block">
            <span aria-hidden="true" className="invisible">
              ad
            </span>
            <span className="dev">v</span>ieira
          </span>
        </h1>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-6 text-xs text-muted sm:mt-9 sm:text-sm md:text-base">
          {"/* duke alum · software engineer */"}
        </p>
      </Reveal>

      <Reveal delay={0.24}>
        <a
          href="/Adeildo_Vieira_Silva_Neto_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center text-xs text-muted underline-offset-4 transition-colors duration-200 hover:text-fg hover:underline sm:mt-6"
        >
          [ view resume ]
        </a>
      </Reveal>
    </div>
  );
}