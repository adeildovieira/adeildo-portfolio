"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  CONSENT_EVENT,
  clearConsent,
  readConsent,
  writeConsent,
  type ConsentChoice,
} from "@/lib/consent";

/**
 * `undefined` → storage not read yet (first render, before hydration effect).
 *   Consumers must treat this exactly like "denied" for safety: never fetch,
 *   never store, and keep the banner hidden so the server HTML and the first
 *   client render match (no hydration mismatch, no banner flash for returning
 *   visitors who already chose).
 * `null` → read, but the visitor has not chosen → show the banner.
 */
type ConsentState = ConsentChoice | null | undefined;

interface ConsentContextValue {
  /** Raw state. `"granted"` is the only value that unlocks optional behaviour. */
  consent: ConsentState;
  /** True once optional behaviour (weather fetch + cache) is permitted. */
  allowed: boolean;
  accept: () => void;
  decline: () => void;
  /** Forget the choice and re-show the banner. */
  reset: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(undefined);

  // Read the persisted choice after mount (localStorage is client-only), then
  // keep in sync with changes made elsewhere in the tab.
  useEffect(() => {
    setConsent(readConsent());

    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as ConsentChoice | null;
      setConsent(detail ?? null);
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  const accept = useCallback(() => writeConsent("granted"), []);
  const decline = useCallback(() => writeConsent("denied"), []);
  const reset = useCallback(() => clearConsent(), []);

  return (
    <ConsentContext.Provider
      value={{ consent, allowed: consent === "granted", accept, decline, reset }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

/** Access consent state. Returns a safe no-op default outside the provider. */
export function useConsent(): ConsentContextValue {
  return (
    useContext(ConsentContext) ?? {
      consent: undefined,
      allowed: false,
      accept: () => {},
      decline: () => {},
      reset: () => {},
    }
  );
}
