export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { ourImpactPageQuery, type OurImpactPageData } from "@/sanity/queries/ourImpactPage";
import OurImpactClient from "./our-impact-client";

export const metadata = { title: "Our Impact | The Hive" };

export default async function OurImpactPage() {
    const { data } = await sanityFetch({ query: ourImpactPageQuery });
    return <OurImpactClient cmsContent={(data ?? null) as OurImpactPageData} />;
}
