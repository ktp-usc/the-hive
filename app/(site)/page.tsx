import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import HomeClient from "./home-client";

type HomeImageData = {
    heroImage?: SanityImageSource;
    missionImage?: SanityImageSource;
    missionDims?: {
        width: number;
        height: number;
        aspectRatio: number;
    };
};

export default async function Home() {
    const query = `*[_type == "page" && slug.current == "landing"][0]{
    "heroImage": sections[_type == "sectionHero"][0].images[0],
    "missionImage": sections[_type == "sectionImageText"][0].image,
    "missionDims": sections[_type == "sectionImageText"][0].image.asset->metadata.dimensions
  }` as const;

    const { data } = await sanityFetch({ query });
    const homeImages = data as HomeImageData;

    const heroBackgroundImageUrl = homeImages?.heroImage
        ? urlFor(homeImages.heroImage).width(2000).height(1200).url()
        : "/images/TheHive_12.06.2025_135.jpg";

    const missionImageUrl = homeImages?.missionImage
        ? urlFor(homeImages.missionImage).width(1200).url()
        : "/images/TheHive_12.06.2025_87.jpg";

    return (
        <HomeClient
            heroBackgroundImageUrl={heroBackgroundImageUrl}
            missionImageUrl={missionImageUrl}
            missionDims={homeImages?.missionDims}
        />
    );
}