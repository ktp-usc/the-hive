import { defineQuery } from "next-sanity";

export type LocalizedValue =
    | string
    | { en?: string | null; es?: string | null }
    | null
    | undefined;

export type ImpactMediaItem = {
    _key?: string;
    outlet?: LocalizedValue;
    headline?: LocalizedValue;
    description?: LocalizedValue;
    href?: string | null;
};

export type ImpactAward = {
    _key?: string;
    name?: LocalizedValue;
    year?: string | null;
    issuer?: LocalizedValue;
    description?: LocalizedValue;
};

export type ImpactDocument = {
    _key?: string;
    title?: LocalizedValue;
    description?: LocalizedValue;
    href?: string;
    cta?: LocalizedValue;
    external?: boolean | null;
};

type ImpactBaseSection = { _key?: string; _type: string };

export type ImpactHeroSection = ImpactBaseSection & {
    _type: "sectionImpactHero";
    eyebrow?: LocalizedValue;
    title?: LocalizedValue;
    body?: LocalizedValue;
    imageUrl?: string | null;
};

export type ImpactMediaSection = ImpactBaseSection & {
    _type: "sectionImpactMedia";
    eyebrow?: LocalizedValue;
    title?: LocalizedValue;
    items?: ImpactMediaItem[];
};

export type ImpactAwardsSection = ImpactBaseSection & {
    _type: "sectionImpactAwards";
    eyebrow?: LocalizedValue;
    title?: LocalizedValue;
    awards?: ImpactAward[];
};

export type ImpactDocumentsSection = ImpactBaseSection & {
    _type: "sectionImpactDocuments";
    eyebrow?: LocalizedValue;
    title?: LocalizedValue;
    documents?: ImpactDocument[];
};

export type OurImpactPageSection =
    | ImpactHeroSection
    | ImpactMediaSection
    | ImpactAwardsSection
    | ImpactDocumentsSection;

export type OurImpactPageData = {
    title?: string;
    sections?: OurImpactPageSection[];
} | null;

export const ourImpactPageQuery = defineQuery(`
  *[_type == "page" && slug.current == "our-impact"][0]{
    title,
    sections[]{
      _key,
      _type,
      _type == "sectionImpactHero" => {
        eyebrow, title, body,
        "imageUrl": image.asset->url
      },
      _type == "sectionImpactMedia" => {
        eyebrow, title,
        items[]{_key, outlet, headline, description, href}
      },
      _type == "sectionImpactAwards" => {
        eyebrow, title,
        awards[]{_key, name, year, issuer, description}
      },
      _type == "sectionImpactDocuments" => {
        eyebrow, title,
        documents[]{_key, title, description, href, cta, external}
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