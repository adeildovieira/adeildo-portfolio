"use client";

import { useConsent } from "./ConsentProvider";

/**
 * Footer affordance to revisit the privacy choice. Re-shows the consent banner
 * so the visitor can flip their decision at any time.
 */
export function PrivacyToggle() {
  const { reset } = useConsent();

  return (
    <button
      type="button"
      onClick={reset}
      aria-label="Review privacy choices"
      className="tracking-wide text-muted transition-colors duration-200 hover:text-fg"
    >
      privacy
    </button>
  );
}
