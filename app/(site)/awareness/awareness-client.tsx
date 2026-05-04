"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage, useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import GenericSectionRenderer, {
    type GenericSection,
} from "@/components/generic-section-renderer";
import { resolveLocalized } from "@/lib/resolved-localized";
import type {
    AwarenessPageData,
    AwarenessProgram,
    AwarenessTrainingItem,
    AwarenessOffering,
    AwarenessCTAButton,
} from "@/sanity/queries/awarenessPage";

const DEFAULT_SECTIONS = [
    { _type: "sectionAwarenessHero", _key: "default-hero" },
    { _type: "sectionAwarenessValues", _key: "default-values" },
    { _type: "sectionAwarenessPrograms", _key: "default-programs" },
    { _type: "sectionAwarenessTraining", _key: "default-training" },
    { _type: "sectionAwarenessTechAssist", _key: "default-tech" },
    { _type: "sectionAwarenessCta", _key: "default-cta" },
] as const;

function r(value: unknown, language: "en" | "es-MX", fallback: string): string {
    return resolveLocalized(value, language, fallback);
}

export default function AwarenessClient({
                                            cmsContent,
                                        }: {
    cmsContent: AwarenessPageData;
}) {
    const copy = useSiteCopy();
    const { language } = useLanguage();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawSections = (cmsContent?.sections ?? []) as any[];
    const sections = rawSections.length > 0 ? rawSections : DEFAULT_SECTIONS;

    return (
        <main className="site-page text-gray-800">
            {sections.map((section) => {
                const key = section._key ?? section._type;

                // ── hero ──────────────────────────────────────────────────────
                if (section._type === "sectionAwarenessHero") {
                    return (
                        <section
                            key={key}
                            className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14"
                        >
                            <div className="mx-auto max-w-7xl">
                                <p className="site-eyebrow">
                                    {r(section.eyebrow, language, copy.awareness.heroEyebrow)}
                                </p>
                                <h1 className="site-title mt-4">
                                    {r(section.title, language, copy.awareness.heroTitle)}
                                </h1>
                                <p className="mx-auto mt-7 max-w-3xl text-lg leading-7 text-white/85 sm:text-xl">
                                    {r(section.body, language, copy.awareness.heroBody)}
                                </p>
                            </div>
                        </section>
                    );
                }

                // ── values ────────────────────────────────────────────────────
                if (section._type === "sectionAwarenessValues") {
                    const pillars: string[] =
                        section.pillars?.length
                            ? section.pillars.map((p: unknown) => r(p, language, "")).filter(Boolean)
                            : [...copy.awareness.valuesPillars];

                    const valuesListParts = new Intl.ListFormat(language, {
                        style: "long",
                        type: "conjunction",
                    }).formatToParts(pillars);

                    return (
                        <section
                            key={key}
                            className="mx-auto max-w-4xl px-6 py-16 text-center"
                        >
                            <h2 className="mb-6 text-2xl font-bold text-hive-blue md:text-3xl">
                                {r(section.title, language, copy.awareness.valuesTitle)}
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-600">
                                {r(section.intro, language, copy.awareness.valuesIntro)}{" "}
                                {valuesListParts.map((part, index) =>
                                    part.type === "element" ? (
                                        <span
                                            key={`${part.type}-${part.value}-${index}`}
                                            className="font-semibold text-hive-blue"
                                        >
                                            {part.value}
                                        </span>
                                    ) : (
                                        <span key={`${part.type}-${index}`}>
                                            {part.value}
                                        </span>
                                    ),
                                )}{" "}
                                {r(section.outro, language, copy.awareness.valuesOutro)}
                            </p>
                        </section>
                    );
                }

                // ── programs ──────────────────────────────────────────────────
                if (section._type === "sectionAwarenessPrograms") {
                    const programs: AwarenessProgram[] = section.programs?.length
                        ? section.programs
                        : copy.awareness.signaturePrograms.map((p, i) => ({
                            _key: String(i),
                            title: p.title,
                            body: p.body,
                            languages: "languages" in p ? p.languages : null,
                            badge: "badge" in p ? p.badge : null,
                            imageUrl: null,
                        }));

                    const firstProgram = programs[0];

                    return (
                        <section
                            key={key}
                            className="mx-auto max-w-6xl space-y-20 px-6 py-16"
                        >
                            <div className="mx-auto max-w-4xl pb-4 text-center">
                                <h2 className="text-3xl font-bold text-hive-blue">
                                    {r(
                                        section.title,
                                        language,
                                        copy.awareness.preventionTitle,
                                    )}
                                </h2>
                                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-hive-orange">
                                    {r(
                                        section.eyebrow,
                                        language,
                                        copy.awareness.preventionEyebrow,
                                    )}
                                </p>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    {r(
                                        section.body,
                                        language,
                                        copy.awareness.preventionBody,
                                    )}
                                </p>
                            </div>

                            <div className="mt-10 space-y-6">
                                {firstProgram ? (
                                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                        <div className="grid gap-6 md:grid-cols-2 md:items-center">
                                            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                                                <Image
                                                    src={
                                                        firstProgram.imageUrl ??
                                                        "/member-images/BeeEmpowered.avif"
                                                    }
                                                    alt={
                                                        r(firstProgram.title, language, "") ||
                                                        "BuzzPak program"
                                                    }
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-lg font-semibold text-hive-blue">
                                                    {r(
                                                        firstProgram.title,
                                                        language,
                                                        copy.awareness.signaturePrograms[0]
                                                            ?.title ?? "",
                                                    )}
                                                </p>
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {firstProgram.languages ? (
                                                        <span className="inline-block rounded-full bg-hive-blue/10 px-3 py-1 text-sm font-semibold text-hive-blue">
                                                            {r(
                                                                firstProgram.languages,
                                                                language,
                                                                "",
                                                            )}
                                                        </span>
                                                    ) : null}
                                                </div>
                                                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                                    {r(
                                                        firstProgram.body,
                                                        language,
                                                        copy.awareness.signaturePrograms[0]
                                                            ?.body ?? "",
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}

                                <div className="grid gap-6 md:grid-cols-2">
                                    {programs.slice(1).map((program, pi) => {
                                        const copyProgram =
                                            copy.awareness.signaturePrograms[pi + 1];
                                        return (
                                            <div
                                                key={
                                                    program._key ??
                                                    r(program.title, language, String(pi))
                                                }
                                                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                                            >
                                                <p className="text-center text-lg font-semibold text-hive-blue">
                                                    {r(
                                                        program.title,
                                                        language,
                                                        copyProgram?.title ?? "",
                                                    )}
                                                </p>
                                                {program.badge ? (
                                                    <div className="mt-2 text-center">
                                                        <span className="inline-block rounded-full bg-hive-orange/10 px-3 py-1 text-sm font-bold text-hive-orange">
                                                            {r(program.badge, language, "")}
                                                        </span>
                                                    </div>
                                                ) : null}
                                                <p className="mt-3 text-center text-sm leading-relaxed text-gray-600">
                                                    {r(
                                                        program.body,
                                                        language,
                                                        copyProgram?.body ?? "",
                                                    )}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
                    );
                }

                // ── training ──────────────────────────────────────────────────
                if (section._type === "sectionAwarenessTraining") {
                    const trainingSeries: AwarenessTrainingItem[] =
                        section.trainingSeries?.length
                            ? section.trainingSeries
                            : copy.awareness.trainingSeries.map((t, i) => ({
                                _key: String(i),
                                title: t.title,
                                badge: "badge" in t ? t.badge : null,
                            }));

                    return (
                        <section
                            key={key}
                            className="mx-auto max-w-6xl px-6 py-16"
                        >
                            <div className="mx-auto max-w-3xl text-center">
                                <h2 className="text-3xl font-bold text-hive-blue">
                                    {r(
                                        section.title,
                                        language,
                                        copy.awareness.trainingTitle,
                                    )}
                                </h2>
                                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-hive-orange">
                                    {r(
                                        section.eyebrow,
                                        language,
                                        copy.awareness.trainingEyebrow,
                                    )}
                                </p>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    {r(
                                        section.body,
                                        language,
                                        copy.awareness.trainingBody,
                                    )}
                                </p>
                                <p className="mt-8 text-lg italic text-gray-500">
                                    {r(
                                        section.note,
                                        language,
                                        copy.awareness.trainingNote,
                                    )}
                                </p>
                            </div>

                            <div className="mt-10">
                                <ul className="grid gap-3 md:grid-cols-2">
                                    {trainingSeries.map((item, ti) => {
                                        const copyItem =
                                            copy.awareness.trainingSeries[ti];
                                        const title = r(
                                            item.title,
                                            language,
                                            copyItem?.title ?? "",
                                        );
                                        const badge = item.badge
                                            ? r(item.badge, language, "")
                                            : null;
                                        return (
                                            <li
                                                key={item._key ?? title}
                                                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                                            >
                                                <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-hive-yellow" />
                                                <div>
                                                    <p className="text-base font-semibold text-hive-blue">
                                                        {title}
                                                    </p>
                                                    {badge ? (
                                                        <span className="mt-1 inline-block rounded-full bg-hive-orange/10 px-3 py-1 text-xs font-bold text-hive-orange">
                                                            {badge}
                                                        </span>
                                                    ) : null}
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <p className="mt-8 text-center text-base text-gray-600">
                                    {r(
                                        section.contactNote,
                                        language,
                                        copy.awareness.trainingContactNote,
                                    )}
                                </p>
                            </div>

                            <div className="mt-10 flex justify-center">
                                <Button
                                    asChild
                                    className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white hover:bg-hive-orange/90"
                                >
                                    <Link href="/contact?subject=programs-and-services#contact-form">
                                        Contact Us
                                    </Link>
                                </Button>
                            </div>
                        </section>
                    );
                }

                // ── tech assist ───────────────────────────────────────────────
                if (section._type === "sectionAwarenessTechAssist") {
                    const offerings: AwarenessOffering[] =
                        section.offerings?.length
                            ? section.offerings
                            : copy.awareness.technicalAssistanceOfferings.map(
                                (o, i) => ({
                                    _key: String(i),
                                    title: o.title,
                                    body: o.body,
                                }),
                            );

                    return (
                        <section
                            key={key}
                            className="mx-auto max-w-6xl px-6 py-16"
                        >
                            <div className="mx-auto max-w-3xl text-center">
                                <h2 className="text-3xl font-bold text-hive-blue">
                                    {r(
                                        section.title,
                                        language,
                                        copy.awareness.technicalAssistanceTitle,
                                    )}
                                </h2>
                                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-hive-orange">
                                    {r(
                                        section.eyebrow,
                                        language,
                                        copy.awareness.technicalAssistanceEyebrow,
                                    )}
                                </p>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    {r(
                                        section.body,
                                        language,
                                        copy.awareness.technicalAssistanceBody,
                                    )}
                                </p>
                            </div>

                            <div className="mt-10 grid gap-6 md:grid-cols-2">
                                {offerings.map((offering, oi) => {
                                    const copyOffering =
                                        copy.awareness.technicalAssistanceOfferings[oi];
                                    return (
                                        <div
                                            key={
                                                offering._key ??
                                                r(offering.title, language, String(oi))
                                            }
                                            className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                                        >
                                            <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-hive-yellow" />
                                            <div>
                                                <p className="text-lg font-semibold text-hive-blue">
                                                    {r(
                                                        offering.title,
                                                        language,
                                                        copyOffering?.title ?? "",
                                                    )}
                                                </p>
                                                <p className="mt-2 text-md text-gray-600">
                                                    {r(
                                                        offering.body,
                                                        language,
                                                        copyOffering?.body ?? "",
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    );
                }

                // ── cta ───────────────────────────────────────────────────────────────
                if (section._type === "sectionAwarenessCta") {
                    const ctaButtons: AwarenessCTAButton[] = section.buttons?.length
                        ? section.buttons
                        : [
                            { _key: "1", label: copy.awareness.requestTraining, href: "/contact", variant: "primary" as const },
                            { _key: "2", label: copy.awareness.bookCall, href: "https://calendly.com", variant: "primary" as const },
                            { _key: "3", label: copy.awareness.downloadCatalog, href: "/training-catalog.pdf", variant: "outline" as const },
                            { _key: "4", label: copy.awareness.contactTeam, href: "https://mail.google.com/mail/?view=cm&fs=1&to=kinnethia@thehivecc.org", variant: "primary" as const },
                        ];

                    return (
                        <section key={key} className="bg-gray-50 px-6 py-20 text-center">
                            <h2 className="mb-3 text-3xl font-bold text-hive-blue">
                                {r(section.title, language, copy.awareness.ctaTitle)}
                            </h2>
                            <p className="mx-auto mb-10 max-w-xl text-lg text-gray-500">
                                {r(section.body, language, copy.awareness.ctaBody)}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {ctaButtons.map((btn) => {
                                    const label = r(btn.label, language, "");
                                    const href = btn.href ?? "#";
                                    if (!label) return null;
                                    if (btn.variant === "outline") {
                                        return (
                                            <Button
                                                key={btn._key}
                                                asChild
                                                variant="outline"
                                                className="h-auto rounded-full border-hive-orange px-8 py-4 text-base font-bold text-hive-orange hover:bg-hive-orange/5"
                                            >
                                                <Link href={href} target="_blank" rel="noopener noreferrer">
                                                    {label}
                                                </Link>
                                            </Button>
                                        );
                                    }
                                    return (
                                        <Button
                                            key={btn._key}
                                            asChild
                                            className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white hover:bg-hive-orange/90"
                                        >
                                            <a href={href} target="_blank" rel="noopener noreferrer">
                                                {label}
                                            </a>
                                        </Button>
                                    );
                                })}
                            </div>
                        </section>
                    );
                }

                // ── generic fallback ──────────────────────────────────────────
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