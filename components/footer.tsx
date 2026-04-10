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

export default function Footer({ navSettings }: { navSettings: NavbarSettingsData }) {
  const copy = useSiteCopy();
  const { language } = useLanguage();

  const quickLinks = useMemo(() => resolveFooterQuickLinks(navSettings), [navSettings]);

  return (
    <footer className="bg-hive-blue px-6 pb-8 pt-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-3xl font-bold">{copy.footer.brand}</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/80">{copy.footer.tagline}</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white/90">{copy.footer.quickLinks}</h3>
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
          <h3 className="text-lg font-bold text-white/90">{copy.footer.contact}</h3>
          <div className="mt-4 space-y-2 text-sm leading-7 text-white/85">
            <p>
              {copy.footer.email}{" "}
              <a href="mailto:hello@thehivecc.org" className="font-semibold text-white">
                hello@thehivecc.org
              </a>
            </p>
            <p>
              {copy.footer.phone}{" "}
              <a href="tel:8038887725" className="font-semibold text-white">
                803-888-7725
              </a>
            </p>
            <p>{copy.footer.address} 4704 Colonial Drive, Columbia, SC 29203</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/20 pt-4 text-center text-sm text-white/75">
        {copy.footer.copyright}
      </div>
    </footer>
  );
}
