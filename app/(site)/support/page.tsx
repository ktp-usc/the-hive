"use client";

import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";
import { useSiteCopy } from "@/components/language-provider";

type CardMeta = {
    id: string;
    href?: string;
};

type SupportCard = {
    id: string;
    title: string;
    subtitle?: string;
    summary: string;
    image?: {
        src: string;
        alt: string;
    };
    details?: readonly string[];
    note?: string;
    noteLinkLabel?: string;
    noteLinkHref?: string;
    ctaLabel?: string;
    href?: string;
};

type ResourceButton = {
    label: string;
    href: string;
};

const CARD_META: CardMeta[] = [
    { id: "peer-advocacy", href: "tel:8038887725" },
    { id: "economic-relief", href: "/contact" },
    { id: "wellness-coaching", href: "tel:8037668067" },
    { id: "healing-circles" },
    { id: "holistic-support" },
    { id: "refer-survivor", href: "/contact" },
    { id: "training-prevention", href: "mailto:hello@thehivecc.org" },
];

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

    const openInNewTab = /^https?:\/\//.test(href);

    return (
        <a
            href={href}
            className={className}
            target={openInNewTab ? "_blank" : undefined}
            rel={openInNewTab ? "noopener noreferrer" : undefined}
        >
            {children}
        </a>
    );
}

export default function SupportPage() {
    const copy = useSiteCopy();

    const cards: SupportCard[] = CARD_META.map((card, index) => {
        const content = copy.support.cards[index];
        const note = content && "note" in content ? content.note : undefined;
        const noteLinkLabel =
            content && "noteLinkLabel" in content ? content.noteLinkLabel : undefined;
        const noteLinkHref =
            content && "noteLinkHref" in content ? content.noteLinkHref : undefined;

        return {
            id: card.id,
            href: card.href,
            title: content?.title ?? "",
            subtitle: content?.subtitle,
            summary: content?.summary ?? "",
            image: content?.image,
            details: content?.details,
            note,
            noteLinkLabel,
            noteLinkHref,
            ctaLabel: content?.ctaLabel,
        };
    });
    const resourceButtons: readonly ResourceButton[] = copy.support.resourceButtons ?? [];

    return (
        <main className="site-page text-gray-900">
            <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_32%)]" />
                <div className="mx-auto max-w-6xl">
                    <div className="relative z-10 text-center">
                        <p className="site-eyebrow">{copy.support.heroEyebrow}</p>
                        <h1 className="site-title mt-4">{copy.support.heroTitle}</h1>
                        <p className="mx-auto mt-7 max-w-3xl text-lg leading-7 text-white/85 sm:text-xl">
                            {copy.support.heroBody}
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white px-6 py-16 md:py-20">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div>
                        <p className="site-subheading text-hive-orange">
                            {copy.support.introEyebrow}
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-hive-blue md:text-4xl">
                            {copy.support.introTitle}
                        </h2>
                        <p className="mt-5 text-lg leading-8 text-gray-600">
                            {copy.support.introBody}
                        </p>
                    </div>

                    <div className="relative overflow-hidden rounded-[2rem] border border-hive-blue/10 shadow-sm">
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src={copy.support.introImage.src}
                                alt={copy.support.introImage.alt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                aria-labelledby="services-heading"
                className="bg-white px-6 py-20 md:py-24"
            >
                <div className="mx-auto max-w-6xl">
                    <h2
                        id="services-heading"
                        className="text-3xl font-bold tracking-tight text-hive-blue md:text-4xl"
                    >
                        {copy.support.servicesHeading}
                    </h2>
                    <p className="mt-3 text-base font-medium text-gray-600">
                        {copy.support.servicesLanguageNote}
                    </p>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {cards.map((card) => (
                            <article
                                key={card.id}
                                className="overflow-hidden rounded-3xl border border-hive-blue/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                {card.image ? (
                                    <div className="relative aspect-[16/10] w-full">
                                        <Image
                                            src={card.image.src}
                                            alt={card.image.alt}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                            className="object-cover"
                                        />
                                    </div>
                                ) : null}

                                <div className="p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="text-xl font-bold text-hive-blue">
                                            {card.title}
                                        </h3>
                                    </div>

                                    {card.subtitle ? (
                                        <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-500">
                                            {card.subtitle}
                                        </p>
                                    ) : null}

                                    <p className="mt-4 text-base leading-7 text-gray-600">
                                        {card.summary}
                                    </p>

                                    {card.details?.length ? (
                                        <ul className="mt-5 space-y-2 text-sm leading-6 text-gray-700">
                                            {card.details.map((detail) => (
                                                <li key={detail} className="flex gap-2">
                                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-hive-orange" />
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}

                                    {card.note ? (
                                        <p className="mt-5 text-sm leading-7 text-gray-700">
                                            {card.note}{" "}
                                            {card.noteLinkHref && card.noteLinkLabel ? (
                                                <Link
                                                    href={card.noteLinkHref}
                                                    className="font-semibold text-hive-blue underline decoration-hive-blue/40 underline-offset-4 hover:text-hive-orange"
                                                >
                                                    {card.noteLinkLabel}
                                                </Link>
                                            ) : null}
                                        </p>
                                    ) : null}

                                    {card.ctaLabel && card.href ? (
                                        <div className="mt-6">
                                            <ActionLink href={card.href} className={cardLinkClassName}>
                                                {card.ctaLabel}
                                            </ActionLink>
                                        </div>
                                    ) : null}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-hive-blue/5 px-6 py-20 md:py-24">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    <div className="relative overflow-hidden rounded-[2rem] border border-hive-blue/10 bg-white shadow-sm">
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src={copy.support.accessibilityImage.src}
                                alt={copy.support.accessibilityImage.alt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="site-subheading text-hive-orange">
                            {copy.support.accessibilityEyebrow}
                        </p>
                        <h2 className="mt-3 text-3xl font-bold text-hive-blue md:text-4xl">
                            {copy.support.accessibilityTitle}
                        </h2>
                        <p className="mt-5 text-lg leading-8 text-gray-600">
                            {copy.support.accessibilityBody}
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white px-6 py-20 text-center md:py-24">
                <div className="mx-auto flex max-w-4xl flex-col items-center">
                    <h2 className="text-3xl font-bold text-hive-blue md:text-5xl">
                        {copy.support.resourcesTitle}
                    </h2>
                    <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
                        {copy.support.resourcesBody}
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        {resourceButtons.map((resource) => (
                            <ActionLink
                                key={resource.label}
                                href={resource.href}
                                className={resourceButtonClassName}
                            >
                                {resource.label}
                            </ActionLink>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-6 py-20 text-center">
                <div className="mx-auto max-w-3xl rounded-[2rem] border border-hive-blue/10 bg-hive-blue px-8 py-12 text-white shadow-sm">
                    <h2 className="text-3xl font-bold md:text-4xl">
                        {copy.support.participateTitle}
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
                        {copy.support.participateBody}
                    </p>
                    <div className="mt-8">
                        <Link
                            href="/contact?subject=programs-and-services#contact-form"
                            className="inline-flex items-center rounded-full bg-hive-yellow px-8 py-4 text-base font-bold text-gray-900 transition hover:bg-yellow-400"
                        >
                            {copy.support.participateButton}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}