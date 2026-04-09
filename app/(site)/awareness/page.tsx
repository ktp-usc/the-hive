import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Training & Education | The Hive",
};

export default function AwarenessPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
        <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-hive-blue px-6 py-10 mt-16 text-center text-white sm:px-10 sm:py-12 lg:py-14">
            <div className="mx-auto max-w-7xl">
                <p className="site-eyebrow text-white/90">Prevention &amp; Awareness</p>
                <h1 className="site-title mt-4">Training &amp; Education at The Hive</h1>
                <p className="mx-auto mt-4 max-w-3xl text-lg leading-7 mt-7 text-white/85 sm:text-xl">
                    Healing-centered learning rooted in culture, care, and connection.
                </p>
            </div>
        </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="mb-6 text-2xl font-bold text-hive-blue md:text-3xl">
          Our Guiding Principles: HIVE Values
        </h2>
        <p className="text-lg leading-relaxed text-gray-600">
          At The Hive, we approach training through our core values:{" "}
          <span className="font-semibold text-hive-blue">Healing</span>,{" "}
          <span className="font-semibold text-hive-blue">Interconnection</span>
          , <span className="font-semibold text-hive-blue">Voice</span>, and{" "}
          <span className="font-semibold text-hive-blue">Empowerment</span>.
          These pillars reflect our commitment to nurturing trauma-informed,
          culturally grounded learning spaces—where people can heal, connect, be
          heard, and grow together.
        </p>
      </section>

      <div className="mx-auto max-w-5xl border-t border-gray-200" />

        <section className="mx-auto max-w-6xl px-6 py-18 space-y-20">

            {/* PREVENTION */}
            <div>
                <div className="mx-auto max-w-4xl pb-4 text-center">
                    <h2 className="text-3xl font-bold text-hive-blue">
                        Prevention
                    </h2>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-hive-orange">
                        Empowering young people to prevent harm and promote care
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        From preteens to college students, our prevention education builds
                        early awareness and healthy relationship skills. Ideal for middle
                        &amp; high school classrooms, youth groups, advocates in training
                        programs, camp counselors, residence assistants, and first-year
                        experience courses, the BuzzPak and Bee Real: Healthy
                        Relationships &amp; Boundaries offer interactive, age-appropriate insights that
                        engage students meaningfully.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <p className="font-semibold text-lg text-center text-hive-blue">
                            BuzzPak multiseries
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-center text-gray-600">
                            Explore the foundations of healthy relationships and violence
                            prevention. Engage real-world scenarios that address boundaries,
                            consent, communication, and respect. Build skills to recognize
                            harm, support peers, and create safer school and campus
                            communities. Designed to spark dialogue, foster empathy, and
                            equip young people to lead with awareness and accountability.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <p className="font-semibold text-lg text-center text-hive-blue">
                            Prevention &amp; Awareness Course
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-center text-gray-600">
                            Our prevention and awareness courses are designed to meet organizations at every stage,
                            from foundational 101-level learning to advanced 300+ trainings with opportunities for
                            technical assistance. We provide tailored support to help integrate culturally specific
                            approaches into your programs, and through our train-the-trainer model, we equip
                            facilitators to carry this work forward in their own communities.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <p className="font-semibold text-lg text-center text-hive-blue">
                            Bee Real: Healthy Relationships &amp; Boundaries
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-center text-gray-600">
                            Examine the building blocks of safe and supportive
                            relationships. Learn to navigate boundaries, consent, and
                            communication while recognizing the signs of unhealthy dynamics.
                            Includes strategies for cultivating empathy, fostering mutual
                            respect, and practicing accountability in everyday interactions.
                            Designed to empower young people to make informed choices and
                            nurture connections rooted in care.
                        </p>
                    </div>

                </div>
            </div>

            {/* SIGNATURE TRAININGS */}
            <div>
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-hive-blue">
                        Signature Training Series
                    </h2>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-hive-orange">
                        Education centered in equity, culture, and care
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        These trainings are designed for Parents/Guardians/Caregivers,
                        Faith Organizations, Community Groups, Law Enforcement, Healthcare
                        Professionals, Advocates, K–12 School Professionals,
                        Colleges/Universities and Educators, and Social Service
                        Organizations. Invite us to your conference, professional
                        development, retreat, classroom or community meeting!
                    </p>
                    <p className="mt-8 text-lg italic text-gray-500">
                        Some training can be tailored for youth groups (11+)
                    </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {[
                        {
                            title:
                                "Healing is Work: Centering the Brain, Body & Culture in Trauma Care",
                            body: "Explore how trauma lives in the nervous system and how healing practices can be culturally relevant, affordable, and community-driven. Learn to identify trauma responses and co-regulate in support spaces.",
                        },
                        {
                            title:
                                "Interconnected: Reimagining Relationships, Boundaries & Belonging",
                            body: 'Go beyond the basics of "healthy relationships" to explore love, care, and accountability. Explore relationships beyond romantic partnerships—including family, community, and institutions. Includes cultural insights into consent, boundary setting, emotional safety and trust-building.',
                            tailored: true,
                        },
                        {
                            title:
                                "Language of Liberation: Understanding IPV, SA & Stalking in Context",
                            body: "Learn the core definitions, root causes, and social dynamics of intimate partner violence, sexual assault, and stalking—while naming how systems and identities intersect in survivor experiences. Build skills in supporting disclosure and safety planning.",
                        },
                        {
                            title:
                                "Claiming Voice: Storytelling, Disclosure & Holding Space Without Harm",
                            body: 'Gain skills in affirming survivor voice while reducing harm when disclosures are unexpected or occur in everyday interactions. Great for service providers, educators, or anyone who might be a "first listener."',
                            badge: "Free for Bee Box Partners!",
                            tailored: true,
                        },
                        {
                            title:
                                "Cultural Resilience in Practice: A BIPOC Approach to Trauma-Informed Care",
                            body: "Move past checkbox trauma-informed care. This session equips you with tools grounded in cultural practices, and uplift community-defined healing, spiritual safety, and non-clinical responses.",
                        },
                        {
                            title:
                                "Cultural Humility: A Liberatory Practice for Safer Communities",
                            body: "Unpack the lifelong practice of cultural humility. Learn to engage identity, power, and discomfort while building more honest, accountable systems and relationships. Includes strategies for naming harm, making repairs, and navigating discomfort with intentional dialogue.",
                            tailored: true,
                        },
                        {
                            title:
                                "From Bystander to Community Keeper: Responding to Harm with Care & Courage",
                            body: "Build practical skills to notice, name, and navigate harm in your everyday environment. From schools to workplaces to public spaces, this training is about courage and community care in action. Covers grounded intervention, survivor-led support, and how to avoid unintentional retraumatization.",
                            tailored: true,
                        },
                    ].map(({ title, body, badge, tailored }) => (
                        <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                            <p className="font-semibold text-lg text-center text-hive-blue">{title}</p>
                            {badge && (
                                <div className={"mt-2 text-center"}>
                                    <span className="inline-block rounded-full bg-hive-orange/10 px-3 py-1 text-sm font-bold text-hive-orange">
                                        {badge}
                                    </span>
                                </div>
                            )}
                            <p className="mt-3 text-sm text-center leading-relaxed text-gray-600">{body}</p>
                            {tailored && (
                                <p className="mt-2 text-sm text-center italic text-gray-500">
                                    This training can be tailored for youth groups (11+)
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* TECHNICAL ASSISTANCE */}
            <div>
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-hive-blue">
                        Technical Assistance
                    </h2>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-hive-orange">
                        Let&apos;s build together
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        At The Hive, we know that every organization, school, or community
                        group has unique needs when it comes to creating safer, more
                        supportive spaces. That&apos;s why we offer customized technical
                        assistance—partnering with you to strengthen capacity, develop
                        survivor-centered responses, and build systems of care that last.
                        Whether you&apos;re just beginning to explore anti-violence work or
                        looking to deepen your team&apos;s skills, our experts are here to
                        listen, co-create, and guide. Together, we&apos;ll design a plan
                        that reflects your culture, values, and goals.
                    </p>
                </div>

                <div className="mt-10 text-center grid gap-6 md:grid-cols-2">
                    {[
                        {
                            title: "Custom Training Design",
                            body: "Tailored workshops and learning journeys for your team.",
                        },
                        {
                            title: "Capacity Building Plans",
                            body: "Strengthening internal systems, policies, and practices.",
                        },
                        {
                            title: "Collaborative Problem-Solving",
                            body: "Partnering to navigate challenges and identify solutions.",
                        },
                        {
                            title: "Ongoing Support",
                            body: "Continued consultation to ensure your team can sustain the work.",
                        },
                    ].map(({ title, body }) => (
                        <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                            <p className="font-semibold text-lg text-hive-blue">{title}</p>
                            <p className="mt-2 text-md text-gray-600">{body}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>

      <div className="mx-auto max-w-5xl border-t border-gray-200" />

      <section className="bg-gray-50 px-6 py-20 text-center">
        <h2 className="mb-3 text-3xl font-bold text-hive-blue">
          Ready to Learn with Us?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-gray-500">
          Whether you&apos;re booking a training, exploring a partnership, or
          just getting started—we&apos;re here for it.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white transition-colors hover:bg-hive-orange/90"
          >
            <Link href="/contact">Request a Training</Link>
          </Button>
          <Button
            asChild
            className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white transition-colors hover:bg-hive-orange/90"
          >
            <Link
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Discovery Call
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-auto rounded-full border-hive-orange px-8 py-4 text-base font-bold text-hive-orange transition-colors hover:bg-hive-orange/5"
          >
            <Link
              href="/training-catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Training Catalog
            </Link>
          </Button>
          <Button
            asChild
            className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white transition-colors hover:bg-hive-orange/90"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kinnethia@thehivecc.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Our Team
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
