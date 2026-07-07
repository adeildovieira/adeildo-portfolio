"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useConsent } from "./ConsentProvider";

/**
 * Privacy consent prompt. Shown only while the visitor is undecided
 * (`consent === null`). Opt-in: until they accept, the weather widget makes no
 * third-party request and writes nothing to storage.
 *
 * Both actions carry equal visual weight on purpose — a consent prompt should
 * not nudge ("dark pattern") toward accepting.
 */
export function ConsentBanner() {
  const { consent, accept, decline } = useConsent();
  const show = consent === null;
  const ref = useRef<HTMLDivElement>(null);

  // Move focus to the prompt when it appears so keyboard / screen-reader users
  // are taken to it (the container, not a button, so neither action is preselected).
  useEffect(() => {
    if (show) ref.current?.focus();
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          ref={ref}
          role="dialog"
          aria-modal="false"
          aria-labelledby="consent-title"
          aria-describedby="consent-body"
          tabIndex={-1}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-16 left-1/2 z-50 w-[min(100%-2rem,460px)] -translate-x-1/2 border border-line bg-bg/95 p-4 backdrop-blur-sm outline-none sm:p-5"
        >
          <span
            id="consent-title"
            className="absolute -top-[7px] left-4 bg-bg px-2 text-[10px] uppercase tracking-[0.2em] text-muted"
          >
            privacy
          </span>

          <p
            id="consent-body"
            className="text-xs leading-relaxed text-muted sm:text-[13px]"
          >
            this site sets <span className="text-fg">no tracking cookies</span>{" "}
            and stores <span className="text-fg">no personal data</span>. the
            footer&apos;s live weather is{" "}
            <span className="text-fg">my</span> location (durham, nc) — not
            yours. loading it calls a third-party api (open-meteo), which sees
            your ip, and caches the result for this browser session.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={accept}
              className="border border-line px-3 py-1.5 text-xs tracking-wide text-muted transition-colors duration-200 hover:border-line-bright hover:text-fg"
            >
              [ accept ]
            </button>
            <button
              type="button"
              onClick={decline}
              className="border border-line px-3 py-1.5 text-xs tracking-wide text-muted transition-colors duration-200 hover:border-line-bright hover:text-fg"
            >
              [ decline ]
            </button>
          </div>

          <p className="mt-3 text-[10px] text-muted">
            change anytime via{" "}
            <span className="text-fg/70">privacy</span> in the footer.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
