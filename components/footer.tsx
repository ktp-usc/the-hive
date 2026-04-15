"use client";

import Link from "next/link";
import { useMemo, type ReactNode } from "react";

import { useLanguage, useSiteCopy } from "@/components/language-provider";
import {
  isLikelyExternalHref,
  pickLabel,
  resolveFooterQuickLinks,
} from "@/lib/navbar-settings";
import type { NavbarSettingsData } from "@/sanity/queries/navbarSettings";

function FooterAnchor({
  href,
  openInNewTab,
  className,
  children,
}: {
  href: string;
  openInNewTab?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const external = isLikelyExternalHref(href);

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

const FALLBACK_EMAIL = "hello@thehivecc.org";
const FALLBACK_PHONE = "803-888-7725";
const FALLBACK_ADDRESS = "4704 Colonial Drive, Columbia, SC 29203";

export default function Footer({
  navSettings,
  contactEmail,
  contactPhone,
  contactAddress,
  tagline,
  brand,
  copyright,
  quickLinksHeading,
  contactHeading,
  emailLabel,
  phoneLabel,
  addressLabel,
}: {
  navSettings: NavbarSettingsData;
  contactEmail?: string | null;
  contactPhone?: string | null;
  contactAddress?: string | null;
  tagline?: string | null;
  brand?: string | null;
  copyright?: string | null;
  quickLinksHeading?: string | null;
  contactHeading?: string | null;
  emailLabel?: string | null;
  phoneLabel?: string | null;
  addressLabel?: string | null;
}) {
  const copy = useSiteCopy();
  const { language } = useLanguage();

  const quickLinks = useMemo(() => resolveFooterQuickLinks(navSettings), [navSettings]);

  const resolvedEmail = contactEmail ?? FALLBACK_EMAIL;
  const resolvedPhone = contactPhone ?? FALLBACK_PHONE;
  const resolvedPhoneHref = resolvedPhone.replace(/\D/g, "");
  const resolvedAddress = contactAddress ?? FALLBACK_ADDRESS;
  const resolvedTagline = tagline ?? copy.footer.tagline;
  const resolvedBrand = brand ?? copy.footer.brand;
  const resolvedCopyright = copyright ?? copy.footer.copyright;
  const resolvedQuickLinksHeading = quickLinksHeading ?? copy.footer.quickLinks;
  const resolvedContactHeading = contactHeading ?? copy.footer.contact;
  const resolvedEmailLabel = emailLabel ?? copy.footer.email;
  const resolvedPhoneLabel = phoneLabel ?? copy.footer.phone;
  const resolvedAddressLabel = addressLabel ?? copy.footer.address;

  return (
      <footer className="relative bg-hive-blue px-6 pb-8 pt-0 text-white">
          <div className="absolute inset-x-0 top-0 h-1 bg-hive-yellow" />
      <div className="mx-auto grid max-w-6xl gap-10 pt-16 md:grid-cols-3">
        <div>
          <h2 className="text-3xl font-bold">{resolvedBrand}</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
            {resolvedTagline}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white/90">{resolvedQuickLinksHeading}</h3>
          <div className="mt-4 grid gap-2">
            {quickLinks.map((link) => (
              <FooterAnchor
                key={link.linkKey}
                href={link.href}
                openInNewTab={link.openInNewTab}
                className="text-sm text-white/85 transition hover:text-white"
              >
                {pickLabel(link.label, language)}
              </FooterAnchor>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white/90">{resolvedContactHeading}</h3>
          <div className="mt-4 space-y-2 text-sm leading-7 text-white/85">
            <p>
              {resolvedEmailLabel}{" "}
              <a href={`mailto:${resolvedEmail}`} className="font-semibold text-white">
                {resolvedEmail}
              </a>
            </p>
            <p>
              {resolvedPhoneLabel}{" "}
              <a href={`tel:${resolvedPhoneHref}`} className="font-semibold text-white">
                {resolvedPhone}
              </a>
            </p>
            <p>{resolvedAddressLabel} {resolvedAddress}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/20 pt-4 text-center text-sm text-white/75">
        {resolvedCopyright}
      </div>
    </footer>
  );
}