"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DropdownItem = {
    label: string;
    href: string;
};

type NavItem =
    | { label: string; href: string; dropdown?: never }
    | { label: string; href?: never; dropdown: DropdownItem[] };

const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
        label: "About",
        dropdown: [
            { label: "About Us", href: "/about" },
            { label: "Impact the Hive", href: "/donations" },
            { label: "Our Partners", href: "/about/our-partners" },
        ],
    },
    {
        label: "Support",
        dropdown: [
            { label: "Support Services", href: "/support" },
            { label: "Prevention & Awareness", href: "/awareness" },
        ],
    },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
];

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
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [pinnedMenu, setPinnedMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLElement | null>(null);

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
            className="fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-white shadow-sm"
        >
            <nav className="flex h-16 w-full items-center justify-between px-4 sm:px-6">
                <Link href="/" onClick={closeMenus}>
                    <Image
                        src="/the-hive-logo.png"
                        alt="The Hive"
                        width={120}
                        height={40}
                        className="h-auto w-[120px] object-contain"
                        priority
                    />
                </Link>

                <div className="hidden items-center gap-0.5 lg:ml-auto lg:flex">
                    {navItems.map((item) => {
                        if (item.dropdown) {
                            const active = item.dropdown.some((entry) => pathname === entry.href);
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
                                            "inline-flex items-center gap-0.5 rounded-md px-1.5 py-2 text-md font-medium transition",
                                            active
                                                ? "text-hive-blue"
                                                : "text-gray-600 hover:text-hive-blue"
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
                                            className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")}
                                        />
                                    </button>

                                    {expanded && (
                                        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                                            <NavDropdown
                                                items={item.dropdown}
                                                pathname={pathname}
                                                onNavigate={closeMenus}
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        const active = pathname === item.href;
                        const isEvents = item.label === "Events";
                        const isContact = item.label === "Contact";

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeMenus}
                                className={cn(
                                    "rounded-md py-2 text-md font-medium transition",
                                    isEvents && "pr-1",
                                    isContact && "pl-1",
                                    !isEvents && !isContact && "px-3.5",
                                    active
                                        ? "text-hive-blue"
                                        : "text-gray-600 hover:text-hive-blue"
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
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
                            Donate
                        </a>
                    </Button>
                </div>

                <button
                    type="button"
                    aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/8 text-gray-700 lg:hidden"
                    onClick={() => setMobileOpen((value) => !value)}
                >
                    {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </nav>

            {mobileOpen && (
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
                                                            "block rounded-md px-3 py-2 text-md font-medium transition",
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
                                        "block rounded-md px-3 py-2 text-md font-medium transition",
                                        active
                                            ? "bg-hive-blue text-white"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-hive-blue"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}

                        <Button
                            asChild
                            className="mt-2 w-full rounded-full bg-hive-orange text-white hover:bg-hive-orange/90"
                        >
                            <a
                                href="https://thehivecc.networkforgood.com/projects/204053-what-is-hope"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Donate
                            </a>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}