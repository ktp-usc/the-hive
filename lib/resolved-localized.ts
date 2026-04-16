import type { LanguageCode } from "@/lib/site-copy";

export function resolveLocalized(
    value: unknown,
    language: LanguageCode,
    fallback: string
): string {
    if (typeof value === "string") return value;

    if (!value || typeof value !== "object") return fallback;

    const v = value as { en?: string; es?: string };

    if (language === "es-MX") {
        return v.es || v.en || fallback;
    }

    return v.en || v.es || fallback;
}