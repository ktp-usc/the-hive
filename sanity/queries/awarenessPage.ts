import { defineQuery } from "next-sanity";

export type LocalizedValue =
    | string
    | { en?: string | null; es?: string | null }
    | null
    | undefined;

export type AwarenessProgram = {
    _key?: string;
    title?: LocalizedValue;
    body?: LocalizedValue;
    languages?: LocalizedValue;
    badge?: LocalizedValue;
    imageUrl?: string | null;
};

export type AwarenessTrainingItem = {
    _key?: string;
    title?: LocalizedValue;
    badge?: LocalizedValue;
};

export type AwarenessOffering = {
    _key?: string;
    title?: LocalizedValue;
    body?: LocalizedValue;
};

export type AwarenessCTAButton = {
    _key?: string;
    label?: LocalizedValue;
    href?: string;
    variant?: "primary" | "outline" | null;
};

type AwarenessBaseSection = { _key?: string; _type: string };

export type AwarenessHeroSection = AwarenessBaseSection & {
    _type: "sectionAwarenessHero";
    eyebrow?: LocalizedValue;
    title?: LocalizedValue;
    body?: LocalizedValue;
};

export type AwarenessValuesSection = AwarenessBaseSection & {
    _type: "sectionAwarenessValues";
    title?: LocalizedValue;
    intro?: LocalizedValue;
    pillars?: string[];
    outro?: LocalizedValue;
};

export type AwarenessProgramsSection = AwarenessBaseSection & {
    _type: "sectionAwarenessPrograms";
    title?: LocalizedValue;
    eyebrow?: LocalizedValue;
    body?: LocalizedValue;
    programs?: AwarenessProgram[];
};

export type AwarenessTrainingSection = AwarenessBaseSection & {
    _type: "sectionAwarenessTraining";
    title?: LocalizedValue;
    eyebrow?: LocalizedValue;
    body?: LocalizedValue;
    note?: LocalizedValue;
    trainingSeries?: AwarenessTrainingItem[];
    contactNote?: LocalizedValue;
};

export type AwarenessTechAssistSection = AwarenessBaseSection & {
    _type: "sectionAwarenessTechAssist";
    title?: LocalizedValue;
    eyebrow?: LocalizedValue;
    body?: LocalizedValue;
    offerings?: AwarenessOffering[];
};

export type AwarenessCtaSection = AwarenessBaseSection & {
    _type: "sectionAwarenessCta";
    title?: LocalizedValue;
    body?: LocalizedValue;
    buttons?: AwarenessCTAButton[];
};

export type AwarenessPageSection =
    | AwarenessHeroSection
    | AwarenessValuesSection
    | AwarenessProgramsSection
    | AwarenessTrainingSection
    | AwarenessTechAssistSection
    | AwarenessCtaSection;

export type AwarenessPageData = {
    title?: string;
    sections?: AwarenessPageSection[];
} | null;

export const awarenessPageQuery = defineQuery(`
  *[_type == "page" && slug.current == "awareness"][0]{
    title,
    sections[]{
      _key,
      _type,
      _type == "sectionAwarenessHero" => {
        eyebrow, title, body
      },
      _type == "sectionAwarenessValues" => {
        title, intro, pillars, outro
      },
      _type == "sectionAwarenessPrograms" => {
        title, eyebrow, body,
        programs[]{
          _key, title, body, languages, badge,
          "imageUrl": image.asset->url
        }
      },
      _type == "sectionAwarenessTraining" => {
        title, eyebrow, body, note,
        trainingSeries[]{_key, title, badge},
        contactNote
      },
      _type == "sectionAwarenessTechAssist" => {
        title, eyebrow, body,
        offerings[]{_key, title, body}
      },
      _type == "sectionAwarenessCta" => {
        title, body,
        buttons[]{_key, label, href, variant}
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