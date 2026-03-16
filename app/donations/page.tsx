import React from "react";

// Next.js page component: Impact the Hive
// Place in `pages/impact-the-hive.jsx` (Pages Router) or adapt for App Router.

export default function DonationsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12 px-6 lg:px-20">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Impact the Hive
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose how you want to support our community — through volunteering or donating.
        </p>
      </header>

      <section className="max-w-5xl mx-auto space-y-12">

        {/* Volunteer Opportunities */}
        <article className="bg-white shadow-md rounded-2xl p-8">
          <div className="flex items-start gap-6">

            <div className="shrink-0">
              <div className="h-16 w-16 rounded-full bg-yellow-400 flex items-center justify-center text-2xl font-bold text-white">
                V
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900">
                Volunteer Opportunities
              </h2>

              {/* Description placeholder */}
              <p className="mt-4 text-gray-600">
                {/* Add volunteer section description here */}
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">The Voices of Washindi-Speaker’s Bureau</h3>
                  <p className="mt-2 text-sm text-gray-500">A community and platform for survivors of sexual assault and intimate partner violence to share their stories of resiliency and courage through the incorporation of the arts and craft of storytelling. Additional Training is required.</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Hive Ambassadors</h3>
                  <p className="mt-2 text-sm text-gray-500">If you love sharing The Hive, then tabling and general outreach may interest you. In this role you will have the opportunity to connect with the community and share about The Hive at community based events.</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Hive Hostesses/Hosts</h3>
                  <p className="mt-2 text-sm text-gray-500">Hive Hostesses/Hosts are special event volunteers who may not have the capacity to volunteer regularly but desire to support our work. As a volunteer in this area you will be contacted to volunteer when we have Hive hosted events such as our Annual SC Survivors Summit or fundraisers.</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Volunteer Groups</h3>
                  <p className="mt-2 text-sm text-gray-500">We have opportunities available for groups looking to volunteer together. These opportunities for groups of 5 or more include packing Bee Boxes of support for survivors or assembling BuzzPaks for our prevention education programming for youth.</p>
                </div>

              </div>

              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 border rounded-md text-sm font-medium hover:shadow">
                  Sign Up to Volunteer
                </button>
              </div>

            </div>

          </div>
        </article>

        {/* Donation Opportunities */}
        <article className="bg-white shadow-md rounded-2xl p-8">
          <div className="flex items-start gap-6">

            <div className="shrink-0">
              <div className="h-16 w-16 rounded-full bg-indigo-500 flex items-center justify-center text-2xl font-bold text-white">
                D
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900">
                Donation Opportunities
              </h2>

              <p className="mt-4 text-gray-600">
                Become a Steward of Hope today! Donate to The Hive and support survivors of domestic and sexual abuse who are seeking a safe community.
                Either donate to the Survivor's pantry or Peer Advocacy/Outreach to directly help our survivors, or sign up and become a member of the Keeper's Club
                and donate monthly. If you want to directly donate to the organization donate to the Hope Is Fund which helps in all day-to-day operating activities.
              </p>

              <div className="mt-6">
                <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md text-sm font-medium hover:opacity-95">
                  Donate Now
                </button>
              </div>

            </div>

          </div>
        </article>

      </section>

    </main>
  );
}
