export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import {
  homePageQuery,
  type HomePageQueryResult,
} from "@/sanity/queries/homePage";
import HomeClient from "./home-client";
import GenericSectionRenderer from "@/components/generic-section-renderer";

export default async function Home() {
  let home: HomePageQueryResult | null = null;
  try {
    const { data } = await sanityFetch({ query: homePageQuery });
    home = data as HomePageQueryResult;
  } catch {
    // Sanity fetch failed; render with static fallback
  }

  const heroBackgroundImageUrl = home?.heroImage
    ? urlFor(home.heroImage).width(2000).height(1200).url()
    : "/images/TheHive_12.06.2025_135.jpg";

  const missionImageUrl = home?.missionImage
    ? urlFor(home.missionImage).width(1200).url()
    : "/images/TheHive_12.06.2025_87.jpg";

  const lp = home?.landingPopup;
  const popupReady = Boolean(
    lp?.enabled && lp?.image && lp?.popupDims?.width && lp?.popupDims?.height,
  );

  const landingPopup =
    popupReady && lp?.image && lp?.popupDims
      ? (() => {
          const maxW = 1800;
          const w = Math.min(lp.popupDims.width, maxW);
          const ar =
            lp.popupDims.aspectRatio && lp.popupDims.aspectRatio > 0
              ? lp.popupDims.aspectRatio
              : lp.popupDims.width / lp.popupDims.height;
          const h = Math.max(1, Math.round(w / ar));
          return {
            imageUrl: urlFor(lp.image).width(maxW).url(),
            imageWidth: w,
            imageHeight: h,
            ctaLabel: lp.ctaLabel ?? undefined,
            ctaHref: lp.ctaHref ?? undefined,
          };
        })()
      : null;

  return (
    <>
      <HomeClient
        heroHeadline={home?.heroHeadline ?? null}
        heroSubheadline={home?.heroSubheadline ?? null}
        heroCtaLabel={home?.heroCtaLabel ?? null}
        heroCtaHref={home?.heroCtaHref ?? null}
        heroBackgroundImageUrl={heroBackgroundImageUrl}
        missionHeading={home?.missionHeading ?? null}
        missionBody={home?.missionBody ?? null}
        missionImageUrl={missionImageUrl}
        missionDims={home?.missionDims ?? undefined}
        whatWeDoTitle={home?.whatWeDoTitle ?? null}
        whatWeDoCards={home?.whatWeDoCards ?? null}
        supportTitle={home?.supportTitle ?? null}
        supportBody={home?.supportBody ?? null}
        landingPopup={landingPopup}
      />
      <GenericSectionRenderer sections={home?.extraSections ?? []} />
    </>
  );
}
