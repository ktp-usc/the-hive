import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/sanity/lib/live';
import Image from 'next/image';

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

type DonationsPageContent = {
    title: string;
    description: string;
    volunteerSection: {
        sectionTitle: string;
        intro: string;
        cards: VolunteerCard[];
        ctaLabel: string;
        ctaHref: string;
    };
    donationSection: {
        sectionTitle: string;
        body: string;
        ctaLabel: string;
        ctaHref: string;
    };
};

const FALLBACK_CONTENT: DonationsPageContent = {
    title: 'Impact the Hive',
    description: 'Choose how you want to support our community through volunteering or donating.',
    volunteerSection: {
        sectionTitle: 'Volunteer Opportunities',
        intro: '',
        cards: [
            {
                title: "The Voices of Washindi-Speaker's Bureau",
                description:
                    'A community and platform for survivors of sexual assault and intimate partner violence to share their stories of resiliency and courage through the incorporation of the arts and craft of storytelling. Additional training is required.',
            },
            {
                title: 'Hive Ambassadors',
                description:
                    'If you love sharing The Hive, then tabling and general outreach may interest you. In this role you will have the opportunity to connect with the community and share about The Hive at community based events.',
            },
            {
                title: 'Hive Hostesses/Hosts',
                description:
                    'Hive Hostesses/Hosts are special event volunteers who may not have the capacity to volunteer regularly but desire to support our work. As a volunteer in this area you will be contacted to volunteer when we have Hive hosted events such as our Annual SC Survivors Summit or fundraisers.',
            },
            {
                title: 'Volunteer Groups',
                description:
                    'We have opportunities available for groups looking to volunteer together. These opportunities for groups of 5 or more include packing Bee Boxes of support for survivors or assembling BuzzPaks for our prevention education programming for youth.',
            },
        ],
        ctaLabel: 'Sign Up to Volunteer',
        ctaHref: 'https://pointapp.org/orgs/7916',
    },
    donationSection: {
        sectionTitle: 'Donation Opportunities',
        body:
            "Become a Steward of Hope today! Donate to The Hive and support survivors of domestic and sexual abuse who are seeking a safe community. Either donate to the Survivor's pantry or Peer Advocacy/Outreach to directly help our survivors, or sign up and become a member of the Keeper's Club and donate monthly. If you want to directly donate to the organization donate to the Hope Is Fund which helps in all day-to-day operating activities.",
        ctaLabel: 'Donate Now',
        ctaHref: 'https://thehivecc.networkforgood.com/projects/204053-what-is-hope',
    },
};

function ActionButton({
    href,
    label,
    className,
}: {
    href: string;
    label: string;
    className?: string;
}) {
    const isExternal = /^https?:\/\//.test(href);

    return (
        <Button asChild className={className}>
            <a
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
            >
                {label}
            </a>
        </Button>
    );
}

export default async function DonationsPage() {
    const query = `*[_type == "page" && slug.current == "donations"][0]{
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
    }` as const;

    const { data } = await sanityFetch({ query });
    const cmsContent = (data ?? {}) as DonationsPageData;

    const volunteerSection = {
        ...FALLBACK_CONTENT.volunteerSection,
        ...cmsContent.volunteerSection,
        cards:
            cmsContent.volunteerSection?.cards && cmsContent.volunteerSection.cards.length > 0
                ? cmsContent.volunteerSection.cards
                : FALLBACK_CONTENT.volunteerSection.cards,
    };

    const donationSection = {
        ...FALLBACK_CONTENT.donationSection,
        ...cmsContent.donationSection,
    };

    const content = {
        title: cmsContent.title ?? FALLBACK_CONTENT.title,
        description: cmsContent.description ?? FALLBACK_CONTENT.description,
        volunteerSection,
        donationSection,
    };

    return (
        <main className='min-h-screen bg-gray-50 pt-24 pb-12 px-6 lg:px-20'>
            <header className='max-w-4xl mx-auto text-center mb-12'>
                <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
                    {content.title}
                </h1>
                <p className='mt-4 text-lg text-gray-600'>
                    {content.description}
                </p>
            </header>

            <section className='max-w-5xl mx-auto space-y-12'>
                <article className='bg-white shadow-md rounded-2xl p-8'>
                    <div className='flex items-start gap-6'>
                        <div className='shrink-0'>
                            <div className='h-16 w-16 rounded-full bg-yellow-400 flex items-center justify-center text-2xl font-bold text-white'>
                                V
                            </div>
                        </div>

                        <div className='flex-1'>
                            <h2 className='text-2xl font-semibold text-gray-900'>
                                {content.volunteerSection.sectionTitle}
                            </h2>

                            {content.volunteerSection.intro ? (
                                <p className='mt-4 text-gray-600'>
                                    {content.volunteerSection.intro}
                                </p>
                            ) : null}

                            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {content.volunteerSection.cards.map((card, index) => (
                                    <div
                                        key={card._key ?? `${card.title}-${index}`}
                                        className='border rounded-lg p-4'
                                    >
                                        <h3 className='font-medium'>{card.title}</h3>
                                        <p className='mt-2 text-sm text-gray-500'>
                                            {card.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className='mt-8'>
                                <ActionButton
                                    href={content.volunteerSection.ctaHref}
                                    label={content.volunteerSection.ctaLabel}
                                    className='inline-flex items-center px-6 py-3 border rounded-md text-sm font-medium hover:shadow'
                                />
                            </div>
                        </div>
                    </div>
                </article>

                <article className='bg-white shadow-md rounded-2xl p-8'>
                    <div className='flex items-start gap-6'>
                        <div className='shrink-0'>
                            <div className='h-16 w-16 rounded-full bg-indigo-500 flex items-center justify-center text-2xl font-bold text-white'>
                                D
                            </div>
                        </div>

                        <div className='flex-1'>
                            <h2 className='text-2xl font-semibold text-gray-900'>
                                {content.donationSection.sectionTitle}
                            </h2>

                            <p className='mt-4 text-gray-600'>
                                {content.donationSection.body}
                            </p>

                            <div className='mt-6'>
                                <ActionButton
                                    href={content.donationSection.ctaHref}
                                    label={content.donationSection.ctaLabel}
                                    className='px-6 py-3 bg-indigo-600 hover:opacity-95'
                                />
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            <section className='mt-20 max-w-7xl mx-auto'>
                <h2 className='text-3xl font-bold text-center mb-12'>
                    Our Partners
                </h2>

                <div className='mb-12'>
                    <h3 className='text-xl font-semibold mb-6'>Philanthropic</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                        <Image src='/partner-images/JLC.png' alt='Junior League of Columbia' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Allstate.webp' alt='Allstate Foundation' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/BCBS.png' alt='Bluecross Blueshield of South Carolina' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/CCCF.png' alt='central Carolina Community Foundation' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/CUL.png' alt='Columbia Urban League Inc.' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/CypressFund.png' alt='Cypress Fund' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/EF.jfif' alt='Emergent Fund' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/FF.png' alt='Fact Forward' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/GGC.png' alt='Grantmakers for Girls of Color' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/images.png' alt='WREN' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/JBC.png' alt='Just Beginnings Collaborative' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Kolibri.png' alt='Kolibri' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/LFF.png' alt='Lipscomb Family Foundation' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/LL.png' alt='Lulu Lemon' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Molina.png' alt='Molina' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/MsFoundation.png' alt='Ms. Foundation' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/NNEDV.webp' alt='National Network To End Domestic Violence' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/PMC.png' alt='Pearl Milling Company' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/SBG.webp' alt='Southern Blacks Girls and Women&apos;s Consortium' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/SCF.png' alt='Sisters of Charity Foundation of South Carolina' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/solidaire.png' alt='Solidaire' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Synovus.png' alt='Synovus' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/unum.png' alt='Unum' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Walmart.png' alt='Walmart' width={120} height={60} className='mx-auto object-contain' />
                    </div>
                </div>

                <div className='mb-12'>
                    <h3 className='text-xl font-semibold mb-6'>Non-Profit Organizations</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                        <Image src='/partner-images/CT.webp' alt='Children&apos;s Trust of South Carolina' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Prisma.webp' alt='Prisma' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/DSS.jpg' alt='South Carolina Department of Social Services' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/DHEC.jpg' alt='DHEC' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/SS.webp' alt='Sowing Seeds Into The Midlands' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/STS.png' alt='Sexual trauma Services' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/SCCADVASA.png' alt='South Carolina Coalition Against Domestic Violence and Sexual Assault' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/LFL.png' alt='Lighthouse for Life' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/SASS.png' alt='Surviving Assault Standing Strong' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/PHAC.png' alt='Peace at Home Advocacy Center' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/HFH.png' alt='Habitat for Humanity' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Sistercare.png' alt='Sistercare' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/SCVAN.webp' alt='South Carolina Victim Assistance Network' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/PP.png' alt='Palmetto Place' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/E24.webp' alt='eleven24' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Epworth.png' alt='Epworth Children&apos;s Home' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/YMCA.png' alt='The YMCA' width={120} height={60} className='mx-auto object-contain' />
                    </div>
                </div>

                <div className='mb-12'>
                    <h3 className='text-xl font-semibold mb-6'>Law Enforcement</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                        <Image src='/partner-images/Richland.jpg' alt='Richland County Sheriff Department' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/LaborOfficer.jpg' alt='Richland County Inmate Labor Officer' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Kershaw.webp' alt='Kershaw County Sheriff Department' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Benedict.jfif' alt='Benedict College Police' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Rock Hill.webp' alt='Rock Hill Police' width={120} height={60} className='mx-auto object-contain' />
                    </div>
                </div>

                <div className='mb-12'>
                    <h3 className='text-xl font-semibold mb-6'>Education</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                        <Image src='/partner-images/BC.png' alt='Benedict College' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/CC.png' alt='Columbia College' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/USC.jpg' alt='University of South Carolina' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/LD4.png' alt='Lexington District Four' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/richland2.jfif' alt='Richland School District Two' width={120} height={60} className='mx-auto object-contain' />
                    </div>
                </div>

                <div className='mb-12'>
                    <h3 className='text-xl font-semibold mb-6'>Faith Based</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                        <Image src='/partner-images/Church1.jfif' alt='Mt. Olive AME Church' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Church2.png' alt='International Praise' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Church3.png' alt='Journey Church' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Church4.png' alt='Trinity Baptist Church' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Church5.jpg' alt='Ephesus' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Church6.png' alt='Sandhills Community Church' width={120} height={60} className='mx-auto object-contain' />
                    </div>
                </div>

                <div>
                    <h3 className='text-xl font-semibold mb-6'>Merchant Based</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                        <Image src='/partner-images/Merchant1.jpg' alt='Painting With a Twist' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Merchant2.svg' alt='The Fresh Market' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Merchant3.jpg' alt='BJ&apos;s' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Merchant4.png' alt='Cinnamon Roll Deli' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Merchant5.webp' alt='PDQ' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Merchant6.jpg' alt='Kiki&apos;s Chicken and Waffles' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Merchant7.jpg' alt='Hungry Howie&apos;s' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Merchant8.jpg' alt='Urban Cookhouse' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Merchant9.jpg' alt='Panera Bread' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Merchant10.webp' alt='Blum' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Merchant11.jpg' alt='Kendra Scott' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Merchant12.jpg' alt='Hampton St Vineyard' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Merchant13.jpg' alt='Whole Foods' width={120} height={60} className='mx-auto object-contain' />
                    </div>
                </div>
            </section>
        </main>
    );
}
