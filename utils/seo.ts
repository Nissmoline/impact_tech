import { Locale } from './locale';

export type SeoContent = {
  title: string;
  description: string;
  keywords: string[];
};

export const SITE_NAME = 'Impact Tech';
export const SITE_URL = 'https://impacttech.gr';
export const SITE_DESCRIPTION =
  'Impact Tech builds websites, custom CMS platforms, SaaS products, AI systems, mobile apps, business software, secure APIs, and cloud/QA pipelines for teams in Greece and the EU.';
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
  'Custom CMS platforms',
  'SaaS product development',
  'AI product development',
  '3D web experiences',
  'WebGL development',
  'Custom software development',
  'Mobile app development',
  'Backend API development',
  'Smart home software',
  'DevOps and cloud infrastructure',
  'IT consulting and product strategy',
];

export const getLanguageTag = (locale: Locale) => LANGUAGE_TAGS[locale];

export const BREADCRUMB_LABELS: Record<Locale, Record<string, string>> = {
  en: {
    home: 'Home',
    about: 'About',
    portfolio: 'Works',
    careers: 'Careers',
    privacy: 'Privacy Policy',
    impressum: 'Impressum',
    services: 'Services',
  },
  el: {
    home: 'Αρχική',
    about: 'Σχετικά',
    portfolio: 'Works',
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
      title: 'Impact Tech | Web, SaaS, AI & IT Consulting Studio in Greece',
      description:
        'Founder-led digital product studio building websites, custom CMS platforms, SaaS products, AI systems, mobile apps, business software, APIs, and cloud/QA pipelines.',
      keywords: [
        'web development Greece',
        'SaaS development Greece',
        'AI product development',
        'custom CMS development',
        'IT consulting Greece',
        'business software',
        'mobile app development',
        'API development',
        'cloud QA pipelines',
        'workflow automation',
      ],
    },
    el: {
      title: 'Impact Tech | Web, SaaS, AI & IT Consulting στην Ελλάδα',
      description:
        'Founder-led digital product studio που χτίζει websites, custom CMS platforms, SaaS products, AI systems, mobile apps, business software, APIs και cloud/QA pipelines.',
      keywords: [
        'ανάπτυξη ιστοσελίδων Ελλάδα',
        'SaaS development Ελλάδα',
        'AI product development',
        'custom CMS development',
        'IT consulting Ελλάδα',
        'business software',
        'mobile app development',
        'API development',
        'cloud QA pipelines',
        'workflow automation',
      ],
    },
  },
  about: {
    en: {
      title: 'About Impact Tech | Founder-Led Digital Product Studio',
      description:
        'Small senior team turning ideas, workflows, and technical problems into websites, CMS platforms, SaaS tools, AI systems, mobile apps, APIs, and internal software.',
      keywords: [
        'about Impact Tech',
        'founder-led digital studio',
        'digital product studio Greece',
        'IT consulting team',
        'SaaS development team',
        'AI systems team',
        'custom software Greece',
      ],
    },
    el: {
      title: 'Σχετικά με την Impact Tech | Founder-Led Digital Product Studio',
      description:
        'Small senior team που μετατρέπει ιδέες, workflows και τεχνικά προβλήματα σε websites, CMS platforms, SaaS tools, AI systems, mobile apps, APIs και internal software.',
      keywords: [
        'σχετικά με Impact Tech',
        'founder-led digital studio',
        'digital product studio Ελλάδα',
        'IT consulting team',
        'SaaS development team',
        'AI systems team',
        'custom software Ελλάδα',
      ],
    },
  },
  portfolio: {
    en: {
      title: 'Works | Selected Web, App, SaaS & AI Work | Impact Tech',
      description:
        'Explore selected client work, internal products, SaaS platforms, AI systems, CMS builds, and business software from Impact Tech.',
      keywords: [
        'selected web work',
        'SaaS projects',
        'AI systems',
        'CMS platforms',
        'mobile app projects',
        'custom software Greece',
        'smart home software',
      ],
    },
    el: {
      title: 'Works | Selected Web, App, SaaS & AI Work | Impact Tech',
      description:
        'Επιλεγμένη δουλειά σε client projects, internal products, SaaS platforms, AI systems, CMS builds και business software από την Impact Tech.',
      keywords: [
        'selected web work',
        'SaaS projects',
        'AI systems',
        'CMS platforms',
        'mobile app projects',
        'custom software Ελλάδα',
        'smart home software',
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
    title: 'IT Consulting & Product Strategy | Impact Tech',
    description:
      'Technical audits, MVP planning, architecture reviews, workflow mapping, cloud/QA planning και performance roadmaps για ομάδες στην Ελλάδα και την ΕΕ.',
    keywords: [
      'IT consulting',
      'product strategy',
      'technical audit',
      'MVP planning',
      'architecture review',
      'workflow automation',
      'cloud strategy',
      'QA planning',
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
