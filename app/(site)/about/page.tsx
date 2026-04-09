"use client";

import Image from "next/image";
import { useState } from "react";

import { useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MemberTabId = "founder" | "team" | "board";

type MemberRecord = {
  name: string;
  role?: string;
  note?: string;
  email?: string;
  extension?: string;
  image?: string;
};

const teamMembers: MemberRecord[] = [
  {
    name: "Alyson Berry",
    role: "Executive Administrator",
    email: "alyson@thehivecc.org",
    extension: "ext 104",
    image: "/member-images/AlysonBerry.avif",
  },
  {
    name: "Jalona Webb",
    role: "Legal Outreach Advocate",
    email: "jalona.webb@thehivecc.org",
    extension: "ext 108",
    image: "/member-images/JalonaWebb.avif",
  },
  {
    name: "Kinnethia Tolson",
    role: "Education and Volunteer Coordinator",
    email: "kinnethia@thehivecc.org",
    extension: "ext. 109",
    image: "/member-images/KinnethiaTolson.avif",
  },
  {
    name: "Beatrice Hernandez-Morales",
    role: "Bilingual Outreach Advocate",
    email: "beatrice@thehivecc.org",
    extension: "ext. 107",
    image: "/member-images/BeatriceHernandezMorales.avif",
  },
];

const boardMembers: MemberRecord[] = [
  {
    name: "Dr. Stephanie Kirkland",
    role: "Board Chair",
    note: "Identity Dynamics\nCEO",
    image: "/member-images/StephanieKirkland.avif",
  },
  {
    name: "Jordan Crapps",
    role: "Vice Chair",
    note: "Gallivan, White, Boyd\nPartner",
    image: "/member-images/JordanCrapps.avif",
  },
  {
    name: "Andrea Lee",
    role: "Treasurer",
    note: "Center for Community Health Alignment\nAssociate Director of Operations",
    image: "/member-images/AndreaLee.avif",
  },
  {
    name: "Ann Turner",
    role: "AVP",
    note: "Underwriting Operations",
    image: "/member-images/AnnTurner.avif",
  },
  {
    name: "Anthony Bryant",
    role: "Board Member",
    note: "Leadership Strategist, Speaker, Author",
    image: "/member-images/AnthonyBryant.avif",
  },
  {
    name: "Bency Beals",
    role: "Board Member",
    note: "Ignite Leadership Solutions\nCEO",
    image: "/member-images/BencyBeals.avif",
  },
  {
    name: "Ebone Ivory",
    role: "Board Member",
    note: "SC Department of Employment and Workforce\nAdministrative Hearing Officer",
    image: "/member-images/EboneIvory.avif",
  },
  {
    name: "Naomi Walton",
    role: "Board Member",
    image: "/member-images/NaomiWalton.avif",
  },
  {
    name: "Nicki Woodson",
    role: "Board Member",
    note: "Starbucks\nManager of Partner Resources (HR)",
    image: "/member-images/NickiWoodson.avif",
  },
  {
    name: "Terry Judy",
    role: "Board Member",
    note: "Ignite Leadership Solutions\nImpact & Partnerships Director",
    image: "/member-images/TerryJudy.avif",
  },
];

function MemberCard({ member }: { member: MemberRecord }) {
  return (
    <article className="site-card p-6 text-center">
      <div className="relative mx-auto mb-5 aspect-[4/4.5] w-full max-w-[15rem] overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-contain p-3"
          />
        ) : null}
      </div>
      <h3 className="text-xl font-bold text-hive-blue">{member.name}</h3>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
        {member.role}
      </p>
      {member.email ? (
        <a
          href={`mailto:${member.email}`}
          className="site-link mt-3 inline-block text-sm"
        >
          {member.email}
        </a>
      ) : null}
      {member.extension ? (
        <p className="mt-2 text-sm text-gray-600">{member.extension}</p>
      ) : null}
      {member.note ? (
        <p className="mt-3 whitespace-pre-line text-sm leading-7 text-gray-600">
          {member.note}
        </p>
      ) : null}
    </article>
  );
}

function MemberGrid({
  eyebrow,
  title,
  description,
  members,
}: {
  eyebrow: string;
  title: string;
  description: string;
  members: MemberRecord[];
}) {
  return (
    <section className="space-y-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hive-orange">
          {eyebrow}
        </p>
        <h2 className="site-heading mt-4">{title}</h2>
        {description ? <p className="site-copy mt-4">{description}</p> : null}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {members.map((member, index) => (
          <MemberCard key={`${member.name}-${index}`} member={member} />
        ))}
      </div>
    </section>
  );
}

export default function AboutPage() {
  const copy = useSiteCopy();
  const [activeTab, setActiveTab] = useState<MemberTabId>("founder");

  const tabs: Array<{ id: MemberTabId; label: string }> = [
    { id: "founder", label: copy.about.tabs.founder },
    { id: "team", label: copy.about.tabs.team },
    { id: "board", label: copy.about.tabs.board },
  ];

  const localizedTeamMembers = teamMembers.map((member, index) => ({
    ...member,
    ...(copy.about.teamMembers[index] ?? {}),
  }));

  const localizedBoardMembers = boardMembers.map((member, index) => ({
    ...member,
    ...(copy.about.boardMembers[index] ?? {}),
  }));

  return (
    <main className="site-page">
      <div className="site-page--narrow space-y-10">
        <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <p className="site-eyebrow">{copy.about.heroEyebrow}</p>
            <h1 className="site-title mt-4">{copy.about.heroTitle}</h1>
          </div>
        </section>

        <section className="px-6 py-6 sm:px-10 sm:py-8 lg:px-14">
          <div className="mx-auto max-w-4xl">
            <Image
              src="/member-images/BeeEmpowered.avif"
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
            <h2 className="site-heading text-center">
              {copy.about.founderSectionTitle}
            </h2>
            <p className="site-copy mt-5 text-center text-xl">
              {copy.about.founderSectionBody}
            </p>
          </div>
        </section>

        <section className="site-surface px-6 py-2 sm:px-10 sm:py-10 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-md font-semibold uppercase tracking-[0.3em] text-hive-orange">
              {copy.about.membersEyebrow}
            </p>
            <h2 className="site-heading mt-6">{copy.about.membersTitle}</h2>
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
                    "rounded-full border px-5 py-3 text-sm font-semibold transition",
                    isActive
                      ? "border-hive-blue bg-hive-blue text-white hover:bg-hive-blue/90"
                      : "border-hive-blue/20 bg-white text-hive-blue hover:bg-hive-blue/5"
                  )}
                >
                  {tab.label}
                </Button>
              );
            })}
          </div>

          <div className="mt-12">
            {activeTab === "founder" ? (
              <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <article className="site-card p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hive-orange">
                    {copy.about.founderStoryEyebrow}
                  </p>
                  <h2 className="site-heading mt-4">{copy.about.founderTitle}</h2>

                  <div className="mt-8 rounded-xl border border-hive-blue/20 bg-hive-blue/5 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-hive-blue">
                      {copy.about.founderNarrativeLabel}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {copy.about.founderNarrativeParagraphs.join(" ")}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <div className="rounded-xl bg-gray-50 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                        {copy.about.founderSparkTitle}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {copy.about.founderSparkBody}
                      </p>
                    </div>
                    <div className="rounded-xl bg-gray-50 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                        {copy.about.founderVisionTitle}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {copy.about.founderVisionBody}
                      </p>
                    </div>
                  </div>
                </article>

                <aside className="site-card p-6 text-center sm:p-8">
                  <div className="relative mx-auto h-[18rem] max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-gray-50 sm:h-[22rem]">
                    <Image
                      src="/member-images/Ashley2.png"
                      alt="Ashley Olayinka"
                      fill
                      className="object-contain object-center p-4"
                    />
                  </div>
                  <div className="mx-auto mt-6 max-w-sm text-center">
                    <h3 className="text-2xl font-bold text-hive-blue">
                      {copy.about.founderName}
                    </h3>
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                      {copy.about.founderRole}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-gray-600">
                      {copy.about.founderProfileBody}
                    </p>
                  </div>
                </aside>
              </section>
            ) : null}

            {activeTab === "team" ? (
              <MemberGrid
                eyebrow={copy.about.teamEyebrow}
                title={copy.about.teamTitle}
                description=""
                members={localizedTeamMembers}
              />
            ) : null}

            {activeTab === "board" ? (
              <MemberGrid
                eyebrow={copy.about.boardEyebrow}
                title={copy.about.boardTitle}
                description=""
                members={localizedBoardMembers}
              />
            ) : null}
          </div>
        </section>

        <section className="site-surface px-6 py-2 pb-20 text-center sm:px-10 lg:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-hive-orange">
            {copy.about.joinEyebrow}
          </p>
          <h2 className="site-heading mt-4">{copy.about.joinTitle}</h2>
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