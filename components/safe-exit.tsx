"use client";

import { useEffect } from "react";
import { useSiteCopy } from "@/components/language-provider";

const SEARCH_ENGINE_DOMAINS: Record<string, string> = {
    "google.": "g",
    "bing.com": "b",
    "yahoo.com": "y",
    "duckduckgo.com": "d",
    "ecosia.org": "e",
    "search.brave.com": "r",
};

function codeFromUserAgent(): string {
    if (typeof navigator !== "undefined" && /Edg\//.test(navigator.userAgent)) {
        return "b";
    }
    return "g";
}

function referrerCode(referrer: string): string {
    for (const [domain, code] of Object.entries(SEARCH_ENGINE_DOMAINS)) {
        if (referrer.includes(domain)) return code;
    }
    return codeFromUserAgent();
}

export default function SafeExit() {
    const copy = useSiteCopy();

    useEffect(() => {
        // Store the initial external referrer once per session
        if (!sessionStorage.getItem("_hive_ref_saved")) {
            sessionStorage.setItem("_hive_initial_ref", document.referrer ?? "");
            sessionStorage.setItem("_hive_ref_saved", "1");
        }
    }, []);

    const handleClick = () => {
        const storedRef = sessionStorage.getItem("_hive_initial_ref") ?? "";
        const code = referrerCode(storedRef);

        // Clear all stored data, then stamp a flag so /safe-exit knows this
        // is the initial click (not a back-button press) and should go to YouTube.
        localStorage.clear();
        sessionStorage.clear();
        sessionStorage.setItem("_hive_safe_exit", code);

        // Replace the current hive page in history with /safe-exit.
        // This is a real navigation — the hive page is properly left rather
        // than just relabelled, so pressing back can never restore it.
        window.location.replace("/safe-exit");
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-[9999] bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 text-lg rounded-lg shadow-lg transition-colors"
            aria-label={copy.common.safeExitAriaLabel}
        >
            {copy.common.safeExit}
        </button>
    );
}
