"use client";

import Link from "next/link";

import { useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export default function AwarenessPage() {
  const copy = useSiteCopy();

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="flex flex-col items-center justify-center bg-hive-blue px-6 py-24 text-center text-white">
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          {copy.awareness.heroTitle}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
          {copy.awareness.heroBody}
        </p>
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

      <section className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-6 py-20 md:grid-cols-3">
        <div>
          <h2 className="mb-2 text-2xl font-bold text-hive-blue">
            {copy.awareness.preventionTitle}
          </h2>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-hive-orange">
            {copy.awareness.preventionEyebrow}
          </p>
          <p className="mb-6 leading-relaxed text-gray-600">
            {copy.awareness.preventionBody}
          </p>

          <h3 className="mb-3 text-lg font-bold text-hive-blue">
            {copy.awareness.signatureProgramsTitle}
          </h3>

          <div className="flex flex-col gap-5">
            {copy.awareness.signaturePrograms.map((program) => (
              <div key={program.title} className="rounded-xl bg-gray-50 p-5">
                <p className="mb-1 font-semibold text-gray-800">{program.title}</p>
                {program.badge ? (
                  <p className="mb-2 text-xs font-medium text-hive-orange">
                    {program.badge}
                  </p>
                ) : null}
                <p className="text-sm leading-relaxed text-gray-600">
                  {program.body}
                </p>
                {program.details ? (
                  <ul className="mt-3 ml-4 list-disc space-y-1 text-sm text-gray-600">
                    {program.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-2xl font-bold text-hive-blue">
            {copy.awareness.trainingTitle}
          </h2>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-hive-orange">
            {copy.awareness.trainingEyebrow}
          </p>
          <p className="mb-2 leading-relaxed text-gray-600">
            {copy.awareness.trainingBody}
          </p>
          <p className="mb-6 text-sm italic text-gray-500">
            {copy.awareness.trainingNote}
          </p>

          <div className="flex flex-col gap-4">
            {copy.awareness.trainingSeries.map((training) => (
              <div key={training.title} className="rounded-xl bg-gray-50 p-4">
                <p className="mb-1 text-sm font-semibold text-gray-800">
                  {training.title}
                </p>
                {training.badge ? (
                  <span className="mb-2 inline-block rounded-full bg-hive-orange/10 px-3 py-0.5 text-xs font-bold text-hive-orange">
                    {training.badge}
                  </span>
                ) : null}
                <p className="text-sm leading-relaxed text-gray-600">
                  {training.body}
                </p>
                {training.tailored ? (
                  <p className="mt-2 text-xs italic text-gray-400">
                    {copy.awareness.tailoredNote}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-2xl font-bold text-hive-blue">
            {copy.awareness.technicalAssistanceTitle}
          </h2>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-hive-orange">
            {copy.awareness.technicalAssistanceEyebrow}
          </p>
          <p className="mb-6 leading-relaxed text-gray-600">
            {copy.awareness.technicalAssistanceBody}
          </p>

          <h3 className="mb-3 text-lg font-bold text-hive-blue">
            {copy.awareness.technicalAssistanceOfferingsTitle}
          </h3>
          <div className="flex flex-col gap-4">
            {copy.awareness.technicalAssistanceOfferings.map((offering) => (
              <div key={offering.title} className="flex items-start gap-3">
                <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-hive-yellow" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {offering.title}
                  </p>
                  <p className="text-sm text-gray-500">{offering.body}</p>
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
            className="h-auto rounded-full bg-hive-blue px-8 py-4 text-base font-bold text-white transition-colors hover:bg-hive-blue/90"
          >
            <Link href="/contact">{copy.awareness.requestTraining}</Link>
          </Button>
          <Button
            asChild
            className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white transition-colors hover:bg-hive-orange/90"
          >
            <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              {copy.awareness.bookCall}
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-auto rounded-full border-hive-blue px-8 py-4 text-base font-bold text-hive-blue transition-colors hover:bg-hive-blue/5"
          >
            <Link href="/training-catalog.pdf" target="_blank" rel="noopener noreferrer">
              {copy.awareness.downloadCatalog}
            </Link>
          </Button>
          <Button
            asChild
            className="h-auto rounded-full bg-hive-yellow px-8 py-4 text-base font-bold text-gray-900 transition-colors hover:bg-hive-yellow/90"
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
