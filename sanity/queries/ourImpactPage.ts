import { defineQuery } from "next-sanity";

export type ImpactMediaItem = {
  _key?: string;
  outlet?: string;
  headline?: string;
  description?: string | null;
  href?: string | null;
};

export type ImpactAward = {
  _key?: string;
  name?: string;
  year?: string | null;
  issuer?: string | null;
  description?: string | null;
};

export type ImpactDocument = {
  _key?: string;
  title?: string;
  description?: string | null;
  href?: string;
  cta?: string | null;
  external?: boolean | null;
};

type ImpactBaseSection = { _key?: string; _type: string };

export type ImpactHeroSection = ImpactBaseSection & {
  _type: "sectionImpactHero";
  eyebrow?: string;
  body?: string;
  imageUrl?: string | null;
};

export type ImpactMediaSection = ImpactBaseSection & {
  _type: "sectionImpactMedia";
  eyebrow?: string;
  title?: string;
  items?: ImpactMediaItem[];
};

export type ImpactAwardsSection = ImpactBaseSection & {
  _type: "sectionImpactAwards";
  eyebrow?: string;
  title?: string;
  awards?: ImpactAward[];
};

export type ImpactDocumentsSection = ImpactBaseSection & {
  _type: "sectionImpactDocuments";
  eyebrow?: string;
  title?: string;
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
        eyebrow, body,
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
      }
    }
  }
`);
