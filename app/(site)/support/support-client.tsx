"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSiteCopy } from "@/components/language-provider";
import type {
    SupportPageData,
    SupportHeroSection,
    SupportIntroSection,
    SupportServicesSection,
    SupportAccessibilitySection,
    SupportResourcesSection,
    SupportServiceCard,
} from "@/sanity/queries/supportPage";

const cardLinkClassName =
    "inline-flex items-center rounded-full border border-hive-blue px-4 py-2 text-sm font-semibold text-hive-blue transition hover:bg-hive-blue hover:text-white";
const resourceButtonClassName =
    "inline-flex items-center justify-center rounded-full bg-hive-orange px-6 py-3 text-base font-semibold text-white transition hover:bg-hive-orange/90";

function ActionLink({ href, className, children }: { href: string; className: string; children: ReactNode }) {
    if (href.startsWith("/")) return <Link href={href} className={className}>{children}</Link>;
    const openInNewTab = /^https?:\/\//.test(href);
    return (
        <a href={href} className={className} target={openInNewTab ? "_blank" : undefined} rel={openInNewTab ? "noopener noreferrer" : undefined}>
            {children}
        </a>
    );
}

export default function SupportClient({ cmsContent }: { cmsContent: SupportPageData }) {
    const copy = useSiteCopy();

    const sections = cmsContent?.sections ?? [];
    const heroSec = sections.find((s): s is SupportHeroSection => s._type === "sectionSupportHero");
    const introSec = sections.find((s): s is SupportIntroSection => s._type === "sectionSupportIntro");
    const servicesSec = sections.find((s): s is SupportServicesSection => s._type === "sectionSupportServices");
    const accessSec = sections.find((s): s is SupportAccessibilitySection => s._type === "sectionSupportAccessibility");
    const resourcesSec = sections.find((s): s is SupportResourcesSection => s._type === "sectionSupportResources");

    // ── hero ─────────────────────────────────────────────────────────────────
    const heroEyebrow = heroSec?.eyebrow ?? copy.support.heroEyebrow;
    const heroTitle = heroSec?.title ?? copy.support.heroTitle;
    const heroBody = heroSec?.body ?? copy.support.heroBody;

    // ── intro ────────────────────────────────────────────────────────────────
    const introEyebrow = introSec?.eyebrow ?? copy.support.introEyebrow;
    const introTitle = introSec?.title ?? copy.support.introTitle;
    const introBody = introSec?.body ?? copy.support.introBody;
    const introImageUrl = introSec?.imageUrl ?? copy.support.introImage.src;
    const introImageAlt = copy.support.introImage.alt;

    // ── services ─────────────────────────────────────────────────────────────
    const servicesHeading = servicesSec?.heading ?? copy.support.servicesHeading;
    const servicesLanguageNote = servicesSec?.languageNote ?? copy.support.servicesLanguageNote;

    // Build cards: prefer CMS, fall back to copy
    const cards: SupportServiceCard[] = servicesSec?.cards?.length
        ? servicesSec.cards
        : copy.support.cards.map((card, i) => {
              const href = [
                  "tel:8038887725",
                  "/contact",
                  "tel:8037668067",
                  undefined,
                  undefined,
                  "/contact",
                  "mailto:hello@thehivecc.org",
              ][i];
              return {
                  _key: String(i),
                  cardId: String(i),
                  title: card.title,
                  subtitle: card.subtitle,
                  summary: card.summary,
                  imageUrl: card.image?.src ?? null,
                  details: card.details ? [...card.details] : null,
                  note: "note" in card ? card.note : null,
                  noteLinkLabel: "noteLinkLabel" in card ? card.noteLinkLabel : null,
                  noteLinkHref: "noteLinkHref" in card ? card.noteLinkHref : null,
                  ctaLabel: card.ctaLabel,
                  ctaHref: href ?? null,
              };
          });

    // ── accessibility ─────────────────────────────────────────────────────────
    const accessEyebrow = accessSec?.eyebrow ?? copy.support.accessibilityEyebrow;
    const accessTitle = accessSec?.title ?? copy.support.accessibilityTitle;
    const accessBody = accessSec?.body ?? copy.support.accessibilityBody;
    const accessImageUrl = accessSec?.imageUrl ?? copy.support.accessibilityImage.src;
    const accessImageAlt = copy.support.accessibilityImage.alt;

    // ── resources ─────────────────────────────────────────────────────────────
    const resourcesTitle = resourcesSec?.title ?? copy.support.resourcesTitle;
    const resourcesBody = resourcesSec?.body ?? copy.support.resourcesBody;
    const resourceButtons = resourcesSec?.buttons ?? (copy.support.resourceButtons ?? []);

    return (
        <main className="site-page text-gray-900">
            <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_32%)]" />
                <div className="mx-auto max-w-6xl">
                    <div className="relative z-10 text-center">
                        <p className="site-eyebrow">{heroEyebrow}</p>
                        <h1 className="site-title mt-4">{heroTitle}</h1>
                        <p className="mx-auto mt-7 max-w-3xl text-lg leading-7 text-white/85 sm:text-xl">
                            {heroBody}
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white px-6 py-16 md:py-20">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div>
                        <p className="site-subheading text-hive-orange">{introEyebrow}</p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-hive-blue md:text-4xl">
                            {introTitle}
                        </h2>
                        <p className="mt-5 text-lg leading-8 text-gray-600">{introBody}</p>
                    </div>
                    <div className="relative overflow-hidden rounded-[2rem] border border-hive-blue/10 shadow-sm">
                        <div className="relative aspect-[4/3] w-full">
                            <Image src={introImageUrl} alt={introImageAlt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section aria-labelledby="services-heading" className="bg-white px-6 py-20 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-hive-blue md:text-4xl">
                        {servicesHeading}
                    </h2>
                    <p className="mt-3 text-base font-medium text-gray-600">{servicesLanguageNote}</p>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {cards.map((card) => (
                            <article
                                key={card._key ?? card.cardId}
                                className="overflow-hidden rounded-3xl border border-hive-blue/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                {card.imageUrl ? (
                                    <div className="relative aspect-[16/10] w-full">
                                        <Image src={card.imageUrl} alt={card.title ?? ""} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover" />
                                    </div>
                                ) : null}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-hive-blue">{card.title}</h3>
                                    {card.subtitle ? (
                                        <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-500">{card.subtitle}</p>
                                    ) : null}
                                    <p className="mt-4 text-base leading-7 text-gray-600">{card.summary}</p>
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
                                                <Link href={card.noteLinkHref} className="font-semibold text-hive-blue underline decoration-hive-blue/40 underline-offset-4 hover:text-hive-orange">
                                                    {card.noteLinkLabel}
                                                </Link>
                                            ) : null}
                                        </p>
                                    ) : null}
                                    {card.ctaLabel && card.ctaHref ? (
                                        <div className="mt-6">
                                            <ActionLink href={card.ctaHref} className={cardLinkClassName}>
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
                            <Image src={accessImageUrl} alt={accessImageAlt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                        </div>
                    </div>
                    <div>
                        <p className="site-subheading text-hive-orange">{accessEyebrow}</p>
                        <h2 className="mt-3 text-3xl font-bold text-hive-blue md:text-4xl">{accessTitle}</h2>
                        <p className="mt-5 text-lg leading-8 text-gray-600">{accessBody}</p>
                    </div>
                </div>
            </section>

            <section className="bg-white px-6 py-20 text-center md:py-24">
                <div className="mx-auto flex max-w-4xl flex-col items-center">
                    <h2 className="text-3xl font-bold text-hive-blue md:text-5xl">{resourcesTitle}</h2>
                    <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">{resourcesBody}</p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        {resourceButtons.map((resource) => (
                            <ActionLink key={resource.label} href={resource.href ?? "#"} className={resourceButtonClassName}>
                                {resource.label}
                            </ActionLink>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
