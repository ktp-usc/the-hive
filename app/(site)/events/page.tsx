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
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#fff8ea_0%,#f7f2ea_40%,#edf4f7_100%)] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/85 shadow-[0_30px_120px_rgba(32,42,69,0.10)] backdrop-blur">
          <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
            <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-[#f3c506]/20 blur-3xl" />
            <div className="absolute right-0 top-8 h-40 w-40 rounded-full bg-[#1d979c]/15 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d8794a]">
                {copy.events.eyebrow}
              </p>
              <h1 className="mt-4 font-[var(--font-heading)] text-4xl leading-tight text-slate-950 sm:text-5xl">
                {copy.events.title}
              </h1>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                {copy.events.body}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={calendarDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-[#1d979c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#187d81]"
                >
                  {copy.events.openCalendar}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-[#1d979c]/25 bg-white px-6 py-3 text-sm font-semibold text-[#1d979c] transition hover:border-[#1d979c] hover:bg-[#1d979c]/5"
                >
                  {copy.events.askAboutEvent}
                </Link>
              </div>
            </div>
          </div>

          <div className="px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
            <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white p-2 shadow-[0_20px_70px_rgba(32,42,69,0.08)] sm:p-4">
              <div className="relative min-h-[700px] overflow-hidden rounded-[1.5rem] bg-[#f8fafb]">
                <iframe
                  src={calendarEmbedUrl}
                  title={copy.events.iframeTitle}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
