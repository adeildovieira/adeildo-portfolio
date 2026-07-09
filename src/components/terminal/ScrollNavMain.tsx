"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import { LINKS } from "./Nav";

const ROUTES = LINKS.map((l) => l.href);

// Cooldown after a triggered nav — long enough to absorb a trackpad's
// momentum tail so one flick can't cascade through multiple routes.
const LOCK_MS = 900;
const WHEEL_THRESHOLD = 30;
const SWIPE_THRESHOLD = 60;

/**
 * The scrollable content band for the four no-scroll routes. Reaching the
 * top/bottom edge and continuing to scroll or swipe advances to the
 * previous/next route in Nav's order — a second, instinct-discoverable way
 * to move through the site alongside clicking the nav links.
 */
export function ScrollNavMain({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const locked = useRef(false);
  const touchStartY = useRef<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const index = ROUTES.indexOf(pathname);
    if (index === -1) return;

    // The main element persists across routes (only its children swap), so
    // scrollTop wouldn't otherwise reset — without this a route reached via
    // scroll-past-bottom from a tall page could mount already scrolled down.
    el.scrollTop = 0;

    const go = (dir: 1 | -1) => {
      if (locked.current) return;
      const next = ROUTES[index + dir];
      if (!next) return;
      locked.current = true;
      router.push(next);
      window.setTimeout(() => {
        locked.current = false;
      }, LOCK_MS);
    };

    const atTop = () => el.scrollTop <= 0;
    const atBottom = () =>
      el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (e.deltaY > WHEEL_THRESHOLD && atBottom()) go(1);
      else if (e.deltaY < -WHEEL_THRESHOLD && atTop()) go(-1);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0]?.clientY ?? null;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const startY = touchStartY.current;
      touchStartY.current = null;
      if (startY === null) return;
      const dy = startY - (e.changedTouches[0]?.clientY ?? startY);
      if (dy > SWIPE_THRESHOLD && atBottom()) go(1);
      else if (dy < -SWIPE_THRESHOLD && atTop()) go(-1);
    };

    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [pathname, router]);

  return (
    <main
      ref={ref}
      className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain"
    >
      <div className="mx-auto flex min-h-full w-full max-w-6xl items-center justify-center px-5 py-20 sm:px-8 sm:py-24">
        {children}
      </div>
    </main>
  );
}
