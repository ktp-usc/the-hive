import Image from "next/image";

import PartnershipCarousel, {
  type PartnershipCarouselSlide,
} from "@/components/partnership-carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { sanityFetch } from "@/sanity/lib/live";
import { partnersPageQuery } from "@/sanity/queries/partnersPage";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Our Partners | The Hive",
};

type StaticPartner = { src: string; alt: string };
type StaticCategory = { key: string; label: string; partners: StaticPartner[] };
type ImageTextSection = {
  heading?: string;
  body?: string;
  imageUrl?: string | null;
};
type CarouselSection = {
  heading?: string;
  body?: string;
  slides?: Array<{
    _key?: string;
    imageUrl?: string | null;
    alt?: string | null;
    title?: string;
    caption?: string;
  }>;
};
type PartnerLogoSection = {
  _key: string;
  groupLabel: string;
  partners?: Array<{ name: string; logoUrl: string | null }>;
};

const DEFAULT_CAROUSEL_HEADING = "What partnering with us could look like";
const DEFAULT_CAROUSEL_BODY =
  "From short-term residencies to survivor-centered resource placements, we shape partnerships around the spaces and communities you already serve.";

const DEFAULT_HOST_THE_HIVE = {
  heading: "Host the Hive",
  body:
    "Invite The Hive into your business, workplace, or community space for a short-term residency, typically around a month or tailored to your schedule. We work alongside your team to create visible, approachable moments of support through outreach, education, and resource-sharing that meet people where they are.",
  imageUrl: "/images/TheHive_12.06.2025_87.jpg",
  alt: "The Hive team members and supporters gathered together at an event",
};

const DEFAULT_BEE_BOX = {
  heading: "The Bee Box",
  body:
    "Sitting in a cold waiting room, trembling with fear as one contemplates disclosing their abuse is never a vision one would desire to have, but this is often the reality for survivors of abuse and violence. The Bee Box was designed to support survivors who disclose in public settings such as healthcare settings, police stations, schools, or churches. The Bee Box has been uniquely designed to provide aid and support as a survivor embarks on their journey of healing, consisting of a grounding tool, tea for care and wellness, powerful affirmations written by fellow survivors, and an all-natural room enhancer spray.",
  imageUrl: "/partner-images/TheBeeBox.avif",
  alt: "The Bee Box",
};

const STATIC_PARTNERSHIP_SLIDES: PartnershipCarouselSlide[] = [
  {
    key: "host-the-hive",
    imageUrl: "/images/TheHive_12.06.2025_135.jpg",
    alt: "The Hive team and community members at an event",
    title: "A month-long community presence",
    caption:
      "Host The Hive in your business or workplace for a short residency that keeps survivor-centered resources visible and accessible all month long.",
  },
  {
    key: "bee-box",
    imageUrl: "/partner-images/TheBeeBox.avif",
    alt: "The Bee Box support package for survivors",
    title: "Support at the point of disclosure",
    caption:
      "Partner sites can place Bee Boxes in public-facing spaces so survivors receive grounding items, care tools, and affirming support in the moment they need it.",
  },
  {
    key: "community-activation",
    imageUrl: "/images/TheHive_12.06.2025_87.jpg",
    alt: "The Hive staff and supporters gathered together indoors",
    title: "A partnership tailored to your audience",
    caption:
      "Residencies can combine outreach, awareness moments, and educational touchpoints designed to fit the rhythm of your team, customers, or community.",
  },
];

const STATIC_CATEGORIES: StaticCategory[] = [
  {
    key: "philanthropic",
    label: "Philanthropic",
    partners: [
      { src: "/partner-images/JLC.png", alt: "Junior League of Columbia" },
      { src: "/partner-images/Allstate.webp", alt: "Allstate Foundation" },
      { src: "/partner-images/BCBS.png", alt: "Bluecross Blueshield of South Carolina" },
      { src: "/partner-images/CCCF.png", alt: "Central Carolina Community Foundation" },
      { src: "/partner-images/CUL.png", alt: "Columbia Urban League Inc." },
      { src: "/partner-images/CypressFund.png", alt: "Cypress Fund" },
      { src: "/partner-images/EF.jfif", alt: "Emergent Fund" },
      { src: "/partner-images/FF.png", alt: "Fact Forward" },
      { src: "/partner-images/GGC.png", alt: "Grantmakers for Girls of Color" },
      { src: "/partner-images/images.png", alt: "WREN" },
      { src: "/partner-images/JBC.png", alt: "Just Beginnings Collaborative" },
      { src: "/partner-images/Kolibri.png", alt: "Kolibri" },
      { src: "/partner-images/LFF.png", alt: "Lipscomb Family Foundation" },
      { src: "/partner-images/LL.png", alt: "Lululemon" },
      { src: "/partner-images/Molina.png", alt: "Molina" },
      { src: "/partner-images/MsFoundation.png", alt: "Ms. Foundation" },
      { src: "/partner-images/NNEDV.webp", alt: "National Network To End Domestic Violence" },
      { src: "/partner-images/PMC.jpg", alt: "Pearl Milling Company" },
      { src: "/partner-images/SBG.webp", alt: "Southern Black Girls and Women's Consortium" },
      { src: "/partner-images/SCF.png", alt: "Sisters of Charity Foundation of South Carolina" },
      { src: "/partner-images/solidaire.png", alt: "Solidaire" },
      { src: "/partner-images/Synovus.png", alt: "Synovus" },
      { src: "/partner-images/unum.png", alt: "Unum" },
      { src: "/partner-images/Walmart.png", alt: "Walmart" },
    ],
  },
  {
    key: "nonprofit",
    label: "Non-Profit Organizations",
    partners: [
      { src: "/partner-images/CT.webp", alt: "Children's Trust of South Carolina" },
      { src: "/partner-images/Prisma.webp", alt: "Prisma" },
      { src: "/partner-images/DSS.jpg", alt: "South Carolina Department of Social Services" },
      { src: "/partner-images/DHEC.jpg", alt: "DHEC" },
      { src: "/partner-images/SS.webp", alt: "Sowing Seeds Into The Midlands" },
      { src: "/partner-images/STS.png", alt: "Sexual Trauma Services" },
      { src: "/partner-images/SCCADVASA.png", alt: "South Carolina Coalition Against Domestic Violence and Sexual Assault" },
      { src: "/partner-images/LFL.png", alt: "Lighthouse for Life" },
      { src: "/partner-images/SASS.png", alt: "Surviving Assault Standing Strong" },
      { src: "/partner-images/PHAC.png", alt: "Peace at Home Advocacy Center" },
      { src: "/partner-images/HFH.png", alt: "Habitat for Humanity" },
      { src: "/partner-images/Sistercare.png", alt: "Sistercare" },
      { src: "/partner-images/SCVAN.webp", alt: "South Carolina Victim Assistance Network" },
      { src: "/partner-images/PP.png", alt: "Palmetto Place" },
      { src: "/partner-images/E24.webp", alt: "eleven24" },
      { src: "/partner-images/Epworth.png", alt: "Epworth Children's Home" },
      { src: "/partner-images/YMCA.png", alt: "The YMCA" },
    ],
  },
  {
    key: "lawEnforcement",
    label: "Law Enforcement",
    partners: [
      { src: "/partner-images/Richland.jpg", alt: "Richland County Sheriff Department" },
      { src: "/partner-images/LaborOfficer.jpg", alt: "Richland County Inmate Labor Officer" },
      { src: "/partner-images/Kershaw.webp", alt: "Kershaw County Sheriff Department" },
      { src: "/partner-images/Benedict.jfif", alt: "Benedict College Police" },
      { src: "/partner-images/Rock Hill.webp", alt: "Rock Hill Police" },
    ],
  },
  {
    key: "education",
    label: "Education",
    partners: [
      { src: "/partner-images/BC.png", alt: "Benedict College" },
      { src: "/partner-images/CC.png", alt: "Columbia College" },
      { src: "/partner-images/USC.jpg", alt: "University of South Carolina" },
      { src: "/partner-images/LD4.png", alt: "Lexington District Four" },
      { src: "/partner-images/richland2.jfif", alt: "Richland School District Two" },
    ],
  },
  {
    key: "faithBased",
    label: "Faith Based",
    partners: [
      { src: "/partner-images/Church1.jfif", alt: "Mt. Olive AME Church" },
      { src: "/partner-images/Church2.png", alt: "International Praise" },
      { src: "/partner-images/Church3.png", alt: "Journey Church" },
      { src: "/partner-images/Church4.png", alt: "Trinity Baptist Church" },
      { src: "/partner-images/Church5.jpg", alt: "Ephesus" },
      { src: "/partner-images/Church6.png", alt: "Sandhills Community Church" },
    ],
  },
  {
    key: "merchant",
    label: "Merchant Based",
    partners: [
      { src: "/partner-images/Merchant1.jpg", alt: "Painting With a Twist" },
      { src: "/partner-images/Merchant2.svg", alt: "The Fresh Market" },
      { src: "/partner-images/Merchant3.jpg", alt: "BJ's" },
      { src: "/partner-images/Merchant4.png", alt: "Cinnamon Roll Deli" },
      { src: "/partner-images/Merchant5.webp", alt: "PDQ" },
      { src: "/partner-images/Merchant6.jpg", alt: "Kiki's Chicken and Waffles" },
      { src: "/partner-images/Merchant7.jpg", alt: "Hungry Howie's" },
      { src: "/partner-images/Merchant8.jpg", alt: "Urban Cookhouse" },
      { src: "/partner-images/Merchant9.jpg", alt: "Panera Bread" },
      { src: "/partner-images/Merchant10.webp", alt: "Blum" },
      { src: "/partner-images/Merchant11.jpg", alt: "Kendra Scott" },
      { src: "/partner-images/Merchant12.jpg", alt: "Hampton St Vineyard" },
      { src: "/partner-images/Merchant13.jpg", alt: "Whole Foods" },
    ],
  },
  {
    key: "community",
    label: "Community Partners",
    partners: [
      { src: "/partner-images/Comm1.webp", alt: "Stanley Martin" },
      { src: "/partner-images/Comm2.png", alt: "One to One Consulting" },
      { src: "/partner-images/Comm3.png", alt: "Palmetto Alarm" },
      { src: "/partner-images/Comm4.webp", alt: "Snaply Sites" },
      { src: "/partner-images/Comm5.webp", alt: "AB4 Building Group" },
      { src: "/partner-images/Comm6.avif", alt: "T and T HVAC" },
      { src: "/partner-images/Comm7.avif", alt: "Alsies" },
      { src: "/partner-images/Comm8.avif", alt: "Carolina on a Dime" },
      { src: "/partner-images/Comm9.avif", alt: "The Lexico Group" },
      { src: "/partner-images/Comm10.avif", alt: "Recise Services, LLC" },
      { src: "/partner-images/Comm11.avif", alt: "Blake Insurance and Financial Group" },
      { src: "/partner-images/Comm12.avif", alt: "HelloSEO" },
      { src: "/partner-images/Comm13.avif", alt: "Elite Lawn and Landscape" },
      { src: "/partner-images/Comm14.avif", alt: "Gadgetboy Retail and Repair" },
      { src: "/partner-images/Comm15.avif", alt: "S & E Flooring" },
      { src: "/partner-images/Comm16.avif", alt: "Tidy Tiffany's Organization" },
      { src: "/partner-images/Comm17.avif", alt: "Blackwell Video Marketing" },
      { src: "/partner-images/Comm18.avif", alt: "WECO Candle Company" },
    ],
  },
];

function PartnerGrid({ partners }: { partners: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
      {partners.map((partner) => (
        <div
          key={partner.alt}
          className="flex items-center justify-center rounded-xl border border-gray-200 bg-background p-4 shadow-sm"
        >
          <div className="relative h-16 w-full">
            <Image
              src={partner.src}
              alt={partner.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function normalizeCarouselSlides(
  slides?: CarouselSection["slides"]
): PartnershipCarouselSlide[] {
  return (
    slides
      ?.filter(
        (slide): slide is NonNullable<CarouselSection["slides"]>[number] & {
          imageUrl: string;
          title: string;
          caption: string;
        } => Boolean(slide?.imageUrl && slide?.title && slide?.caption)
      )
      .map((slide, index) => ({
        key: slide._key ?? `cms-slide-${index}`,
        imageUrl: slide.imageUrl,
        alt: slide.alt || slide.title,
        title: slide.title,
        caption: slide.caption,
      })) ?? []
  );
}

function PartnershipExamplesSection({
  heading,
  body,
  slides,
}: {
  heading: string;
  body: string;
  slides: PartnershipCarouselSlide[];
}) {
  return (
    <section className="site-surface px-6 pt-2 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-3xl text-center">
        <p className="site-subheading">Partnership in Practice</p>
        <h2 className="site-heading mt-3">{heading}</h2>
        <p className="site-copy mt-4">{body}</p>
      </div>

      <div className="mx-auto mt-10 max-w-6xl">
        <PartnershipCarousel slides={slides} />
      </div>
    </section>
  );
}

function PartnershipOpportunitiesSection({
  hostTheHive,
  beeBox,
}: {
  hostTheHive: {
    heading: string;
    body: string;
    imageUrl: string;
    alt: string;
  };
  beeBox: {
    heading: string;
    body: string;
    imageUrl: string;
    alt: string;
  };
}) {
  return (
    <section className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="site-heading">Partnership Opportunities</h2>
        <p className="site-copy mt-4">
          We are grateful for the organizations, businesses, and community leaders who support this work.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl space-y-8">
        <div className="site-panel overflow-hidden">
          <div className="grid items-stretch md:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="site-subheading">Residency Partnership</p>
              <h3 className="mt-3 text-3xl font-semibold text-hive-blue">{hostTheHive.heading}</h3>
              <p className="site-copy mt-4">{hostTheHive.body}</p>
            </div>
            <div className="relative min-h-72 bg-hive-blue/5">
              <Image
                src={hostTheHive.imageUrl}
                alt={hostTheHive.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="site-panel overflow-hidden p-6 sm:p-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="relative h-72 w-full sm:h-96 md:h-full">
              <Image
                src={beeBox.imageUrl}
                alt={beeBox.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
            <div>
              <p className="site-subheading">Resource Partnership</p>
              <h3 className="mt-3 text-3xl font-semibold text-hive-blue">{beeBox.heading}</h3>
              <p className="site-copy mt-4 whitespace-pre-line">{beeBox.body}</p>
              <p className="site-copy mt-6">
                If you are interested in becoming a partner site for the Bee Box, please reach out to{" "}
                <a className="site-link font-medium" href="mailto:volunteer@thehivecc.org">
                  volunteer@thehivecc.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerCategoriesSection({
  sections,
}: {
  sections: Array<{ key: string; label: string; partners: { src: string; alt: string }[] }>;
}) {
  return (
    <div className="mt-12 space-y-8 pb-12">
      {sections.map((section, index) => (
        <Card key={section.key} className="overflow-hidden border border-gray-200 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-hive-blue">{section.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <PartnerGrid partners={section.partners} />
          </CardContent>
          {index < sections.length - 1 ? <Separator /> : null}
        </Card>
      ))}
    </div>
  );
}

export default async function OurPartnersPage() {
  const { data: page } = await sanityFetch({ query: partnersPageQuery });

  if (page?.sections?.length) {
    const sections = page.sections as Array<
      | ({ _type: "sectionHero"; headline?: string } & Record<string, unknown>)
      | ({ _type: "sectionImageText" } & ImageTextSection)
      | ({ _type: "sectionImageCarousel" } & CarouselSection)
      | ({ _type: "sectionPartnerLogos"; _key: string } & PartnerLogoSection)
    >;

    const hero = sections.find((section) => section._type === "sectionHero");
    const carouselSection = sections.find(
      (section) => section._type === "sectionImageCarousel"
    ) as ({ _type: "sectionImageCarousel" } & CarouselSection) | undefined;
    const imageTextSections = sections.filter(
      (section): section is { _type: "sectionImageText" } & ImageTextSection =>
        section._type === "sectionImageText"
    );
    const hostTheHiveSection = imageTextSections.find((section) =>
      /host the hive/i.test(section.heading ?? "")
    );
    const beeBoxSection =
      imageTextSections.find((section) => /bee box/i.test(section.heading ?? "")) ??
      imageTextSections[0];
    const partnerSections = sections.filter(
      (section): section is { _type: "sectionPartnerLogos"; _key: string } & PartnerLogoSection =>
        section._type === "sectionPartnerLogos"
    );

    const carouselSlides = normalizeCarouselSlides(carouselSection?.slides);
    const partnerCategories = partnerSections.map((section) => ({
      key: section._key,
      label: section.groupLabel,
      partners:
        section.partners
          ?.map((partner) => ({
            src: partner.logoUrl ?? "",
            alt: partner.name,
          }))
          .filter((partner) => partner.src) ?? [],
    }));

    return (
      <main className="site-page">
        <div className="site-page--narrow space-y-10">
          {hero && (
            <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-hive-blue px-6 py-10 text-center text-white sm:px-10 sm:py-12 lg:py-14">
                <div className="mx-auto max-w-7xl">
                    <p className="site-eyebrow text-white/90">
                        {typeof hero?.subheadline === "string" && hero.subheadline.trim()
                            ? hero.subheadline
                            : "Partnerships"}
                    </p>
                    <h1 className="site-title mt-4">
                        {hero.headline ?? "Our Partners"}
                    </h1>
                </div>
            </section>
          )}

          <PartnershipExamplesSection
            heading={carouselSection?.heading ?? DEFAULT_CAROUSEL_HEADING}
            body={carouselSection?.body ?? DEFAULT_CAROUSEL_BODY}
            slides={carouselSlides.length ? carouselSlides : STATIC_PARTNERSHIP_SLIDES}
          />

          <PartnershipOpportunitiesSection
            hostTheHive={{
              heading: hostTheHiveSection?.heading ?? DEFAULT_HOST_THE_HIVE.heading,
              body: hostTheHiveSection?.body ?? DEFAULT_HOST_THE_HIVE.body,
              imageUrl: hostTheHiveSection?.imageUrl ?? DEFAULT_HOST_THE_HIVE.imageUrl,
              alt: DEFAULT_HOST_THE_HIVE.alt,
            }}
            beeBox={{
              heading: beeBoxSection?.heading ?? DEFAULT_BEE_BOX.heading,
              body: beeBoxSection?.body ?? DEFAULT_BEE_BOX.body,
              imageUrl: beeBoxSection?.imageUrl ?? DEFAULT_BEE_BOX.imageUrl,
              alt: DEFAULT_BEE_BOX.alt,
            }}
          />

          <PartnerCategoriesSection sections={partnerCategories} />
        </div>
      </main>
    );
  }

  return (
    <main className="site-page">
      <div className="site-page--narrow space-y-10">
        <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-hive-blue px-6 py-10 text-center text-white sm:px-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <p className="site-eyebrow text-white/90">Partnerships</p>
            <h1 className="site-title mt-4">Our Partners</h1>
          </div>
        </section>

        <PartnershipExamplesSection
          heading={DEFAULT_CAROUSEL_HEADING}
          body={DEFAULT_CAROUSEL_BODY}
          slides={STATIC_PARTNERSHIP_SLIDES}
        />

        <PartnershipOpportunitiesSection
          hostTheHive={DEFAULT_HOST_THE_HIVE}
          beeBox={DEFAULT_BEE_BOX}
        />

        <PartnerCategoriesSection
          sections={STATIC_CATEGORIES.map((category) => ({
            key: category.key,
            label: category.label,
            partners: category.partners,
          }))}
        />
      </div>
    </main>
  );
}
