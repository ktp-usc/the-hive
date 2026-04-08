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
  image?: string;
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
        <a href={`mailto:${member.email}`} className="site-link mt-3 inline-block text-sm">
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
  const [activeTab, setActiveTab] = useState<MemberTabId>("founder");

  return (
    <main className="site-page">
      <div className="site-page--narrow space-y-10">
        <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <p className="site-eyebrow text-base tracking-[0.2em]">About Us</p>
            <h1 className="site-title mt-4">About The Hive</h1>
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
            <h2 className="site-heading text-center">Why We Were Founded</h2>
            <p className="site-copy text-center mt-5 text-xl">
                We were founded in 2015 with a visionary spirit and urgent
              objective: to help prevent violence against some of our nation&apos;s
              most vulnerable populations of women and girls. As a survivor-led,
              survivor-driven peer advocacy organization, we bring a
              culturally-competent approach to preventing and educating
              survivors and their surrounding communities about sexual assault,
              intimate partner violence, and stalking. We exist to enhance
              support services and prevention for women and girls of color and
              those experiencing economic instability.
            </p>
          </div>
        </section>

        <section className="site-surface px-6 py-2 sm:px-10 sm:py-10 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-md font-semibold uppercase tracking-[0.3em] text-hive-orange">
              Members
            </p>
            <h2 className="site-heading mt-6">Meet the people shaping The Hive.</h2>
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
                    Founder Story
                  </p>
                  <h2 className="site-heading mt-4">Founder/CEO</h2>

                  <div className="mt-8 rounded-xl border border-hive-blue/20 bg-hive-blue/5 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-hive-blue">
                      Narrative
                    </p>
                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      A lifelong advocate, Ashley draws from both lived
                      experience and a strong academic foundation, holding a
                      B.A. in Psychology from Columbia College and a Master of
                      Social Work from the University of Washington. She is
                      known for her ability to mobilize people, resources, and
                      ideas to drive meaningful social change. Ashley has served
                      in numerous philanthropic and leadership roles, including
                      Board Member of Prisma Health Hospital Foundation, member
                      of the Central Carolina Community Foundation African
                      American Philanthropy Committee, and Chair of the
                      Richland County Domestic Violence Coordinating Community
                      Council. She currently serves on the South Carolina
                      Victim Services Coordinating Council. Her impact has been
                      nationally recognized. Ashley is a 2022 Aspen SOAR Fellow
                      and recipient of honors including The State&apos;s 20 Under 40
                      and a Jefferson Award. She is a sought-after speaker and
                      facilitator, having presented at the Essence Festival and
                      been featured in outlets such as Black Enterprise. Her
                      work focuses on social and racial justice, gender-based
                      violence, and leadership. Above all, Ashley is a mother to
                      three children, Corinne Elizabeth, Caleb Josiah, and
                      Collin Noah, who inspire her continued commitment to
                      building safer, more equitable communities.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <div className="rounded-xl bg-gray-50 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                        Founding Spark
                      </p>
                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        As a survivor of sexual abuse and a native of South
                        Carolina, Ashley Olayinka recognized the critical gaps
                        in culturally responsive support for Black and Brown
                        women and girls impacted by gender-based violence. Her
                        lived experience, combined with her professional
                        training, inspired her to create a space where survivors
                        could access care that affirms their identities,
                        addresses systemic barriers, and fosters true healing.
                        This vision became The Hive.
                      </p>
                    </div>
                    <div className="rounded-xl bg-gray-50 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                        Vision Today
                      </p>
                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        Today, Ashley leads The Hive alongside fellow
                        survivors, working to decrease barriers and expand
                        access to equitable, trauma-informed, and economically
                        empowering services. Her leadership is rooted in
                        healing justice, ensuring that survivors are not only
                        supported, but also equipped to reclaim their autonomy,
                        mental health, and economic mobility. She continues to
                        advocate for systems change so that women and girls of
                        color are safe, seen, and supported.
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
                      Ashley Olayinka
                    </h3>
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                      Founder &amp; Chief Executive Officer
                    </p>
                    <p className="mt-4 text-sm leading-7 text-gray-600">
                      Ashley Olayinka is a transformative leader, healing
                      justice advocate, and founder of The Hive, a culturally
                      specific peer advocacy organization serving Black and
                      Brown survivors of gender-based violence in South
                      Carolina.
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
        </section>

        <section className="site-surface px-6 py-2 pb-20 text-center sm:px-10 lg:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-hive-orange">
            Join The Hive
          </p>
          <h2 className="site-heading mt-4">Looking to join our team?</h2>
          <p className="site-copy mx-auto mt-4 max-w-2xl">
            Send your resume and a cover letter to{" "}
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
