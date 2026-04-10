import { defineQuery } from "next-sanity";

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

/**
 * Landing homepage: hero/mission imagery plus optional CMS-driven modal (page slug `landing`).
 */
export const homePageQuery = defineQuery(`
  *[_type == "page" && slug.current == "landing"][0]{
    "heroImage": sections[_type == "sectionHero"][0].images[0],
    "missionImage": sections[_type == "sectionImageText"][0].image,
    "missionDims": sections[_type == "sectionImageText"][0].image.asset->metadata.dimensions,
    "landingPopup": landingPopup {
      enabled,
      image,
      ctaLabel,
      ctaHref,
      "popupDims": image.asset->metadata.dimensions
    }
  }
`);

export type HomePageQueryResult = {
  heroImage?: SanityImageSource;
  missionImage?: SanityImageSource;
  missionDims?: {
    width: number;
    height: number;
    aspectRatio: number;
  };
  landingPopup?: {
    enabled?: boolean;
    image?: SanityImageSource;
    ctaLabel?: string | null;
    ctaHref?: string | null;
    popupDims?: {
      width: number;
      height: number;
      aspectRatio: number;
    } | null;
  } | null;
} | null;
