
import Image from "next/image";
import Footer from "@/components/footer";
import Script from "next/script";
import InstagramEmbed from "@/components/InstagramEmbed/page";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	{
		/* Replace links with shadcn button later */
	}
	return (
		<main className="min-h-screen bg-white text-gray-800">
			{/* Hero */}
			<section
				className="flex flex-col items-center justify-center bg-hive-blue text-white py-24 px-6 text-center min-h-[80vh]">
				<h1 className="text-4xl md:text-6xl font-medium leading-tight max-w-3xl mx-auto">
					Believing in Yourself is the
					<span className="block font-bold text-7xl">
						First Step to Healing
					</span>
				</h1>
				<Button asChild size="lg" className="mt-10 h-auto rounded-full bg-hive-yellow text-gray-900 font-bold hover:bg-hive-yellow/90 px-16 py-8 text-2xl tracking-widest transition-colors">
					<Link href="/donations">Donate Today</Link>
				</Button>
			</section>

			{/* Mission */}
			<section
				className="py-20 px-6 max-w-5xl mx-auto gap-8 text-center flex flex-col md:flex-row items-center justify-center">
				<div>
					<Image
						src="/images/mission.jpg"
						alt="Mission"
						width={320}
						height={320}
						className="rounded-lg border-2 border-gray-200"
					/>
				</div>
				<div>
					<h2 className="text-3xl font-bold mb-6 text-left text-hive-blue">
						Our Mission
					</h2>
					<p className="text-lg text-left leading-relaxed text-gray-600">
						The Hive Community Circle is a survivor-led,
						survivor-driven support organization helping women and
						girls in South Carolina overcome the trauma of sexual
						assault, intimate partner violence, and stalking. We are
						on a mission to provide unwavering support and
						compassion to the most impacted, yet most underserved
						survivors in SC.
					</p>
				</div>
			</section>

			{/* Divider */}
			<div className="border-t border-gray-200 max-w-4xl mx-auto"/>

			{/* What We Do */}
			<section className="py-20 px-6 max-w-5xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-14 text-hive-blue">
					What We Do
				</h2>
				<div className="grid md:grid-cols-3 gap-10 text-center">
					<div className="flex flex-col items-center gap-4">
						<div className="w-14 h-14 rounded-full bg-hive-blue/10 flex items-center justify-center"></div>
						<h3 className="text-xl font-semibold text-hive-blue">
							Advocacy &amp; Support
						</h3>
						<p className="text-gray-500 leading-relaxed">
							We have assisted over 470 survivors and their
							families through direct advocacy and wraparound
							support services.
						</p>
					</div>

					<div className="flex flex-col items-center gap-4">
						<div
							className="w-14 h-14 rounded-full bg-hive-orange/10 flex items-center justify-center"></div>
						<h3 className="text-xl font-semibold text-hive-orange">
							Prevention &amp; Outreach
						</h3>
						<p className="text-gray-500 leading-relaxed">
							Our prevention programs have reached over 367
							community members, creating safer spaces and raising
							awareness across South Carolina.
						</p>
					</div>

					<div className="flex flex-col items-center gap-4">
						<div
							className="w-14 h-14 rounded-full bg-hive-yellow/20 flex items-center justify-center"></div>
						<h3
							className="text-xl font-semibold"
							style={{color: '#c9a000'}}
						>
							Restoration
						</h3>
						<p className="text-gray-500 leading-relaxed">
							We walk alongside survivors as they rebuild their
							lives, celebrating every milestone and success story
							along the way.
						</p>
					</div>
				</div>
			</section>

			{/* Divider */}
			<div className="border-t border-gray-200 max-w-4xl mx-auto"/>

			{/* Instagram Feed */}
			<div className="mx-auto w-full max-w-lg mt-5">
				<div className="flex flex-col items-center gap-4 mb-5">
					<a
						href="https://www.instagram.com/thehivecc/"
						className="inline-block bg-hive-orange text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-orange-500 transition-colors"
					>
						Follow Us on Instagram!
					</a>
				</div>
				<InstagramEmbed/>
				<Script async src="https://www.instagram.com/embed.js"></Script>
			</div>



			{/* Donate CTA */}
			<section id="donate" className="py-20 px-6 text-center bg-gray-50">
				<h2 className="text-3xl font-bold mb-4 text-hive-blue">
					Support Our Work
				</h2>
				<p className="text-gray-500 max-w-xl mx-auto mb-10 text-lg">
					Your contribution helps us reach more survivors and provide
					the care they deserve. Every dollar makes a difference.
				</p>
				<Button asChild className="h-auto rounded-full bg-hive-orange text-white font-bold hover:bg-hive-orange/90 px-10 py-4 text-lg transition-colors">
					<Link href="/donations">Donate Now</Link>
				</Button>
			</section>

			{/* footer section */}
			<footer>
				<Footer/>
			</footer>

		</main>
	);
}
