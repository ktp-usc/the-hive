"use client";

import { useSiteCopy } from "@/components/language-provider";

export default function SafeExit() {
    const copy = useSiteCopy();

    const handleClick = () => {
        // clear session/local data 
        localStorage.clear();
        sessionStorage.clear();

        // overwrite history completely
        window.history.pushState(null, "", "/");
        window.history.replaceState(null, "", "/");

        // force hard redirect
        window.location.href = "https://www.google.com";
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 text-lg rounded-lg shadow-lg transition-colors"
            aria-label={copy.common.safeExitAriaLabel}
        >
            {copy.common.safeExit}
        </button>
    );
}