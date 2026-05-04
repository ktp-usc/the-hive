"use client";

import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { type CSSProperties } from "react";
import { Coffee, Search, Sun } from "lucide-react";

import InstagramEmbed from "@/components/InstagramEmbed/page";
import { useLanguage, useSiteCopy } from "@/components/language-provider";
import { LandingPopupModal } from "@/components/landing-popup-modal";
import { Button } from "@/components/ui/button";
import { resolveLocalized } from "@/lib/resolved-localized";
import type { HomeWhatWeDoCard } from "@/sanity/queries/homePage";

type LocalizedValue = {
    en?: string | null;
    es?: string | null;
} | string | null | undefined;

type HomeClientProps = {
    heroHeadline?: LocalizedValue;
    heroSubheadline?: LocalizedValue;
    heroCtaLabel?: LocalizedValue;
    heroCtaHref?: string | null;
    heroBackgroundImageUrl: string;
    missionHeading?: LocalizedValue;
    missionBody?: LocalizedValue;
    missionImageUrl: string;
    missionDims?: { width: number; height: number; aspectRatio: number };
    whatWeDoTitle?: LocalizedValue;
    whatWeDoCards?: HomeWhatWeDoCard[] | null;
    supportTitle?: LocalizedValue;
    supportBody?: LocalizedValue;
    landingPopup?: {
        imageUrl: string;
        imageWidth: number;
        imageHeight: number;
        ctaLabel?: string;
        ctaHref?: string;
    } | null;
};

const CARD_ICONS = [
    {
        icon: Coffee,
        bg: "bg-hive-blue/10",
        color: "text-hive-blue",
        titleClass: "text-hive-blue",
        titleStyle: undefined as CSSProperties | undefined,
    },
    {
        icon: Search,
        bg: "bg-hive-orange/10",
        color: "text-hive-orange",
        titleClass: "text-hive-orange",
        titleStyle: undefined as CSSProperties | undefined,
    },
    {
        icon: Sun,
        bg: "bg-hive-yellow/20",
        color: "text-hive-yellow",
        titleClass: "",
        titleStyle: { color: "#c9a000" } as CSSProperties,
    },
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
    const { language } = useLanguage();

    function r(value: unknown, fallback: string): string {
        return resolveLocalized(value, language, fallback);
    }

    const resolvedHeroHeadline = r(heroHeadline, copy.home.heroTitleLine1);
    const resolvedHeroSubheadline = r(heroSubheadline, copy.home.heroTitleLine2);
    const resolvedHeroCtaLabel = r(heroCtaLabel, copy.home.donateToday);
    const resolvedMissionHeading = r(missionHeading, copy.home.missionTitle);
    const resolvedMissionBody = r(missionBody, copy.home.missionBody);
    const resolvedWhatWeDoTitle = r(whatWeDoTitle, copy.home.whatWeDoTitle);
    const resolvedSupportTitle = r(supportTitle, copy.home.supportTitle);
    const resolvedSupportBody = r(supportBody, copy.home.supportBody);

    // Cards — resolve each field through resolveLocalized so bilingual
    // Sanity content works and site-copy fallbacks are bilingual too
    const resolvedWhatWeDoCards = whatWeDoCards?.length
        ? whatWeDoCards.map((card, i) => ({
              _id: card._id ?? String(i),
              title: r(card.title, copy.home.whatWeDoCards[i]?.title ?? ""),
              body: r(card.body, copy.home.whatWeDoCards[i]?.body ?? ""),
          }))
        : copy.home.whatWeDoCards.map((c) => ({
              _id: c.title,
              title: c.title,
              body: c.body,
          }));

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
                        style={{ fontSize: "clamp(1.75rem, 2.25vw + 1rem, 3.75rem)" }}
                    >
                        {resolvedHeroHeadline}
                        <span
                            className="block font-bold leading-[1.05] tracking-tight"
                            style={{ fontSize: "clamp(2.5rem, 5.5vw + 1.25rem, 6rem)" }}
                        >
                            {resolvedHeroSubheadline}
                        </span>
                    </h1>

                    <Button
                        asChild
                        size="lg"
                        className="mt-10 h-auto rounded-full bg-hive-yellow px-16 py-8 text-2xl font-bold tracking-widest text-gray-900 transition-colors hover:bg-hive-yellow/90"
                    >
                        <Link href={heroCtaHref ?? "/donations"}>{resolvedHeroCtaLabel}</Link>
                    </Button>
                </div>
            </section>

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
                        {resolvedMissionHeading}
                    </h2>
                    <p className="text-left text-lg leading-relaxed text-gray-600">
                        {resolvedMissionBody}
                    </p>
                </div>
            </section>

            <div className="mx-auto max-w-4xl border-t border-gray-200" />

            <section className="mx-auto max-w-5xl px-6 py-20">
                <h2 className="mb-14 text-center text-3xl font-bold text-hive-blue">
                    {resolvedWhatWeDoTitle}
                </h2>
                <div className="grid gap-10 text-center md:grid-cols-3">
                    {resolvedWhatWeDoCards.slice(0, 3).map((card, i) => {
                        const { icon: Icon, bg, color, titleClass, titleStyle } =
                            CARD_ICONS[i] ?? CARD_ICONS[0];
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
                    {resolvedSupportTitle}
                </h2>
                <p className="mx-auto mb-10 max-w-xl text-lg text-gray-500">
                    {resolvedSupportBody}
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
