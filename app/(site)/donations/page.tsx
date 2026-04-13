export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { donationsPageQuery, type DonationsPageData } from "@/sanity/queries/donationsPage";
import DonationsClient from "./donations-client";

export default async function DonationsPage() {
    let data = null;
    try {
        const result = await sanityFetch({ query: donationsPageQuery });
        data = result.data;
    } catch (err) {
        console.error("[DonationsPage] Sanity fetch failed, rendering with fallbacks:", err);
    }
    return <DonationsClient cmsContent={(data ?? null) as DonationsPageData | null} />;
}