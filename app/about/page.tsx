"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MemberTabId = "founder" | "team" | "board";

type MemberRecord = {
  name: string;
  role?: string;
  note?: string;
  accent: string;
  empty?: boolean;
};

const tabs: Array<{ id: MemberTabId; label: string }> = [
  { id: "founder", label: "Founder/CEO" },
  { id: "team", label: "Team Members" },
  { id: "board", label: "Board of Directors" },
];

const teamMembers: MemberRecord[] = [
  { name: "Team Member Name", role: "Operations Lead", note: "Placeholder bio copy for future staffing details.", accent: "from-[#f7c766] via-[#ef8f57] to-[#de6d67]" },
  { name: "Team Member Name", role: "Program Coordinator", note: "Use this card for a team member profile when content is ready.", accent: "from-[#f4d6a0] via-[#cde6d8] to-[#7ab7c4]" },
  { name: "Team Member Name", role: "Community Outreach", note: "Reserved for role, short summary, and eventual portrait.", accent: "from-[#d8efe7] via-[#8fd0c8] to-[#4d8fa1]" },
  { name: "Team Member Name", role: "Education Specialist", note: "Keeps the structure ready without requiring final data yet.", accent: "from-[#fde0b0] via-[#f8b77e] to-[#d8878d]" },
  { name: "Open Position", role: "Future Team Seat", note: "Empty card placeholder for upcoming team additions.", accent: "from-[#f6efe5] via-[#ede2d1] to-[#ded3c5]", empty: true },
  { name: "Open Position", role: "Future Team Seat", note: "Add a photo, name, and role here later.", accent: "from-[#f6efe5] via-[#ede2d1] to-[#ded3c5]", empty: true },
];

const boardMembers: MemberRecord[] = [
  { name: "Board Member Name", role: "Chair", note: "Placeholder structure for board leadership details.", accent: "from-[#f2cc7a] via-[#ea9c65] to-[#bc6f6c]" },
  { name: "Board Member Name", role: "Vice Chair", note: "Reserved for a concise board bio and headshot.", accent: "from-[#f7ddc1] via-[#d3e7e0] to-[#87b5c1]" },
  { name: "Board Member Name", role: "Treasurer", note: "Keeps the board grid balanced on desktop and mobile.", accent: "from-[#d6eae4] via-[#96c9c3] to-[#628aa1]" },
  { name: "Board Member Name", role: "Secretary", note: "Placeholder content for future board roster updates.", accent: "from-[#f8dfaf] via-[#f3c18b] to-[#d78f7f]" },
  { name: "Open Seat", role: "Board Position", note: "Open card ready for another director when confirmed.", accent: "from-[#f6efe5] via-[#ede2d1] to-[#ded3c5]", empty: true },
  { name: "Open Seat", role: "Board Position", note: "Structure remains in place even before content is finalized.", accent: "from-[#f6efe5] via-[#ede2d1] to-[#ded3c5]", empty: true },
];

function MemberCard({ member }: { member: MemberRecord }) {
  return (
      <article
      className={cn(
        "group flex h-full cursor-pointer flex-col rounded-[2rem] border border-black/8 bg-white/88 p-4 text-center shadow-[0_18px_60px_rgba(27,34,67,0.08)] transition duration-300",
        "hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(27,34,67,0.14)]",
        member.empty && "border-dashed border-black/12 bg-white/55"
      )}
      >
        <div
            className={cn(
                "mb-4 aspect-[4/4.5] w-full rounded-[1.5rem] border border-white/60 bg-gradient-to-br shadow-inner transition duration-300 group-hover:scale-[1.01]",
                member.accent,
                member.empty && "opacity-55 saturate-50"
            )}
        />
        <div className="space-y-1">
          <h3 className="font-[var(--font-heading)] text-[1.15rem] leading-tight text-slate-900">
            {member.name}
          </h3>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            {member.role}
          </p>
          <p className="mx-auto max-w-[24ch] text-sm leading-6 text-slate-600">
            {member.note}
          </p>
        </div>
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#d8794a]">
            {eyebrow}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl text-slate-950 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {members.map((member, index) => (
              <MemberCard key={`${member.name}-${index}`} member={member} />
          ))}
        </div>
      </section>
  );
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<MemberTabId>("founder");

  return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,#fff9ec_0%,#f8f3eb_42%,#eef3f7_100%)] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <section className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/78 px-6 py-10 shadow-[0_30px_120px_rgba(32,42,69,0.10)] backdrop-blur sm:px-10 sm:py-14 lg:px-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8794a]">
                Members
              </p>
              <h1 className="mt-4 font-[var(--font-heading)] text-4xl leading-tight text-slate-950 sm:text-5xl">
                Meet the people shaping The Hive.
              </h1>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                This page keeps the organization&apos;s people in one place, with a
                story-driven founder view and flexible grids ready for future team
                and board updates.
              </p>
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
                    "cursor-pointer rounded-full border px-5 py-6 font-[var(--font-body)] text-sm font-semibold tracking-[0.04em] transition",
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
              {activeTab === "founder" ? (
                  <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <article className="rounded-[2rem] border border-black/8 bg-[linear-gradient(145deg,rgba(255,251,242,0.96),rgba(255,255,255,0.85))] p-6 shadow-[0_20px_70px_rgba(32,42,69,0.08)] sm:p-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d8794a]">
                        Founder Story
                      </p>
                      <h2 className="mt-4 font-[var(--font-heading)] text-3xl text-slate-950 sm:text-4xl">
                        Founder/CEO
                      </h2>
                      <p className="mt-5 text-lg leading-8 text-slate-700">
                        Use this section to tell the origin story of the
                        organization, what problem the founder set out to solve, and
                        how that vision grew into The Hive.
                      </p>
                      <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        <div className="rounded-[1.75rem] border border-black/6 bg-white/80 p-5">
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Founding Spark
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            Placeholder copy for the moment that inspired the
                            founder to begin the organization and define its early
                            mission.
                          </p>
                        </div>
                        <div className="rounded-[1.75rem] border border-black/6 bg-white/80 p-5">
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Vision Today
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            Placeholder copy for how the CEO leads now, what values
                            shape the work, and where the organization is headed
                            next.
                          </p>
                        </div>
                      </div>
                      <div className="mt-8 rounded-[1.75rem] border border-dashed border-[#1d979c]/25 bg-[#1d979c]/6 p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1d979c]">
                          Narrative Space
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          Keep this area for a longer founder biography, a short
                          timeline, milestones, or a quote that explains why The
                          Hive was built in the first place.
                        </p>
                      </div>
                    </article>

                    <aside className="rounded-[2rem] border border-black/8 bg-white/88 p-6 shadow-[0_20px_70px_rgba(32,42,69,0.08)] sm:p-8">
                      <div className="mx-auto h-[18rem] max-w-sm rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#f7d68d] via-[#f0a76e] to-[#7ab7c4] shadow-inner sm:h-[22rem]" />
                      <div className="mx-auto mt-6 max-w-sm text-center">
                        <h3 className="font-[var(--font-heading)] text-2xl text-slate-950">
                          Founder Name
                        </h3>
                        <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                          Founder &amp; Chief Executive Officer
                        </p>
                        <p className="mt-4 text-sm leading-7 text-slate-600">
                          Placeholder profile area for a headshot, short leadership
                          summary, and a concise introduction before the longer
                          story content.
                        </p>
                      </div>
                    </aside>
                  </section>
              ) : null}

              {activeTab === "team" ? (
                  <MemberGrid
                      eyebrow="Team"
                      title="Team Members"
                      description="A responsive card grid for staff and core contributors. Placeholder and open-position cards keep the layout usable before final content arrives."
                      members={teamMembers}
                  />
              ) : null}

              {activeTab === "board" ? (
                  <MemberGrid
                      eyebrow="Leadership"
                      title="Board of Directors"
                      description="A matching grid for directors and advisors, with enough structure to scale as the board roster changes over time."
                      members={boardMembers}
                  />
              ) : null}
            </div>
          </section>
        </div>
      </main>
  );
}
