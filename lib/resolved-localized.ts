import type { LanguageCode } from "@/lib/site-copy";

export function resolveLocalized(
    value: unknown,
    language: LanguageCode,
    fallback: string
): string {
    if (typeof value === "string") {
        return value.trim() || fallback;
    }

    if (!value || typeof value !== "object") return fallback;

    const v = value as Record<string, string | null | undefined>;

    if (language === "es-MX") {
        const spanish = v["es"] || v["es-MX"] || null;
        return spanish?.trim() || v["en"]?.trim() || fallback;
    }

    return v["en"]?.trim() || v["es"]?.trim() || v["es-MX"]?.trim() || fallback;
}