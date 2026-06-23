/**
 * Privacy consent — the single source of truth for whether the visitor has
 * opted in to the one optional, privacy-relevant behaviour on the site:
 * loading live weather from a third-party API (Open-Meteo), which reveals the
 * visitor's IP to that provider, plus caching the result in sessionStorage.
 *
 * The site itself sets NO tracking cookies and stores NO personal data, so this
 * is the only thing worth gating. The decision is opt-in by default: nothing is
 * fetched or stored until the visitor explicitly accepts.
 *
 * The choice itself is kept in localStorage. Persisting a strictly-necessary
 * preference like "the user already answered the consent prompt" is exempt from
 * consent requirements under ePrivacy/GDPR, so it is safe to store regardless.
 */

export type ConsentChoice = "granted" | "denied";

/** localStorage key holding the persisted choice. */
export const CONSENT_KEY = "ade:privacy-consent";

/** Event dispatched on the window whenever the choice changes, so the banner,
 *  the weather widget, and the footer toggle all stay in sync within a tab. */
export const CONSENT_EVENT = "ade:consent-change";

/** Read the persisted choice. Returns null if undecided or unavailable. */
export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    // localStorage can throw in private-mode / blocked-storage contexts.
    return null;
  }
}

/** Persist a choice and notify listeners in this tab. */
export function writeConsent(choice: ConsentChoice): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    /* storage blocked — fall through; the in-memory event still fires */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
}

/** Forget the choice so the banner is shown again (the footer "privacy" link). */
export function clearConsent(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(CONSENT_KEY);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}
