"use client";

import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/resend";

export default function Contact() {
  const copy = useSiteCopy();

  type FormData = {
    name: string;
    email: string;
    phone: string;
    comment: string;
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const nextData: FormData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      comment: (form.elements.namedItem("comment") as HTMLTextAreaElement).value,
    };

    setFormData(nextData);
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

      <section className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-16 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="mb-8 text-3xl font-bold text-hive-blue">
            {copy.contact.formTitle}
          </h2>

          <form onSubmit={handleSubmit}>
            <FieldSet className="rounded-xl bg-hive-blue p-5">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name" className="text-xl text-gray-200">
                    {copy.contact.fields.name}
                  </FieldLabel>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="off"
                    required
                    placeholder={copy.contact.fields.placeholders.name}
                    className="bg-gray-200 placeholder:text-black focus-visible:ring-hive-blue/90"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email" className="text-xl text-gray-200">
                    {copy.contact.fields.email}
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
                <Field>
                  <FieldLabel htmlFor="phone" className="text-xl text-gray-200">
                    {copy.contact.fields.phone}
                  </FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="phone"
                    autoComplete="off"
                    placeholder={copy.contact.fields.placeholders.phone}
                    className="bg-gray-200 placeholder:text-black focus-visible:ring-hive-blue/90"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="comment" className="text-xl text-gray-200">
                    {copy.contact.fields.comment}
                  </FieldLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                    required
                    autoComplete="off"
                    placeholder={copy.contact.fields.placeholders.comment}
                    className="bg-gray-200 placeholder:text-black focus-visible:ring-hive-blue/90"
                  />
                </Field>
                <Button
                  type="submit"
                  className="bg-hive-orange text-xl text-white hover:bg-hive-orange/90"
                >
                  {copy.contact.fields.submit}
                </Button>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>

        <div>
          <h2 className="mb-8 text-3xl font-bold text-hive-blue">
            {copy.contact.infoTitle}
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-hive-blue/10">
                <Mail className="text-hive-blue" />
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {copy.contact.info.email}
                </p>
                <Link
                  href="mailto:hello@thehivecc.org"
                  className="font-medium text-gray-700"
                >
                  hello@thehivecc.org
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-hive-orange/10">
                <Phone className="text-hive-orange" />
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {copy.contact.info.phone}
                </p>
                <Link
                  href="tel:+18038887725"
                  className="font-medium text-gray-700"
                >
                  (803) 888-7725
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-hive-yellow/20">
                <MapPin className="text-hive-yellow" />
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {copy.contact.info.address}
                </p>
                <Link
                  href="https://www.google.com/maps/place/The+Hive+Community+Circle/@34.044254,-81.0319489,17z/data=!3m1!4b1!4m6!3m5!1s0x88f8bb73a2107003:0x3018e4f7f747e058!8m2!3d34.044254!4d-81.029374!16s%2Fg%2F11h0mwc9st?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-700"
                >
                  4704 Colonial Drive
                  <br />
                  Columbia, SC 29203
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 py-4">
            <Link href="https://www.instagram.com/thehivecc/">
              <Image
                src="/socials-images/Instagram_logo_2016.svg"
                alt={copy.contact.socials.instagram}
                width={50}
                height={50}
              />
            </Link>

            <Link href="https://www.facebook.com/hivecc/">
              <Image
                src="/socials-images/2023_Facebook_icon.svg"
                alt={copy.contact.socials.facebook}
                width={50}
                height={50}
              />
            </Link>

            <Link href="https://www.linkedin.com/company/thehivecc/">
              <Image
                src="/socials-images/LinkedIn_icon.svg"
                alt={copy.contact.socials.linkedin}
                width={50}
                height={50}
              />
            </Link>

            <Link href="https://x.com/thehive_cc">
              <Image
                src="/socials-images/X_logo_2023.svg"
                alt={copy.contact.socials.x}
                width={50}
                height={50}
              />
            </Link>

            <Link
                href="https://www.youtube.com/@thehivecommunitycircle93">
              <Image
                src="/socials-images/YouTube_full-color_icon_(2017).svg"
                alt={copy.contact.socials.youtube}
                width={60}
                height={60}
              />
            </Link>
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
                    placeholder="example@gmail.com"
                    className="bg-gray-200 placeholder:text-black focus-visible:ring-hive-blue/90"
                  />
                </Field>
                <Button
                  type="submit"
                  className="bg-hive-orange text-xl text-white hover:bg-hive-orange/90"
                >
                  Submit
                </Button>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>
      </section>
    </main>
  );
}