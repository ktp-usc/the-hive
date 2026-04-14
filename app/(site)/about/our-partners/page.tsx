import PartnersClient from "./partners-client";

import { sanityFetch } from "@/sanity/lib/live";
import { partnersPageQuery } from "@/sanity/queries/partnersPage";
import GenericSectionRenderer from "@/components/generic-section-renderer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Our Partners | The Hive",
};

const HANDLED = new Set([
  "sectionHero", "sectionImageCarousel", "sectionImageText",
  "sectionPartnerLogos", "sectionPartnersOpportunities",
]);
const GENERIC_TYPES = new Set([
  "sectionRichText", "sectionImageText", "sectionHero", "sectionImageCarousel",
  "sectionCardGrid", "sectionVolunteerCards", "sectionDonationOpportunity",
]);

export default async function OurPartnersPage() {
  let page = null;
  try {
    const result = await sanityFetch({ query: partnersPageQuery });
    page = result.data;
  } catch {
    // Sanity fetch failed; render with static fallback
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allSections = ((page as any)?.sections ?? []) as any[];
  const extraSections = allSections.filter(
    (s) => GENERIC_TYPES.has(s._type) && !HANDLED.has(s._type)
  );

  return (
    <>
      <PartnersClient
        page={(page ?? null) as Parameters<typeof PartnersClient>[0]["page"]}
      />
      <GenericSectionRenderer sections={extraSections} />
    </>
  );
}
