"use client";

import Link from "next/link";

import { useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export default function AwarenessPage() {
  const copy = useSiteCopy();

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-hive-blue px-6 py-10 mt-16 text-center text-white sm:px-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <p className="site-eyebrow text-white/90">
            {copy.awareness.heroEyebrow}
          </p>
          <h1 className="site-title mt-4">{copy.awareness.heroTitle}</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-7 text-white/85 sm:text-xl">
            {copy.awareness.heroBody}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="mb-6 text-2xl font-bold text-hive-blue md:text-3xl">
          {copy.awareness.valuesTitle}
        </h2>
        <p className="text-lg leading-relaxed text-gray-600">
          {copy.awareness.valuesIntro}{" "}
          {copy.awareness.valuesPillars.map((pillar, index) => (
            <span key={pillar}>
              <span className="font-semibold text-hive-blue">{pillar}</span>
              {index < copy.awareness.valuesPillars.length - 2 ? ", " : null}
              {index === copy.awareness.valuesPillars.length - 2 ? ", and " : null}
            </span>
          ))}{" "}
          {copy.awareness.valuesOutro}
        </p>
      </section>

      <div className="mx-auto max-w-5xl border-t border-gray-200" />

      <section className="mx-auto max-w-6xl px-6 py-18 space-y-20">
        <div>
          <div className="mx-auto max-w-4xl pb-4 text-center">
            <h2 className="text-3xl font-bold text-hive-blue">
              {copy.awareness.preventionTitle}
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-hive-orange">
              {copy.awareness.preventionEyebrow}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {copy.awareness.preventionBody}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {copy.awareness.preventionCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-semibold text-center text-hive-blue">
                  {card.title}
                </p>
                {card.badge ? (
                  <div className="mt-2 text-center">
                    <span className="inline-block rounded-full bg-hive-orange/10 px-3 py-1 text-sm font-bold text-hive-orange">
                      {card.badge}
                    </span>
                  </div>
                ) : null}
                <p className="mt-3 text-sm leading-relaxed text-center text-gray-600">
                  {card.body}
                </p>
                {card.details ? (
                  <ul className="mt-3 ml-4 list-disc space-y-1 text-sm text-gray-600">
                    {card.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
                {card.tailored ? (
                  <p className="mt-2 text-sm text-center italic text-gray-500">
                    {copy.awareness.tailoredNote}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-hive-blue">
              {copy.awareness.trainingTitle}
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-hive-orange">
              {copy.awareness.trainingEyebrow}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {copy.awareness.trainingBody}
            </p>
            <p className="mt-8 text-lg italic text-gray-500">
              {copy.awareness.trainingNote}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {copy.awareness.trainingSeries.map(
              ({ title, body, badge, tailored }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <p className="font-semibold text-lg text-center text-hive-blue">
                    {title}
                  </p>
                  {badge ? (
                    <div className="mt-2 text-center">
                      <span className="inline-block rounded-full bg-hive-orange/10 px-3 py-1 text-sm font-bold text-hive-orange">
                        {badge}
                      </span>
                    </div>
                  ) : null}
                  <p className="mt-3 text-sm text-center leading-relaxed text-gray-600">
                    {body}
                  </p>
                  {tailored ? (
                    <p className="mt-2 text-sm text-center italic text-gray-500">
                      {copy.awareness.tailoredNote}
                    </p>
                  ) : null}
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-hive-blue">
              {copy.awareness.technicalAssistanceTitle}
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-hive-orange">
              {copy.awareness.technicalAssistanceEyebrow}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {copy.awareness.technicalAssistanceBody}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {copy.awareness.technicalAssistanceOfferings.map((offering) => (
              <div
                key={offering.title}
                className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-hive-yellow" />
                <div>
                  <p className="text-lg font-semibold text-hive-blue">
                    {offering.title}
                  </p>
                  <p className="mt-2 text-md text-gray-600">{offering.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl border-t border-gray-200" />

      <section className="bg-gray-50 px-6 py-20 text-center">
        <h2 className="mb-3 text-3xl font-bold text-hive-blue">
          {copy.awareness.ctaTitle}
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-gray-500">
          {copy.awareness.ctaBody}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white transition-colors hover:bg-hive-orange/90"
          >
            <Link href="/contact">{copy.awareness.requestTraining}</Link>
          </Button>
          <Button
            asChild
            className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white transition-colors hover:bg-hive-orange/90"
          >
            <Link
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.awareness.bookCall}
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-auto rounded-full border-hive-orange px-8 py-4 text-base font-bold text-hive-orange transition-colors hover:bg-hive-orange/5"
          >
            <Link
              href="/training-catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.awareness.downloadCatalog}
            </Link>
          </Button>
          <Button
            asChild
            className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white transition-colors hover:bg-hive-orange/90"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kinnethia@thehivecc.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.awareness.contactTeam}
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}