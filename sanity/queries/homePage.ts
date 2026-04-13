import { defineQuery } from "next-sanity";

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const homePageQuery = defineQuery(`
  *[_type == "page" && slug.current == "landing"][0]{
    "heroHeadline":    sections[_type == "sectionHero"][0].headline,
    "heroSubheadline": sections[_type == "sectionHero"][0].subheadline,
    "heroCtaLabel":    sections[_type == "sectionHero"][0].ctaLabel,
    "heroCtaHref":     sections[_type == "sectionHero"][0].ctaHref,
    "heroImage":       sections[_type == "sectionHero"][0].images[0],
    "missionHeading":  sections[_type == "sectionImageText"][0].heading,
    "missionBody":     sections[_type == "sectionImageText"][0].body,
    "missionImage":    sections[_type == "sectionImageText"][0].image,
    "missionDims":     sections[_type == "sectionImageText"][0].image.asset->metadata.dimensions,
    "whatWeDoTitle":   sections[_type == "sectionCardGrid"][0].sectionTitle,
    "whatWeDoCards":   sections[_type == "sectionCardGrid"][0].cards[]->{
      _id, title, body
    },
    "supportTitle": sections[_type == "sectionRichText"][0].heading,
    "supportBody":  sections[_type == "sectionRichText"][0].body,
    "landingPopup": landingPopup {
      enabled,
      image,
      ctaLabel,
      ctaHref,
      "popupDims": image.asset->metadata.dimensions
    }
  }
`);

export type HomeWhatWeDoCard = {
  _id: string;
  title?: string | null;
  body?: string | null;
};

export type HomePageQueryResult = {
  heroHeadline?: string | null;
  heroSubheadline?: string | null;
  heroCtaLabel?: string | null;
  heroCtaHref?: string | null;
  heroImage?: SanityImageSource;
  missionHeading?: string | null;
  missionBody?: string | null;
  missionImage?: SanityImageSource;
  missionDims?: { width: number; height: number; aspectRatio: number } | null;
  whatWeDoTitle?: string | null;
  whatWeDoCards?: HomeWhatWeDoCard[] | null;
  supportTitle?: string | null;
  supportBody?: string | null;
  landingPopup?: {
    enabled?: boolean;
    image?: SanityImageSource;
    ctaLabel?: string | null;
    ctaHref?: string | null;
    popupDims?: { width: number; height: number; aspectRatio: number } | null;
  } | null;
} | null;
