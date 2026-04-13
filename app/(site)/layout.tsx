export const dynamic = "force-dynamic";

import React from "react";
import Navbar from "@/components/navbar";
import SafeExit from "@/components/safe-exit";
import Footer from "@/components/footer";
import { navbarSettingsQuery, type NavbarSettingsData } from "@/sanity/queries/navbarSettings";
import { siteSettingsQuery, type SiteSettingsData } from "@/sanity/queries/siteSettings";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    let navData = null;
    let siteData = null;
    try {
        const [navResult, siteResult] = await Promise.all([
            sanityFetch({ query: navbarSettingsQuery }),
            sanityFetch({ query: siteSettingsQuery }),
        ]);
        navData = navResult.data;
        siteData = siteResult.data;
    } catch (err) {
        console.error("[SiteLayout] Sanity fetch failed, rendering with fallbacks:", err);
    }

    const site = siteData as SiteSettingsData;

    return (
        <div className="site-shell">
            <Navbar navSettings={navData as NavbarSettingsData} />
            {children}
            <SanityLive />
            <SafeExit />
            <Footer
                navSettings={navData as NavbarSettingsData}
                contactEmail={site?.contactEmail}
                contactPhone={site?.contactPhone}
                contactAddress={site?.contactAddress}
                tagline={site?.footerTagline}
                brand={site?.footerBrand}
                copyright={site?.footerCopyright}
                quickLinksHeading={site?.footerQuickLinksHeading}
                contactHeading={site?.footerContactHeading}
                emailLabel={site?.footerEmailLabel}
                phoneLabel={site?.footerPhoneLabel}
                addressLabel={site?.footerAddressLabel}
            />
        </div>
    );
}
