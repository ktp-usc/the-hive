import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar";
import SafeExit from "@/components/safe-exit";

export const metadata: Metadata = {
    title: "Future KTP Web App",
    description: "KTP SP26"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body>
        <Navbar />
        { children }
        <SafeExit />
        </body>
        </html>
    );
}
