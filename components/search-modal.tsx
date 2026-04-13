"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";

import { searchPages, type SearchEntry } from "@/lib/search-index";
import { cn } from "@/lib/utils";

export function SearchToolbarButton({
    onClick,
    className,
}: {
    onClick: () => void;
    className?: string;
}) {
    return (
        <button
            type="button"
            aria-label="Search"
            onClick={onClick}
            className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-md text-gray-500 transition hover:bg-gray-100 hover:text-hive-blue",
                className,
            )}
        >
            <Search className="h-4 w-4" />
        </button>
    );
}

type SearchModalProps = {
    /** Controlled open state (use with `onOpenChange` and external triggers). */
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** Omit the built-in icon when using `SearchToolbarButton` elsewhere. */
    hideTrigger?: boolean;
};

export default function SearchModal({
    open: controlledOpen,
    onOpenChange,
    hideTrigger = false,
}: SearchModalProps = {}) {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const controlled = controlledOpen !== undefined && onOpenChange !== undefined;
    const open = controlled ? controlledOpen : uncontrolledOpen;

    const setOpen = (next: boolean) => {
        if (controlled) {
            onOpenChange(next);
        } else {
            setUncontrolledOpen(next);
        }
    };
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchEntry[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    // Open with Cmd/Ctrl+K
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                if (controlled) {
                    onOpenChange?.(!open);
                } else {
                    setUncontrolledOpen((v) => !v);
                }
            }
            if (e.key === "Escape") {
                if (controlled) {
                    onOpenChange?.(false);
                } else {
                    setUncontrolledOpen(false);
                }
            }
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [controlled, open, onOpenChange]);

    // Focus input when opened
    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 50);
            setQuery("");
            setResults([]);
            setActiveIndex(0);
        }
    }, [open]);

    // Search as you type
    useEffect(() => {
        setResults(searchPages(query));
        setActiveIndex(0);
    }, [query]);

    function navigate(href: string) {
        setOpen(false);
        router.push(href);
    }

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((i) => Math.min(i + 1, results.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter" && results[activeIndex]) {
            navigate(results[activeIndex].href);
        }
    }

    return (
        <>
            {!hideTrigger ? <SearchToolbarButton onClick={() => setOpen(true)} /> : null}

            {/* Overlay */}
            {open ? (
                <div
                    className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 px-4 pt-24"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Input row */}
                        <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
                            <Search className="h-5 w-5 shrink-0 text-gray-400" />
                            <input
                                ref={inputRef}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Search pages..."
                                className="flex-1 bg-transparent text-base text-gray-800 placeholder-gray-400 outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-md p-1 text-gray-400 hover:text-gray-600"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Results */}
                        {results.length > 0 ? (
                            <ul className="max-h-80 overflow-y-auto py-2">
                                {results.map((result, i) => (
                                    <li key={result.href}>
                                        <button
                                            type="button"
                                            onClick={() => navigate(result.href)}
                                            onMouseEnter={() => setActiveIndex(i)}
                                            className={`flex w-full items-center gap-4 px-4 py-3 text-left transition ${
                                                i === activeIndex
                                                    ? "bg-hive-blue/8 text-hive-blue"
                                                    : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                        >
                                            <div className="flex-1 min-w-0">
                                                <p className="font-semibold">{result.title}</p>
                                                <p className="truncate text-sm text-gray-500">
                                                    {result.description}
                                                </p>
                                            </div>
                                            <ArrowRight className="h-4 w-4 shrink-0 opacity-50" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : query.length > 0 ? (
                            <p className="px-4 py-6 text-center text-sm text-gray-400">
                                No pages found for &ldquo;{query}&rdquo;
                            </p>
                        ) : (
                            <p className="px-4 py-6 text-center text-sm text-gray-400">
                                Start typing to search pages...
                            </p>
                        )}

                        {/* Footer hint */}
                        <div className="flex items-center gap-3 border-t border-gray-100 px-4 py-2 text-xs text-gray-400">
                            <span><kbd className="rounded border border-gray-200 px-1 py-0.5 font-mono">↑↓</kbd> navigate</span>
                            <span><kbd className="rounded border border-gray-200 px-1 py-0.5 font-mono">↵</kbd> go</span>
                            <span><kbd className="rounded border border-gray-200 px-1 py-0.5 font-mono">esc</kbd> close</span>
                            <span className="ml-auto"><kbd className="rounded border border-gray-200 px-1 py-0.5 font-mono">⌘K</kbd> to open</span>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
