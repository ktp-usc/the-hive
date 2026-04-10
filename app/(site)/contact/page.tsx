"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
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

export default function Contact() {
  const copy = useSiteCopy();

  type FormData = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    comment: string;
  };

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
    <main className="min-h-screen bg-white pt-16 text-gray-800">
      <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-hive-blue px-6 py-10 text-center text-white sm:px-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <p className="site-eyebrow text-white/90">{copy.contact.heroEyebrow}</p>
          <h1 className="site-title mt-4">{copy.contact.heroTitle}</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-7 text-white/85 sm:text-xl">
            {copy.contact.heroBody}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 py-16 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:gap-14 lg:px-8 lg:py-20">
        <div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-hive-blue sm:text-4xl">
              {copy.contact.formTitle}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
              Choose the topic that best matches your message so we can route it
              to the right member of the team faster.
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
                    {copy.contact.fields.name}
                  </FieldLabel>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="off"
                    required
                    placeholder={copy.contact.fields.placeholders.name}
                    className="h-12 rounded-2xl border-white/15 bg-white/96 px-4 text-base text-slate-900 placeholder:text-slate-500 focus-visible:border-hive-orange focus-visible:ring-hive-orange/30"
                  />
                </Field>

                <Field>
                  <FieldLabel
                    htmlFor="email"
                    className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
                  >
                    {copy.contact.fields.email}
                  </FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="off"
                    placeholder={copy.contact.fields.placeholders.email}
                    className="h-12 rounded-2xl border-white/15 bg-white/96 px-4 text-base text-slate-900 placeholder:text-slate-500 focus-visible:border-hive-orange focus-visible:ring-hive-orange/30"
                  />
                </Field>

                <Field>
                  <FieldLabel
                    htmlFor="phone"
                    className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
                  >
                    {copy.contact.fields.phone}
                  </FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="off"
                    placeholder={copy.contact.fields.placeholders.phone}
                    className="h-12 rounded-2xl border-white/15 bg-white/96 px-4 text-base text-slate-900 placeholder:text-slate-500 focus-visible:border-hive-orange focus-visible:ring-hive-orange/30"
                  />
                </Field>

                <Field>
                  <FieldLabel
                    htmlFor="subject"
                    className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
                  >
                    {copy.contact.fields.subject}
                  </FieldLabel>
                  <Select name="subject" required>
                    <SelectTrigger
                      id="subject"
                      className="h-12 w-full rounded-2xl border-white/15 bg-white/96 px-4 text-left text-base text-slate-900 shadow-none data-[placeholder]:text-slate-500 focus-visible:border-hive-orange focus-visible:ring-hive-orange/30"
                    >
                      <SelectValue
                        placeholder={copy.contact.fields.placeholders.subject}
                      />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      className="z-50 rounded-2xl border border-slate-200 bg-white p-1 text-slate-900 shadow-2xl"
                    >
                      {copy.contact.fields.subjectOptions.map((option) => (
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
                    {copy.contact.fields.comment}
                  </FieldLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                    required
                    autoComplete="off"
                    placeholder={copy.contact.fields.placeholders.comment}
                    className="min-h-36 rounded-2xl border-white/15 bg-white/96 px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 focus-visible:border-hive-orange focus-visible:ring-hive-orange/30"
                  />
                </Field>

                <Button
                  type="submit"
                  className="h-13 rounded-2xl bg-hive-orange text-lg font-semibold text-white shadow-[0_14px_28px_-14px_rgba(249,115,22,0.9)] transition-transform hover:-translate-y-0.5 hover:bg-hive-orange/90"
                >
                  {copy.contact.fields.submit}
                </Button>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>

        <div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_22px_55px_-30px_rgba(15,23,42,0.35)] sm:p-8">
            <h2 className="text-3xl font-bold text-hive-blue sm:text-4xl">
              {copy.contact.infoTitle}
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Prefer to reach out directly? You can call, email, or connect with
              us on social media.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-hive-blue/10">
                  <Mail className="text-hive-blue" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    {copy.contact.info.email}
                  </p>
                  <Link
                    href="mailto:hello@thehivecc.org"
                    className="text-lg font-semibold text-slate-800 transition-colors hover:text-hive-blue"
                  >
                    hello@thehivecc.org
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-hive-orange/10">
                  <Phone className="text-hive-orange" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    {copy.contact.info.phone}
                  </p>
                  <Link
                    href="tel:+18038887725"
                    className="text-lg font-semibold text-slate-800 transition-colors hover:text-hive-orange"
                  >
                    (803) 888-7725
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-hive-yellow/20">
                  <MapPin className="text-hive-yellow" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    {copy.contact.info.address}
                  </p>
                  <Link
                    href="https://www.google.com/maps/place/The+Hive+Community+Circle/@34.044254,-81.0319489,17z/data=!3m1!4b1!4m6!3m5!1s0x88f8bb73a2107003:0x3018e4f7f747e058!8m2!3d34.044254!4d-81.029374!16s%2Fg%2F11h0mwc9st?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold leading-8 text-slate-800 transition-colors hover:text-hive-yellow"
                  >
                    4704 Colonial Drive
                    <br />
                    Columbia, SC 29203
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Stay Connected
              </p>
              <div className="mt-4 flex items-start gap-4">
                <Link
                  href="https://www.instagram.com/thehivecc/"
                  className="rounded-2xl bg-white p-1 transition-transform hover:-translate-y-1"
                >
                  <Image
                    src="/socials-images/Instagram_logo_2016.svg"
                    alt={copy.contact.socials.instagram}
                    width={50}
                    height={50}
                  />
                </Link>

                <Link
                  href="https://www.facebook.com/hivecc/"
                  className="rounded-2xl bg-white p-1 transition-transform hover:-translate-y-1"
                >
                  <Image
                    src="/socials-images/2023_Facebook_icon.svg"
                    alt={copy.contact.socials.facebook}
                    width={50}
                    height={50}
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/thehivecc/"
                  className="rounded-2xl bg-white p-1 transition-transform hover:-translate-y-1"
                >
                  <Image
                    src="/socials-images/LinkedIn_icon.svg"
                    alt={copy.contact.socials.linkedin}
                    width={50}
                    height={50}
                  />
                </Link>

                <Link
                  href="https://x.com/thehive_cc"
                  className="rounded-2xl bg-white p-1 transition-transform hover:-translate-y-1"
                >
                  <Image
                    src="/socials-images/X_logo_2023.svg"
                    alt={copy.contact.socials.x}
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-6 pb-16">
        <Link
          href="https://thehivecc.dm.networkforgood.com/emails/first_name-hope-is-growing-in-south-carolina-thanks-to-you-9bd6cd6f-d221-4744-a983-fa7ee063e49a"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="mx-auto mt-10 flex max-w-md justify-center rounded-2xl bg-hive-orange py-10 text-white hover:bg-hive-orange/90">
            <h1 className="text-3xl">
              <strong>{copy.contact.newsletterTitle}</strong>
            </h1>
          </div>
        </Link>

        <div className="mx-auto flex max-w-2xl justify-center py-10">
          <form className="w-full max-w-md">
            <FieldSet className="rounded-xl bg-hive-blue p-5">
              <FieldGroup>
                <Field>
                  <h1 className="text-center text-3xl text-white">
                    <strong>{copy.contact.newsletterFormTitle}</strong>
                  </h1>
                  <FieldLabel htmlFor="email" className="text-xl text-gray-200">
                    {copy.contact.newsletterEmail}
                  </FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="off"
                    placeholder={copy.contact.fields.placeholders.email}
                    className="bg-gray-200 placeholder:text-black focus-visible:ring-hive-blue/90"
                  />
                </Field>
                <Button
                  type="submit"
                  className="bg-hive-orange text-xl text-white hover:bg-hive-orange/90"
                >
                  {copy.contact.newsletterSubmit}
                </Button>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>
      </section>
    </main>
  );
}
