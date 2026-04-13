export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { beeInTheKnowPageQuery, type BeeInTheKnowPageData } from "@/sanity/queries/beeInTheKnowPage";
import BeeInTheKnowClient from "./bee-in-the-know-client";

export const metadata = { title: "Bee In The Know | The Hive" };

export default async function BeeInTheKnowPage() {
    const { data } = await sanityFetch({ query: beeInTheKnowPageQuery });
    return <BeeInTheKnowClient cmsContent={(data ?? null) as BeeInTheKnowPageData} />;
}
