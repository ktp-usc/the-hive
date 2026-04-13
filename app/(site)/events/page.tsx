export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { eventsPageQuery, type EventsHeroSection, type EventsUpcomingSection } from "@/sanity/queries/eventsPage";
import { siteSettingsQuery, type SiteSettingsData } from "@/sanity/queries/siteSettings";
import {
  calendarDirectUrl as fallbackCalendarDirectUrl,
  calendarEmbedUrl as fallbackCalendarEmbedUrl,
} from "@/lib/calendar";
import EventsClient from "./events-client";

export default async function EventsPage() {
  const [{ data: pageData }, { data: siteData }] = await Promise.all([
    sanityFetch({ query: eventsPageQuery }),
    sanityFetch({ query: siteSettingsQuery }),
  ]);

  const site = siteData as SiteSettingsData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sections = (pageData?.sections ?? []) as any[];

  const heroSec = (sections.find((s) => s._type === "sectionEventsHero") ?? null) as EventsHeroSection | null;
  const upcomingSec = (sections.find((s) => s._type === "sectionEventsUpcoming") ?? null) as EventsUpcomingSection | null;

  const calendarDirectUrl = site?.calendarDirectUrl ?? fallbackCalendarDirectUrl;
  const calendarEmbedUrl = site?.calendarEmbedUrl ?? fallbackCalendarEmbedUrl;

  return (
    <EventsClient
      heroSec={heroSec}
      upcomingSec={upcomingSec}
      calendarDirectUrl={calendarDirectUrl}
      calendarEmbedUrl={calendarEmbedUrl}
    />
  );
}
