"use client";

import Image from "next/image";

import PartnershipCarousel, {
    type PartnershipCarouselSlide,
} from "@/components/partnership-carousel";
import { useLanguage, useSiteCopy } from "@/components/language-provider";
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

type PartnerPageData = {
    sections?: Array<
        | {
        _key?: string;
        _type: "sectionHero";
        headline?: string;
        subheadline?: string;
    }
        | {
        _key?: string;
        _type: "sectionImageText";
        heading?: string;
        body?: string;
        imageUrl?: string | null;
    }
        | {
        _key?: string;
        _type: "sectionPartnerLogos";
        groupLabel?: string;
        partners?: Array<{
            _id: string;
            name: string;
            category?: string | null;
            logoUrl: string | null;
        }>;
    }
    >;
} | null;

type PartnerSection = NonNullable<NonNullable<PartnerPageData>["sections"]>[number];
type PartnerHeroSection = Extract<PartnerSection, { _type: "sectionHero" }>;
type PartnerImageTextSection = Extract<PartnerSection, { _type: "sectionImageText" }>;
type PartnerLogoSection = Extract<PartnerSection, { _type: "sectionPartnerLogos" }>;

const DEFAULT_HOST_THE_HIVE = {
    heading: "Host the Hive",
    body:
        "Invite The Hive into your business, workplace, or community space for a short-term residency, typically around a month or tailored to your schedule. We work alongside your team to create visible, approachable moments of support through outreach, education, and resource-sharing that meet people where they are.",
    imageUrl: "/images/TheHive_12.06.2025_87.jpg",
    alt: "The Hive team members and supporters gathered together at an event",
};

const DEFAULT_BEE_BOX = {
    heading: "The Bee Box",
    body:
        "Sitting in a cold waiting room, trembling with fear as one contemplates disclosing their abuse is never a vision one would desire to have, but this is often the reality for survivors of abuse and violence. The Bee Box was designed to support survivors who disclose in public settings such as healthcare settings, police stations, schools, or churches. The Bee Box has been uniquely designed to provide aid and support as a survivor embarks on their journey of healing, consisting of a grounding tool, tea for care and wellness, powerful affirmations written by fellow survivors, and an all-natural room enhancer spray.",
    imageUrl: "/partner-images/TheBeeBox.avif",
    alt: "The Bee Box",
};

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

function PartnershipOpportunitiesSection({
                                             hostTheHive,
                                             beeBox,
                                         }: {
    hostTheHive: {
        heading: string;
        body: string;
        imageUrl: string;
        alt: string;
    };
    beeBox: {
        heading: string;
        body: string;
        imageUrl: string;
        alt: string;
    };
}) {
    return (
        <section className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="site-heading">Partnership Opportunities</h2>
                <p className="site-copy mt-4">
                    We are grateful for the organizations, businesses, and community leaders who support this work.
                </p>
            </div>

            <div className="mx-auto mt-12 max-w-6xl space-y-8">
                <div className="site-panel overflow-hidden">
                    <div className="grid items-stretch md:grid-cols-[1.05fr_0.95fr]">
                        <div className="p-6 sm:p-8 lg:p-10">
                            <p className="site-subheading">Residency Partnership</p>
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
                            <p className="site-subheading">Resource Partnership</p>
                            <h3 className="mt-3 text-3xl font-semibold text-hive-blue">
                                {beeBox.heading}
                            </h3>
                            <p className="site-copy mt-4 whitespace-pre-line">{beeBox.body}</p>
                            <p className="site-copy mt-6">
                                If you are interested in becoming a partner site for the Bee Box, please reach out to{" "}
                                <a className="site-link font-medium" href="mailto:volunteer@thehivecc.org">
                                    volunteer@thehivecc.org
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

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
                        <Image src={partner.src} alt={partner.alt} fill className="object-contain" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function PartnersClient({ page }: { page: PartnerPageData }) {
    const copy = useSiteCopy();
    const { language } = useLanguage();
    const useCmsText = language === "en";

    const sections = page?.sections ?? [];

    const hero = sections.find(
        (section): section is PartnerHeroSection => section._type === "sectionHero"
    );

    const beeBox = sections.find(
        (section): section is PartnerImageTextSection => section._type === "sectionImageText"
    );

    const partnerSections = sections.filter(
        (section): section is PartnerLogoSection => section._type === "sectionPartnerLogos"
    );

    const heroEyebrow =
        useCmsText && hero?.subheadline ? hero.subheadline : copy.partners.heroEyebrow;

    const heroTitle =
        useCmsText && hero?.headline ? hero.headline : copy.partners.heroTitle;

    const partnerCategories =
        partnerSections.length > 0
            ? partnerSections.map((section) => ({
                key: section._key ?? section.groupLabel,
                label: section.groupLabel ?? "",
                partners:
                    section.partners?.map((p) => ({
                        src: p.logoUrl ?? "",
                        alt: p.name,
                    })) ?? [],
            }))
            : STATIC_CATEGORIES.map((c) => ({
                key: c.key,
                label: copy.partners.categoryTitles[c.key],
                partners: c.partners,
            }));

    return (
        <main className="site-page">
            <div className="site-page--narrow space-y-10">

                {/* HERO */}
                <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-hive-blue px-6 py-10 text-center text-white sm:px-10 sm:py-12 lg:py-14">
                    <div className="mx-auto max-w-7xl">
                        <p className="site-eyebrow text-white/90">{heroEyebrow}</p>
                        <h1 className="site-title mt-4">{heroTitle}</h1>
                    </div>
                </section>

                {/* CAROUSEL */}
                <section className="px-6">
                    <div className="mx-auto max-w-5xl">
                        <PartnershipCarousel slides={STATIC_PARTNERSHIP_SLIDES} />
                    </div>
                </section>

                <PartnershipOpportunitiesSection
                    hostTheHive={DEFAULT_HOST_THE_HIVE}
                    beeBox={DEFAULT_BEE_BOX}
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