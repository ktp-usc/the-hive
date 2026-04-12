import React from "react";
import Navbar from "@/components/navbar";
import SafeExit from "@/components/safe-exit";
import Footer from "@/components/footer";
import { navbarSettingsQuery, type NavbarSettingsData } from "@/sanity/queries/navbarSettings";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const { data } = await sanityFetch({ query: navbarSettingsQuery });

    return (
        <div className="site-shell">
            <Navbar navSettings={data as NavbarSettingsData} />
            {children}
            <SanityLive />
            <SafeExit />
            <Footer navSettings={data as NavbarSettingsData} />
        </div>
    );
}
