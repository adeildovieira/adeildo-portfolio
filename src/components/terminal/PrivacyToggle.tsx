"use client";

import { useConsent } from "./ConsentProvider";

/**
 * Footer affordance to revisit the privacy choice.
 *
 * `reset` clears the stored decision, which re-shows the consent banner and
 * — because consent gates it — hides the weather readout until the visitor
 * answers again. The label says so. It previously read "Review privacy
 * choices", which promised inspection while performing a deletion.
 */
export function PrivacyToggle() {
  const { reset } = useConsent();

  return (
    <button
      type="button"
      onClick={reset}
      aria-label="Change your privacy choice — reopens the consent prompt"
      className="inline-flex min-h-11 items-center tracking-wide text-muted transition-colors duration-200 hover:text-fg"
    >
      privacy
    </button>
  );
}
