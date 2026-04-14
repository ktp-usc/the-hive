export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { supportPageQuery, type SupportPageData } from "@/sanity/queries/supportPage";
import SupportClient from "./support-client";

export const metadata = { title: "Survivor Support | The Hive" };

export default async function SupportPage() {
    let data = null;
    try {
        const result = await sanityFetch({ query: supportPageQuery });
        data = result.data;
    } catch {
        // Sanity fetch failed; render with static fallback
    }
    return <SupportClient cmsContent={(data ?? null) as SupportPageData} />;
}
