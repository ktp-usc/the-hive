"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type LandingPopupProps = {
    enabled: boolean;
    imageUrl: string | null;
    ctaLabel: string | null;
    ctaHref: string | null;
};

export default function LandingPopup({
    enabled,
    imageUrl,
    ctaLabel,
    ctaHref,
}: LandingPopupProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!enabled) return;
        // Only show once per browser session
        const dismissed = sessionStorage.getItem("hive-popup-dismissed");
        if (!dismissed) setVisible(true);
    }, [enabled]);

    const dismiss = () => {
        sessionStorage.setItem("hive-popup-dismissed", "1");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={dismiss}
                aria-hidden="true"
            />

            {/* Panel */}
            <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
                {/* Close button */}
                <button
                    type="button"
                    onClick={dismiss}
                    aria-label="Close popup"
                    className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60"
                >
                    <X className="h-4 w-4" />
                </button>

                {/* Image */}
                {imageUrl && (
                    <div className="relative w-full">
                        <Image
                            src={imageUrl}
                            alt={ctaLabel ?? "Promotional image"}
                            width={600}
                            height={680}
                            className="h-auto w-full object-cover"
                            priority
                        />
                    </div>
                )}

                {/* CTA */}
                {ctaHref && ctaLabel && (
                    <div className="p-5">
                        <a
                            href={ctaHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={dismiss}
                            className="block w-full rounded-full bg-hive-orange py-4 text-center text-lg font-bold text-white transition hover:bg-hive-orange/90"
                        >
                            {ctaLabel}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
