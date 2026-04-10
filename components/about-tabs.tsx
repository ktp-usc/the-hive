"use client";

import Image from "next/image";
import { useState } from "react";

import { useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ── types ──────────────────────────────────────────────────────────────────

export type FounderMember = {
  _id: string;
  name: string;
  role: string;
  imageUrl: string | null;
  storyEyebrow?: string | null;
  narrativeLabel?: string | null;
  narrativeParagraphs?: string[] | null;
  sparkTitle?: string | null;
  sparkBody?: string | null;
  visionTitle?: string | null;
  visionBody?: string | null;
  profileBody?: string | null;
};

export type TeamMemberSanity = {
  _id: string;
  name: string;
  role: string;
  imageUrl: string | null;
  email?: string | null;
  extension?: string | null;
};

export type BoardMemberSanity = {
  _id: string;
  name: string;
  role: string;
  imageUrl: string | null;
  bio?: string | null;
};

export type SanityMember = FounderMember | TeamMemberSanity | BoardMemberSanity;

type TabSection = {
  label: string;
  eyebrow?: string | null;
};

type Props = {
  heroEyebrow: string;
  heroTitle: string;
  founderSection: TabSection;
  teamSection: TabSection;
  boardSection: TabSection;
  founderMembers: FounderMember[];
  teamMembers: TeamMemberSanity[];
  boardMembers: BoardMemberSanity[];
};

// ── member cards ───────────────────────────────────────────────────────────

function FounderCard({ member }: { member: FounderMember }) {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <article className="site-card p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hive-orange">
          {member.storyEyebrow ?? "Founder Story"}
        </p>
        <h2 className="site-heading mt-4">{member.role}</h2>

        {member.narrativeParagraphs?.length ? (
          <div className="mt-8 rounded-xl border border-hive-blue/20 bg-hive-blue/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-hive-blue">
              {member.narrativeLabel ?? "Narrative"}
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              {member.narrativeParagraphs.join(" ")}
            </p>
          </div>
        ) : null}

      </article>

      <aside className="site-card p-6 text-center sm:p-8">
        <div className="relative mx-auto h-[18rem] max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-gray-50 sm:h-[22rem]">
          {member.imageUrl ? (
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              className="object-contain object-center p-4"
            />
          ) : null}
        </div>
        <div className="mx-auto mt-6 max-w-sm text-center">
          <h3 className="text-2xl font-bold text-hive-blue">{member.name}</h3>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            {member.role}
          </p>
          {member.profileBody ? (
            <p className="mt-4 text-sm leading-7 text-gray-600">{member.profileBody}</p>
          ) : null}
        </div>
      </aside>
    </section>
  );
}

function TeamMemberCard({ member }: { member: TeamMemberSanity }) {
  return (
    <article className="site-card p-6 text-center">
      <div className="relative mx-auto mb-5 aspect-[4/4.5] w-full max-w-[15rem] overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
        {member.imageUrl ? (
          <Image src={member.imageUrl} alt={member.name} fill className="object-contain p-3" />
        ) : null}
      </div>
      <h3 className="text-xl font-bold text-hive-blue">{member.name}</h3>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
        {member.role}
      </p>
      {member.email ? (
        <a href={`mailto:${member.email}`} className="site-link mt-3 inline-block text-sm">
          {member.email}
        </a>
      ) : null}
      {member.extension ? (
        <p className="mt-2 text-sm text-gray-600">{member.extension}</p>
      ) : null}
    </article>
  );
}

function BoardMemberCard({ member }: { member: BoardMemberSanity }) {
  return (
    <article className="site-card p-6 text-center">
      <div className="relative mx-auto mb-5 aspect-[4/4.5] w-full max-w-[15rem] overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
        {member.imageUrl ? (
          <Image src={member.imageUrl} alt={member.name} fill className="object-contain p-3" />
        ) : null}
      </div>
      <h3 className="text-xl font-bold text-hive-blue">{member.name}</h3>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
        {member.role}
      </p>
      {member.bio ? (
        <p className="mt-3 whitespace-pre-line text-sm leading-7 text-gray-600">{member.bio}</p>
      ) : null}
    </article>
  );
}

// ── main component ─────────────────────────────────────────────────────────

export default function AboutTabs({
  heroEyebrow,
  heroTitle,
  founderSection,
  teamSection,
  boardSection,
  founderMembers,
  teamMembers,
  boardMembers,
}: Props) {
  const copy = useSiteCopy();
  const [activeTab, setActiveTab] = useState<"founder" | "team" | "board">("founder");

  const tabs = [
    { id: "founder" as const, label: founderSection.label },
    { id: "team" as const,    label: teamSection.label },
    { id: "board" as const,   label: boardSection.label },
  ];

  return (
    <section className="site-surface px-6 py-2 sm:px-10 sm:py-10 lg:px-14">
      <div className="mx-auto mb-12 max-w-5xl space-y-5">
        <div className="rounded-2xl border border-hive-orange/10 bg-hive-orange/5 p-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-hive-orange">
            {copy.home.missionTitle}
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-600">{copy.home.missionBody}</p>
        </div>

        {founderMembers[0]?.visionBody ? (
          <div className="rounded-2xl border border-hive-yellow/20 bg-hive-yellow/10 p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b7a00]">
              {founderMembers[0].visionTitle ?? "Vision"}
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              {founderMembers[0].visionBody}
            </p>
          </div>
        ) : null}

        <div className="rounded-2xl border border-hive-blue/10 bg-white p-6 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-hive-blue">
            {copy.awareness.valuesTitle}
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            {copy.awareness.valuesIntro}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {copy.awareness.valuesPillars.map((value) => (
              <span
                key={value}
                className="rounded-full bg-hive-blue/5 px-4 py-2 text-sm font-semibold text-hive-blue"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <p className="text-md font-semibold uppercase tracking-[0.3em] text-hive-orange">
          {heroEyebrow}
        </p>
        <h2 className="site-heading mt-6">{heroTitle}</h2>
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
        {activeTab === "founder" && founderMembers.length > 0 ? (
          <FounderCard member={founderMembers[0]} />
        ) : null}

        {activeTab === "team" ? (
          <section className="space-y-8">
            <div className="mx-auto max-w-3xl text-center">
              {teamSection.eyebrow ? (
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hive-orange">
                  {teamSection.eyebrow}
                </p>
              ) : null}
              <h2 className="site-heading mt-4">{teamSection.label}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((m) => <TeamMemberCard key={m._id} member={m} />)}
            </div>
          </section>
        ) : null}

        {activeTab === "board" ? (
          <section className="space-y-8">
            <div className="mx-auto max-w-3xl text-center">
              {boardSection.eyebrow ? (
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hive-orange">
                  {boardSection.eyebrow}
                </p>
              ) : null}
              <h2 className="site-heading mt-4">{boardSection.label}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {boardMembers.map((m) => <BoardMemberCard key={m._id} member={m} />)}
            </div>
          </section>
        ) : null}
      </div>
    </section>
  );
}
