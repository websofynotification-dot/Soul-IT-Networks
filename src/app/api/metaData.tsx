export const homePageMetaData = {
  title:
    "Soul IT Networks | IT Infrastructure, System Integration & Software Solutions",

  description:
    "Soul IT Networks is a leading IT system integrator delivering IT infrastructure, video conferencing, surveillance, network security, cloud solutions, data center services, and customized software development for businesses across India.",

  keywords: [
    "IT system integrator India",
    "IT infrastructure solutions",
    "video conferencing solutions",
    "network security services",
    "cybersecurity solutions",
    "surveillance solutions",
    "CCTV installation services",
    "cloud infrastructure services",
    "data center solutions",
    "enterprise networking solutions",
    "software development company",
    "website development services",
    "managed IT services",
    "IT consulting company",
    "Soul IT Networks",
  ],

  alternates: {
    canonical: "https://soulitnetworks.com/",
  },

  openGraph: {
    title:
      "Soul IT Networks | IT Infrastructure & Digital Transformation Solutions",

    description:
      "Empowering businesses with IT infrastructure, network security, surveillance systems, cloud services, video conferencing, and custom software solutions.",

    url: "https://soulitnetworks.com/",
    siteName: "Soul IT Networks",

    images: [
      {
        url: "https://soulitnetworks.com/logo.png", // Update with actual logo URL
        width: 1200,
        height: 630,
        alt: "Soul IT Networks",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Soul IT Networks | IT Infrastructure & Software Solutions",

    description:
      "Trusted IT system integrator offering infrastructure, cybersecurity, networking, surveillance, cloud, and software development services.",

    images: [
      "https://soulitnetworks.com/logo.png", // Update with actual logo URL
    ],
  },
};

export const homePageProductSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "name": "IT Infrastructure & System Integration Services",

  "provider": {
    "@type": "Organization",
    "name": "Soul IT Networks",
    "url": "https://soulitnetworks.com/"
  },

  "description":
    "Soul IT Networks provides IT infrastructure, video conferencing, surveillance, network security, cloud solutions, managed IT services, and custom software development solutions for enterprises and organizations.",

  "serviceType": [
    "IT Infrastructure Services",
    "System Integration",
    "Network Security",
    "Cloud Solutions",
    "Video Conferencing Solutions",
    "Surveillance Solutions",
    "Software Development",
    "Website Development"
  ],

  "url": "https://soulitnetworks.com/",

  "areaServed": {
    "@type": "Country",
    "name": "India"
  }
};

export const homePageGeoTag = [
  {
    tagName: "geo.region",
    tagContent: "IN-UP",
  },
  {
    tagName: "geo.placename",
    tagContent: "Lucknow",
  },
  {
    tagName: "geo.position",
    tagContent: "26.873369;80.990840",
  },
  {
    tagName: "ICBM",
    tagContent: "26.873369,80.990840",
  },
];

export const aboutUsPageMetaData = {
  title: "About Us | Soul IT Networks",

  description:
    "Learn about Soul IT Networks, a trusted IT system integrator delivering innovative IT infrastructure, network security, surveillance, video conferencing, cloud, and software solutions to businesses across India.",

  keywords: [
    "About Soul IT Networks",
    "IT system integrator India",
    "IT infrastructure company",
    "network security experts",
    "cloud solutions provider",
    "video conferencing solutions",
    "surveillance solutions company",
    "software development services",
    "enterprise IT solutions",
    "digital transformation partner",
    "managed IT services",
    "IT consulting company"
  ],

  alternates: {
    canonical: "https://soulitnetworks.com/about-us/",
  },

  openGraph: {
    type: "website",

    title: "About Soul IT Networks | IT Infrastructure & Digital Solutions",

    description:
      "Discover Soul IT Networks' journey, expertise, and commitment to delivering enterprise-grade IT infrastructure, cybersecurity, surveillance, networking, and software development solutions.",

    url: "https://soulitnetworks.com/about-us/",

    siteName: "Soul IT Networks",

    images: [
      {
        url: "https://soulitnetworks.com/logo.png", // Replace with actual logo/banner URL
        alt: "About Soul IT Networks",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "About Soul IT Networks",

    description:
      "Learn how Soul IT Networks empowers organizations with innovative IT infrastructure, network security, cloud, surveillance, and software solutions.",

    images: [
      {
        url: "https://soulitnetworks.com/logo.png", // Replace with actual logo/banner URL
        alt: "Soul IT Networks About Us",
      },
    ],

    site: "@SoulITNetworks", // Replace with actual Twitter/X handle if available
  },
};

export const aboutUsPageProductSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",

  "name": "About Soul IT Networks",

  "url": "https://soulitnetworks.com/about-us",

  "description":
    "Soul IT Networks is a premier system integrator delivering IT infrastructure, network security, cloud and data centre solutions, surveillance systems, video conferencing, managed IT services, and custom software development solutions across India.",

  "mainEntity": {
    "@type": "Organization",

    "name": "Soul IT Networks",

    "url": "https://soulitnetworks.com/",

    "logo": "https://soulitnetworks.com/assets/images/logo.png",

    "description":
      "Soul IT Networks specializes in IT infrastructure, system integration, cybersecurity, cloud solutions, networking, surveillance, enterprise software, and digital transformation services.",

    "foundingDate": "2017",

    "areaServed": {
      "@type": "Country",
      "name": "India"
    },

    "knowsAbout": [
      "IT Infrastructure Solutions",
      "System Integration",
      "Network Security",
      "Cyber Security",
      "Cloud Solutions",
      "Data Centre Solutions",
      "Video Conferencing",
      "CCTV & Surveillance",
      "Managed IT Services",
      "Software Development",
      "Website Development",
      "Digital Transformation"
    ]
  }
};

// Services Page Meta Data

export const systemIntegrationMetaData = {
  title: "System Integration Services | Soul IT Networks",
  description:
    "Streamline your business operations with expert system integration services. Soul IT Networks connects hardware, software, cloud, and network infrastructure into a unified IT ecosystem.",
  keywords: [
    "system integration services",
    "IT system integrator",
    "enterprise integration solutions",
    "business IT integration",
    "system integration company India"
  ],
};

export const managedITServicesMetaData = {
  title: "Managed IT Services | Soul IT Networks",
  description:
    "Reduce IT complexity with proactive managed IT services, infrastructure monitoring, support, maintenance, and technology management solutions.",
  keywords: [
    "managed IT services",
    "IT support services",
    "infrastructure management",
    "outsourced IT services",
    "IT maintenance services"
  ],
};

export const networkSecurityMetaData = {
  title: "Network & Cyber Security Solutions | Soul IT Networks",
  description:
    "Protect your business with advanced network security, firewall management, endpoint protection, cybersecurity consulting, and threat monitoring services.",
  keywords: [
    "network security",
    "cyber security services",
    "firewall solutions",
    "endpoint security",
    "cybersecurity company India"
  ],
};

export const cloudDatacenterMetaData = {
  title: "Cloud & Data Centre Solutions | Soul IT Networks",
  description:
    "Modernize your infrastructure with cloud migration, virtualization, hybrid cloud, backup, disaster recovery, and data center solutions.",
  keywords: [
    "cloud solutions",
    "data center services",
    "cloud migration",
    "hybrid cloud solutions",
    "server virtualization"
  ],
};

export const databaseStorageMetaData = {
  title: "Database & Storage Solutions | Soul IT Networks",
  description:
    "Secure and scalable database and storage solutions for enterprises, including backup, recovery, storage optimization, and data management services.",
  keywords: [
    "database solutions",
    "enterprise storage",
    "data backup solutions",
    "storage management",
    "database services"
  ],
};

export const trainingCertificationMetaData = {
  title: "IT Training & Certification Programs | Soul IT Networks",
  description:
    "Enhance workforce skills with professional IT training, certification programs, technical workshops, and industry-focused learning solutions.",
  keywords: [
    "IT training",
    "professional certification",
    "technical training",
    "corporate IT training",
    "skill development"
  ],
};

export const outsourcingPlacementMetaData = {
  title: "IT Outsourcing & Placement Services | Soul IT Networks",
  description:
    "Access skilled professionals through IT outsourcing, staffing, recruitment, placement, and workforce management solutions.",
  keywords: [
    "IT outsourcing",
    "staffing services",
    "placement services",
    "IT recruitment",
    "resource outsourcing"
  ],
};

export const recruitmentMetaData = {
  title: "Recruitment & Human Capital Solutions | Soul IT Networks",
  description:
    "Build high-performing teams with recruitment, talent acquisition, workforce planning, and human capital management services.",
  keywords: [
    "recruitment services",
    "human capital solutions",
    "talent acquisition",
    "workforce solutions",
    "HR consulting"
  ],
};

export const cctvInstallationMetaData = {
  title: "CCTV Installation Services | Soul IT Networks",
  description:
    "Professional CCTV installation services for offices, campuses, industries, and commercial spaces with advanced surveillance solutions.",
  keywords: [
    "CCTV installation",
    "surveillance systems",
    "security cameras",
    "IP camera installation",
    "CCTV solutions"
  ],
};

export const campusNetworkingMetaData = {
  title: "Campus Wide Networking Solutions | Soul IT Networks",
  description:
    "Design and deploy secure campus-wide networking infrastructure for educational institutions, enterprises, and government organizations.",
  keywords: [
    "campus networking",
    "enterprise networking",
    "LAN implementation",
    "network infrastructure",
    "network deployment services"
  ],
};

export const campusWifiMetaData = {
  title: "Campus Wide WiFi Solutions | Soul IT Networks",
  description:
    "Reliable campus-wide WiFi deployment and management solutions delivering seamless wireless connectivity across large environments.",
  keywords: [
    "campus wifi",
    "wifi deployment",
    "wireless networking",
    "enterprise wifi solutions",
    "wifi infrastructure"
  ],
};

export const softwareDevelopmentMetaData = {
  title: "Custom Software Development Services | Soul IT Networks",
  description:
    "Build scalable web, mobile, enterprise, and cloud-based applications with our custom software development services.",
  keywords: [
    "software development",
    "custom software solutions",
    "enterprise software",
    "web application development",
    "software company India"
  ],
};

export const websiteDevelopmentMetaData = {
  title: "Website Development Services | Soul IT Networks",
  description:
    "Professional website development services including corporate websites, eCommerce platforms, portals, and custom web applications.",
  keywords: [
    "website development",
    "web development company",
    "ecommerce development",
    "business website design",
    "custom website development"
  ],
};

export const otherSoftwareServicesMetaData = {
  title: "Software Consulting & Technology Services | Soul IT Networks",
  description:
    "Comprehensive software consulting, application modernization, maintenance, integration, and technology solutions for businesses.",
  keywords: [
    "software consulting",
    "application services",
    "technology consulting",
    "software maintenance",
    "digital transformation"
  ],
};

export const governmentTenderMetaData = {
  title: "Government IT Tender Solutions | Soul IT Networks",
  description:
    "Expert support for government IT tenders, technology procurement, infrastructure deployment, and public sector digital transformation projects.",
  keywords: [
    "government IT tenders",
    "public sector IT solutions",
    "government technology projects",
    "IT procurement",
    "government infrastructure solutions"
  ],
};

export const remoteCctvMetaData = {
  title: "Remote CCTV Monitoring Services | Soul IT Networks",
  description:
    "24/7 remote CCTV monitoring services providing real-time surveillance, incident detection, and enhanced security management.",
  keywords: [
    "remote CCTV monitoring",
    "surveillance monitoring",
    "security monitoring services",
    "remote video surveillance",
    "CCTV management"
  ],
};

// Solutions Page Meta Data

export const endUserComputingMetaData = {
  title: "End User Computing Solutions | Soul IT Networks",
  description:
    "Empower your workforce with end user computing solutions including desktops, laptops, virtual desktops, device management, and workplace technology services.",
  keywords: [
    "end user computing",
    "digital workplace solutions",
    "device management",
    "virtual desktop infrastructure",
    "workplace IT solutions"
  ],
};

export const enterpriseMessagingMetaData = {
  title: "Enterprise Messaging & Collaboration Solutions | Soul IT Networks",
  description:
    "Enhance communication and productivity with enterprise messaging, collaboration platforms, video conferencing, and unified communication solutions.",
  keywords: [
    "enterprise collaboration",
    "business communication solutions",
    "unified communications",
    "video conferencing solutions",
    "messaging platforms"
  ],
};

export const advancedSecurityMetaData = {
  title: "Advanced Security Solutions | Soul IT Networks",
  description:
    "Protect critical business assets with advanced security solutions including identity management, endpoint security, threat detection, and compliance services.",
  keywords: [
    "advanced security solutions",
    "endpoint protection",
    "identity management",
    "threat detection",
    "enterprise cybersecurity"
  ],
};

export const networkSecuritySolutionsMetaData = {
  title: "Network Security Solutions | Soul IT Networks",
  description:
    "Secure your network infrastructure with firewall management, intrusion prevention, secure access, VPN solutions, and cybersecurity services.",
  keywords: [
    "network security solutions",
    "firewall security",
    "VPN solutions",
    "cybersecurity services",
    "network protection"
  ],
};

export const cloudConsultingMetaData = {
  title: "Cloud & Data Centre Consulting | Soul IT Networks",
  description:
    "Accelerate digital transformation with cloud consulting, infrastructure modernization, migration planning, and data center optimization services.",
  keywords: [
    "cloud consulting",
    "data centre consulting",
    "cloud migration",
    "infrastructure modernization",
    "cloud transformation"
  ],
};

export const sddcMetaData = {
  title: "Software Defined Data Centre Solutions | Soul IT Networks",
  description:
    "Modernize IT operations with software-defined data centre solutions including virtualization, automation, storage, and networking technologies.",
  keywords: [
    "software defined data centre",
    "SDDC solutions",
    "data center virtualization",
    "software defined infrastructure",
    "virtualized data center"
  ],
};

export const consultingServicesMetaData = {
  title: "Professional & Consulting Services | Soul IT Networks",
  description:
    "Expert IT consulting services to help organizations design, implement, optimize, and manage technology solutions aligned with business goals.",
  keywords: [
    "IT consulting services",
    "technology consulting",
    "professional services",
    "digital transformation consulting",
    "IT strategy services"
  ],
};

export const businessContinuityMetaData = {
  title: "Business Continuity & Disaster Recovery Solutions | Soul IT Networks",
  description:
    "Ensure operational resilience with business continuity planning, disaster recovery solutions, backup management, and risk mitigation services.",
  keywords: [
    "business continuity",
    "disaster recovery solutions",
    "backup and recovery",
    "business resilience",
    "data protection services"
  ],
};

export const surveillanceMetaData = {
  title: "CCTV & Surveillance Solutions | Soul IT Networks",
  description:
    "Advanced CCTV and surveillance solutions for offices, industries, campuses, and commercial facilities with real-time monitoring capabilities.",
  keywords: [
    "CCTV surveillance solutions",
    "video surveillance systems",
    "security monitoring",
    "IP camera solutions",
    "commercial surveillance"
  ],
};

export const campusNetworkingSolutionsMetaData = {
  title: "Campus Wide Networking Solutions | Soul IT Networks",
  description:
    "Reliable campus-wide networking solutions delivering secure, scalable, and high-performance connectivity for enterprises and institutions.",
  keywords: [
    "campus networking solutions",
    "enterprise networking",
    "network infrastructure services",
    "LAN deployment",
    "network architecture"
  ],
};

export const campusWifiSolutionsMetaData = {
  title: "Campus Wide WiFi Solutions | Soul IT Networks",
  description:
    "Deliver seamless wireless connectivity with enterprise-grade campus-wide WiFi design, deployment, optimization, and management services.",
  keywords: [
    "campus wifi solutions",
    "enterprise wifi",
    "wireless networking",
    "wifi deployment services",
    "managed wifi solutions"
  ],
};

export const softwareDevelopmentSolutionsMetaData = {
  title: "Software Development Solutions | Soul IT Networks",
  description:
    "Custom software development solutions including enterprise applications, web portals, mobile apps, automation tools, and digital platforms.",
  keywords: [
    "software development solutions",
    "custom software development",
    "enterprise applications",
    "web application development",
    "software company India"
  ],
};

export const websiteDevelopmentSolutionsMetaData = {
  title: "Website Development Solutions | Soul IT Networks",
  description:
    "Professional website development services for businesses, institutions, eCommerce platforms, and enterprise web applications.",
  keywords: [
    "website development solutions",
    "business website development",
    "ecommerce website development",
    "web design company",
    "custom web development"
  ],
};

export const enterpriseSoftwareMetaData = {
  title: "Enterprise Software Services | Soul IT Networks",
  description:
    "Transform business operations with enterprise software services including ERP, CRM, workflow automation, application integration, and support.",
  keywords: [
    "enterprise software services",
    "ERP solutions",
    "CRM development",
    "business automation software",
    "enterprise applications"
  ],
};

// --------------------------------------------------------

export const projectsPageMetaData = {
  title: "Projects | Soul IT Networks",

  description:
    "Explore Soul IT Networks' successful IT infrastructure, networking, cybersecurity, surveillance, cloud, and software development projects delivered across industries.",

  keywords: [
    "IT projects",
    "system integration projects",
    "network infrastructure projects",
    "cybersecurity implementations",
    "software development projects",
    "technology case studies",
    "IT solutions portfolio",
    "Soul IT Networks projects"
  ],
};

export const partnersPageMetaData = {
  title: "Technology Partners | Soul IT Networks",

  description:
    "Discover our trusted technology partners and industry-leading vendors helping Soul IT Networks deliver innovative IT infrastructure, security, cloud, and software solutions.",

  keywords: [
    "technology partners",
    "IT solution partners",
    "technology alliances",
    "enterprise technology vendors",
    "IT partnerships",
    "Soul IT Networks partners"
  ],
};

export const customersPageMetaData = {
  title: "Our Customers | Soul IT Networks",

  description:
    "Learn how organizations across industries trust Soul IT Networks for IT infrastructure, cybersecurity, cloud, surveillance, networking, and software solutions.",

  keywords: [
    "our customers",
    "client success stories",
    "enterprise customers",
    "IT services clients",
    "technology solutions customers",
    "Soul IT Networks clients"
  ],
};

export const supportPageMetaData = {
  title: "Technical Support | Soul IT Networks",

  description:
    "Get expert technical support for IT infrastructure, networking, security, surveillance, cloud solutions, and software services from Soul IT Networks.",

  keywords: [
    "IT support services",
    "technical support",
    "network support",
    "system maintenance",
    "customer support",
    "managed IT support",
    "Soul IT Networks support"
  ],
};

export const careersPageMetaData = {
  title: "Careers | Join Soul IT Networks",

  description:
    "Build your career with Soul IT Networks. Explore opportunities in IT infrastructure, cybersecurity, networking, cloud computing, software development, and consulting.",

  keywords: [
    "IT jobs",
    "technology careers",
    "software developer jobs",
    "network engineer jobs",
    "cybersecurity careers",
    "IT company careers",
    "Soul IT Networks jobs"
  ],
};

export const contactPageMetaData = {
  title: "Contact Us | Soul IT Networks",

  description:
    "Contact Soul IT Networks for IT infrastructure, network security, cloud solutions, surveillance systems, software development, managed IT services, and technology consulting.",

  keywords: [
    "contact Soul IT Networks",
    "IT consulting company",
    "network security services",
    "cloud solutions provider",
    "software development company",
    "IT infrastructure services",
    "technology consulting",
    "managed IT services",
    "surveillance solutions",
    "system integration company"
  ],

  alternates: {
    canonical: "https://soulitnetworks.com/contact",
  },

  openGraph: {
    type: "website",

    title: "Contact Soul IT Networks | IT Infrastructure & Technology Solutions",

    description:
      "Get in touch with Soul IT Networks for IT infrastructure, cybersecurity, networking, cloud solutions, surveillance systems, software development, and technology consulting services.",

    url: "https://soulitnetworks.com/contact",

    siteName: "Soul IT Networks",

    locale: "en_IN",

    images: [
      {
        url: "https://soulitnetworks.com/assets/images/logo.png",
        alt: "Contact Soul IT Networks",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Contact Soul IT Networks",

    description:
      "Connect with our experts for IT infrastructure, cloud, cybersecurity, networking, surveillance, and software development solutions.",

    images: [
      {
        url: "https://soulitnetworks.com/assets/images/logo.png",
        alt: "Soul IT Networks Contact Page",
      },
    ],

    site: "@SoulITNetworks", // Update if you have an official X/Twitter handle

    url: "https://soulitnetworks.com/contact",
  },
};

export const contactPageSchema = {
  "@context": "https://schema.org",

  "@type": "ContactPage",

  "name": "Contact Soul IT Networks",

  "url": "https://soulitnetworks.com/contact",

  "description":
    "Contact Soul IT Networks for IT infrastructure, cybersecurity, cloud solutions, surveillance systems, networking services, software development, and technology consulting.",

  "publisher": {
    "@type": "Organization",

    "name": "Soul IT Networks",

    "url": "https://soulitnetworks.com",

    "logo": {
      "@type": "ImageObject",
      "url": "https://soulitnetworks.com/assets/images/logo.png"
    },

    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }
  }
};

export const staticPageUrls = [
  {
    url: `${process.env.BASE_URL!}`,
    lastModified: "2026-01-15T07:20:51+00:00",
    priority: 1.0,
  },
  {
    url: `${process.env.BASE_URL!}/about-us`,
    lastModified: "2026-01-15T07:20:51+00:00",
    priority: 0.8,
  },
  {
    url: `${process.env.BASE_URL!}/pcc-professional-communication-conversation`,
    lastModified: "2026-01-15T07:20:51+00:00",
    priority: 0.8,
  },
  {
    url: `${process.env.BASE_URL!}/ltc-learn-to-communicate`,
    lastModified: "2026-01-15T07:20:51+00:00",
    priority: 0.8,
  },
  {
    url: `${process.env.BASE_URL!}/grammar-accuracy-booster`,
    lastModified: "2026-01-15T07:20:51+00:00",
    priority: 0.8,
  },
  {
    url: `${process.env.BASE_URL!}/15-days-speaking-challenge`,
    lastModified: "2026-01-15T07:20:51+00:00",
    priority: 0.8,
  },
  {
    url: `${process.env.BASE_URL!}/interview-game-plan`,
    lastModified: "2026-01-15T07:20:51+00:00",
    priority: 0.8,
  },
  {
    url: `${process.env.BASE_URL!}/weekend-speaking-club`,
    lastModified: "2026-01-15T07:20:51+00:00",
    priority: 0.8,
  },
  {
    url: `${process.env.BASE_URL!}/contact`,
    lastModified: "2026-01-15T07:20:51+00:00",
    priority: 0.8,
  },
  {
    url: `${process.env.BASE_URL!}/blog`,
    lastModified: "2026-01-15T07:20:51+00:00",
    priority: 0.8,
  },
];
