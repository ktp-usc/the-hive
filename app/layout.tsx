import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar";

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
        </body>
        </html>
    );
}
