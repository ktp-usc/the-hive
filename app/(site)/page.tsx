import Image from "next/image";
import Script from "next/script";
import InstagramEmbed from "@/components/InstagramEmbed/page";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Coffee, Search, Sun } from "lucide-react";

export default function Home() {
  {
    /* Replace links with shadcn button later */
  }
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section
        style={{ backgroundImage: "url('/images/TheHive_12.06.2025_135.jpg')" }}
        className="relative flex min-h-[80vh] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-24 text-center text-white"
      >
        <div className="absolute inset-0 bg-hive-blue/70"></div>

        <div className="relative z-10">
          <h1 className="mx-auto max-w-5xl text-4xl font-medium leading-tight md:text-6xl">
            Believing in Yourself is the
            <span className="block text-8xl font-bold">
              First Step to Healing
            </span>
          </h1>

          <Button
            asChild
            size="lg"
            className="mt-10 h-auto rounded-full bg-hive-yellow px-16 py-8 text-2xl font-bold tracking-widest text-gray-900 transition-colors hover:bg-hive-yellow/90"
          >
            <Link href="/donations">Donate Today</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 px-6 py-20 text-center md:flex-row">
        <div>
          <Image
            src="/images/TheHive_12.06.2025_87.jpg"
            alt="Mission"
            width={1500}
            height={1500}
            className="rounded-lg border-2 border-gray-200"
          />
        </div>
        <div>
          <h2 className="mb-6 text-left text-3xl font-bold text-hive-blue">
            Our Mission
          </h2>
          <p className="text-left text-lg leading-relaxed text-gray-600">
            The Hive Community Circle is a survivor-led, survivor-driven support
            organization helping women and girls in South Carolina overcome the
            trauma of sexual assault, intimate partner violence, and stalking.
            We are on a mission to provide unwavering support and compassion to
            the most impacted, yet most underserved survivors in SC.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl border-t border-gray-200" />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold text-hive-blue">
          What We Do
        </h2>
        <div className="grid gap-10 text-center md:grid-cols-3">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-hive-blue/10">
              <Coffee className="text-hive-blue" />
            </div>
            <h3 className="text-xl font-semibold text-hive-blue">
              Advocacy &amp; Support
            </h3>
            <p className="leading-relaxed text-gray-500">
              We have assisted over 470 survivors and their families through
              direct advocacy and wraparound support services.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-hive-orange/10">
              <Search className="text-hive-orange" />
            </div>
            <h3 className="text-xl font-semibold text-hive-orange">
              Prevention &amp; Outreach
            </h3>
            <p className="leading-relaxed text-gray-500">
              Our prevention programs have reached over 367 community members,
              creating safer spaces and raising awareness across South Carolina.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-hive-yellow/20">
              <Sun className="text-hive-yellow" />
            </div>
            <h3 className="text-xl font-semibold" style={{ color: "#c9a000" }}>
              Restoration
            </h3>
            <p className="leading-relaxed text-gray-500">
              We walk alongside survivors as they rebuild their lives,
              celebrating every milestone and success story along the way.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl border-t border-gray-200" />

      <div className="mx-auto mt-5 w-full max-w-lg">
        <div className="mb-5 flex flex-col items-center gap-4">
          <a
            href="https://www.instagram.com/thehivecc/"
            className="inline-block rounded-full bg-hive-orange px-10 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-500"
          >
            Follow Us on Instagram!
          </a>
        </div>
        <InstagramEmbed />
        <Script async src="https://www.instagram.com/embed.js"></Script>
      </div>

      <section id="donate" className="bg-gray-50 px-6 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold text-hive-blue">
          Support Our Work
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-gray-500">
          Your contribution helps us reach more survivors and provide the care
          they deserve. Every dollar makes a difference.
        </p>
        <Button
          asChild
          className="h-auto rounded-full bg-hive-orange px-10 py-4 text-lg font-bold text-white transition-colors hover:bg-hive-orange/90"
        >
          <Link href="/donations">Donate Now</Link>
        </Button>
      </section>
    </main>
  );
}
