import Image from "next/image";

import { sanityFetch } from "@/sanity/lib/live";
import { aboutPageQuery } from "@/sanity/queries/aboutPage";
import { siteSettingsQuery, type SiteSettingsData } from "@/sanity/queries/siteSettings";
import AboutTabs, {
  type FounderMember,
  type TeamMemberSanity,
  type BoardMemberSanity,
} from "@/components/about-tabs";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "About Us | The Hive",
};

// ── static fallbacks (used until Sanity content is published) ─────────────

const FALLBACK_FOUNDER: FounderMember[] = [
  {
    _id: "founder-ashley",
    name: "Ashley Olayinka",
    role: "Founder & Chief Executive Officer",
    imageUrl: "/member-images/Ashley2.png",
    storyEyebrow: "Founder Story",
    narrativeLabel: "Narrative",
    narrativeParagraphs: [
      "A lifelong advocate, Ashley draws from both lived experience and a strong academic foundation, holding a B.A. in Psychology from Columbia College and a Master of Social Work from the University of Washington.",
    ],
    sparkTitle: "Founding Spark",
    sparkBody:
      "As a survivor of sexual abuse and a native of South Carolina, Ashley Olayinka recognized the critical gaps in culturally responsive support for Black and Brown women and girls impacted by gender-based violence.",
    visionTitle: "Vision Today",
    visionBody:
      "Today, Ashley leads The Hive alongside fellow survivors, working to decrease barriers and expand access to equitable, trauma-informed, and economically empowering services.",
    profileBody:
      "Ashley Olayinka is a transformative leader, healing justice advocate, and founder of The Hive.",
  },
];

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

export default async function AboutPage() {
  const [{ data: page }, { data: siteData }] = await Promise.all([
    sanityFetch({ query: aboutPageQuery }),
    sanityFetch({ query: siteSettingsQuery }),
  ]);
  const site = siteData as SiteSettingsData;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sections = (page?.sections ?? []) as any[];

  const hero = sections.find((s) => s._type === "sectionHero");
  const imageText = sections.find((s) => s._type === "sectionImageText");
  const joinSection = sections.find((s) => s._type === "sectionRichText");
  const teamSections = sections.filter((s) => s._type === "sectionTeam");

  // ── text values (Sanity → fallback) ───────────────────────────────────
  const heroEyebrow = hero?.subheadline ?? "Members";
  const heroTitle = hero?.headline ?? "Meet the people shaping The Hive.";
  const whyTitle = imageText?.heading ?? "Why We Were Founded";
  const whyBody =
    imageText?.body ??
    "We were founded in 2015 with a visionary spirit and urgent objective: to help prevent violence against some of our nation's most vulnerable populations of women and girls.";
  const beeImageUrl = imageText?.imageUrl ?? "/member-images/BeeEmpowered.avif";
  const joinEyebrow = joinSection?.eyebrow ?? "Join The Hive";
  const joinTitle = joinSection?.heading ?? "Looking to join our team?";
  const joinBody =
    joinSection?.body ?? "Send your resume and a cover letter to hello@thehivecc.org";

  // ── member data (Sanity → fallback) ───────────────────────────────────
  const founderSec = teamSections.find((s) => s.groupLabel === "Founder/CEO");
  const teamSec = teamSections.find((s) => s.groupLabel === "Team Members");
  const boardSec = teamSections.find((s) => s.groupLabel === "Board of Directors");

  const founderMembers: FounderMember[] = founderSec?.members?.length
    ? founderSec.members
    : FALLBACK_FOUNDER;
  const teamMembers: TeamMemberSanity[] = teamSec?.members?.length
    ? teamSec.members
    : FALLBACK_TEAM;
  const boardMembers: BoardMemberSanity[] = boardSec?.members?.length
    ? boardSec.members
    : FALLBACK_BOARD;

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
              alt="Two members of The Hive sitting together"
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
          founderSection={{ label: founderSec?.groupLabel ?? "Founder/CEO" }}
          teamSection={{
            label: teamSec?.groupLabel ?? "Team Members",
            eyebrow: teamSec?.eyebrow,
          }}
          boardSection={{
            label: boardSec?.groupLabel ?? "Board of Directors",
            eyebrow: boardSec?.eyebrow,
          }}
          founderMembers={founderMembers}
          teamMembers={teamMembers}
          boardMembers={boardMembers}
          missionTitle={site?.missionTitle}
          missionBody={site?.missionBody}
          valuesTitle={site?.valuesTitle}
          valuesIntro={site?.valuesIntro}
          valuesPillars={site?.valuesPillars}
        />

        <section className="site-surface px-6 py-2 pb-20 text-center sm:px-10 lg:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-hive-orange">
            {joinEyebrow}
          </p>
          <h2 className="site-heading mt-4">{joinTitle}</h2>
          <p className="site-copy mx-auto mt-4 max-w-2xl">
            {joinBody.replace(/hello@thehivecc\.org\.?/i, "").trim()}{" "}
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