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
      },
      _type == "sectionHero" => {
        headline, subheadline, ctaLabel, ctaHref,
        "heroImages": images[].asset->url
      },
      _type == "sectionRichText" => {
        eyebrow, heading, body
      },
      _type == "sectionImageText" => {
        heading, body,
        "imageUrl": image.asset->url
      },
      _type == "sectionImageCarousel" => {
        heading, body,
        "slides": slides[]{_key, title, caption, alt, "imageUrl": image.asset->url}
      },
      _type == "sectionCardGrid" => {
        sectionTitle, intro,
        "cards": cards[]->{_id, title, body}
      },
      _type == "sectionVolunteerCards" => {
        sectionTitle, intro, ctaLabel, ctaHref,
        "volunteerCards": cards[]{_key, title, description}
      },
      _type == "sectionDonationOpportunity" => {
        eyebrow, sectionTitle, body, ctaLabel, ctaHref
      }
    }
  }
`);
