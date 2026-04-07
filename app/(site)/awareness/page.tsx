import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Training & Education | The Hive",
};

export default function AwarenessPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="flex flex-col items-center justify-center bg-hive-blue px-6 py-24 text-center text-white">
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Training &amp; Education at The Hive
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
          Healing centered learning rooted in culture, care, and connection.
        </p>
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

      <section className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-6 py-20 md:grid-cols-3">
        <div>
          <h2 className="mb-2 text-2xl font-bold text-hive-blue">
            Prevention
          </h2>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-hive-orange">
            Empowering young people to prevent harm and promote care
          </p>
          <p className="mb-6 leading-relaxed text-gray-600">
            From preteens to college students, our prevention education builds
            early awareness and healthy relationship skills. Ideal for middle
            &amp; high school classrooms, youth groups, advocates in training
            programs, camp counselors, residence assistants, and first-year
            experience courses, the BuzzPak and Interconnected: Healthy
            Relationships offer interactive, age-appropriate insights that
            engage students meaningfully.
          </p>

          <h3 className="mb-3 text-lg font-bold text-hive-blue">
            Signature Programs
          </h3>

          <div className="flex flex-col gap-5">
            <div className="rounded-xl bg-gray-50 p-5">
              <p className="mb-1 font-semibold text-gray-800">
                BuzzPak multiseries
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                Explore the foundations of healthy relationships and violence
                prevention. Engage real-world scenarios that address boundaries,
                consent, communication, and respect. Build skills to recognize
                harm, support peers, and create safer school and campus
                communities. Designed to spark dialogue, foster empathy, and
                equip young people to lead with awareness and accountability.
              </p>
              <ul className="mt-3 ml-4 list-disc space-y-1 text-sm text-gray-600">
                <li>BuzzPak 2.0</li>
                <li>Technical Assistance</li>
                <li>
                  Course: Prevention &amp; Awareness — Start at 101, range to
                  300+ level (technical assistance)
                </li>
                <li>TA offerings</li>
                <li>Implement culturally specific training into your program</li>
                <li>Train the trainer facilitator model</li>
              </ul>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="mb-1 font-semibold text-gray-800">
                Bee Real: Healthy Relationships &amp; Boundaries
              </p>
              <p className="mb-2 text-xs font-medium text-hive-orange">
                Available in 1x session
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
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

        <div>
          <h2 className="mb-2 text-2xl font-bold text-hive-blue">
            Signature Training Series
          </h2>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-hive-orange">
            Education centered in equity, culture, and care
          </p>
          <p className="mb-2 leading-relaxed text-gray-600">
            These trainings are designed for Parents/Guardians/Caregivers,
            Faith Organizations, Community Groups, Law Enforcement, Healthcare
            Professionals, Advocates, K–12 School Professionals,
            Colleges/Universities and Educators, and Social Service
            Organizations. Invite us to your conference, professional
            development, retreat, classroom or community meeting!
          </p>
          <p className="mb-6 text-sm italic text-gray-500">
            Some training can be tailored for youth groups (11+)
          </p>

          <div className="flex flex-col gap-4">
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
              <div key={title} className="rounded-xl bg-gray-50 p-4">
                <p className="mb-1 text-sm font-semibold text-gray-800">
                  {title}
                </p>
                {badge && (
                  <span className="mb-2 inline-block rounded-full bg-hive-orange/10 px-3 py-0.5 text-xs font-bold text-hive-orange">
                    {badge}
                  </span>
                )}
                <p className="text-sm leading-relaxed text-gray-600">{body}</p>
                {tailored && (
                  <p className="mt-2 text-xs italic text-gray-400">
                    This training can be tailored for youth groups (11+)
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-2xl font-bold text-hive-blue">
            Technical Assistance
          </h2>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-hive-orange">
            &ldquo;Let&apos;s build together&rdquo;
          </p>
          <p className="mb-6 leading-relaxed text-gray-600">
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

          <h3 className="mb-3 text-lg font-bold text-hive-blue">Offerings</h3>
          <div className="flex flex-col gap-4">
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
              <div key={title} className="flex items-start gap-3">
                <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-hive-yellow" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">{title}</p>
                  <p className="text-sm text-gray-500">{body}</p>
                </div>
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
            className="h-auto rounded-full bg-hive-blue px-8 py-4 text-base font-bold text-white transition-colors hover:bg-hive-blue/90"
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
            className="h-auto rounded-full border-hive-blue px-8 py-4 text-base font-bold text-hive-blue transition-colors hover:bg-hive-blue/5"
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
            className="h-auto rounded-full bg-hive-yellow px-8 py-4 text-base font-bold text-gray-900 transition-colors hover:bg-hive-yellow/90"
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
