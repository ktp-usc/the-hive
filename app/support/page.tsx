"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Card = {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;
  details?: string[];
  cta?: { label: string; href?: string };
  badge?: string;
};

const CARDS: Card[] = [
  {
    id: "peer-advocacy",
    title: "Peer Advocacy",
    subtitle: "Emotional support & navigation",
    summary:
      "Trained peer advocates provide confidential support, help you understand rights and options, and connect you to resources.",
    details: [
      "Ensure survivors understand their rights and options",
      "Social-emotional support and safety planning",
      "For primary and secondary survivors ages 11+",
      "Services at no cost to the survivor",
    ],
    cta: { label: "Call 803-888-7725", href: "tel:8038887725" },
    badge: "Confidential",
  },
  {
    id: "economic-relief",
    title: "Economic Relief",
    subtitle: "Immediate financial support",
    summary:
      "Wrap-around financial support for urgent needs — housing, food, utility help, relocation, and transportation support.",
    details: [
      "Transitional housing",
      "Utility support and gas vouchers",
      "Food security and hotel accommodations",
    ],
    cta: { label: "Request help", href: "/contact" },
    badge: "No cost",
  },
  {
    id: "individual-counseling",
    title: "Individual Counseling",
    subtitle: "Licensed trauma-trained therapists",
    summary:
      "Professional counseling for survivors. Services are provided by licensed therapists trained in trauma treatment.",
    details: [
      "For survivors of sexual assault, IPV, or stalking (ages 11+)",
      "Provided at no cost to the survivor",
    ],
    cta: { label: "Groups & Counseling: 803-766-8067", href: "tel:8037668067" },
  },
  
  {
    id: "healing-circles",
    title: "Peer Support Healing Circles",
    subtitle: "Peer-led group healing",
    summary:
      "Confidential healing circles using psycho-educational and wellness-based curriculum for community and recovery.",
    details: [
      "Queens Gather — Women 18+",
      "Bloom — Girls 11–18",
      "Held in a safe and affirming space",
    ],
    cta: { label: "Learn about circles", href: "/support/healing-circles" },
    badge: "Groups",
  },
  {
    id: "holistic-support",
    title: "Holistic Support",
    subtitle: "Wrap-around support",
    summary:
      "Support that goes beyond one service and helps address the survivor’s full situation.",
    details: [
      "Goal and intervention case planning",
      "Financial planning",
      "Employment support",
      "Assist in applying for additional services",
    ],
    badge: "Case Planning",
  },
  {
    id: "refer-survivor",
    title: "How to Refer a Survivor",
    subtitle: "Quick contact info",
    summary:
      "Use these contact options to connect a survivor with General Support, Counseling, or Advocacy.",
    details: [
      "General Support / Advocacy: 803-888-7725",
      "Groups and Counseling: 803-766-8067",
      "Services are confidential",
      "We are mandated reporters",
    ],
    cta: { label: "Go to Contact", href: "/contact" },
    badge: "Referrals",
  },
  {
    id: "training-prevention",
    title: "Request Training / Prevention Programming",
    subtitle: "Outreach events",
    summary:
      "Request training, prevention programming, or outreach events for your organization or community.",
    details: [
      "Email: hello@thehivecc.org",
      "Call: 803-888-7725",
      "We can coordinate outreach events",
    ],
    cta: { label: "Email Us", href: "mailto:hello@thehivecc.org" },
    badge: "Outreach",
  },
];

export default function SupportPage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section
  style={{
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    backgroundColor: "#1D979C",
    color: "#FFFFFF",

    // 🔑 THIS is the main fix
    paddingTop: "7rem",
    paddingBottom: "7rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Proxima Nova, sans-serif",
  }}
>
        <div style={{ width: "100%", maxWidth: "980px" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(3rem, 5vw, 4.5rem)",
              lineHeight: 1.05,
              fontWeight: 700,
            }}
          >
            Support Services
          </h1>

          <p
            style={{
              margin: "1.5rem auto 0",
              maxWidth: "760px",
              fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Compassionate support and practical resources, here when you need them.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="cards-area" aria-labelledby="services-heading">
        <div className="container">
          <h2 id="services-heading">Explore Support Options</h2>

          <div className="grid">
            {CARDS.map((c) => (
              <article key={c.id} className="card" tabIndex={0}>
                <div className="card-head">
                  <h3 className="card-title">{c.title}</h3>
                  {c.badge && <span className="badge">{c.badge}</span>}
                </div>

                {c.subtitle && <div className="card-sub">{c.subtitle}</div>}
                <p className="card-summary">{c.summary}</p>

                {c.details && (
                  <ul className="card-list">
                    {c.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}

                {c.cta && (
                  <div className="card-cta">
                    <a href={c.cta.href ?? "#"} className="btn btn-ghost">
                      {c.cta.label}
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 px-6 bg-hive-blue/5 text-center">
  <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">

    <h2 className="text-3xl md:text-5xl font-bold text-hive-blue">
      Emotional Safety Plan Resource
    </h2>

    <a
      href="https://www.thehivecc.org/_files/ugd/8a8511_175f07e5966d4276b783f3ce90ea902f.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-hive-yellow text-gray-900 font-bold px-12 py-5 rounded-full text-xl hover:bg-yellow-400 transition"
    >
      Click Here
    </a>

    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
      If you need help filling out this form or creating a plan that meets your needs,
      you can always contact The Hive. One of our advocates can assist you — you don’t
      have to go through this alone.
    </p>

  </div>
</section>

      <footer
        style={{
          backgroundColor: "#1D979C",
          color: "#FFFFFF",
          padding: "4rem 1.5rem 2rem",
          fontFamily: "Proxima Nova, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2.5rem",
              alignItems: "start",
            }}
          >
            <div>
              <h3
                style={{
                  marginBottom: "1rem",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                Quick Links
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a href="/about" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  About Us
                </a>
                <a href="/awareness" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Awareness
                </a>
                <a href="/support" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Support
                </a>
                <a href="/contact" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Contact
                </a>
                <a href="/updates" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Keep Updated
                </a>
              </div>
            </div>


            <div>
              <h3
                style={{
                  marginBottom: "1rem",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                Contact
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <p style={{ margin: 0 }}>
                  <strong>Email:</strong> hello@thehivecc.org
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Phone:</strong> (803) 888-7725
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Address:</strong> 4704 Colonial Drive Columbia, SC
                </p>
              </div>
            </div>

            <div>
              <h3
                style={{
                  marginBottom: "1rem",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                Support Our Mission
              </h3>

              <a
                href="/donations"
                style={{
                  display: "inline-block",
                  marginTop: "0.5rem",
                  backgroundColor: "#F3C506",
                  color: "#1D979C",
                  textDecoration: "none",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "999px",
                  fontWeight: 700,
                }}
              >
                Donation Link
              </a>
            </div>
          </div>

          <div
            style={{
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.7)",
              margin: "3rem 0 1.5rem",
            }}
          />

          <p
            style={{
              textAlign: "center",
              margin: 0,
              color: "#FFFFFF",
              fontSize: "1rem",
            }}
          >
            © 2026 The Hive
          </p>
        </div>
      </footer>
    </main>
  );
}