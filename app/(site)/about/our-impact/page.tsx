"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FileText, Award, Newspaper } from "lucide-react";

import { useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export default function OurImpactPage() {
    const copy = useSiteCopy();
    const { heroEyebrow, heroBody, mediaEyebrow, mediaTitle, mediaItems, awardsEyebrow, awardsTitle, awards, documentsEyebrow, documentsTitle, documents } = copy.ourImpact;

    return (
        <main className="min-h-screen bg-white text-gray-800">
            {/* Hero */}
                <section className="site-hero relative left-1/2 right-1/2 mt-16 w-screen -translate-x-1/2 bg-hive-blue px-6 py-10 text-white sm:px-10 sm:py-12 lg:py-14">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="site-title">{heroEyebrow}</h1>
                        <p className="mx-auto mt-7 max-w-3xl text-lg leading-7 text-white/85 sm:text-xl">
                            {heroBody}
                        </p>
                    </div>
                </section>

                {/* Image between hero and content */}
                <section className="px-6 py-10 sm:px-10 lg:px-12">
                    <div className="mx-auto w-full max-w-sm">
                        <Image
                            src="/images/hive-community.png"
                            alt="Hive community member"
                            width={400}
                            height={533}
                            className="w-full rounded-2xl object-cover shadow-xl"
                        />
                    </div>
                </section>

            <div className="mx-auto max-w-6xl space-y-20 px-6 py-18">

                {/* In the Media */}
                <section>
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-wide text-hive-orange">
                            {mediaEyebrow}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-hive-blue">{mediaTitle}</h2>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {mediaItems.map((item) => (
                            <div
                                key={item.outlet}
                                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                            >
                                <div className="mb-3 flex items-center gap-2">
                                    <Newspaper className="h-4 w-4 shrink-0 text-hive-orange" />
                                    <span className="text-xs font-bold uppercase tracking-wide text-hive-orange">
                                        {item.outlet}
                                    </span>
                                </div>
                                <p className="text-base font-semibold text-hive-blue">{item.headline}</p>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                                    {item.description}
                                </p>
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-hive-blue hover:underline"
                                >
                                    Read more <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="border-t border-gray-200" />

                {/* Awards & Recognition */}
                <section>
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-wide text-hive-orange">
                            {awardsEyebrow}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-hive-blue">{awardsTitle}</h2>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {awards.map((award) => (
                            <div
                                key={award.name}
                                className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-hive-yellow/20">
                                    <Award className="h-7 w-7 text-hive-yellow" />
                                </div>
                                <p className="mt-4 text-lg font-bold text-hive-blue">{award.name}</p>
                                {award.year ? (
                                    <span className="mt-1 inline-block rounded-full bg-hive-orange/10 px-3 py-0.5 text-xs font-bold text-hive-orange">
                                        {award.year}
                                    </span>
                                ) : null}
                                <p className="mt-1 text-sm font-medium text-gray-500">{award.issuer}</p>
                                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                    {award.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="border-t border-gray-200" />

                {/* Reports & Plans */}
                <section>
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-wide text-hive-orange">
                            {documentsEyebrow}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-hive-blue">{documentsTitle}</h2>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {documents.map((doc) => (
                            <div
                                key={doc.title}
                                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-hive-blue/10">
                                    <FileText className="h-6 w-6 text-hive-blue" />
                                </div>
                                <p className="mt-5 text-xl font-bold text-hive-blue">{doc.title}</p>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                                    {doc.description}
                                </p>
                                <div className="mt-6">
                                    <Button
                                        asChild
                                        className="rounded-full bg-hive-orange px-6 py-2.5 text-sm font-bold text-white hover:bg-hive-orange/90"
                                    >
                                        {doc.external ? (
                                            <a
                                                href={doc.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2"
                                            >
                                                {doc.cta} <ExternalLink className="h-4 w-4" />
                                            </a>
                                        ) : (
                                            <Link
                                                href={doc.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2"
                                            >
                                                {doc.cta} <FileText className="h-4 w-4" />
                                            </Link>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}
