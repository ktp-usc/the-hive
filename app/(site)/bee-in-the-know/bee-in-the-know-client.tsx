"use client";

import { useSiteCopy } from "@/components/language-provider";
import GenericSectionRenderer, { type GenericSection } from "@/components/generic-section-renderer";
import type { BeeInTheKnowPageData } from "@/sanity/queries/beeInTheKnowPage";

const DEFAULT_SECTIONS = [
  { _type: "sectionHero", _key: "default-hero" },
] as const;

export default function BeeInTheKnowClient({ cmsContent }: { cmsContent: BeeInTheKnowPageData }) {
    const copy = useSiteCopy();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawSections = (cmsContent?.sections ?? []) as any[];
    const sections = rawSections.length > 0 ? rawSections : DEFAULT_SECTIONS;

    return (
        <main className="site-page">
            {sections.map((section) => {
                const key = section._key ?? section._type;

                if (section._type === "sectionHero") {
                    const title = section.headline ?? cmsContent?.title ?? copy.beeInTheKnow.title;
                    const subtitle = section.subheadline ?? null;
                    return (
                        <div key={key} className="site-page--narrow px-6 py-12 sm:px-10 lg:px-14">
                            <h1 className="site-heading text-center">{title}</h1>
                            {subtitle ? (
                                <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-7 text-white/85">
                                    {subtitle}
                                </p>
                            ) : null}
                        </div>
                    );
                }

                if (section._type === "sectionRichText") {
                    return (
                        <section key={key} className="mx-auto max-w-4xl px-6 py-10 sm:px-10">
                            {section.eyebrow ? (
                                <p className="text-sm font-semibold uppercase tracking-wide text-hive-orange">
                                    {section.eyebrow}
                                </p>
                            ) : null}
                            {section.heading ? (
                                <h2 className="mt-2 text-2xl font-bold text-hive-blue md:text-3xl">
                                    {section.heading}
                                </h2>
                            ) : null}
                            {section.body ? (
                                <p className="mt-4 text-lg leading-7 text-gray-600">{section.body}</p>
                            ) : null}
                        </section>
                    );
                }

                return <GenericSectionRenderer key={key} sections={[section as GenericSection]} />;
            })}
        </main>
    );
}
