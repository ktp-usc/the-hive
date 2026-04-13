"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage, useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import type {
    AwarenessPageData,
    AwarenessHeroSection,
    AwarenessValuesSection,
    AwarenessProgramsSection,
    AwarenessTrainingSection,
    AwarenessTechAssistSection,
    AwarenessCtaSection,
} from "@/sanity/queries/awarenessPage";

export default function AwarenessClient({ cmsContent }: { cmsContent: AwarenessPageData }) {
    const copy = useSiteCopy();
    const { language } = useLanguage();

    const sections = cmsContent?.sections ?? [];
    const hero = sections.find((s): s is AwarenessHeroSection => s._type === "sectionAwarenessHero");
    const values = sections.find((s): s is AwarenessValuesSection => s._type === "sectionAwarenessValues");
    const programs = sections.find((s): s is AwarenessProgramsSection => s._type === "sectionAwarenessPrograms");
    const training = sections.find((s): s is AwarenessTrainingSection => s._type === "sectionAwarenessTraining");
    const techAssist = sections.find((s): s is AwarenessTechAssistSection => s._type === "sectionAwarenessTechAssist");
    const cta = sections.find((s): s is AwarenessCtaSection => s._type === "sectionAwarenessCta");

    // ── hero ─────────────────────────────────────────────────────────────────
    const heroEyebrow = hero?.eyebrow ?? copy.awareness.heroEyebrow;
    const heroTitle = hero?.title ?? copy.awareness.heroTitle;
    const heroBody = hero?.body ?? copy.awareness.heroBody;

    // ── values ───────────────────────────────────────────────────────────────
    const valuesTitle = values?.title ?? copy.awareness.valuesTitle;
    const valuesIntro = values?.intro ?? copy.awareness.valuesIntro;
    const valuesPillars = values?.pillars ?? copy.awareness.valuesPillars;
    const valuesOutro = values?.outro ?? copy.awareness.valuesOutro;

    const valuesListParts = new Intl.ListFormat(language, {
        style: "long",
        type: "conjunction",
    }).formatToParts(valuesPillars as string[]);

    // ── programs ─────────────────────────────────────────────────────────────
    const preventionTitle = programs?.title ?? copy.awareness.preventionTitle;
    const preventionEyebrow = programs?.eyebrow ?? copy.awareness.preventionEyebrow;
    const preventionBody = programs?.body ?? copy.awareness.preventionBody;
    const signaturePrograms = programs?.programs ?? copy.awareness.signaturePrograms;

    // ── training ─────────────────────────────────────────────────────────────
    const trainingTitle = training?.title ?? copy.awareness.trainingTitle;
    const trainingEyebrow = training?.eyebrow ?? copy.awareness.trainingEyebrow;
    const trainingBody = training?.body ?? copy.awareness.trainingBody;
    const trainingNote = training?.note ?? copy.awareness.trainingNote;
    const trainingSeries = training?.trainingSeries ?? copy.awareness.trainingSeries;
    const trainingContactNote = training?.contactNote ?? copy.awareness.trainingContactNote;

    // ── tech assist ───────────────────────────────────────────────────────────
    const taTitle = techAssist?.title ?? copy.awareness.technicalAssistanceTitle;
    const taEyebrow = techAssist?.eyebrow ?? copy.awareness.technicalAssistanceEyebrow;
    const taBody = techAssist?.body ?? copy.awareness.technicalAssistanceBody;
    const taOfferings = techAssist?.offerings ?? copy.awareness.technicalAssistanceOfferings;

    // ── cta ───────────────────────────────────────────────────────────────────
    const ctaTitle = cta?.title ?? copy.awareness.ctaTitle;
    const ctaBody = cta?.body ?? copy.awareness.ctaBody;

    // Merge CMS buttons with fallback copy buttons
    const ctaButtons = cta?.buttons ?? [
        { _key: "1", label: copy.awareness.requestTraining, href: "/contact", variant: "primary" as const },
        { _key: "2", label: copy.awareness.bookCall, href: "https://calendly.com", variant: "primary" as const },
        { _key: "3", label: copy.awareness.downloadCatalog, href: "/training-catalog.pdf", variant: "outline" as const },
        { _key: "4", label: copy.awareness.contactTeam, href: "https://mail.google.com/mail/?view=cm&fs=1&to=kinnethia@thehivecc.org", variant: "primary" as const },
    ];

    return (
        <main className="site-page text-gray-800">
            <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14">
                <div className="mx-auto max-w-7xl">
                    <p className="site-eyebrow">{heroEyebrow}</p>
                    <h1 className="site-title mt-4">{heroTitle}</h1>
                    <p className="mx-auto mt-7 max-w-3xl text-lg leading-7 text-white/85 sm:text-xl">
                        {heroBody}
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-6 py-16 text-center">
                <h2 className="mb-6 text-2xl font-bold text-hive-blue md:text-3xl">
                    {valuesTitle}
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                    {valuesIntro}{" "}
                    {valuesListParts.map((part, index) =>
                        part.type === "element" ? (
                            <span
                                key={`${part.type}-${part.value}-${index}`}
                                className="font-semibold text-hive-blue"
                            >
                                {part.value}
                            </span>
                        ) : (
                            <span key={`${part.type}-${index}`}>{part.value}</span>
                        )
                    )}{" "}
                    {valuesOutro}
                </p>
            </section>

            <div className="mx-auto max-w-5xl border-t border-gray-200" />

            <section className="mx-auto max-w-6xl space-y-20 px-6 py-18">
                <div>
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
                                        <p className="text-lg font-semibold text-hive-blue">
                                            {signaturePrograms[0].title}
                                        </p>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {"languages" in signaturePrograms[0] && signaturePrograms[0].languages ? (
                                                <span className="inline-block rounded-full bg-hive-blue/10 px-3 py-1 text-sm font-semibold text-hive-blue">
                                                    {signaturePrograms[0].languages}
                                                </span>
                                            ) : null}
                                        </div>
                                        <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                            {signaturePrograms[0].body}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="grid gap-6 md:grid-cols-2">
                            {signaturePrograms.slice(1).map((program) => (
                                <div
                                    key={program.title}
                                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                                >
                                    <p className="text-center text-lg font-semibold text-hive-blue">{program.title}</p>
                                    {"badge" in program && program.badge ? (
                                        <div className="mt-2 text-center">
                                            <span className="inline-block rounded-full bg-hive-orange/10 px-3 py-1 text-sm font-bold text-hive-orange">
                                                {program.badge}
                                            </span>
                                        </div>
                                    ) : null}
                                    <p className="mt-3 text-center text-sm leading-relaxed text-gray-600">
                                        {program.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
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
                            {trainingSeries.map(({ title, badge }) => (
                                <li
                                    key={title}
                                    className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                                >
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
                        <Button
                            asChild
                            className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white hover:bg-hive-orange/90"
                        >
                            <Link href="/contact?subject=programs-and-services#contact-form">Contact Us</Link>
                        </Button>
                    </div>
                </div>

                <div>
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold text-hive-blue">{taTitle}</h2>
                        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-hive-orange">
                            {taEyebrow}
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">{taBody}</p>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {taOfferings.map((offering) => (
                            <div
                                key={offering.title}
                                className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                            >
                                <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-hive-yellow" />
                                <div>
                                    <p className="text-lg font-semibold text-hive-blue">{offering.title}</p>
                                    <p className="mt-2 text-md text-gray-600">{offering.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-5xl border-t border-gray-200" />

            <section className="bg-gray-50 px-6 py-20 text-center">
                <h2 className="mb-3 text-3xl font-bold text-hive-blue">{ctaTitle}</h2>
                <p className="mx-auto mb-10 max-w-xl text-lg text-gray-500">{ctaBody}</p>
                <div className="flex flex-wrap justify-center gap-4">
                    {ctaButtons.map((btn) =>
                        btn.variant === "outline" ? (
                            <Button
                                key={btn._key}
                                asChild
                                variant="outline"
                                className="h-auto rounded-full border-hive-orange px-8 py-4 text-base font-bold text-hive-orange hover:bg-hive-orange/5"
                            >
                                <Link href={btn.href ?? "#"} target="_blank" rel="noopener noreferrer">
                                    {btn.label}
                                </Link>
                            </Button>
                        ) : (
                            <Button
                                key={btn._key}
                                asChild
                                className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white hover:bg-hive-orange/90"
                            >
                                <a href={btn.href ?? "#"} target="_blank" rel="noopener noreferrer">
                                    {btn.label}
                                </a>
                            </Button>
                        )
                    )}
                </div>
            </section>
        </main>
    );
}
