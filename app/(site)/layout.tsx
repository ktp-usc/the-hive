import React from "react";
import Navbar from "@/components/navbar";
import SafeExit from "@/components/safe-exit";
import Footer from "@/components/footer";
import { SanityLive, sanityFetch } from "@/sanity/lib/live";
import { siteSettingsQuery } from "@/sanity/queries/siteSettings";

export default async function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const { data: siteSettings } = await sanityFetch({ query: siteSettingsQuery });

    return (
        <div className="site-shell">
            <Navbar donateUrl={siteSettings?.donateUrl} />
            {children}
            <SanityLive />
            <SafeExit />
            <Footer
                contactEmail={siteSettings?.contactEmail}
                contactPhone={siteSettings?.contactPhone}
                contactAddress={siteSettings?.contactAddress}
                tagline={siteSettings?.footerTagline}
            />
        </div>
    );
}
