"use client";

import Image from "next/image";
import Link from "next/link";

export type GenericSection = {
  _key?: string;
  _type: string;
  // sectionHero
  headline?: string | null;
  subheadline?: string | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
  heroImages?: (string | null)[] | null;
  // sectionRichText
  eyebrow?: string | null;
  heading?: string | null;
  body?: string | null;
  // sectionImageText
  imageUrl?: string | null;
  // sectionImageCarousel
  slides?: Array<{
    _key?: string;
    title?: string | null;
    caption?: string | null;
    alt?: string | null;
    imageUrl?: string | null;
  }> | null;
  // sectionCardGrid
  sectionTitle?: string | null;
  intro?: string | null;
  cards?: Array<{ _id: string; title?: string | null; body?: string | null }> | null;
  // sectionVolunteerCards
  volunteerCards?: Array<{
    _key?: string;
    title?: string | null;
    description?: string | null;
  }> | null;
  // sectionDonationOpportunity uses eyebrow, sectionTitle, body, ctaLabel, ctaHref
};

function SectionHero({ s }: { s: GenericSection }) {
  const bgImage = s.heroImages?.[0];
  return (
    <section
      className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14"
      style={
        bgImage
          ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }
          : undefined
      }
    >
      <div className="mx-auto max-w-7xl">
        {s.subheadline && <p className="site-eyebrow mb-4">{s.subheadline}</p>}
        {s.headline && <h1 className="site-title">{s.headline}</h1>}
        {s.ctaLabel && s.ctaHref && (
          <Link href={s.ctaHref} className="site-button-primary mt-8 inline-flex">
            {s.ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}

function SectionRichText({ s }: { s: GenericSection }) {
  return (
    <section className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
      <div className="mx-auto max-w-4xl text-center">
        {s.eyebrow && (
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-hive-orange">
            {s.eyebrow}
          </p>
        )}
        {s.heading && <h2 className="site-heading">{s.heading}</h2>}
        {s.body && <p className="site-copy mx-auto mt-4 max-w-2xl">{s.body}</p>}
      </div>
    </section>
  );
}

function SectionImageText({ s }: { s: GenericSection }) {
  return (
    <section className="px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        {s.imageUrl && (
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={s.imageUrl}
              alt={s.heading ?? ""}
              width={800}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
        )}
        <div>
          {s.heading && <h2 className="site-heading">{s.heading}</h2>}
          {s.body && <p className="site-copy mt-4">{s.body}</p>}
        </div>
      </div>
    </section>
  );
}

function SectionImageCarousel({ s }: { s: GenericSection }) {
  return (
    <section className="px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        {s.heading && <h2 className="site-heading mb-4 text-center">{s.heading}</h2>}
        {s.body && <p className="site-copy mb-8 text-center">{s.body}</p>}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {s.slides?.map((slide) => (
            <div key={slide._key ?? slide.title} className="site-card overflow-hidden">
              {slide.imageUrl && (
                <div className="relative h-48 w-full">
                  <Image
                    src={slide.imageUrl}
                    alt={slide.alt ?? slide.title ?? ""}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                {slide.title && (
                  <p className="font-semibold text-[var(--color-hive-blue)]">{slide.title}</p>
                )}
                {slide.caption && <p className="site-copy mt-1 text-sm">{slide.caption}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionCardGrid({ s }: { s: GenericSection }) {
  return (
    <section className="px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        {s.sectionTitle && (
          <h2 className="site-heading mb-4 text-center">{s.sectionTitle}</h2>
        )}
        {s.intro && <p className="site-copy mb-8 text-center">{s.intro}</p>}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {s.cards?.map((card) => (
            <div key={card._id} className="site-card p-6">
              {card.title && (
                <h3 className="font-semibold text-[var(--color-hive-blue)]">{card.title}</h3>
              )}
              {card.body && <p className="site-copy mt-2 text-sm">{card.body}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionVolunteerCards({ s }: { s: GenericSection }) {
  return (
    <section className="px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        {s.sectionTitle && (
          <h2 className="site-heading mb-4 text-center">{s.sectionTitle}</h2>
        )}
        {s.intro && <p className="site-copy mb-8 text-center">{s.intro}</p>}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {s.volunteerCards?.map((card) => (
            <div key={card._key ?? card.title} className="site-card p-6">
              {card.title && (
                <h3 className="font-semibold text-[var(--color-hive-blue)]">{card.title}</h3>
              )}
              {card.description && (
                <p className="site-copy mt-2 text-sm">{card.description}</p>
              )}
            </div>
          ))}
        </div>
        {s.ctaLabel && s.ctaHref && (
          <div className="mt-8 text-center">
            <Link href={s.ctaHref} className="site-button-primary">
              {s.ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function SectionDonationOpportunity({ s }: { s: GenericSection }) {
  return (
    <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 py-12 text-center sm:px-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        {s.eyebrow && <p className="site-eyebrow mb-3">{s.eyebrow}</p>}
        {s.sectionTitle && <h2 className="site-title">{s.sectionTitle}</h2>}
        {s.body && (
          <p className="site-copy-on-dark mx-auto mt-4 max-w-xl">{s.body}</p>
        )}
        {s.ctaLabel && s.ctaHref && (
          <Link href={s.ctaHref} className="site-button-primary mt-8 inline-flex">
            {s.ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}

export default function GenericSectionRenderer({
  sections,
}: {
  sections: GenericSection[];
}) {
  if (!sections.length) return null;
  return (
    <>
      {sections.map((s) => {
        switch (s._type) {
          case "sectionHero":
            return <SectionHero key={s._key ?? s._type} s={s} />;
          case "sectionRichText":
            return <SectionRichText key={s._key ?? s._type} s={s} />;
          case "sectionImageText":
            return <SectionImageText key={s._key ?? s._type} s={s} />;
          case "sectionImageCarousel":
            return <SectionImageCarousel key={s._key ?? s._type} s={s} />;
          case "sectionCardGrid":
            return <SectionCardGrid key={s._key ?? s._type} s={s} />;
          case "sectionVolunteerCards":
            return <SectionVolunteerCards key={s._key ?? s._type} s={s} />;
          case "sectionDonationOpportunity":
            return <SectionDonationOpportunity key={s._key ?? s._type} s={s} />;
          default:
            return null;
        }
      })}
    </>
  );
}
