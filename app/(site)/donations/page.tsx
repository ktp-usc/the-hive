export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { donationsPageQuery, type DonationsPageData } from "@/sanity/queries/donationsPage";
import DonationsClient from "./donations-client";
import GenericSectionRenderer from "@/components/generic-section-renderer";

const HANDLED = new Set([
  "sectionDonationsHero", "sectionVolunteerCards", "sectionDonationOpportunity",
  "sectionDonationsTabsIntro", "sectionDonationsCasitaOverview", "sectionDonationsCasitaRefuge",
  "sectionDonationsCasitaCommunity", "sectionDonationsCasitaWays", "sectionDonationsCasitaBeeBox",
  "sectionDonationsCasitaClosing", "sectionDonationsKeepersOverview", "sectionDonationsKeepersBenefits",
  "sectionDonationsKeepersTiers", "sectionDonationsKeepersImpact",
]);
const GENERIC_TYPES = new Set([
  "sectionRichText", "sectionImageText", "sectionHero", "sectionImageCarousel",
  "sectionCardGrid", "sectionVolunteerCards", "sectionDonationOpportunity",
]);

export default async function DonationsPage() {
    let data = null;
    try {
        const result = await sanityFetch({ query: donationsPageQuery });
        data = result.data;
    } catch {
        // Sanity fetch failed; render with static fallback
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const allSections = ((data as any)?.sections ?? []) as any[];
    const extraSections = allSections.filter(
      (s) => GENERIC_TYPES.has(s._type) && !HANDLED.has(s._type)
    );
    return (
      <>
        <DonationsClient cmsContent={(data ?? null) as DonationsPageData | null} />
        <GenericSectionRenderer sections={extraSections} />
      </>
    );
}
