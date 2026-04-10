import { sanityFetch } from "@/sanity/lib/live";
import DonationsClient from "./donations-client";

type VolunteerCard = {
    _key?: string;
    title: string;
    description: string;
};

type DonationsPageData = {
    title?: string;
    description?: string;
    volunteerSection?: {
        sectionTitle?: string;
        intro?: string;
        cards?: VolunteerCard[];
        ctaLabel?: string;
        ctaHref?: string;
    };
    donationSection?: {
        sectionTitle?: string;
        body?: string;
        ctaLabel?: string;
        ctaHref?: string;
    };
};

const cmsQuery = `*[_type == "page" && slug.current == "donations"][0]{
  title,
  description,
  "volunteerSection": sections[_type == "sectionVolunteerCards"][0]{
    sectionTitle,
    intro,
    cards[]{
      _key,
      title,
      description
    },
    ctaLabel,
    ctaHref
  },
  "donationSection": sections[_type == "sectionDonationOpportunity"][0]{
    sectionTitle,
    body,
    ctaLabel,
    ctaHref
  }
}`;

export default async function DonationsPage() {
    const { data } = await sanityFetch({ query: cmsQuery });

    return <DonationsClient cmsContent={(data ?? null) as DonationsPageData | null} />;
}