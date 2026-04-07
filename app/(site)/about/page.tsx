"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MemberTabId = "founder" | "team" | "board";

type MemberRecord = {
  name: string;
  role?: string;
  note?: string;
  email?: string;
  extension?: string;
  accent: string;
  image?: string;
  empty?: boolean;
};

const tabs: Array<{ id: MemberTabId; label: string }> = [
  { id: "founder", label: "Founder/CEO" },
  { id: "team", label: "Team Members" },
  { id: "board", label: "Board of Directors" },
];

const teamMembers: MemberRecord[] = [
  {
    name: "Alyson Berry",
    role: "Executive Administrator",
    email: "alyson@thehivecc.org",
    extension: "ext 104",
    accent: "from-[#f7c766] via-[#ef8f57] to-[#de6d67]",
    image: "/member-images/AlysonBerry.avif",
  },
  {
    name: "Jalona Webb",
    role: "Legal Outreach Advocate",
    email: "jalona.webb@thehivecc.org",
    extension: "ext 108",
    accent: "from-[#f4d6a0] via-[#cde6d8] to-[#7ab7c4]",
    image: "/member-images/JalonaWebb.avif",
  },
  {
    name: "Kinnethia Tolson",
    role: "Education and Volunteer Coordinator",
    email: "kinnethia@thehivecc.org",
    extension: "ext. 109",
    accent: "from-[#d8efe7] via-[#8fd0c8] to-[#4d8fa1]",
    image: "/member-images/KinnethiaTolson.avif",
  },
  {
    name: "Beatrice Hernandez-Morales",
    role: "Bilingual Outreach Advocate",
    email: "beatrice@thehivecc.org",
    extension: "ext. 107",
    accent: "from-[#fde0b0] via-[#f8b77e] to-[#d8878d]",
    image: "/member-images/BeatriceHernandezMorales.avif",
  },
  ];

const boardMembers: MemberRecord[] = [
  {
    name: "Dr. Stephanie Kirkland",
    role: "Board Chair",
    note: "Identity Dynamics\nCEO",
    accent: "from-[#f2cc7a] via-[#ea9c65] to-[#bc6f6c]",
    image: "/member-images/StephanieKirkland.avif",
  },
  {
    name: "Jordan Crapps",
    role: "Vice Chair",
    note: "Gallivan, White, Boyd\nPartner",
    accent: "from-[#f7ddc1] via-[#d3e7e0] to-[#87b5c1]",
    image: "/member-images/JordanCrapps.avif",
  },
  {
    name: "Andrea Lee",
    role: "Treasurer",
    note: "Center for Community Health Alignment\nAssociate Director of Operations",
    accent: "from-[#d6eae4] via-[#96c9c3] to-[#628aa1]",
    image: "/member-images/AndreaLee.avif",
  },
  {
    name: "Ann Turner",
    role: "AVP",
    note: "Underwriting Operations",
    accent: "from-[#f8dfaf] via-[#f3c18b] to-[#d78f7f]",
    image: "/member-images/AnnTurner.avif",
  },
  {
    name: "Anthony Bryant",
    role: "Board Member",
    note: "Leadership Strategist, Speaker, Author",
    accent: "from-[#f1c978] via-[#d9925f] to-[#b66a55]",
    image: "/member-images/AnthonyBryant.avif",
  },
  {
    name: "Bency Beals",
    role: "Board Member",
    note: "Ignite Leadership Solutions\nCEO",
    accent: "from-[#f5d8c0] via-[#e4b1a3] to-[#ba8792]",
    image: "/member-images/BencyBeals.avif",
  },
  {
    name: "Ebone Ivory",
    role: "Board Member",
    note: "SC Department of Employment and Workforce\nAdministrative Hearing Officer",
    accent: "from-[#f5d792] via-[#e4a85e] to-[#c66d5f]",
    image: "/member-images/EboneIvory.avif",
  },
  {
    name: "Naomi Walton",
    role: "Board Member",
    accent: "from-[#dceef0] via-[#a7d3da] to-[#6aa1b0]",
    image: "/member-images/NaomiWalton.avif",
  },
  {
    name: "Nicki Woodson",
    role: "Board Member",
    note: "Starbucks\nManager of Partner Resources (HR)",
    accent: "from-[#f8ddb8] via-[#efb47b] to-[#cf8372]",
    image: "/member-images/NickiWoodson.avif",
  },
  {
    name: "Terry Judy",
    role: "Board Member",
    note: "Ignite Leadership Solutions\nImpact & Partnerships Director",
    accent: "from-[#ecd8be] via-[#d7b3a0] to-[#a9858c]",
    image: "/member-images/TerryJudy.avif",
  },
];

function MemberCard({ member }: { member: MemberRecord }) {
  return (
      <article
      className={cn(
        "group flex h-full cursor-pointer flex-col rounded-[2rem] border border-black/8 bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(255,248,238,0.92))] p-4 text-center shadow-[0_18px_60px_rgba(27,34,67,0.08)] transition duration-300",
        "hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(27,34,67,0.14)]",
        member.empty && "border-dashed border-black/12 bg-white/55"
      )}
      >
        <div className="relative mb-4 aspect-[4/4.5] w-full overflow-hidden rounded-[1.5rem] border border-white/60 shadow-inner transition duration-300 group-hover:scale-[1.01]">
          {member.image ? (
            <>
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-contain p-3"
              />
            </>
          ) : (
            <div
              className={cn(
                "h-full w-full bg-gradient-to-br",
                member.accent,
                member.empty && "opacity-55 saturate-50"
              )}
            />
          )}
        </div>
        <div className="space-y-1">
          <h3 className="font-[var(--font-heading)] text-[1.15rem] leading-tight text-slate-900">
            {member.name}
          </h3>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
            {member.role}
          </p>
          {member.email ? (
            <a
              href={`mailto:${member.email}`}
              className="mx-auto break-words text-sm leading-6 text-[#1d979c] underline decoration-[#1d979c]/35 underline-offset-4 transition hover:text-[#187d81] hover:decoration-[#187d81]"
            >
              {member.email}
            </a>
          ) : null}
          {member.extension ? (
            <p className="text-sm leading-6 text-slate-600">
              {member.extension}
            </p>
          ) : null}
          {member.note ? (
            <p className="mx-auto max-w-[24ch] whitespace-pre-line text-sm leading-6 text-slate-600">
              {member.note}
            </p>
          ) : null}
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
            <section
              aria-labelledby="about-founded-heading"
              className="mx-auto max-w-4xl"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-[#1d979c]/16 bg-[linear-gradient(135deg,rgba(255,245,225,0.96),rgba(255,255,255,0.96),rgba(223,240,236,0.94))] px-6 py-8 shadow-[0_18px_60px_rgba(32,42,69,0.08)] sm:px-8 sm:py-10">
                <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-[#f7c766]/25 blur-3xl" />
                <div className="absolute -right-8 bottom-0 h-28 w-28 rounded-full bg-[#7ab7c4]/24 blur-3xl" />
                <div className="relative">
                  <h2
                    id="about-founded-heading"
                    className="font-[var(--font-heading)] text-2xl text-slate-950 sm:text-3xl"
                  >
                    Why We Were Founded
                  </h2>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-[1.05rem]">
                    We were founded in 2015 with a visionary spirit and urgent
                    objective: to help prevent violence against some of our
                    nation’s most vulnerable populations of women and girls. As
                    a survivor-led, survivor-driven peer advocacy organization,
                    we bring a culturally-competent approach to preventing and
                    educating survivors and their surrounding communities about
                    sexual assault, intimate partner violence, and stalking. We
                    exist to enhance support services and prevention for women
                    and girls of color and those experiencing economic
                    instability.
                  </p>
                </div>
              </div>
            </section>

            <div className="mx-auto max-w-3xl text-center">
              <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#d8794a]">
                Members
              </p>
              <h1 className="mt-4 font-[var(--font-heading)] text-4xl leading-tight text-slate-950 sm:text-5xl">
                Meet the people shaping The Hive.
              </h1>
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
                        <div className="mt-8 rounded-[1.75rem] border border-dashed border-[#1d979c]/25 bg-[#1d979c]/6 p-5">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1d979c]">
                                Narrative
                            </p>
                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                A lifelong advocate, Ashley draws from both lived experience and a strong academic foundation, holding a B.A. in Psychology from Columbia College and a Master of Social Work from the University of Washington. She is known for her ability to mobilize people, resources, and ideas to drive meaningful social change.
                                Ashley has served in numerous philanthropic and leadership roles, including Board Member of Prisma Health Hospital Foundation, member of the Central Carolina Community Foundation African American Philanthropy Committee, and Chair of the Richland County Domestic Violence Coordinating Community Council. She currently serves on the South Carolina Victim Services Coordinating Council.
                                Her impact has been nationally recognized. Ashley is a 2022 Aspen SOAR Fellow and recipient of honors including The State’s 20 Under 40 and a Jefferson Award. She is a sought-after speaker and facilitator, having presented at the Essence Festival and been featured in outlets such as Black Enterprise. Her work focuses on social and racial justice, gender-based violence, and leadership.
                                Above all, Ashley is a mother to three children—Corinne Elizabeth, Caleb Josiah, and Collin Noah—who inspire her continued commitment to building safer, more equitable communities.
                            </p>
                        </div>
                      <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        <div className="rounded-[1.75rem] border border-black/6 bg-white/80 p-5">
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Founding Spark
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-600">
                              As a survivor of sexual abuse and a native of South Carolina,
                              Ashley Olayinka recognized the critical gaps in culturally
                              responsive support for Black and Brown women and girls
                              impacted by gender-based violence. Her lived experience,
                              combined with her professional training, inspired her to
                              create a space where survivors could access care that
                              affirms their identities, addresses systemic barriers,
                              and fosters true healing. This vision became The Hive.
                          </p>
                        </div>
                        <div className="rounded-[1.75rem] border border-black/6 bg-white/80 p-5">
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Vision Today
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-600">
                              Today, Ashley leads The Hive alongside fellow survivors,
                              working to decrease barriers and expand access to equitable,
                              trauma-informed, and economically empowering services. Her
                              leadership is rooted in healing justice, ensuring that
                              survivors are not only supported, but also equipped to
                              reclaim their autonomy, mental health, and economic mobility.
                              She continues to advocate for systems change so that women
                              and girls of color are safe, seen, and supported.
                          </p>
                        </div>
                      </div>
                    </article>

                      <aside className="rounded-[2rem] border border-black/8 bg-[linear-gradient(145deg,rgba(255,251,242,0.96),rgba(255,255,255,0.85))] p-6 shadow-[0_20px_70px_rgba(32,42,69,0.08)] sm:p-8">
                          <div className="relative mx-auto h-[18rem] max-w-sm overflow-hidden rounded-[2rem] sm:h-[22rem]">
                              <Image
                                  src="/member-images/Ashley2.png"
                                  alt="Ashley Olayinka"
                                  fill
                                  className="object-contain object-center p-4"
                              />
                          </div>
                      <div className="mx-auto mt-6 max-w-sm text-center">
                        <h3 className="font-[var(--font-heading)] text-2xl text-slate-950">
                            Ashley Olayinka
                        </h3>
                        <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                          Founder &amp; Chief Executive Officer
                        </p>
                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            Ashley Olayinka is a transformative leader, healing justice advocate, and founder of The Hive,
                            a culturally specific peer advocacy organization serving Black and Brown survivors of
                            gender-based violence in South Carolina.
                        </p>
                      </div>
                    </aside>
                  </section>
              ) : null}

              {activeTab === "team" ? (
                  <MemberGrid
                      eyebrow="Team"
                      title="Team Members"
                      description=""
                      members={teamMembers}
                  />
              ) : null}

              {activeTab === "board" ? (
                  <MemberGrid
                      eyebrow="Leadership"
                      title="Board of Directors"
                      description=""
                      members={boardMembers}
                  />
              ) : null}
            </div>

            <section className="mt-14">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#1d979c]/18 bg-[linear-gradient(135deg,rgba(255,240,198,0.92),rgba(255,255,255,0.96),rgba(208,238,230,0.92))] px-6 py-7 text-center shadow-[0_18px_60px_rgba(29,151,156,0.12)] sm:px-8">
                <div className="absolute -left-8 top-0 h-24 w-24 rounded-full bg-[#f7c766]/35 blur-2xl" />
                <div className="absolute -right-6 bottom-0 h-24 w-24 rounded-full bg-[#7ab7c4]/30 blur-2xl" />
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#d8794a]">
                    Join The Hive
                  </p>
                  <p className="mx-auto mt-3 max-w-3xl font-[var(--font-heading)] text-2xl leading-tight text-slate-900 sm:text-3xl">
                    Looking to join our team?
                  </p>
                  <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-700">
                    Send your resume and a cover letter to{" "}
                    <a
                      href="mailto:hello@thehivecc.org"
                      className="font-semibold text-[#1d979c] underline decoration-[#1d979c]/35 underline-offset-4 transition hover:text-[#187d81] hover:decoration-[#187d81]"
                    >
                      hello@thehivecc.org
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
  );
}
