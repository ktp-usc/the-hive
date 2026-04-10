import PartnersClient from "./partners-client";

import { sanityFetch } from "@/sanity/lib/live";
import { partnersPageQuery } from "@/sanity/queries/partnersPage";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Our Partners | The Hive",
};

export default async function OurPartnersPage() {
  const { data: page } = await sanityFetch({ query: partnersPageQuery });

  return (
    <PartnersClient page={(page ?? null) as Parameters<typeof PartnersClient>[0]["page"]} />
  );
}
