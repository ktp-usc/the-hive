"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useState, startTransition } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type PartnershipCarouselSlide = {
  key: string;
  imageUrl: string;
  alt: string;
  title: string;
  caption: string;
};

type PartnershipCarouselProps = {
  slides: PartnershipCarouselSlide[];
  autoAdvanceMs?: number;
    partnershipExampleLabel?: string;
};

export default function PartnershipCarousel({
  slides,
  autoAdvanceMs = 2600,
                                                partnershipExampleLabel = "Partnership Example",
}: PartnershipCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    startTransition(() => {
      setActiveIndex(index);
    });
  };

  const moveBy = (direction: number) => {
    startTransition(() => {
      setActiveIndex((currentIndex) => {
        const nextIndex = currentIndex + direction;

        if (nextIndex < 0) {
          return slides.length - 1;
        }

        if (nextIndex >= slides.length) {
          return 0;
        }

        return nextIndex;
      });
    });
  };

  const advanceSlide = useEffectEvent(() => {
    moveBy(1);
  });

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      advanceSlide();
    }, autoAdvanceMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [activeIndex, autoAdvanceMs, slides.length]);

  if (!slides.length) {
    return null;
  }

  const active = slides[activeIndex];

  return (
    <div className="site-panel overflow-hidden">
      <div className="relative aspect-video min-h-50 w-full bg-muted sm:min-h-64 md:min-h-72">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.key}
              aria-hidden={!isActive}
              className={[
                "absolute inset-0 transition-opacity duration-700 ease-out",
                isActive
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0",
              ].join(" ")}
            >
              <Image
                src={slide.imageUrl}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 80rem"
                className={[
                  "object-contain object-center p-2 transition-transform duration-700 ease-out sm:p-3",
                  isActive ? "scale-100" : "scale-[1.02]",
                ].join(" ")}
              />
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 border-t border-[rgba(29,151,156,0.12)] px-4 py-5 sm:gap-5 sm:px-6 sm:py-6">
        <div>
            <p className="site-subheading text-hive-orange!">{partnershipExampleLabel}</p>          <h3 className="mt-1 text-xl font-semibold text-foreground sm:text-2xl">
            {active.title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {active.caption}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={slide.key}
                  type="button"
                  aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                  aria-pressed={isActive}
                  onClick={() => goToSlide(index)}
                  className={[
                    "h-2.5 rounded-full transition-all duration-300",
                    isActive ? "w-10 bg-hive-yellow" : "w-2.5 bg-hive-blue/25 hover:bg-hive-blue/40",
                  ].join(" ")}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:shrink-0">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => moveBy(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hive-blue/20 bg-white text-hive-blue shadow-sm transition hover:bg-hive-blue/5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => moveBy(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hive-blue/20 bg-white text-hive-blue shadow-sm transition hover:bg-hive-blue/5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
