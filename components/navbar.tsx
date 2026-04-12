"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import LanguageToggle from "@/components/language-toggle";
import SearchModal from "@/components/search-modal";
import { useLanguage, useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import {
  isLikelyExternalHref,
  pickLabel,
  resolveNavbarDonate,
  resolveNavbarRows,
  type LocalizedLabel,
  type NavbarDonate,
  type NavbarDropdownEntry,
} from "@/lib/navbar-settings";
import type { LanguageCode } from "@/lib/site-copy";
import { cn } from "@/lib/utils";
import type { NavbarSettingsData } from "@/sanity/queries/navbarSettings";

function NavAnchor({
  href,
  openInNewTab,
  className,
  onClick,
  children,
}: {
  href: string;
  openInNewTab?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const external = isLikelyExternalHref(href);

  if (external) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function NavDropdown({
  items,
  pathname,
  language,
  onNavigate,
}: {
  items: NavbarDropdownEntry[];
  pathname: string;
  language: LanguageCode;
  onNavigate: () => void;
}) {
  return (
    <ul className="min-w-52 rounded-lg border border-black/8 bg-white py-1 shadow-lg">
      {items.map((item) => {
        const active = pathname === item.href;
        const label = pickLabel(item.label, language);

        return (
          <li key={item.itemKey}>
            <NavAnchor
              href={item.href}
              openInNewTab={item.openInNewTab}
              onClick={onNavigate}
              className={cn(
                "block px-4 py-2 text-sm font-medium transition",
                active
                  ? "bg-hive-blue text-white"
                  : "text-gray-700 hover:bg-gray-50 hover:text-hive-blue",
              )}
            >
              {label}
            </NavAnchor>
          </li>
        );
      })}
    </ul>
  );
}

function DonateButton({
  donate,
  language,
  className,
}: {
  donate: NavbarDonate;
  language: LanguageCode;
  className?: string;
}) {
  const label = pickLabel(donate.label, language);

  return (
    <Button asChild className={className}>
      <a
        href={donate.url}
        target={donate.openInNewTab ? "_blank" : undefined}
        rel={donate.openInNewTab ? "noopener noreferrer" : undefined}
      >
        {label}
      </a>
    </Button>
  );
}

export default function Navbar({ navSettings }: { navSettings?: NavbarSettingsData }) {
  const pathname = usePathname();
  const copy = useSiteCopy();
  const { language } = useLanguage();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [pinnedMenu, setPinnedMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const rows = useMemo(() => resolveNavbarRows(navSettings ?? null), [navSettings]);
  const donate = useMemo(() => resolveNavbarDonate(navSettings ?? null), [navSettings]);

  const closeMenus = () => {
    setOpenMenu(null);
    setPinnedMenu(null);
    setMobileOpen(false);
  };

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
        setPinnedMenu(null);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const rowLabel = (label: LocalizedLabel) => pickLabel(label, language);

  return (
    <header
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-white shadow-sm"
    >
      <nav className="flex h-16 w-full items-center justify-between px-4 sm:px-6">
        <Link href="/" onClick={closeMenus}>
          <Image
            src="/the-hive-logo.png"
            alt={copy.nav.logoAlt}
            width={120}
            height={40}
            className="h-auto w-[120px] object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-0.5 lg:ml-auto lg:flex">
          {rows.map((item) => {
            if (item.kind === "dropdown") {
              const active = item.items.some((entry) => pathname === entry.href);
              const expanded = openMenu === item.rowKey;
              const label = rowLabel(item.label);

              return (
                <div
                  key={item.rowKey}
                  className="relative"
                  onMouseEnter={() => {
                    if (!pinnedMenu) setOpenMenu(item.rowKey);
                  }}
                  onMouseLeave={() => {
                    if (!pinnedMenu) setOpenMenu(null);
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={expanded}
                    className={cn(
                      "inline-flex items-center gap-0.5 rounded-md px-1.5 py-2 text-sm font-medium transition",
                      active ? "text-hive-blue" : "text-gray-600 hover:text-hive-blue",
                    )}
                    onClick={() =>
                      setPinnedMenu((current) => {
                        const nextValue = current === item.rowKey ? null : item.rowKey;
                        setOpenMenu(nextValue);
                        return nextValue;
                      })
                    }
                  >
                    {label}
                    <ChevronDown
                      className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")}
                    />
                  </button>

                  {expanded ? (
                    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2">
                      <div className="mt-2">
                        <NavDropdown
                          items={item.items}
                          pathname={pathname}
                          language={language}
                          onNavigate={closeMenus}
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            const active = pathname === item.href;
            const label = rowLabel(item.label);

            return (
              <NavAnchor
                key={item.rowKey}
                href={item.href}
                openInNewTab={item.openInNewTab}
                onClick={closeMenus}
                className={cn(
                  "rounded-md px-3.5 py-2 text-sm font-medium transition",
                  active ? "text-hive-blue" : "text-gray-600 hover:text-hive-blue",
                )}
              >
                {label}
              </NavAnchor>
            );
          })}

          <div className="ml-2 flex items-center gap-1">
            <SearchModal />
            <LanguageToggle />
          </div>
        </div>

        <div className="hidden lg:block lg:ml-4">
          <DonateButton
            donate={donate}
            language={language}
            className="rounded-full bg-hive-orange px-5 py-2 text-sm font-semibold text-white hover:bg-hive-orange/90"
          />
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? copy.nav.closeMenu : copy.nav.openMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/8 text-gray-700 lg:hidden"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-black/8 bg-white px-4 py-4 lg:hidden sm:px-6">
          <div className="space-y-2">
            {rows.map((item) => {
              if (item.kind === "dropdown") {
                const groupLabel = rowLabel(item.label);

                return (
                  <div key={item.rowKey} className="rounded-lg bg-gray-50 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {groupLabel}
                    </p>
                    <div className="mt-2 space-y-1">
                      {item.items.map((entry) => {
                        const active = pathname === entry.href;
                        const label = pickLabel(entry.label, language);

                        return (
                          <NavAnchor
                            key={entry.itemKey}
                            href={entry.href}
                            openInNewTab={entry.openInNewTab}
                            onClick={closeMenus}
                            className={cn(
                              "block rounded-md px-3 py-2 text-sm font-medium transition",
                              active
                                ? "bg-hive-blue text-white"
                                : "text-gray-600 hover:bg-white hover:text-hive-blue",
                            )}
                          >
                            {label}
                          </NavAnchor>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              const active = pathname === item.href;
              const label = rowLabel(item.label);

              return (
                <NavAnchor
                  key={item.rowKey}
                  href={item.href}
                  openInNewTab={item.openInNewTab}
                  onClick={closeMenus}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium transition",
                    active
                      ? "bg-hive-blue text-white"
                      : "text-gray-600 hover:bg-gray-50 hover:text-hive-blue",
                  )}
                >
                  {label}
                </NavAnchor>
              );
            })}

            <div className="pt-2">
              <LanguageToggle />
            </div>

            <DonateButton
              donate={donate}
              language={language}
              className="mt-2 w-full rounded-full bg-hive-orange text-white hover:bg-hive-orange/90"
            />
          </div>
        </div>
      ) : null}
    </header>
  );
}