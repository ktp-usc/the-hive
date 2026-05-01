"use client";

import Image from "next/image";

import AboutTabs, {
    type BoardMemberSanity,
    type FounderMember,
    type TeamMemberSanity,
} from "@/components/about-tabs";
import GenericSectionRenderer from "@/components/generic-section-renderer";
import type { GenericSection } from "@/components/generic-section-renderer";
import { useLanguage, useSiteCopy } from "@/components/language-provider";
import { resolveLocalized } from "@/lib/resolved-localized";
import type { SiteSettingsData } from "@/sanity/queries/siteSettings";

type AboutHeroSection = {
    _type: "sectionHero";
    headline?: unknown;
    subheadline?: unknown;
};

type AboutImageTextSection = {
    _type: "sectionImageText";
    heading?: unknown;
    body?: unknown;
    imageUrl?: string | null;
};

type AboutRichTextSection = {
    _type: "sectionRichText";
    eyebrow?: unknown;
    heading?: unknown;
    body?: unknown;
};

type AboutTeamSection = {
    _type: "sectionTeam";
    eyebrow?: string;
    groupLabel?: string;
    members?: FounderMember[] | TeamMemberSanity[] | BoardMemberSanity[];
};

type AboutPageData = {
    sections?: Array<
        AboutHeroSection | AboutImageTextSection | AboutRichTextSection | AboutTeamSection
    >;
} | null;

const FALLBACK_FOUNDER_IMAGE = "/member-images/Ashley2.png";
const FALLBACK_ABOUT_IMAGE = "/member-images/BeeEmpowered.avif";

const FALLBACK_TEAM: TeamMemberSanity[] = [
    {
        _id: "t1",
        name: "Alyson Berry",
        role: "Executive Administrator",
        imageUrl: "/member-images/AlysonBerry.avif",
        email: "alyson@thehivecc.org",
        extension: "ext 104",
    },
    {
        _id: "t2",
        name: "Jalona Webb",
        role: "Legal Outreach Advocate",
        imageUrl: "/member-images/JalonaWebb.avif",
        email: "jalona.webb@thehivecc.org",
        extension: "ext 108",
    },
    {
        _id: "t3",
        name: "Kinnethia Tolson",
        role: "Education and Volunteer Coordinator",
        imageUrl: "/member-images/KinnethiaTolson.avif",
        email: "kinnethia@thehivecc.org",
        extension: "ext. 109",
    },
    {
        _id: "t4",
        name: "Beatrice Hernandez-Morales",
        role: "Bilingual Outreach Advocate",
        imageUrl: "/member-images/BeatriceHernandezMorales.avif",
        email: "beatrice@thehivecc.org",
        extension: "ext. 107",
    },
];

const FALLBACK_BOARD: BoardMemberSanity[] = [
    {
        _id: "b1",
        name: "Dr. Stephanie Kirkland",
        role: "Board Chair",
        bio: "Identity Dynamics\nCEO",
        imageUrl: "/member-images/StephanieKirkland.avif",
    },
    {
        _id: "b2",
        name: "Jordan Crapps",
        role: "Vice Chair",
        bio: "Gallivan, White, Boyd\nPartner",
        imageUrl: "/member-images/JordanCrapps.avif",
    },
    {
        _id: "b3",
        name: "Andrea Lee",
        role: "Treasurer",
        bio: "Center for Community Health Alignment\nAssociate Director of Operations",
        imageUrl: "/member-images/AndreaLee.avif",
    },
    {
        _id: "b4",
        name: "Ann Turner",
        role: "AVP",
        bio: "Underwriting Operations",
        imageUrl: "/member-images/AnnTurner.avif",
    },
    {
        _id: "b5",
        name: "Anthony Bryant",
        role: "Board Member",
        bio: "Leadership Strategist, Speaker, Author",
        imageUrl: "/member-images/AnthonyBryant.avif",
    },
    {
        _id: "b6",
        name: "Bency Beals",
        role: "Board Member",
        bio: "Ignite Leadership Solutions\nCEO",
        imageUrl: "/member-images/BencyBeals.avif",
    },
    {
        _id: "b7",
        name: "Ebone Ivory",
        role: "Board Member",
        bio: "SC Department of Employment and Workforce\nAdministrative Hearing Officer",
        imageUrl: "/member-images/EboneIvory.avif",
    },
    {
        _id: "b8",
        name: "Naomi Walton",
        role: "Board Member",
        imageUrl: "/member-images/NaomiWalton.avif",
    },
    {
        _id: "b9",
        name: "Nicki Woodson",
        role: "Board Member",
        bio: "Starbucks\nManager of Partner Resources (HR)",
        imageUrl: "/member-images/NickiWoodson.avif",
    },
    {
        _id: "b10",
        name: "Terry Judy",
        role: "Board Member",
        bio: "Ignite Leadership Solutions\nImpact & Partnerships Director",
        imageUrl: "/member-images/TerryJudy.avif",
    },
];

function isTeamSection(section: { _type?: string }): section is AboutTeamSection {
    return section._type === "sectionTeam";
}

function findTeamSection(sections: AboutTeamSection[], patterns: RegExp[]) {
    return sections.find((section) =>
        patterns.some((pattern) => pattern.test(section.groupLabel ?? ""))
    );
}

const ABOUT_HANDLED = new Set([
    "sectionHero",
    "sectionImageText",
    "sectionTeam",
    "sectionRichText",
]);

const GENERIC_TYPES = new Set([
    "sectionRichText",
    "sectionImageText",
    "sectionHero",
    "sectionImageCarousel",
    "sectionCardGrid",
    "sectionVolunteerCards",
    "sectionDonationOpportunity",
]);

export default function AboutClient({
                                        page,
                                        siteSettings,
                                    }: {
    page: AboutPageData;
    siteSettings?: SiteSettingsData | null;
}) {
    const copy = useSiteCopy();
    const { language } = useLanguage();

    const sections = page?.sections ?? [];
    const extraSections = sections.filter(
        (s) => GENERIC_TYPES.has(s._type) && !ABOUT_HANDLED.has(s._type)
    ) as GenericSection[];

    const hero = sections.find(
        (section): section is AboutHeroSection => section._type === "sectionHero"
    );
    const imageText = sections.find(
        (section): section is AboutImageTextSection => section._type === "sectionImageText"
    );
    const joinSection = sections.find(
        (section): section is AboutRichTextSection => section._type === "sectionRichText"
    );
    const teamSections = sections.filter(isTeamSection);

    const founderSec = findTeamSection(teamSections, [/\bfounder\b/i, /\bfundadora\b/i]);
    const teamSec = findTeamSection(teamSections, [/\bteam\b/i, /\bequipo\b/i]);
    const boardSec = findTeamSection(teamSections, [/\bboard\b/i, /\bconsejo\b/i, /\bdirectiv/i]);

    const founderMember = (founderSec?.members?.[0] as FounderMember | undefined) ?? undefined;

    const missionTitle = resolveLocalized(
        siteSettings?.missionTitle,
        language,
        copy.home.missionTitle
    );
    const missionBody = resolveLocalized(
        siteSettings?.missionBody,
        language,
        copy.home.missionBody
    );
    const valuesTitle = resolveLocalized(
        siteSettings?.valuesTitle,
        language,
        copy.awareness.valuesTitle
    );
    const valuesIntro = resolveLocalized(
        siteSettings?.valuesIntro,
        language,
        copy.awareness.valuesIntro
    );
    const valuesPillars = Array.isArray(siteSettings?.valuesPillars)
        ? siteSettings.valuesPillars
            .map((pillar) => resolveLocalized(pillar, language, ""))
            .filter(Boolean)
        : [...copy.awareness.valuesPillars];

    const founderMembers: FounderMember[] = [
        {
            _id: founderMember?._id ?? "founder-ashley",
            name: founderMember?.name ?? copy.about.founderName,
            role: founderMember?.role ?? copy.about.founderRole,
            imageUrl: founderMember?.imageUrl ?? FALLBACK_FOUNDER_IMAGE,
            storyEyebrow: founderMember?.storyEyebrow ?? copy.about.founderStoryEyebrow,
            narrativeLabel: founderMember?.narrativeLabel ?? copy.about.founderNarrativeLabel,
            narrativeParagraphs: founderMember?.narrativeParagraphs?.length
                ? founderMember.narrativeParagraphs
                : copy.about.founderNarrativeParagraphs,
            sparkTitle: founderMember?.sparkTitle ?? copy.about.founderSparkTitle,
            sparkBody: founderMember?.sparkBody ?? copy.about.founderSparkBody,
            visionTitle: founderMember?.visionTitle ?? copy.about.founderVisionTitle,
            visionBody: founderMember?.visionBody ?? copy.about.founderVisionBody,
            profileBody: founderMember?.profileBody ?? copy.about.founderProfileBody,
        },
    ];

    const sourceTeamMembers =
        ((teamSec?.members as TeamMemberSanity[] | undefined)?.length
            ? (teamSec?.members as TeamMemberSanity[])
            : FALLBACK_TEAM) ?? FALLBACK_TEAM;

    const teamMembers = sourceTeamMembers.map((member, index) => {
        const translatedMember =
            copy.about.teamMembers.find((entry) => entry.name === member.name) ??
            copy.about.teamMembers[index];

        return {
            ...member,
            role: translatedMember?.role ?? member.role,
        };
    });

    const sourceBoardMembers =
        ((boardSec?.members as BoardMemberSanity[] | undefined)?.length
            ? (boardSec?.members as BoardMemberSanity[])
            : FALLBACK_BOARD) ?? FALLBACK_BOARD;

    const boardMembers = sourceBoardMembers.map((member, index) => {
        const translatedMember =
            copy.about.boardMembers.find((entry) => entry.name === member.name) ??
            copy.about.boardMembers[index];

        return {
            ...member,
            role: translatedMember?.role ?? member.role,
            bio: translatedMember?.note ?? member.bio,
        };
    });

    const heroEyebrow = resolveLocalized(
        hero?.subheadline,
        language,
        copy.about.heroEyebrow
    );
    const heroTitle = resolveLocalized(hero?.headline, language, copy.about.heroTitle);
    const whyTitle = resolveLocalized(
        imageText?.heading,
        language,
        copy.about.whyFoundedTitle
    );
    const whyBody = resolveLocalized(imageText?.body, language, copy.about.whyFoundedBody);
    const beeImageUrl = imageText?.imageUrl ?? FALLBACK_ABOUT_IMAGE;
    const joinEyebrow = resolveLocalized(
        joinSection?.eyebrow,
        language,
        copy.about.joinEyebrow
    );
    const joinTitle = resolveLocalized(joinSection?.heading, language, copy.about.joinTitle);
    const joinBody = resolveLocalized(joinSection?.body, language, copy.about.joinBodyPrefix);

    return (
        <main className="site-page">
            <div className="site-page--narrow space-y-10">
                <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14">
                    <div className="mx-auto max-w-7xl">
                        <p className="site-eyebrow">{heroEyebrow}</p>
                        <h1 className="site-title mt-4">{heroTitle}</h1>
                    </div>
                </section>

                <section className="px-6 py-6 sm:px-10 sm:py-8 lg:px-14">
                    <div className="mx-auto max-w-4xl">
                        <Image
                            src={beeImageUrl}
                            alt={copy.about.featureImageAlt}
                            width={1200}
                            height={1500}
                            className="mx-auto h-auto w-full max-w-md rounded-2xl object-contain"
                            priority
                        />
                    </div>
                </section>

                <section className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="site-heading text-center">{whyTitle}</h2>
                        <p className="site-copy mt-5 text-center text-xl">{whyBody}</p>
                    </div>
                </section>

                <AboutTabs
                    heroEyebrow={heroEyebrow}
                    heroTitle={heroTitle}
                    founderSection={{ label: copy.about.tabs.founder }}
                    teamSection={{ label: copy.about.tabs.team, eyebrow: copy.about.teamEyebrow }}
                    boardSection={{ label: copy.about.tabs.board, eyebrow: copy.about.boardEyebrow }}
                    founderMembers={founderMembers}
                    teamMembers={teamMembers}
                    boardMembers={boardMembers}
                    missionTitle={missionTitle}
                    missionBody={missionBody}
                    valuesTitle={valuesTitle}
                    valuesIntro={valuesIntro}
                    valuesPillars={valuesPillars}
                />

                <section className="site-surface px-6 py-2 pb-20 text-center sm:px-10 lg:px-14">
                    <p className="text-sm font-semibold uppercase tracking-[0.26em] text-hive-orange">
                        {joinEyebrow}
                    </p>
                    <h2 className="site-heading mt-4">{joinTitle}</h2>
                    <p className="site-copy mx-auto mt-4 max-w-2xl">
                        {joinBody}{" "}
                        <a href="mailto:hello@thehivecc.org" className="site-link">
                            hello@thehivecc.org
                        </a>
                        .
                    </p>
                </section>
            </div>

            <GenericSectionRenderer sections={extraSections} />
        </main>
    );
}