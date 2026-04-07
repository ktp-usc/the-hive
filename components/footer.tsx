import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Impact the Hive", href: "/donations" },
  { label: "Our Partners", href: "/about/our-partners" },
  { label: "Support Services", href: "/support" },
  { label: "Prevention & Awareness", href: "/awareness" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-hive-blue px-6 pb-8 pt-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-3xl font-bold">The Hive</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
            Survivor-led support, prevention education, and practical care for
            women and girls across South Carolina.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white/90">Quick Links</h3>
          <div className="mt-4 grid gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/85 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white/90">Contact</h3>
          <div className="mt-4 space-y-2 text-sm leading-7 text-white/85">
            <p>
              Email:{" "}
              <a href="mailto:hello@thehivecc.org" className="font-semibold text-white">
                hello@thehivecc.org
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:8038887725" className="font-semibold text-white">
                803-888-7725
              </a>
            </p>
            <p>4704 Colonial Drive, Columbia, SC 29203</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/20 pt-4 text-center text-sm text-white/75">
        Copyright 2026 The Hive Community Circle
      </div>
    </footer>
  );
}
