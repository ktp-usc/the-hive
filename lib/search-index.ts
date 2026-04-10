export type SearchEntry = {
    title: string;
    description: string;
    href: string;
    keywords: string[];
};

export const searchIndex: SearchEntry[] = [
    {
        title: "Home",
        description: "Survivor-led support, prevention education, and practical care for women and girls across South Carolina.",
        href: "/",
        keywords: [
            "home", "hive", "community circle", "survivors", "healing", "hope",
            "south carolina", "women", "girls", "support", "domestic violence",
            "sexual assault", "donate", "mission", "what we do",
        ],
    },
    {
        title: "About Us",
        description: "Meet the people shaping The Hive — our founder, team, and board of directors.",
        href: "/about",
        keywords: [
            "about", "founder", "ashley olayinka", "ceo", "team", "staff",
            "board of directors", "leadership", "mission", "history", "why we were founded",
            "organization", "meet the team", "members", "who we are",
        ],
    },
    {
        title: "Our Partners",
        description: "Organizations, businesses, and community leaders who support The Hive's work.",
        href: "/about/our-partners",
        keywords: [
            "partners", "partnerships", "sponsors", "allstate", "bee box",
            "philanthropic", "nonprofit", "law enforcement", "faith", "churches",
            "education", "merchants", "community partners", "collaborate", "support us",
        ],
    },
    {
        title: "Our Impact",
        description: "Media features, awards, recognition, and strategic documents from The Hive.",
        href: "/about/our-impact",
        keywords: [
            "impact", "media", "press", "news", "articles", "interviews",
            "black enterprise", "essence festival", "awards", "recognition",
            "aspen soar fellow", "jefferson award", "20 under 40", "annual report",
            "strategic plan", "milestones", "accomplishments",
        ],
    },
    {
        title: "Prevention & Awareness",
        description: "Training, education, and prevention programs for schools, organizations, and communities.",
        href: "/awareness",
        keywords: [
            "prevention", "awareness", "training", "education", "buzzpak",
            "signature programs", "bee real", "healthy relationships", "consent",
            "boundaries", "technical assistance", "workshops", "facilitator",
            "youth", "campus", "school", "request training", "series",
            "healing is work", "cultural humility", "bystander", "language of liberation",
        ],
    },
    {
        title: "Support Services",
        description: "Peer advocacy, counseling, legal outreach, economic relief, and healing circles for survivors.",
        href: "/support",
        keywords: [
            "support", "services", "help", "crisis", "hotline", "counseling",
            "peer advocacy", "legal outreach", "economic relief", "healing circles",
            "safety planning", "survivor", "domestic violence help", "sexual assault",
            "stalking", "holistic", "get help", "resources", "emergency",
        ],
    },
    {
        title: "Donate & Impact",
        description: "Support survivors through donations, the Keeper's Club, Casita of Care, and volunteer opportunities.",
        href: "/donations",
        keywords: [
            "donate", "donation", "give", "support", "keepers club", "monthly giving",
            "casita of care", "volunteers", "volunteer", "pantry", "survivors pantry",
            "fundraise", "contribute", "financial support", "hope is fund",
            "membership", "impact", "network for good",
        ],
    },
    {
        title: "Events",
        description: "Community events, training sessions, and gatherings hosted by The Hive.",
        href: "/events",
        keywords: [
            "events", "calendar", "upcoming", "community", "gatherings",
            "training events", "schedule", "join us", "attend", "programs",
            "workshops", "dates", "google calendar",
        ],
    },
    {
        title: "Contact",
        description: "Get in touch with The Hive — by phone, email, or contact form.",
        href: "/contact",
        keywords: [
            "contact", "reach out", "phone", "email", "address", "location",
            "columbia sc", "south carolina", "message", "get in touch",
            "office", "hours", "kinnethia", "newsletter", "social media",
        ],
    },
];

export function searchPages(query: string): SearchEntry[] {
    const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!words.length) return [];

    const scored = searchIndex.map((entry) => {
        const haystack = [
            entry.title,
            entry.description,
            ...entry.keywords,
        ].join(" ").toLowerCase();

        const score = words.reduce((total, word) => {
            if (entry.title.toLowerCase().includes(word)) return total + 3;
            if (entry.description.toLowerCase().includes(word)) return total + 2;
            if (entry.keywords.some((k) => k.toLowerCase().includes(word))) return total + 1;
            return total;
        }, 0);

        return { entry, score };
    });

    return scored
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .map(({ entry }) => entry);
}
