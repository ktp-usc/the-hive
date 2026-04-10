import AboutClient from "./about-client";

import { sanityFetch } from "@/sanity/lib/live";
import { aboutPageQuery } from "@/sanity/queries/aboutPage";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "About Us | The Hive",
};

export default async function AboutPage() {
  const { data: page } = await sanityFetch({ query: aboutPageQuery });

  return <AboutClient page={(page ?? null) as Parameters<typeof AboutClient>[0]["page"]} />;
}
