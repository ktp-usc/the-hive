export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { eventsPageQuery, type EventsHeroSection, type EventsUpcomingSection } from "@/sanity/queries/eventsPage";
import { siteSettingsQuery, type SiteSettingsData } from "@/sanity/queries/siteSettings";
import {
  calendarDirectUrl as fallbackCalendarDirectUrl,
  calendarEmbedUrl as fallbackCalendarEmbedUrl,
} from "@/lib/calendar";
import EventsClient from "./events-client";
import GenericSectionRenderer from "@/components/generic-section-renderer";

const HANDLED = new Set(["sectionEventsHero", "sectionEventsUpcoming"]);
const GENERIC_TYPES = new Set([
  "sectionRichText", "sectionImageText", "sectionHero", "sectionImageCarousel",
  "sectionCardGrid", "sectionVolunteerCards", "sectionDonationOpportunity",
]);

export default async function EventsPage() {
  let pageData = null;
  let siteData = null;
  try {
    [{ data: pageData }, { data: siteData }] = await Promise.all([
      sanityFetch({ query: eventsPageQuery }),
      sanityFetch({ query: siteSettingsQuery }),
    ]);
  } catch {
    // Sanity fetch failed; render with static fallback
  }

  const site = siteData as SiteSettingsData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sections = ((pageData as any)?.sections ?? []) as any[];

  const heroSec = (sections.find((s) => s._type === "sectionEventsHero") ?? null) as EventsHeroSection | null;
  const upcomingSec = (sections.find((s) => s._type === "sectionEventsUpcoming") ?? null) as EventsUpcomingSection | null;
  const extraSections = sections.filter(
    (s) => GENERIC_TYPES.has(s._type) && !HANDLED.has(s._type)
  );

  const calendarDirectUrl = site?.calendarDirectUrl ?? fallbackCalendarDirectUrl;
  const calendarEmbedUrl = site?.calendarEmbedUrl ?? fallbackCalendarEmbedUrl;

  return (
    <>
      <EventsClient
        heroSec={heroSec}
        upcomingSec={upcomingSec}
        calendarDirectUrl={calendarDirectUrl}
        calendarEmbedUrl={calendarEmbedUrl}
      />
      <GenericSectionRenderer sections={extraSections} />
    </>
  );
}
