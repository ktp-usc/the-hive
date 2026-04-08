"use client";

import Link from "next/link";

import { useSiteCopy } from "@/components/language-provider";

export default function Footer() {
  const copy = useSiteCopy();

  return (
    <footer className="bg-hive-blue pt-15">
      <section className="flex flex-row flex-wrap justify-center gap-20">
        <div className="mb-10 flex flex-col rounded-2xl p-4">
          <h1 className="text-lg font-bold text-gray-200">
            {copy.footer.quickLinks}
          </h1>
          <br />
          <Link href="/" className="py-0.5 text-gray-200">
            Home
          </Link>
          <Link href="/about" className="py-0.5 text-gray-200">
            {copy.footer.about}
          </Link>
          <Link href="/donations" className="py-0.5 text-gray-200">
            Impact the Hive
          </Link>
          <Link href="/about/our-partners" className="py-0.5 text-gray-200">
            {copy.donations.partnersTitle}
          </Link>
          <Link href="/support" className="py-0.5 text-gray-200">
            {copy.support.heroTitle}
          </Link>
          <Link href="/awareness" className="py-0.5 text-gray-200">
            {copy.nav.awareness}
          </Link>
          <Link href="/events" className="py-0.5 text-gray-200">
            Events
          </Link>
          <Link href="/contact" className="py-0.5 text-gray-200">
            {copy.footer.contact}
          </Link>
        </div>

        <div className="mb-10 flex flex-col rounded-2xl p-4">
          <h1 className="text-lg font-bold text-gray-200">
            {copy.footer.contact}
          </h1>
          <br />
          <p className="py-0.5 text-gray-200">
            <b>{copy.footer.email}</b>{" "}
            <a href="mailto:hello@thehivecc.org">hello@thehivecc.org</a>
          </p>
          <p className="py-0.5 text-gray-200">
            <b>{copy.footer.phone}</b>{" "}
            <a href="tel:8038887725">803-888-7725</a>
          </p>
          <p className="py-0.5 text-gray-200">
            <b>{copy.footer.address}</b> 4704 Colonial Drive Columbia, SC
          </p>
        </div>

        <div className="mb-10 flex flex-col rounded-2xl p-4">
          <h1 className="font-bold text-gray-200">{copy.footer.supportMission}</h1>
          <br />
          <a
            href="https://thehivecc.networkforgood.com/projects/204053-what-is-hope"
            target="_blank"
            rel="noopener noreferrer"
            className="py-0.5 text-gray-200"
          >
            {copy.footer.donationLink}
          </a>
        </div>
      </section>

      <div className="mx-20 border-t border-gray-200" />
      <div className="flex flex-col rounded-2xl px-4 pb-10 pt-5 text-center">
        <p className="text-gray-200">{copy.footer.copyright}</p>
      </div>
    </footer>
  );
}
