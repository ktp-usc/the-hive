"use client";

import { useSiteCopy } from "@/components/language-provider";
import type { BeeInTheKnowPageData, BeeHeroSection, BeeRichTextSection } from "@/sanity/queries/beeInTheKnowPage";

export default function BeeInTheKnowClient({ cmsContent }: { cmsContent: BeeInTheKnowPageData }) {
    const copy = useSiteCopy();

    const sections = cmsContent?.sections ?? [];
    const heroSec = sections.find((s): s is BeeHeroSection => s._type === "sectionHero");
    const richSections = sections.filter((s): s is BeeRichTextSection => s._type === "sectionRichText");

    const title = heroSec?.headline ?? cmsContent?.title ?? copy.beeInTheKnow.title;
    const subtitle = heroSec?.subheadline ?? null;

    return (
        <main className="site-page">
            <div className="site-page--narrow px-6 py-12 sm:px-10 lg:px-14">
                <h1 className="site-heading text-center">{title}</h1>
                {subtitle ? (
                    <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-7 text-white/85">
                        {subtitle}
                    </p>
                ) : null}
            </div>

            {richSections.map((section) => (
                <section key={section._key} className="mx-auto max-w-4xl px-6 py-10 sm:px-10">
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
            ))}
        </main>
    );
}
