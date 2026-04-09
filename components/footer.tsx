"use client";

import Link from "next/link";
import { useSiteCopy } from "@/components/language-provider";

export default function Footer() {
  const copy = useSiteCopy();

  const quickLinks = [
    { label: copy.footer.home, href: "/" },
    { label: copy.footer.about, href: "/about" },
    { label: copy.footer.impact, href: "/donations" },
    { label: copy.footer.partners, href: "/about/our-partners" },
    { label: copy.footer.support, href: "/support" },
    { label: copy.footer.awareness, href: "/awareness" },
    { label: copy.footer.events, href: "/events" },
    { label: copy.footer.contactLink, href: "/contact" },
  ];

  return (
    <footer className="bg-hive-blue px-6 pb-8 pt-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-3xl font-bold">{copy.footer.brand}</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
            {copy.footer.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white/90">
            {copy.footer.quickLinks}
          </h3>
          <div className="mt-4 grid gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/85 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white/90">
            {copy.footer.contact}
          </h3>
          <div className="mt-4 space-y-2 text-sm leading-7 text-white/85">
            <p>
              {copy.footer.emailLabel}{" "}
              <a
                href="mailto:hello@thehivecc.org"
                className="font-semibold text-white"
              >
                hello@thehivecc.org
              </a>
            </p>
            <p>
              {copy.footer.phoneLabel}{" "}
              <a href="tel:8038887725" className="font-semibold text-white">
                803-888-7725
              </a>
            </p>
            <p>
              {copy.footer.addressLabel} 4704 Colonial Drive, Columbia, SC
              29203
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/20 pt-4 text-center text-sm text-white/75">
        {copy.footer.copyright}
      </div>
    </footer>
  );
}