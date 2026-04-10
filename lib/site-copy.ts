export const languageOptions = [
    { code: "en", label: "English" },
    { code: "es-MX", label: "Español" },
] as const;

export type LanguageCode = (typeof languageOptions)[number]["code"];

export const defaultLanguage: LanguageCode = "en";
export const languageStorageKey = "the-hive-language";
export const languageCookieKey = "the-hive-language";

export function isLanguageCode(value: string): value is LanguageCode {
    return languageOptions.some((option) => option.code === value);
}

type DeepWiden<T> = T extends string
    ? string
    : T extends readonly (infer U)[]
        ? readonly DeepWiden<U>[]
        : T extends object
            ? { [K in keyof T]: DeepWiden<T[K]> }
            : T;

const enPartners = {
    heroEyebrow: "Partnerships",
    heroTitle: "Our Partners",
    heroBody:
        "We are grateful for the organizations, businesses, and community leaders who support this work.",
    opportunitiesTitle: "Partnership Opportunities",
    beeBoxTitle: "The Bee Box",
    beeBoxBody:
        "Sitting in a cold waiting room, trembling with fear as one contemplates disclosing their abuse is never a vision one would desire to have, but this is often the reality for survivors of abuse and violence. The Bee Box was designed to support survivors who disclose in public settings such as healthcare settings, police stations, schools, or churches. The Bee Box has been uniquely designed to provide aid and support as a survivor embarks on their journey of healing, consisting of a grounding tool, tea for care and wellness, powerful affirmations written by fellow survivors, and an all-natural room enhancer spray.",
    beeBoxPartnerPrefix:
        "If you are interested in becoming a partner site for the Bee Box, please reach out to",
    categoryTitles: {
        philanthropic: "Philanthropic",
        nonprofit: "Non-Profit Organizations",
        lawEnforcement: "Law Enforcement",
        education: "Education",
        faithBased: "Faith Based",
        merchant: "Merchant Based",
        community: "Community Partners",
    },
};

const esPartners = {
    heroEyebrow: "Alianzas",
    heroTitle: "Nuestras Personas Aliadas",
    heroBody:
        "Agradecemos a las organizaciones, negocios y líderes comunitarios que apoyan este trabajo.",
    opportunitiesTitle: "Oportunidades de Alianza",
    beeBoxTitle: "La Bee Box",
    beeBoxBody:
        "Estar sentada en una sala de espera fría, temblando de miedo mientras una persona contempla revelar el abuso que ha vivido, nunca es una escena que alguien quisiera imaginar, pero con frecuencia esa es la realidad para sobrevivientes de abuso y violencia. La Bee Box fue diseñada para apoyar a sobrevivientes que revelan su experiencia en espacios públicos como entornos de salud, estaciones de policía, escuelas o iglesias. La Bee Box fue creada de forma única para brindar ayuda y apoyo mientras una sobreviviente inicia su camino de sanación; incluye una herramienta de regulación, té para el cuidado y el bienestar, afirmaciones poderosas escritas por otras sobrevivientes y un spray natural para armonizar el espacio.",
    beeBoxPartnerPrefix:
        "Si te interesa convertirte en un sitio aliado de la Bee Box, escríbenos a",
    categoryTitles: {
        philanthropic: "Filantrópicas",
        nonprofit: "Organizaciones sin Fines de Lucro",
        lawEnforcement: "Fuerza Pública",
        education: "Educación",
        faithBased: "Comunidades de Fe",
        merchant: "Comercios",
        community: "Aliadas Comunitarias",
    },
};

const enOurImpact = {
    heroEyebrow: "Our Impact",
    heroTitle: "Recognized. Published. Making Waves.",
    heroBody:
        "From national media features to strategic milestones, explore The Hive's growing footprint in the movement to end gender-based violence.",

    mediaEyebrow: "Press & Interviews",
    mediaTitle: "In the Media",
    mediaItems: [
        {
            outlet: "Black Enterprise",
            headline: "Changing the Conversation on Gender-Based Violence",
            description:
                "Featured for a survivor-led approach to healing and community care for Black women and girls in South Carolina.",
            href: "https://www.blackenterprise.com",
        },
        {
            outlet: "Essence Festival",
            headline: "Speaker & Facilitator",
            description:
                "Ashley Olayinka presented on social and racial justice, gender-based violence, and leadership at the Essence Festival.",
            href: "https://www.essence.com/festival",
        },
        {
            outlet: "The State Newspaper",
            headline: "20 Under 40",
            description:
                "Recognized among South Carolina's most influential young leaders for building survivor-centered spaces.",
            href: "https://www.thestate.com",
        },
    ],

    awardsEyebrow: "Honors & Distinctions",
    awardsTitle: "Awards & Recognition",
    awards: [
        {
            name: "Aspen SOAR Fellow",
            year: "2022",
            issuer: "Aspen Institute",
            description:
                "A highly selective fellowship recognizing emerging leaders driving systemic change in their communities.",
        },
        {
            name: "Jefferson Award",
            year: "",
            issuer: "Jefferson Awards Foundation",
            description:
                "Awarded for extraordinary public service and commitment to creating lasting community impact.",
        },
        {
            name: "20 Under 40",
            year: "",
            issuer: "The State Newspaper",
            description:
                "Honored among South Carolina's top young professionals making a meaningful difference.",
        },
    ],

    documentsEyebrow: "Strategic Documents",
    documentsTitle: "Reports & Plans",
    documents: [
        {
            title: "2025 Annual Report",
            description:
                "Our year in review — impact numbers, stories, and highlights from across The Hive's programs.",
            href: "https://www.thehivecc.org/2025-annual-report",
            cta: "View Report",
            external: true,
        },
        {
            title: "2021–2026 Strategic Plan",
            description:
                "The roadmap guiding our growth, programs, and community vision over five years.",
            href: "/strategic-plan.pdf",
            cta: "Download PDF",
            external: false,
        },
    ],
};

const enAwareness = {
    heroEyebrow: "Prevention &amp; Awareness",
    heroTitle: "Training & Education at The Hive",
    heroBody:
        "Healing centered learning rooted in culture, care, and connection.",
    valuesTitle: "Our Guiding Principles: HIVE Values",
    valuesIntro:
        "At The Hive, we approach training through our core values:",
    valuesPillars: ["Healing", "Interconnection", "Voice", "Empowerment"],
    valuesOutro:
        "These pillars reflect our commitment to nurturing trauma-informed, culturally grounded learning spaces where people can heal, connect, be heard, and grow together.",
    preventionTitle: "Prevention",
    preventionEyebrow:
        "Empowering young people to prevent harm and promote care",
    preventionBody:
        "From preteens to college students, our prevention education builds early awareness and healthy relationship skills. Ideal for middle and high school classrooms, youth groups, advocates in training programs, camp counselors, residence assistants, and first-year experience courses, BuzzPak and Interconnected: Healthy Relationships offer interactive, age-appropriate insights that engage students meaningfully.",
    signatureProgramsTitle: "Signature Programs",
    signaturePrograms: [
        {
            title: "BuzzPak multiseries",
            body:
                "Explore the foundations of healthy relationships and violence prevention. Engage real-world scenarios that address boundaries, consent, communication, and respect. Build skills to recognize harm, support peers, and create safer school and campus communities. Designed to spark dialogue, foster empathy, and equip young people to lead with awareness and accountability.",
        },
        {
            title: "Prevention & Awareness Course",
            body:
                "Our prevention and awareness courses are designed to meet organizations at every stage, from foundational 101-level learning to advanced 300+ trainings with opportunities for technical assistance. We provide tailored support to help integrate culturally specific approaches into your programs, and through our train-the-trainer model, we equip facilitators to carry this work forward in their own communities.",
        },
        {
            title: "Bee Real: Healthy Relationships & Boundaries",
            badge: "Available in 1x session",
            body:
                "Examine the building blocks of safe and supportive relationships. Learn to navigate boundaries, consent, and communication while recognizing the signs of unhealthy dynamics. Includes strategies for cultivating empathy, fostering mutual respect, and practicing accountability in everyday interactions. Designed to empower young people to make informed choices and nurture connections rooted in care.",
        },
    ],
    trainingTitle: "Signature Training Series",
    trainingEyebrow: "Education centered in equity, culture, and care",
    trainingBody:
        "These trainings are designed for Parents/Guardians/Caregivers, Faith Organizations, Community Groups, Law Enforcement, Healthcare Professionals, Advocates, K–12 School Professionals, Colleges/Universities and Educators, and Social Service Organizations. Invite us to your conference, professional development, retreat, classroom, or community meeting.",
    trainingNote: "Some training can be tailored for youth groups (11+)",
    trainingSeries: [
        {
            title: "Healing is Work: Centering the Brain, Body & Culture in Trauma Care",
            body:
                "Explore how trauma lives in the nervous system and how healing practices can be culturally relevant, affordable, and community-driven. Learn to identify trauma responses and co-regulate in support spaces.",
        },
        {
            title: "Interconnected: Reimagining Relationships, Boundaries & Belonging",
            body:
                "Go beyond the basics of healthy relationships to explore love, care, and accountability. Explore relationships beyond romantic partnerships, including family, community, and institutions. Includes cultural insights into consent, boundary setting, emotional safety, and trust-building.",
            tailored: true,
        },
        {
            title: "Language of Liberation: Understanding IPV, SA & Stalking in Context",
            body:
                "Learn the core definitions, root causes, and social dynamics of intimate partner violence, sexual assault, and stalking while naming how systems and identities intersect in survivor experiences. Build skills in supporting disclosure and safety planning.",
        },
        {
            title: "Claiming Voice: Storytelling, Disclosure & Holding Space Without Harm",
            body:
                "Gain skills in affirming survivor voice while reducing harm when disclosures are unexpected or occur in everyday interactions. Great for service providers, educators, or anyone who might be a first listener.",
            badge: "Free for Bee Box Partners!",
            tailored: true,
        },
        {
            title: "Cultural Resilience in Practice: A BIPOC Approach to Trauma-Informed Care",
            body:
                "Move past checkbox trauma-informed care. This session equips you with tools grounded in cultural practices and uplifts community-defined healing, spiritual safety, and non-clinical responses.",
        },
        {
            title: "Cultural Humility: A Liberatory Practice for Safer Communities",
            body:
                "Unpack the lifelong practice of cultural humility. Learn to engage identity, power, and discomfort while building more honest, accountable systems and relationships. Includes strategies for naming harm, making repairs, and navigating discomfort with intentional dialogue.",
            tailored: true,
        },
        {
            title: "From Bystander to Community Keeper: Responding to Harm with Care & Courage",
            body:
                "Build practical skills to notice, name, and navigate harm in your everyday environment. From schools to workplaces to public spaces, this training is about courage and community care in action. Covers grounded intervention, survivor-led support, and how to avoid unintentional retraumatization.",
            tailored: true,
        },
    ],
    tailoredNote: "This training can be tailored for youth groups (11+)",
    technicalAssistanceTitle: "Technical Assistance",
    technicalAssistanceEyebrow: "Let's build together",
    technicalAssistanceBody:
        "At The Hive, we know that every organization, school, or community group has unique needs when it comes to creating safer, more supportive spaces. That's why we offer customized technical assistance, partnering with you to strengthen capacity, develop survivor-centered responses, and build systems of care that last. Whether you're just beginning to explore anti-violence work or looking to deepen your team's skills, our experts are here to listen, co-create, and guide. Together, we'll design a plan that reflects your culture, values, and goals.",
    technicalAssistanceOfferingsTitle: "Offerings",
    technicalAssistanceOfferings: [
        {
            title: "Custom Training Design",
            body: "Tailored workshops and learning journeys for your team.",
        },
        {
            title: "Capacity Building Plans",
            body: "Strengthening internal systems, policies, and practices.",
        },
        {
            title: "Collaborative Problem-Solving",
            body: "Partnering to navigate challenges and identify solutions.",
        },
        {
            title: "Ongoing Support",
            body: "Continued consultation to ensure your team can sustain the work.",
        },
    ],
    ctaTitle: "Ready to Learn with Us?",
    ctaBody:
        "Whether you're booking a training, exploring a partnership, or just getting started, we're here for it.",
    requestTraining: "Request a Training",
    bookCall: "Book a Discovery Call",
    downloadCatalog: "Download Training Catalog",
    contactTeam: "Contact Our Team",
};

const esAwareness = {
    heroEyebrow: "Prevención y Concientización",
    heroTitle: "Capacitación y Educación en The Hive",
    heroBody:
        "Aprendizaje centrado en la sanación, arraigado en la cultura, el cuidado y la conexión.",
    valuesTitle: "Nuestros Principios Guía: Valores HIVE",
    valuesIntro:
        "En The Hive abordamos la capacitación desde nuestros valores centrales:",
    valuesPillars: ["Sanación", "Interconexión", "Voz", "Empoderamiento"],
    valuesOutro:
        "Estos pilares reflejan nuestro compromiso con espacios de aprendizaje informados por el trauma y culturalmente arraigados, donde las personas pueden sanar, conectar, ser escuchadas y crecer juntas.",
    preventionTitle: "Prevención",
    preventionEyebrow:
        "Fortaleciendo a la juventud para prevenir el daño y promover el cuidado",
    preventionBody:
        "Desde la preadolescencia hasta la universidad, nuestra educación en prevención desarrolla conciencia temprana y habilidades para relaciones saludables. Es ideal para aulas de secundaria y preparatoria, grupos juveniles, programas de formación para defensoras, consejeras de campamento, asistentes de residencia y cursos de primer año. BuzzPak e Interconnected: Healthy Relationships ofrecen experiencias interactivas y apropiadas para la edad que conectan de manera significativa con estudiantes.",
    signatureProgramsTitle: "Programas Distintivos",
    signaturePrograms: [
        {
            title: "Serie múltiple BuzzPak",
            body:
                "Explora los fundamentos de las relaciones saludables y la prevención de la violencia. Trabaja con escenarios reales sobre límites, consentimiento, comunicación y respeto. Desarrolla habilidades para reconocer el daño, apoyar a tus pares y crear comunidades escolares y universitarias más seguras. Diseñado para abrir diálogo, fomentar empatía y equipar a la juventud para liderar con conciencia y responsabilidad.",
        },
        {
            title: "Curso de Prevención y Concientización",
            body:
                "Nuestros cursos de prevención y concientización están diseñados para adaptarse a organizaciones en todas las etapas, desde aprendizaje inicial de nivel 101 hasta capacitaciones avanzadas de nivel 300+ con oportunidades de asistencia técnica. Ofrecemos apoyo personalizado para integrar enfoques culturalmente específicos en tus programas y, mediante nuestro modelo de formación de facilitadoras, fortalecemos la continuidad del trabajo en las comunidades.",
        },
        {
            title: "Bee Real: Relaciones Saludables y Límites",
            badge: "Disponible en 1 sesión",
            body:
                "Examina los elementos que construyen relaciones seguras y de apoyo. Aprende a navegar límites, consentimiento y comunicación mientras reconoces señales de dinámicas poco saludables. Incluye estrategias para cultivar empatía, fomentar el respeto mutuo y practicar la responsabilidad en la vida diaria. Diseñado para que la juventud tome decisiones informadas y construya vínculos basados en el cuidado.",
        },
    ],
    trainingTitle: "Serie Distintiva de Capacitación",
    trainingEyebrow: "Educación centrada en la equidad, la cultura y el cuidado",
    trainingBody:
        "Estas capacitaciones están diseñadas para madres, padres y personas cuidadoras, organizaciones de fe, grupos comunitarios, fuerza pública, profesionales de la salud, personas defensoras, personal escolar de K–12, universidades y personas educadoras, así como organizaciones de servicios sociales. Invítanos a tu conferencia, desarrollo profesional, retiro, salón de clases o reunión comunitaria.",
    trainingNote: "Algunas capacitaciones pueden adaptarse para grupos juveniles (11+)",
    trainingSeries: [
        {
            title: "Sanar es Trabajo: Enfocando el Cerebro, el Cuerpo y la Cultura en el Cuidado del Trauma",
            body:
                "Explora cómo el trauma vive en el sistema nervioso y cómo las prácticas de sanación pueden ser culturalmente relevantes, accesibles y guiadas por la comunidad. Aprende a identificar respuestas traumáticas y a co-regular en espacios de apoyo.",
        },
        {
            title: "Interconectadas: Reimaginando Relaciones, Límites y Pertenencia",
            body:
                "Ve más allá de lo básico sobre relaciones saludables para explorar amor, cuidado y responsabilidad. Analiza vínculos más allá de lo romántico, incluyendo familia, comunidad e instituciones. Incluye perspectivas culturales sobre consentimiento, establecimiento de límites, seguridad emocional y construcción de confianza.",
            tailored: true,
        },
        {
            title: "Lenguaje de Liberación: Entender IPV, SA y el Acoso en su Contexto",
            body:
                "Aprende las definiciones centrales, las causas de raíz y las dinámicas sociales de la violencia de pareja, la agresión sexual y el acoso, reconociendo cómo los sistemas y las identidades se cruzan en la experiencia de las sobrevivientes. Fortalece habilidades para apoyar revelaciones y planes de seguridad.",
        },
        {
            title: "Reivindicar la Voz: Narración, Revelación y Contener Sin Hacer Daño",
            body:
                "Desarrolla habilidades para afirmar la voz de las sobrevivientes y reducir el daño cuando las revelaciones llegan de forma inesperada o en interacciones cotidianas. Ideal para proveedoras de servicios, educadoras o cualquier persona que pueda ser la primera en escuchar.",
            badge: "Gratis para sitios aliados de Bee Box",
            tailored: true,
        },
        {
            title: "Resiliencia Cultural en la Práctica: Un Enfoque BIPOC para el Cuidado Informado por Trauma",
            body:
                "Ve más allá del enfoque superficial de atención informada por el trauma. Esta sesión ofrece herramientas arraigadas en prácticas culturales y eleva formas de sanación definidas por la comunidad, la seguridad espiritual y respuestas no clínicas.",
        },
        {
            title: "Humildad Cultural: Una Práctica Liberadora para Comunidades Más Seguras",
            body:
                "Profundiza en la práctica de toda la vida que implica la humildad cultural. Aprende a abordar identidad, poder e incomodidad mientras construyes sistemas y relaciones más honestas y responsables. Incluye estrategias para nombrar el daño, reparar y atravesar la incomodidad mediante un diálogo intencional.",
            tailored: true,
        },
        {
            title: "De Observadora a Guardiana Comunitaria: Responder al Daño con Cuidado y Valentía",
            body:
                "Desarrolla habilidades prácticas para notar, nombrar y abordar el daño en tu entorno cotidiano. Desde escuelas hasta lugares de trabajo y espacios públicos, esta capacitación trata sobre valentía y cuidado comunitario en acción. Incluye intervención situada, apoyo guiado por sobrevivientes y cómo evitar retraumatización no intencional.",
            tailored: true,
        },
    ],
    tailoredNote: "Esta capacitación puede adaptarse para grupos juveniles (11+)",
    technicalAssistanceTitle: "Asistencia Técnica",
    technicalAssistanceEyebrow: "Construyamos juntas",
    technicalAssistanceBody:
        "En The Hive sabemos que cada organización, escuela o grupo comunitario tiene necesidades únicas cuando se trata de crear espacios más seguros y de mayor apoyo. Por eso ofrecemos asistencia técnica personalizada, trabajando contigo para fortalecer capacidades, desarrollar respuestas centradas en sobrevivientes y construir sistemas de cuidado duraderos. Ya sea que apenas estés comenzando a explorar el trabajo contra la violencia o quieras profundizar las habilidades de tu equipo, nuestras expertas están aquí para escuchar, cocrear y acompañar. Juntas diseñaremos un plan que refleje tu cultura, tus valores y tus metas.",
    technicalAssistanceOfferingsTitle: "Ofertas",
    technicalAssistanceOfferings: [
        {
            title: "Diseño de Capacitación a la Medida",
            body: "Talleres y recorridos de aprendizaje adaptados para tu equipo.",
        },
        {
            title: "Planes de Fortalecimiento Institucional",
            body: "Fortalecimiento de sistemas, políticas y prácticas internas.",
        },
        {
            title: "Resolución Colaborativa de Problemas",
            body: "Acompañamiento para navegar desafíos e identificar soluciones.",
        },
        {
            title: "Apoyo Continuo",
            body: "Consulta constante para que tu equipo pueda sostener este trabajo.",
        },
    ],
    ctaTitle: "¿Lista para Aprender con Nosotras?",
    ctaBody:
        "Ya sea que quieras agendar una capacitación, explorar una alianza o simplemente empezar, aquí estamos para acompañarte.",
    requestTraining: "Solicitar una Capacitación",
    bookCall: "Agendar una Llamada Inicial",
    downloadCatalog: "Descargar el Catálogo de Capacitación",
    contactTeam: "Contactar a Nuestro Equipo",
};

const esMxAwareness = {
    ...esAwareness,
    heroEyebrow: "Prevención y Concientización",
    heroTitle: "Capacitación y Educación en The Hive",
    heroBody: "Aprendizaje centrado en la sanación, arraigado en la cultura, el cuidado y la conexión.",

    trainingSeries: [
        {
            title: "Sanar es Trabajo: Enfocando el Cerebro, el Cuerpo y la Cultura en el Cuidado del Trauma",
            body: esAwareness.trainingSeries[0].body,
        },
        {
            title: "Interconectadas: Reimaginando Relaciones, Límites y Pertenencia",
            body: esAwareness.trainingSeries[1].body,
            tailored: true,
        },
        {
            title: "Lenguaje de Liberación: Entender IPV, SA y el Acoso en su Contexto",
            body: esAwareness.trainingSeries[2].body,
        },
        {
            title: "Reivindicar la Voz: Narración, Revelación y Contener Sin Hacer Daño",
            body: esAwareness.trainingSeries[3].body,
            badge: esAwareness.trainingSeries[3].badge,
            tailored: true,
        },
        {
            title: "Resiliencia Cultural en la Práctica: Un Enfoque BIPOC para el Cuidado Informado por Trauma",
            body: esAwareness.trainingSeries[4].body,
        },
        {
            title: "Humildad Cultural: Una Práctica Liberadora para Comunidades Más Seguras",
            body: esAwareness.trainingSeries[5].body,
            tailored: true,
        },
        {
            title: "De Observadora a Guardiana Comunitaria: Responder al Daño con Cuidado y Valentía",
            body: esAwareness.trainingSeries[6].body,
            tailored: true,
        },
    ],
};

const enEvents = {
    eyebrow: "Community Calendar",
    title: "Stay up to date with Hive events.",
    body:
        "This calendar is connected directly to The Hive's Google Calendar, so new events and updates appear here automatically.",
    upcomingEyebrow: "Coming Up",
    upcomingTitle: "A quick look at what's next.",
    upcomingBody:
        "These upcoming event cards sync automatically with the same Google Calendar shown below.",
    upcomingPrivacyNote:
        "Some entries may appear as Busy because Google Calendar is hiding public event details.",
    upcomingLoading: "Loading upcoming events...",
    upcomingEmpty: "No upcoming events are listed right now. Check back soon or open the full calendar.",
    upcomingCta: "View calendar day",
    allDayLabel: "All day",
    openCalendar: "Open Full Calendar",
    askAboutEvent: "Ask About an Event",
    iframeTitle: "The Hive events calendar",
};

const esEvents = {
    eyebrow: "Calendario Comunitario",
    title: "Mantente al día con los eventos de The Hive.",
    body:
        "Este calendario está conectado directamente con el Google Calendar de The Hive, así que los nuevos eventos y actualizaciones aparecen aquí automáticamente.",
    upcomingEyebrow: "Pr\u00f3ximamente",
    upcomingTitle: "Un vistazo r\u00e1pido a lo que sigue.",
    upcomingBody:
        "Estas tarjetas de pr\u00f3ximos eventos se sincronizan autom\u00e1ticamente con el mismo Google Calendar que aparece abajo.",
    upcomingPrivacyNote:
        "Algunas entradas pueden aparecer como Busy porque Google Calendar est\u00e1 ocultando los detalles p\u00fablicos del evento.",
    upcomingLoading: "Cargando pr\u00f3ximos eventos...",
    upcomingEmpty:
        "No hay eventos pr\u00f3ximos en este momento. Vuelve pronto o abre el calendario completo.",
    upcomingCta: "Ver d\u00eda en el calendario",
    allDayLabel: "Todo el d\u00eda",
    openCalendar: "Abrir Calendario Completo",
    askAboutEvent: "Preguntar por un Evento",
    iframeTitle: "Calendario de eventos de The Hive",
};

const enDonationsPage = {
    tabs: {
        casita: "Casita of Care",
        keepers: "The Keepers Club",
    },
    heroEyebrow: "Impact the Hive",
    heroTitle:
        "Support survivors through spaces of care and sustaining generosity.",
    primaryCta: "Donate Now",
    secondaryCta: "Volunteer",
    highlights: [
        {
            title: "Casita of Care",
            body:
                "A boutique-style resource space designed around dignity, privacy, and belonging.",
        },
        {
            title: "Monthly Giving",
            body:
                "The Keepers Club creates steady support that helps The Hive respond month after month.",
        },
        {
            title: "Community Powered",
            body:
                "Every gift helps survivors feel seen, supported, and connected to a stronger community.",
        },
    ],
    volunteerTitle: "Volunteer Opportunities",
    givingSectionsEyebrow: "Giving Sections",
    givingSectionsTitle: "Explore the giving story that speaks to you.",
    volunteerOpportunities: [
        {
            title: "The Voices of Washindi-Speaker’s Bureau",
            description:
                "A community and platform for survivors of sexual assault and intimate partner violence to share their stories of resiliency and courage through the incorporation of the arts and craft of storytelling. Additional training is required.",
        },
        {
            title: "Hive Ambassadors",
            description:
                "If you love sharing The Hive, then tabling and general outreach may interest you. In this role you will have the opportunity to connect with the community and share about The Hive at community based events.",
        },
        {
            title: "Hive Hostesses/Hosts",
            description:
                "Hive Hostesses/Hosts are special event volunteers who may not have the capacity to volunteer regularly but desire to support our work. As a volunteer in this area you will be contacted to volunteer when we have Hive hosted events such as our Annual SC Survivors Summit or fundraisers.",
        },
        {
            title: "Volunteer Groups",
            description:
                "We have opportunities available for groups looking to volunteer together. These opportunities for groups of 5 or more include packing Bee Boxes of support for survivors or assembling BuzzPaks for our prevention education programming for youth.",
        },
    ],
    casita: {
        eyebrow: "Casita of Care",
        title: "More Than a Pantry. A Place of Belonging.",
        paragraphs: [
            "The Casita of Care reimagines what free resources can look and feel like. This isn't a thrift store or donation center, it's a thoughtfully designed boutique where survivors can shop with dignity for the items they need and want.",
            "From culturally specific hair and beauty products to household essentials and cleaning supplies, every detail is chosen with care and intention.",
        ],
        cta: "Support the Casita",
        mainAlt: "Casita of Care main photo",
        refugeTitle: "A Refuge for Survivors in the Midlands",
        refugeParagraphs: [
            "The Casita of Care serves those in the South Carolina Midlands who are healing from sexual assault, intimate partner violence, and stalking.",
            "Survivors leave feeling a little more hopeful, a little more grounded, and with one less thing on their worry list. They walk away empowered, knowing their story is valued, their healing matters, and they are part of a community standing with them.",
        ],
        detailAlt: "Casita of Care detail photo",
        waysEyebrow: "Ways to Help",
        waysTitle: "Support the space with practical care.",
        waysBody:
            "Help stock the Casita, sustain the experience, and keep this resource ready for each survivor who comes through the door.",
        volunteerCta: "Volunteer",
        wishlistCta: "Casita Wishlist",
        wishlistNote:
            "Want to donate practical items directly? The Casita of Care Amazon wishlist makes it easy to send needed essentials straight to the space.",
        waysToGive: [
            {
                title: "Donate essential items",
                description:
                    "Stock the space with hygiene products, cleaning supplies, household basics, and beauty items survivors actually want to choose from.",
            },
            {
                title: "Give financially",
                description:
                    "Help keep the shelves full, the space maintained, and the Casita ready for each person who walks through the door.",
            },
            {
                title: "Volunteer with care",
                description:
                    "Support sorting, restocking, and welcoming community efforts that make the Casita feel calm, beautiful, and survivor-centered.",
            },
        ],
        communityEyebrow: "Community Story",
        communityTitle: "A Community Rallies: How the Casita of Care Came to Be",
        communityLead:
            "The story of the Casita of Care is one of persistence, heart, and the power of community.",
        communityParagraphs: [
            "The Casita of Care started with a simple conviction: survivors deserve dignity when accessing resources. The Hive began keeping hygiene and household items in a closet for those who needed them. In early 2025, a generous donation drive brought in so many supplies that the overflow broke the closet doors.",
            "After moving to a donated storage shed, the team faced a new challenge: the South Carolina sun made the space hard to use. Early support from local partners helped make the shed functional through insulation, electricity, and the first infrastructure upgrades.",
            "Then the broader community stepped in. Business owners, volunteers, and generous supporters helped transform the idea into something beautiful and real. What started as a stopgap solution became a boutique-style resource space created with care, intention, and deep belief in survivor-centered healing.",
        ],
        dedicationTitle: "Dedicated in Honor of Brianna",
        dedicationParagraphs: [
            "The Casita of Care is dedicated in honor of Brianna, a beloved teacher, sister, daughter, auntie, friend, and lover of crochet. May the warmth and care she radiated in life continue to live through this space.",
            "We also dedicate the Casita of Care to all those whose lives were taken by domestic violence, sexual assault, and trafficking. May their names be held with dignity, and may this space offer light, care, and hope to our community.",
        ],
        thanksTitle: "Thank You to Our Community Partners",
        thanksBody:
            "The Casita of Care exists because over 25 local businesses and individuals said yes. From interior design and construction to marketing, flooring, HVAC, and beyond, each partner contributed their time, talent, and resources to make this vision a reality.",
    },
    keepers: {
        eyebrow: "The Keepers Club",
        title: "Stewarding sustainability for survivors every month.",
        paragraphs: [
            "The Keepers Club is The Hive's monthly giving community. Recurring support helps create a steadier budget for emergency relief, counseling, outreach, and prevention work as demand continues to grow.",
            "It's designed for people who want their generosity to keep showing up month after month, helping survivors access stable, responsive care when they need it most.",
        ],
        cta: "Join The Keepers Club",
        mainAlt: "Keepers Club main photo",
        benefitsEyebrow: "Member Benefits",
        benefitsTitle: "A giving community with meaningful connection.",
        benefits: [
            "A welcome packet with a Keeper's Club shirt and Hive decal.",
            "Bee In The Know reports and annual impact updates.",
            "Exclusive invitations to Hive events throughout the year.",
            "A year-end tax deduction letter for recurring gifts.",
        ],
        contactLabel: "Contact",
        contactPrefix:
            "For questions about The Keepers Club, contact The Hive's Philanthropy and Partnerships Officer at",
        focusedImpactTitle: "Focused impact",
        focusedImpactBody:
            "Monthly gifts help sustain hotel stays, counseling access, survivor-based outreach, and awareness and prevention training throughout the year.",
        monthlyEyebrow: "Monthly Levels",
        monthlyTitle: "Choose the level of support that fits your giving.",
        monthlyBody:
            "Every tier helps fuel survivor-centered care, with monthly giving that makes The Hive's response more consistent and sustainable.",
        tiers: [
            {
                amount: "$10/mo",
                yearly: "$120/year",
                name: "Hives of Hope",
                description:
                    "A simple monthly gift that helps provide practical support like Bee Boxes and everyday essentials.",
            },
            {
                amount: "$20/mo",
                yearly: "$240/year",
                name: "Beeyond Donor",
                description:
                    "Strengthens access to survivor support such as counseling and other stabilizing services throughout the year.",
            },
            {
                amount: "$30/mo",
                yearly: "$360/year",
                name: "Beelievers Circle",
                description:
                    "Creates dependable funding that helps cover urgent needs and extend survivor-centered care each month.",
            },
            {
                amount: "$50/mo",
                yearly: "$600/year",
                name: "Pollinator Pledge",
                description:
                    "Expands The Hive's ability to fund prevention training, outreach, and stronger long-term community impact.",
            },
        ],
        supportedEyebrow: "Supported Through Your Giving",
        supportedTitle: "Recurring support helps fuel this work all year long.",
        impactAreas: [
            {
                title: "Emergency and Economic Relief",
                alt: "Emergency and economic relief support",
            },
            {
                title: "Counseling",
                alt: "Counseling support",
            },
            {
                title: "Survivor-Based Outreach",
                alt: "Survivor-based outreach",
            },
            {
                title: "Education and Prevention",
                alt: "Education and prevention",
            },
        ],
    },
};

const esDonationsPage = {
    tabs: {
        casita: "Casita of Care",
        keepers: "The Keepers Club",
    },
    heroEyebrow: "Impulsa a The Hive",
    heroTitle:
        "Apoya a las sobrevivientes a través de espacios de cuidado y una generosidad sostenida.",
    primaryCta: "Donar Ahora",
    secondaryCta: "Hacer Voluntariado",
    highlights: [
        {
            title: "Casita of Care",
            body:
                "Un espacio de recursos estilo boutique diseñado alrededor de la dignidad, la privacidad y el sentido de pertenencia.",
        },
        {
            title: "Donación Mensual",
            body:
                "The Keepers Club crea un apoyo constante que ayuda a The Hive a responder mes tras mes.",
        },
        {
            title: "Impulsado por la Comunidad",
            body:
                "Cada aporte ayuda a que las sobrevivientes se sientan vistas, apoyadas y conectadas con una comunidad más fuerte.",
        },
    ],
    volunteerTitle: "Oportunidades de Voluntariado",
    givingSectionsEyebrow: "Formas de Dar",
    givingSectionsTitle: "Explora la historia de generosidad que más conecta contigo.",
    volunteerOpportunities: [
        {
            title: "The Voices of Washindi-Speaker’s Bureau",
            description:
                "Una comunidad y plataforma para sobrevivientes de agresión sexual y violencia de pareja que comparten sus historias de resiliencia y valentía a través del arte y la narración. Se requiere capacitación adicional.",
        },
        {
            title: "Embajadoras de Hive",
            description:
                "Si te encanta compartir The Hive, participar en mesas informativas y actividades de alcance comunitario puede ser para ti. En este rol tendrás la oportunidad de conectar con la comunidad y hablar sobre The Hive en eventos locales.",
        },
        {
            title: "Anfitrionas y Anfitriones de Hive",
            description:
                "Las anfitrionas y anfitriones de Hive son personas voluntarias para eventos especiales que quizá no puedan participar de manera regular, pero desean apoyar nuestro trabajo. En esta área te contactaremos cuando tengamos eventos organizados por The Hive, como nuestra Cumbre Anual de Sobrevivientes de SC o actividades de recaudación.",
        },
        {
            title: "Grupos de Voluntariado",
            description:
                "Tenemos oportunidades para grupos que quieren hacer voluntariado en conjunto. Estas oportunidades para grupos de 5 o más personas incluyen empacar Bee Boxes de apoyo para sobrevivientes o armar BuzzPaks para nuestra programación de prevención con jóvenes.",
        },
    ],
    casita: {
        eyebrow: "Casita of Care",
        title: "Más que una despensa. Un lugar de pertenencia.",
        paragraphs: [
            "La Casita of Care replantea cómo pueden verse y sentirse los recursos gratuitos. No es una tienda de segunda mano ni un centro de donaciones; es una boutique diseñada con intención donde las sobrevivientes pueden elegir con dignidad los artículos que necesitan y desean.",
            "Desde productos de belleza y cuidado del cabello culturalmente pertinentes hasta artículos esenciales para el hogar y productos de limpieza, cada detalle se selecciona con cuidado e intención.",
        ],
        cta: "Apoyar la Casita",
        mainAlt: "Foto principal de Casita of Care",
        refugeTitle: "Un Refugio para Sobrevivientes en Midlands",
        refugeParagraphs: [
            "La Casita of Care sirve a personas del área Midlands de Carolina del Sur que están sanando de agresión sexual, violencia de pareja y acoso.",
            "Las sobrevivientes salen sintiéndose un poco más esperanzadas, un poco más centradas y con una preocupación menos en su lista. Se van fortalecidas, sabiendo que su historia tiene valor, que su sanación importa y que forman parte de una comunidad que está con ellas.",
        ],
        detailAlt: "Foto de detalle de Casita of Care",
        waysEyebrow: "Formas de Ayudar",
        waysTitle: "Apoya este espacio con cuidado práctico.",
        waysBody:
            "Ayuda a abastecer la Casita, sostener la experiencia y mantener este recurso listo para cada sobreviviente que llegue a la puerta.",
        volunteerCta: "Hacer Voluntariado",
        wishlistCta: "Lista de Deseos de la Casita",
        wishlistNote:
            "¿Quieres donar artículos prácticos directamente? La lista de Amazon de Casita of Care facilita enviar lo necesario directamente al espacio.",
        waysToGive: [
            {
                title: "Dona artículos esenciales",
                description:
                    "Abastece el espacio con productos de higiene, limpieza, básicos para el hogar y artículos de belleza que las sobrevivientes realmente quieran elegir.",
            },
            {
                title: "Aporta económicamente",
                description:
                    "Ayuda a mantener los estantes llenos, el espacio en buen estado y la Casita lista para cada persona que cruce la puerta.",
            },
            {
                title: "Haz voluntariado con cuidado",
                description:
                    "Apoya la clasificación, el reabastecimiento y los esfuerzos comunitarios de bienvenida que hacen que la Casita se sienta serena, hermosa y centrada en sobrevivientes.",
            },
        ],
        communityEyebrow: "Historia Comunitaria",
        communityTitle: "Una Comunidad se Une: Cómo Nació la Casita of Care",
        communityLead:
            "La historia de la Casita of Care es una historia de persistencia, corazón y poder comunitario.",
        communityParagraphs: [
            "La Casita of Care comenzó con una convicción sencilla: las sobrevivientes merecen dignidad al acceder a recursos. The Hive empezó guardando artículos de higiene y hogar en un clóset para quienes los necesitaban. A inicios de 2025, una generosa colecta trajo tantos suministros que el exceso rompió las puertas del clóset.",
            "Después de trasladarse a una bodega donada, el equipo enfrentó un nuevo reto: el sol de Carolina del Sur hacía difícil usar el espacio. El apoyo inicial de aliadas locales ayudó a hacer funcional la bodega con aislamiento, electricidad y las primeras mejoras de infraestructura.",
            "Luego intervino la comunidad en general. Personas dueñas de negocios, voluntarias y donantes generosas ayudaron a transformar la idea en algo hermoso y real. Lo que comenzó como una solución temporal se convirtió en un espacio de recursos estilo boutique creado con cuidado, intención y una profunda convicción en la sanación centrada en sobrevivientes.",
        ],
        dedicationTitle: "Dedicada en Honor a Brianna",
        dedicationParagraphs: [
            "La Casita of Care está dedicada en honor a Brianna, una querida maestra, hermana, hija, tía, amiga y amante del crochet. Que la calidez y el cuidado que irradiaba en vida sigan presentes en este espacio.",
            "También dedicamos la Casita of Care a todas las personas cuyas vidas fueron arrebatadas por la violencia doméstica, la agresión sexual y la trata. Que sus nombres sean honrados con dignidad, y que este espacio ofrezca luz, cuidado y esperanza a nuestra comunidad.",
        ],
        thanksTitle: "Gracias a Nuestras Personas Aliadas Comunitarias",
        thanksBody:
            "La Casita of Care existe porque más de 25 negocios y personas de la comunidad dijeron sí. Desde diseño interior y construcción hasta mercadeo, pisos, HVAC y más, cada aliada aportó su tiempo, talento y recursos para hacer realidad esta visión.",
    },
    keepers: {
        eyebrow: "The Keepers Club",
        title: "Sosteniendo cada mes la continuidad para las sobrevivientes.",
        paragraphs: [
            "The Keepers Club es la comunidad de donación mensual de The Hive. El apoyo recurrente ayuda a crear un presupuesto más estable para alivio de emergencia, consejería, alcance comunitario y trabajo de prevención mientras la demanda sigue creciendo.",
            "Está pensado para personas que desean que su generosidad siga presente mes tras mes, ayudando a que las sobrevivientes accedan a un cuidado estable y oportuno cuando más lo necesitan.",
        ],
        cta: "Unirme a The Keepers Club",
        mainAlt: "Foto principal de The Keepers Club",
        benefitsEyebrow: "Beneficios para Miembros",
        benefitsTitle: "Una comunidad de generosidad con conexión significativa.",
        benefits: [
            "Un paquete de bienvenida con camiseta de Keeper's Club y calcomanía de The Hive.",
            "Informes Bee In The Know y actualizaciones anuales de impacto.",
            "Invitaciones exclusivas a eventos de The Hive durante el año.",
            "Carta anual para deducción fiscal de donaciones recurrentes.",
        ],
        contactLabel: "Contacto",
        contactPrefix:
            "Si tienes preguntas sobre The Keepers Club, comunícate con la persona encargada de Filantropía y Alianzas de The Hive en",
        focusedImpactTitle: "Impacto Enfocado",
        focusedImpactBody:
            "Las donaciones mensuales ayudan a sostener estadías en hoteles, acceso a consejería, alcance liderado por sobrevivientes y capacitaciones de concientización y prevención durante todo el año.",
        monthlyEyebrow: "Niveles Mensuales",
        monthlyTitle: "Elige el nivel de apoyo que mejor se ajusta a tu forma de donar.",
        monthlyBody:
            "Cada nivel impulsa el cuidado centrado en sobrevivientes, con una donación mensual que hace que la respuesta de The Hive sea más consistente y sostenible.",
        tiers: [
            {
                amount: "$10/mes",
                yearly: "$120/año",
                name: "Hives of Hope",
                description:
                    "Una donación mensual sencilla que ayuda a brindar apoyo práctico como Bee Boxes y artículos esenciales del día a día.",
            },
            {
                amount: "$20/mes",
                yearly: "$240/año",
                name: "Beeyond Donor",
                description:
                    "Fortalece el acceso a apoyo para sobrevivientes, como consejería y otros servicios de estabilización durante el año.",
            },
            {
                amount: "$30/mes",
                yearly: "$360/año",
                name: "Beelievers Circle",
                description:
                    "Crea una base de financiamiento confiable que ayuda a cubrir necesidades urgentes y ampliar el cuidado centrado en sobrevivientes cada mes.",
            },
            {
                amount: "$50/mes",
                yearly: "$600/año",
                name: "Pollinator Pledge",
                description:
                    "Amplía la capacidad de The Hive para financiar capacitaciones de prevención, alcance comunitario e impacto a largo plazo.",
            },
        ],
        supportedEyebrow: "Sostenido Gracias a tu Donación",
        supportedTitle: "El apoyo recurrente impulsa este trabajo durante todo el año.",
        impactAreas: [
            {
                title: "Alivio de Emergencia y Económico",
                alt: "Apoyo de alivio de emergencia y económico",
            },
            {
                title: "Consejería",
                alt: "Apoyo de consejería",
            },
            {
                title: "Alcance Liderado por Sobrevivientes",
                alt: "Alcance liderado por sobrevivientes",
            },
            {
                title: "Educación y Prevención",
                alt: "Educación y prevención",
            },
        ],
    },
};

const en = {
    nav: {
        brand: "The Hive",
        logoAlt: "The Hive",
        home: "Home",
        about: "About Us",
        aboutUs: "About Us",
        impact: "Impact",
        ourImpact: "Our Impact",
        partners: "Our Partners",
        support: "Support",
        supportServices: "Support Services",
        prevention: "Prevention",
        awareness: "Awareness",
        events: "Events",
        contact: "Contact",
        keepUpdated: "Keep Updated",
        donate: "Donate",
        languageToggleLabel: "Select language",
        openMenu: "Open navigation menu",
        closeMenu: "Close navigation menu",
    },
    common: {
        safeExit: "Safe Exit",
        safeExitAriaLabel: "Safe exit",
    },
    footer: {
        brand: "The Hive",
        tagline:
            "Survivor-led support, prevention education, and practical care for women and girls across South Carolina.",
        quickLinks: "Quick Links",
        home: "Home",
        about: "About",
        impact: "Impact the Hive",
        partners: "Our Partners",
        support: "Support",
        awareness: "Awareness",
        events: "Events",
        contact: "Contact",
        keepUpdated: "Keep Updated",
        email: "Email:",
        phone: "Phone:",
        address: "Address:",
        supportMission: "Support Our Mission",
        donationLink: "Donate Here",
        copyright: "© 2026 The Hive Community Circle",
    },
    home: {
        heroTitleLine1: "Believing in Yourself is the",
        heroTitleLine2: "First Step to Healing",
        donateToday: "Donate Today",
        missionTitle: "Our Mission",
        missionBody:
            "The Hive Community Circle is a survivor-led, survivor-driven support organization helping women and girls in South Carolina overcome the trauma of sexual assault, intimate partner violence, and stalking. We are on a mission to provide unwavering support and compassion to the most impacted, yet most underserved survivors in SC.",
        whatWeDoTitle: "What We Do",
        whatWeDoCards: [
            {
                title: "Advocacy & Support",
                body: "We have assisted over 470 survivors and their families through direct advocacy and wraparound support services.",
            },
            {
                title: "Prevention & Outreach",
                body: "Our prevention programs have reached over 367 community members, creating safer spaces and raising awareness across South Carolina.",
            },
            {
                title: "Restoration",
                body: "We walk alongside survivors as they rebuild their lives, celebrating every milestone and success story along the way.",
            },
        ],
        followInstagram: "Follow Us on Instagram!",
        supportTitle: "Support Our Work",
        supportBody:
            "Your contribution helps us reach more survivors and provide the care they deserve. Every dollar makes a difference.",
        donateNow: "Donate Now",
        missionImageAlt: "Mission",
        popupModalImageAlt: "Promotional announcement",
    },
    about: {
        tabs: {
            founder: "Founder/CEO",
            team: "Team Members",
            board: "Board of Directors",
        },
        heroEyebrow: "Members",
        heroTitle: "Meet the people shaping The Hive.",
        whyFoundedTitle: "Why We Were Founded",
        whyFoundedBody:
            "We were founded in 2015 with a visionary spirit and urgent objective: to help prevent violence against some of our nation's most vulnerable populations of women and girls. As a survivor-led, survivor-driven peer advocacy organization, we bring a culturally competent approach to preventing and educating survivors and their surrounding communities about sexual assault, intimate partner violence, and stalking. We exist to enhance support services and prevention for women and girls of color and those experiencing economic instability.",
        founderStoryEyebrow: "Founder Story",
        founderTitle: "Founder/CEO",
        founderNarrativeLabel: "Narrative",
        founderNarrativeParagraphs: [
            "A lifelong advocate, Ashley draws from both lived experience and a strong academic foundation, holding a B.A. in Psychology from Columbia College and a Master of Social Work from the University of Washington. She is known for her ability to mobilize people, resources, and ideas to drive meaningful social change.",
            "Ashley has served in numerous philanthropic and leadership roles, including Board Member of Prisma Health Hospital Foundation, member of the Central Carolina Community Foundation African American Philanthropy Committee, and Chair of the Richland County Domestic Violence Coordinating Community Council. She currently serves on the South Carolina Victim Services Coordinating Council.",
            "Her impact has been nationally recognized. Ashley is a 2022 Aspen SOAR Fellow and recipient of honors including The State's 20 Under 40 and a Jefferson Award. She is a sought-after speaker and facilitator, having presented at the Essence Festival and been featured in outlets such as Black Enterprise. Her work focuses on social and racial justice, gender-based violence, and leadership.",
            "Above all, Ashley is a mother to three children, Corinne Elizabeth, Caleb Josiah, and Collin Noah, who inspire her continued commitment to building safer, more equitable communities.",
        ],
        founderSparkTitle: "Founding Spark",
        founderSparkBody:
            "As a survivor of sexual abuse and a native of South Carolina, Ashley Olayinka recognized the critical gaps in culturally responsive support for Black and Brown women and girls impacted by gender-based violence. Her lived experience, combined with her professional training, inspired her to create a space where survivors could access care that affirms their identities, addresses systemic barriers, and fosters true healing. This vision became The Hive.",
        founderVisionTitle: "Vision Today",
        founderVisionBody:
            "Today, Ashley leads The Hive alongside fellow survivors, working to decrease barriers and expand access to equitable, trauma-informed, and economically empowering services. Her leadership is rooted in healing justice, ensuring that survivors are not only supported, but also equipped to reclaim their autonomy, mental health, and economic mobility. She continues to advocate for systems change so that women and girls of color are safe, seen, and supported.",
        founderName: "Ashley Olayinka",
        founderRole: "Founder & Chief Executive Officer",
        founderProfileBody:
            "Ashley Olayinka is a transformative leader, healing justice advocate, and founder of The Hive, a culturally specific peer advocacy organization serving Black and Brown survivors of gender-based violence in South Carolina.",
        featureImageAlt: "Two members of The Hive sitting together",
        teamEyebrow: "Team",
        teamTitle: "Team Members",
        boardEyebrow: "Leadership",
        boardTitle: "Board of Directors",
        joinEyebrow: "Join The Hive",
        joinTitle: "Looking to join our team?",
        joinBodyPrefix: "Send your resume and a cover letter to",
        teamMembers: [
            {
                name: "Alyson Berry",
                role: "Executive Administrator",
            },
            {
                name: "Jalona Webb",
                role: "Legal Outreach Advocate",
            },
            {
                name: "Kinnethia Tolson",
                role: "Education and Volunteer Coordinator",
            },
            {
                name: "Beatrice Hernandez-Morales",
                role: "Bilingual Outreach Advocate",
            },
        ],
        boardMembers: [
            {
                name: "Dr. Stephanie Kirkland",
                role: "Board Chair",
                note: "Identity Dynamics\nCEO",
            },
            {
                name: "Jordan Crapps",
                role: "Vice Chair",
                note: "Gallivan, White, Boyd\nPartner",
            },
            {
                name: "Andrea Lee",
                role: "Treasurer",
                note: "Center for Community Health Alignment\nAssociate Director of Operations",
            },
            {
                name: "Ann Turner",
                role: "AVP",
                note: "Underwriting Operations",
            },
            {
                name: "Anthony Bryant",
                role: "Board Member",
                note: "Leadership Strategist, Speaker, Author",
            },
            {
                name: "Bency Beals",
                role: "Board Member",
                note: "Ignite Leadership Solutions\nCEO",
            },
            {
                name: "Ebone Ivory",
                role: "Board Member",
                note: "SC Department of Employment and Workforce\nAdministrative Hearing Officer",
            },
            {
                name: "Naomi Walton",
                role: "Board Member",
                note: "",
            },
            {
                name: "Nicki Woodson",
                role: "Board Member",
                note: "Starbucks\nManager of Partner Resources (HR)",
            },
            {
                name: "Terry Judy",
                role: "Board Member",
                note: "Ignite Leadership Solutions\nImpact & Partnerships Director",
            },
        ],
    },
    support: {
        heroEyebrow: "Support &amp; Care",
        heroTitle: "Support Services",
        heroBody: "Compassionate support and practical resources, here when you need them.",
        servicesHeading: "Explore Support Options",
        cards: [
            {
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
                ctaLabel: "Call 803-888-7725",
                badge: "Confidential",
            },
            {
                title: "Economic Relief",
                subtitle: "Immediate financial support",
                summary:
                    "Wrap-around financial support for urgent needs - housing, food, utility help, relocation, and transportation support.",
                details: [
                    "Transitional housing",
                    "Utility support and gas vouchers",
                    "Food security and hotel accommodations",
                ],
                ctaLabel: "Request help",
                badge: "No cost",
            },
            {
                title: "Individual Counseling",
                subtitle: "Licensed trauma-trained therapists",
                summary:
                    "Professional counseling for survivors. Services are provided by licensed therapists trained in trauma treatment.",
                details: [
                    "For survivors of sexual assault, IPV, or stalking (ages 11+)",
                    "Provided at no cost to the survivor",
                ],
                ctaLabel: "Groups & Counseling: 803-766-8067",
                badge: "",
            },
            {
                title: "Peer Support Healing Circles",
                subtitle: "Peer-led group healing",
                summary:
                    "Confidential healing circles using psycho-educational and wellness-based curriculum for community and recovery.",
                details: [
                    "Queens Gather - Women 18+",
                    "Bloom - Girls 11-18",
                    "Held in a safe and affirming space",
                ],
                ctaLabel: "Learn about circles",
                badge: "Groups",
            },
            {
                title: "Holistic Support",
                subtitle: "Wrap-around support",
                summary:
                    "Support that goes beyond one service and helps address the survivor's full situation.",
                details: [
                    "Goal and intervention case planning",
                    "Financial planning",
                    "Employment support",
                    "Assist in applying for additional services",
                ],
                ctaLabel: "Contact",
                badge: "Case Planning",
            },
            {
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
                ctaLabel: "Go to Contact",
                badge: "Referrals",
            },
            {
                title: "Request Training / Prevention Programming",
                subtitle: "Outreach events",
                summary:
                    "Request training, prevention programming, or outreach events for your organization or community.",
                details: [
                    "Email: hello@thehivecc.org",
                    "Call: 803-888-7725",
                    "We can coordinate outreach events",
                ],
                ctaLabel: "Email Us",
                badge: "Outreach",
            },
        ],
        safetyPlanTitle: "Emotional Safety Plan Resource",
        safetyPlanButton: "Click Here",
        safetyPlanBody:
            "If you need help filling out this form or creating a plan that meets your needs, you can always contact The Hive. One of our advocates can assist you. You do not have to go through this alone.",
        participateTitle: "Want to participate?",
        participateBody:
            "If you are interested in participating in programs or services with The Hive, contact us and we will point you in the right direction.",
        participateButton: "Contact Us",
    },
    contact: {
        heroEyebrow: "Contact Us",
        heroTitle: "Get in Touch",
        heroBody:
            "We're here for you. Reach out and a member of our team will get back with you shortly.",
        formTitle: "Send Us a Message",
        infoTitle: "Contact Information",
        fields: {
            name: "Name",
            email: "Email",
            phone: "Phone",
            subject: "Subject",
            comment: "Comments",
            submit: "Submit",
            subjectOptions: [
                { value: "general-inquiry", label: "General Inquiry" },
                { value: "volunteering", label: "Volunteering" },
                { value: "partnerships", label: "Partnerships" },
                { value: "programs-and-services", label: "Programs and Services" },
                { value: "events-and-workshops", label: "Events and Workshops" },
                { value: "donations-and-sponsorships", label: "Donations and Sponsorships" },
                { value: "media-and-press", label: "Media and Press" },
            ],
            placeholders: {
                name: "Jane Doe",
                email: "example@gmail.com",
                phone: "(XXX) XXX-XXXX",
                subject: "Select a topic",
                comment: "Enter message here",
            },
        },
        info: {
            email: "Email",
            phone: "Phone",
            address: "Address",
        },
        socials: {
            instagram: "Instagram link and logo",
            facebook: "Facebook link and logo",
            linkedin: "LinkedIn link and logo",
            x: "X link and logo",
            youtube: "Youtube link and logo",
        },
        newsletterTitle: "Check Out Our Newsletter!",
        newsletterFormTitle: "Subscribe to Our Newsletter",
        newsletterEmail: "Email",
        newsletterSubmit: "Submit",
    },
    beeInTheKnow: {
        title: "Bee in the Know",
    },
    donations: {
        title: "Impact the Hive",
        subtitle:
            "Choose how you want to support our community - through volunteering or donating.",
        volunteerTitle: "Volunteer Opportunities",
        volunteerButton: "Sign Up to Volunteer",
        volunteerItems: [
            {
                title: "The Voices of Washindi-Speaker's Bureau",
                body: "A community and platform for survivors of sexual assault and intimate partner violence to share their stories of resiliency and courage through the incorporation of the arts and craft of storytelling. Additional training is required.",
            },
            {
                title: "Hive Ambassadors",
                body: "If you love sharing The Hive, then tabling and general outreach may interest you. In this role you will have the opportunity to connect with the community and share about The Hive at community based events.",
            },
            {
                title: "Hive Hostesses/Hosts",
                body: "Hive Hostesses/Hosts are special event volunteers who may not have the capacity to volunteer regularly but desire to support our work. As a volunteer in this area you will be contacted to volunteer when we have Hive hosted events such as our Annual SC Survivors Summit or fundraisers.",
            },
            {
                title: "Volunteer Groups",
                body: "We have opportunities available for groups looking to volunteer together. These opportunities for groups of 5 or more include packing Bee Boxes of support for survivors or assembling BuzzPaks for our prevention education programming for youth.",
            },
        ],
        donationTitle: "Donation Opportunities",
        donationBody:
            "Become a Steward of Hope today. Donate to The Hive and support survivors of domestic and sexual abuse who are seeking a safe community. Either donate to the Survivor's Pantry or Peer Advocacy/Outreach to directly help our survivors, or sign up and become a member of the Keeper's Club and donate monthly. If you want to directly donate to the organization, donate to the Hope Is Fund, which helps in all day-to-day operating activities.",
        donationButton: "Donate Now",
        partnersTitle: "Our Partners",
        partnerCategories: {
            philanthropic: "Philanthropic",
            nonprofit: "Non-Profit Organizations",
            lawEnforcement: "Law Enforcement",
            education: "Education",
            faithBased: "Faith Based",
            merchant: "Merchant Based",
        },
        page: enDonationsPage,
    },
    partners: enPartners,
    awareness: enAwareness,
    ourImpact: enOurImpact,
    events: enEvents, heroEyebrow: "Community Calendar",
} as const;

export const siteCopy = {
    en,
    "es-CO": {
        nav: {
            brand: "The Hive",
            home: "Inicio",
            about: "Sobre Nosotras",
            aboutUs: "Sobre Nosotras",
            impact: "Impacto",
            partners: "Nuestras Aliadas",
            support: "Apoyo",
            supportServices: "Servicios de Apoyo",
            prevention: "Prevención",
            awareness: "Concientización",
            events: "Eventos",
            contact: "Contacto",
            keepUpdated: "Mantente Informada",
            donate: "Donar",
            languageToggleLabel: "Seleccionar idioma",
        },
        common: {
            safeExit: "Salida Segura",
            safeExitAriaLabel: "Salida segura",
        },
        footer: {
            brand: "The Hive",
            tagline:
                "Apoyo liderado por sobrevivientes, educación en prevención y cuidado práctico para mujeres y niñas en Carolina del Sur.",
            quickLinks: "Enlaces rápidos",
            home: "Inicio",
            about: "Acerca de",
            impact: "Apoya a Hive",
            partners: "Nuestros socios",
            support: "Apoyo",
            awareness: "Concientización",
            events: "Eventos",
            contact: "Contacto",
            keepUpdated: "Mantente al tanto",
            email: "Correo:",
            phone: "Teléfono:",
            address: "Dirección:",
            supportMission: "Apoya nuestra misión",
            donationLink: "Donar aquí",
            copyright: "© 2026 The Hive Community Circle",
        },
        home: {
            heroTitleLine1: "Creer en ti misma es el",
            heroTitleLine2: "Primer Paso para Sanar",
            donateToday: "Dona Hoy",
            missionTitle: "Nuestra Misión",
            missionBody:
                "The Hive Community Circle es una organización de apoyo liderada por sobrevivientes que acompaña a mujeres y niñas en Carolina del Sur a superar el trauma de la agresión sexual, la violencia de pareja y el acoso. Nuestra misión es brindar apoyo inquebrantable y compasión a las sobrevivientes más afectadas y menos atendidas del estado.",
            whatWeDoTitle: "Lo Que Hacemos",
            whatWeDoCards: [
                {
                    title: "Defensa y Apoyo",
                    body: "Hemos acompañado a más de 470 sobrevivientes y a sus familias mediante defensa directa y servicios integrales de apoyo.",
                },
                {
                    title: "Prevención y Alcance",
                    body: "Nuestros programas de prevención han llegado a más de 367 personas de la comunidad, creando espacios más seguros y promoviendo la concientización en toda Carolina del Sur.",
                },
                {
                    title: "Restauración",
                    body: "Caminamos junto a las sobrevivientes mientras reconstruyen sus vidas y celebramos cada logro y cada historia de esperanza en el camino.",
                },
            ],
            followInstagram: "Síguenos en Instagram",
            supportTitle: "Apoya Nuestro Trabajo",
            supportBody:
                "Tu contribución nos ayuda a llegar a más sobrevivientes y brindarles el cuidado que merecen. Cada dólar hace la diferencia.",
            donateNow: "Donar Ahora",
            missionImageAlt: "Misión",
        },
        about: {
            tabs: {
                founder: "Fundadora/CEO",
                team: "Equipo",
                board: "Junta Directiva",
            },
            heroEyebrow: "Miembros",
            heroTitle: "Conoce a las personas que dan forma a The Hive.",
            whyFoundedTitle: "Por Qué Fuimos Fundadas",
            whyFoundedBody:
                "Fuimos fundadas en 2015 con un espíritu visionario y un objetivo urgente: ayudar a prevenir la violencia contra algunas de las poblaciones de mujeres y niñas más vulnerables de nuestro país. Como una organización de defensa entre pares dirigida por y para sobrevivientes, aportamos un enfoque culturalmente pertinente para prevenir y educar a sobrevivientes y a las comunidades que las rodean sobre agresión sexual, violencia de pareja y acoso. Existimos para fortalecer los servicios de apoyo y la prevención para mujeres y niñas racializadas y para quienes enfrentan inestabilidad económica.",
            founderStoryEyebrow: "Historia de la Fundadora",
            founderTitle: "Fundadora/CEO",
            founderNarrativeLabel: "Narrativa",
            founderNarrativeParagraphs: [
                "Defensora de toda la vida, Ashley combina su experiencia vivida con una sólida formación académica, con una licenciatura en Psicología de Columbia College y una Maestría en Trabajo Social de la Universidad de Washington. Se distingue por su capacidad de movilizar personas, recursos e ideas para impulsar cambios sociales significativos.",
                "Ashley ha servido en numerosos espacios filantrópicos y de liderazgo, incluyendo su participación en la junta de Prisma Health Hospital Foundation, el comité de filantropía afroamericana de Central Carolina Community Foundation y la presidencia del Richland County Domestic Violence Coordinating Community Council. Actualmente integra el South Carolina Victim Services Coordinating Council.",
                "Su impacto ha sido reconocido a nivel nacional. Ashley es Aspen SOAR Fellow de la cohorte 2022 y ha recibido reconocimientos como The State's 20 Under 40 y un Jefferson Award. Es una conferencista y facilitadora muy solicitada, con presentaciones en Essence Festival y apariciones en medios como Black Enterprise. Su trabajo se enfoca en la justicia social y racial, la violencia de género y el liderazgo.",
                "Por encima de todo, Ashley es madre de tres hijos, Corinne Elizabeth, Caleb Josiah y Collin Noah, quienes inspiran su compromiso continuo con la construcción de comunidades más seguras y equitativas.",
            ],
            founderSparkTitle: "Chispa Inicial",
            founderSparkBody:
                "Como sobreviviente de abuso sexual y mujer nacida en Carolina del Sur, Ashley Olayinka identificó vacíos críticos en el apoyo culturalmente pertinente para mujeres y niñas negras y morenas afectadas por la violencia de género. Su experiencia vivida, combinada con su formación profesional, la impulsó a crear un espacio donde las sobrevivientes pudieran acceder a un cuidado que afirmara sus identidades, enfrentara las barreras sistémicas y promoviera una sanación real. Esa visión se convirtió en The Hive.",
            founderVisionTitle: "Visión Hoy",
            founderVisionBody:
                "Hoy Ashley lidera The Hive junto a otras sobrevivientes, trabajando para reducir barreras y ampliar el acceso a servicios equitativos, informados por el trauma y con enfoque en el fortalecimiento económico. Su liderazgo está arraigado en la justicia sanadora, para que las sobrevivientes no solo reciban apoyo, sino que también recuperen su autonomía, su salud mental y su movilidad económica. Continúa impulsando cambios sistémicos para que las mujeres y niñas racializadas estén seguras, visibles y acompañadas.",
            founderName: "Ashley Olayinka",
            founderRole: "Fundadora y Directora Ejecutiva",
            founderProfileBody:
                "Ashley Olayinka es una líder transformadora, defensora de la justicia sanadora y fundadora de The Hive, una organización de defensa entre pares culturalmente específica que sirve a sobrevivientes negras y morenas de violencia de género en Carolina del Sur.",
            teamEyebrow: "Equipo",
            teamTitle: "Equipo",
            boardEyebrow: "Liderazgo",
            boardTitle: "Junta Directiva",
            joinEyebrow: "Únete a The Hive",
            joinTitle: "¿Quieres unirte a nuestro equipo?",
            joinBodyPrefix: "Envía tu hoja de vida y una carta de presentación a",
            teamMembers: [
                {
                    name: "Alyson Berry",
                    role: "Administradora Ejecutiva",
                },
                {
                    name: "Jalona Webb",
                    role: "Defensora de Alcance Legal",
                },
                {
                    name: "Kinnethia Tolson",
                    role: "Coordinadora de Educación y Voluntariado",
                },
                {
                    name: "Beatrice Hernandez-Morales",
                    role: "Defensora de Alcance Bilingüe",
                },
            ],
            boardMembers: [
                {
                    name: "Dr. Stephanie Kirkland",
                    role: "Presidenta de la Junta",
                    note: "Identity Dynamics\nCEO",
                },
                {
                    name: "Jordan Crapps",
                    role: "Vicepresidencia",
                    note: "Gallivan, White, Boyd\nSocio",
                },
                {
                    name: "Andrea Lee",
                    role: "Tesorería",
                    note: "Center for Community Health Alignment\nDirectora Asociada de Operaciones",
                },
                {
                    name: "Ann Turner",
                    role: "AVP",
                    note: "Operaciones de Suscripción",
                },
                {
                    name: "Anthony Bryant",
                    role: "Miembro de la Junta",
                    note: "Estratega de Liderazgo, Conferencista, Autor",
                },
                {
                    name: "Bency Beals",
                    role: "Miembro de la Junta",
                    note: "Ignite Leadership Solutions\nCEO",
                },
                {
                    name: "Ebone Ivory",
                    role: "Miembro de la Junta",
                    note: "SC Department of Employment and Workforce\nOficial de Audiencias Administrativas",
                },
                {
                    name: "Naomi Walton",
                    role: "Miembro de la Junta",
                    note: "",
                },
                {
                    name: "Nicki Woodson",
                    role: "Miembro de la Junta",
                    note: "Starbucks\nGerente de Recursos para Partners (HR)",
                },
                {
                    name: "Terry Judy",
                    role: "Miembro de la Junta",
                    note: "Ignite Leadership Solutions\nDirectora de Impacto y Alianzas",
                },
            ],
        },
        support: {
            heroEyebrow: "Apoyo y Cuidado",
            heroTitle: "Servicios de Apoyo",
            heroBody: "Acompañamiento compasivo y recursos prácticos, aquí cuando los necesites.",
            servicesHeading: "Explora las Opciones de Apoyo",
            cards: [
                {
                    title: "Defensa Entre Pares",
                    subtitle: "Apoyo emocional y orientación",
                    summary:
                        "Defensoras capacitadas brindan apoyo confidencial, te ayudan a comprender tus derechos y opciones, y te conectan con recursos.",
                    details: [
                        "Asegurar que las sobrevivientes comprendan sus derechos y opciones",
                        "Apoyo socioemocional y planificación de seguridad",
                        "Para sobrevivientes primarias y secundarias de 11 años en adelante",
                        "Servicios sin costo para la sobreviviente",
                    ],
                    ctaLabel: "Llama al 803-888-7725",
                    badge: "Confidencial",
                },
                {
                    title: "Alivio Económico",
                    subtitle: "Apoyo financiero inmediato",
                    summary:
                        "Apoyo financiero integral para necesidades urgentes: vivienda, alimentos, ayuda con servicios, reubicación y transporte.",
                    details: [
                        "Vivienda transicional",
                        "Apoyo con servicios públicos y vales de gasolina",
                        "Seguridad alimentaria y hospedaje en hotel",
                    ],
                    ctaLabel: "Solicitar ayuda",
                    badge: "Sin costo",
                },
                {
                    title: "Consejería Individual",
                    subtitle: "Terapeutas con formación en trauma",
                    summary:
                        "Consejería profesional para sobrevivientes. Los servicios son brindados por terapeutas con licencia y formación en tratamiento del trauma.",
                    details: [
                        "Para sobrevivientes de agresión sexual, violencia de pareja o acoso (11 años en adelante)",
                        "Sin costo para la sobreviviente",
                    ],
                    ctaLabel: "Grupos y Consejería: 803-766-8067",
                    badge: "",
                },
                {
                    title: "Círculos de Sanación y Apoyo Entre Pares",
                    subtitle: "Sanación grupal guiada por pares",
                    summary:
                        "Círculos confidenciales de sanación con currículo psicoeducativo y de bienestar para la comunidad y la recuperación.",
                    details: [
                        "Queens Gather - Mujeres de 18 años en adelante",
                        "Bloom - Niñas de 11 a 18 años",
                        "Se realizan en un espacio seguro y afirmativo",
                    ],
                    ctaLabel: "Conoce los círculos",
                    badge: "Grupos",
                },
                {
                    title: "Apoyo Integral",
                    subtitle: "Acompañamiento completo",
                    summary:
                        "Apoyo que va más allá de un solo servicio y ayuda a abordar la situación completa de la sobreviviente.",
                    details: [
                        "Planificación de metas e intervenciones",
                        "Planeación financiera",
                        "Apoyo laboral",
                        "Ayuda para solicitar servicios adicionales",
                    ],
                    ctaLabel: "Contacto",
                    badge: "Planificación",
                },
                {
                    title: "Cómo Referir a una Sobreviviente",
                    subtitle: "Información de contacto rápida",
                    summary:
                        "Usa estas opciones de contacto para conectar a una sobreviviente con apoyo general, consejería o defensa.",
                    details: [
                        "Apoyo General / Defensa: 803-888-7725",
                        "Grupos y Consejería: 803-766-8067",
                        "Los servicios son confidenciales",
                        "Somos personas reportantes obligatorias",
                    ],
                    ctaLabel: "Ir a Contacto",
                    badge: "Referencias",
                },
                {
                    title: "Solicita Capacitación / Programación de Prevención",
                    subtitle: "Eventos de alcance",
                    summary:
                        "Solicita capacitaciones, programación de prevención o eventos de alcance para tu organización o comunidad.",
                    details: [
                        "Correo: hello@thehivecc.org",
                        "Llama: 803-888-7725",
                        "Podemos coordinar eventos de alcance",
                    ],
                    ctaLabel: "Escríbenos",
                    badge: "Alcance",
                },
            ],
            safetyPlanTitle: "Recurso de Plan de Seguridad Emocional",
            safetyPlanButton: "Haz Clic Aquí",
            safetyPlanBody:
                "Si necesitas ayuda para completar este formulario o crear un plan que se ajuste a tus necesidades, siempre puedes comunicarte con The Hive. Una de nuestras defensoras puede ayudarte. No tienes que pasar por esto sola.",
            participateTitle: "Quieres participar?",
            participateBody:
                "Si te interesa participar en programas o servicios con The Hive, contactanos y te ayudaremos a encontrar la mejor opcion.",
            participateButton: "Contactanos",
        },
        contact: {
            heroEyebrow: "Contáctanos",
            heroTitle: "Ponte en Contacto",
            heroBody:
                "Estamos aquí para ti. Comunícate y una persona de nuestro equipo te responderá en breve.",
            formTitle: "Envíanos un Mensaje",
            infoTitle: "Información de Contacto",
            fields: {
                name: "Nombre",
                email: "Correo",
                phone: "Teléfono",
                comment: "Comentarios",
                submit: "Enviar",
                placeholders: {
                    name: "Jane Doe",
                    email: "example@gmail.com",
                    phone: "(XXX) XXX-XXXX",
                    comment: "Escribe tu mensaje aquí",
                },
            },
            info: {
                email: "Correo",
                phone: "Teléfono",
                address: "Dirección",
            },
            socials: {
                instagram: "Enlace y logo de Instagram",
                facebook: "Enlace y logo de Facebook",
                linkedin: "Enlace y logo de LinkedIn",
                x: "Enlace y logo de X",
                youtube: "Enlace y logo de Youtube",
            },
            newsletterTitle: "¡Mira Nuestro Boletín!",
            newsletterFormTitle: "Suscríbete a Nuestro Boletín",
            newsletterEmail: "Correo",
            newsletterSubmit: "Enviar",
        },
        donations: {
            title: "Impulsa a The Hive",
            subtitle:
                "Elige cómo quieres apoyar a nuestra comunidad: a través del voluntariado o una donación.",
            volunteerTitle: "Oportunidades de Voluntariado",
            volunteerButton: "Inscríbete para Hacer Voluntariado",
            volunteerItems: [
                {
                    title: "The Voices of Washindi-Speaker's Bureau",
                    body: "Una comunidad y plataforma para sobrevivientes de agresión sexual y violencia de pareja para compartir sus historias de resiliencia y valentía mediante el arte y la narración. Se requiere capacitación adicional.",
                },
                {
                    title: "Embajadoras de Hive",
                    body: "Si te encanta compartir The Hive, el trabajo en mesas informativas y el alcance comunitario puede interesarte. En este rol tendrás la oportunidad de conectar con la comunidad y compartir sobre The Hive en eventos comunitarios.",
                },
                {
                    title: "Anfitrionas y Anfitriones de Hive",
                    body: "Las anfitrionas y anfitriones de Hive son personas voluntarias para eventos especiales que tal vez no puedan participar regularmente, pero desean apoyar nuestro trabajo. En esta área te contactaremos cuando tengamos eventos organizados por Hive, como nuestra Cumbre Anual de Sobrevivientes de SC o recaudaciones de fondos.",
                },
                {
                    title: "Grupos de Voluntariado",
                    body: "Tenemos oportunidades para grupos que quieran hacer voluntariado en conjunto. Estas oportunidades para grupos de 5 o más incluyen empacar Bee Boxes de apoyo para sobrevivientes o armar BuzzPaks para nuestra programación de prevención para jóvenes.",
                },
            ],
            donationTitle: "Oportunidades de Donación",
            donationBody:
                "Conviértete hoy en Guardiana de la Esperanza. Dona a The Hive y apoya a sobrevivientes de violencia doméstica y sexual que buscan una comunidad segura. Puedes donar a la despensa para sobrevivientes o a Peer Advocacy/Outreach para ayudar directamente a nuestras sobrevivientes, o unirte al Keeper's Club y donar cada mes. Si deseas donar directamente a la organización, dona al Hope Is Fund, que apoya las actividades operativas del día a día.",
            donationButton: "Donar Ahora",
            partnersTitle: "Nuestras Personas Aliadas",
            partnerCategories: {
                philanthropic: "Filantrópicas",
                nonprofit: "Organizaciones sin Fines de Lucro",
                lawEnforcement: "Fuerza Pública",
                education: "Educación",
                faithBased: "Comunidades de Fe",
                merchant: "Comercios",
            },
            page: esDonationsPage,
        },
        partners: esPartners,
        awareness: esAwareness,
        events: esEvents, heroEyebrow: "Calendario Comunitario",
    },
    "es-MX": {
        nav: {
            brand: "The Hive",
            logoAlt: "The Hive",
            home: "Inicio",
            about: "Sobre Nosotras",
            aboutUs: "Sobre Nosotras",
            impact: "Impacto",
            ourImpact: "Nuestro Impacto",
            partners: "Nuestras Personas Aliadas",
            support: "Apoyo",
            supportServices: "Servicios de Apoyo",
            prevention: "Prevención",
            awareness: "Concientización",
            events: "Eventos",
            contact: "Contacto",
            keepUpdated: "Mantente al Día",
            donate: "Donar",
            languageToggleLabel: "Seleccionar idioma",
            openMenu: "Abrir menú de navegación",
            closeMenu: "Cerrar menú de navegación",
        },
        common: {
            safeExit: "Salida Segura",
            safeExitAriaLabel: "Salida segura",
        },
        footer: {
            brand: "The Hive",
            tagline:
                "Apoyo liderado por sobrevivientes, educación en prevención y cuidado práctico para mujeres y niñas en Carolina del Sur.",
            quickLinks: "Enlaces rápidos",
            home: "Inicio",
            about: "Sobre nosotros",
            impact: "Apoya a Hive",
            partners: "Nuestros aliados",
            support: "Apoyo",
            awareness: "Conciencia",
            events: "Eventos",
            contact: "Contacto",
            keepUpdated: "Mantente al día",

            email: "Correo:",
            phone: "Teléfono:",
            address: "Dirección:",

            supportMission: "Apoya nuestra misión",
            donationLink: "Donar aquí",

            copyright: "© 2026 The Hive Community Circle",
        },
        home: {
            heroTitleLine1: "Creer en ti misma es el",
            heroTitleLine2: "Primer Paso para Sanar",
            donateToday: "Dona Hoy",
            missionTitle: "Nuestra Misión",
            missionBody:
                "The Hive Community Circle es una organización de apoyo dirigida por sobrevivientes que acompaña a mujeres y niñas en Carolina del Sur para superar el trauma de la agresión sexual, la violencia de pareja y el acoso. Nuestra misión es brindar apoyo firme y compasión a las sobrevivientes más afectadas y menos atendidas del estado.",
            whatWeDoTitle: "Lo Que Hacemos",
            whatWeDoCards: [
                {
                    title: "Defensa y Apoyo",
                    body: "Hemos acompañado a más de 470 sobrevivientes y a sus familias mediante defensa directa y servicios integrales de apoyo.",
                },
                {
                    title: "Prevención y Alcance",
                    body: "Nuestros programas de prevención han llegado a más de 367 personas de la comunidad, creando espacios más seguros y promoviendo la concientización en toda Carolina del Sur.",
                },
                {
                    title: "Restauración",
                    body: "Caminamos al lado de las sobrevivientes mientras reconstruyen sus vidas y celebramos cada logro y cada historia de resiliencia en el camino.",
                },
            ],
            followInstagram: "Síguenos en Instagram",
            supportTitle: "Apoya Nuestro Trabajo",
            supportBody:
                "Tu contribución nos ayuda a llegar a más sobrevivientes y brindarles el cuidado que merecen. Cada dólar hace la diferencia.",
            donateNow: "Dona Ahora",
            missionImageAlt: "Misión",
            popupModalImageAlt: "Anuncio promocional",
        },
        about: {
            tabs: {
                founder: "Fundadora/CEO",
                team: "Equipo",
                board: "Consejo Directivo",
            },
            heroEyebrow: "Miembros",
            heroTitle: "Conoce a las personas que dan forma a The Hive.",
            whyFoundedTitle: "Por Qué Fuimos Fundadas",
            whyFoundedBody:
                "Fuimos fundadas en 2015 con un espíritu visionario y un objetivo urgente: ayudar a prevenir la violencia contra algunas de las poblaciones de mujeres y niñas más vulnerables de nuestro país. Como organización de defensa entre pares dirigida por y para sobrevivientes, aportamos un enfoque culturalmente pertinente para prevenir y educar a sobrevivientes y a las comunidades que las rodean sobre agresión sexual, violencia de pareja y acoso. Existimos para fortalecer los servicios de apoyo y la prevención para mujeres y niñas racializadas y para quienes enfrentan inestabilidad económica.",
            founderStoryEyebrow: "Historia de la Fundadora",
            founderTitle: "Fundadora/CEO",
            founderNarrativeLabel: "Narrativa",
            founderNarrativeParagraphs: [
                "Defensora de toda la vida, Ashley combina su experiencia personal con una sólida formación académica, con una licenciatura en Psicología de Columbia College y una Maestría en Trabajo Social por la Universidad de Washington. Se distingue por su capacidad de movilizar personas, recursos e ideas con el fin de impulsar cambios sociales significativos.",
                "Ashley ha participado en numerosos espacios filantrópicos y de liderazgo, incluyendo su servicio como integrante de la junta de Prisma Health Hospital Foundation, del comité de filantropía afroamericana de Central Carolina Community Foundation y como presidenta del Richland County Domestic Violence Coordinating Community Council. Actualmente forma parte del South Carolina Victim Services Coordinating Council.",
                "Su impacto ha sido reconocido a nivel nacional. Ashley es Aspen SOAR Fellow de la generación 2022 y ha recibido reconocimientos como The State's 20 Under 40 y un Jefferson Award. Es una conferencista y facilitadora ampliamente solicitada; ha participado en Essence Festival y ha sido presentada en medios como Black Enterprise. Su trabajo se enfoca en la justicia social y racial, la violencia de género y el liderazgo.",
                "Ante todo, Ashley es madre de tres hijos, Corinne Elizabeth, Caleb Josiah y Collin Noah, quienes inspiran su compromiso continuo con la construcción de comunidades más seguras y equitativas.",
            ],
            founderSparkTitle: "Origen de la Visión",
            founderSparkBody:
                "Como sobreviviente de abuso sexual y originaria de Carolina del Sur, Ashley Olayinka identificó brechas críticas en el apoyo culturalmente pertinente para mujeres y niñas negras y morenas afectadas por la violencia de género. Su experiencia vivida, junto con su preparación profesional, la impulsó a crear un espacio donde las sobrevivientes pudieran acceder a una atención que afirmara sus identidades, enfrentara barreras sistémicas y promoviera una sanación real. Esa visión dio vida a The Hive.",
            founderVisionTitle: "Visión Actual",
            founderVisionBody:
                "Hoy Ashley lidera The Hive junto con otras sobrevivientes, trabajando para reducir barreras y ampliar el acceso a servicios equitativos, informados por el trauma y con enfoque en el empoderamiento económico. Su liderazgo está arraigado en la justicia sanadora, para que las sobrevivientes no solo reciban apoyo, sino que también recuperen su autonomía, su salud mental y su movilidad económica. Continúa impulsando cambios estructurales para que las mujeres y niñas racializadas estén seguras, visibles y acompañadas.",
            founderName: "Ashley Olayinka",
            founderRole: "Fundadora y Directora Ejecutiva",
            founderProfileBody:
                "Ashley Olayinka es una líder transformadora, defensora de la justicia sanadora y fundadora de The Hive, una organización de defensa entre pares culturalmente específica que acompaña a sobrevivientes negras y morenas de violencia de género en Carolina del Sur.",
            featureImageAlt: "Dos integrantes de The Hive sentadas juntas",
            teamEyebrow: "Equipo",
            teamTitle: "Equipo",
            boardEyebrow: "Liderazgo",
            boardTitle: "Consejo Directivo",
            joinEyebrow: "Únete a The Hive",
            joinTitle: "¿Te interesa unirte a nuestro equipo?",
            joinBodyPrefix: "Envía tu currículum y una carta de presentación a",
            teamMembers: [
                {
                    name: "Alyson Berry",
                    role: "Administradora Ejecutiva",
                },
                {
                    name: "Jalona Webb",
                    role: "Defensora de Alcance Legal",
                },
                {
                    name: "Kinnethia Tolson",
                    role: "Coordinadora de Educación y Voluntariado",
                },
                {
                    name: "Beatrice Hernandez-Morales",
                    role: "Defensora de Alcance Bilingüe",
                },
            ],
            boardMembers: [
                {
                    name: "Dr. Stephanie Kirkland",
                    role: "Presidenta del Consejo",
                    note: "Identity Dynamics\nCEO",
                },
                {
                    name: "Jordan Crapps",
                    role: "Vicepresidencia",
                    note: "Gallivan, White, Boyd\nSocio",
                },
                {
                    name: "Andrea Lee",
                    role: "Tesorería",
                    note: "Center for Community Health Alignment\nDirectora Asociada de Operaciones",
                },
                {
                    name: "Ann Turner",
                    role: "AVP",
                    note: "Operaciones de Suscripción",
                },
                {
                    name: "Anthony Bryant",
                    role: "Integrante del Consejo",
                    note: "Estratega de Liderazgo, Conferencista, Autor",
                },
                {
                    name: "Bency Beals",
                    role: "Integrante del Consejo",
                    note: "Ignite Leadership Solutions\nCEO",
                },
                {
                    name: "Ebone Ivory",
                    role: "Integrante del Consejo",
                    note: "SC Department of Employment and Workforce\nOficial de Audiencias Administrativas",
                },
                {
                    name: "Naomi Walton",
                    role: "Integrante del Consejo",
                    note: "",
                },
                {
                    name: "Nicki Woodson",
                    role: "Integrante del Consejo",
                    note: "Starbucks\nGerente de Recursos para Partners (HR)",
                },
                {
                    name: "Terry Judy",
                    role: "Integrante del Consejo",
                    note: "Ignite Leadership Solutions\nDirectora de Impacto y Alianzas",
                },
            ],
        },
        support: {
            heroEyebrow: "Apoyo y Cuidado",
            heroTitle: "Servicios de Apoyo",
            heroBody: "Acompañamiento compasivo y recursos prácticos, aquí cuando los necesites.",
            servicesHeading: "Explora las Opciones de Apoyo",
            cards: [
                {
                    title: "Defensa Entre Pares",
                    subtitle: "Apoyo emocional y orientación",
                    summary:
                        "Defensoras capacitadas brindan apoyo confidencial, te ayudan a comprender tus derechos y opciones, y te conectan con recursos.",
                    details: [
                        "Asegurar que las sobrevivientes comprendan sus derechos y opciones",
                        "Apoyo socioemocional y planeación de seguridad",
                        "Para sobrevivientes primarias y secundarias de 11 años en adelante",
                        "Servicios sin costo para la sobreviviente",
                    ],
                    ctaLabel: "Llama al 803-888-7725",
                    badge: "Confidencial",
                },
                {
                    title: "Alivio Económico",
                    subtitle: "Apoyo financiero inmediato",
                    summary:
                        "Apoyo financiero integral para necesidades urgentes: vivienda, alimentos, ayuda con servicios, reubicación y transporte.",
                    details: [
                        "Vivienda transicional",
                        "Apoyo con servicios y vales de gasolina",
                        "Seguridad alimentaria y hospedaje en hotel",
                    ],
                    ctaLabel: "Solicitar ayuda",
                    badge: "Sin costo",
                },
                {
                    title: "Consejería Individual",
                    subtitle: "Terapeutas con formación en trauma",
                    summary:
                        "Consejería profesional para sobrevivientes. Los servicios son brindados por terapeutas con licencia y formación en tratamiento del trauma.",
                    details: [
                        "Para sobrevivientes de agresión sexual, violencia de pareja o acoso (11 años en adelante)",
                        "Sin costo para la sobreviviente",
                    ],
                    ctaLabel: "Grupos y Consejería: 803-766-8067",
                    badge: "",
                },
                {
                    title: "Círculos de Sanación y Apoyo Entre Pares",
                    subtitle: "Sanación grupal guiada por pares",
                    summary:
                        "Círculos confidenciales de sanación con contenido psicoeducativo y de bienestar para la comunidad y la recuperación.",
                    details: [
                        "Queens Gather - Mujeres de 18 años en adelante",
                        "Bloom - Niñas de 11 a 18 años",
                        "Se llevan a cabo en un espacio seguro y afirmativo",
                    ],
                    ctaLabel: "Conoce los círculos",
                    badge: "Grupos",
                },
                {
                    title: "Apoyo Integral",
                    subtitle: "Acompañamiento completo",
                    summary:
                        "Apoyo que va más allá de un solo servicio y ayuda a atender la situación completa de la sobreviviente.",
                    details: [
                        "Planeación de metas e intervenciones",
                        "Planeación financiera",
                        "Apoyo laboral",
                        "Ayuda para solicitar servicios adicionales",
                    ],
                    ctaLabel: "Contacto",
                    badge: "Planeación",
                },
                {
                    title: "Cómo Referir a una Sobreviviente",
                    subtitle: "Información de contacto rápida",
                    summary:
                        "Usa estas opciones de contacto para conectar a una sobreviviente con apoyo general, consejería o defensa.",
                    details: [
                        "Apoyo General / Defensa: 803-888-7725",
                        "Grupos y Consejería: 803-766-8067",
                        "Los servicios son confidenciales",
                        "Somos personas reportantes obligatorias",
                    ],
                    ctaLabel: "Ir a Contacto",
                    badge: "Referencias",
                },
                {
                    title: "Solicita Capacitación / Programación de Prevención",
                    subtitle: "Eventos de alcance",
                    summary:
                        "Solicita capacitaciones, programación de prevención o eventos de alcance para tu organización o comunidad.",
                    details: [
                        "Correo: hello@thehivecc.org",
                        "Llama: 803-888-7725",
                        "Podemos coordinar eventos de alcance",
                    ],
                    ctaLabel: "Escríbenos",
                    badge: "Alcance",
                },
            ],
            safetyPlanTitle: "Recurso de Plan de Seguridad Emocional",
            safetyPlanButton: "Haz Clic Aquí",
            safetyPlanBody:
                "Si necesitas ayuda para llenar este formulario o crear un plan que se ajuste a tus necesidades, siempre puedes comunicarte con The Hive. Una de nuestras defensoras puede ayudarte. No tienes que pasar por esto sola.",
        },
        contact: {
            heroEyebrow: "Contáctanos",
            heroTitle: "Ponte en Contacto",
            heroBody:
                "Estamos aquí para ti. Comunícate y alguien de nuestro equipo te responderá pronto.",
            formTitle: "Envíanos un Mensaje",
            infoTitle: "Información de Contacto",
            fields: {
                name: "Nombre",
                email: "Correo",
                phone: "Teléfono",
                subject: "Asunto",
                comment: "Comentarios",
                submit: "Enviar",
                subjectOptions: [
                    { value: "consulta-general", label: "Consulta General" },
                    { value: "voluntariado", label: "Voluntariado" },
                    { value: "alianzas", label: "Alianzas" },
                    { value: "programas-y-servicios", label: "Programas y Servicios" },
                    { value: "eventos-y-talleres", label: "Eventos y Talleres" },
                    { value: "donaciones-y-patrocinios", label: "Donaciones y Patrocinios" },
                    { value: "medios-y-prensa", label: "Medios y Prensa" },
                ],
                placeholders: {
                    name: "Jane Doe",
                    email: "example@gmail.com",
                    phone: "(XXX) XXX-XXXX",
                    subject: "Selecciona un tema",
                    comment: "Escribe tu mensaje aquí",
                },
            },
            info: {
                email: "Correo",
                phone: "Teléfono",
                address: "Dirección",
            },
            socials: {
                instagram: "Enlace y logo de Instagram",
                facebook: "Enlace y logo de Facebook",
                linkedin: "Enlace y logo de LinkedIn",
                x: "Enlace y logo de X",
                youtube: "Enlace y logo de Youtube",
            },
            newsletterTitle: "¡Consulta Nuestro Boletín!",
            newsletterFormTitle: "Suscríbete a Nuestro Boletín",
            newsletterEmail: "Correo",
            newsletterSubmit: "Enviar",
        },
        beeInTheKnow: {
            title: "Entérate con Bee",
        },
        donations: {
            title: "Impulsa a The Hive",
            subtitle:
                "Elige cómo quieres apoyar a nuestra comunidad: por medio del voluntariado o una donación.",
            volunteerTitle: "Oportunidades de Voluntariado",
            volunteerButton: "Regístrate para Voluntariado",
            volunteerItems: [
                {
                    title: "The Voices of Washindi-Speaker's Bureau",
                    body: "Una comunidad y plataforma para sobrevivientes de agresión sexual y violencia de pareja para compartir sus historias de resiliencia y valentía mediante el arte y la narración. Se requiere capacitación adicional.",
                },
                {
                    title: "Embajadoras de Hive",
                    body: "Si te encanta compartir The Hive, participar en mesas informativas y en labores de alcance puede interesarte. En este rol tendrás la oportunidad de conectar con la comunidad y compartir sobre The Hive en eventos comunitarios.",
                },
                {
                    title: "Anfitrionas y Anfitriones de Hive",
                    body: "Las anfitrionas y anfitriones de Hive son personas voluntarias para eventos especiales que quizá no puedan participar regularmente, pero desean apoyar nuestro trabajo. En esta área te contactaremos cuando tengamos eventos organizados por Hive, como nuestra Cumbre Anual de Sobrevivientes de SC o recaudaciones de fondos.",
                },
                {
                    title: "Grupos de Voluntariado",
                    body: "Tenemos oportunidades para grupos que quieran hacer voluntariado en conjunto. Estas oportunidades para grupos de 5 o más incluyen empacar Bee Boxes de apoyo para sobrevivientes o armar BuzzPaks para nuestra programación de prevención dirigida a jóvenes.",
                },
            ],
            donationTitle: "Oportunidades de Donación",
            donationBody:
                "Conviértete hoy en Guardiana de la Esperanza. Dona a The Hive y apoya a sobrevivientes de violencia doméstica y sexual que buscan una comunidad segura. Puedes donar a la despensa para sobrevivientes o a Peer Advocacy/Outreach para ayudar directamente a nuestras sobrevivientes, o unirte al Keeper's Club y donar cada mes. Si deseas donar directamente a la organización, dona al Hope Is Fund, que apoya las actividades operativas del día a día.",
            donationButton: "Donar Ahora",
            partnersTitle: "Nuestras Personas Aliadas",
            partnerCategories: {
                philanthropic: "Filantrópicas",
                nonprofit: "Organizaciones sin Fines de Lucro",
                lawEnforcement: "Seguridad Pública",
                education: "Educación",
                faithBased: "Comunidades de Fe",
                merchant: "Comercios",
            },
            page: esDonationsPage,
        },
        partners: esPartners,
        awareness: esMxAwareness,
        ourImpact: {
            heroEyebrow: "Nuestro Impacto",
            heroTitle: "Reconocidas. Publicadas. Marcando la Diferencia.",
            heroBody:
                "Desde apariciones en medios nacionales hasta hitos estratégicos, explora la huella creciente de The Hive en el movimiento para erradicar la violencia de género.",
            mediaEyebrow: "Prensa y Entrevistas",
            mediaTitle: "En los Medios",
            mediaItems: [
                {
                    outlet: "Black Enterprise",
                    headline: "Cambiando la Conversación sobre la Violencia de Género",
                    description:
                        "Destacada por un enfoque de sanación liderado por sobrevivientes y cuidado comunitario para mujeres y niñas negras en Carolina del Sur.",
                    href: "https://www.blackenterprise.com",
                },
                {
                    outlet: "Essence Festival",
                    headline: "Conferencista y Facilitadora",
                    description:
                        "Ashley Olayinka presentó sobre justicia social y racial, violencia de género y liderazgo en el Essence Festival.",
                    href: "https://www.essence.com/festival",
                },
                {
                    outlet: "The State Newspaper",
                    headline: "20 Menores de 40",
                    description:
                        "Reconocida entre los líderes jóvenes más influyentes de Carolina del Sur por construir espacios centrados en sobrevivientes.",
                    href: "https://www.thestate.com",
                },
            ],
            awardsEyebrow: "Honores y Distinciones",
            awardsTitle: "Reconocimientos y Premios",
            awards: [
                {
                    name: "Aspen SOAR Fellow",
                    year: "2022",
                    issuer: "Aspen Institute",
                    description:
                        "Una beca altamente selectiva que reconoce a líderes emergentes que impulsan cambios sistémicos en sus comunidades.",
                },
                {
                    name: "Jefferson Award",
                    year: "",
                    issuer: "Jefferson Awards Foundation",
                    description:
                        "Otorgado por servicio público extraordinario y compromiso con la creación de impacto comunitario duradero.",
                },
                {
                    name: "20 Menores de 40",
                    year: "",
                    issuer: "The State Newspaper",
                    description:
                        "Reconocida entre los mejores jóvenes profesionales de Carolina del Sur que generan una diferencia significativa.",
                },
            ],
            documentsEyebrow: "Documentos Estratégicos",
            documentsTitle: "Informes y Planes",
            documents: [
                {
                    title: "Informe Anual 2025",
                    description:
                        "Nuestro año en resumen: cifras de impacto, historias y momentos destacados de los programas de The Hive.",
                    href: "https://www.thehivecc.org/2025-annual-report",
                    cta: "Ver Informe",
                    external: true,
                },
                {
                    title: "Plan Estratégico 2021–2026",
                    description:
                        "La hoja de ruta que guía nuestro crecimiento, programas y visión comunitaria durante cinco años.",
                    href: "/strategic-plan.pdf",
                    cta: "Descargar PDF",
                    external: false,
                },
            ],
        },
        events: esEvents, heroEyebrow: "Calendario Comunitario",
    },
} satisfies Record<LanguageCode, DeepWiden<typeof en>>;

function isPlainObject(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeLocaleCopy<T>(base: T, override: unknown): T {
    if (override === undefined) {
        return base;
    }

    if (Array.isArray(base)) {
        return (Array.isArray(override) ? override : base) as T;
    }

    if (isPlainObject(base) && isPlainObject(override)) {
        const mergedEntries = Object.keys(base).map((key) => [
            key,
            mergeLocaleCopy(base[key], override[key]),
        ]);

        return Object.fromEntries(mergedEntries) as T;
    }

    return override as T;
}

const resolvedSiteCopy = {
    en,
    "es-MX": mergeLocaleCopy(en, siteCopy["es-MX"]),
} satisfies Record<LanguageCode, DeepWiden<typeof en>>;

export function getSiteCopy(language: LanguageCode) {
    return resolvedSiteCopy[language] ?? resolvedSiteCopy[defaultLanguage];
}
