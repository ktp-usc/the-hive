"use client";

import Image from "next/image";
import { Flower2, HeartHandshake, Sparkles, Star, Users } from "lucide-react";
import { useState } from "react";

import { useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

type DonationTabId = "casita" | "keepers";

type VolunteerOpportunity = {
  title: string;
  description: string;
};

type KeeperTier = {
  amount: string;
  yearly: string;
  name: string;
  description: string;
};

type TierStyle = {
  accent: string;
};

type ImpactAreaMedia = {
  src: string;
};

const tierStyles: TierStyle[] = [
  { accent: "#fff0de" },
  { accent: "#ffd9b3" },
  { accent: "#ffc083" },
  { accent: "#f3a351" },
];

const impactAreaMedia: ImpactAreaMedia[] = [
  { src: "/donations/keepersclub2.avif" },
  { src: "/donations/keepersclub3.avif" },
  { src: "/donations/keepersclub4.avif" },
  { src: "/donations/keepersclub5.avif" },
];

function FeatureImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="site-panel overflow-hidden p-3">
      <div className="flex w-full items-center justify-center rounded-xl bg-gray-50">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={1500}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-auto max-h-[32rem] w-full rounded-xl object-contain"
        />
      </div>
    </div>
  );
}

export default function DonationsPage() {
  const copy = useSiteCopy();
  const pageCopy = copy.donations.page;
  const [activeTab, setActiveTab] = useState<DonationTabId>("casita");

  const tabs: Array<{ id: DonationTabId; label: string }> = [
    { id: "casita", label: pageCopy.tabs.casita },
    { id: "keepers", label: pageCopy.tabs.keepers },
  ];

  return (
    <main className="site-page">
      <div className="site-page--narrow space-y-10">
        <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <p className="site-eyebrow text-white/90">{pageCopy.heroEyebrow}</p>
            <h1 className="site-title mt-4">{pageCopy.heroTitle}</h1>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                className="h-auto rounded-full bg-hive-orange px-6 py-4 text-sm font-semibold text-white hover:bg-hive-orange/90"
              >
                <a
                  href="https://thehivecc.networkforgood.com/projects/204053-what-is-hope"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pageCopy.primaryCta}
                </a>
              </Button>
              <Button
                asChild
                className="h-auto rounded-full border border-white bg-transparent px-6 py-4 text-sm font-semibold text-white hover:bg-white/10"
              >
                <a
                  href="https://pointapp.org/orgs/7916"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pageCopy.secondaryCta}
                </a>
              </Button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white/95 p-5 text-left">
                <Flower2 className="h-5 w-5 text-hive-blue" />
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                  {pageCopy.highlights[0].title}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {pageCopy.highlights[0].body}
                </p>
              </div>
              <div className="rounded-xl bg-white/95 p-5 text-left">
                <HeartHandshake className="h-5 w-5 text-hive-orange" />
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                  {pageCopy.highlights[1].title}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {pageCopy.highlights[1].body}
                </p>
              </div>
              <div className="rounded-xl bg-white/95 p-5 text-left">
                <Users className="h-5 w-5 text-hive-orange" />
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                  {pageCopy.highlights[2].title}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {pageCopy.highlights[2].body}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
          <h2 className="site-heading">{pageCopy.volunteerTitle}</h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {pageCopy.volunteerOpportunities.map((opportunity: VolunteerOpportunity) => (
              <article key={opportunity.title} className="site-card p-5">
                <h3 className="text-[1.15rem] font-semibold leading-tight text-hive-blue">
                  {opportunity.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {opportunity.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-hive-orange">
              {pageCopy.givingSectionsEyebrow}
            </p>
            <h2 className="site-heading mt-4">
              {pageCopy.givingSectionsTitle}
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;

              return (
                <Button
                  key={tab.id}
                  type="button"
                  variant="ghost"
                  onClick={() => setActiveTab(tab.id)}
                  className="rounded-full border px-5 py-3 text-sm font-semibold transition"
                >
                  {tab.label}
                </Button>
              );
            })}
          </div>

          <div className="mt-12">
            {activeTab === "casita" ? (
              <section className="space-y-10">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <article className="px-2 sm:px-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hive-orange">
                      {pageCopy.casita.eyebrow}
                    </p>
                    <h3 className="mt-4 text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                      {pageCopy.casita.title}
                    </h3>
                    <div className="mt-6 space-y-6 text-lg leading-9 text-gray-600">
                      <p>{pageCopy.casita.paragraphs[0]}</p>
                      <p>{pageCopy.casita.paragraphs[1]}</p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button
                        asChild
                        className="h-auto rounded-full bg-hive-blue px-8 py-4 text-base font-medium text-white hover:bg-hive-blue/90"
                      >
                        <a
                          href="https://thehivecc.networkforgood.com/projects/204053-what-is-hope"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pageCopy.casita.cta}
                        </a>
                      </Button>
                    </div>
                  </article>

                  <FeatureImage
                    src="/donations/casitaofcare3.avif"
                    alt={pageCopy.casita.mainAlt}
                  />
                </div>

                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <FeatureImage
                    src="/donations/casitaofcare2.avif"
                    alt={pageCopy.casita.detailAlt}
                  />

                  <article className="px-2 sm:px-4">
                    <h4 className="text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                      {pageCopy.casita.refugeTitle}
                    </h4>
                    <div className="mt-6 space-y-6 text-lg leading-9 text-gray-600">
                      {pageCopy.casita.refugeParagraphs.map((paragraph: string) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                </div>

                <div className="site-card p-6 text-center sm:p-8 lg:p-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hive-blue">
                    {pageCopy.casita.communityEyebrow}
                  </p>
                  <h4 className="mx-auto mt-4 max-w-5xl text-3xl font-bold leading-tight text-hive-blue sm:text-4xl">
                    {pageCopy.casita.communityTitle}
                  </h4>
                  <p className="mx-auto mt-6 max-w-4xl text-xl leading-10 text-gray-500">
                    {pageCopy.casita.communityLead}
                  </p>

                  <div className="mx-auto mt-10 max-w-5xl space-y-8 text-lg leading-10 text-gray-800">
                    {pageCopy.casita.communityParagraphs.map((paragraph: string) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="site-card p-6 sm:p-8">
                  <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hive-orange">
                        {pageCopy.casita.waysEyebrow}
                      </p>
                      <h4 className="mt-3 text-3xl font-bold text-hive-blue">
                        {pageCopy.casita.waysTitle}
                      </h4>
                      <p className="mt-4 text-base leading-8 text-gray-600">
                        {pageCopy.casita.waysBody}
                      </p>
                      <div className="mt-6">
                        <div className="flex flex-wrap gap-3">
                          <Button
                            asChild
                            className="h-auto rounded-full border border-hive-blue bg-white px-6 py-4 text-base text-hive-blue hover:bg-hive-blue/5"
                          >
                            <a
                              href="https://pointapp.org/orgs/7916"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {pageCopy.casita.volunteerCta}
                            </a>
                          </Button>
                          <Button
                            asChild
                            className="h-auto rounded-full bg-hive-orange px-6 py-4 text-base font-medium text-white hover:bg-hive-orange/90"
                          >
                            <a
                              href="https://www.amazon.com/hz/wishlist/ls/OIKGIA7FGP0W?ref_=wl_share"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {pageCopy.casita.wishlistCta}
                            </a>
                          </Button>
                        </div>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600">
                          {pageCopy.casita.wishlistNote}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      {pageCopy.casita.waysToGive.map((item: { title: string; description: string }) => (
                        <div key={item.title} className="rounded-xl bg-gray-50 p-5">
                          <Sparkles className="h-4 w-4 text-hive-blue" />
                          <p className="mt-3 text-base font-semibold text-hive-blue">
                            {item.title}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <section className="space-y-8 text-center">
                  <div className="site-card px-6 py-10 sm:px-10 sm:py-12">
                    <h4 className="text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                      {pageCopy.casita.dedicationTitle}
                    </h4>
                    <div className="mx-auto mt-6 max-w-4xl space-y-6 text-lg leading-10 text-gray-800">
                      {pageCopy.casita.dedicationParagraphs.map((paragraph: string) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="site-card px-6 py-10 sm:px-10 sm:py-12">
                    <h4 className="text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                      {pageCopy.casita.thanksTitle}
                    </h4>
                    <p className="mx-auto mt-6 max-w-4xl text-lg leading-10 text-gray-800">
                      {pageCopy.casita.thanksBody}
                    </p>
                  </div>
                </section>
              </section>
            ) : null}

            {activeTab === "keepers" ? (
              <section className="space-y-10">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <article className="px-2 sm:px-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hive-blue">
                      {pageCopy.keepers.eyebrow}
                    </p>
                    <h3 className="mt-4 text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                      {pageCopy.keepers.title}
                    </h3>
                    <div className="mt-6 space-y-6 text-lg leading-9 text-gray-600">
                      {pageCopy.keepers.paragraphs.map((paragraph: string) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button
                        asChild
                        className="h-auto rounded-full bg-hive-blue px-8 py-4 text-base font-medium text-white hover:bg-hive-blue/90"
                      >
                        <a
                          href="https://thehivecc.networkforgood.com/projects/204053-what-is-hope"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pageCopy.keepers.cta}
                        </a>
                      </Button>
                    </div>
                  </article>

                  <FeatureImage
                    src="/donations/keepersclub1.avif"
                    alt={pageCopy.keepers.mainAlt}
                  />
                </div>

                <div className="mx-auto max-w-4xl">
                  <article className="site-card px-6 py-8 text-center sm:px-8">
                    <div className="flex items-center justify-center gap-3">
                      <Star className="h-5 w-5 text-hive-orange" />
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hive-orange">
                        {pageCopy.keepers.benefitsEyebrow}
                      </p>
                    </div>
                    <h4 className="mt-4 text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                      {pageCopy.keepers.benefitsTitle}
                    </h4>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {pageCopy.keepers.benefits.map((benefit: string) => (
                        <div key={benefit} className="rounded-xl bg-gray-50 p-4">
                          <p className="text-sm leading-7 text-gray-600">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-xl border border-hive-orange/20 bg-[#fff7ea] p-5 text-left">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-hive-orange">
                        {pageCopy.keepers.contactLabel}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {pageCopy.keepers.contactPrefix}{" "}
                        <a className="site-link" href="mailto:chio@thehivecc.org">
                          chio@thehivecc.org
                        </a>
                        .
                      </p>
                    </div>
                  </article>
                </div>

                <div className="site-card p-8 sm:p-10">
                  <div className="grid gap-8 lg:min-h-[44rem] lg:grid-cols-[0.85fr_1.15fr] lg:p-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hive-blue">
                        {pageCopy.keepers.monthlyEyebrow}
                      </p>
                      <h4 className="mt-3 text-3xl font-bold text-hive-blue">
                        {pageCopy.keepers.monthlyTitle}
                      </h4>
                      <p className="mt-4 text-base leading-8 text-gray-600">
                        {pageCopy.keepers.monthlyBody}
                      </p>
                      <div className="mt-6 rounded-xl border border-hive-blue/20 bg-hive-blue/5 p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-hive-blue">
                          {pageCopy.keepers.focusedImpactTitle}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-gray-600">
                          {pageCopy.keepers.focusedImpactBody}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {pageCopy.keepers.tiers.map((tier: KeeperTier, index: number) => (
                        <div
                          key={tier.name}
                          className="rounded-xl p-5 shadow-sm"
                          style={{
                            backgroundColor:
                              tierStyles[index]?.accent ?? "#fff0de",
                          }}
                        >
                          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                            {tier.amount}
                          </p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500/85">
                            {tier.yearly}
                          </p>
                          <p className="mt-2 text-xl font-semibold text-gray-900">
                            {tier.name}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-gray-600">
                            {tier.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <section className="site-card p-6 sm:p-8">
                  <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hive-orange">
                      {pageCopy.keepers.supportedEyebrow}
                    </p>
                    <h4 className="mt-3 text-3xl font-bold text-hive-blue sm:text-4xl">
                      {pageCopy.keepers.supportedTitle}
                    </h4>
                  </div>

                  <div className="mt-8 flex gap-4 overflow-x-auto pb-2 lg:overflow-visible">
                    {pageCopy.keepers.impactAreas.map(
                      (area: { title: string; alt: string }, index: number) => (
                        <article
                          key={area.title}
                          className="min-w-[240px] flex-1 overflow-hidden rounded-xl bg-white shadow-[0_12px_36px_rgba(32,42,69,0.08)]"
                        >
                          <div className="relative aspect-[4/4.6] w-full">
                            <Image
                              src={impactAreaMedia[index]?.src ?? "/donations/keepersclub2.avif"}
                              alt={area.alt}
                              fill
                              sizes="(max-width: 1024px) 240px, 25vw"
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h5 className="text-lg font-semibold leading-tight text-gray-900 xl:text-xl">
                              {area.title}
                            </h5>
                          </div>
                        </article>
                      )
                    )}
                  </div>
                </section>
              </section>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}