'use client';

import { Button } from '@/components/ui/button';
import { useSiteCopy } from '@/components/language-provider';

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
        </main>
    );
}
