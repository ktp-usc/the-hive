"use client";

import Footer from "@/components/footer";
import {Mail, MapPin, Phone} from "lucide-react";
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link";
import Image from "next/image";
import {sendEmail} from "@/lib/resend";
import {useState} from "react";
import { useSiteCopy } from "@/components/language-provider";

export default function Contact() {
    const copy = useSiteCopy();

    // Defines the shape of the form data
    type FormData = {
        name: string;
        email: string;
        phone: string;
        comment: string;
    };

    // Holds the current value of each form field
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        comment: '',
    });

    // Handles submission of the form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevents page reload on submit

        const form = e.currentTarget;

        setFormData({
            name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
            email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
            phone:   (form.elements.namedItem('phone')   as HTMLInputElement).value,
            comment: (form.elements.namedItem('comment') as HTMLTextAreaElement).value,
        });
        sendEmail(formData);
    };

    return (
        <main className="min-h-screen bg-white text-gray-800">

            {/* Hero */}
            <section className="flex flex-col items-center justify-center bg-hive-blue text-white py-24 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
                    {copy.contact.heroTitle}
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white/70 max-w-xl">
                    {copy.contact.heroBody}
                </p>
            </section>

            {/* Two-column content */}
            <section className="py-20 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                {/* Contact Form */}
                <div>
                    <h2 className="text-3xl font-bold text-hive-blue mb-8">
                        {copy.contact.formTitle}
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <FieldSet className=" bg-hive-blue p-5 rounded-xl">
                            <FieldGroup >
                                <Field>
                                    <FieldLabel
                                        htmlFor="name"
                                        className="text-xl text-gray-200">

                                        {copy.contact.fields.name}
                                    </FieldLabel>
                                    <Input
                                        id="name"
                                        name="name"
                                        autoComplete="off"
                                        required
                                        placeholder={copy.contact.fields.placeholders.name}
                                        className="focus-visible:ring-hive-blue/90  placeholder:text-black bg-gray-200"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel
                                        htmlFor="email"
                                        className="text-xl text-gray-200">

                                        {copy.contact.fields.email}
                                    </FieldLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="off"
                                        placeholder={copy.contact.fields.placeholders.email}
                                        className="focus-visible:ring-hive-blue/90  placeholder:text-black bg-gray-200"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel
                                        htmlFor="phone"
                                        className="text-xl text-gray-200">

                                        {copy.contact.fields.phone}
                                    </FieldLabel>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="phone"
                                        autoComplete="off"
                                        placeholder={copy.contact.fields.placeholders.phone}
                                        className="focus-visible:ring-hive-blue/90  placeholder:text-black bg-gray-200"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel
                                        htmlFor="comment"
                                        className="text-xl text-gray-200">

                                        {copy.contact.fields.comment}
                                    </FieldLabel>
                                    <Textarea
                                        id="comment"
                                        name="comment"
                                        required
                                        autoComplete="off"
                                        placeholder={copy.contact.fields.placeholders.comment}
                                        className="focus-visible:ring-hive-blue/90  placeholder:text-black bg-gray-200"
                                    />
                                </Field>
                                <Button
                                    type="submit"
                                    className="bg-hive-orange hover:bg-hive-yellow">

                                    {copy.contact.fields.submit}
                                </Button>
                            </FieldGroup>
                        </FieldSet>
                    </form>

                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-3xl font-bold text-hive-blue mb-8">
                        {copy.contact.infoTitle}
                    </h2>

                    <div className="flex flex-col gap-6">

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="w-11 h-11 rounded-full bg-hive-blue/10 flex items-center justify-center shrink-0">
                                <Mail className="text-hive-blue"/>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{copy.contact.info.email}</p>
                                <Link
                                    href="mailto:hello@thehivecc.org"
                                    className="text-gray-700 font-medium">

                                    hello@thehivecc.org
                                </Link>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="w-11 h-11 rounded-full bg-hive-orange/10 flex items-center justify-center shrink-0">
                                <Phone className="text-hive-orange"/>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{copy.contact.info.phone}</p>
                                <Link
                                    href="tel:+18038887725"
                                    className="text-gray-700 font-medium">

                                    (803) 888-7725
                                </Link>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <div className="w-11 h-11 rounded-full bg-hive-yellow/20 flex items-center justify-center shrink-0">
                                    <MapPin className="text-hive-yellow"/>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{copy.contact.info.address}</p>
                                <Link
                                    href="https://www.google.com/maps/place/The+Hive+Community+Circle/@34.044254,-81.0319489,17z/data=!3m1!4b1!4m6!3m5!1s0x88f8bb73a2107003:0x3018e4f7f747e058!8m2!3d34.044254!4d-81.029374!16s%2Fg%2F11h0mwc9st?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 font-medium">

                                    4704 Colonial Drive<br />Columbia, SC 29203
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Socials */}
                    <div className="flex items-start gap-4 py-4">
                        {/* Instagram */}
                        <Link href="https://www.instagram.com/thehivecc/">
                            <Image
                                src="/socials-images/Instagram_logo_2016.svg"
                                alt={copy.contact.socials.instagram}
                                width={50}
                                height={50}
                            />
                        </Link>

                        {/* Facebook */}
                        <Link href="https://www.facebook.com/hivecc/">
                            <Image
                                src="/socials-images/2023_Facebook_icon.svg"
                                alt={copy.contact.socials.facebook}
                                width={50}
                                height={50}
                            />
                        </Link>

                        {/* LinkedIn */}
                        <Link href="https://www.linkedin.com/company/thehivecc/">
                            <Image
                                src="/socials-images/LinkedIn_icon.svg"
                                alt={copy.contact.socials.linkedin}
                                width={50}
                                height={50}
                            />
                        </Link>

                        {/* Twitter */}
                        <Link href="https://x.com/thehive_cc">
                            <Image
                                src="/socials-images/X_logo_2023.svg"
                                alt={copy.contact.socials.x}
                                width={50}
                                height={50}
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
