"use client";

import { useSiteCopy } from "@/components/language-provider";

export default function BeeInTheKnowPage() {
  const copy = useSiteCopy();

  return (
    <main className="site-page">
      <div className="site-page--narrow px-6 py-12 sm:px-10 lg:px-14">
        <h1 className="site-heading text-center">{copy.beeInTheKnow.title}</h1>
      </div>
    </main>
  );
}
