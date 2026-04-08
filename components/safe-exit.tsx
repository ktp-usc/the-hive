"use client";

import { useSiteCopy } from "@/components/language-provider";

export default function SafeExit() {
  const copy = useSiteCopy();

  const handleClick = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.replace("https://www.youtube.com");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 rounded-lg bg-red-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-red-700"
      aria-label={copy.common.safeExitAriaLabel}
    >
      {copy.common.safeExit}
    </button>
  );
}
