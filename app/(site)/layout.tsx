import React from "react";
import Navbar from "@/components/navbar";
import SafeExit from "@/components/safe-exit";
import Footer from "@/components/footer";
import { SanityLive } from "@/sanity/lib/live";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="site-shell">
            <Navbar />
            {children}
            <SanityLive />
            <SafeExit />
            <Footer />
        </div>
    );
}
