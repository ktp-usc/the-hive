export const languageOptions = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es-CO", label: "Español (Colombia)", flag: "🇨🇴" },
    { code: "es-MX", label: "Español (México)", flag: "🇲🇽" },
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

const en = {
    nav: {
        brand: "The Hive",
        home: "Home",
        about: "About Us",
        aboutUs: "About Us",
        impact: "Impact",
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
    },
    common: {
        safeExit: "Safe Exit",
        safeExitAriaLabel: "Safe exit",
    },
    footer: {
        quickLinks: "Quick Links",
        about: "About Us",
        awareness: "Awareness",
        support: "Support",
        contact: "Contact",
        keepUpdated: "Keep Updated",
        supportMission: "Support Our Mission",
        donationLink: "Donation Link",
        email: "Email:",
        phone: "Phone:",
        address: "Address:",
        copyright: "© 2026 The Hive",
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
    },
    about: {
        tabs: {
            founder: "Founder/CEO",
            team: "Team Members",
            board: "Board of Directors",
        },
        heroEyebrow: "Members",
        heroTitle: "Meet the people shaping The Hive.",
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
                ctaLabel: "",
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
    },
    contact: {
        heroTitle: "Get in Touch",
        heroBody:
            "We're here for you. Reach out and a member of our team will get back with you shortly.",
        formTitle: "Send Us a Message",
        infoTitle: "Contact Information",
        fields: {
            name: "Name",
            email: "Email",
            phone: "Phone",
            comment: "Comments",
            submit: "Submit",
            placeholders: {
                name: "Jane Doe",
                email: "example@gmail.com",
                phone: "(XXX) XXX-XXXX",
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
        },
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
    },
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
            quickLinks: "Enlaces Rápidos",
            about: "Sobre Nosotras",
            awareness: "Concientización",
            support: "Apoyo",
            contact: "Contacto",
            keepUpdated: "Mantente Informada",
            supportMission: "Apoya Nuestra Misión",
            donationLink: "Enlace para Donar",
            email: "Correo:",
            phone: "Teléfono:",
            address: "Dirección:",
            copyright: "© 2026 The Hive",
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
                    ctaLabel: "",
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
        },
        contact: {
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
            },
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
        },
    },
    "es-MX": {
        nav: {
            brand: "The Hive",
            home: "Inicio",
            about: "Sobre Nosotras",
            aboutUs: "Sobre Nosotras",
            impact: "Impacto",
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
        },
        common: {
            safeExit: "Salida Segura",
            safeExitAriaLabel: "Salida segura",
        },
        footer: {
            quickLinks: "Enlaces Rápidos",
            about: "Sobre Nosotras",
            awareness: "Concientización",
            support: "Apoyo",
            contact: "Contacto",
            keepUpdated: "Mantente al Día",
            supportMission: "Apoya Nuestra Misión",
            donationLink: "Enlace de Donación",
            email: "Correo:",
            phone: "Teléfono:",
            address: "Dirección:",
            copyright: "© 2026 The Hive",
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
        },
        about: {
            tabs: {
                founder: "Fundadora/CEO",
                team: "Equipo",
                board: "Consejo Directivo",
            },
            heroEyebrow: "Miembros",
            heroTitle: "Conoce a las personas que dan forma a The Hive.",
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
                    ctaLabel: "",
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
            heroTitle: "Ponte en Contacto",
            heroBody:
                "Estamos aquí para ti. Comunícate y alguien de nuestro equipo te responderá pronto.",
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
            },
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
        },
    },
} satisfies Record<LanguageCode, DeepWiden<typeof en>>;