"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage, useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import GenericSectionRenderer, { type GenericSection } from "@/components/generic-section-renderer";
import type { AwarenessPageData } from "@/sanity/queries/awarenessPage";

const DEFAULT_SECTIONS = [
    { _type: "sectionAwarenessHero", _key: "default-hero" },
    { _type: "sectionAwarenessValues", _key: "default-values" },
    { _type: "sectionAwarenessPrograms", _key: "default-programs" },
    { _type: "sectionAwarenessTraining", _key: "default-training" },
    { _type: "sectionAwarenessTechAssist", _key: "default-tech" },
    { _type: "sectionAwarenessCta", _key: "default-cta" },
] as const;

export default function AwarenessClient({ cmsContent }: { cmsContent: AwarenessPageData }) {
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
                    const heroEyebrow = section.eyebrow ?? copy.awareness.heroEyebrow;
                    const heroTitle = section.title ?? copy.awareness.heroTitle;
                    const heroBody = section.body ?? copy.awareness.heroBody;
                    return (
                        <section key={key} className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14">
                            <div className="mx-auto max-w-7xl">
                                <p className="site-eyebrow">{heroEyebrow}</p>
                                <h1 className="site-title mt-4">{heroTitle}</h1>
                                <p className="mx-auto mt-7 max-w-3xl text-lg leading-7 text-white/85 sm:text-xl">
                                    {heroBody}
                                </p>
                            </div>
                        </section>
                    );
                }

                // ── values ───────────────────────────────────────────────────
                if (section._type === "sectionAwarenessValues") {
                    const valuesTitle = section.title ?? copy.awareness.valuesTitle;
                    const valuesIntro = section.intro ?? copy.awareness.valuesIntro;
                    const valuesPillars = section.pillars ?? copy.awareness.valuesPillars;
                    const valuesOutro = section.outro ?? copy.awareness.valuesOutro;
                    const valuesListParts = new Intl.ListFormat(language, {
                        style: "long",
                        type: "conjunction",
                    }).formatToParts(valuesPillars as string[]);
                    return (
                        <section key={key} className="mx-auto max-w-4xl px-6 py-16 text-center">
                            <h2 className="mb-6 text-2xl font-bold text-hive-blue md:text-3xl">
                                {valuesTitle}
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-600">
                                {valuesIntro}{" "}
                                {valuesListParts.map((part, index) =>
                                    part.type === "element" ? (
                                        <span key={`${part.type}-${part.value}-${index}`} className="font-semibold text-hive-blue">
                                            {part.value}
                                        </span>
                                    ) : (
                                        <span key={`${part.type}-${index}`}>{part.value}</span>
                                    )
                                )}{" "}
                                {valuesOutro}
                            </p>
                        </section>
                    );
                }

                // ── programs ─────────────────────────────────────────────────
                if (section._type === "sectionAwarenessPrograms") {
                    const preventionTitle = section.title ?? copy.awareness.preventionTitle;
                    const preventionEyebrow = section.eyebrow ?? copy.awareness.preventionEyebrow;
                    const preventionBody = section.body ?? copy.awareness.preventionBody;
                    const signaturePrograms = section.programs ?? copy.awareness.signaturePrograms;
                    return (
                        <section key={key} className="mx-auto max-w-6xl space-y-20 px-6 py-16">
                            <div className="mx-auto max-w-4xl pb-4 text-center">
                                <h2 className="text-3xl font-bold text-hive-blue">{preventionTitle}</h2>
                                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-hive-orange">
                                    {preventionEyebrow}
                                </p>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">{preventionBody}</p>
                            </div>
                            <div className="mt-10 space-y-6">
                                {signaturePrograms[0] && (
                                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                        <div className="grid gap-6 md:grid-cols-2 md:items-center">
                                            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                                                <Image
                                                    src={"imageUrl" in signaturePrograms[0] && signaturePrograms[0].imageUrl
                                                        ? signaturePrograms[0].imageUrl
                                                        : "/member-images/BeeEmpowered.avif"}
                                                    alt={signaturePrograms[0].title ?? "BuzzPak program"}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-lg font-semibold text-hive-blue">{signaturePrograms[0].title}</p>
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {"languages" in signaturePrograms[0] && signaturePrograms[0].languages ? (
                                                        <span className="inline-block rounded-full bg-hive-blue/10 px-3 py-1 text-sm font-semibold text-hive-blue">
                                                            {signaturePrograms[0].languages}
                                                        </span>
                                                    ) : null}
                                                </div>
                                                <p className="mt-3 text-sm leading-relaxed text-gray-600">{signaturePrograms[0].body}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="grid gap-6 md:grid-cols-2">
                                    {signaturePrograms.slice(1).map((program: any) => (
                                        <div key={program.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                            <p className="text-center text-lg font-semibold text-hive-blue">{program.title}</p>
                                            {"badge" in program && program.badge ? (
                                                <div className="mt-2 text-center">
                                                    <span className="inline-block rounded-full bg-hive-orange/10 px-3 py-1 text-sm font-bold text-hive-orange">
                                                        {program.badge}
                                                    </span>
                                                </div>
                                            ) : null}
                                            <p className="mt-3 text-center text-sm leading-relaxed text-gray-600">{program.body}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    );
                }

                // ── training ─────────────────────────────────────────────────
                if (section._type === "sectionAwarenessTraining") {
                    const trainingTitle = section.title ?? copy.awareness.trainingTitle;
                    const trainingEyebrow = section.eyebrow ?? copy.awareness.trainingEyebrow;
                    const trainingBody = section.body ?? copy.awareness.trainingBody;
                    const trainingNote = section.note ?? copy.awareness.trainingNote;
                    const trainingSeries = section.trainingSeries ?? copy.awareness.trainingSeries;
                    const trainingContactNote = section.contactNote ?? copy.awareness.trainingContactNote;
                    return (
                        <section key={key} className="mx-auto max-w-6xl px-6 py-16">
                            <div className="mx-auto max-w-3xl text-center">
                                <h2 className="text-3xl font-bold text-hive-blue">{trainingTitle}</h2>
                                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-hive-orange">
                                    {trainingEyebrow}
                                </p>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">{trainingBody}</p>
                                <p className="mt-8 text-lg italic text-gray-500">{trainingNote}</p>
                            </div>
                            <div className="mt-10">
                                <ul className="grid gap-3 md:grid-cols-2">
                                    {trainingSeries.map(({ title, badge }: any) => (
                                        <li key={title} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                                            <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-hive-yellow" />
                                            <div>
                                                <p className="text-base font-semibold text-hive-blue">{title}</p>
                                                {badge ? (
                                                    <span className="mt-1 inline-block rounded-full bg-hive-orange/10 px-3 py-1 text-xs font-bold text-hive-orange">
                                                        {badge}
                                                    </span>
                                                ) : null}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-8 text-center text-base text-gray-600">{trainingContactNote}</p>
                            </div>
                            <div className="mt-10 flex justify-center">
                                <Button asChild className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white hover:bg-hive-orange/90">
                                    <Link href="/contact?subject=programs-and-services#contact-form">Contact Us</Link>
                                </Button>
                            </div>
                        </section>
                    );
                }

                // ── tech assist ──────────────────────────────────────────────
                if (section._type === "sectionAwarenessTechAssist") {
                    const taTitle = section.title ?? copy.awareness.technicalAssistanceTitle;
                    const taEyebrow = section.eyebrow ?? copy.awareness.technicalAssistanceEyebrow;
                    const taBody = section.body ?? copy.awareness.technicalAssistanceBody;
                    const taOfferings = section.offerings ?? copy.awareness.technicalAssistanceOfferings;
                    return (
                        <section key={key} className="mx-auto max-w-6xl px-6 py-16">
                            <div className="mx-auto max-w-3xl text-center">
                                <h2 className="text-3xl font-bold text-hive-blue">{taTitle}</h2>
                                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-hive-orange">
                                    {taEyebrow}
                                </p>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">{taBody}</p>
                            </div>
                            <div className="mt-10 grid gap-6 md:grid-cols-2">
                                {taOfferings.map((offering: any) => (
                                    <div key={offering.title} className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                                        <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-hive-yellow" />
                                        <div>
                                            <p className="text-lg font-semibold text-hive-blue">{offering.title}</p>
                                            <p className="mt-2 text-md text-gray-600">{offering.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                }

                // ── cta ──────────────────────────────────────────────────────
                if (section._type === "sectionAwarenessCta") {
                    const ctaTitle = section.title ?? copy.awareness.ctaTitle;
                    const ctaBody = section.body ?? copy.awareness.ctaBody;
                    const ctaButtons = section.buttons ?? [
                        { _key: "1", label: copy.awareness.requestTraining, href: "/contact", variant: "primary" as const },
                        { _key: "2", label: copy.awareness.bookCall, href: "https://calendly.com", variant: "primary" as const },
                        { _key: "3", label: copy.awareness.downloadCatalog, href: "/training-catalog.pdf", variant: "outline" as const },
                        { _key: "4", label: copy.awareness.contactTeam, href: "https://mail.google.com/mail/?view=cm&fs=1&to=kinnethia@thehivecc.org", variant: "primary" as const },
                    ];
                    return (
                        <section key={key} className="bg-gray-50 px-6 py-20 text-center">
                            <h2 className="mb-3 text-3xl font-bold text-hive-blue">{ctaTitle}</h2>
                            <p className="mx-auto mb-10 max-w-xl text-lg text-gray-500">{ctaBody}</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {ctaButtons.map((btn: any) =>
                                    btn.variant === "outline" ? (
                                        <Button key={btn._key} asChild variant="outline" className="h-auto rounded-full border-hive-orange px-8 py-4 text-base font-bold text-hive-orange hover:bg-hive-orange/5">
                                            <Link href={btn.href ?? "#"} target="_blank" rel="noopener noreferrer">{btn.label}</Link>
                                        </Button>
                                    ) : (
                                        <Button key={btn._key} asChild className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white hover:bg-hive-orange/90">
                                            <a href={btn.href ?? "#"} target="_blank" rel="noopener noreferrer">{btn.label}</a>
                                        </Button>
                                    )
                                )}
                            </div>
                        </section>
                    );
                }

                // ── generic fallback ─────────────────────────────────────────
                return <GenericSectionRenderer key={key} sections={[section as GenericSection]} />;
            })}
        </main>
    );
}
