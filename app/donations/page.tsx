"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useSiteCopy } from "@/components/language-provider";

// Next.js page component: Impact the Hive
// Place in `pages/impact-the-hive.jsx` (Pages Router) or adapt for App Router.

export default function DonationsPage() {
    const copy = useSiteCopy();

    return (
        <main className='min-h-screen bg-gray-50 pt-24 pb-12 px-6 lg:px-20'>
            <header className='max-w-4xl mx-auto text-center mb-12'>
                <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
                    {copy.donations.title}
                </h1>
                <p className='mt-4 text-lg text-gray-600'>
                    {copy.donations.subtitle}
                </p>
            </header>

            <section className='max-w-5xl mx-auto space-y-12'>
                {/* Volunteer Opportunities */}
                <article className='bg-white shadow-md rounded-2xl p-8'>
                    <div className='flex items-start gap-6'>
                        <div className='shrink-0'>
                            <div className='h-16 w-16 rounded-full bg-yellow-400 flex items-center justify-center text-2xl font-bold text-white'>
                                V
                            </div>
                        </div>

                        <div className='flex-1'>
                            <h2 className='text-2xl font-semibold text-gray-900'>
                                {copy.donations.volunteerTitle}
                            </h2>

                            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className='border rounded-lg p-4'>
                                    <h3 className='font-medium'>{copy.donations.volunteerItems[0].title}</h3>
                                    <p className='mt-2 text-sm text-gray-500'>
                                        {copy.donations.volunteerItems[0].body}
                                    </p>
                                </div>

                                <div className='border rounded-lg p-4'>
                                    <h3 className='font-medium'>{copy.donations.volunteerItems[1].title}</h3>
                                    <p className='mt-2 text-sm text-gray-500'>
                                        {copy.donations.volunteerItems[1].body}
                                    </p>
                                </div>

                                <div className='border rounded-lg p-4'>
                                    <h3 className='font-medium'>{copy.donations.volunteerItems[2].title}</h3>
                                    <p className='mt-2 text-sm text-gray-500'>
                                        {copy.donations.volunteerItems[2].body}
                                    </p>
                                </div>

                                <div className='border rounded-lg p-4'>
                                    <h3 className='font-medium'>{copy.donations.volunteerItems[3].title}</h3>
                                    <p className='mt-2 text-sm text-gray-500'>
                                        {copy.donations.volunteerItems[3].body}
                                    </p>
                                </div>
                            </div>

                            <div className='mt-8'>
                                <Button className='inline-flex items-center px-6 py-3 border rounded-md text-sm font-medium hover:shadow'>
                                    <a
                                        href='https://pointapp.org/orgs/7916'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        {copy.donations.volunteerButton}
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Donation Opportunities */}
                <article className='bg-white shadow-md rounded-2xl p-8'>
                    <div className='flex items-start gap-6'>
                        <div className='shrink-0'>
                            <div className='h-16 w-16 rounded-full bg-indigo-500 flex items-center justify-center text-2xl font-bold text-white'>
                                D
                            </div>
                        </div>

                        <div className='flex-1'>
                            <h2 className='text-2xl font-semibold text-gray-900'>
                                {copy.donations.donationTitle}
                            </h2>

                            <p className='mt-4 text-gray-600'>
                                {copy.donations.donationBody}
                            </p>

                            <div className='mt-6'>
                                <Button asChild className='px-6 py-3 bg-indigo-600 hover:opacity-95'>
                                    <a
                                        href='https://thehivecc.networkforgood.com/projects/204053-what-is-hope'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        {copy.donations.donationButton}
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            <section className='mt-20 max-w-7xl mx-auto'>
                <h2 className='text-3xl font-bold text-center mb-12'>
                    {copy.donations.partnersTitle}
                </h2>

                {/* Philanthropic */}
                <div className='mb-12'>
                    <h3 className='text-xl font-semibold mb-6'>{copy.donations.partnerCategories.philanthropic}</h3>
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

                {/* Non-Profit */}
                <div className='mb-12'>
                    <h3 className='text-xl font-semibold mb-6'>{copy.donations.partnerCategories.nonprofit}</h3>
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

                {/* Law Enforcement */}
                <div className='mb-12'>
                    <h3 className='text-xl font-semibold mb-6'>{copy.donations.partnerCategories.lawEnforcement}</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                        <Image src='/partner-images/Richland.jpg' alt='Richland County Sheriff Department' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/LaborOfficer.jpg' alt='Richland County Inmate Labor Officer' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Kershaw.webp' alt='Kershaw County Sheriff Department' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Benedict.jfif' alt='Benedict College Police' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Rock Hill.webp' alt='Rock Hill Police' width={120} height={60} className='mx-auto object-contain' />
                    </div>
                </div>

                {/* Education */}
                <div className='mb-12'>
                    <h3 className='text-xl font-semibold mb-6'>{copy.donations.partnerCategories.education}</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                        <Image src='/partner-images/BC.png' alt='Benedict College' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/CC.png' alt='Columbia College' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/USC.jpg' alt='University of South Carolina' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/LD4.png' alt='Lexington District Four' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/richland2.jfif' alt='Richland School District Two' width={120} height={60} className='mx-auto object-contain' />
                    </div>
                </div>

                {/* Faith Based */}
                <div className='mb-12'>
                    <h3 className='text-xl font-semibold mb-6'>{copy.donations.partnerCategories.faithBased}</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                        <Image src='/partner-images/Church1.jfif' alt='Mt. Olive AME Church' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Church2.png' alt='International Praise' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Church3.png' alt='Journey Church' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Church4.png' alt='Trinity Baptist Church' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Church5.jpg' alt='Ephesus' width={120} height={60} className='mx-auto object-contain' />
                        <Image src='/partner-images/Church6.png' alt='Sandhills Community Church' width={120} height={60} className='mx-auto object-contain' />
                    </div>
                </div>

                {/* Merchant */}
                <div>
                    <h3 className='text-xl font-semibold mb-6'>{copy.donations.partnerCategories.merchant}</h3>
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
