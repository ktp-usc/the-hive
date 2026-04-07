import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
	title: "Training & Education | The Hive",
};

export default function AwarenessPage() {
	return (
		<main className="min-h-screen bg-white text-gray-800">

	
			<section className="flex flex-col items-center justify-center bg-hive-blue text-white py-24 px-6 text-center">
				<h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
					Training &amp; Education at The Hive
				</h1>
				<p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
					Healing centered learning rooted in culture, care, and connection.
				</p>
			</section>

			{/* HIVE pillars */}
			<section className="py-16 px-6 max-w-4xl mx-auto text-center">
				<h2 className="text-2xl md:text-3xl font-bold text-hive-blue mb-6">
					Our Guiding Principles: HIVE Values
				</h2>
				<p className="text-gray-600 text-lg leading-relaxed">
					At The Hive, we approach training through our core values:{" "}
					<span className="font-semibold text-hive-blue">Healing</span>,{" "}
					<span className="font-semibold text-hive-blue">Interconnection</span>,{" "}
					<span className="font-semibold text-hive-blue">Voice</span>, and{" "}
					<span className="font-semibold text-hive-blue">Empowerment</span>. These
					pillars reflect our commitment to nurturing trauma-informed, culturally
					grounded learning spaces—where people can heal, connect, be heard, and
					grow together.
				</p>
			</section>

			<div className="border-t border-gray-200 max-w-5xl mx-auto" />

			{/* three Columns */}
			<section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

				{/* column 1 prevention */}
				<div>
					<h2 className="text-2xl font-bold text-hive-blue mb-2">Prevention</h2>
					<p className="text-sm font-semibold text-hive-orange uppercase tracking-wide mb-4">
						Empowering young people to prevent harm and promote care
					</p>
					<p className="text-gray-600 leading-relaxed mb-6">
						From preteens to college students, our prevention education builds early
						awareness and healthy relationship skills. Ideal for middle &amp; high
						school classrooms, youth groups, advocates in training programs, camp
						counselors, residence assistants, and first-year experience courses, the
						BuzzPak and Interconnected: Healthy Relationships offer interactive,
						age-appropriate insights that engage students meaningfully.
					</p>

					<h3 className="text-lg font-bold text-hive-blue mb-3">Signature Programs</h3>

					<div className="flex flex-col gap-5">
						<div className="bg-gray-50 rounded-xl p-5">
							<p className="font-semibold text-gray-800 mb-1">BuzzPak multiseries</p>
							<p className="text-gray-600 text-sm leading-relaxed">
								Explore the foundations of healthy relationships and violence
								prevention. Engage real-world scenarios that address boundaries,
								consent, communication, and respect. Build skills to recognize harm,
								support peers, and create safer school and campus communities.
								Designed to spark dialogue, foster empathy, and equip young people to
								lead with awareness and accountability.
							</p>
							<ul className="mt-3 ml-4 list-disc text-sm text-gray-600 space-y-1">
								<li>BuzzPak 2.0</li>
								<li>Technical Assistance</li>
								<li>
									Course: Prevention &amp; Awareness — Start at 101, range to 300+
									level (technical assistance)
								</li>
								<li>TA offerings</li>
								<li>Implement culturally specific training into your program</li>
								<li>Train the trainer facilitator model</li>
							</ul>
						</div>

						<div className="bg-gray-50 rounded-xl p-5">
							<p className="font-semibold text-gray-800 mb-1">
								Bee Real: Healthy Relationships &amp; Boundaries
							</p>
							<p className="text-xs text-hive-orange font-medium mb-2">Available in 1x session</p>
							<p className="text-gray-600 text-sm leading-relaxed">
								Examine the building blocks of safe and supportive relationships.
								Learn to navigate boundaries, consent, and communication while
								recognizing the signs of unhealthy dynamics. Includes strategies for
								cultivating empathy, fostering mutual respect, and practicing
								accountability in everyday interactions. Designed to empower young
								people to make informed choices and nurture connections rooted in
								care.
							</p>
						</div>
					</div>
				</div>

				{/* column 2 signature training series */}
				<div>
					<h2 className="text-2xl font-bold text-hive-blue mb-2">
						Signature Training Series
					</h2>
					<p className="text-sm font-semibold text-hive-orange uppercase tracking-wide mb-4">
						Education centered in equity, culture, and care
					</p>
					<p className="text-gray-600 leading-relaxed mb-2">
						These trainings are designed for Parents/Guardians/Caregivers, Faith
						Organizations, Community Groups, Law Enforcement, Healthcare
						Professionals, Advocates, K–12 School Professionals,
						Colleges/Universities and Educators, and Social Service Organizations.
						Invite us to your conference, professional development, retreat,
						classroom or community meeting!
					</p>
					<p className="text-sm text-gray-500 italic mb-6">
						Some training can be tailored for youth groups (11+)
					</p>

					<div className="flex flex-col gap-4">
						{[
							{
								title: "Healing is Work: Centering the Brain, Body & Culture in Trauma Care",
								body: "Explore how trauma lives in the nervous system and how healing practices can be culturally relevant, affordable, and community-driven. Learn to identify trauma responses and co-regulate in support spaces.",
							},
							{
								title: "Interconnected: Reimagining Relationships, Boundaries & Belonging",
								body: "Go beyond the basics of \"healthy relationships\" to explore love, care, and accountability. Explore relationships beyond romantic partnerships—including family, community, and institutions. Includes cultural insights into consent, boundary setting, emotional safety and trust-building.",
								tailored: true,
							},
							{
								title: "Language of Liberation: Understanding IPV, SA & Stalking in Context",
								body: "Learn the core definitions, root causes, and social dynamics of intimate partner violence, sexual assault, and stalking—while naming how systems and identities intersect in survivor experiences. Build skills in supporting disclosure and safety planning.",
							},
							{
								title: "Claiming Voice: Storytelling, Disclosure & Holding Space Without Harm",
								body: "Gain skills in affirming survivor voice while reducing harm when disclosures are unexpected or occur in everyday interactions. Great for service providers, educators, or anyone who might be a \"first listener.\"",
								badge: "Free for Bee Box Partners!",
								tailored: true,
							},
							{
								title: "Cultural Resilience in Practice: A BIPOC Approach to Trauma-Informed Care",
								body: "Move past checkbox trauma-informed care. This session equips you with tools grounded in cultural practices, and uplift community-defined healing, spiritual safety, and non-clinical responses.",
							},
							{
								title: "Cultural Humility: A Liberatory Practice for Safer Communities",
								body: "Unpack the lifelong practice of cultural humility. Learn to engage identity, power, and discomfort while building more honest, accountable systems and relationships. Includes strategies for naming harm, making repairs, and navigating discomfort with intentional dialogue.",
								tailored: true,
							},
							{
								title: "From Bystander to Community Keeper: Responding to Harm with Care & Courage",
								body: "Build practical skills to notice, name, and navigate harm in your everyday environment. From schools to workplaces to public spaces, this training is about courage and community care in action. Covers grounded intervention, survivor-led support, and how to avoid unintentional retraumatization.",
								tailored: true,
							},
						].map(({ title, body, badge, tailored }) => (
							<div key={title} className="bg-gray-50 rounded-xl p-4">
								<p className="font-semibold text-gray-800 text-sm mb-1">{title}</p>
								{badge && (
									<span className="inline-block text-xs font-bold text-hive-orange bg-hive-orange/10 rounded-full px-3 py-0.5 mb-2">
										{badge}
									</span>
								)}
								<p className="text-gray-600 text-sm leading-relaxed">{body}</p>
								{tailored && (
									<p className="text-xs text-gray-400 italic mt-2">
										This training can be tailored for youth groups (11+)
									</p>
								)}
							</div>
						))}
					</div>
				</div>

				{/* column 3 technical assistance */}
				<div>
					<h2 className="text-2xl font-bold text-hive-blue mb-2">
						Technical Assistance
					</h2>
					<p className="text-sm font-semibold text-hive-orange uppercase tracking-wide mb-4">
						&ldquo;Let&apos;s build together&rdquo;
					</p>
					<p className="text-gray-600 leading-relaxed mb-6">
						At The Hive, we know that every organization, school, or community
						group has unique needs when it comes to creating safer, more supportive
						spaces. That&apos;s why we offer customized technical assistance—partnering
						with you to strengthen capacity, develop survivor-centered responses,
						and build systems of care that last. Whether you&apos;re just beginning to
						explore anti-violence work or looking to deepen your team&apos;s skills, our
						experts are here to listen, co-create, and guide. Together, we&apos;ll
						design a plan that reflects your culture, values, and goals.
					</p>

					<h3 className="text-lg font-bold text-hive-blue mb-3">Offerings</h3>
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
							<div key={title} className="flex gap-3 items-start">
								<div className="mt-1 w-3 h-3 rounded-full bg-hive-yellow shrink-0" />
								<div>
									<p className="font-semibold text-gray-800 text-sm">{title}</p>
									<p className="text-gray-500 text-sm">{body}</p>
								</div>
							</div>
						))}
					</div>
				</div>

			</section>

			<div className="border-t border-gray-200 max-w-5xl mx-auto" />

			{/* CTA */}
			<section className="py-20 px-6 text-center bg-gray-50">
				<h2 className="text-3xl font-bold text-hive-blue mb-3">
					Ready to Learn with Us?
				</h2>
				<p className="text-gray-500 max-w-xl mx-auto mb-10 text-lg">
					Whether you&apos;re booking a training, exploring a partnership, or just
					getting started—we&apos;re here for it.
				</p>
				<div className="flex flex-wrap justify-center gap-4">
					<Button asChild className="h-auto rounded-full bg-hive-blue text-white font-bold hover:bg-hive-blue/90 px-8 py-4 text-base transition-colors">
						<Link href="/contact">Request a Training</Link>
					</Button>
					<Button asChild className="h-auto rounded-full bg-hive-orange text-white font-bold hover:bg-hive-orange/90 px-8 py-4 text-base transition-colors">
						<Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
							Book a Discovery Call
						</Link>
					</Button>
					<Button asChild variant="outline" className="h-auto rounded-full border-hive-blue text-hive-blue font-bold hover:bg-hive-blue/5 px-8 py-4 text-base transition-colors">
						<Link href="/training-catalog.pdf" target="_blank" rel="noopener noreferrer">
							Download Training Catalog
						</Link>
					</Button>
					<Button asChild className="h-auto rounded-full bg-hive-yellow text-gray-900 font-bold hover:bg-hive-yellow/90 px-8 py-4 text-base transition-colors">
						<Link href="mailto:kinnethia@thehivecc.org">Contact Our Team</Link>
					</Button>
				</div>
			</section>

		</main>
	);
}
