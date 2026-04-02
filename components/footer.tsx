"use client";

import Link from "next/link";
import { useSiteCopy } from "@/components/language-provider";

export default function Footer() {
    const copy = useSiteCopy();

    return (
        <footer className="bg-hive-blue pt-15">

            {/*  div containing the main sections of the footer */}
            <section className="flex flex-row flex-wrap justify-center gap-20">

                {/* Hive Image */}
                {/*<Image src={""} alt={"Hive Community Circle Logo"} width={100} height={100}/>*/}

                {/* Quick Links Section */}
                <div className="flex flex-col p-4 rounded-2xl mb-10">
                    <h1 className="font-bold text-lg text-gray-200">
                        {copy.footer.quickLinks}
                    </h1>
                    <br/>
                    <Link href="#" className="py-0.5 text-gray-200">
                        {copy.footer.about}
                    </Link>
                    <Link href="#" className="py-0.5 text-gray-200">
                        {copy.footer.awareness}
                    </Link>
                    <Link href="#" className="py-0.5 text-gray-200">
                        {copy.footer.support}
                    </Link>
                    <Link href="/contact" className="py-0.5 text-gray-200">
                        {copy.footer.contact}
                    </Link>
                    <Link href="#" className="py-0.5 text-gray-200">
                        {copy.footer.keepUpdated}
                    </Link>
                </div>

                {/* Contact Us Section */}
                <div className="flex flex-col p-4 rounded-2xl mb-10">
                    <h1 className="font-bold text-lg text-gray-200">
                        {copy.footer.contact}
                    </h1>
                    <br/>
                    <p className="py-0.5 text-gray-200">
                        <b>{copy.footer.email}</b> <a href="mailto:hello@thehivecc.org">hello@thehivecc.org</a>
                    </p>
                    <p className="py-0.5 text-gray-200">
                        <b>{copy.footer.phone}</b> <a href="tel:8038887725">803-888-7725</a>
                    </p>
                    <p className="py-0.5 text-gray-200">
                        <b>{copy.footer.address}</b> 4704 Colonial Drive Columbia, SC
                    </p>
                </div>

                {/* Donation Section */}
                <div className="flex flex-col p-4 rounded-2xl mb-10">
                    <h1 className="font-bold text-gray-200">
                        {copy.footer.supportMission}
                    </h1>
                    <br/>
                    <Link href="#" className="py-0.5 text-gray-200">
                        {copy.footer.donationLink}
                    </Link>
                </div>
            </section>

            <div className="border-t border-gray-200 mx-20"/>
            {/* Copyright */}
            <div className="flex flex-col p-4 rounded-2xl pb-10 pt-5 text-center">
                <p className="text-gray-200">
                    {copy.footer.copyright}
                </p>
            </div>
        </footer>
    )
}
