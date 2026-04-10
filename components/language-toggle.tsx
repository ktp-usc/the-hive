"use client";

import { Button } from "@/components/ui/button";
import { useLanguage, useSiteCopy } from "@/components/language-provider";
import { cn } from "@/lib/utils";
import { languageOptions } from "@/lib/site-copy";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const copy = useSiteCopy();

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
              "h-8 rounded-full px-3 text-xs font-medium sm:px-4",
              selected
                ? "bg-hive-blue text-white hover:bg-hive-blue/90 hover:text-white"
                : "text-gray-600 hover:text-hive-blue"
            )}
          >
            <span>{option.label}</span>
          </Button>
        );
      })}
    </div>
  );
}
