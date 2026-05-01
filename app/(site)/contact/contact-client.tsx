"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useLanguage, useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/resend";
import type {
    ContactPageData,
    ContactHeroSection,
    ContactNewsletterSection,
    ContactFormSection,
    ContactInfoSection,
} from "@/sanity/queries/contactPage";
import type { SiteSettingsData } from "@/sanity/queries/siteSettings";

type LocalizedValue =
    | string
    | {
    en?: string | null;
    "es-MX"?: string | null;
}
    | null
    | undefined;

const subjectAliases: Record<string, string[]> = {
    "general-inquiry": ["general-inquiry", "consulta-general"],
    volunteering: ["volunteering", "voluntariado"],
    partnerships: ["partnerships", "alianzas"],
    "programs-and-services": ["programs-and-services", "programas-y-servicios"],
    "events-and-workshops": ["events-and-workshops", "eventos-y-talleres"],
    "donations-and-sponsorships": ["donations-and-sponsorships", "donaciones-y-patrocinios"],
    "media-and-press": ["media-and-press", "medios-y-prensa"],
};

const FALLBACK_EMAIL = "hello@thehivecc.org";
const FALLBACK_PHONE = "(803) 888-7725";
const FALLBACK_PHONE_HREF = "18038887725";
const FALLBACK_ADDRESS_LINE1 = "4704 Colonial Drive";
const FALLBACK_ADDRESS_LINE2 = "Columbia, SC 29203";
const FALLBACK_MAPS_URL =
    "https://www.google.com/maps/place/The+Hive+Community+Circle/@34.044254,-81.0319489,17z/data=!3m1!4b1!4m6!3m5!1s0x88f8bb73a2107003:0x3018e4f7f747e058!8m2!3d34.044254!4d-81.029374!16s%2Fg%2F11h0mwc9st?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";
const FALLBACK_INSTAGRAM = "https://www.instagram.com/thehivecc/";
const FALLBACK_FACEBOOK = "https://www.facebook.com/hivecc/";
const FALLBACK_LINKEDIN = "https://www.linkedin.com/company/thehivecc/";
const FALLBACK_TWITTER = "https://x.com/thehive_cc";
const FALLBACK_YOUTUBE = "https://www.youtube.com/@thehivecommunitycircle93";
const FALLBACK_NEWSLETTER_URL =
    "https://thehivecc.dm.networkforgood.com/emails/first_name-hope-is-growing-in-south-carolina-thanks-to-you-9bd6cd6f-d221-4744-a983-fa7ee063e49a";

function getLocalized(value: LocalizedValue, language: "en" | "es-MX", fallback: string) {
    if (typeof value === "string") return value;
    if (value && typeof value === "object") {
        const en = value.en?.trim() ?? "";
        const es = value["es-MX"]?.trim() ?? "";
        if (language === "es-MX") return es || en || fallback;
        return en || es || fallback;
    }
    return fallback;
}

export default function ContactClient({
                                          cmsContent,
                                          siteSettings,
                                      }: {
    cmsContent: ContactPageData;
    siteSettings: SiteSettingsData;
}) {
    const copy = useSiteCopy();
    const { language } = useLanguage();
    const searchParams = useSearchParams();

    const sections = cmsContent?.sections ?? [];
    const heroSec = sections.find((s): s is ContactHeroSection => s._type === "sectionContactHero");
    const newsletterSec = sections.find(
        (s): s is ContactNewsletterSection => s._type === "sectionContactNewsletter"
    );
    const formSec = sections.find((s): s is ContactFormSection => s._type === "sectionContactForm");
    const infoSec = sections.find((s): s is ContactInfoSection => s._type === "sectionContactInfo");

    const heroEyebrow = getLocalized(heroSec?.eyebrow, language, copy.contact.heroEyebrow);
    const heroTitle = getLocalized(heroSec?.title, language, copy.contact.heroTitle);
    const heroBody = getLocalized(heroSec?.body, language, copy.contact.heroBody);

    const newsletterTitle = getLocalized(
        newsletterSec?.title,
        language,
        copy.contact.newsletterTitle
    );
    const newsletterFormTitle = getLocalized(
        newsletterSec?.formTitle,
        language,
        copy.contact.newsletterFormTitle
    );
    const newsletterEmailLabel = getLocalized(
        newsletterSec?.emailLabel,
        language,
        copy.contact.newsletterEmail
    );
    const newsletterSubmitLabel = getLocalized(
        newsletterSec?.submitLabel,
        language,
        copy.contact.newsletterSubmit
    );
    const newsletterUrl =
        newsletterSec?.newsletterUrl ?? siteSettings?.newsletterUrl ?? FALLBACK_NEWSLETTER_URL;

    const formTitle = getLocalized(formSec?.formTitle, language, copy.contact.formTitle);
    const formDescription = getLocalized(
        formSec?.formDescription,
        language,
        "Choose the topic that best matches your message so we can route it to the right member of the team faster."
    );
    const nameLabel = getLocalized(formSec?.nameLabel, language, copy.contact.fields.name);
    const namePlaceholder = getLocalized(
        formSec?.namePlaceholder,
        language,
        copy.contact.fields.placeholders.name
    );
    const emailFieldLabel = getLocalized(formSec?.emailLabel, language, copy.contact.fields.email);
    const emailPlaceholder = getLocalized(
        formSec?.emailPlaceholder,
        language,
        copy.contact.fields.placeholders.email
    );
    const phoneLabel = getLocalized(formSec?.phoneLabel, language, copy.contact.fields.phone);
    const phonePlaceholder = getLocalized(
        formSec?.phonePlaceholder,
        language,
        copy.contact.fields.placeholders.phone
    );
    const subjectLabel = getLocalized(formSec?.subjectLabel, language, copy.contact.fields.subject);
    const subjectPlaceholder = getLocalized(
        formSec?.subjectPlaceholder,
        language,
        copy.contact.fields.placeholders.subject
    );
    const commentLabel = getLocalized(formSec?.commentLabel, language, copy.contact.fields.comment);
    const commentPlaceholder = getLocalized(
        formSec?.commentPlaceholder,
        language,
        copy.contact.fields.placeholders.comment
    );
    const submitLabel = getLocalized(formSec?.submitLabel, language, copy.contact.fields.submit);

    const resolvedSubjectOptions =
        formSec?.subjectOptions?.length
            ? formSec.subjectOptions
                .filter((o) => o.value && o.label)
                .map((o, index) => {
                    const fallback =
                        copy.contact.fields.subjectOptions.find((item) => item.value === o.value) ??
                        copy.contact.fields.subjectOptions[index];
                    return {
                        value: o.value!,
                        label: getLocalized(o.label, language, fallback?.label ?? o.value ?? ""),
                    };
                })
            : copy.contact.fields.subjectOptions;

    const infoTitle = getLocalized(infoSec?.infoTitle, language, copy.contact.infoTitle);
    const infoDescription = getLocalized(
        infoSec?.infoDescription,
        language,
        "Prefer to reach out directly? You can call, email, or connect with us on social media."
    );
    const stayConnectedLabel = getLocalized(infoSec?.stayConnectedLabel, language, "Stay Connected");
    const infoEmailLabel = getLocalized(infoSec?.emailLabel, language, copy.contact.info.email);
    const infoPhoneLabel = getLocalized(infoSec?.phoneLabel, language, copy.contact.info.phone);
    const infoAddressLabel = getLocalized(infoSec?.addressLabel, language, copy.contact.info.address);

    const email = siteSettings?.contactEmail ?? FALLBACK_EMAIL;
    const phone = siteSettings?.contactPhone ?? FALLBACK_PHONE;
    const phoneHref = phone.replace(/\D/g, "") || FALLBACK_PHONE_HREF;
    const address = siteSettings?.contactAddress;
    const [addressLine1, addressLine2] = address
        ? [address, ""]
        : [FALLBACK_ADDRESS_LINE1, FALLBACK_ADDRESS_LINE2];
    const mapsUrl = siteSettings?.googleMapsUrl ?? FALLBACK_MAPS_URL;

    const instagramUrl = siteSettings?.instagramUrl ?? FALLBACK_INSTAGRAM;
    const facebookUrl = siteSettings?.facebookUrl ?? FALLBACK_FACEBOOK;
    const linkedinUrl = siteSettings?.linkedinUrl ?? FALLBACK_LINKEDIN;
    const twitterUrl = siteSettings?.twitterUrl ?? FALLBACK_TWITTER;
    const youtubeUrl = siteSettings?.youtubeUrl ?? FALLBACK_YOUTUBE;

    type FormData = {
        name: string;
        email: string;
        phone: string;
        subject: string;
        comment: string;
    };

    const requestedSubject = searchParams.get("subject");
    const defaultSubject =
        resolvedSubjectOptions.find((option) =>
            requestedSubject
                ? (subjectAliases[requestedSubject] ?? [requestedSubject]).includes(option.value)
                : false
        )?.value ?? resolvedSubjectOptions[0]?.value;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const nextData: FormData = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
            subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
            comment: (form.elements.namedItem("comment") as HTMLTextAreaElement).value,
        };
        sendEmail(nextData);
    };

    return (
        <main className="site-page text-gray-800">
            <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14">
                <div className="mx-auto max-w-7xl">
                    <p className="site-eyebrow">{heroEyebrow}</p>
                    <h1 className="site-title mt-4">{heroTitle}</h1>
                    <p className="mx-auto mt-7 max-w-3xl text-lg leading-7 text-white/85 sm:text-xl">
                        {heroBody}
                    </p>
                </div>
            </section>

            <section className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 py-16 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:gap-14 lg:px-8 lg:py-20">
                <div>
                    <div className="mb-6">
                        <h2 id="contact-form" className="text-3xl font-bold text-hive-blue sm:text-4xl">
                            {formTitle}
                        </h2>
                        <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
                            {formDescription}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <FieldSet className="rounded-[2rem] border border-hive-blue/10 bg-gradient-to-br from-hive-blue via-cyan-700 to-teal-600 p-6 shadow-[0_24px_60px_-24px_rgba(7,89,133,0.75)] sm:p-8">
                            <FieldGroup className="gap-6">
                                <Field>
                                    <FieldLabel
                                        htmlFor="name"
                                        className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
                                    >
                                        {nameLabel}
                                    </FieldLabel>
                                    <Input
                                        id="name"
                                        name="name"
                                        autoComplete="off"
                                        required
                                        placeholder={namePlaceholder}
                                        className="h-12 rounded-2xl border-white/15 bg-white/96 px-4 text-base text-slate-900 placeholder:text-slate-500 focus-visible:border-hive-orange focus-visible:ring-hive-orange/30"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel
                                        htmlFor="email"
                                        className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
                                    >
                                        {emailFieldLabel}
                                    </FieldLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="off"
                                        placeholder={emailPlaceholder}
                                        className="h-12 rounded-2xl border-white/15 bg-white/96 px-4 text-base text-slate-900 placeholder:text-slate-500 focus-visible:border-hive-orange focus-visible:ring-hive-orange/30"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel
                                        htmlFor="phone"
                                        className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
                                    >
                                        {phoneLabel}
                                    </FieldLabel>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="off"
                                        placeholder={phonePlaceholder}
                                        className="h-12 rounded-2xl border-white/15 bg-white/96 px-4 text-base text-slate-900 placeholder:text-slate-500 focus-visible:border-hive-orange focus-visible:ring-hive-orange/30"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel
                                        htmlFor="subject"
                                        className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
                                    >
                                        {subjectLabel}
                                    </FieldLabel>
                                    <Select name="subject" required defaultValue={defaultSubject}>
                                        <SelectTrigger
                                            id="subject"
                                            className="h-12 w-full rounded-2xl border-white/15 bg-white/96 px-4 text-left text-base text-slate-900 shadow-none data-[placeholder]:text-slate-500 focus-visible:border-hive-orange focus-visible:ring-hive-orange/30"
                                        >
                                            <SelectValue placeholder={subjectPlaceholder} />
                                        </SelectTrigger>
                                        <SelectContent
                                            position="popper"
                                            className="z-50 rounded-2xl border border-slate-200 bg-white p-1 text-slate-900 shadow-2xl"
                                        >
                                            {resolvedSubjectOptions.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </Field>
                                <Field>
                                    <FieldLabel
                                        htmlFor="comment"
                                        className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
                                    >
                                        {commentLabel}
                                    </FieldLabel>
                                    <Textarea
                                        id="comment"
                                        name="comment"
                                        required
                                        autoComplete="off"
                                        placeholder={commentPlaceholder}
                                        className="min-h-36 rounded-2xl border-white/15 bg-white/96 px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 focus-visible:border-hive-orange focus-visible:ring-hive-orange/30"
                                    />
                                </Field>
                                <Button
                                    type="submit"
                                    className="h-13 rounded-2xl bg-hive-orange text-lg font-semibold text-white shadow-[0_14px_28px_-14px_rgba(249,115,22,0.9)] transition-transform hover:-translate-y-0.5 hover:bg-hive-orange/90"
                                >
                                    {submitLabel}
                                </Button>
                            </FieldGroup>
                        </FieldSet>
                    </form>
                </div>

                <div>
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_22px_55px_-30px_rgba(15,23,42,0.35)] sm:p-8">
                        <h2 className="text-3xl font-bold text-hive-blue sm:text-4xl">{infoTitle}</h2>
                        <p className="mt-3 text-base leading-7 text-slate-600">{infoDescription}</p>

                        <div className="mt-8 flex flex-col gap-6">
                            <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-hive-blue/10">
                                    <Mail className="text-hive-blue" />
                                </div>
                                <div>
                                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                                        {infoEmailLabel}
                                    </p>
                                    <Link
                                        href={`mailto:${email}`}
                                        className="text-lg font-semibold text-slate-800 transition-colors hover:text-hive-blue"
                                    >
                                        {email}
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-hive-orange/10">
                                    <Phone className="text-hive-orange" />
                                </div>
                                <div>
                                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                                        {infoPhoneLabel}
                                    </p>
                                    <Link
                                        href={`tel:+${phoneHref}`}
                                        className="text-lg font-semibold text-slate-800 transition-colors hover:text-hive-orange"
                                    >
                                        {phone}
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-hive-yellow/20">
                                    <MapPin className="text-hive-yellow" />
                                </div>
                                <div>
                                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                                        {infoAddressLabel}
                                    </p>
                                    <Link
                                        href={mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg font-semibold leading-8 text-slate-800 transition-colors hover:text-hive-yellow"
                                    >
                                        {addressLine1}
                                        {addressLine2 ? (
                                            <>
                                                <br />
                                                {addressLine2}
                                            </>
                                        ) : null}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-slate-200 pt-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                                {stayConnectedLabel}
                            </p>
                            <div className="mt-4 flex items-start gap-4">
                                <Link href={instagramUrl} className="rounded-2xl bg-white p-1 transition-transform hover:-translate-y-1">
                                    <Image src="/socials-images/Instagram_logo_2016.svg" alt={copy.contact.socials.instagram} width={50} height={50} />
                                </Link>
                                <Link href={facebookUrl} className="rounded-2xl bg-white p-1 transition-transform hover:-translate-y-1">
                                    <Image src="/socials-images/2023_Facebook_icon.svg" alt={copy.contact.socials.facebook} width={50} height={50} />
                                </Link>
                                <Link href={linkedinUrl} className="rounded-2xl bg-white p-1 transition-transform hover:-translate-y-1">
                                    <Image src="/socials-images/LinkedIn_icon.svg" alt={copy.contact.socials.linkedin} width={50} height={50} />
                                </Link>
                                <Link href={twitterUrl} className="rounded-2xl bg-white p-1 transition-transform hover:-translate-y-1">
                                    <Image src="/socials-images/X_logo_2023.svg" alt={copy.contact.socials.x} width={50} height={50} />
                                </Link>
                                <Link href={youtubeUrl} className="rounded-2xl bg-white p-1 transition-transform hover:-translate-y-1">
                                    <Image src="/socials-images/YouTube_full-color_icon_(2017).svg" alt={copy.contact.socials.youtube} width={60} height={60} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-6 pb-16">
                <div className="mx-auto grid max-w-6xl gap-8 py-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(360px,1fr)] lg:items-stretch">
                    <div className="relative min-h-[24rem] overflow-hidden rounded-2xl bg-hive-yellow/15 lg:min-h-[32rem]">
                        <Image
                            src="/images/TheHive_12.06.2025_87.jpg"
                            alt="The Hive community members smiling together"
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-hive-blue/70 via-hive-blue/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                            <p className="text-lg font-semibold uppercase tracking-[0.22em] text-hive-yellow">
                                {newsletterTitle}
                            </p>
                            <p className="mt-1 max-w-xs text-lg leading-snug">
                                Stories, updates, and community moments delivered to your inbox.
                            </p>
                        </div>
                    </div>

                    <div className="w-full">
                        <FieldSet className="h-full rounded-xl bg-hive-blue p-5 sm:p-6">
                            <h2 className="mb-1 text-center text-2xl font-bold text-white sm:text-3xl">
                                {newsletterFormTitle}
                            </h2>

                            <div className="rounded-2xl bg-white p-4 shadow-lg sm:p-6">
                                <div className="mx-auto max-w-[420px]">
                                    <iframe
                                        src="https://thehivecc.dm.networkforgood.com/forms/40977?iframe=1"
                                        title="The Hive newsletter signup form"
                                        width="100%"
                                        height="550"
                                        frameBorder="0"
                                        loading="lazy"
                                        className="block w-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </FieldSet>
                    </div>
                </div>
            </section>
        </main>
    );
}