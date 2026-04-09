"use client";

import Image from "next/image";

import { useSiteCopy } from "@/components/language-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Partner = {
  src: string;
  alt: string;
};

type CategoryKey =
  | "philanthropic"
  | "nonprofit"
  | "lawEnforcement"
  | "education"
  | "faithBased"
  | "merchant"
  | "community";

type Category = {
  key: CategoryKey;
  partners: Partner[];
};

const categories: Category[] = [
  {
    key: "philanthropic",
    partners: [
      { src: "/partner-images/JLC.png", alt: "Junior League of Columbia" },
      { src: "/partner-images/Allstate.webp", alt: "Allstate Foundation" },
      {
        src: "/partner-images/BCBS.png",
        alt: "Bluecross Blueshield of South Carolina",
      },
      {
        src: "/partner-images/CCCF.png",
        alt: "Central Carolina Community Foundation",
      },
      { src: "/partner-images/CUL.png", alt: "Columbia Urban League Inc." },
      { src: "/partner-images/CypressFund.png", alt: "Cypress Fund" },
      { src: "/partner-images/EF.jfif", alt: "Emergent Fund" },
      { src: "/partner-images/FF.png", alt: "Fact Forward" },
      { src: "/partner-images/GGC.png", alt: "Grantmakers for Girls of Color" },
      { src: "/partner-images/images.png", alt: "WREN" },
      {
        src: "/partner-images/JBC.png",
        alt: "Just Beginnings Collaborative",
      },
      { src: "/partner-images/Kolibri.png", alt: "Kolibri" },
      { src: "/partner-images/LFF.png", alt: "Lipscomb Family Foundation" },
      { src: "/partner-images/LL.png", alt: "Lululemon" },
      { src: "/partner-images/Molina.png", alt: "Molina" },
      { src: "/partner-images/MsFoundation.png", alt: "Ms. Foundation" },
      {
        src: "/partner-images/NNEDV.webp",
        alt: "National Network To End Domestic Violence",
      },
      { src: "/partner-images/PMC.png", alt: "Pearl Milling Company" },
      {
        src: "/partner-images/SBG.webp",
        alt: "Southern Black Girls and Women's Consortium",
      },
      {
        src: "/partner-images/SCF.png",
        alt: "Sisters of Charity Foundation of South Carolina",
      },
      { src: "/partner-images/solidaire.png", alt: "Solidaire" },
      { src: "/partner-images/Synovus.png", alt: "Synovus" },
      { src: "/partner-images/unum.png", alt: "Unum" },
      { src: "/partner-images/Walmart.png", alt: "Walmart" },
    ],
  },
  {
    key: "nonprofit",
    partners: [
      {
        src: "/partner-images/CT.webp",
        alt: "Children's Trust of South Carolina",
      },
      { src: "/partner-images/Prisma.webp", alt: "Prisma" },
      {
        src: "/partner-images/DSS.jpg",
        alt: "South Carolina Department of Social Services",
      },
      { src: "/partner-images/DHEC.jpg", alt: "DHEC" },
      { src: "/partner-images/SS.webp", alt: "Sowing Seeds Into The Midlands" },
      { src: "/partner-images/STS.png", alt: "Sexual Trauma Services" },
      {
        src: "/partner-images/SCCADVASA.png",
        alt: "South Carolina Coalition Against Domestic Violence and Sexual Assault",
      },
      { src: "/partner-images/LFL.png", alt: "Lighthouse for Life" },
      { src: "/partner-images/SASS.png", alt: "Surviving Assault Standing Strong" },
      { src: "/partner-images/PHAC.png", alt: "Peace at Home Advocacy Center" },
      { src: "/partner-images/HFH.png", alt: "Habitat for Humanity" },
      { src: "/partner-images/Sistercare.png", alt: "Sistercare" },
      {
        src: "/partner-images/SCVAN.webp",
        alt: "South Carolina Victim Assistance Network",
      },
      { src: "/partner-images/PP.png", alt: "Palmetto Place" },
      { src: "/partner-images/E24.webp", alt: "eleven24" },
      { src: "/partner-images/Epworth.png", alt: "Epworth Children's Home" },
      { src: "/partner-images/YMCA.png", alt: "The YMCA" },
    ],
  },
  {
    key: "lawEnforcement",
    partners: [
      {
        src: "/partner-images/Richland.jpg",
        alt: "Richland County Sheriff Department",
      },
      {
        src: "/partner-images/LaborOfficer.jpg",
        alt: "Richland County Inmate Labor Officer",
      },
      {
        src: "/partner-images/Kershaw.webp",
        alt: "Kershaw County Sheriff Department",
      },
      { src: "/partner-images/Benedict.jfif", alt: "Benedict College Police" },
      { src: "/partner-images/Rock Hill.webp", alt: "Rock Hill Police" },
    ],
  },
  {
    key: "education",
    partners: [
      { src: "/partner-images/BC.png", alt: "Benedict College" },
      { src: "/partner-images/CC.png", alt: "Columbia College" },
      { src: "/partner-images/USC.jpg", alt: "University of South Carolina" },
      { src: "/partner-images/LD4.png", alt: "Lexington District Four" },
      {
        src: "/partner-images/richland2.jfif",
        alt: "Richland School District Two",
      },
    ],
  },
  {
    key: "faithBased",
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
    partners: [
      { src: "/partner-images/Merchant1.jpg", alt: "Painting With a Twist" },
      { src: "/partner-images/Merchant2.svg", alt: "The Fresh Market" },
      { src: "/partner-images/Merchant3.jpg", alt: "BJ's" },
      { src: "/partner-images/Merchant4.png", alt: "Cinnamon Roll Deli" },
      { src: "/partner-images/Merchant5.webp", alt: "PDQ" },
      {
        src: "/partner-images/Merchant6.jpg",
        alt: "Kiki's Chicken and Waffles",
      },
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
    partners: [
      { src: "/partner-images/Comm1.webp", alt: "Stanley Martin" },
      { src: "/partner-images/Comm2.png", alt: "One to One Consulting" },
      { src: "/partner-images/Comm3.png", alt: "Palmetto Alarm" },
      { src: "/partner-images/Comm4.webp", alt: "Snaply Sites" },
      { src: "/partner-images/Comm5.webp", alt: "AB4 Building Group" },
      { src: "/partner-images/Comm6.avif", alt: "T and t HVAC" },
      { src: "/partner-images/Comm7.avif", alt: "Alsies" },
      { src: "/partner-images/Comm8.avif", alt: "Carolina on a Dime" },
      { src: "/partner-images/Comm9.avif", alt: "The Lexico Group" },
      { src: "/partner-images/Comm10.avif", alt: "Recise Services, LLC" },
      {
        src: "/partner-images/Comm11.avif",
        alt: "Blake Insurance and Financial Group",
      },
      { src: "/partner-images/Comm12.avif", alt: "HelloSEO" },
      { src: "/partner-images/Comm13.avif", alt: "Elite Lawn and Landscape" },
      {
        src: "/partner-images/Comm14.avif",
        alt: "Gadgetboy Retil and Repair",
      },
      { src: "/partner-images/Comm15.avif", alt: "S & E Flooring" },
      {
        src: "/partner-images/Comm16.avif",
        alt: "Tidy Tiffany's Organization",
      },
      {
        src: "/partner-images/Comm17.avif",
        alt: "Blackwell video Marketing",
      },
      { src: "/partner-images/Comm18.avif", alt: "WECO Candle Company" },
    ],
  },
];

function PartnerGrid({ partners }: { partners: Partner[] }) {
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

export default function OurPartnersPage() {
  const copy = useSiteCopy();

  return (
    <main className="site-page">
      <div className="site-page--narrow space-y-10">
        <section className="site-hero relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-hive-blue px-6 py-10 text-center text-white sm:px-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <p className="site-eyebrow text-white/90">Partnerships</p>
            <h1 className="site-title mt-4">{copy.partners.heroTitle}</h1>
          </div>
        </section>

        <section className="site-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="site-heading">{copy.partners.opportunitiesTitle}</h2>
            <p className="site-copy mt-4">
              {copy.partners.heroBody}
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 md:grid-cols-2">
            <div className="relative h-72 w-full sm:h-96 md:h-full">
              <Image
                src="/partner-images/TheBeeBox.avif"
                alt="The Bee Box"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div>
              <p className="site-copy">
                {copy.partners.beeBoxBody}
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="site-copy text-center">
              {copy.partners.beeBoxPartnerPrefix}{" "}
              <a href="mailto:volunteer@thehivecc.org">volunteer@thehivecc.org</a>
            </p>
          </div>
        </section>

        <div className="mt-12 space-y-8 pb-12">
          {categories.map((category, index) => (
            <Card
              key={category.key}
              className="overflow-hidden border border-gray-200 shadow-sm"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-hive-blue">
                  {copy.partners.categoryTitles[category.key]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PartnerGrid partners={category.partners} />
              </CardContent>
              {index < categories.length - 1 ? <Separator /> : null}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}