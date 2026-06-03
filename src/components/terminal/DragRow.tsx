"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, ReactNode, KeyboardEvent } from "react";

/**
 * Drag-to-pull horizontal row (embla): mouse drag + touch swipe with momentum
 * (dragFree), keyboard arrow support, and proper region/slide aria roles.
 * Used by both the projects carousel and the experience panel row.
 */
export function DragRow({
  slides,
  ariaLabel,
  slideClassName = "",
}: {
  slides: ReactNode[];
  ariaLabel: string;
  slideClassName?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Pull initial scroll-capability flags from embla (an external store) once
    // it has initialized — the intended use of an effect, not cascading state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    sync();
    emblaApi.on("select", sync);
    emblaApi.on("reInit", sync);
    return () => {
      emblaApi.off("select", sync);
      emblaApi.off("reInit", sync);
    };
  }, [emblaApi, sync]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      emblaApi?.scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      emblaApi?.scrollNext();
    }
  };

  const scrollable = canPrev || canNext;

  return (
    <div className="w-full">
      <div
        ref={emblaRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="cursor-grab overflow-hidden active:cursor-grabbing focus:outline-none focus-visible:ring-1 focus-visible:ring-[#444]"
      >
        <div className="flex gap-4 sm:gap-5">
          {slides.map((slide, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              className={`min-w-0 shrink-0 ${slideClassName}`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-xs text-muted">
        <span className="select-none tracking-wide">drag to pull →</span>
        {scrollable && (
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Previous"
              className="px-2 py-1 transition-colors hover:text-fg disabled:opacity-25"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Next"
              className="px-2 py-1 transition-colors hover:text-fg disabled:opacity-25"
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
