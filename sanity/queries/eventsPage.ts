import { defineQuery } from "next-sanity";

export type EventsHeroSection = {
  _type: "sectionEventsHero";
  eyebrow?: string | null;
  title?: string | null;
  body?: string | null;
  openCalendarLabel?: string | null;
  askAboutEventLabel?: string | null;
  calendarIframeTitle?: string | null;
};

export type EventsUpcomingSection = {
  _type: "sectionEventsUpcoming";
  eyebrow?: string | null;
  title?: string | null;
  openCalendarLabel?: string | null;
  loadingLabel?: string | null;
  emptyLabel?: string | null;
  privacyNote?: string | null;
  ctaLabel?: string | null;
  allDayLabel?: string | null;
};

export type EventsPageSection = EventsHeroSection | EventsUpcomingSection;

export type EventsPageData = {
  sections?: EventsPageSection[];
} | null;

export const eventsPageQuery = defineQuery(`
  *[_type == "page" && slug.current == "events"][0]{
    sections[]{
      _key,
      _type,
      _type == "sectionEventsHero" => {
        eyebrow, title, body, openCalendarLabel, askAboutEventLabel, calendarIframeTitle
      },
      _type == "sectionEventsUpcoming" => {
        eyebrow, title, openCalendarLabel, loadingLabel, emptyLabel, privacyNote, ctaLabel, allDayLabel
      }
    }
  }
`);
