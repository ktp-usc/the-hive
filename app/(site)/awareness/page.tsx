export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { awarenessPageQuery, type AwarenessPageData } from "@/sanity/queries/awarenessPage";
import AwarenessClient from "./awareness-client";

export const metadata = { title: "Awareness & Prevention | The Hive" };

export default async function AwarenessPage() {
    let data = null;
    try {
        const result = await sanityFetch({ query: awarenessPageQuery });
        data = result.data;
    } catch (err) {
        console.error("[AwarenessPage] Sanity fetch failed, rendering with fallbacks:", err);
    }
    return <AwarenessClient cmsContent={(data ?? null) as AwarenessPageData} />;
}
