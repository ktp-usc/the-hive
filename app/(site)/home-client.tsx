"use client";

import Image from "next/image";
import Script from "next/script";
import InstagramEmbed from "@/components/InstagramEmbed/page";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Coffee, Search, Sun } from "lucide-react";
import { useSiteCopy } from "@/components/language-provider";
import { LandingPopupModal } from "@/components/landing-popup-modal";
import type React from "react";
import type { HomeWhatWeDoCard } from "@/sanity/queries/homePage";

type HomeClientProps = {
    heroHeadline?: string | null;
    heroSubheadline?: string | null;
    heroCtaLabel?: string | null;
    heroCtaHref?: string | null;
    heroBackgroundImageUrl: string;
    missionHeading?: string | null;
    missionBody?: string | null;
    missionImageUrl: string;
    missionDims?: { width: number; height: number; aspectRatio: number };
    whatWeDoTitle?: string | null;
    whatWeDoCards?: HomeWhatWeDoCard[] | null;
    supportTitle?: string | null;
    supportBody?: string | null;
    landingPopup?: {
        imageUrl: string;
        imageWidth: number;
        imageHeight: number;
        ctaLabel?: string;
        ctaHref?: string;
    } | null;
};

const CARD_ICONS = [
    { icon: Coffee, bg: "bg-hive-blue/10",   color: "text-hive-blue",   titleClass: "text-hive-blue",   titleStyle: undefined as React.CSSProperties | undefined },
    { icon: Search, bg: "bg-hive-orange/10", color: "text-hive-orange", titleClass: "text-hive-orange", titleStyle: undefined as React.CSSProperties | undefined },
    { icon: Sun,    bg: "bg-hive-yellow/20", color: "text-hive-yellow", titleClass: "",                 titleStyle: { color: "#c9a000" } as React.CSSProperties },
];

export default function HomeClient({
    heroHeadline,
    heroSubheadline,
    heroCtaLabel,
    heroCtaHref,
    heroBackgroundImageUrl,
    missionHeading,
    missionBody,
    missionImageUrl,
    missionDims,
    whatWeDoTitle,
    whatWeDoCards,
    supportTitle,
    supportBody,
    landingPopup,
}: HomeClientProps) {
    const copy = useSiteCopy();

    const resolvedWhatWeDoCards = whatWeDoCards?.length
        ? whatWeDoCards
        : copy.home.whatWeDoCards.map((c) => ({ _id: c.title, title: c.title, body: c.body }));

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

            {/* Hero */}
            <section
                style={{ backgroundImage: `url("${heroBackgroundImageUrl}")` }}
                className="relative flex min-h-[90vh] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-28 text-center text-white md:py-32"
            >
                <div className="absolute bottom-6 left-6 z-10 text-left text-black">
                    <div className="mt-3">
                        <a
                            href="https://app.candid.org/profile/9455379/the-hive-community-circle-47-0992295"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <Image
                            src="/images/candid.avif"
                            alt="Candid."
                            width={100}
                            height={40}
                            className="h-auto w-[100px]"
                        />
                        </a>
                    </div>

                    <p className="mt-2 text-sm leading-snug">
                        The <span className="font-bold">Hive Community Circle</span> <br />
                        is a Proud Member of
                    </p>

                    <div className="mt-3">
                        <a
                            href="https://columbiachamber.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <Image
                            src="/images/columbiachamberslogo.png"
                            alt="Columbia Chamber logo"
                            width={90}
                            height={90}
                            className="h-auto w-[90px]"
                        />
                        </a>
                    </div>
                </div>

                <div className="absolute inset-0 bg-hive-blue/70" />
                <div className="relative z-10">
                    <h1
                        className="mx-auto max-w-5xl font-medium leading-tight"
                        style={{
                            fontSize: "clamp(1.75rem, 2.25vw + 1rem, 3.75rem)",
                        }}
                    >
                        {heroHeadline ?? copy.home.heroTitleLine1}
                        <span
                            className="block font-bold leading-[1.05] tracking-tight"
                            style={{
                                fontSize: "clamp(2.5rem, 5.5vw + 1.25rem, 6rem)",
                            }}
                        >
                            {heroSubheadline ?? copy.home.heroTitleLine2}
                        </span>
                    </h1>
                    <Button
                        asChild
                        size="lg"
                        className="mt-10 h-auto rounded-full bg-hive-yellow px-16 py-8 text-2xl font-bold tracking-widest text-gray-900 transition-colors hover:bg-hive-yellow/90"
                    >
                        <Link href={heroCtaHref ?? "/donations"}>
                            {heroCtaLabel ?? copy.home.donateToday}
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Mission */}
            <section className="mx-auto flex w-full max-w-5xl min-w-0 flex-col items-center justify-center gap-8 px-6 py-20 text-center md:flex-row">
                <div className="w-full min-w-0 max-w-md">
                    <Image
                        src={missionImageUrl}
                        alt={copy.home.missionImageAlt}
                        width={missionDims?.width ?? 1500}
                        height={missionDims?.height ?? 1500}
                        className="h-auto w-full max-w-full rounded-lg border-2 border-gray-200"
                    />
                </div>
                <div>
                    <h2 className="mb-6 text-left text-3xl font-bold text-hive-blue">
                        {missionHeading ?? copy.home.missionTitle}
                    </h2>
                    <p className="text-left text-lg leading-relaxed text-gray-600">
                        {missionBody ?? copy.home.missionBody}
                    </p>
                </div>
            </section>

            <div className="mx-auto max-w-4xl border-t border-gray-200" />

            {/* What We Do */}
            <section className="mx-auto max-w-5xl px-6 py-20">
                <h2 className="mb-14 text-center text-3xl font-bold text-hive-blue">
                    {whatWeDoTitle ?? copy.home.whatWeDoTitle}
                </h2>
                <div className="grid gap-10 text-center md:grid-cols-3">
                    {resolvedWhatWeDoCards.slice(0, 3).map((card, i) => {
                        const { icon: Icon, bg, color, titleClass, titleStyle } = CARD_ICONS[i] ?? CARD_ICONS[0];
                        return (
                            <div key={card._id ?? i} className="flex flex-col items-center gap-4">
                                <div className={`flex h-14 w-14 items-center justify-center rounded-full ${bg}`}>
                                    <Icon className={color} />
                                </div>
                                <h3 className={`text-xl font-semibold ${titleClass}`} style={titleStyle}>
                                    {card.title}
                                </h3>
                                <p className="leading-relaxed text-gray-500">{card.body}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <div className="mx-auto max-w-4xl border-t border-gray-200" />

            {/* Instagram */}
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

            {/* Support / Donate */}
            <section id="donate" className="bg-gray-50 px-6 py-20 text-center">
                <h2 className="mb-4 text-3xl font-bold text-hive-blue">
                    {supportTitle ?? copy.home.supportTitle}
                </h2>
                <p className="mx-auto mb-10 max-w-xl text-lg text-gray-500">
                    {supportBody ?? copy.home.supportBody}
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
