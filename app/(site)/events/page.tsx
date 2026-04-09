"use client";

import Link from "next/link";

import { useSiteCopy } from "@/components/language-provider";

const calendarEmbedUrl =
  "https://calendar.google.com/calendar/embed?src=hello%40thehivecc.org&ctz=America%2FNew_York";

const calendarDirectUrl =
  "https://calendar.google.com/calendar/u/0?cid=aGVsbG9AdGhlaGl2ZWNjLm9yZw";

export default function EventsPage() {
  const copy = useSiteCopy();

  return (
    <main className="site-page">
      <div className="site-page--narrow space-y-10">
        <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <p className="site-eyebrow">{copy.events.eyebrow}</p>
            <h1 className="site-title mt-4">{copy.events.title}</h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-7 text-white/85 sm:text-xl">
              {copy.events.body}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={calendarDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="site-button-accent"
              >
                {copy.events.openCalendar}
              </a>
              <Link href="/contact" className="site-button-accent">
                {copy.events.askAboutEvent}
              </Link>
            </div>
          </div>
        </section>

        <section className="site-surface p-4 sm:p-6">
          <div className="overflow-hidden rounded-[1.5rem] border border-black/8 bg-white p-2 shadow-[0_20px_70px_rgba(32,42,69,0.08)] sm:p-4">
            <div className="relative min-h-[700px] overflow-hidden rounded-[1.25rem] bg-[#f8fafb]">
              <iframe
                src={calendarEmbedUrl}
                title={copy.events.iframeTitle}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}