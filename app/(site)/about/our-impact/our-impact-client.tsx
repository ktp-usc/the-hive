"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FileText, Award } from "lucide-react";

import { useLanguage, useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import GenericSectionRenderer, {
    type GenericSection,
} from "@/components/generic-section-renderer";
import { resolveLocalized } from "@/lib/resolved-localized";
import type {
    OurImpactPageData,
    ImpactMediaItem,
    ImpactAward,
    ImpactDocument,
} from "@/sanity/queries/ourImpactPage";

const DEFAULT_SECTIONS = [
    { _type: "sectionImpactHero", _key: "default-hero" },
    { _type: "sectionImpactMedia", _key: "default-media" },
    { _type: "sectionImpactAwards", _key: "default-awards" },
    { _type: "sectionImpactDocuments", _key: "default-documents" },
] as const;

function r(value: unknown, language: "en" | "es-MX", fallback: string): string {
    return resolveLocalized(value, language, fallback);
}

export default function OurImpactClient({
    cmsContent,
}: {
    cmsContent: OurImpactPageData;
}) {
    const copy = useSiteCopy();
    const { language } = useLanguage();
    const c = copy.ourImpact;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawSections = (cmsContent?.sections ?? []) as any[];
    const sections = rawSections.length > 0 ? rawSections : DEFAULT_SECTIONS;

    return (
        <main className="min-h-screen bg-white text-gray-800">
            {sections.map((section) => {
                const key = section._key ?? section._type;

                // ── hero ──────────────────────────────────────────────────────
                if (section._type === "sectionImpactHero") {
                    return (
                        <div key={key}>
                            <section className="site-hero relative left-1/2 right-1/2 mt-16 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14">
                                <div className="mx-auto max-w-4xl">
                                    <p className="site-eyebrow">
                                        {r(section.eyebrow, language, c.heroEyebrow)}
                                    </p>
                                    <h1 className="site-title mt-4">
                                        {r(section.title, language, c.heroTitle)}
                                    </h1>
                                    <p className="mx-auto mt-7 max-w-3xl text-lg leading-7 text-white/85 sm:text-xl">
                                        {r(section.body, language, c.heroBody)}
                                    </p>
                                </div>
                            </section>
                            {section.imageUrl ? (
                                <section className="px-6 py-10 sm:px-10 lg:px-12">
                                    <div className="mx-auto w-full max-w-sm">
                                        <Image
                                            src={section.imageUrl}
                                            alt="Hive community member"
                                            width={400}
                                            height={533}
                                            className="w-full rounded-2xl object-cover shadow-xl"
                                        />
                                    </div>
                                </section>
                            ) : null}
                        </div>
                    );
                }

                // ── media ─────────────────────────────────────────────────────
                if (section._type === "sectionImpactMedia") {
                    const mediaItems: ImpactMediaItem[] = section.items?.length
                        ? section.items
                        : [];

                    return (
                        <section key={key} className="mx-auto max-w-6xl px-6 py-20">
                            <div className="mx-auto max-w-3xl text-center">
                                <p className="text-sm font-semibold uppercase tracking-wide text-hive-orange">
                                    {r(section.eyebrow, language, c.mediaEyebrow)}
                                </p>
                                <h2 className="mt-2 text-3xl font-bold text-hive-blue">
                                    {r(section.title, language, c.mediaTitle)}
                                </h2>
                            </div>
                            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {mediaItems.map((item, mi) => {
                                    const title = r(item.title, language, "");
                                    return (
                                        <div
                                            key={item._key ?? String(mi)}
                                            className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                                        >
                                            {item.imageUrl ? (
                                                <div className="relative aspect-[4/3] w-full">
                                                    <Image
                                                        src={item.imageUrl}
                                                        alt={title}
                                                        fill
                                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="flex aspect-[4/3] w-full items-center justify-center bg-hive-blue/5">
                                                    <span className="text-4xl">🐝</span>
                                                </div>
                                            )}
                                            <div className="flex flex-1 flex-col p-4">
                                                <p className="text-base font-semibold leading-snug text-hive-blue">
                                                    {title}
                                                </p>
                                                {item.href ? (
                                                    <div className="mt-auto pt-4">
                                                        <a
                                                            href={item.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1 text-sm font-semibold text-hive-orange hover:underline"
                                                        >
                                                            {c.readMore}
                                                            <ExternalLink className="h-3.5 w-3.5" />
                                                        </a>
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    );
                }

                // ── awards ────────────────────────────────────────────────────
                if (section._type === "sectionImpactAwards") {
                    const awardItems: ImpactAward[] = section.awards?.length
                        ? section.awards
                        : c.awards.map((award, i) => ({
                              _key: String(i),
                              name: award.name,
                              year: award.year,
                              issuer: award.issuer,
                              description: award.description,
                              imageUrl: null,
                          }));

                    return (
                        <section
                            key={key}
                            className="mx-auto max-w-6xl border-t border-gray-200 px-6 py-20"
                        >
                            <div className="mx-auto max-w-3xl text-center">
                                <p className="text-sm font-semibold uppercase tracking-wide text-hive-orange">
                                    {r(section.eyebrow, language, c.awardsEyebrow)}
                                </p>
                                <h2 className="mt-2 text-3xl font-bold text-hive-blue">
                                    {r(section.title, language, c.awardsTitle)}
                                </h2>
                            </div>
                            <div className="mt-10 grid gap-6 md:grid-cols-3">
                                {awardItems.map((award, ai) => {
                                    const copyAward = c.awards[ai];
                                    const name = r(award.name, language, copyAward?.name ?? "");
                                    const issuer = r(award.issuer, language, copyAward?.issuer ?? "");
                                    const description = r(award.description, language, copyAward?.description ?? "");
                                    return (
                                        <div
                                            key={award._key ?? name}
                                            className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
                                        >
                                            {award.imageUrl ? (
                                                <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border border-gray-200">
                                                    <Image
                                                        src={award.imageUrl}
                                                        alt={name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-hive-yellow/20">
                                                    <Award className="h-7 w-7 text-hive-yellow" />
                                                </div>
                                            )}
                                            <p className="mt-4 text-lg font-bold text-hive-blue">
                                                {name}
                                            </p>
                                            {award.year ? (
                                                <span className="mt-1 inline-block rounded-full bg-hive-orange/10 px-3 py-0.5 text-xs font-bold text-hive-orange">
                                                    {award.year}
                                                </span>
                                            ) : null}
                                            <p className="mt-1 text-sm font-medium text-gray-500">
                                                {issuer}
                                            </p>
                                            <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                                {description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    );
                }

                // ── documents ─────────────────────────────────────────────────
                if (section._type === "sectionImpactDocuments") {
                    const docItems: ImpactDocument[] = section.documents?.length
                        ? section.documents
                        : c.documents.map((doc, i) => ({
                              _key: String(i),
                              title: doc.title,
                              description: doc.description,
                              href: doc.href,
                              cta: doc.cta,
                              external: doc.external,
                          }));

                    return (
                        <section
                            key={key}
                            className="mx-auto max-w-6xl border-t border-gray-200 px-6 py-20"
                        >
                            <div className="mx-auto max-w-3xl text-center">
                                <p className="text-sm font-semibold uppercase tracking-wide text-hive-orange">
                                    {r(section.eyebrow, language, c.documentsEyebrow)}
                                </p>
                                <h2 className="mt-2 text-3xl font-bold text-hive-blue">
                                    {r(section.title, language, c.documentsTitle)}
                                </h2>
                            </div>
                            <div className="mt-10 grid gap-6 md:grid-cols-2">
                                {docItems.map((doc, di) => {
                                    const copyDoc = c.documents[di];
                                    const title = r(doc.title, language, copyDoc?.title ?? "");
                                    const description = r(doc.description, language, copyDoc?.description ?? "");
                                    const cta = r(doc.cta, language, copyDoc?.cta ?? "");
                                    const href = doc.href ?? "#";
                                    const isExternal = doc.external ?? false;
                                    return (
                                        <div
                                            key={doc._key ?? title}
                                            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-hive-blue/10">
                                                <FileText className="h-6 w-6 text-hive-blue" />
                                            </div>
                                            <p className="mt-5 text-xl font-bold text-hive-blue">
                                                {title}
                                            </p>
                                            <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                                                {description}
                                            </p>
                                            <div className="mt-6">
                                                {isExternal ? (
                                                    <Button
                                                        asChild
                                                        className="rounded-full bg-hive-orange px-6 py-2.5 text-sm font-bold text-white hover:bg-hive-orange/90"
                                                    >
                                                        <a
                                                            href={href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2"
                                                        >
                                                            {cta}
                                                            <ExternalLink className="h-4 w-4" />
                                                        </a>
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        asChild
                                                        className="rounded-full bg-hive-orange px-6 py-2.5 text-sm font-bold text-white hover:bg-hive-orange/90"
                                                    >
                                                        <Link
                                                            href={href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2"
                                                        >
                                                            {cta}
                                                            <FileText className="h-4 w-4" />
                                                        </Link>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
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
