import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import React from "react";
import { LanguageProvider } from "@/components/language-provider";
import {
    defaultLanguage,
    isLanguageCode,
    languageCookieKey,
} from "@/lib/site-copy";

export const metadata: Metadata = {
    title: "The Hive Community Circle",
    description: "The Hive is a survivor-led organization providing support, advocacy, and resources to help women and girls in South Carolina heal from sexual assault, intimate partner violence, and stalking.",
    icons: {
        icon: "/hive-favicon.png",
    },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const cookieStore = await cookies();
    const storedLanguage = cookieStore.get(languageCookieKey)?.value;
    const initialLanguage = storedLanguage && isLanguageCode(storedLanguage)
        ? storedLanguage
        : defaultLanguage;

    return (
        <html lang={initialLanguage}>
        <body>
        <LanguageProvider initialLanguage={initialLanguage}>
            { children }
        </LanguageProvider>
        </body>
        </html>
    );
}
