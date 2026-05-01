"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { useEffect, useState } from "react";

import { useLanguage, useSiteCopy } from "@/components/language-provider";
import { resolveLocalized } from "@/lib/resolved-localized";
import {
  type UpcomingCalendarEvent,
} from "@/lib/calendar";
import type { EventsHeroSection, EventsUpcomingSection } from "@/sanity/queries/eventsPage";

function r(value: unknown, language: "en" | "es-MX", fallback: string): string {
  return resolveLocalized(value, language, fallback);
}

function formatEventDate(
  event: UpcomingCalendarEvent,
  locale: string,
  allDayLabel: string
) {
  const start = new Date(event.start);
  const end = event.end ? new Date(event.end) : null;

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/New_York",
  });

  if (event.allDay) {
    return {
      date: dateFormatter.format(start),
      time: allDayLabel,
    };
  }

  const timeFormatter = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/New_York",
  });

  return {
    date: dateFormatter.format(start),
    time:
      end && end.getTime() > start.getTime()
        ? `${timeFormatter.format(start)} - ${timeFormatter.format(end)}`
        : timeFormatter.format(start),
  };
}

function UpcomingEventsSection({
  upcomingSec,
  calendarDirectUrl,
}: {
  upcomingSec: EventsUpcomingSection | null;
  calendarDirectUrl: string;
}) {
  const copy = useSiteCopy();
  const { language } = useLanguage();
  const [events, setEvents] = useState<UpcomingCalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function loadEvents() {
      try {
        const response = await fetch("/api/events/upcoming");
        const payload = (await response.json()) as {
          events?: UpcomingCalendarEvent[];
        };
        if (isActive) setEvents(payload.events ?? []);
      } catch {
        if (isActive) setEvents([]);
      } finally {
        if (isActive) setIsLoading(false);
      }
    }

    void loadEvents();
    return () => { isActive = false; };
  }, []);

  const locale = language === "es-MX" ? "es-MX" : "en-US";

  const eyebrow = r(upcomingSec?.eyebrow, language, copy.events.upcomingEyebrow);
  const title = r(upcomingSec?.title, language, copy.events.upcomingTitle);
  const body = r(upcomingSec?.body, language, copy.events.upcomingBody);
  const openCalendarLabel = r(upcomingSec?.openCalendarLabel, language, copy.events.openCalendar);
  const loadingLabel = r(upcomingSec?.loadingLabel, language, copy.events.upcomingLoading);
  const emptyLabel = r(upcomingSec?.emptyLabel, language, copy.events.upcomingEmpty);
  const privacyNote = r(upcomingSec?.privacyNote, language, copy.events.upcomingPrivacyNote);
  const ctaLabel = r(upcomingSec?.ctaLabel, language, copy.events.upcomingCta);
  const allDayLabel = r(upcomingSec?.allDayLabel, language, copy.events.allDayLabel);

  return (
    <section className="site-surface px-4 sm:px-6">
      <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-[linear-gradient(135deg,rgba(29,151,156,0.1),rgba(243,197,6,0.13),rgba(236,116,36,0.12))] p-[1px] shadow-[0_24px_70px_rgba(32,42,69,0.1)]">
        <div className="rounded-[calc(2rem-1px)] bg-white px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-4 border-b border-black/8 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="site-subheading">{eyebrow}</p>
              <h2 className="site-heading">{title}</h2>
              {body ? (
                <p className="site-copy">{body}</p>
              ) : null}
            </div>
            <a
              href={calendarDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#1d979c]/18 bg-[#1d979c]/8 px-4 py-2 text-sm font-semibold text-[#155d61] transition hover:bg-[#1d979c]/14"
            >
              {openCalendarLabel}
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          {isLoading ? (
            <div className="pt-6">
              <p className="pb-4 text-sm font-medium text-[#5b6470]">
                {loadingLabel}
              </p>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="site-card min-h-[220px] animate-pulse bg-[#f8fafb] p-6"
                  />
                ))}
              </div>
            </div>
          ) : events.length > 0 ? (
            <div className="grid gap-4 pt-6 md:grid-cols-2 xl:grid-cols-4">
              {events.map((event) => {
                const { date, time } = formatEventDate(event, locale, allDayLabel);
                return (
                  <a
                    key={event.id}
                    href={event.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-card group flex h-full flex-col gap-6 p-6 no-underline"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="rounded-2xl bg-[#f4faf9] p-3 text-[#1d979c]">
                        <CalendarDays className="size-6" />
                      </div>
                      <ArrowUpRight className="mt-1 size-4 text-[#1d979c] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1d979c]">
                        {date}
                      </p>
                      <h3 className="font-heading text-2xl font-semibold leading-tight text-[#223040]">
                        {event.title}
                      </h3>
                      {event.titleIsPrivate ? (
                        <p className="text-sm leading-6 text-[#6c7583]">
                          {privacyNote}
                        </p>
                      ) : null}
                    </div>
                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-black/8 pt-4 text-sm font-medium text-[#4f5b69]">
                      <span className="inline-flex items-center gap-2">
                        <Clock3 className="size-4 text-[#ec7424]" />
                        {time}
                      </span>
                      <span className="text-[#155d61]">{ctaLabel}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="pt-6">
              <div className="site-card p-6 text-center text-[#5b6470]">
                {emptyLabel}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function EventsClient({
  heroSec,
  upcomingSec,
  calendarDirectUrl,
  calendarEmbedUrl,
}: {
  heroSec: EventsHeroSection | null;
  upcomingSec: EventsUpcomingSection | null;
  calendarDirectUrl: string;
  calendarEmbedUrl: string;
}) {
  const copy = useSiteCopy();
  const { language } = useLanguage();

  const eyebrow = r(heroSec?.eyebrow, language, copy.events.eyebrow);
  const title = r(heroSec?.title, language, copy.events.title);
  const body = r(heroSec?.body, language, copy.events.body);
  const openCalendarLabel = r(heroSec?.openCalendarLabel, language, copy.events.openCalendar);
  const askAboutEventLabel = r(heroSec?.askAboutEventLabel, language, copy.events.askAboutEvent);
  const iframeTitle = r(heroSec?.calendarIframeTitle, language, copy.events.iframeTitle);

  return (
    <main className="site-page">
      <div className="site-page--narrow space-y-10">
        <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <p className="site-eyebrow">{eyebrow}</p>
            <h1 className="site-title mt-4">{title}</h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-7 text-white/85 sm:text-xl">
              {body}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={calendarDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="site-button-accent"
              >
                {openCalendarLabel}
              </a>
              <Link href="/contact" className="site-button-accent">
                {askAboutEventLabel}
              </Link>
            </div>
          </div>
        </section>

        <UpcomingEventsSection
          upcomingSec={upcomingSec}
          calendarDirectUrl={calendarDirectUrl}
        />

        <section className="site-surface p-4 sm:p-6">
          <div className="overflow-hidden rounded-[1.5rem] border border-black/8 bg-white p-2 shadow-[0_20px_70px_rgba(32,42,69,0.08)] sm:p-4">
            <div className="relative min-h-[700px] overflow-hidden rounded-[1.25rem] bg-[#f8fafb]">
              <iframe
                src={calendarEmbedUrl}
                title={iframeTitle}
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
