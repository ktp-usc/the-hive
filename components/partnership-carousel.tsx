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
};

export default function PartnershipCarousel({
  slides,
  autoAdvanceMs = 2600,
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

  return (
    <div className="site-panel overflow-hidden">
      <div className="relative aspect-[4/5] min-h-[24rem] w-full bg-hive-blue/10 sm:aspect-[16/10] lg:min-h-[30rem]">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.key}
              aria-hidden={!isActive}
              className={[
                "absolute inset-0 transition-all duration-700 ease-out",
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
                  "object-cover transition-transform duration-700 ease-out",
                  isActive ? "scale-100" : "scale-[1.03]",
                ].join(" ")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-transparent" />
            </div>
          );
        })}

        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-5 p-5 text-white sm:p-8">
          <div className="max-w-2xl rounded-3xl bg-slate-950/45 p-5 backdrop-blur-sm">
            <p className="site-subheading !text-white/80">Partnership Example</p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{slides[activeIndex].title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              {slides[activeIndex].caption}
            </p>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
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
                      isActive ? "w-10 bg-hive-yellow" : "w-2.5 bg-white/55 hover:bg-white/80",
                    ].join(" ")}
                  />
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => moveBy(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/12 text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => moveBy(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/12 text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
