import { defineQuery } from "next-sanity";

export type SupportServiceCard = {
  _key?: string;
  cardId?: string;
  title?: string;
  subtitle?: string | null;
  summary?: string;
  imageUrl?: string | null;
  details?: string[] | null;
  note?: string | null;
  noteLinkLabel?: string | null;
  noteLinkHref?: string | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
};

export type SupportResourceButton = {
  _key?: string;
  label?: string;
  href?: string;
};

type SupportBaseSection = { _key?: string; _type: string };

export type SupportHeroSection = SupportBaseSection & {
  _type: "sectionSupportHero";
  eyebrow?: string;
  title?: string;
  body?: string;
};

export type SupportIntroSection = SupportBaseSection & {
  _type: "sectionSupportIntro";
  eyebrow?: string;
  title?: string;
  body?: string;
  imageUrl?: string | null;
};

export type SupportServicesSection = SupportBaseSection & {
  _type: "sectionSupportServices";
  heading?: string;
  languageNote?: string | null;
  cards?: SupportServiceCard[];
};

export type SupportAccessibilitySection = SupportBaseSection & {
  _type: "sectionSupportAccessibility";
  eyebrow?: string;
  title?: string;
  body?: string;
  imageUrl?: string | null;
};

export type SupportResourcesSection = SupportBaseSection & {
  _type: "sectionSupportResources";
  title?: string;
  body?: string;
  buttons?: SupportResourceButton[];
};

export type SupportPageSection =
  | SupportHeroSection
  | SupportIntroSection
  | SupportServicesSection
  | SupportAccessibilitySection
  | SupportResourcesSection;

export type SupportPageData = {
  title?: string;
  sections?: SupportPageSection[];
} | null;

export const supportPageQuery = defineQuery(`
  *[_type == "page" && slug.current == "support"][0]{
    title,
    sections[]{
      _key,
      _type,
      _type == "sectionSupportHero" => {
        eyebrow, title, body
      },
      _type == "sectionSupportIntro" => {
        eyebrow, title, body,
        "imageUrl": image.asset->url
      },
      _type == "sectionSupportServices" => {
        heading, languageNote,
        cards[]{
          _key, cardId, title, subtitle, summary,
          "imageUrl": image.asset->url,
          details, note, noteLinkLabel, noteLinkHref,
          ctaLabel, ctaHref
        }
      },
      _type == "sectionSupportAccessibility" => {
        eyebrow, title, body,
        "imageUrl": image.asset->url
      },
      _type == "sectionSupportResources" => {
        title, body,
        buttons[]{_key, label, href}
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
