"use client";

import Link from "next/link";
import { useSiteCopy } from "@/components/language-provider";

type Card = {
    id: string;
    title: string;
    subtitle?: string;
    summary: string;
    details?: readonly string[];
    ctaLabel?: string;
    href?: string;
    badge?: string;
};

type Props = {
    cmsCards: Card[];
    sectionTitle?: string;
    intro?: string;
};

const cardLinkClassName =
    "inline-flex items-center rounded-full border border-hive-blue px-4 py-2 text-sm font-semibold text-hive-blue transition hover:bg-hive-blue hover:text-white";

const CARD_META = [
    { id: "peer-advocacy", href: "tel:8038887725" },
    { id: "economic-relief", href: "/contact" },
    { id: "individual-counseling", href: "tel:8037668067" },
    { id: "healing-circles", href: "/contact" },
    { id: "holistic-support", href: "/contact" },
    { id: "refer-survivor", href: "/contact" },
    { id: "training-prevention", href: "mailto:hello@thehivecc.org" },
];

function isInternalHref(href?: string): href is string {
    return !!href && href.startsWith("/");
}

export default function SupportPageClient({
                                              cmsCards,
                                              sectionTitle,
                                              intro,
                                          }: Props) {
    const copy = useSiteCopy();

    const fallbackCards: Card[] = CARD_META.map((card, index) => {
        const content = copy.support.cards[index];

        return {
            id: card.id,
            href: card.href,
            title: content?.title ?? "",
            subtitle: content?.subtitle,
            summary: content?.summary ?? "",
            details: content?.details,
            ctaLabel: content?.ctaLabel,
        };
    });

    const cards = cmsCards.length > 0 ? cmsCards : fallbackCards;

    return (
        <main className="bg-white text-gray-900">
            <section className="site-hero relative left-1/2 right-1/2 mt-16 w-screen -translate-x-1/2 bg-hive-blue px-6 py-10 text-center text-white sm:px-10 sm:py-12 lg:py-14">
                <div className="mx-auto max-w-7xl">
                    <p className="site-eyebrow text-white/90">{copy.support.heroEyebrow}</p>
                    <h1 className="site-title mt-4">{copy.support.heroTitle}</h1>
                    <p className="mx-auto mt-7 max-w-3xl text-lg leading-7 text-white/85 sm:text-xl">
                        {copy.support.heroBody}
                    </p>
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
                        {sectionTitle || copy.support.servicesHeading}
                    </h2>

                    {intro ? (
                        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
                            {intro}
                        </p>
                    ) : null}

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {cards.map((card) => (
                            <article
                                key={card.id}
                                tabIndex={0}
                                className="rounded-3xl border border-hive-blue/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-hive-blue/30"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-xl font-bold text-hive-blue">{card.title}</h3>
                                    {card.badge ? (
                                        <span className="rounded-full bg-hive-yellow/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-hive-blue">
                      {card.badge}
                    </span>
                                    ) : null}
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

                                {card.ctaLabel && card.href ? (
                                    <div className="mt-6">
                                        {isInternalHref(card.href) ? (
                                            <Link href={card.href} className={cardLinkClassName}>
                                                {card.ctaLabel}
                                            </Link>
                                        ) : (
                                            <a href={card.href} className={cardLinkClassName}>
                                                {card.ctaLabel}
                                            </a>
                                        )}
                                    </div>
                                ) : card.ctaLabel ? (
                                    <div className="mt-6">
                                        <span className={cardLinkClassName}>{card.ctaLabel}</span>
                                    </div>
                                ) : null}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-hive-blue/5 px-6 py-24 text-center">
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
                    <h2 className="text-3xl font-bold text-hive-blue md:text-5xl">
                        {copy.support.safetyPlanTitle}
                    </h2>

                    <a
                        href="/support/emotional-safety-plan-template.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-hive-yellow px-12 py-5 text-xl font-bold text-gray-900 transition hover:bg-yellow-400"
                    >
                        {copy.support.safetyPlanButton}
                    </a>

                    <p className="text-lg leading-8 text-gray-600 md:text-xl">
                        {copy.support.safetyPlanBody}
                    </p>
                </div>
            </section>
        </main>
    );
}