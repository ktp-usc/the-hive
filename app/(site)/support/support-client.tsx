"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { useLanguage, useSiteCopy } from "@/components/language-provider";
import GenericSectionRenderer, {
    type GenericSection,
} from "@/components/generic-section-renderer";
import { resolveLocalized } from "@/lib/resolved-localized";
import type {
    SupportPageData,
    SupportServiceCard,
} from "@/sanity/queries/supportPage";

const DEFAULT_SECTIONS = [
    { _type: "sectionSupportHero", _key: "default-hero" },
    { _type: "sectionSupportIntro", _key: "default-intro" },
    { _type: "sectionSupportServices", _key: "default-services" },
    { _type: "sectionSupportAccessibility", _key: "default-accessibility" },
    { _type: "sectionSupportResources", _key: "default-resources" },
] as const;

const cardLinkClassName =
    "inline-flex items-center rounded-full border border-hive-blue px-4 py-2 text-sm font-semibold text-hive-blue transition hover:bg-hive-blue hover:text-white";

const resourceButtonClassName =
    "inline-flex items-center justify-center rounded-full bg-hive-orange px-6 py-3 text-base font-semibold text-white transition hover:bg-hive-orange/90";

function ActionLink({
                        href,
                        className,
                        children,
                    }: {
    href: string;
    className: string;
    children: ReactNode;
}) {
    if (href.startsWith("/")) {
        return (
            <Link href={href} className={className}>
                {children}
            </Link>
        );
    }

    const openInNewTab =
        /^https?:\/\//.test(href) ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:");

    const target = openInNewTab ? "_blank" : undefined;
    const rel = openInNewTab ? "noopener noreferrer" : undefined;

    return (
        <a href={href} className={className} target={target} rel={rel}>
            {children}
        </a>
    );
}

// Always returns a resolved string — never an object, never undefined.
function r(value: unknown, language: "en" | "es-MX", fallback: string): string {
    return resolveLocalized(value, language, fallback);
}

export default function SupportClient({
                                          cmsContent,
                                      }: {
    cmsContent: SupportPageData;
}) {
    const copy = useSiteCopy();
    const { language } = useLanguage();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawSections = (cmsContent?.sections ?? []) as any[];
    const sections = rawSections.length > 0 ? rawSections : DEFAULT_SECTIONS;

    return (
        <main className="site-page text-gray-900">
            {sections.map((section) => {
                const key = section._key ?? section._type;

                // ─── HERO ────────────────────────────────────────────────────────
                if (section._type === "sectionSupportHero") {
                    return (
                        <section
                            key={key}
                            className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_32%)]" />
                            <div className="mx-auto max-w-6xl">
                                <div className="relative z-10 text-center">
                                    <p className="site-eyebrow">
                                        {r(section.eyebrow, language, copy.support.heroEyebrow)}
                                    </p>
                                    <h1 className="site-title mt-4">
                                        {r(section.title, language, copy.support.heroTitle)}
                                    </h1>
                                    <p className="mx-auto mt-7 max-w-3xl text-lg leading-7 text-white/85 sm:text-xl">
                                        {r(section.body, language, copy.support.heroBody)}
                                    </p>
                                </div>
                            </div>
                        </section>
                    );
                }

                // ─── INTRO ───────────────────────────────────────────────────────
                if (section._type === "sectionSupportIntro") {
                    return (
                        <section key={key} className="bg-white px-6 py-16 md:py-20">
                            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                                <div>
                                    <p className="site-subheading text-hive-orange">
                                        {r(section.eyebrow, language, copy.support.introEyebrow)}
                                    </p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-hive-blue md:text-4xl">
                                        {r(section.title, language, copy.support.introTitle)}
                                    </h2>
                                    <p className="mt-5 text-lg leading-8 text-gray-600">
                                        {r(section.body, language, copy.support.introBody)}
                                    </p>
                                </div>
                                <div className="relative overflow-hidden rounded-[2rem] border border-hive-blue/10 shadow-sm">
                                    <div className="relative aspect-[4/3] w-full">
                                        <Image
                                            src={section.imageUrl ?? copy.support.introImage.src}
                                            alt={copy.support.introImage.alt}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 40vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                }

                // ─── SERVICES ────────────────────────────────────────────────────
                if (section._type === "sectionSupportServices") {
                    const cards: SupportServiceCard[] = section.cards?.length
                        ? section.cards
                        : copy.support.cards.map((copyCard, i) => {
                            const ctaHrefs = [
                                "tel:8038887725",
                                "/contact",
                                "tel:8037668067",
                                undefined,
                                undefined,
                                "/contact",
                                "mailto:hello@thehivecc.org",
                            ];
                            return {
                                _key: String(i),
                                cardId: String(i),
                                title: copyCard.title,
                                subtitle: copyCard.subtitle,
                                summary: copyCard.summary,
                                imageUrl:
                                    "image" in copyCard
                                        ? (copyCard.image?.src ?? null)
                                        : null,
                                details:
                                    "details" in copyCard && copyCard.details
                                        ? [...copyCard.details]
                                        : null,
                                note:
                                    "note" in copyCard
                                        ? (copyCard.note ?? null)
                                        : null,
                                noteLinkLabel:
                                    "noteLinkLabel" in copyCard
                                        ? (copyCard.noteLinkLabel ?? null)
                                        : null,
                                noteLinkHref:
                                    "noteLinkHref" in copyCard
                                        ? (copyCard.noteLinkHref ?? null)
                                        : null,
                                ctaLabel: copyCard.ctaLabel,
                                ctaHref: ctaHrefs[i] ?? null,
                            };
                        });

                    return (
                        <section
                            key={key}
                            aria-labelledby={`services-heading-${key}`}
                            className="bg-white px-6 py-20 md:py-24"
                        >
                            <div className="mx-auto max-w-6xl">
                                <h2
                                    id={`services-heading-${key}`}
                                    className="text-3xl font-bold tracking-tight text-hive-blue md:text-4xl"
                                >
                                    {r(section.heading, language, copy.support.servicesHeading)}
                                </h2>
                                <p className="mt-3 text-base font-medium text-gray-600">
                                    {r(
                                        section.languageNote,
                                        language,
                                        copy.support.servicesLanguageNote,
                                    )}
                                </p>

                                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                                    {cards.map((card, cardIndex) => {
                                        const copyCard = copy.support.cards[cardIndex];

                                        const title = r(
                                            card.title,
                                            language,
                                            copyCard?.title ?? "",
                                        );
                                        const subtitle = r(
                                            card.subtitle,
                                            language,
                                            copyCard?.subtitle ?? "",
                                        );
                                        const summary = r(
                                            card.summary,
                                            language,
                                            copyCard?.summary ?? "",
                                        );
                                        const note = r(
                                            card.note,
                                            language,
                                            "note" in (copyCard ?? {}) && typeof (copyCard as { note?: unknown }).note === "string"
                                                ? (copyCard as { note: string }).note
                                                : "",
                                        );
                                        const noteLinkLabel = r(
                                            card.noteLinkLabel,
                                            language,
                                            "noteLinkLabel" in (copyCard ?? {}) && typeof (copyCard as { noteLinkLabel?: unknown }).noteLinkLabel === "string"
                                                ? (copyCard as { noteLinkLabel: string }).noteLinkLabel
                                                : "",
                                        );
                                        const ctaLabel = r(
                                            card.ctaLabel,
                                            language,
                                            copyCard?.ctaLabel ?? "",
                                        );

                                        const details: string[] = card.details?.length
                                            ? card.details.map((detail, di) =>
                                                r(
                                                    detail,
                                                    language,
                                                    typeof copyCard?.details?.[di] === "string"
                                                        ? (copyCard.details[di] as string)
                                                        : "",
                                                ),
                                            )
                                            : (copyCard?.details ?? []).map((d) =>
                                                typeof d === "string" ? d : "",
                                            );

                                        return (
                                            <article
                                                key={card._key ?? card.cardId}
                                                className="overflow-hidden rounded-3xl border border-hive-blue/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                            >
                                                {card.imageUrl ? (
                                                    <div className="relative aspect-[16/10] w-full">
                                                        <Image
                                                            src={card.imageUrl}
                                                            alt={title}
                                                            fill
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                ) : null}

                                                <div className="p-6">
                                                    <h3 className="text-xl font-bold text-hive-blue">
                                                        {title}
                                                    </h3>
                                                    {subtitle ? (
                                                        <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-500">
                                                            {subtitle}
                                                        </p>
                                                    ) : null}

                                                    <p className="mt-4 text-base leading-7 text-gray-600">
                                                        {summary}
                                                    </p>

                                                    {details.length ? (
                                                        <ul className="mt-5 space-y-2 text-sm leading-6 text-gray-700">
                                                            {details.map((detail) => (
                                                                <li key={detail} className="flex gap-2">
                                                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-hive-orange" />
                                                                    <span>{detail}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : null}

                                                    {note ? (
                                                        <p className="mt-5 text-sm leading-7 text-gray-700">
                                                            {note}{" "}
                                                            {card.noteLinkHref && noteLinkLabel ? (
                                                                <Link
                                                                    href={card.noteLinkHref}
                                                                    className="font-semibold text-hive-blue underline decoration-hive-blue/40 underline-offset-4 hover:text-hive-orange"
                                                                >
                                                                    {noteLinkLabel}
                                                                </Link>
                                                            ) : null}
                                                        </p>
                                                    ) : null}

                                                    {ctaLabel && card.ctaHref ? (
                                                        <div className="mt-6">
                                                            <ActionLink
                                                                href={card.ctaHref}
                                                                className={cardLinkClassName}
                                                            >
                                                                {ctaLabel}
                                                            </ActionLink>
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </article>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
                    );
                }

                // ─── ACCESSIBILITY ───────────────────────────────────────────────
                if (section._type === "sectionSupportAccessibility") {
                    return (
                        <section key={key} className="bg-hive-blue/5 px-6 py-20 md:py-24">
                            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                                <div className="relative overflow-hidden rounded-[2rem] border border-hive-blue/10 bg-white shadow-sm">
                                    <div className="relative aspect-[4/3] w-full">
                                        <Image
                                            src={
                                                section.imageUrl ??
                                                copy.support.accessibilityImage.src
                                            }
                                            alt={copy.support.accessibilityImage.alt}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 40vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p className="site-subheading text-hive-orange">
                                        {r(
                                            section.eyebrow,
                                            language,
                                            copy.support.accessibilityEyebrow,
                                        )}
                                    </p>
                                    <h2 className="mt-3 text-3xl font-bold text-hive-blue md:text-4xl">
                                        {r(
                                            section.title,
                                            language,
                                            copy.support.accessibilityTitle,
                                        )}
                                    </h2>
                                    <p className="mt-5 text-lg leading-8 text-gray-600">
                                        {r(
                                            section.body,
                                            language,
                                            copy.support.accessibilityBody,
                                        )}
                                    </p>
                                </div>
                            </div>
                        </section>
                    );
                }

                // ─── RESOURCES ───────────────────────────────────────────────────
                if (section._type === "sectionSupportResources") {
                    const resourceButtons: Array<{
                        _key?: string;
                        label: unknown;
                        href?: string;
                    }> = section.buttons?.length
                        ? section.buttons
                        : copy.support.resourceButtons;

                    return (
                        <section
                            key={key}
                            className="bg-white px-6 py-20 text-center md:py-24"
                        >
                            <div className="mx-auto flex max-w-4xl flex-col items-center">
                                <h2 className="text-3xl font-bold text-hive-blue md:text-5xl">
                                    {r(section.title, language, copy.support.resourcesTitle)}
                                </h2>

                                <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
                                    {r(section.body, language, copy.support.resourcesBody)}
                                </p>

                                <div className="mt-10 flex flex-wrap justify-center gap-4">
                                    {resourceButtons.map((resource, i) => {
                                        const copyButtonLabel =
                                            copy.support.resourceButtons[i]?.label ?? "";
                                        const label = r(
                                            resource.label,
                                            language,
                                            copyButtonLabel,
                                        );

                                        if (!resource.href) return null;
                                        if (!label) return null;

                                        return (
                                            <ActionLink
                                                key={resource._key ?? label}
                                                href={resource.href}
                                                className={resourceButtonClassName}
                                            >
                                                {label}
                                            </ActionLink>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
                    );
                }

                return (
                    <GenericSectionRenderer
                        key={key}
                        sections={[section as GenericSection]}
                    />
                );
            })}
        </main>
    );
}