import { Locale } from './locale';

export type SeoContent = {
  title: string;
  description: string;
  keywords: string[];
};

export const SITE_NAME = 'Impact Tech';
export const SITE_URL = 'https://impact-tech.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const DEFAULT_TWITTER_IMAGE = `${SITE_URL}/twitter-image.jpg`;

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
      title: 'Impact Tech | Web Development & 3D Experiences in Greece',
      description:
        'Impact Tech builds high-performance web platforms, 3D experiences, mobile apps, and custom software for ambitious teams worldwide.',
      keywords: [
        'web development Greece',
        '3D web experiences',
        'custom software',
        'mobile app development',
        'UI UX design',
        'SEO strategy',
        'Piraeus',
      ],
    },
    el: {
      title: 'Impact Tech | Ανάπτυξη Ιστοσελίδων & 3D Εμπειρίες στην Ελλάδα',
      description:
        'Η Impact Tech δημιουργεί γρήγορες web πλατφόρμες, 3D εμπειρίες, mobile apps και custom λογισμικό για ομάδες που εξελίσσονται.',
      keywords: [
        'ανάπτυξη ιστοσελίδων',
        '3D εμπειρίες web',
        'custom λογισμικό',
        'ανάπτυξη εφαρμογών',
        'UI UX design',
        'SEO στρατηγική',
        'Πειραιάς',
      ],
    },
  },
  about: {
    en: {
      title: 'About Impact Tech | Product-Focused Digital Studio',
      description:
        'Meet the Impact Tech team and discover how we deliver design-led, performance-first digital experiences.',
      keywords: ['about Impact Tech', 'digital studio Greece', 'web agency team', 'product design'],
    },
    el: {
      title: 'Σχετικά με την Impact Tech | Digital Studio',
      description:
        'Γνωρίστε την ομάδα της Impact Tech και τη φιλοσοφία μας για design-led, performance-first ψηφιακά προϊόντα.',
      keywords: ['σχετικά με Impact Tech', 'digital studio', 'ομάδα web agency', 'product design'],
    },
  },
  portfolio: {
    en: {
      title: 'Portfolio | Impact Tech Projects & Case Studies',
      description:
        'Explore web, mobile, and 3D projects delivered by Impact Tech for global clients.',
      keywords: ['portfolio web development', 'case studies', 'digital projects', '3D projects'],
    },
    el: {
      title: 'Portfolio | Έργα & Case Studies της Impact Tech',
      description:
        'Δείτε έργα web, mobile και 3D που υλοποιήσαμε για πελάτες στην Ελλάδα και το εξωτερικό.',
      keywords: ['portfolio', 'έργα ανάπτυξης', 'case studies', '3D projects'],
    },
  },
  careers: {
    en: {
      title: 'Careers | Join Impact Tech',
      description:
        'Open roles and opportunities to work with our design and engineering team in Greece.',
      keywords: ['careers Impact Tech', 'jobs web development', 'design engineering Greece'],
    },
    el: {
      title: 'Καριέρα | Γίνε μέλος της Impact Tech',
      description:
        'Δες τις διαθέσιμες θέσεις και τις ευκαιρίες συνεργασίας με την ομάδα μας.',
      keywords: ['καριέρα Impact Tech', 'θέσεις εργασίας', 'web development Ελλάδα'],
    },
  },
  impressum: {
    en: {
      title: 'Impressum | Impact Tech',
      description: 'Legal notice and company information for Impact Tech.',
      keywords: ['impressum', 'legal notice', 'company information'],
    },
    el: {
      title: 'Νομικές Πληροφορίες | Impact Tech',
      description: 'Νομική δήλωση και στοιχεία εταιρείας για την Impact Tech.',
      keywords: ['νομικές πληροφορίες', 'impressum', 'εταιρικά στοιχεία'],
    },
  },
  privacy: {
    en: {
      title: 'Privacy Policy | Impact Tech',
      description: 'Learn how Impact Tech collects, uses, and protects personal data.',
      keywords: ['privacy policy', 'data protection', 'GDPR'],
    },
    el: {
      title: 'Πολιτική Απορρήτου | Impact Tech',
      description: 'Δείτε πώς η Impact Tech συλλέγει, χρησιμοποιεί και προστατεύει δεδομένα.',
      keywords: ['πολιτική απορρήτου', 'προστασία δεδομένων', 'GDPR'],
    },
  },
};

export const SERVICE_SEO_EL: Record<string, SeoContent> = {
  '3d-interactive': {
    title: '3D & Διαδραστικές Εμπειρίες Web | Impact Tech',
    description:
      'WebGL/Three.js configurators, virtual showrooms και 3D visualizations με έμφαση στην απόδοση.',
    keywords: ['3D web development', 'WebGL', 'Three.js', 'virtual showroom', 'configurator', 'Ελλάδα'],
  },
  'web-development': {
    title: 'Web Development & SaaS | Impact Tech',
    description:
      'Γρήγορα, SEO-ready sites, portals και web apps με React/Next.js για επιχειρήσεις που μεγαλώνουν.',
    keywords: ['web development', 'ανάπτυξη ιστοσελίδων', 'React', 'Next.js', 'SaaS', 'Ελλάδα'],
  },
  'ux-ui-design': {
    title: 'UX/UI Design & Design Systems | Impact Tech',
    description:
      'Σχεδιασμός εμπειρίας χρήστη και design systems που αυξάνουν τη μετατροπή και την συνέπεια.',
    keywords: ['UX UI design', 'design systems', 'user experience', 'interface design', 'Ελλάδα'],
  },
  'mobile-apps': {
    title: 'Mobile Apps με React Native/Flutter | Impact Tech',
    description:
      'Cross-platform εφαρμογές iOS/Android με έμφαση στην απόδοση, την αξιοπιστία και το UX.',
    keywords: ['mobile apps', 'React Native', 'Flutter', 'iOS', 'Android', 'Ελλάδα'],
  },
  'backend-apis': {
    title: 'Backend & API Ανάπτυξη | Impact Tech',
    description:
      'Ασφαλή REST/GraphQL APIs, Node.js services και cloud-ready υποδομές που κλιμακώνονται.',
    keywords: ['backend ανάπτυξη', 'API development', 'Node.js', 'GraphQL', 'PostgreSQL', 'Ελλάδα'],
  },
  devops: {
    title: 'DevOps & Cloud Υποδομές | Impact Tech',
    description:
      'CI/CD, monitoring και cloud αρχιτεκτονική για αξιόπιστη ανάπτυξη και χαμηλό downtime.',
    keywords: ['DevOps', 'CI/CD', 'cloud infrastructure', 'AWS', 'monitoring', 'Ελλάδα'],
  },
  'custom-software': {
    title: 'Custom Software & Επιχειρησιακές Λύσεις | Impact Tech',
    description:
      'Προσαρμοσμένες εφαρμογές που αυτοματοποιούν διαδικασίες και στηρίζουν την ανάπτυξη.',
    keywords: ['custom software', 'επιχειρησιακές εφαρμογές', 'automation', 'Ελλάδα'],
  },
  'seo-strategy': {
    title: 'SEO Strategy & Optimization | Impact Tech',
    description:
      'Τεχνικό SEO, στρατηγική περιεχομένου και Core Web Vitals optimization για υψηλότερα rankings.',
    keywords: ['SEO', 'τεχνικό SEO', 'content strategy', 'Core Web Vitals', 'Ελλάδα'],
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
  inLanguage: params.locale === 'el' ? 'el-GR' : 'en-US',
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
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
  name: params.name,
  description: params.description,
  url: params.url,
  inLanguage: params.locale === 'el' ? 'el-GR' : 'en-US',
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: ['GR', 'EU', 'US'],
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
