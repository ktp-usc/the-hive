"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { resolveLocalized } from "@/lib/resolved-localized";

export type LocalizedValue =
    | string
    | {
    en?: string | null;
    "es-MX"?: string | null;
}
    | null
    | undefined;

export type GenericSection = {
    _key?: string;
    _type: string;
    headline?: LocalizedValue;
    subheadline?: LocalizedValue;
    ctaLabel?: LocalizedValue;
    ctaHref?: string | null;
    heroImages?: (string | null)[] | null;
    eyebrow?: LocalizedValue;
    heading?: LocalizedValue;
    body?: LocalizedValue;
    imageUrl?: string | null;
    slides?: Array<{
        _key?: string;
        title?: string | null;
        caption?: string | null;
        alt?: string | null;
        imageUrl?: string | null;
    }> | null;
    sectionTitle?: LocalizedValue;
    intro?: LocalizedValue;
    cards?: Array<{ _id: string; title?: string | null; body?: string | null }> | null;
    volunteerCards?: Array<{
        _key?: string;
        title?: string | null;
        description?: string | null;
    }> | null;
};

function SectionHero({ s, language }: { s: GenericSection; language: "en" | "es-MX" }) {
    const bgImage = s.heroImages?.[0];
    const headline = resolveLocalized(s.headline, language, "");
    const subheadline = resolveLocalized(s.subheadline, language, "");
    const ctaLabel = resolveLocalized(s.ctaLabel, language, "");
    const ctaHref = s.ctaHref ?? "";

    return (
        <section
            className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14"
            style={
                bgImage
                    ? {
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }
                    : undefined
            }
        >
            <div className="mx-auto max-w-7xl">
                {subheadline && <p className="site-eyebrow mb-4">{subheadline}</p>}
                {headline && <h1 className="site-title">{headline}</h1>}
                {ctaLabel && ctaHref && (
                    <Link href={ctaHref} className="site-button-primary mt-8 inline-flex">
                        {ctaLabel}
                    </Link>
                )}
            </div>
        </section>
    );
}

function SectionRichText({ s, language }: { s: GenericSection; language: "en" | "es-MX" }) {
    const eyebrow = resolveLocalized(s.eyebrow, language, "");
    const heading = resolveLocalized(s.heading, language, "");
    const body = resolveLocalized(s.body, language, "");

    return (
        <section className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
            <div className="mx-auto max-w-4xl text-center">
                {eyebrow && (
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-hive-orange">
                        {eyebrow}
                    </p>
                )}
                {heading && <h2 className="site-heading">{heading}</h2>}
                {body && <p className="site-copy mx-auto mt-4 max-w-2xl">{body}</p>}
            </div>
        </section>
    );
}

function SectionImageText({ s, language }: { s: GenericSection; language: "en" | "es-MX" }) {
    const heading = resolveLocalized(s.heading, language, "");
    const body = resolveLocalized(s.body, language, "");

    return (
        <section className="px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
            <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
                {s.imageUrl && (
                    <div className="overflow-hidden rounded-2xl">
                        <Image
                            src={s.imageUrl}
                            alt={heading}
                            width={800}
                            height={600}
                            className="h-auto w-full object-cover"
                        />
                    </div>
                )}
                <div>
                    {heading && (
                        <h2 className="site-heading mb-4 text-center">{heading}</h2>
                    )}
                    {body && (
                        <p className="site-copy mb-8 text-center">{body}</p>
                    )}
                </div>
            </div>
        </section>
    );
}

function SectionImageCarousel({
                                  s,
                                  language,
                              }: {
    s: GenericSection;
    language: "en" | "es-MX";
}) {
    const heading = resolveLocalized(s.heading, language, "");
    const body = resolveLocalized(s.body, language, "");

    return (
        <section className="px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
            <div className="mx-auto max-w-6xl">
                {heading && <h2 className="site-heading mb-4 text-center">{heading}</h2>}
                {body && <p className="site-copy mb-8 text-center">{body}</p>}

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {s.slides?.map((slide) => (
                        <div key={slide._key ?? slide.title} className="site-card overflow-hidden">
                            {slide.imageUrl && (
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={slide.imageUrl}
                                        alt={slide.alt ?? slide.title ?? ""}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <div className="p-4">
                                {slide.title && (
                                    <p className="font-semibold text-[var(--color-hive-blue)]">
                                        {slide.title}
                                    </p>
                                )}
                                {slide.caption && (
                                    <p className="site-copy mt-1 text-sm">{slide.caption}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SectionCardGrid({ s, language }: { s: GenericSection; language: "en" | "es-MX" }) {
    const title = resolveLocalized(s.sectionTitle, language, "");
    const intro = resolveLocalized(s.intro, language, "");

    return (
        <section className="px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
            <div className="mx-auto max-w-6xl">
                {title && <h2 className="site-heading mb-4 text-center">{title}</h2>}
                {intro && <p className="site-copy mb-8 text-center">{intro}</p>}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {s.cards?.map((card) => (
                        <div key={card._id} className="site-card p-6">
                            {card.title && (
                                <h3 className="font-semibold text-[var(--color-hive-blue)]">
                                    {card.title}
                                </h3>
                            )}
                            {card.body && <p className="site-copy mt-2 text-sm">{card.body}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SectionVolunteerCards({ s, language }: { s: GenericSection; language: "en" | "es-MX" }) {
    const title = resolveLocalized(s.sectionTitle, language, "");
    const intro = resolveLocalized(s.intro, language, "");
    const ctaLabel = resolveLocalized(s.ctaLabel, language, "");

    return (
        <section className="px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
            <div className="mx-auto max-w-6xl">
                {title && <h2 className="site-heading mb-4 text-center">{title}</h2>}
                {intro && <p className="site-copy mb-8 text-center">{intro}</p>}

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {s.volunteerCards?.map((card) => (
                        <div key={card._key ?? card.title} className="site-card p-6">
                            {card.title && (
                                <h3 className="font-semibold text-[var(--color-hive-blue)]">
                                    {card.title}
                                </h3>
                            )}
                            {card.description && (
                                <p className="site-copy mt-2 text-sm">{card.description}</p>
                            )}
                        </div>
                    ))}
                </div>

                {ctaLabel && s.ctaHref && (
                    <div className="mt-8 text-center">
                        <Link href={s.ctaHref} className="site-button-primary">
                            {ctaLabel}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

function SectionDonationOpportunity({ s, language }: { s: GenericSection; language: "en" | "es-MX" }) {
    const eyebrow = resolveLocalized(s.eyebrow, language, "");
    const title = resolveLocalized(s.sectionTitle, language, "");
    const body = resolveLocalized(s.body, language, "");
    const ctaLabel = resolveLocalized(s.ctaLabel, language, "");

    return (
        <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-12 text-center sm:px-10 sm:py-14">
            <div className="mx-auto max-w-3xl">
                {eyebrow && <p className="site-eyebrow mb-3">{eyebrow}</p>}
                {title && <h2 className="site-title">{title}</h2>}
                {body && <p className="site-copy-on-dark mx-auto mt-4 max-w-xl">{body}</p>}
                {ctaLabel && s.ctaHref && (
                    <Link href={s.ctaHref} className="site-button-primary mt-8 inline-flex">
                        {ctaLabel}
                    </Link>
                )}
            </div>
        </section>
    );
}

export default function GenericSectionRenderer({ sections }: { sections: GenericSection[] }) {
    const { language } = useLanguage();

    if (!sections.length) return null;

    return (
        <>
            {sections.map((s) => {
                switch (s._type) {
                    case "sectionHero":
                        return <SectionHero key={s._key ?? s._type} s={s} language={language} />;
                    case "sectionRichText":
                        return <SectionRichText key={s._key ?? s._type} s={s} language={language} />;
                    case "sectionImageText":
                        return <SectionImageText key={s._key ?? s._type} s={s} language={language} />;
                    case "sectionImageCarousel":
                        return <SectionImageCarousel key={s._key ?? s._type} s={s} language={language} />;
                    case "sectionCardGrid":
                        return <SectionCardGrid key={s._key ?? s._type} s={s} language={language} />;
                    case "sectionVolunteerCards":
                        return <SectionVolunteerCards key={s._key ?? s._type} s={s} language={language} />;
                    case "sectionDonationOpportunity":
                        return <SectionDonationOpportunity key={s._key ?? s._type} s={s} language={language} />;
                    default:
                        return null;
                }
            })}
        </>
    );
}