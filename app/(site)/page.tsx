"use client";

import Image from "next/image";
import Script from "next/script";
import InstagramEmbed from "@/components/InstagramEmbed/page";
import Link from "next/link";
import { useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import {Coffee, Search, Sun} from "lucide-react";

export default function Home() {
    const copy = useSiteCopy();

    {
        /* Replace links with shadcn button later */
    }
    return (
        <main className="min-h-screen bg-white text-gray-800">
            {/* Hero */ }
            <section
                style={{ backgroundImage: "url('/images/TheHive_12.06.2025_135.jpg')" }}
                className="relative flex flex-col items-center justify-center text-white py-24 px-6 text-center min-h-[80vh] bg-cover bg-center bg-no-repeat w-full"
            >
                {/* FULL OVERLAY */}
                <div className="absolute inset-0 bg-hive-blue/70"></div>

                {/* CONTENT */}
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-medium leading-tight max-w-5xl mx-auto">
                        {copy.home.heroTitleLine1}
                        <span className="block font-bold text-8xl">
                            {copy.home.heroTitleLine2}
                        </span>
                    </h1>

                    <Button
                        asChild
                        size="lg"
                        className="mt-10 h-auto rounded-full bg-hive-yellow text-gray-900 font-bold hover:bg-hive-yellow/90 px-16 py-8 text-2xl tracking-widest transition-colors"
                    >
                        <Link href="/donations">{copy.home.donateToday}</Link>
                    </Button>
                </div>
            </section>

            {/* Mission */ }
            <section
                className="py-20 px-6 max-w-5xl mx-auto gap-8 text-center flex flex-col md:flex-row items-center justify-center">
                <div>
                    <Image
                        src="/images/TheHive_12.06.2025_87.jpg"
                        alt={copy.home.missionImageAlt}
                        width={ 1500 }
                        height={ 1500 }
                        className="rounded-lg border-2 border-gray-200"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-left text-hive-blue">
                        {copy.home.missionTitle}
                    </h2>
                    <p className="text-lg text-left leading-relaxed text-gray-600">
                        {copy.home.missionBody}
                    </p>
                </div>
            </section>

            {/* Divider */ }
            <div className="border-t border-gray-200 max-w-4xl mx-auto"/>

            {/* What We Do */ }
            <section className="py-20 px-6 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-14 text-hive-blue">
                    {copy.home.whatWeDoTitle}
                </h2>
                <div className="grid md:grid-cols-3 gap-10 text-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-hive-blue/10 flex items-center justify-center">
                            <Coffee className="text-hive-blue"/>
                        </div>
                        <h3 className="text-xl font-semibold text-hive-blue">
                            {copy.home.whatWeDoCards[0].title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            {copy.home.whatWeDoCards[0].body}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-hive-orange/10 flex items-center justify-center">
                            <Search className="text-hive-orange"/>
                        </div>
                        <h3 className="text-xl font-semibold text-hive-orange">
                            {copy.home.whatWeDoCards[1].title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            {copy.home.whatWeDoCards[1].body}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div
                            className="w-14 h-14 rounded-full bg-hive-yellow/20 flex items-center justify-center">
                            <Sun className="text-hive-yellow"/>
                        </div>
                        <h3
                            className="text-xl font-semibold"
                            style={ { color: "#c9a000" } }
                        >
                            {copy.home.whatWeDoCards[2].title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            {copy.home.whatWeDoCards[2].body}
                        </p>
                    </div>
                </div>
            </section>

            {/* Divider */ }
            <div className="border-t border-gray-200 max-w-4xl mx-auto"/>

            {/* Instagram Feed */ }
            <div className="mx-auto w-full max-w-lg mt-5">
                <div className="flex flex-col items-center gap-4 mb-5">
                    <a
                        href="https://www.instagram.com/thehivecc/"
                        className="inline-block bg-hive-orange text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-orange-500 transition-colors"
                    >
                        {copy.home.followInstagram}
                    </a>
                </div>
                <InstagramEmbed/>
                <Script async src="https://www.instagram.com/embed.js"></Script>
            </div>


            {/* Donate CTA */ }
            <section id="donate" className="py-20 px-6 text-center bg-gray-50">
                <h2 className="text-3xl font-bold mb-4 text-hive-blue">
                    {copy.home.supportTitle}
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto mb-10 text-lg">
                    {copy.home.supportBody}
                </p>
                <Button asChild
                        className="h-auto rounded-full bg-hive-orange text-white font-bold hover:bg-hive-orange/90 px-10 py-4 text-lg transition-colors">
                    <Link href="/donations">{copy.home.donateNow}</Link>
                </Button>
            </section>

        </main>
    );
}
