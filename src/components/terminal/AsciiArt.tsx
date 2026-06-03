/**
 * Muted ASCII-art flourishes. Decorative only (aria-hidden), pointer-events
 * off, very low contrast so they read as texture bleeding off the edges.
 */
export function AsciiArt({ art, className = "" }: { art: string; className?: string }) {
  return (
    <pre
      aria-hidden="true"
      className={`pointer-events-none select-none whitespace-pre font-mono leading-[1.05] text-[#1c1c1c] ${className}`}
    >
      {art}
    </pre>
  );
}

/** Vertical slat motif — bleeds off the carousel edges so it reads as "more to pull." */
export const SLATS = `|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |`;

/** Compact star/asterisk field for hero + about flourishes. */
export const STARFIELD = `  .   *      .
*      .  *    .
   .      *
.    *   .    *
   *   .     .`;

/** Coordinate tick motif. */
export const TICKS = `+----+----+
|    |    |
+----+----+
|    |    |
+----+----+`;
