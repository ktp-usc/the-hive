export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { contactPageQuery, type ContactPageData } from "@/sanity/queries/contactPage";
import { siteSettingsQuery, type SiteSettingsData } from "@/sanity/queries/siteSettings";
import ContactClient from "./contact-client";
import GenericSectionRenderer from "@/components/generic-section-renderer";

export const metadata = { title: "Contact | The Hive" };

const HANDLED = new Set([
  "sectionContactHero", "sectionContactNewsletter", "sectionContactForm", "sectionContactInfo",
]);
const GENERIC_TYPES = new Set([
  "sectionRichText", "sectionImageText", "sectionHero", "sectionImageCarousel",
  "sectionCardGrid", "sectionVolunteerCards", "sectionDonationOpportunity",
]);

export default async function ContactPage() {
    let pageData = null;
    let siteData = null;
    try {
        [{ data: pageData }, { data: siteData }] = await Promise.all([
            sanityFetch({ query: contactPageQuery }),
            sanityFetch({ query: siteSettingsQuery }),
        ]);
    } catch {
        // Sanity fetch failed; render with static fallback
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const allSections = ((pageData as any)?.sections ?? []) as any[];
    const extraSections = allSections.filter(
      (s) => GENERIC_TYPES.has(s._type) && !HANDLED.has(s._type)
    );

    return (
        <>
            <Suspense>
                <ContactClient
                    cmsContent={(pageData ?? null) as ContactPageData}
                    siteSettings={(siteData ?? null) as SiteSettingsData}
                />
            </Suspense>
            <GenericSectionRenderer sections={extraSections} />
        </>
    );
}
