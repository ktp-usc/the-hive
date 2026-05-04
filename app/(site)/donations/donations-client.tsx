"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Sparkles, Star } from "lucide-react";

import { useLanguage, useSiteCopy } from "@/components/language-provider";
import { resolveLocalized } from "@/lib/resolved-localized";
import { Button } from "@/components/ui/button";
import type {
  DonationsPageData,
  DonationsPageSection,
  LocalizedValue,
} from "@/sanity/queries/donationsPage";

type DonationTabId = "casita" | "keepers";
type Action = { href: string; label: string };
type Card = { _key?: string; title: string; description: string };
type Highlight = { _key?: string; title: string; body: string };
type Tier = {
  _key?: string;
  amount: string;
  yearly: string;
  name: string;
  description: string;
};
type ImpactArea = { _key?: string; title: string; alt: string; imageUrl: string };

const tierStyles = ["#fff0de", "#ffd9b3", "#ffc083", "#f3a351"];
const donateHref = "https://thehivecc.networkforgood.com/projects/204053-what-is-hope";
const volunteerHref = "https://pointapp.org/orgs/7916";
const wishlistHref = "https://www.amazon.com/hz/wishlist/ls/OIKGIA7FGP0W?ref_=wl_share";
const contactEmail = "chio@thehivecc.org";
const impactImages = [
  "/donations/keepersclub2.avif",
  "/donations/keepersclub3.avif",
  "/donations/keepersclub4.avif",
  "/donations/keepersclub5.avif",
];

const fallbackSections: DonationsPageSection[] = [
  { _key: "hero", _type: "sectionDonationsHero" },
  { _key: "volunteer", _type: "sectionVolunteerCards" },
  { _key: "donation", _type: "sectionDonationOpportunity" },
  { _key: "tabs", _type: "sectionDonationsTabsIntro" },
  { _key: "co", _type: "sectionDonationsCasitaOverview" },
  { _key: "cr", _type: "sectionDonationsCasitaRefuge" },
  { _key: "cc", _type: "sectionDonationsCasitaCommunity" },
  { _key: "cw", _type: "sectionDonationsCasitaWays" },
  { _key: "cbb", _type: "sectionDonationsCasitaBeeBox" },
  { _key: "ccl", _type: "sectionDonationsCasitaClosing" },
  { _key: "ko", _type: "sectionDonationsKeepersOverview" },
  { _key: "kb", _type: "sectionDonationsKeepersBenefits" },
  { _key: "kt", _type: "sectionDonationsKeepersTiers" },
  { _key: "ki", _type: "sectionDonationsKeepersImpact" },
];

const hasItems = <T,>(items: T[] | undefined | null): items is T[] =>
  Array.isArray(items) && items.length > 0;

function ActionButton({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  const external = /^https?:\/\//.test(href);
  return (
    <Button asChild className={className}>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {label}
      </a>
    </Button>
  );
}

function FeatureImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="site-card overflow-hidden p-3">
      <div className="flex w-full items-center justify-center rounded-xl bg-gray-50">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={1500}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-auto max-h-128 w-full rounded-xl object-contain"
        />
      </div>
    </div>
  );
}

export default function DonationsClient({
  cmsContent,
}: {
  cmsContent: DonationsPageData | null;
}) {
  const copy = useSiteCopy();
  const { language } = useLanguage();
  const pageCopy = copy.donations.page;
  const [activeTab, setActiveTab] = useState<DonationTabId>("casita");

  // Shorthand — always returns a resolved string
  function r(value: unknown, fallback: string): string {
    return resolveLocalized(value, language, fallback);
  }

  // Resolve a DonationsAction — label goes through resolveLocalized, href is plain string
  function resolveAction(
    value: { label?: LocalizedValue; href?: string } | undefined,
    fallback: Action,
  ): Action {
    if (value?.href && value?.label) {
      return { href: value.href, label: r(value.label, fallback.label) };
    }
    return fallback;
  }

  // Resolve an array of LocalizedValue strings, filtering out empty results
  function resolveList(
    value: LocalizedValue[] | undefined | null,
    fallback: string[],
  ): string[] {
    if (!hasItems(value)) return fallback;
    const resolved = value.map((item) => r(item, "")).filter(Boolean);
    return resolved.length > 0 ? resolved : fallback;
  }

  // Resolve an array of { title, description } cards
  function resolveCards(
    value: { _key?: string; title?: LocalizedValue; description?: LocalizedValue }[] | undefined,
    fallback: Card[],
  ): Card[] {
    if (!hasItems(value)) return fallback;
    const resolved = value
      .map((item) => ({
        _key: item._key,
        title: r(item.title, ""),
        description: r(item.description, ""),
      }))
      .filter((item) => item.title && item.description);
    return resolved.length > 0 ? resolved : fallback;
  }

  // Resolve highlights array
  function resolveHighlights(
    value: { _key?: string; title?: LocalizedValue; body?: LocalizedValue }[] | undefined,
    fallback: Highlight[],
  ): Highlight[] {
    if (!hasItems(value)) return fallback;
    const resolved = value
      .map((item) => ({
        _key: item._key,
        title: r(item.title, ""),
        body: r(item.body, ""),
      }))
      .filter((item) => item.title && item.body);
    return resolved.length > 0 ? resolved : fallback;
  }

  // Resolve tiers array
  function resolveTiers(
    value:
      | { _key?: string; amount?: LocalizedValue; yearly?: LocalizedValue; name?: LocalizedValue; description?: LocalizedValue }[]
      | undefined,
    fallback: Tier[],
  ): Tier[] {
    if (!hasItems(value)) return fallback;
    const resolved = value
      .map((item) => ({
        _key: item._key,
        amount: r(item.amount, ""),
        yearly: r(item.yearly, ""),
        name: r(item.name, ""),
        description: r(item.description, ""),
      }))
      .filter((item) => item.amount && item.name && item.description);
    return resolved.length > 0 ? resolved : fallback;
  }

  // Resolve impact areas array
  function resolveImpactAreas(
    value: { _key?: string; title?: LocalizedValue; alt?: string; imageUrl?: string }[] | undefined,
    fallback: ImpactArea[],
  ): ImpactArea[] {
    if (!hasItems(value)) return fallback;
    const resolved = value
      .map((item) => ({
        _key: item._key,
        title: r(item.title, ""),
        alt: item.alt ?? "",
        imageUrl: item.imageUrl ?? "",
      }))
      .filter((item) => item.title && item.imageUrl);
    return resolved.length > 0 ? resolved : fallback;
  }

  const sections = hasItems(cmsContent?.sections) ? cmsContent.sections : fallbackSections;

  const fallbackAreas: ImpactArea[] = pageCopy.keepers.impactAreas.map((area, index) => ({
    title: area.title,
    alt: area.alt,
    imageUrl: impactImages[index] ?? impactImages[0],
  }));

  const renderSection = (section: DonationsPageSection): ReactNode => {
    switch (section._type) {
      case "sectionDonationsHero": {
        const primary = resolveAction(section.primaryCta, {
          href: donateHref,
          label: pageCopy.primaryCta,
        });
        const secondary = resolveAction(section.secondaryCta, {
          href: volunteerHref,
          label: pageCopy.secondaryCta,
        });
        const items = resolveHighlights(section.highlights, pageCopy.highlights);

        return (
          <section
            key={section._key}
            className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14"
          >
            <div className="mx-auto max-w-7xl">
              <p className="site-eyebrow">{r(section.eyebrow, pageCopy.heroEyebrow)}</p>
                <h1 className="site-title mt-4">
                    {r(cmsContent?.title, pageCopy.heroTitle)}
                </h1>
                <p className="mx-auto mt-7 max-w-3xl text-lg leading-7 text-white/85 sm:text-xl">
                    {r(cmsContent?.description, copy.donations.subtitle)}
                </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ActionButton
                  href={primary.href}
                  label={primary.label}
                  className="h-auto rounded-full bg-hive-orange px-6 py-4 text-sm font-semibold text-white hover:bg-hive-orange/90"
                />
                <ActionButton
                  href={secondary.href}
                  label={secondary.label}
                  className="h-auto rounded-full border border-white bg-transparent px-6 py-4 text-sm font-semibold text-white hover:bg-white/10"
                />
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {items.slice(0, 3).map((item, index) => (
                  <div key={item._key ?? item.title} className="rounded-xl bg-white/95 p-5 text-left">
                    <Sparkles className={`h-5 w-5 ${index === 0 ? "text-hive-blue" : "text-hive-orange"}`} />
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      }

      case "sectionVolunteerCards": {
        const items = resolveCards(section.cards, pageCopy.volunteerOpportunities);
        return (
          <section key={section._key} className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="site-heading">{r(section.sectionTitle, pageCopy.volunteerTitle)}</h2>
              {section.intro ? (
                <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
                  {r(section.intro, "")}
                </p>
              ) : null}
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {items.map((item) => (
                <article key={item._key ?? item.title} className="site-card p-5">
                  <h3 className="text-[1.15rem] font-semibold leading-tight text-hive-blue">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>
            {section.ctaHref && section.ctaLabel ? (
              <div className="mt-8 flex justify-center">
                <ActionButton
                  href={section.ctaHref}
                  label={r(section.ctaLabel, "")}
                  className="h-auto rounded-full bg-hive-orange px-6 py-3 text-sm font-semibold text-white hover:bg-hive-orange/90"
                />
              </div>
            ) : null}
          </section>
        );
      }

      case "sectionDonationOpportunity":
        return (
          <section key={section._key} className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-hive-orange">
                {r(section.eyebrow, "Support the Hive")}
              </p>
              <h2 className="site-heading mt-4">{r(section.sectionTitle, "")}</h2>
              {section.body ? (
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
                  {r(section.body, "")}
                </p>
              ) : null}
              {section.ctaHref && section.ctaLabel ? (
                <div className="mt-8">
                  <ActionButton
                    href={section.ctaHref}
                    label={r(section.ctaLabel, "")}
                    className="h-auto rounded-full bg-hive-blue px-6 py-3 text-sm font-semibold text-white hover:bg-hive-blue/90"
                  />
                </div>
              ) : null}
            </div>
          </section>
        );

      case "sectionDonationsTabsIntro": {
        const tabs = [
          { id: "casita" as const, label: r(section.casitaTabLabel, pageCopy.tabs.casita) },
          { id: "keepers" as const, label: r(section.keepersTabLabel, pageCopy.tabs.keepers) },
        ];

        return (
          <section key={section._key} className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-hive-orange">
                {r(section.eyebrow, pageCopy.givingSectionsEyebrow)}
              </p>
              <h2 className="site-heading mt-4">
                {r(section.heading, pageCopy.givingSectionsTitle)}
              </h2>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {tabs.map((tab) => {
                const active = tab.id === activeTab;
                return (
                  <Button
                    key={tab.id}
                    type="button"
                    variant="ghost"
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                      active
                        ? "border-hive-blue bg-hive-blue text-white"
                        : "border-hive-blue text-hive-blue hover:bg-hive-blue hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </Button>
                );
              })}
            </div>
          </section>
        );
      }

      case "sectionDonationsCasitaOverview": {
        if (activeTab !== "casita") return null;
        const paragraphs = resolveList(section.paragraphs, pageCopy.casita.paragraphs);
        const cta = resolveAction(section.cta, { href: donateHref, label: pageCopy.casita.cta });

        return (
          <section key={section._key} className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <article className="px-2 sm:px-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hive-orange">
                {r(section.eyebrow, pageCopy.casita.eyebrow)}
              </p>
              <h3 className="mt-4 text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                {r(section.title, pageCopy.casita.title)}
              </h3>
              <div className="mt-6 space-y-6 text-lg leading-9 text-gray-600">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton
                  href={cta.href}
                  label={cta.label}
                  className="h-auto rounded-full bg-hive-blue px-8 py-4 text-base font-medium text-white hover:bg-hive-blue/90"
                />
              </div>
            </article>
            <FeatureImage
              src={section.imageUrl ?? "/donations/casitaofcare3.avif"}
              alt={section.imageAlt ?? pageCopy.casita.mainAlt}
            />
          </section>
        );
      }

      case "sectionDonationsCasitaRefuge": {
        if (activeTab !== "casita") return null;
        const paragraphs = resolveList(section.paragraphs, pageCopy.casita.refugeParagraphs);

        return (
          <section key={section._key} className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <FeatureImage
              src={section.imageUrl ?? "/donations/casitaofcare2.avif"}
              alt={section.imageAlt ?? pageCopy.casita.detailAlt}
            />
            <article className="px-2 sm:px-4">
              <h4 className="text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                {r(section.title, pageCopy.casita.refugeTitle)}
              </h4>
              <div className="mt-6 space-y-6 text-lg leading-9 text-gray-600">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </section>
        );
      }

      case "sectionDonationsCasitaCommunity": {
        if (activeTab !== "casita") return null;
        const paragraphs = resolveList(section.paragraphs, pageCopy.casita.communityParagraphs);

        return (
          <section key={section._key} className="site-card p-6 text-center sm:p-8 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hive-blue">
              {r(section.eyebrow, pageCopy.casita.communityEyebrow)}
            </p>
            <h4 className="mx-auto mt-4 max-w-5xl text-3xl font-bold leading-tight text-hive-blue sm:text-4xl">
              {r(section.title, pageCopy.casita.communityTitle)}
            </h4>
            <p className="mx-auto mt-6 max-w-4xl text-xl leading-10 text-gray-500">
              {r(section.lead, pageCopy.casita.communityLead)}
            </p>
            <div className="mx-auto mt-10 max-w-5xl space-y-8 text-lg leading-10 text-gray-800">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        );
      }

      case "sectionDonationsCasitaWays": {
        if (activeTab !== "casita") return null;
        const volunteer = resolveAction(section.volunteerCta, {
          href: volunteerHref,
          label: pageCopy.casita.volunteerCta,
        });
        const wishlist = resolveAction(section.wishlistCta, {
          href: wishlistHref,
          label: pageCopy.casita.wishlistCta,
        });
        const items = resolveCards(section.waysToGive, pageCopy.casita.waysToGive);

        return (
          <section key={section._key} className="site-card p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hive-orange">
                  {r(section.eyebrow, pageCopy.casita.waysEyebrow)}
                </p>
                <h4 className="mt-3 text-3xl font-bold text-hive-blue">
                  {r(section.title, pageCopy.casita.waysTitle)}
                </h4>
                <p className="mt-4 text-base leading-8 text-gray-600">
                  {r(section.body, pageCopy.casita.waysBody)}
                </p>
                <div className="mt-6">
                  <div className="flex flex-wrap gap-3">
                    <ActionButton
                      href={volunteer.href}
                      label={volunteer.label}
                      className="h-auto rounded-full border border-hive-blue bg-white px-6 py-4 text-base text-hive-blue hover:bg-hive-blue/5"
                    />
                    <ActionButton
                      href={wishlist.href}
                      label={wishlist.label}
                      className="h-auto rounded-full bg-hive-orange px-6 py-4 text-base font-medium text-white hover:bg-hive-orange/90"
                    />
                  </div>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600">
                    {r(section.wishlistNote, pageCopy.casita.wishlistNote)}
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {items.map((item) => (
                  <div key={item._key ?? item.title} className="rounded-xl bg-gray-50 p-5">
                    <Sparkles className="h-4 w-4 text-hive-blue" />
                    <p className="mt-3 text-base font-semibold text-hive-blue">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      }

      case "sectionDonationsCasitaBeeBox":
        if (activeTab !== "casita") return null;
        return (
          <section key={section._key} className="site-card p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <FeatureImage
                src={section.imageUrl ?? "/partner-images/TheBeeBox.avif"}
                alt={section.imageAlt ?? r(section.title, "Bee Box image")}
              />
              <article className="px-2 sm:px-4">
                {section.eyebrow ? (
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hive-orange">
                    {r(section.eyebrow, "")}
                  </p>
                ) : null}
                {section.title ? (
                  <h4 className="mt-3 text-3xl font-bold text-hive-blue sm:text-4xl">
                    {r(section.title, "")}
                  </h4>
                ) : null}
                {section.body ? (
                  <p className="mt-4 whitespace-pre-line text-base leading-8 text-gray-600">
                    {r(section.body, "")}
                  </p>
                ) : null}
              </article>
            </div>
          </section>
        );

      case "sectionDonationsCasitaClosing": {
        if (activeTab !== "casita") return null;
        const dedication = resolveList(section.dedicationParagraphs, pageCopy.casita.dedicationParagraphs);

        return (
          <section key={section._key} className="space-y-8 pb-16 text-center">
            <div className="site-card px-6 py-10 sm:px-10 sm:py-12">
              <h4 className="text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                {r(section.dedicationTitle, pageCopy.casita.dedicationTitle)}
              </h4>
              <div className="mx-auto mt-6 max-w-4xl space-y-6 text-lg leading-10 text-gray-800">
                {dedication.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="site-card px-6 py-10 sm:px-10 sm:py-12">
              <h4 className="text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                {r(section.thanksTitle, pageCopy.casita.thanksTitle)}
              </h4>
              <p className="mx-auto mt-6 max-w-4xl text-lg leading-10 text-gray-800">
                {r(section.thanksBody, pageCopy.casita.thanksBody)}
              </p>
            </div>
          </section>
        );
      }

      case "sectionDonationsKeepersOverview": {
        if (activeTab !== "keepers") return null;
        const paragraphs = resolveList(section.paragraphs, pageCopy.keepers.paragraphs);
        const cta = resolveAction(section.cta, { href: donateHref, label: pageCopy.keepers.cta });

        return (
          <section key={section._key} className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <article className="px-2 sm:px-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hive-blue">
                {r(section.eyebrow, pageCopy.keepers.eyebrow)}
              </p>
              <h3 className="mt-4 text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                {r(section.title, pageCopy.keepers.title)}
              </h3>
              <div className="mt-6 space-y-6 text-lg leading-9 text-gray-600">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton
                  href={cta.href}
                  label={cta.label}
                  className="h-auto rounded-full bg-hive-blue px-8 py-4 text-base font-medium text-white hover:bg-hive-blue/90"
                />
              </div>
            </article>
            <FeatureImage
              src={section.imageUrl ?? "/donations/keepersclub1.avif"}
              alt={section.imageAlt ?? pageCopy.keepers.mainAlt}
            />
          </section>
        );
      }

      case "sectionDonationsKeepersBenefits": {
        if (activeTab !== "keepers") return null;
        const items = resolveList(section.benefits, pageCopy.keepers.benefits);

        return (
          <section key={section._key} className="mx-auto max-w-4xl">
            <article className="site-card px-6 py-8 text-center sm:px-8">
              <div className="flex items-center justify-center gap-3">
                <Star className="h-5 w-5 text-hive-orange" />
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hive-orange">
                  {r(section.eyebrow, pageCopy.keepers.benefitsEyebrow)}
                </p>
              </div>
              <h4 className="mt-4 text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                {r(section.title, pageCopy.keepers.benefitsTitle)}
              </h4>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {items.map((item) => (
                  <div key={item} className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm leading-7 text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-hive-orange/20 bg-[#fff7ea] p-5 text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-hive-orange">
                  {r(section.contactLabel, pageCopy.keepers.contactLabel)}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  {r(section.contactPrefix, pageCopy.keepers.contactPrefix)}{" "}
                  <a className="site-link" href={`mailto:${section.contactEmail ?? contactEmail}`}>
                    {section.contactEmail ?? contactEmail}
                  </a>
                  .
                </p>
              </div>
            </article>
          </section>
        );
      }

      case "sectionDonationsKeepersTiers": {
        if (activeTab !== "keepers") return null;
        const items = resolveTiers(section.tiers, pageCopy.keepers.tiers);

        return (
          <section key={section._key} className="site-card p-8 sm:p-10">
            <div className="grid gap-8 lg:min-h-176 lg:grid-cols-[0.85fr_1.15fr] lg:p-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hive-blue">
                  {r(section.eyebrow, pageCopy.keepers.monthlyEyebrow)}
                </p>
                <h4 className="mt-3 text-3xl font-bold text-hive-blue">
                  {r(section.title, pageCopy.keepers.monthlyTitle)}
                </h4>
                <p className="mt-4 text-base leading-8 text-gray-600">
                  {r(section.body, pageCopy.keepers.monthlyBody)}
                </p>
                <div className="mt-6 rounded-xl border border-hive-blue/20 bg-hive-blue/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-hive-blue">
                    {r(section.focusedImpactTitle, pageCopy.keepers.focusedImpactTitle)}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {r(section.focusedImpactBody, pageCopy.keepers.focusedImpactBody)}
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {items.map((item, index) => (
                  <div
                    key={item._key ?? item.name}
                    className="rounded-xl p-5 shadow-sm"
                    style={{ backgroundColor: tierStyles[index] ?? "#fff0de" }}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                      {item.amount}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500/85">
                      {item.yearly}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-gray-900">{item.name}</p>
                    <p className="mt-3 text-sm leading-7 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      }

      case "sectionDonationsKeepersImpact": {
        if (activeTab !== "keepers") return null;
        const items = resolveImpactAreas(section.impactAreas, fallbackAreas);

        return (
          <section key={section._key} className="site-card p-6 sm:p-8 mb-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hive-orange">
                {r(section.eyebrow, pageCopy.keepers.supportedEyebrow)}
              </p>
              <h4 className="mt-3 text-3xl font-bold text-hive-blue sm:text-4xl">
                {r(section.title, pageCopy.keepers.supportedTitle)}
              </h4>
            </div>
            <div className="mt-8 flex gap-4 overflow-x-auto pb-2 lg:overflow-visible">
              {items.map((item) => (
                <article
                  key={item._key ?? item.title}
                  className="min-w-60 flex-1 overflow-hidden rounded-xl bg-white shadow-[0_12px_36px_rgba(32,42,69,0.08)]"
                >
                  <div className="relative aspect-[4/4.6] w-full">
                    <Image
                      src={item.imageUrl}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 240px, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="text-lg font-semibold leading-tight text-gray-900 xl:text-xl">
                      {item.title}
                    </h5>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      }

      case "sectionRichText":
        return section.heading || section.body ? (
          <section key={section._key} className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
            <div className="mx-auto max-w-4xl text-center">
              {section.eyebrow ? (
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hive-orange">
                  {r(section.eyebrow, "")}
                </p>
              ) : null}
              {section.heading ? (
                <h2 className="site-heading mt-4">{r(section.heading, "")}</h2>
              ) : null}
              {section.body ? (
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
                  {r(section.body, "")}
                </p>
              ) : null}
            </div>
          </section>
        ) : null;

      case "sectionImageText":
        return section.heading || section.body || section.imageUrl ? (
          <section key={section._key} className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
            <div className="mx-auto max-w-3xl text-center">
              {section.heading ? (
                <h2 className="site-heading">{r(section.heading, "")}</h2>
              ) : null}
            </div>
            <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 md:grid-cols-2">
              {section.imageUrl ? (
                <div className="relative h-72 w-full sm:h-96 md:h-full">
                  <Image
                    src={section.imageUrl}
                    alt={r(section.heading, "Section image")}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              ) : null}
              {section.body ? (
                <p className="site-copy whitespace-pre-line">{r(section.body, "")}</p>
              ) : null}
            </div>
          </section>
        ) : null;

      default:
        return null;
    }
  };

  return (
    <main className="site-page">
      <div className="site-page--narrow space-y-10">
        {sections.map((section) => renderSection(section))}
      </div>
    </main>
  );
}
