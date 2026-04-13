export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { awarenessPageQuery, type AwarenessPageData } from "@/sanity/queries/awarenessPage";
import AwarenessClient from "./awareness-client";

export const metadata = { title: "Awareness & Prevention | The Hive" };

export default async function AwarenessPage() {
    const { data } = await sanityFetch({ query: awarenessPageQuery });
    return <AwarenessClient cmsContent={(data ?? null) as AwarenessPageData} />;
}
