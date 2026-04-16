import { Locale } from './locale';

export type SeoContent = {
  title: string;
  description: string;
  keywords: string[];
};

export const SITE_NAME = 'Impact Tech';
export const SITE_URL = 'https://impacttech.gr';
export const SITE_DESCRIPTION =
  'Impact Tech builds high-performance websites, 3D web experiences, mobile apps, and custom software for teams in Greece, the EU, and worldwide.';
export const SITE_LAST_MODIFIED = '2026-04-16';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const DEFAULT_TWITTER_IMAGE = DEFAULT_OG_IMAGE;
export const LOGO_IMAGE = `${SITE_URL}/icons/android-chrome-512x512.png`;

const LANGUAGE_TAGS: Record<Locale, string> = {
  en: 'en-GB',
  el: 'el-GR',
};

export const BUSINESS_CONTACT = {
  email: 'info@impacttech.gr',
  telephone: '+30 697 385 8321',
};

export const BUSINESS_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Pl. Ippodameias 8, Office D8',
  addressLocality: 'Piraeus',
  addressRegion: 'Attica',
  postalCode: '18531',
  addressCountry: 'GR',
};

export const BUSINESS_GEO = {
  '@type': 'GeoCoordinates',
  latitude: 37.942,
  longitude: 23.647,
};

export const SERVICE_AREAS = [
  { '@type': 'Country', name: 'Greece' },
  { '@type': 'AdministrativeArea', name: 'Attica' },
  { '@type': 'City', name: 'Athens' },
  { '@type': 'City', name: 'Piraeus' },
  { '@type': 'City', name: 'Thessaloniki' },
  { '@type': 'Place', name: 'European Union' },
];

export const SERVICE_EXPERTISE = [
  'Web development',
  '3D web experiences',
  'WebGL development',
  'Custom software development',
  'Mobile app development',
  'UX/UI design',
  'Backend API development',
  'DevOps and cloud infrastructure',
  'Technical SEO',
];

export const getLanguageTag = (locale: Locale) => LANGUAGE_TAGS[locale];

export const BREADCRUMB_LABELS: Record<Locale, Record<string, string>> = {
  en: {
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    careers: 'Careers',
    privacy: 'Privacy Policy',
    impressum: 'Impressum',
    services: 'Services',
  },
  el: {
    home: 'Αρχική',
    about: 'Σχετικά',
    portfolio: 'Portfolio',
    careers: 'Καριέρα',
    privacy: 'Πολιτική Απορρήτου',
    impressum: 'Νομικές Πληροφορίες',
    services: 'Υπηρεσίες',
  },
};

export const PAGE_SEO: Record<
  'home' | 'about' | 'portfolio' | 'careers' | 'impressum' | 'privacy',
  Record<Locale, SeoContent>
> = {
  home: {
    en: {
      title: 'Impact Tech | Web, 3D & Software Studio in Greece & EU',
      description:
        'We build high-performance websites, 3D web experiences, mobile apps, and custom software for teams in Greece, the EU, and worldwide.',
      keywords: [
        'web development Greece',
        '3D web experiences',
        'WebGL development',
        'custom software Greece',
        'SaaS development',
        'mobile app development',
        'UI UX design',
        'DevOps services',
        'software studio EU',
        'product design studio',
      ],
    },
    el: {
      title: 'Impact Tech | Web, 3D & Λογισμικό στην Ελλάδα & ΕΕ',
      description:
        'Δημιουργούμε high-performance websites, 3D web εμπειρίες, mobile apps και custom λογισμικό για ομάδες στην Ελλάδα, την ΕΕ και διεθνώς.',
      keywords: [
        'ανάπτυξη ιστοσελίδων',
        '3D εμπειρίες web',
        'WebGL development',
        'custom λογισμικό',
        'ανάπτυξη SaaS',
        'ανάπτυξη mobile apps',
        'UI UX design',
        'DevOps υπηρεσίες',
        'digital studio Ελλάδα',
        'Ευρωπαϊκή Ένωση',
      ],
    },
  },
  about: {
    en: {
      title: 'About Impact Tech | Engineering & Design Studio in Greece',
      description:
        'Meet the team delivering 3D, web, and software products for Greece, the EU, and global clients.',
      keywords: [
        'about Impact Tech',
        'digital studio Greece',
        'engineering studio',
        'product design team',
        'web agency Greece',
        '3D studio',
        'EU software team',
      ],
    },
    el: {
      title: 'Σχετικά με την Impact Tech | Engineering & Design Studio',
      description:
        'Γνωρίστε την ομάδα που παραδίδει 3D, web και software προϊόντα για Ελλάδα, ΕΕ και διεθνείς πελάτες.',
      keywords: [
        'σχετικά με Impact Tech',
        'digital studio Ελλάδα',
        'engineering team',
        'web agency Ελλάδα',
        'design systems',
        '3D studio',
      ],
    },
  },
  portfolio: {
    en: {
      title: 'Portfolio | Web, 3D & Software Case Studies | Impact Tech',
      description:
        'Explore websites, SaaS, mobile, and 3D projects delivered for teams in Greece, the EU, and worldwide.',
      keywords: [
        'web development portfolio',
        '3D portfolio',
        'SaaS case studies',
        'mobile app case studies',
        'software projects',
        'EU clients',
      ],
    },
    el: {
      title: 'Portfolio | Έργα Web, 3D & Software | Impact Tech',
      description:
        'Δείτε έργα web, SaaS, mobile και 3D που υλοποιήσαμε για Ελλάδα, ΕΕ και διεθνείς ομάδες.',
      keywords: [
        'portfolio web',
        'έργα 3D',
        'case studies',
        'έργα SaaS',
        'mobile apps',
        'projects Ελλάδα',
      ],
    },
  },
  careers: {
    en: {
      title: 'Careers | Join Impact Tech (Remote, Greece & EU)',
      description:
        'Open roles for engineers and designers in a remote-first team serving Greece, the EU, and global clients.',
      keywords: [
        'careers Impact Tech',
        'remote developer jobs',
        'web development jobs Greece',
        'design jobs EU',
        '3D jobs',
        'software engineering roles',
      ],
    },
    el: {
      title: 'Καριέρα | Γίνε μέλος της Impact Tech (Remote)',
      description:
        'Ανοιχτές θέσεις για μηχανικούς και designers σε remote-first ομάδα με πελάτες Ελλάδα, ΕΕ και διεθνώς.',
      keywords: [
        'καριέρα Impact Tech',
        'remote δουλειά',
        'θέσεις εργασίας Ελλάδα',
        'web development jobs',
        'designer jobs',
        'software engineer',
      ],
    },
  },
  impressum: {
    en: {
      title: 'Impressum | Impact Tech',
      description: 'Legal notice, registered address, and company information for Impact Tech.',
      keywords: ['impressum', 'legal notice', 'company information', 'Impact Tech Greece'],
    },
    el: {
      title: 'Νομικές Πληροφορίες | Impact Tech',
      description: 'Νομική δήλωση, έδρα και στοιχεία εταιρείας της Impact Tech.',
      keywords: ['νομικές πληροφορίες', 'impressum', 'εταιρικά στοιχεία', 'Impact Tech Ελλάδα'],
    },
  },
  privacy: {
    en: {
      title: 'Privacy Policy | Impact Tech',
      description: 'Learn how Impact Tech collects, uses, and protects personal data under GDPR.',
      keywords: ['privacy policy', 'data protection', 'GDPR', 'Impact Tech'],
    },
    el: {
      title: 'Πολιτική Απορρήτου | Impact Tech',
      description: 'Δείτε πώς η Impact Tech συλλέγει, χρησιμοποιεί και προστατεύει δεδομένα σύμφωνα με το GDPR.',
      keywords: ['πολιτική απορρήτου', 'προστασία δεδομένων', 'GDPR', 'Impact Tech'],
    },
  },
};

export const SERVICE_SEO_EL: Record<string, SeoContent> = {
  '3d-interactive': {
    title: '3D & Διαδραστικές Εμπειρίες Web | Impact Tech',
    description:
      'WebGL/Three.js configurators, virtual showrooms και 3D visualizations με έμφαση στην απόδοση για ομάδες σε Ελλάδα, ΕΕ και διεθνώς.',
    keywords: [
      '3D web development',
      'WebGL',
      'Three.js',
      'διαδραστικές 3D εμπειρίες',
      'virtual showroom',
      'configurator',
      '3D visualization',
      'Ελλάδα',
      'ΕΕ',
      '3D studio',
    ],
  },
  'web-development': {
    title: 'Web Development & SaaS | Impact Tech',
    description:
      'High-performance websites, portals και web apps με React/Next.js για ομάδες σε Ελλάδα, ΕΕ και διεθνώς.',
    keywords: [
      'web development',
      'ανάπτυξη ιστοσελίδων',
      'React',
      'Next.js',
      'SaaS',
      'SEO',
      'Ελλάδα',
      'ΕΕ',
      'web agency',
    ],
  },
  'ux-ui-design': {
    title: 'UX/UI Design & Design Systems | Impact Tech',
    description:
      'UX/UI σχεδιασμός, user research και design systems που αυξάνουν τη μετατροπή για Ελλάδα, ΕΕ και διεθνείς αγορές.',
    keywords: [
      'UX UI design',
      'design systems',
      'user experience',
      'interface design',
      'Figma',
      'accessibility',
      'Ελλάδα',
      'ΕΕ',
    ],
  },
  'mobile-apps': {
    title: 'Mobile Apps με React Native/Flutter | Impact Tech',
    description:
      'Cross-platform εφαρμογές iOS/Android με React Native ή Flutter για Ελλάδα, ΕΕ και παγκόσμιες ομάδες.',
    keywords: [
      'mobile apps',
      'React Native',
      'Flutter',
      'iOS',
      'Android',
      'mobile app development',
      'Ελλάδα',
      'ΕΕ',
    ],
  },
  'backend-apis': {
    title: 'Backend & API Ανάπτυξη | Impact Tech',
    description:
      'Ασφαλή REST/GraphQL APIs, Node.js services και cloud-ready υποδομές για Ελλάδα, ΕΕ και διεθνείς ομάδες.',
    keywords: [
      'backend ανάπτυξη',
      'API development',
      'Node.js',
      'GraphQL',
      'PostgreSQL',
      'cloud',
      'Ελλάδα',
      'ΕΕ',
    ],
  },
  devops: {
    title: 'DevOps & Cloud Υποδομές | Impact Tech',
    description:
      'CI/CD, Kubernetes, monitoring και cloud αρχιτεκτονική για ομάδες σε Ελλάδα, ΕΕ και διεθνώς.',
    keywords: [
      'DevOps',
      'CI/CD',
      'cloud infrastructure',
      'AWS',
      'Kubernetes',
      'monitoring',
      'Ελλάδα',
      'ΕΕ',
    ],
  },
  'custom-software': {
    title: 'Custom Software & Επιχειρησιακές Λύσεις | Impact Tech',
    description:
      'Προσαρμοσμένες εφαρμογές που αυτοματοποιούν διαδικασίες για Ελλάδα, ΕΕ και διεθνείς οργανισμούς.',
    keywords: [
      'custom software',
      'επιχειρησιακές εφαρμογές',
      'automation',
      'internal tools',
      'Ελλάδα',
      'ΕΕ',
    ],
  },
  'seo-strategy': {
    title: 'SEO Strategy & Optimization | Impact Tech',
    description:
      'Τεχνικό SEO, Core Web Vitals και στρατηγική περιεχομένου για καλύτερα rankings σε Ελλάδα, ΕΕ και διεθνώς.',
    keywords: [
      'SEO',
      'τεχνικό SEO',
      'content strategy',
      'Core Web Vitals',
      'SEO audit',
      'Ελλάδα',
      'ΕΕ',
    ],
  },
};

export const buildWebPageSchema = (params: {
  title: string;
  description: string;
  url: string;
  locale: Locale;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: params.title,
  description: params.description,
  url: params.url,
  inLanguage: getLanguageTag(params.locale),
  dateModified: SITE_LAST_MODIFIED,
  isAccessibleForFree: true,
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: DEFAULT_OG_IMAGE,
    width: 1200,
    height: 630,
  },
  isPartOf: {
    '@id': `${SITE_URL}/#website`,
  },
  about: {
    '@id': `${SITE_URL}/#organization`,
  },
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
});

export const buildServiceSchema = (params: {
  name: string;
  description: string;
  url: string;
  locale: Locale;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${params.url}#service`,
  name: params.name,
  serviceType: params.name,
  category: 'Digital services',
  description: params.description,
  url: params.url,
  inLanguage: getLanguageTag(params.locale),
  image: DEFAULT_OG_IMAGE,
  mainEntityOfPage: params.url,
  provider: {
    '@id': `${SITE_URL}/#organization`,
  },
  areaServed: SERVICE_AREAS,
  availableLanguage: ['en', 'el'],
  audience: {
    '@type': 'Audience',
    geographicArea: {
      '@type': 'Country',
      name: 'Greece',
    },
  },
});

export const buildOrganizationSchema = (locale: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ['Impact Tech Greece', 'Impact Tech Web Development Agency'],
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  logo: LOGO_IMAGE,
  email: BUSINESS_CONTACT.email,
  telephone: BUSINESS_CONTACT.telephone,
  address: BUSINESS_ADDRESS,
  geo: BUSINESS_GEO,
  areaServed: SERVICE_AREAS,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'https://schema.org/Monday',
        'https://schema.org/Tuesday',
        'https://schema.org/Wednesday',
        'https://schema.org/Thursday',
        'https://schema.org/Friday',
      ],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'https://schema.org/Saturday',
      opens: '09:00',
      closes: '15:00',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: BUSINESS_CONTACT.email,
      telephone: BUSINESS_CONTACT.telephone,
      availableLanguage: ['en', 'el'],
      areaServed: ['GR', 'EU'],
    },
  ],
  knowsAbout: SERVICE_EXPERTISE,
  makesOffer: SERVICE_EXPERTISE.map((serviceName) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: serviceName,
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
  })),
  inLanguage: getLanguageTag(locale),
});

export const buildWebsiteSchema = (locale: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: getLanguageTag(locale),
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
});

export const buildServiceCatalogSchema = (params: {
  locale: Locale;
  services: Array<{ name: string; description: string; url: string }>;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  '@id': `${SITE_URL}/#service-catalog`,
  name: params.locale === 'el' ? 'Υπηρεσίες Impact Tech' : 'Impact Tech Services',
  url: SITE_URL,
  numberOfItems: params.services.length,
  provider: {
    '@id': `${SITE_URL}/#organization`,
  },
  itemListElement: params.services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      '@id': `${service.url}#service`,
      name: service.name,
      description: service.description,
      url: service.url,
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
  })),
});

export const buildBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
