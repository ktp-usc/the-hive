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

export default function Contact() {

    return (
        <main className="min-h-screen bg-white text-gray-800">

            {/* Hero */}
            <section className="flex flex-col items-center justify-center bg-hive-blue text-white py-24 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
                    Get in Touch
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white/70 max-w-xl">
                    We&apos;re here for you. Reach out and a member of our team will get back with you shortly.
                </p>
            </section>

            {/* Two-column content */}
            <section className="py-20 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                {/* Contact Form */}
                <div>
                    <h2 className="text-3xl font-bold text-hive-blue mb-8">
                        Send Us a Message
                    </h2>

                    <form>
                        <FieldSet className=" bg-hive-blue p-5 rounded-xl">
                            <FieldGroup >
                                <Field>
                                    <FieldLabel
                                        htmlFor="name"
                                        className="text-xl text-gray-200">

                                        Name
                                    </FieldLabel>
                                    <Input
                                        id="name"
                                        autoComplete="off"
                                        placeholder="Jane Doe"
                                        className="focus-visible:ring-hive-blue/90  placeholder:text-black bg-gray-200"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel
                                        htmlFor="email"
                                        className="text-xl text-gray-200">

                                        Email
                                    </FieldLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        autoComplete="off"
                                        placeholder="example@gmail.com"
                                        className="focus-visible:ring-hive-blue/90  placeholder:text-black bg-gray-200"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel
                                        htmlFor="phone"
                                        className="text-xl text-gray-200">

                                        Phone
                                    </FieldLabel>
                                    <Input
                                        id="phone"
                                        type="phone"
                                        autoComplete="off"
                                        placeholder="(XXX) XXX-XXXX"
                                        className="focus-visible:ring-hive-blue/90  placeholder:text-black bg-gray-200"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel
                                        htmlFor="comments"
                                        className="text-xl text-gray-200">

                                        Comments
                                    </FieldLabel>
                                    <Textarea
                                        id="comments"
                                        required
                                        autoComplete="off"
                                        placeholder="Enter message here"
                                        className="focus-visible:ring-hive-blue/90  placeholder:text-black bg-gray-200"
                                    />
                                </Field>
                                <Button
                                    type="submit"
                                    className="bg-hive-orange hover:bg-hive-yellow">

                                    Submit
                                </Button>
                            </FieldGroup>
                        </FieldSet>
                    </form>

                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-3xl font-bold text-hive-blue mb-8">
                        Contact Information
                    </h2>

                    <div className="flex flex-col gap-6">

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="w-11 h-11 rounded-full bg-hive-blue/10 flex items-center justify-center shrink-0">
                                <Mail className="text-hive-blue"/>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Email</p>
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
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Phone</p>
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
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Address</p>
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
                </div>

            </section>
        </main>
    );
}
