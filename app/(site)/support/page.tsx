"use client";

import Link from "next/link";
import { useSiteCopy } from "@/components/language-provider";

type Card = {
  id: string;
  href?: string;
};

const CARD_META: Card[] = [
  { id: "peer-advocacy", href: "tel:8038887725" },
  { id: "economic-relief", href: "/contact" },
  { id: "individual-counseling", href: "tel:8037668067" },
  { id: "healing-circles", href: "/support/healing-circles" },
  { id: "holistic-support" },
  { id: "refer-survivor", href: "/contact" },
  { id: "training-prevention", href: "mailto:hello@thehivecc.org" },
];

const cardLinkClassName =
  "inline-flex items-center rounded-full border border-hive-blue px-4 py-2 text-sm font-semibold text-hive-blue transition hover:bg-hive-blue hover:text-white";

export default function SupportPage() {
  const copy = useSiteCopy();
  const cards = CARD_META.map((card, index) => ({
    ...card,
    ...(copy.support.cards[index] ?? {}),
  }));

  return (
    <main className="bg-white text-gray-900">
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-[#1D979C] px-6 py-28 text-center text-white">
        <div className="mx-auto w-full max-w-5xl">
          <h1 className="text-5xl font-bold leading-none md:text-6xl xl:text-7xl">
            {copy.support.heroTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85 md:text-2xl">
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
            {copy.support.servicesHeading}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.id}
                tabIndex={0}
                className="rounded-3xl border border-hive-blue/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-hive-blue/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-hive-blue">
                    {card.title}
                  </h3>
                  {card.badge && (
                    <span className="rounded-full bg-hive-yellow/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-hive-blue">
                      {card.badge}
                    </span>
                  )}
                </div>

                {card.subtitle && (
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-500">
                    {card.subtitle}
                  </p>
                )}

                <p className="mt-4 text-base leading-7 text-gray-600">
                  {card.summary}
                </p>

                {card.details && (
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-gray-700">
                    {card.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-hive-orange" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {card.ctaLabel && card.href && (
                  <div className="mt-6">
                    {card.href.startsWith("/") ? (
                      <Link href={card.href} className={cardLinkClassName}>
                        {card.ctaLabel}
                      </Link>
                    ) : (
                      <a href={card.href} className={cardLinkClassName}>
                        {card.ctaLabel}
                      </a>
                    )}
                  </div>
                )}
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
            href="https://www.thehivecc.org/_files/ugd/8a8511_175f07e5966d4276b783f3ce90ea902f.pdf"
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
