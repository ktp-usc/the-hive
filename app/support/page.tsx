// app/support/page.tsx
"use client";
import React from "react";

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
      "Trained peer advocates provide confidential support, help you understand rights/options, and connect you to resources.",
    details: [
      "Ensure survivors understand their rights and options",
      "Social emotional support and safety planning",
      "For primary/secondary survivors ages 11+",
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
      "Wrap-around financial support for urgent needs — housing, food, utility help, relocation and transportation support.",
    details: [
      "Transitional housing",
      "Utility support & gas vouchers",
      "Food security & hotel accommodations",
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
    title: "Healing Circles",
    subtitle: "Peer-led group healing",
    summary:
      "Confidential healing circles using psycho-educational and wellness-based curriculum for community and recovery.",
    details: [
      "Queens Gather — Women 18+ (weekly fellowship)",
      "Bloom — Girls 11–18",
    ],
    cta: { label: "Learn about circles", href: "/support/healing-circles" },
    badge: "Groups",
  },
];

export default function SupportPage() {
  return (
    <main className="support-root">
      <section className="hero">
        <div className="hero-inner">
          <h1>Support Services — Peer Support</h1>
          <p className="hero-sub">
            “The Hive's support services are rooted in the belief that a
            survivor's journey deserves authentic and trustworthy support.”
          </p>
          <p className="hero-lead">
            Explore the many ways The Hive can help. Services include peer
            advocacy, counseling, economic relief, healing circles, and more —
            all provided with confidentiality and compassion.
          </p>
        </div>
      </section>

      <section className="cards-area" aria-labelledby="services-heading">
        <div className="container">
          <h2 id="services-heading">Explore Support Options</h2>
          <div className="grid">
            {CARDS.map((c) => (
              <article key={c.id} className="card" tabIndex={0}>
                <div className="card-head">
  <h3 className="card-title">
    <span className="card-icon" aria-hidden>
      {/* simple inline SVG icon chosen by card id */}
      {c.id === "peer-advocacy" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="currentColor" opacity="0.9"/>
          <path d="M4 20c0-3.31 2.69-6 6-6h4c3.31 0 6 2.69 6 6" fill="currentColor" opacity="0.6"/>
        </svg>
      ) : c.id === "economic-relief" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 6H7a4 4 0 000 8h10a4 4 0 000-8z" fill="currentColor" opacity="0.85"/>
        </svg>
      ) : c.id === "individual-counseling" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2a5 5 0 015 5v3a5 5 0 01-5 5 5 5 0 01-5-5V7a5 5 0 015-5z" fill="currentColor"/>
          <path d="M4 20a8 8 0 0116 0" fill="currentColor" opacity="0.7"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="12" cy="8" r="3" fill="currentColor" />
          <path d="M5 20a7 7 0 0114 0" fill="currentColor" opacity="0.8"/>
        </svg>
      )}
    </span>

    {c.title}
  </h3>

  {c.badge && <span className="badge">{c.badge}</span>}
</div>
                {c.subtitle && <div className="card-sub">{c.subtitle}</div>}
                <p className="card-summary">{c.summary}</p>

                {c.details && (
                  <ul className="card-list" aria-label={`${c.title} details`}>
                    {c.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}

                {c.cta && (
                  <div className="card-cta">
                    <a
                      href={c.cta.href ?? "#"}
                      className="btn btn-ghost"
                      onClick={(e) => {
                        if (!c.cta?.href) e.preventDefault();
                      }}
                    >
                      {c.cta.label}
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-area">
        <div className="container">
          <h2>Quick Contacts & Notes</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <h4>General Support / Advocacy</h4>
              <p>Call: <a href="tel:8038887725">803-888-7725</a></p>
              <p>Offices open Monday—Friday, 9AM—5PM</p>
            </div>

            <div className="contact-card">
              <h4>Groups & Counseling</h4>
              <p>Call: <a href="tel:8037668067">803-766-8067</a></p>
              <p>Services are confidential. We are mandated reporters.</p>
            </div>

            <div className="contact-card">
              <h4>Request Outreach / Training</h4>
              <p>Email: <a href="mailto:hello@thehivecc.org">hello@thehivecc.org</a></p>
              <p>Or call: <a href="tel:8038887725">803-888-7725</a></p>
            </div>
          </div>

          <div className="resource">
            <a className="btn btn-primary" href="/support/emotional-safety-plan">
              Emotional Safety Plan Resource — CLICK HERE
            </a>
          </div>
        </div>
      </section>

      <footer className="support-footer">
        <div className="container">
          
          <div className="socials">
            <a href="#" aria-label="facebook">Facebook</a>
            <a href="#" aria-label="instagram">Instagram</a>
            <a href="#" aria-label="twitter">Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}