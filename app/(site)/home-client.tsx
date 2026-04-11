"use client";

import Image from "next/image";
import Script from "next/script";
import InstagramEmbed from "@/components/InstagramEmbed/page";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Coffee, Search, Sun } from "lucide-react";
import { useSiteCopy } from "@/components/language-provider";
import { LandingPopupModal } from "@/components/landing-popup-modal";

type HomeClientProps = {
    heroBackgroundImageUrl: string;
    missionImageUrl: string;
    missionDims?: {
        width: number;
        height: number;
        aspectRatio: number;
    };
    landingPopup?: {
        imageUrl: string;
        imageWidth: number;
        imageHeight: number;
        ctaLabel?: string;
        ctaHref?: string;
    } | null;
};

export default function HomeClient({
                                       heroBackgroundImageUrl,
                                       missionImageUrl,
                                       missionDims,
                                       landingPopup,
                                   }: HomeClientProps) {
    const copy = useSiteCopy();

    return (
        <main className="min-h-screen bg-white text-gray-800">
            {landingPopup ? (
                <LandingPopupModal
                    imageUrl={landingPopup.imageUrl}
                    imageAlt={copy.home.popupModalImageAlt}
                    imageWidth={landingPopup.imageWidth}
                    imageHeight={landingPopup.imageHeight}
                    ctaLabel={landingPopup.ctaLabel}
                    ctaHref={landingPopup.ctaHref}
                />
            ) : null}
            <section
                style={{ backgroundImage: `url("${heroBackgroundImageUrl}")` }}
                className="relative flex min-h-[80vh] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-24 text-center text-white"
            >
                <div className="absolute inset-0 bg-hive-blue/70" />

                <div className="relative z-10">
                    <h1 className="mx-auto max-w-5xl text-4xl font-medium leading-tight md:text-6xl">
                        {copy.home.heroTitleLine1}
                        <span className="block text-8xl font-bold">
              {copy.home.heroTitleLine2}
            </span>
                    </h1>

                    <Button
                        asChild
                        size="lg"
                        className="mt-10 h-auto rounded-full bg-hive-yellow px-16 py-8 text-2xl font-bold tracking-widest text-gray-900 transition-colors hover:bg-hive-yellow/90"
                    >
                        <Link href="/donations">{copy.home.donateToday}</Link>
                    </Button>
                </div>
            </section>

            <section className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 px-6 py-20 text-center md:flex-row">
                <div>
                    <Image
                        src={missionImageUrl}
                        alt={copy.home.missionImageAlt}
                        width={missionDims?.width ?? 1500}
                        height={missionDims?.height ?? 1500}
                        className="max-w-md rounded-lg border-2 border-gray-200"
                    />
                </div>

                <div>
                    <h2 className="mb-6 text-left text-3xl font-bold text-hive-blue">
                        {copy.home.missionTitle}
                    </h2>
                    <p className="text-left text-lg leading-relaxed text-gray-600">
                        {copy.home.missionBody}
                    </p>
                </div>
            </section>

            <div className="mx-auto max-w-4xl border-t border-gray-200" />

            <section className="mx-auto max-w-5xl px-6 py-20">
                <h2 className="mb-14 text-center text-3xl font-bold text-hive-blue">
                    {copy.home.whatWeDoTitle}
                </h2>
                <div className="grid gap-10 text-center md:grid-cols-3">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-hive-blue/10">
                            <Coffee className="text-hive-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-hive-blue">
                            {copy.home.whatWeDoCards[0].title}
                        </h3>
                        <p className="leading-relaxed text-gray-500">
                            {copy.home.whatWeDoCards[0].body}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-hive-orange/10">
                            <Search className="text-hive-orange" />
                        </div>
                        <h3 className="text-xl font-semibold text-hive-orange">
                            {copy.home.whatWeDoCards[1].title}
                        </h3>
                        <p className="leading-relaxed text-gray-500">
                            {copy.home.whatWeDoCards[1].body}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-hive-yellow/20">
                            <Sun className="text-hive-yellow" />
                        </div>
                        <h3 className="text-xl font-semibold" style={{ color: "#c9a000" }}>
                            {copy.home.whatWeDoCards[2].title}
                        </h3>
                        <p className="leading-relaxed text-gray-500">
                            {copy.home.whatWeDoCards[2].body}
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
                        {copy.home.followInstagram}
                    </a>
                </div>
                <InstagramEmbed />
                <Script async src="https://www.instagram.com/embed.js" />
            </div>

            <section id="donate" className="bg-gray-50 px-6 py-20 text-center">
                <h2 className="mb-4 text-3xl font-bold text-hive-blue">
                    {copy.home.supportTitle}
                </h2>
                <p className="mx-auto mb-10 max-w-xl text-lg text-gray-500">
                    {copy.home.supportBody}
                </p>
                <Button
                    asChild
                    className="h-auto rounded-full bg-hive-orange px-10 py-4 text-lg font-bold text-white transition-colors hover:bg-hive-orange/90"
                >
                    <Link href="/donations">{copy.home.donateNow}</Link>
                </Button>
            </section>
        </main>
    );
}