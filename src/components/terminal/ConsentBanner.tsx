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
          // A slim full-width bar sitting just above the footer, rather than a
          // tall centred panel. The panel form covered the hero wordmark and
          // the only call to action on the landing page — the first thing a
          // visitor saw was a privacy notice, not the name.
          className="fixed inset-x-4 bottom-20 z-50 mx-auto flex max-w-4xl flex-col gap-3 border border-line bg-bg/95 p-4 backdrop-blur-sm outline-none sm:flex-row sm:items-center sm:justify-between sm:gap-6"
        >
          <span
            id="consent-title"
            className="absolute -top-[7px] left-4 bg-bg px-2 text-[10px] uppercase tracking-[0.2em] text-muted"
          >
            privacy
          </span>

          {/*
            This copy states only what the code actually does. The previous
            version claimed Cloudflare Web Analytics was running and that the
            snippet was "excluded entirely for eu visitors" — neither is true:
            no analytics snippet exists in this codebase, the CDN-injected
            beacon is blocked by this site's own CSP, and there is no
            region-detection logic anywhere. A privacy notice that describes
            behaviour the code does not implement is worse than no notice.
          */}
          <p id="consent-body" className="text-xs leading-relaxed text-muted">
            <span className="text-fg">no cookies, no analytics.</span> the only
            third-party request is the footer&apos;s live weather — open-meteo,
            for <span className="text-fg">my</span> location (durham, nc), not
            yours. it sees your ip. declining just leaves the weather off.
          </p>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={accept}
              className="inline-flex min-h-11 items-center border border-line px-4 text-xs tracking-wide text-muted transition-colors duration-200 hover:border-line-bright hover:text-fg"
            >
              [ accept ]
            </button>
            <button
              type="button"
              onClick={decline}
              className="inline-flex min-h-11 items-center border border-line px-4 text-xs tracking-wide text-muted transition-colors duration-200 hover:border-line-bright hover:text-fg"
            >
              [ decline ]
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
