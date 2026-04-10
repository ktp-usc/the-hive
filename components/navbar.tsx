"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import LanguageToggle from "@/components/language-toggle";
import SearchModal from "@/components/search-modal";
import { useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DropdownItem = {
    label: string;
    href: string;
};

type NavItem =
    | { label: string; href: string; dropdown?: never }
    | { label: string; href?: never; dropdown: DropdownItem[] };

function NavDropdown({
                         items,
                         pathname,
                         onNavigate,
                     }: {
    items: DropdownItem[];
    pathname: string;
    onNavigate: () => void;
}) {
    return (
        <ul className="min-w-52 rounded-lg border border-black/8 bg-white py-1 shadow-lg">
            {items.map((item) => {
                const active = pathname === item.href;

                return (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            onClick={onNavigate}
                            className={cn(
                                "block px-4 py-2 text-sm font-medium transition",
                                active
                                    ? "bg-hive-blue text-white"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-hive-blue"
                            )}
                        >
                            {item.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default function Navbar() {
    const pathname = usePathname();
    const copy = useSiteCopy();
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [pinnedMenu, setPinnedMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLElement | null>(null);

    const navItems: NavItem[] = [
        { label: copy.nav.home, href: "/" },
        {
            label: copy.nav.about,
            dropdown: [
                { label: copy.nav.aboutUs, href: "/about" },
                { label: copy.nav.ourImpact, href: "/about/our-impact" },
                { label: copy.nav.impact, href: "/donations" },
                { label: copy.nav.partners, href: "/about/our-partners" },
            ],
        },
        {
            label: copy.nav.support,
            dropdown: [
                { label: copy.nav.supportServices, href: "/support" },
                { label: copy.nav.prevention, href: "/awareness" },
            ],
        },
        { label: copy.nav.events, href: "/events" },
        { label: copy.nav.contact, href: "/contact" },
    ];

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

    return (
        <header
            ref={navRef}
            className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm"
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
                    {navItems.map((item) => {
                        if (item.dropdown) {
                            const active = item.dropdown.some(
                                (entry) => pathname === entry.href
                            );
                            const expanded = openMenu === item.label;

                            return (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => {
                                        if (!pinnedMenu) setOpenMenu(item.label);
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
                                            active ? "text-hive-blue" : "text-gray-600 hover:text-hive-blue"
                                        )}
                                        onClick={() =>
                                            setPinnedMenu((current) => {
                                                const nextValue = current === item.label ? null : item.label;
                                                setOpenMenu(nextValue);
                                                return nextValue;
                                            })
                                        }
                                    >
                                        {item.label}
                                        <ChevronDown
                                            className={cn(
                                                "h-4 w-4 transition-transform",
                                                expanded && "rotate-180"
                                            )}
                                        />
                                    </button>

                                    {expanded ? (
                                        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2">
                                            <div className="mt-2">
                                                <NavDropdown
                                                    items={item.dropdown ?? []}
                                                    pathname={pathname}
                                                    onNavigate={closeMenus}
                                                />
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            );
                        }

                        const active = pathname === item.href;
                        const isEvents = item.href === "/events";
                        const isContact = item.href === "/contact";

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeMenus}
                                className={cn(
                                    "rounded-md py-2 text-sm font-medium transition",
                                    isEvents && "pr-1",
                                    isContact && "pl-1",
                                    !isEvents && !isContact && "px-3.5",
                                    active ? "text-hive-blue" : "text-gray-600 hover:text-hive-blue"
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}

                    <div className="ml-2 flex items-center gap-1">
                        <SearchModal />
                        <LanguageToggle />
                    </div>
                </div>

                <div className="hidden lg:block lg:ml-4">
                    <Button
                        asChild
                        className="rounded-full bg-hive-orange px-5 py-2 text-sm font-semibold text-white hover:bg-hive-orange/90"
                    >
                        <a
                            href="https://thehivecc.networkforgood.com/projects/204053-what-is-hope"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {copy.nav.donate}
                        </a>
                    </Button>
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
                        {navItems.map((item) => {
                            if (item.dropdown) {
                                return (
                                    <div key={item.label} className="rounded-lg bg-gray-50 p-3">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                            {item.label}
                                        </p>
                                        <div className="mt-2 space-y-1">
                                            {item.dropdown.map((entry) => {
                                                const active = pathname === entry.href;

                                                return (
                                                    <Link
                                                        key={entry.href}
                                                        href={entry.href}
                                                        onClick={closeMenus}
                                                        className={cn(
                                                            "block rounded-md px-3 py-2 text-sm font-medium transition",
                                                            active
                                                                ? "bg-hive-blue text-white"
                                                                : "text-gray-600 hover:bg-white hover:text-hive-blue"
                                                        )}
                                                    >
                                                        {entry.label}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            }

                            const active = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenus}
                                    className={cn(
                                        "block rounded-md px-3 py-2 text-sm font-medium transition",
                                        active
                                            ? "bg-hive-blue text-white"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-hive-blue"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}

                        <div className="pt-2">
                            <LanguageToggle />
                        </div>

                        <Button
                            asChild
                            className="mt-2 w-full rounded-full bg-hive-orange text-white hover:bg-hive-orange/90"
                        >
                            <a
                                href="https://thehivecc.networkforgood.com/projects/204053-what-is-hope"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {copy.nav.donate}
                            </a>
                        </Button>
                    </div>
                </div>
            ) : null}
            <div className="h-1 w-full" style={{ backgroundColor: "#f3c506" }} />
        </header>
    );
}
