"use client";

import { useState } from "react";
import Image from "next/image";
import { Flower2, HeartHandshake, Sparkles, Star, Users } from "lucide-react";

import { useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DonationTabId = "casita" | "keepers";

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
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-4xl border border-white/60 bg-white/80 p-3 shadow-[0_18px_60px_rgba(27,34,67,0.12)] sm:p-4",
        className
      )}
    >
      <div className="flex min-h-76 w-full items-center justify-center rounded-3xl bg-[radial-gradient(circle_at_top,rgba(255,248,236,0.9),rgba(244,248,250,0.9))]">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={1500}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-auto max-h-128 w-full rounded-[1.25rem] object-contain"
        />
      </div>
    </div>
  );
}

export default function DonationsPage() {
  const copy = useSiteCopy();
  const pageCopy = copy.donations.page;
  const [activeTab, setActiveTab] = useState<DonationTabId>("casita");

  const tabs = [
    { id: "casita" as const, label: pageCopy.tabs.casita },
    { id: "keepers" as const, label: pageCopy.tabs.keepers },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#fff9ef_0%,#f7f1e6_34%,#edf5f6_100%)] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <section className="relative overflow-hidden rounded-[2.75rem] border border-white/70 px-6 py-10 shadow-[0_32px_120px_rgba(32,42,69,0.10)] backdrop-blur sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute inset-0 bg-[url('/donations/casitaofcare1.avif')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,251,243,0.96)_0%,rgba(255,251,243,0.9)_38%,rgba(255,251,243,0.78)_58%,rgba(255,255,255,0.52)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.08))]" />
          <div className="pointer-events-none absolute -right-12 top-12 h-44 w-44 rounded-full bg-[#1d979c]/18 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-52 w-52 rounded-full bg-[#ec7424]/14 blur-3xl" />

          <div className="relative z-10 max-w-2xl xl:max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8794a]">
              {pageCopy.heroEyebrow}
            </p>
            <h1 className="mt-4 font-(--font-heading) text-4xl leading-tight text-slate-950 sm:text-5xl lg:text-[4.3rem] lg:leading-[1.02]">
              {pageCopy.heroTitle}
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-[#1d979c] px-6 py-6 text-sm font-semibold text-white shadow-[0_12px_34px_rgba(29,151,156,0.26)] hover:bg-[#187d81]"
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
                variant="ghost"
                className="rounded-full border border-black/10 bg-white/70 px-6 py-6 text-sm font-semibold text-slate-700 hover:border-[#1d979c]/25 hover:bg-white hover:text-slate-950"
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
              <div className="rounded-[1.75rem] border border-black/6 bg-white/82 p-5">
                <Flower2 className="h-5 w-5 text-[#1d979c]" />
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {pageCopy.highlights[0].title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {pageCopy.highlights[0].body}
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-black/6 bg-white/82 p-5">
                <HeartHandshake className="h-5 w-5 text-[#ec7424]" />
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {pageCopy.highlights[1].title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {pageCopy.highlights[1].body}
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-black/6 bg-white/82 p-5">
                <Users className="h-5 w-5 text-[#d8794a]" />
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {pageCopy.highlights[2].title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {pageCopy.highlights[2].body}
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12">
            <h2 className="font-(--font-heading) text-3xl text-slate-950 sm:text-4xl">
              {pageCopy.volunteerTitle}
            </h2>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {pageCopy.volunteerOpportunities.map((opportunity) => (
                <article
                  key={opportunity.title}
                  className="rounded-[1.75rem] border border-black/6 bg-white/82 p-5 shadow-[0_10px_30px_rgba(32,42,69,0.05)]"
                >
                  <h3 className="text-[1.15rem] font-semibold leading-tight text-slate-950">
                    {opportunity.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {opportunity.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/78 px-6 py-10 shadow-[0_30px_120px_rgba(32,42,69,0.10)] backdrop-blur sm:px-10 sm:py-14 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8794a]">
              {pageCopy.givingSectionsEyebrow}
            </p>
            <h2 className="mt-4 font-(--font-heading) text-3xl leading-tight text-slate-950 sm:text-4xl">
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
                  className={cn(
                    "cursor-pointer rounded-full border px-5 py-6 text-sm font-semibold tracking-[0.04em] transition",
                    isActive
                      ? "border-transparent bg-[#1d979c] text-white shadow-[0_12px_34px_rgba(29,151,156,0.28)] hover:bg-[#187d81]"
                      : "border-black/10 bg-white/70 text-slate-600 hover:border-[#1d979c]/25 hover:bg-white hover:text-slate-900"
                  )}
                >
                  {tab.label}
                </Button>
              );
            })}
          </div>

          <div className="mt-12">
            {activeTab === "casita" ? (
              <section className="mx-auto max-w-6xl space-y-14">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <article className="px-2 sm:px-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d8794a]">
                      {pageCopy.casita.eyebrow}
                    </p>
                    <h3 className="mt-4 font-(--font-heading) text-4xl leading-tight text-slate-700 sm:text-5xl">
                      {pageCopy.casita.title}
                    </h3>
                    <div className="mt-6 space-y-6 text-lg leading-9 text-slate-600">
                      <p>{pageCopy.casita.paragraphs[0]}</p>
                      <p>{pageCopy.casita.paragraphs[1]}</p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button
                        asChild
                        className="rounded-sm bg-[#1d979c] px-8 py-6 text-base font-medium text-white hover:bg-[#187d81]"
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
                    className="border-none bg-transparent p-0 shadow-none"
                  />
                </div>

                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <FeatureImage
                    src="/donations/casitaofcare2.avif"
                    alt={pageCopy.casita.detailAlt}
                    className="border-none bg-transparent p-0 shadow-none"
                  />

                  <article className="px-2 sm:px-4">
                    <h4 className="font-(--font-heading) text-4xl leading-tight text-slate-700 sm:text-5xl">
                      {pageCopy.casita.refugeTitle}
                    </h4>
                    <div className="mt-6 space-y-6 text-lg leading-9 text-slate-600">
                      {pageCopy.casita.refugeParagraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                </div>

                <div className="relative overflow-hidden rounded-4xl border border-black/8 shadow-[0_20px_70px_rgba(32,42,69,0.06)]">
                  <div className="absolute inset-0 bg-[url('/donations/casitaofcare4.png')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,251,242,0.9),rgba(255,255,255,0.9))]" />

                  <div className="relative z-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d8794a]">
                        {pageCopy.casita.waysEyebrow}
                      </p>
                      <h4 className="mt-3 font-(--font-heading) text-3xl text-slate-900">
                        {pageCopy.casita.waysTitle}
                      </h4>
                      <p className="mt-4 text-base leading-8 text-slate-600">
                        {pageCopy.casita.waysBody}
                      </p>
                      <div className="mt-6">
                        <div className="flex flex-wrap gap-3">
                          <Button
                            asChild
                            variant="ghost"
                            className="rounded-sm border border-black/10 bg-white px-6 py-6 text-base text-slate-700 hover:bg-slate-50"
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
                            className="rounded-sm bg-[#ec7424] px-6 py-6 text-base font-medium text-white hover:bg-[#d9651b]"
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
                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                          {pageCopy.casita.wishlistNote}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      {pageCopy.casita.waysToGive.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-3xl bg-white p-5 shadow-[0_10px_30px_rgba(32,42,69,0.06)]"
                        >
                          <Sparkles className="h-4 w-4 text-[#1d979c]" />
                          <p className="mt-3 text-base font-semibold text-slate-900">
                            {item.title}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[2.5rem] border border-[#f2dfc7] shadow-[0_20px_70px_rgba(32,42,69,0.06)]">
                  <div className="absolute inset-0 bg-[url('/donations/flowers.avif')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-white/4" />

                  <article className="relative z-10 mx-auto max-w-6xl bg-white/88 px-5 py-12 text-center backdrop-blur-[1px] sm:px-8 lg:px-16 lg:py-16">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1d979c]">
                      {pageCopy.casita.communityEyebrow}
                    </p>
                    <h4 className="mx-auto mt-4 max-w-5xl font-(--font-heading) text-3xl leading-tight text-[#1d979c] sm:text-4xl">
                      {pageCopy.casita.communityTitle}
                    </h4>
                    <p className="mx-auto mt-6 max-w-4xl text-xl leading-10 text-slate-500">
                      {pageCopy.casita.communityLead}
                    </p>

                    <div className="mx-auto mt-10 max-w-5xl space-y-8 text-lg leading-10 text-slate-800">
                      {pageCopy.casita.communityParagraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                </div>

                <section className="mx-auto max-w-5xl px-4 py-4 text-center">
                  <div className="space-y-12 rounded-[2.5rem] bg-white/82 px-6 py-10 shadow-[0_20px_70px_rgba(32,42,69,0.05)] sm:px-10 sm:py-14">
                    <div>
                      <h4 className="font-(--font-heading) text-4xl leading-tight text-[#1d979c] sm:text-5xl">
                        {pageCopy.casita.dedicationTitle}
                      </h4>
                      <div className="mx-auto mt-6 max-w-4xl space-y-6 text-lg leading-10 text-slate-800">
                        {pageCopy.casita.dedicationParagraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-(--font-heading) text-4xl leading-tight text-[#1d979c] sm:text-5xl">
                        {pageCopy.casita.thanksTitle}
                      </h4>
                      <p className="mx-auto mt-6 max-w-4xl text-lg leading-10 text-slate-800">
                        {pageCopy.casita.thanksBody}
                      </p>
                    </div>
                  </div>
                </section>
              </section>
            ) : null}

            {activeTab === "keepers" ? (
              <section className="mx-auto max-w-6xl space-y-14">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <article className="px-2 sm:px-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1d979c]">
                      {pageCopy.keepers.eyebrow}
                    </p>
                    <h3 className="mt-4 font-(--font-heading) text-4xl leading-tight text-slate-700 sm:text-5xl">
                      {pageCopy.keepers.title}
                    </h3>
                    <div className="mt-6 space-y-6 text-lg leading-9 text-slate-600">
                      {pageCopy.keepers.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button
                        asChild
                        className="rounded-sm bg-[#1d979c] px-8 py-6 text-base font-medium text-white hover:bg-[#187d81]"
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
                    className="border-none bg-transparent p-0 shadow-none"
                  />
                </div>

                <div className="mx-auto max-w-4xl">
                  <article className="px-2 text-center sm:px-4">
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-[#ec7424]" />
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d8794a]">
                        {pageCopy.keepers.benefitsEyebrow}
                      </p>
                    </div>
                    <h4 className="mt-4 font-(--font-heading) text-4xl leading-tight text-slate-700 sm:text-5xl">
                      {pageCopy.keepers.benefitsTitle}
                    </h4>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {pageCopy.keepers.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="rounded-3xl border border-black/6 bg-white/82 p-4 shadow-[0_10px_30px_rgba(32,42,69,0.06)]"
                        >
                          <p className="text-sm leading-7 text-slate-600">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-3xl border border-black/6 bg-[#fff7ea] p-5 text-left">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d8794a]">
                        {pageCopy.keepers.contactLabel}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {pageCopy.keepers.contactPrefix}{" "}
                        <a
                          className="font-semibold text-[#1d979c] underline decoration-[#1d979c]/30 underline-offset-4"
                          href="mailto:chio@thehivecc.org"
                        >
                          chio@thehivecc.org
                        </a>
                        .
                      </p>
                    </div>
                  </article>
                </div>

                <div className="relative overflow-hidden rounded-4xl border border-black/8 shadow-[0_20px_70px_rgba(32,42,69,0.06)]">
                  <div className="absolute inset-0 bg-[url('/donations/honeycomb.png?v=2')] bg-size-[340px_auto] bg-repeat opacity-85" />
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,248,236,0.48),rgba(255,255,255,0.54))]" />

                  <div className="relative z-10 grid gap-8 p-8 sm:p-10 lg:min-h-[44rem] lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1d979c]">
                        {pageCopy.keepers.monthlyEyebrow}
                      </p>
                      <h4 className="mt-3 font-(--font-heading) text-3xl text-slate-900">
                        {pageCopy.keepers.monthlyTitle}
                      </h4>
                      <p className="mt-4 text-base leading-8 text-slate-600">
                        {pageCopy.keepers.monthlyBody}
                      </p>
                      <div className="mt-6 rounded-[1.75rem] border border-dashed border-[#1d979c]/25 bg-[#1d979c]/6 p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1d979c]">
                          {pageCopy.keepers.focusedImpactTitle}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {pageCopy.keepers.focusedImpactBody}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {pageCopy.keepers.tiers.map((tier, index) => (
                        <div
                          key={tier.name}
                          className="rounded-3xl p-5 shadow-[0_10px_30px_rgba(32,42,69,0.06)]"
                          style={{ backgroundColor: tierStyles[index]?.accent ?? "#fff0de" }}
                        >
                          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                            {tier.amount}
                          </p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500/85">
                            {tier.yearly}
                          </p>
                          <p className="mt-2 text-xl font-semibold text-slate-950">
                            {tier.name}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {tier.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <section className="rounded-4xl border border-black/8 bg-[linear-gradient(145deg,rgba(255,250,242,0.94),rgba(255,255,255,0.9))] p-6 shadow-[0_20px_70px_rgba(32,42,69,0.06)] sm:p-8">
                  <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d8794a]">
                      {pageCopy.keepers.supportedEyebrow}
                    </p>
                    <h4 className="mt-3 font-(--font-heading) text-3xl text-slate-900 sm:text-4xl">
                      {pageCopy.keepers.supportedTitle}
                    </h4>
                  </div>

                  <div className="mt-8 flex gap-4 overflow-x-auto pb-2 lg:overflow-visible">
                    {pageCopy.keepers.impactAreas.map((area, index) => (
                      <article
                        key={area.title}
                        className="min-w-[240px] flex-1 overflow-hidden rounded-3xl bg-white shadow-[0_12px_36px_rgba(32,42,69,0.08)]"
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
                          <h5 className="text-lg font-semibold leading-tight text-slate-950 xl:text-xl">
                            {area.title}
                          </h5>
                        </div>
                      </article>
                    ))}
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
