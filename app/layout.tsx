import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar";
import SafeExit from "@/components/safe-exit";
import Footer from "@/components/footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Future KTP Web App",
    description: "KTP SP26"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
        <body>
        <Navbar />
        { children }
        <SafeExit />
        <footer><Footer /></footer>
        </body>
        </html>
    );
}
