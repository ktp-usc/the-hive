"use client";

import * as React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Dialog } from "radix-ui";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type LandingPopupModalProps = {
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  ctaLabel?: string;
  ctaHref?: string;
};

export function LandingPopupModal({
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
  ctaLabel,
  ctaHref,
}: LandingPopupModalProps) {
  const [open, setOpen] = React.useState(true);

  const showCta = Boolean(ctaLabel?.trim() && ctaHref?.trim());
  const ctaIsExternal =
    showCta && /^https?:\/\//i.test(ctaHref!.trim());

  return (
    <Dialog.Root open={open} onOpenChange={setOpen} modal>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/60",
          )}
        />
        <Dialog.Content
          className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "fixed top-1/2 left-1/2 z-50 w-[min(94vw,32rem)] max-w-[94vw] -translate-x-1/2 -translate-y-1/2 outline-none",
            "max-h-[90dvh] overflow-visible bg-transparent p-0 shadow-none",
          )}
        >
          <Dialog.Title className="sr-only">{imageAlt}</Dialog.Title>
          <Dialog.Description className="sr-only">
            Promotional message. Use the close button to dismiss.
          </Dialog.Description>

          <div className="relative flex max-h-[90dvh] flex-col items-center overflow-visible">
            <Dialog.Close asChild>
              <button
                type="button"
                className="group ring-offset-background focus:ring-ring absolute -top-2 right-0 z-20 flex size-11 -translate-y-full items-center justify-center rounded-full bg-white text-gray-900 shadow-md transition-all duration-200 ease-out hover:scale-110 hover:bg-gray-100 hover:shadow-lg hover:ring-2 hover:ring-hive-blue/30 active:scale-95 focus:ring-2 focus:ring-offset-2 focus:outline-none md:-right-2"
                aria-label="Close"
              >
                <X className="size-7 stroke-[2.5] transition-transform duration-200 ease-out group-hover:rotate-90" />
              </button>
            </Dialog.Close>

            <div
              className={cn(
                "flex w-full max-h-[90dvh] flex-col overflow-visible rounded-lg bg-white shadow-xl",
                showCta ? "" : "pb-3",
              )}
            >
              <div className="flex shrink-0 flex-col items-center overflow-visible px-4 pt-8 pb-2 sm:px-5">
                <figure
                  className={cn(
                    "w-full max-w-[min(100%,28rem)] origin-center -rotate-3 bg-white p-3 pb-10 shadow-md ring-1 ring-black/10 sm:p-3.5 sm:pb-11",
                    "mx-auto overflow-visible",
                  )}
                >
                  <div className="relative w-full overflow-visible">
                    <Image
                      src={imageUrl}
                      alt={imageAlt}
                      width={imageWidth}
                      height={imageHeight}
                      className="h-auto max-h-[min(62vh,calc(90dvh-9rem))] w-full object-contain object-center sm:max-h-[min(65vh,calc(90dvh-9.5rem))]"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 75vw, 448px"
                      priority
                    />
                  </div>
                </figure>
              </div>

              {showCta ? (
                <div className="shrink-0 border-t border-gray-100 px-3 pt-2 pb-3">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 w-full rounded-md bg-hive-blue px-4 text-sm font-bold tracking-wide text-white uppercase hover:bg-hive-blue/90"
                  >
                    <a
                      href={ctaHref!}
                      {...(ctaIsExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {ctaLabel}
                    </a>
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
