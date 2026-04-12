import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import HomeClient from "./home-client";

type LandingPopupData = {
  enabled?: boolean;
  ctaLabel?: string | null;
  ctaHref?: string | null;
  image?: SanityImageSource | null;
};

type HomePageData = {
  heroImage?: SanityImageSource;
  missionImage?: SanityImageSource;
  missionDims?: {
    width: number;
    height: number;
    aspectRatio: number;
  };
  landingPopup?: LandingPopupData | null;
};

export default async function Home() {
  const query = `*[_type == "page" && slug.current == "landing"][0]{
    "heroImage": sections[_type == "sectionHero"][0].images[0],
    "missionImage": sections[_type == "sectionImageText"][0].image,
    "missionDims": sections[_type == "sectionImageText"][0].image.asset->metadata.dimensions,
    landingPopup
  }` as const;

  const { data } = await sanityFetch({ query });
  const pageData = data as HomePageData;

  const heroBackgroundImageUrl = pageData?.heroImage
    ? urlFor(pageData.heroImage).width(2000).height(1200).url()
    : "/images/TheHive_12.06.2025_135.jpg";

  const missionImageUrl = pageData?.missionImage
    ? urlFor(pageData.missionImage).width(1200).url()
    : "/images/TheHive_12.06.2025_87.jpg";

  const popup = pageData?.landingPopup;
  const popupImageUrl =
    popup?.enabled && popup.image
      ? urlFor(popup.image).width(600).url()
      : null;

  return (
    <HomeClient
      heroBackgroundImageUrl={heroBackgroundImageUrl}
      missionImageUrl={missionImageUrl}
      missionDims={pageData?.missionDims}
      popup={
        popup?.enabled
          ? {
              enabled: true,
              imageUrl: popupImageUrl,
              ctaLabel: popup.ctaLabel ?? null,
              ctaHref: popup.ctaHref ?? null,
            }
          : null
      }
    />
  );
}
