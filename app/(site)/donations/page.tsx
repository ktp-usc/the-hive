"use client";

import Image from "next/image";
import { Flower2, HeartHandshake, Sparkles, Star, Users } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DonationTabId = "casita" | "keepers";
type VolunteerOpportunity = {
  title: string;
  description: string;
};
type KeeperTier = {
  amount: string;
  yearly: string;
  name: string;
  accent: string;
  description: string;
};

const tabs: Array<{ id: DonationTabId; label: string }> = [
  { id: "casita", label: "Casita of Care" },
  { id: "keepers", label: "The Keepers Club" },
];

const casitaWaysToGive = [
  {
    title: "Donate essential items",
    description:
      "Stock the space with hygiene products, cleaning supplies, household basics, and beauty items survivors actually want to choose from.",
  },
  {
    title: "Give financially",
    description:
      "Help keep the shelves full, the space maintained, and the Casita ready for each person who walks through the door.",
  },
  {
    title: "Volunteer with care",
    description:
      "Support sorting, restocking, and welcoming community efforts that make the Casita feel calm, beautiful, and survivor-centered.",
  },
];

const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    title: "The Voices of Washindi-Speaker's Bureau",
    description:
      "A community and platform for survivors of sexual assault and intimate partner violence to share their stories of resiliency and courage through the incorporation of the arts and craft of storytelling. Additional Training is required.",
  },
  {
    title: "Hive Ambassadors",
    description:
      "If you love sharing The Hive, then tabling and general outreach may interest you. In this role you will have the opportunity to connect with the community and share about The Hive at community based events.",
  },
  {
    title: "Hive Hostesses/Hosts",
    description:
      "Hive Hostesses/Hosts are special event volunteers who may not have the capacity to volunteer regularly but desire to support our work. As a volunteer in this area you will be contacted to volunteer when we have Hive hosted events such as our Annual SC Survivors Summit or fundraisers.",
  },
  {
    title: "Volunteer Groups",
    description:
      "We have opportunities available for groups looking to volunteer together. These opportunities for groups of 5 or more include packing Bee Boxes of support for survivors or assembling BuzzPaks for our prevention education programming for youth.",
  },
];

const keeperTiers: KeeperTier[] = [
  {
    amount: "$10/mo",
    yearly: "$120/year",
    name: "Hives of Hope",
    accent: "#fff0de",
    description:
      "A simple monthly gift that helps provide practical support like Bee Boxes and everyday essentials.",
  },
  {
    amount: "$20/mo",
    yearly: "$240/year",
    name: "Beeyond Donor",
    accent: "#ffd9b3",
    description:
      "Strengthens access to survivor support such as counseling and other stabilizing services throughout the year.",
  },
  {
    amount: "$30/mo",
    yearly: "$360/year",
    name: "Beelievers Circle",
    accent: "#ffc083",
    description:
      "Creates dependable funding that helps cover urgent needs and extend survivor-centered care each month.",
  },
  {
    amount: "$50/mo",
    yearly: "$600/year",
    name: "Pollinator Pledge",
    accent: "#f3a351",
    description:
      "Expands The Hive's ability to fund prevention training, outreach, and stronger long-term community impact.",
  },
];

const keeperBenefits = [
  "A welcome packet with a Keeper's Club shirt and Hive decal.",
  "Bee In The Know reports and annual impact updates.",
  "Exclusive invitations to Hive events throughout the year.",
  "A year-end tax deduction letter for recurring gifts.",
];

const keeperImpactAreas = [
  {
    title: "Emergency and Economic Relief",
    src: "/donations/keepersclub2.avif",
    alt: "Emergency and economic relief support",
  },
  {
    title: "Counseling",
    src: "/donations/keepersclub3.avif",
    alt: "Counseling support",
  },
  {
    title: "Survivor-Based Outreach",
    src: "/donations/keepersclub4.avif",
    alt: "Survivor-based outreach",
  },
  {
    title: "Education and Prevention",
    src: "/donations/keepersclub5.avif",
    alt: "Education and prevention",
  },
];

function FeatureImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="site-panel overflow-hidden p-3">
      <div className="flex w-full items-center justify-center rounded-xl bg-gray-50">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={1500}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-auto max-h-[32rem] w-full rounded-xl object-contain"
        />
      </div>
    </div>
  );
}

export default function DonationsPage() {
  const [activeTab, setActiveTab] = useState<DonationTabId>("casita");

  return (
    <main className="site-page">
      <div className="site-page--narrow space-y-10">
        <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <p className="site-eyebrow">Impact the Hive</p>
            <h1 className="site-title mt-4">
              Support survivors through spaces of care and sustaining generosity
            </h1>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild className="h-auto rounded-full bg-hive-orange px-6 py-4 text-sm font-semibold text-white hover:bg-hive-orange/90">
                <a
                  href="https://thehivecc.networkforgood.com/projects/204053-what-is-hope"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Now
                </a>
              </Button>
              <Button asChild className="h-auto rounded-full border border-white bg-transparent px-6 py-4 text-sm font-semibold text-white hover:bg-white/10">
                <a
                  href="https://pointapp.org/orgs/7916"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Volunteer
                </a>
              </Button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white/95 p-5 text-left">
                <Flower2 className="h-5 w-5 text-hive-blue" />
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                  Casita of Care
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  A boutique-style resource space designed around dignity,
                  privacy, and belonging.
                </p>
              </div>
              <div className="rounded-xl bg-white/95 p-5 text-left">
                <HeartHandshake className="h-5 w-5 text-hive-orange" />
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                  Monthly Giving
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  The Keepers Club creates steady support that helps The Hive
                  respond month after month.
                </p>
              </div>
              <div className="rounded-xl bg-white/95 p-5 text-left">
                <Users className="h-5 w-5 text-hive-orange" />
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                  Community Powered
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Every gift helps survivors feel seen, supported, and connected
                  to a stronger community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
          <h2 className="site-heading">Volunteer Opportunities</h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {volunteerOpportunities.map((opportunity) => (
              <article key={opportunity.title} className="site-card p-5">
                <h3 className="text-[1.15rem] font-semibold leading-tight text-hive-blue">
                  {opportunity.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {opportunity.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-hive-orange">
              Giving Sections
            </p>
            <h2 className="site-heading mt-4">
              Explore the giving story that speaks to you.
            </h2>
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
            {activeTab === "casita" ? (
              <section className="space-y-10">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <article className="px-2 sm:px-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hive-orange">
                      Casita of Care
                    </p>
                    <h3 className="mt-4 text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                      More Than a Pantry. A Place of Belonging.
                    </h3>
                    <div className="mt-6 space-y-6 text-lg leading-9 text-gray-600">
                      <p>
                        The Casita of Care reimagines what free resources can
                        look and feel like.{" "}
                        <span className="font-semibold text-hive-blue">
                          This isn&apos;t a thrift store or donation center,
                        </span>{" "}
                        it&apos;s a thoughtfully designed boutique where
                        survivors can shop with dignity for the items they need
                        and want.
                      </p>
                      <p>
                        From culturally specific hair and beauty products to
                        household essentials and cleaning supplies, every detail
                        is chosen with care and intention.
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button asChild className="h-auto rounded-full bg-hive-blue px-8 py-4 text-base font-medium text-white hover:bg-hive-blue/90">
                        <a
                          href="https://thehivecc.networkforgood.com/projects/204053-what-is-hope"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Support the Casita
                        </a>
                      </Button>
                    </div>
                  </article>

                  <FeatureImage
                    src="/donations/casitaofcare3.avif"
                    alt="Casita of Care main photo"
                  />
                </div>

                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <FeatureImage
                    src="/donations/casitaofcare2.avif"
                    alt="Casita of Care detail photo"
                  />

                  <article className="px-2 sm:px-4">
                    <h4 className="text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                      A Refuge for Survivors in the Midlands
                    </h4>
                    <div className="mt-6 space-y-6 text-lg leading-9 text-gray-600">
                      <p>
                        The Casita of Care serves those in the South Carolina
                        Midlands who are healing from sexual assault, intimate
                        partner violence, and stalking.
                      </p>
                      <p>
                        Survivors leave feeling a little more hopeful, a little
                        more grounded, and with one less thing on their worry
                        list. They walk away empowered, knowing their story is
                        valued, their healing matters, and they are part of a
                        community standing with them.
                      </p>
                    </div>
                  </article>
                </div>

                <div className="site-card p-6 text-center sm:p-8 lg:p-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hive-blue">
                    Community Story
                  </p>
                  <h4 className="mx-auto mt-4 max-w-5xl text-3xl font-bold leading-tight text-hive-blue sm:text-4xl">
                    A Community Rallies: How the Casita of Care Came to Be
                  </h4>
                  <p className="mx-auto mt-6 max-w-4xl text-xl leading-10 text-gray-500">
                    The story of the Casita of Care is one of persistence,
                    heart, and the power of community.
                  </p>

                  <div className="mx-auto mt-7 max-w-5xl space-y-5 text-center text-lg leading-10 text-gray-800">
                    <p>
                      The Casita of Care started with a simple conviction:
                      survivors deserve dignity when accessing resources. The
                      Hive began keeping hygiene and household items in a closet
                      for those who needed them. In early 2025, a generous
                      donation drive brought in so many supplies that the
                      overflow broke the closet doors.
                    </p>
                    <p>
                      After moving to a donated storage shed, the team faced a
                      new challenge: the South Carolina sun made the space hard
                      to use. Early support from local partners helped make the
                      shed functional through insulation, electricity, and the
                      first infrastructure upgrades.
                    </p>
                    <p>
                      Then the broader community stepped in. Business owners,
                      volunteers, and generous supporters helped transform the
                      idea into something beautiful and real. What started as a
                      stopgap solution became a boutique-style resource space
                      created with care, intention, and deep belief in
                      survivor-centered healing.
                    </p>
                  </div>
                </div>

                <div className="site-card p-6 sm:p-8">
                  <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hive-orange">
                        Ways to Help
                      </p>
                      <h4 className="mt-3 text-3xl font-bold text-hive-blue">
                        Support the space with practical care.
                      </h4>
                      <p className="mt-4 text-base leading-8 text-gray-600">
                        Help stock the Casita, sustain the experience, and keep
                        this resource ready for each survivor who comes through
                        the door.
                      </p>
                      <div className="mt-6">
                        <div className="flex flex-wrap gap-3">
                          <Button asChild className="h-auto rounded-full border border-hive-blue bg-white px-6 py-4 text-base text-hive-blue hover:bg-hive-blue/5">
                            <a
                              href="https://pointapp.org/orgs/7916"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Volunteer
                            </a>
                          </Button>
                          <Button asChild className="h-auto rounded-full bg-hive-orange px-6 py-4 text-base font-medium text-white hover:bg-hive-orange/90">
                            <a
                              href="https://www.amazon.com/hz/wishlist/ls/OIKGIA7FGP0W?ref_=wl_share"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Casita Wishlist
                            </a>
                          </Button>
                        </div>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600">
                          Want to donate practical items directly? The Casita
                          of Care Amazon wishlist makes it easy to send needed
                          essentials straight to the space.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      {casitaWaysToGive.map((item) => (
                        <div key={item.title} className="rounded-xl bg-gray-50 p-5">
                          <Sparkles className="h-4 w-4 text-hive-blue" />
                          <p className="mt-3 text-base font-semibold text-hive-blue">
                            {item.title}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <section className="space-y-8 text-center">
                  <div className="site-card px-6 py-10 sm:px-10 sm:py-12">
                    <h4 className="text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                      Dedicated in Honor of Brianna
                    </h4>
                    <div className="mx-auto mt-6 max-w-4xl space-y-6 text-lg leading-10 text-gray-800">
                      <p>
                        The Casita of Care is dedicated in honor of{" "}
                        <span className="font-semibold">Brianna</span>, a
                        beloved teacher, sister, daughter, auntie, friend, and
                        lover of crochet. May the warmth and care she radiated
                        in life continue to live through this space.
                      </p>
                      <p>
                        We also dedicate the Casita of Care to all those whose
                        lives were taken by domestic violence, sexual assault,
                        and trafficking. May their names be held with dignity,
                        and may this space offer light, care, and hope to our
                        community.
                      </p>
                    </div>
                  </div>

                  <div className="site-card px-6 py-10 sm:px-10 sm:py-12">
                    <h4 className="text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                      Thank You to Our Community Partners
                    </h4>
                    <p className="mx-auto mt-6 max-w-4xl text-lg leading-10 text-gray-800">
                      The Casita of Care exists because over 25 local businesses
                      and individuals said yes. From interior design and
                      construction to marketing, flooring, HVAC, and beyond,
                      each partner contributed their time, talent, and
                      resources to make this vision a reality.
                    </p>
                  </div>
                </section>
              </section>
            ) : null}

            {activeTab === "keepers" ? (
              <section className="space-y-10">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <article className="px-2 sm:px-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hive-blue">
                      The Keepers Club
                    </p>
                    <h3 className="mt-4 text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                      Stewarding sustainability for survivors every month.
                    </h3>
                    <div className="mt-6 space-y-6 text-lg leading-9 text-gray-600">
                      <p>
                        The Keepers Club is The Hive&apos;s monthly giving
                        community. Recurring support helps create a steadier
                        budget for emergency relief, counseling, outreach, and
                        prevention work as demand continues to grow.
                      </p>
                      <p>
                        It&apos;s designed for people who want their generosity
                        to keep showing up month after month, helping survivors
                        access stable, responsive care when they need it most.
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button asChild className="h-auto rounded-full bg-hive-blue px-8 py-4 text-base font-medium text-white hover:bg-hive-blue/90">
                        <a
                          href="https://thehivecc.networkforgood.com/projects/204053-what-is-hope"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Join The Keepers Club
                        </a>
                      </Button>
                    </div>
                  </article>

                  <FeatureImage
                    src="/donations/keepersclub1.avif"
                    alt="Keepers Club main photo"
                  />
                </div>

                <div className="mx-auto max-w-4xl">
                  <article className="site-card px-6 py-8 text-center sm:px-8">
                    <div className="flex items-center justify-center gap-3">
                      <Star className="h-5 w-5 text-hive-orange" />
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hive-orange">
                        Member Benefits
                      </p>
                    </div>
                    <h4 className="mt-4 text-4xl font-bold leading-tight text-hive-blue sm:text-5xl">
                      A giving community with meaningful connection.
                    </h4>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {keeperBenefits.map((benefit) => (
                        <div key={benefit} className="rounded-xl bg-gray-50 p-4">
                          <p className="text-sm leading-7 text-gray-600">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-xl border border-hive-orange/20 bg-[#fff7ea] p-5 text-left">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-hive-orange">
                        Contact
                      </p>
                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        For questions about The Keepers Club, contact The
                        Hive&apos;s Philanthropy and Partnerships Officer at{" "}
                        <a className="site-link" href="mailto:chio@thehivecc.org">
                          chio@thehivecc.org
                        </a>
                        .
                      </p>
                    </div>
                  </article>
                </div>

                <div className="site-card p-8 sm:p-10">
                  <div className="grid gap-8 lg:min-h-[44rem] lg:grid-cols-[0.85fr_1.15fr] lg:p-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hive-blue">
                        Monthly Levels
                      </p>
                      <h4 className="mt-3 text-3xl font-bold text-hive-blue">
                        Choose the level of support that fits your giving.
                      </h4>
                      <p className="mt-4 text-base leading-8 text-gray-600">
                        Every tier helps fuel survivor-centered care, with
                        monthly giving that makes The Hive&apos;s response more
                        consistent and sustainable.
                      </p>
                      <div className="mt-6 rounded-xl border border-hive-blue/20 bg-hive-blue/5 p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-hive-blue">
                          Focused impact
                        </p>
                        <p className="mt-3 text-sm leading-7 text-gray-600">
                          Monthly gifts help sustain hotel stays, counseling
                          access, survivor-based outreach, and awareness and
                          prevention training throughout the year.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {keeperTiers.map((tier) => (
                        <div
                          key={tier.name}
                          className="rounded-xl p-5 shadow-sm"
                          style={{ backgroundColor: tier.accent }}
                        >
                          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                            {tier.amount}
                          </p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500/85">
                            {tier.yearly}
                          </p>
                          <p className="mt-2 text-xl font-semibold text-gray-900">
                            {tier.name}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-gray-600">
                            {tier.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <section className="site-card p-6 sm:p-8">
                  <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hive-orange">
                      Supported Through Your Giving
                    </p>
                    <h4 className="mt-3 text-3xl font-bold text-hive-blue sm:text-4xl">
                      Recurring support helps fuel this work all year long.
                    </h4>
                  </div>

                  <div className="mt-8 flex gap-4 overflow-x-auto pb-2 lg:overflow-visible">
                    {keeperImpactAreas.map((area) => (
                      <article
                        key={area.title}
                        className="min-w-[240px] flex-1 overflow-hidden rounded-xl bg-white shadow-[0_12px_36px_rgba(32,42,69,0.08)]"
                      >
                        <div className="relative aspect-[4/4.6] w-full">
                          <Image
                            src={area.src}
                            alt={area.alt}
                            fill
                            sizes="(max-width: 1024px) 240px, 25vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h5 className="text-lg font-semibold leading-tight text-gray-900 xl:text-xl">
                            {area.title}
                          </h5>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </section>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}
