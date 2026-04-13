export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { supportPageQuery, type SupportPageData } from "@/sanity/queries/supportPage";
import SupportClient from "./support-client";

export const metadata = { title: "Survivor Support | The Hive" };

export default async function SupportPage() {
    const { data } = await sanityFetch({ query: supportPageQuery });
    return <SupportClient cmsContent={(data ?? null) as SupportPageData} />;
}
