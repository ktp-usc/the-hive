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
        <html lang={initialLanguage}>
        <body>
        <LanguageProvider initialLanguage={initialLanguage}>
            { children }
        </LanguageProvider>
        </body>
        </html>
    );
}
