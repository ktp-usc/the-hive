export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { genericPageQuery, type GenericPageData } from "@/sanity/queries/genericPage";
import GenericSectionRenderer from "@/components/generic-section-renderer";

export default async function GenericPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let page: GenericPageData = null;
  try {
    const { data } = await sanityFetch({ query: genericPageQuery, params: { slug } });
    page = data as GenericPageData;
  } catch {
    // Sanity fetch failed; treat as not found
    notFound();
  }

  if (!page) {
    notFound();
  }

  const sections = page.sections ?? [];

  return (
    <main className="site-page">
      <div className="site-page--narrow">
        {sections.length === 0 && (
          <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14">
            <div className="mx-auto max-w-7xl">
              {page.title && <h1 className="site-title">{page.title}</h1>}
              {page.description && (
                <p className="site-copy-on-dark mx-auto mt-4 max-w-2xl">{page.description}</p>
              )}
            </div>
          </section>
        )}
        <GenericSectionRenderer sections={sections} />
      </div>
    </main>
  );
}
