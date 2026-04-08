"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";
import { languageOptions, siteCopy } from "@/lib/site-copy";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const copy = siteCopy[language];

  return (
    <div
      role="group"
      aria-label={copy.nav.languageToggleLabel}
      className="inline-flex items-center rounded-full border border-black/10 bg-white p-1 shadow-sm"
    >
      {languageOptions.map((option) => {
        const selected = option.code === language;

        return (
          <Button
            key={option.code}
            type="button"
            variant="ghost"
            size="sm"
            aria-label={option.label}
            aria-pressed={selected}
            onClick={() => setLanguage(option.code)}
            className={cn(
              "h-8 rounded-full px-2.5 text-[11px] font-medium sm:px-3 sm:text-xs",
              selected
                ? "bg-hive-blue text-white hover:bg-hive-blue/90 hover:text-white"
                : "text-gray-600 hover:text-hive-blue"
            )}
          >
            <span aria-hidden="true" className="text-sm leading-none">
              {option.flag}
            </span>
            <span className="hidden sm:inline">{option.label}</span>
            <span className="sm:hidden">
              {option.code === "en"
                ? "EN"
                : option.code === "es-CO"
                  ? "CO"
                  : "MX"}
            </span>
          </Button>
        );
      })}
    </div>
  );
}
