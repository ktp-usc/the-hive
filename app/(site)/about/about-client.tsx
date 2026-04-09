"use client";

import Image from "next/image";

import AboutTabs, {
  type BoardMemberSanity,
  type FounderMember,
  type TeamMemberSanity,
} from "@/components/about-tabs";
import { useLanguage, useSiteCopy } from "@/components/language-provider";

type AboutHeroSection = {
  _type: "sectionHero";
  headline?: string;
  subheadline?: string;
};

type AboutImageTextSection = {
  _type: "sectionImageText";
  heading?: string;
  body?: string;
  imageUrl?: string | null;
};

type AboutRichTextSection = {
  _type: "sectionRichText";
  eyebrow?: string;
  heading?: string;
  body?: string;
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

export default function AboutClient({ page }: { page: AboutPageData }) {
  const copy = useSiteCopy();
  const { language } = useLanguage();
  const useCmsText = language === "en";

  const sections = page?.sections ?? [];
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
  const translatedFounder = copy.about;

  const founderMembers: FounderMember[] = [
    {
      _id: founderMember?._id ?? "founder-ashley",
      name: founderMember?.name ?? translatedFounder.founderName,
      role:
        useCmsText && founderMember?.role
          ? founderMember.role
          : translatedFounder.founderRole,
      imageUrl: founderMember?.imageUrl ?? FALLBACK_FOUNDER_IMAGE,
      storyEyebrow:
        useCmsText && founderMember?.storyEyebrow
          ? founderMember.storyEyebrow
          : translatedFounder.founderStoryEyebrow,
      narrativeLabel:
        useCmsText && founderMember?.narrativeLabel
          ? founderMember.narrativeLabel
          : translatedFounder.founderNarrativeLabel,
      narrativeParagraphs:
        useCmsText && founderMember?.narrativeParagraphs?.length
          ? founderMember.narrativeParagraphs
          : translatedFounder.founderNarrativeParagraphs,
      sparkTitle:
        useCmsText && founderMember?.sparkTitle
          ? founderMember.sparkTitle
          : translatedFounder.founderSparkTitle,
      sparkBody:
        useCmsText && founderMember?.sparkBody
          ? founderMember.sparkBody
          : translatedFounder.founderSparkBody,
      visionTitle:
        useCmsText && founderMember?.visionTitle
          ? founderMember.visionTitle
          : translatedFounder.founderVisionTitle,
      visionBody:
        useCmsText && founderMember?.visionBody
          ? founderMember.visionBody
          : translatedFounder.founderVisionBody,
      profileBody:
        useCmsText && founderMember?.profileBody
          ? founderMember.profileBody
          : translatedFounder.founderProfileBody,
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
      role: useCmsText ? member.role : translatedMember?.role ?? member.role,
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
      role: useCmsText ? member.role : translatedMember?.role ?? member.role,
      bio: useCmsText ? member.bio : translatedMember?.note ?? member.bio,
    };
  });

  const heroEyebrow =
    useCmsText && hero?.subheadline ? hero.subheadline : copy.about.heroEyebrow;
  const heroTitle =
    useCmsText && hero?.headline ? hero.headline : copy.about.heroTitle;
  const whyTitle =
    useCmsText && imageText?.heading ? imageText.heading : copy.about.whyFoundedTitle;
  const whyBody =
    useCmsText && imageText?.body ? imageText.body : copy.about.whyFoundedBody;
  const beeImageUrl = imageText?.imageUrl ?? FALLBACK_ABOUT_IMAGE;
  const joinEyebrow =
    useCmsText && joinSection?.eyebrow ? joinSection.eyebrow : copy.about.joinEyebrow;
  const joinTitle =
    useCmsText && joinSection?.heading ? joinSection.heading : copy.about.joinTitle;

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
        />

        <section className="site-surface px-6 py-2 pb-20 text-center sm:px-10 lg:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-hive-orange">
            {joinEyebrow}
          </p>
          <h2 className="site-heading mt-4">{joinTitle}</h2>
          <p className="site-copy mx-auto mt-4 max-w-2xl">
            {copy.about.joinBodyPrefix}{" "}
            <a href="mailto:hello@thehivecc.org" className="site-link">
              hello@thehivecc.org
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
