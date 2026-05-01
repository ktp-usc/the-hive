import { sanityFetch } from "@/sanity/lib/live";
import { aboutPageQuery } from "@/sanity/queries/aboutPage";
import { siteSettingsQuery } from "@/sanity/queries/siteSettings";
import AboutClient from "./about-client";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "About Us | The Hive",
};

export default async function AboutPage() {
    let page = null;
    let siteData = null;

    try {
        [{ data: page }, { data: siteData }] = await Promise.all([
            sanityFetch({ query: aboutPageQuery }),
            sanityFetch({ query: siteSettingsQuery }),
        ]);
    } catch {
        // Sanity fetch failed; render with static fallback
    }

    return <AboutClient page={page} siteSettings={siteData} />;
}