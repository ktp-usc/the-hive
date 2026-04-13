export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { ourImpactPageQuery, type OurImpactPageData } from "@/sanity/queries/ourImpactPage";
import OurImpactClient from "./our-impact-client";

export const metadata = { title: "Our Impact | The Hive" };

export default async function OurImpactPage() {
    let data = null;
    try {
        const result = await sanityFetch({ query: ourImpactPageQuery });
        data = result.data;
    } catch (err) {
        console.error("[OurImpactPage] Sanity fetch failed, rendering with fallbacks:", err);
    }
    return <OurImpactClient cmsContent={(data ?? null) as OurImpactPageData} />;
}
