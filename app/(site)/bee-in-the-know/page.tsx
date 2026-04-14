export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { beeInTheKnowPageQuery, type BeeInTheKnowPageData } from "@/sanity/queries/beeInTheKnowPage";
import BeeInTheKnowClient from "./bee-in-the-know-client";

export const metadata = { title: "Bee In The Know | The Hive" };

export default async function BeeInTheKnowPage() {
    let data = null;
    try {
        const result = await sanityFetch({ query: beeInTheKnowPageQuery });
        data = result.data;
    } catch {
        // Sanity fetch failed; render with static fallback
    }
    return <BeeInTheKnowClient cmsContent={(data ?? null) as BeeInTheKnowPageData} />;
}
