"use client";

import Image from "next/image";

import PartnershipCarousel, {
    type PartnershipCarouselSlide,
} from "@/components/partnership-carousel";
import { useLanguage, useSiteCopy } from "@/components/language-provider";
import { resolveLocalized } from "@/lib/resolved-localized";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type StaticPartner = { src: string; alt: string };
type CategoryKey =
    | "philanthropic"
    | "nonprofit"
    | "lawEnforcement"
    | "education"
    | "faithBased"
    | "merchant"
    | "community";

type StaticCategory = { key: CategoryKey; partners: StaticPartner[] };

type LocalizedValue =
    | string
    | { en?: string | null; es?: string | null }
    | null
    | undefined;

type PartnerPageData = {
    sections?: Array<
        | {
              _key?: string;
              _type: "sectionHero";
              headline?: LocalizedValue;
              subheadline?: LocalizedValue;
          }
        | {
              _key?: string;
              _type: "sectionImageText";
              heading?: LocalizedValue;
              body?: LocalizedValue;
              imageUrl?: string | null;
          }
        | {
              _key?: string;
              _type: "sectionImageCarousel";
              heading?: LocalizedValue;
              body?: LocalizedValue;
              slides?: Array<{
                  _key?: string;
                  title?: LocalizedValue;
                  caption?: LocalizedValue;
                  alt?: string;
                  imageUrl?: string | null;
              }>;
          }
        | {
              _key?: string;
              _type: "sectionPartnerLogos";
              groupLabel?: LocalizedValue;
              partners?: Array<{
                  _id: string;
                  name: string;
                  category?: string | null;
                  logoUrl: string | null;
              }>;
          }
        | {
              _key?: string;
              _type: "sectionPartnersOpportunities";
              heading?: LocalizedValue;
              description?: LocalizedValue;
              residencyLabel?: LocalizedValue;
              resourceLabel?: LocalizedValue;
              beeBoxContactText?: LocalizedValue;
              beeBoxEmail?: string | null;
          }
    >;
} | null;

type PartnerSection = NonNullable<NonNullable<PartnerPageData>["sections"]>[number];
type PartnerHeroSection = Extract<PartnerSection, { _type: "sectionHero" }>;
type PartnerImageTextSection = Extract<PartnerSection, { _type: "sectionImageText" }>;
type PartnerCarouselSection = Extract<PartnerSection, { _type: "sectionImageCarousel" }>;
type PartnerLogoSection = Extract<PartnerSection, { _type: "sectionPartnerLogos" }>;
type PartnerOpportunitiesSection = Extract<PartnerSection, { _type: "sectionPartnersOpportunities" }>;

function r(value: unknown, language: "en" | "es-MX", fallback: string): string {
    return resolveLocalized(value, language, fallback);
}

const STATIC_PARTNERSHIP_SLIDES: PartnershipCarouselSlide[] = [
    {
        key: "host-the-hive",
        imageUrl: "/images/TheHive_12.06.2025_135.jpg",
        alt: "The Hive team and community members at an event",
        title: "A month-long community presence",
        caption:
            "Host The Hive in your business or workplace for a short residency that keeps survivor-centered resources visible and accessible all month long.",
    },
    {
        key: "bee-box",
        imageUrl: "/partner-images/TheBeeBox.avif",
        alt: "The Bee Box support package for survivors",
        title: "Support at the point of disclosure",
        caption:
            "Partner sites can place Bee Boxes in public-facing spaces so survivors receive grounding items, care tools, and affirming support in the moment they need it.",
    },
    {
        key: "community-activation",
        imageUrl: "/images/TheHive_12.06.2025_87.jpg",
        alt: "The Hive staff and supporters gathered together indoors",
        title: "A partnership tailored to your audience",
        caption:
            "Residencies can combine outreach, awareness moments, and educational touchpoints designed to fit the rhythm of your team, customers, or community.",
    },
];

const STATIC_CATEGORIES: StaticCategory[] = [
    {
        key: "philanthropic",
        partners: [
            { src: "/partner-images/JLC.png", alt: "Junior League of Columbia" },
            { src: "/partner-images/Allstate.webp", alt: "Allstate Foundation" },
        ],
    },
];

function PartnerGrid({ partners }: { partners: { src: string; alt: string }[] }) {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
            {partners.map((partner) => (
                <div
                    key={partner.alt}
                    className="flex items-center justify-center rounded-xl border border-gray-200 bg-background p-4 shadow-sm"
                >
                    <div className="relative h-16 w-full">
                        <Image
                            src={partner.src}
                            alt={partner.alt}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

function PartnershipOpportunitiesSection({
    language,
    hostTheHive,
    beeBox,
    opportunitiesSec,
    defaultHeading,
    defaultDescription,
    defaultResidencyLabel,
    defaultResourceLabel,
    defaultBeeBoxContactText,
    defaultBeeBoxEmail,
}: {
    language: "en" | "es-MX";
    hostTheHive: { heading: string; body: string; imageUrl: string; alt: string };
    beeBox: { heading: string; body: string; imageUrl: string; alt: string };
    opportunitiesSec: PartnerOpportunitiesSection | null;
    defaultHeading: string;
    defaultDescription: string;
    defaultResidencyLabel: string;
    defaultResourceLabel: string;
    defaultBeeBoxContactText: string;
    defaultBeeBoxEmail: string;
}) {
    const sectionHeading = r(opportunitiesSec?.heading, language, defaultHeading);
    const sectionDescription = r(opportunitiesSec?.description, language, defaultDescription);
    const residencyLabel = r(opportunitiesSec?.residencyLabel, language, defaultResidencyLabel);
    const resourceLabel = r(opportunitiesSec?.resourceLabel, language, defaultResourceLabel);
    const beeBoxContactText = r(opportunitiesSec?.beeBoxContactText, language, defaultBeeBoxContactText);
    const beeBoxEmail = opportunitiesSec?.beeBoxEmail ?? defaultBeeBoxEmail;

    return (
        <section className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="site-heading">{sectionHeading}</h2>
                <p className="site-copy mt-4">{sectionDescription}</p>
            </div>

            <div className="mx-auto mt-12 max-w-6xl space-y-8">
                <div className="site-panel overflow-hidden">
                    <div className="grid items-stretch md:grid-cols-[1.05fr_0.95fr]">
                        <div className="p-6 sm:p-8 lg:p-10">
                            <p className="site-subheading">{residencyLabel}</p>
                            <h3 className="mt-3 text-3xl font-semibold text-hive-blue">
                                {hostTheHive.heading}
                            </h3>
                            <p className="site-copy mt-4">{hostTheHive.body}</p>
                        </div>
                        <div className="relative min-h-72 bg-hive-blue/5">
                            <Image
                                src={hostTheHive.imageUrl}
                                alt={hostTheHive.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="site-panel overflow-hidden p-6 sm:p-8">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <div className="relative h-72 w-full sm:h-96 md:h-full">
                            <Image
                                src={beeBox.imageUrl}
                                alt={beeBox.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div>
                            <p className="site-subheading">{resourceLabel}</p>
                            <h3 className="mt-3 text-3xl font-semibold text-hive-blue">
                                {beeBox.heading}
                            </h3>
                            <p className="site-copy mt-4 whitespace-pre-line">{beeBox.body}</p>
                            <p className="site-copy mt-6">
                                {beeBoxContactText}{" "}
                                <a
                                    className="site-link font-medium"
                                    href={`mailto:${beeBoxEmail}`}
                                >
                                    {beeBoxEmail}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function PartnersClient({ page }: { page: PartnerPageData }) {
    const copy = useSiteCopy();
    const { language } = useLanguage();

    const sections = page?.sections ?? [];

    const hero = sections.find(
        (section): section is PartnerHeroSection => section._type === "sectionHero",
    );

    const imageTextSections = sections.filter(
        (section): section is PartnerImageTextSection =>
            section._type === "sectionImageText",
    );
    const hostTheHiveSec = imageTextSections[0] ?? null;
    const beeBoxSec = imageTextSections[1] ?? null;

    const carouselSec =
        sections.find(
            (section): section is PartnerCarouselSection =>
                section._type === "sectionImageCarousel",
        ) ?? null;

    const opportunitiesSec =
        sections.find(
            (section): section is PartnerOpportunitiesSection =>
                section._type === "sectionPartnersOpportunities",
        ) ?? null;

    const partnerSections = sections.filter(
        (section): section is PartnerLogoSection =>
            section._type === "sectionPartnerLogos",
    );

    // Hero — resolveLocalized handles Sanity objects, plain strings, and null
    const heroEyebrow = r(hero?.subheadline, language, copy.partners.heroEyebrow);
    const heroTitle = r(hero?.headline, language, copy.partners.heroTitle);

    // Host the Hive section — Sanity fields override, site-copy is bilingual fallback
    const resolvedHostTheHive = {
        heading: r(hostTheHiveSec?.heading, language, copy.partners.beeBoxTitle),
        body: r(hostTheHiveSec?.body, language, copy.partners.beeBoxBody),
        imageUrl: hostTheHiveSec?.imageUrl ?? "/images/TheHive_12.06.2025_87.jpg",
        alt: "The Hive team members and supporters gathered together at an event",
    };

    // Bee Box section — Sanity fields override, site-copy is bilingual fallback
    const resolvedBeeBox = {
        heading: r(beeBoxSec?.heading, language, copy.partners.beeBoxTitle),
        body: r(beeBoxSec?.body, language, copy.partners.beeBoxBody),
        imageUrl: beeBoxSec?.imageUrl ?? "/partner-images/TheBeeBox.avif",
        alt: "The Bee Box",
    };

    const resolvedCarouselSlides: PartnershipCarouselSlide[] =
        carouselSec?.slides?.length
            ? carouselSec.slides.map((s) => ({
                  key: s._key ?? "",
                  imageUrl: s.imageUrl ?? "",
                  alt: s.alt ?? "",
                  title: r(s.title, language, ""),
                  caption: r(s.caption, language, ""),
              }))
            : STATIC_PARTNERSHIP_SLIDES;

    const partnerCategories =
        partnerSections.length > 0
            ? partnerSections.map((section) => ({
                  key: section._key ?? r(section.groupLabel, language, ""),
                  label: r(section.groupLabel, language, ""),
                  partners:
                      section.partners?.map((p) => ({
                          src: p.logoUrl ?? "",
                          alt: p.name,
                      })) ?? [],
              }))
            : STATIC_CATEGORIES.map((cat) => ({
                  key: cat.key,
                  label: copy.partners.categoryTitles[cat.key],
                  partners: cat.partners,
              }));

    return (
        <main className="site-page">
            <div className="site-page--narrow space-y-10">

                {/* HERO */}
                <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14">
                    <div className="mx-auto max-w-7xl">
                        <p className="site-eyebrow">{heroEyebrow}</p>
                        <h1 className="site-title mt-4">{heroTitle}</h1>
                    </div>
                </section>

                {/* CAROUSEL */}
                <section className="px-6">
                    <div className="mx-auto max-w-5xl">
                        <PartnershipCarousel
                            slides={resolvedCarouselSlides}
                            partnershipExampleLabel={copy.partners.partnershipExampleLabel}
                        />
                    </div>
                </section>

                <PartnershipOpportunitiesSection
                    language={language}
                    hostTheHive={resolvedHostTheHive}
                    beeBox={resolvedBeeBox}
                    opportunitiesSec={opportunitiesSec}
                    defaultHeading={copy.partners.opportunitiesTitle}
                    defaultDescription={copy.partners.heroBody}
                    defaultResidencyLabel="Residency Partnership"
                    defaultResourceLabel="Resource Partnership"
                    defaultBeeBoxContactText={copy.partners.beeBoxPartnerPrefix}
                    defaultBeeBoxEmail="volunteer@thehivecc.org"
                />

                {/* PARTNERS */}
                <div className="space-y-8 pb-12">
                    {partnerCategories.map((cat, i) => (
                        <Card key={cat.key}>
                            <CardHeader>
                                <CardTitle>{cat.label}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <PartnerGrid partners={cat.partners} />
                            </CardContent>
                            {i < partnerCategories.length - 1 && <Separator />}
                        </Card>
                    ))}
                </div>

            </div>
        </main>
    );
}
