import type { LanguageCode } from "@/lib/site-copy";
import { getSiteCopy } from "@/lib/site-copy";
import type {
  NavbarSettingsData,
  NavbarSettingsFooterLink,
  NavbarSettingsItem,
} from "@/sanity/queries/navbarSettings";

export const DEFAULT_DONATE_URL =
  "https://thehivecc.networkforgood.com/projects/204053-what-is-hope";

export type LocalizedLabel = Record<LanguageCode, string>;

export type NavbarDropdownEntry = {
  itemKey: string;
  href: string;
  openInNewTab: boolean;
  label: LocalizedLabel;
};

export type NavbarRow =
  | {
      rowKey: string;
      kind: "link";
      href: string;
      openInNewTab: boolean;
      label: LocalizedLabel;
    }
  | {
      rowKey: string;
      kind: "dropdown";
      label: LocalizedLabel;
      items: NavbarDropdownEntry[];
    };

export type NavbarDonate = {
  url: string;
  openInNewTab: boolean;
  label: LocalizedLabel;
};

export type FooterQuickLink = {
  linkKey: string;
  href: string;
  openInNewTab: boolean;
  label: LocalizedLabel;
};

function localizedLabel(
  labelEn?: string | null,
  labelEsMx?: string | null
): LocalizedLabel | null {
  const en = (labelEn ?? "").trim();
  const es = (labelEsMx ?? "").trim();
  if (!en && !es) return null;
  return { en: en || es, "es-MX": es || en };
}

export function defaultNavbarRows(): NavbarRow[] {
  const en = getSiteCopy("en");
  const es = getSiteCopy("es-MX");

  const L = (keyEn: string, keyEs: string): LocalizedLabel => ({
    en: keyEn,
    "es-MX": keyEs,
  });

  return [
    {
      rowKey: "default-home",
      kind: "link",
      href: "/",
      openInNewTab: false,
      label: L(en.nav.home, es.nav.home),
    },
    {
      rowKey: "default-about",
      kind: "dropdown",
      label: L(en.nav.about, es.nav.about),
      items: [
        {
          itemKey: "default-about-us",
          href: "/about",
          openInNewTab: false,
          label: L(en.nav.aboutUs, es.nav.aboutUs),
        },
        {
          itemKey: "default-impact",
          href: "/donations",
          openInNewTab: false,
          label: L(en.nav.impact, es.nav.impact),
        },
        {
          itemKey: "default-partners",
          href: "/about/our-partners",
          openInNewTab: false,
          label: L(en.nav.partners, es.nav.partners),
        },
      ],
    },
    {
      rowKey: "default-support",
      kind: "dropdown",
      label: L(en.nav.support, es.nav.support),
      items: [
        {
          itemKey: "default-support-services",
          href: "/support",
          openInNewTab: false,
          label: L(en.nav.supportServices, es.nav.supportServices),
        },
        {
          itemKey: "default-awareness",
          href: "/awareness",
          openInNewTab: false,
          label: L(en.nav.prevention, es.nav.prevention),
        },
      ],
    },
    {
      rowKey: "default-events",
      kind: "link",
      href: "/events",
      openInNewTab: false,
      label: L(en.nav.events, es.nav.events),
    },
    {
      rowKey: "default-contact",
      kind: "link",
      href: "/contact",
      openInNewTab: false,
      label: L(en.nav.contact, es.nav.contact),
    },
  ];
}

function defaultDonateLabels(): LocalizedLabel {
  const en = getSiteCopy("en");
  const es = getSiteCopy("es-MX");
  return { en: en.nav.donate, "es-MX": es.nav.donate };
}

export function resolveNavbarDonate(navSettings: NavbarSettingsData): NavbarDonate {
  const fallback = defaultDonateLabels();
  const d = navSettings?.donate;
  const url = (d?.url ?? "").trim();

  if (url) {
    return {
      url,
      openInNewTab: d?.openInNewTab !== false,
      label: {
        en: (d?.labelEn ?? "").trim() || fallback.en,
        "es-MX": (d?.labelEsMx ?? "").trim() || fallback["es-MX"],
      },
    };
  }

  return {
    url: DEFAULT_DONATE_URL,
    openInNewTab: true,
    label: fallback,
  };
}

export function rowsFromSanity(items: NavbarSettingsItem[] | null | undefined): NavbarRow[] | null {
  if (!items?.length) return null;

  const rows: NavbarRow[] = [];

  for (let i = 0; i < items.length; i++) {
    const raw = items[i];
    const rowKey = raw._key ?? `nav-${i}`;

    if (raw._type === "navLink") {
      const href = (raw.href ?? "").trim();
      const label = localizedLabel(raw.labelEn, raw.labelEsMx);
      if (!href || !label) continue;
      rows.push({
        rowKey,
        kind: "link",
        href,
        openInNewTab: Boolean(raw.openInNewTab),
        label,
      });
      continue;
    }

    if (raw._type === "navDropdown") {
      const label = localizedLabel(raw.labelEn, raw.labelEsMx);
      if (!label) continue;

      const entries: NavbarDropdownEntry[] = [];
      const children = raw.items ?? [];
      for (let j = 0; j < children.length; j++) {
        const c = children[j];
        const href = (c.href ?? "").trim();
        const childLabel = localizedLabel(c.labelEn, c.labelEsMx);
        if (!href || !childLabel) continue;
        entries.push({
          itemKey: c._key ?? `${rowKey}-${j}`,
          href,
          openInNewTab: Boolean(c.openInNewTab),
          label: childLabel,
        });
      }

      if (entries.length === 0) continue;

      rows.push({
        rowKey,
        kind: "dropdown",
        label,
        items: entries,
      });
    }
  }

  return rows.length ? rows : null;
}

export function resolveNavbarRows(navSettings: NavbarSettingsData): NavbarRow[] {
  const fromCms = rowsFromSanity(navSettings?.items ?? null);
  return fromCms ?? defaultNavbarRows();
}

export function defaultFooterQuickLinks(): FooterQuickLink[] {
  const en = getSiteCopy("en");
  const es = getSiteCopy("es-MX");

  const L = (keyEn: string, keyEs: string): LocalizedLabel => ({
    en: keyEn,
    "es-MX": keyEs,
  });

  return [
    {
      linkKey: "default-footer-home",
      href: "/",
      openInNewTab: false,
      label: L(en.footer.home, es.footer.home),
    },
    {
      linkKey: "default-footer-about",
      href: "/about",
      openInNewTab: false,
      label: L(en.footer.about, es.footer.about),
    },
    {
      linkKey: "default-footer-impact",
      href: "/donations",
      openInNewTab: false,
      label: L(en.footer.impact, es.footer.impact),
    },
    {
      linkKey: "default-footer-partners",
      href: "/about/our-partners",
      openInNewTab: false,
      label: L(en.footer.partners, es.footer.partners),
    },
    {
      linkKey: "default-footer-support",
      href: "/support",
      openInNewTab: false,
      label: L(en.footer.support, es.footer.support),
    },
    {
      linkKey: "default-footer-awareness",
      href: "/awareness",
      openInNewTab: false,
      label: L(en.footer.awareness, es.footer.awareness),
    },
    {
      linkKey: "default-footer-events",
      href: "/events",
      openInNewTab: false,
      label: L(en.footer.events, es.footer.events),
    },
    {
      linkKey: "default-footer-contact",
      href: "/contact",
      openInNewTab: false,
      label: L(en.footer.contact, es.footer.contact),
    },
  ];
}

export function footerLinksFromSanity(
  items: NavbarSettingsFooterLink[] | null | undefined
): FooterQuickLink[] | null {
  if (!items?.length) return null;

  const out: FooterQuickLink[] = [];
  for (let i = 0; i < items.length; i++) {
    const raw = items[i];
    const href = (raw.href ?? "").trim();
    const label = localizedLabel(raw.labelEn, raw.labelEsMx);
    if (!href || !label) continue;
    out.push({
      linkKey: raw._key ?? `footer-${i}`,
      href,
      openInNewTab: Boolean(raw.openInNewTab),
      label,
    });
  }

  return out.length ? out : null;
}

export function resolveFooterQuickLinks(navSettings: NavbarSettingsData): FooterQuickLink[] {
  return footerLinksFromSanity(navSettings?.footerQuickLinks ?? null) ?? defaultFooterQuickLinks();
}

export function pickLabel(label: LocalizedLabel, language: LanguageCode): string {
  return label[language] || label.en;
}

export function isLikelyExternalHref(href: string): boolean {
  return (
    /^https?:\/\//i.test(href) ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("//")
  );
}
