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
                  <FieldLabel htmlFor="name" className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
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
                  <FieldLabel htmlFor="email" className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
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
                  <FieldLabel htmlFor="phone" className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
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
                  <FieldLabel htmlFor="subject" className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                    {copy.contact.fields.subject}
                  </FieldLabel>
                  <Select name="subject" required>
                    <SelectTrigger
                      id="subject"
                      className="h-12 w-full rounded-2xl border-white/15 bg-white/96 px-4 text-left text-base text-slate-900 shadow-none data-[placeholder]:text-slate-500 focus-visible:border-hive-orange focus-visible:ring-hive-orange/30"
                    >
                      <SelectValue placeholder={copy.contact.fields.placeholders.subject} />
                    </SelectTrigger>
                    <SelectContent className="z-50 rounded-2xl border border-slate-200 bg-white p-1 text-slate-900 shadow-2xl">
                      {copy.contact.fields.subjectOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel htmlFor="comment" className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
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

                <Button type="submit" className="h-13 rounded-2xl bg-hive-orange text-lg font-semibold text-white">
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

            <div className="mt-8 flex flex-col gap-6">
              {/* Email, Phone, Address unchanged */}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Stay Connected
              </p>

              <div className="mt-4 flex items-start gap-4">
                <Link href="https://www.instagram.com/thehivecc/">
                  <Image src="/socials-images/Instagram_logo_2016.svg" alt={copy.contact.socials.instagram} width={50} height={50} />
                </Link>

                <Link href="https://www.facebook.com/hivecc/">
                  <Image src="/socials-images/2023_Facebook_icon.svg" alt={copy.contact.socials.facebook} width={50} height={50} />
                </Link>

                <Link href="https://www.linkedin.com/company/thehivecc/">
                  <Image src="/socials-images/LinkedIn_icon.svg" alt={copy.contact.socials.linkedin} width={50} height={50} />
                </Link>

                <Link href="https://x.com/thehive_cc">
                  <Image src="/socials-images/X_logo_2023.svg" alt={copy.contact.socials.x} width={50} height={50} />
                </Link>

                <Link href="https://www.youtube.com/@thehivecommunitycircle93">
                  <Image src="/socials-images/YouTube_full-color_icon_(2017).svg" alt={copy.contact.socials.youtube} width={60} height={60} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}