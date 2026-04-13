export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { contactPageQuery, type ContactPageData } from "@/sanity/queries/contactPage";
import { siteSettingsQuery, type SiteSettingsData } from "@/sanity/queries/siteSettings";
import ContactClient from "./contact-client";

export const metadata = { title: "Contact | The Hive" };

export default async function ContactPage() {
    const [{ data: pageData }, { data: siteData }] = await Promise.all([
        sanityFetch({ query: contactPageQuery }),
        sanityFetch({ query: siteSettingsQuery }),
    ]);

    return (
        <Suspense>
            <ContactClient
                cmsContent={(pageData ?? null) as ContactPageData}
                siteSettings={(siteData ?? null) as SiteSettingsData}
            />
        </Suspense>
    );
}
