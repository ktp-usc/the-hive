"use client";

import { useState } from "react";
import Image from "next/image";
import { Flower2, HeartHandshake, Sparkles, Star, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DonationTabId = "casita" | "keepers";
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
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn(
      "overflow-hidden rounded-4xl border border-white/60 bg-white/80 p-3 shadow-[0_18px_60px_rgba(27,34,67,0.12)] sm:p-4",
      className
    )}>
      <div className="flex min-h-76 w-full items-center justify-center rounded-3xl bg-[radial-gradient(circle_at_top,rgba(255,248,236,0.9),rgba(244,248,250,0.9))]">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={1500}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-auto max-h-128 w-full rounded-[1.25rem] object-contain"
        />
      </div>
    </div>
  );
}

export default function DonationsPage() {
  const [activeTab, setActiveTab] = useState<DonationTabId>("casita");

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#fff9ef_0%,#f7f1e6_34%,#edf5f6_100%)] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <section className="relative overflow-hidden rounded-[2.75rem] border border-white/70 px-6 py-10 shadow-[0_32px_120px_rgba(32,42,69,0.10)] backdrop-blur sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute inset-0 bg-[url('/donations/casitaofcare1.avif')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,251,243,0.96)_0%,rgba(255,251,243,0.9)_38%,rgba(255,251,243,0.78)_58%,rgba(255,255,255,0.52)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.08))]" />
          <div className="pointer-events-none absolute -right-12 top-12 h-44 w-44 rounded-full bg-[#1d979c]/18 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-52 w-52 rounded-full bg-[#ec7424]/14 blur-3xl" />

          <div className="relative z-10 max-w-2xl xl:max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8794a]">
                Impact the Hive
              </p>
              <h1 className="mt-4 font-(--font-heading) text-4xl leading-tight text-slate-950 sm:text-5xl lg:text-[4.3rem] lg:leading-[1.02]">
                Support survivors through spaces of care and sustaining generosity.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                This page centers the two giving stories that matter most right now:
                the Casita of Care and The Keepers Club. Each section keeps the
                message focused, easy to scan, and ready for images when you are.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-[#1d979c] px-6 py-6 text-sm font-semibold text-white shadow-[0_12px_34px_rgba(29,151,156,0.26)] hover:bg-[#187d81]">
                  <a
                    href="https://thehivecc.networkforgood.com/projects/204053-what-is-hope"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate Now
                  </a>
                </Button>
                <Button asChild variant="ghost" className="rounded-full border border-black/10 bg-white/70 px-6 py-6 text-sm font-semibold text-slate-700 hover:border-[#1d979c]/25 hover:bg-white hover:text-slate-950">
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
                <div className="rounded-[1.75rem] border border-black/6 bg-white/82 p-5">
                  <Flower2 className="h-5 w-5 text-[#1d979c]" />
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Casita of Care
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A boutique-style resource space designed around dignity,
                    privacy, and belonging.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-black/6 bg-white/82 p-5">
                  <HeartHandshake className="h-5 w-5 text-[#ec7424]" />
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Monthly Giving
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    The Keepers Club creates steady support that helps The Hive
                    respond month after month.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-black/6 bg-white/82 p-5">
                  <Users className="h-5 w-5 text-[#d8794a]" />
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Community Powered
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Every gift helps survivors feel seen, supported, and connected
                    to a stronger community.
                  </p>
                </div>
              </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/78 px-6 py-10 shadow-[0_30px_120px_rgba(32,42,69,0.10)] backdrop-blur sm:px-10 sm:py-14 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8794a]">
              Giving Sections
            </p>
            <h2 className="mt-4 font-(--font-heading) text-3xl leading-tight text-slate-950 sm:text-4xl">
              Explore the giving story that speaks to you.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              These tabs follow the same member-style interaction used on the About
              page, but focus on support opportunities instead of people.
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
                    "cursor-pointer rounded-full border px-5 py-6 text-sm font-semibold tracking-[0.04em] transition",
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
            {activeTab === "casita" ? (
              <section className="mx-auto max-w-6xl space-y-14">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <article className="px-2 sm:px-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d8794a]">
                      Casita of Care
                    </p>
                    <h3 className="mt-4 font-(--font-heading) text-4xl leading-tight text-slate-700 sm:text-5xl">
                      More Than a Pantry. A Place of Belonging.
                    </h3>
                    <div className="mt-6 space-y-6 text-lg leading-9 text-slate-600">
                      <p>
                        The Casita of Care reimagines what free resources can look
                        and feel like.{" "}
                        <span className="font-semibold text-[#1d979c]">
                          This isn&apos;t a thrift store or donation center,
                        </span>{" "}
                        it&apos;s a thoughtfully designed boutique where survivors
                        can shop with dignity for the items they need and want.
                      </p>
                      <p>
                        From culturally specific hair and beauty products to
                        household essentials and cleaning supplies, every detail is
                        chosen with care and intention.
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button asChild className="rounded-sm bg-[#1d979c] px-8 py-6 text-base font-medium text-white hover:bg-[#187d81]">
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
                    className="border-none bg-transparent p-0 shadow-none"
                  />
                </div>

                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <FeatureImage
                    src="/donations/casitaofcare2.avif"
                    alt="Casita of Care detail photo"
                    className="border-none bg-transparent p-0 shadow-none"
                  />

                  <article className="px-2 sm:px-4">
                    <h4 className="font-(--font-heading) text-4xl leading-tight text-slate-700 sm:text-5xl">
                      A Refuge for Survivors in the Midlands
                    </h4>
                    <div className="mt-6 space-y-6 text-lg leading-9 text-slate-600">
                      <p>
                        The Casita of Care serves those in the South Carolina
                        Midlands who are healing from sexual assault, intimate
                        partner violence, and stalking.
                      </p>
                      <p>
                        Survivors leave feeling a little more hopeful, a little
                        more grounded, and with one less thing on their worry list.
                        They walk away empowered, knowing their story is valued,
                        their healing matters, and they are part of a community
                        standing with them.
                      </p>
                    </div>
                  </article>
                </div>

                <div className="relative overflow-hidden rounded-4xl border border-black/8 shadow-[0_20px_70px_rgba(32,42,69,0.06)]">
                  <div className="absolute inset-0 bg-[url('/donations/casitaofcare4.png')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,251,242,0.9),rgba(255,255,255,0.9))]" />

                  <div className="relative z-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d8794a]">
                      Ways to Help
                    </p>
                    <h4 className="mt-3 font-(--font-heading) text-3xl text-slate-900">
                      Support the space with practical care.
                    </h4>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      Help stock the Casita, sustain the experience, and keep this
                      resource ready for each survivor who comes through the door.
                    </p>
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-3">
                        <Button asChild variant="ghost" className="rounded-sm border border-black/10 bg-white px-6 py-6 text-base text-slate-700 hover:bg-slate-50">
                          <a
                            href="https://pointapp.org/orgs/7916"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Volunteer
                          </a>
                        </Button>
                        <Button asChild className="rounded-sm bg-[#ec7424] px-6 py-6 text-base font-medium text-white hover:bg-[#d9651b]">
                          <a
                            href="https://www.amazon.com/hz/wishlist/ls/OIKGIA7FGP0W?ref_=wl_share"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Casita Wishlist
                          </a>
                        </Button>
                      </div>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                        Want to donate practical items directly? The Casita of
                        Care Amazon wishlist makes it easy to send needed
                        essentials straight to the space.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {casitaWaysToGive.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-3xl bg-white p-5 shadow-[0_10px_30px_rgba(32,42,69,0.06)]"
                      >
                        <Sparkles className="h-4 w-4 text-[#1d979c]" />
                        <p className="mt-3 text-base font-semibold text-slate-900">
                          {item.title}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                      ))}
                  </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[2.5rem] border border-[#f2dfc7] shadow-[0_20px_70px_rgba(32,42,69,0.06)]">
                  <div className="absolute inset-0 bg-[url('/donations/flowers.avif')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-white/4" />

                  <article className="relative z-10 mx-auto max-w-6xl bg-white/88 px-5 py-12 text-center backdrop-blur-[1px] sm:px-8 lg:px-16 lg:py-16">
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1d979c]">
                        Community Story
                      </p>
                      <h4 className="mx-auto mt-4 max-w-5xl font-(--font-heading) text-3xl leading-tight text-[#1d979c] sm:text-4xl">
                        A Community Rallies: How the Casita of Care Came to Be
                      </h4>
                      <p className="mx-auto mt-6 max-w-4xl text-xl leading-10 text-slate-500">
                        The story of the Casita of Care is one of persistence,
                        heart, and the power of community.
                      </p>

                      <div className="mx-auto mt-10 max-w-5xl space-y-8 text-lg leading-10 text-slate-800">
                        <p>
                          The Casita of Care started with a simple conviction:
                          survivors deserve dignity when accessing resources. The
                          Hive began keeping hygiene and household items in a
                          closet for those who needed them. In early 2025, a
                          generous donation drive brought in so many supplies that
                          the overflow broke the closet doors.
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
                    </article>
                </div>

                <section className="mx-auto max-w-5xl px-4 py-4 text-center">
                  <div className="space-y-12 rounded-[2.5rem] bg-white/82 px-6 py-10 shadow-[0_20px_70px_rgba(32,42,69,0.05)] sm:px-10 sm:py-14">
                    <div>
                      <h4 className="font-(--font-heading) text-4xl leading-tight text-[#1d979c] sm:text-5xl">
                        Dedicated in Honor of Brianna
                      </h4>
                      <div className="mx-auto mt-6 max-w-4xl space-y-6 text-lg leading-10 text-slate-800">
                        <p>
                          The Casita of Care is dedicated in honor of{" "}
                          <span className="font-semibold">Brianna</span> , a
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

                    <div>
                      <h4 className="font-(--font-heading) text-4xl leading-tight text-[#1d979c] sm:text-5xl">
                        Thank You to Our Community Partners
                      </h4>
                      <p className="mx-auto mt-6 max-w-4xl text-lg leading-10 text-slate-800">
                        The Casita of Care exists because over 25 local
                        businesses and individuals said yes. From interior design
                        and construction to marketing, flooring, HVAC, and
                        beyond, each partner contributed their time, talent, and
                        resources to make this vision a reality.
                      </p>
                    </div>
                  </div>
                </section>
              </section>
            ) : null}

            {activeTab === "keepers" ? (
              <section className="mx-auto max-w-6xl space-y-14">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <article className="px-2 sm:px-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1d979c]">
                      The Keepers Club
                    </p>
                    <h3 className="mt-4 font-(--font-heading) text-4xl leading-tight text-slate-700 sm:text-5xl">
                      Stewarding sustainability for survivors every month.
                    </h3>
                    <div className="mt-6 space-y-6 text-lg leading-9 text-slate-600">
                      <p>
                        The Keepers Club is The Hive&apos;s monthly giving
                        community. Recurring support helps create a steadier
                        budget for emergency relief, counseling, outreach, and
                        prevention work as demand continues to grow.
                      </p>
                      <p>
                        It&apos;s designed for people who want their generosity to
                        keep showing up month after month, helping survivors
                        access stable, responsive care when they need it most.
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button asChild className="rounded-sm bg-[#1d979c] px-8 py-6 text-base font-medium text-white hover:bg-[#187d81]">
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
                    className="border-none bg-transparent p-0 shadow-none"
                  />
                </div>

                <div className="mx-auto max-w-4xl">
                  <article className="px-2 text-center sm:px-4">
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-[#ec7424]" />
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d8794a]">
                        Member Benefits
                      </p>
                    </div>
                    <h4 className="mt-4 font-(--font-heading) text-4xl leading-tight text-slate-700 sm:text-5xl">
                      A giving community with meaningful connection.
                    </h4>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {keeperBenefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="rounded-3xl border border-black/6 bg-white/82 p-4 shadow-[0_10px_30px_rgba(32,42,69,0.06)]"
                        >
                          <p className="text-sm leading-7 text-slate-600">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-3xl border border-black/6 bg-[#fff7ea] p-5 text-left">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d8794a]">
                        Contact
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        For questions about The Keepers Club, contact The Hive&apos;s
                        Philanthropy and Partnerships Officer at{" "}
                        <a
                          className="font-semibold text-[#1d979c] underline decoration-[#1d979c]/30 underline-offset-4"
                          href="mailto:chio@thehivecc.org"
                        >
                          chio@thehivecc.org
                        </a>
                        .
                      </p>
                    </div>
                  </article>
                </div>

                <div className="relative overflow-hidden rounded-4xl border border-black/8 shadow-[0_20px_70px_rgba(32,42,69,0.06)]">
                  <div className="absolute inset-0 bg-[url('/donations/honeycomb.png?v=2')] bg-size-[340px_auto] bg-repeat opacity-85" />
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,248,236,0.48),rgba(255,255,255,0.54))]" />

                  <div className="relative z-10 grid gap-8 p-8 sm:p-10 lg:min-h-[44rem] lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1d979c]">
                      Monthly Levels
                    </p>
                    <h4 className="mt-3 font-(--font-heading) text-3xl text-slate-900">
                      Choose the level of support that fits your giving.
                    </h4>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      Every tier helps fuel survivor-centered care, with monthly
                      giving that makes The Hive&apos;s response more consistent
                      and sustainable.
                    </p>
                    <div className="mt-6 rounded-[1.75rem] border border-dashed border-[#1d979c]/25 bg-[#1d979c]/6 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1d979c]">
                        Focused impact
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
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
                        className="rounded-3xl p-5 shadow-[0_10px_30px_rgba(32,42,69,0.06)]"
                        style={{ backgroundColor: tier.accent }}
                      >
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                          {tier.amount}
                        </p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500/85">
                          {tier.yearly}
                        </p>
                        <p className="mt-2 text-xl font-semibold text-slate-950">
                          {tier.name}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {tier.description}
                        </p>
                      </div>
                      ))}
                  </div>
                  </div>
                </div>

                <section className="rounded-4xl border border-black/8 bg-[linear-gradient(145deg,rgba(255,250,242,0.94),rgba(255,255,255,0.9))] p-6 shadow-[0_20px_70px_rgba(32,42,69,0.06)] sm:p-8">
                  <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d8794a]">
                      Supported Through Your Giving
                    </p>
                    <h4 className="mt-3 font-(--font-heading) text-3xl text-slate-900 sm:text-4xl">
                      Recurring support helps fuel this work all year long.
                    </h4>
                  </div>

                  <div className="mt-8 flex gap-4 overflow-x-auto pb-2 lg:overflow-visible">
                    {keeperImpactAreas.map((area) => (
                      <article
                        key={area.title}
                        className="min-w-[240px] flex-1 overflow-hidden rounded-3xl bg-white shadow-[0_12px_36px_rgba(32,42,69,0.08)]"
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
                          <h5 className="text-lg font-semibold leading-tight text-slate-950 xl:text-xl">
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

        <section className="mt-20 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Partners
          </h2>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Philanthropic</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <Image src="/partner-images/JLC.png" alt="Junior League of Columbia" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Allstate.webp" alt="Allstate Foundation" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/BCBS.png" alt="Bluecross Blueshield of South Carolina" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/CCCF.png" alt="central Carolina Community Foundation" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/CUL.png" alt="Columbia Urban League Inc." width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/CypressFund.png" alt="Cypress Fund" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/EF.jfif" alt="Emergent Fund" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/FF.png" alt="Fact Forward" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/GGC.png" alt="Grantmakers for Girls of Color" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/images.png" alt="WREN" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/JBC.png" alt="Just Beginnings Collaborative" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Kolibri.png" alt="Kolibri" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/LFF.png" alt="Lipscomb Family Foundation" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/LL.png" alt="Lululemon" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Molina.png" alt="Molina" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/MsFoundation.png" alt="Ms. Foundation" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/NNEDV.webp" alt="National Network To End Domestic Violence" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/PMC.png" alt="Pearl Milling Company" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/SBG.webp" alt="Southern Blacks Girls and Women's Consortium" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/SCF.png" alt="Sisters of Charity Foundation of South Carolina" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/solidaire.png" alt="Solidaire" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Synovus.png" alt="Synovus" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/unum.png" alt="Unum" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Walmart.png" alt="Walmart" width={120} height={60} className="mx-auto object-contain" />
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Non-Profit Organizations</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <Image src="/partner-images/CT.webp" alt="Children's Trust of South Carolina" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Prisma.webp" alt="Prisma" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/DSS.jpg" alt="South Carolina Department of Social Services" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/DHEC.jpg" alt="DHEC" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/SS.webp" alt="Sowing Seeds Into The Midlands" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/STS.png" alt="Sexual trauma Services" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/SCCADVASA.png" alt="South Carolina Coalition Against Domestic Violence and Sexual Assault" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/LFL.png" alt="Lighthouse for Life" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/SASS.png" alt="Surviving Assault Standing Strong" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/PHAC.png" alt="Peace at Home Advocacy Center" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/HFH.png" alt="Habitat for Humanity" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Sistercare.png" alt="Sistercare" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/SCVAN.webp" alt="South Carolina Victim Assistance Network" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/PP.png" alt="Palmetto Place" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/E24.webp" alt="eleven24" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Epworth.png" alt="Epworth Children's Home" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/YMCA.png" alt="The YMCA" width={120} height={60} className="mx-auto object-contain" />
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Law Enforcement</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <Image src="/partner-images/Richland.jpg" alt="Richland County Sheriff Department" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/LaborOfficer.jpg" alt="Richland County Inmate Labor Officer" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Kershaw.webp" alt="Kershaw County Sheriff Department" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Benedict.jfif" alt="Benedict College Police" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Rock Hill.webp" alt="Rock Hill Police" width={120} height={60} className="mx-auto object-contain" />
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Education</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <Image src="/partner-images/BC.png" alt="Benedict College" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/CC.png" alt="Columbia College" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/USC.jpg" alt="University of South Carolina" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/LD4.png" alt="Lexington District Four" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/richland2.jfif" alt="Richland School District Two" width={120} height={60} className="mx-auto object-contain" />
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Faith Based</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <Image src="/partner-images/Church1.jfif" alt="Mt. Olive AME Church" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Church2.png" alt="International Praise" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Church3.png" alt="Journey Church" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Church4.png" alt="Trinity Baptist Church" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Church5.jpg" alt="Ephesus" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Church6.png" alt="Sandhills Community Church" width={120} height={60} className="mx-auto object-contain" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Merchant Based</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <Image src="/partner-images/Merchant1.jpg" alt="Painting With a Twist" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Merchant2.svg" alt="The Fresh Market" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Merchant3.jpg" alt="BJ's" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Merchant4.png" alt="Cinnamon Roll Deli" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Merchant5.webp" alt="PDQ" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Merchant6.jpg" alt="Kiki's Chicken and Waffles" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Merchant7.jpg" alt="Hungry Howie's" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Merchant8.jpg" alt="Urban Cookhouse" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Merchant9.jpg" alt="Panera Bread" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Merchant10.webp" alt="Blum" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Merchant11.jpg" alt="Kendra Scott" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Merchant12.jpg" alt="Hampton St Vineyard" width={120} height={60} className="mx-auto object-contain" />
              <Image src="/partner-images/Merchant13.jpg" alt="Whole Foods" width={120} height={60} className="mx-auto object-contain" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
