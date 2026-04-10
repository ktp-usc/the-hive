import { sanityFetch } from "@/sanity/lib/live";
import { donationsPageQuery, type DonationsPageData } from "@/sanity/queries/donationsPage";
import DonationsClient from "./donations-client";

export default async function DonationsPage() {
    const { data } = await sanityFetch({ query: donationsPageQuery });

    return <DonationsClient cmsContent={(data ?? null) as DonationsPageData | null} />;
}