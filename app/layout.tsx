import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar";
import SafeExit from "@/components/safe-exit";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";
import {
    defaultLanguage,
    isLanguageCode,
    languageCookieKey,
} from "@/lib/site-copy";

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

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const cookieStore = await cookies();
    const storedLanguage = cookieStore.get(languageCookieKey)?.value;
    const initialLanguage = storedLanguage && isLanguageCode(storedLanguage)
        ? storedLanguage
        : defaultLanguage;

    return (
        <html lang={initialLanguage} className={`${inter.variable} ${playfair.variable}`}>
        <body>
        <LanguageProvider initialLanguage={initialLanguage}>
            <Navbar />
            { children }
            <SafeExit />
            <Footer />
        </LanguageProvider>
        </body>
        </html>
    );
}
