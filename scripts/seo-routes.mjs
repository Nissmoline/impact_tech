export const SITE_NAME = 'Impact Tech';
export const SITE_URL = 'https://impacttech.gr';
export const SITE_DESCRIPTION =
  'Impact Tech builds high-performance websites, 3D web experiences, mobile apps, and custom software for teams in Greece, the EU, and worldwide.';
export const SITE_LAST_MODIFIED = '2026-04-16';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const DEFAULT_TWITTER_IMAGE = DEFAULT_OG_IMAGE;

const home = {
  path: '/',
  changefreq: 'weekly',
  priority: '1.0',
  en: {
    title: 'Impact Tech | Web, 3D & Software Studio in Greece & EU',
    description:
      'We build high-performance websites, 3D web experiences, mobile apps, and custom software for teams in Greece, the EU, and worldwide.',
    keywords:
      'web development Greece, 3D web experiences, WebGL development, custom software Greece, SaaS development, mobile app development, UI UX design, DevOps services, software studio EU',
  },
  el: {
    title: 'Impact Tech | Web, 3D & Λογισμικό στην Ελλάδα & ΕΕ',
    description:
      'Δημιουργούμε high-performance websites, 3D web εμπειρίες, mobile apps και custom λογισμικό για ομάδες στην Ελλάδα, την ΕΕ και διεθνώς.',
    keywords:
      'ανάπτυξη ιστοσελίδων, 3D εμπειρίες web, WebGL development, custom λογισμικό, ανάπτυξη SaaS, ανάπτυξη mobile apps, UI UX design, DevOps υπηρεσίες, digital studio Ελλάδα',
  },
};

const pages = [
  home,
  {
    path: '/portfolio',
    changefreq: 'weekly',
    priority: '0.9',
    en: {
      title: 'Portfolio | Web, 3D & Software Case Studies | Impact Tech',
      description:
        'Explore websites, SaaS, mobile, and 3D projects delivered for teams in Greece, the EU, and worldwide.',
      keywords: 'web development portfolio, 3D portfolio, SaaS case studies, mobile app case studies, software projects, EU clients',
    },
    el: {
      title: 'Portfolio | Έργα Web, 3D & Software | Impact Tech',
      description:
        'Δείτε έργα web, SaaS, mobile και 3D που υλοποιήσαμε για Ελλάδα, ΕΕ και διεθνείς ομάδες.',
      keywords: 'portfolio web, έργα 3D, case studies, έργα SaaS, mobile apps, projects Ελλάδα',
    },
  },
  {
    path: '/about',
    changefreq: 'yearly',
    priority: '0.7',
    en: {
      title: 'About Impact Tech | Engineering & Design Studio in Greece',
      description:
        'Meet the team delivering 3D, web, and software products for Greece, the EU, and global clients.',
      keywords: 'about Impact Tech, digital studio Greece, engineering studio, product design team, web agency Greece, 3D studio',
    },
    el: {
      title: 'Σχετικά με την Impact Tech | Engineering & Design Studio',
      description:
        'Γνωρίστε την ομάδα που παραδίδει 3D, web και software προϊόντα για Ελλάδα, ΕΕ και διεθνείς πελάτες.',
      keywords: 'σχετικά με Impact Tech, digital studio Ελλάδα, engineering team, web agency Ελλάδα, design systems, 3D studio',
    },
  },
  {
    path: '/careers',
    changefreq: 'yearly',
    priority: '0.6',
    en: {
      title: 'Careers | Join Impact Tech (Remote, Greece & EU)',
      description:
        'Open roles for engineers and designers in a remote-first team serving Greece, the EU, and global clients.',
      keywords: 'careers Impact Tech, remote developer jobs, web development jobs Greece, design jobs EU, 3D jobs',
    },
    el: {
      title: 'Καριέρα | Γίνε μέλος της Impact Tech (Remote)',
      description:
        'Ανοιχτές θέσεις για μηχανικούς και designers σε remote-first ομάδα με πελάτες Ελλάδα, ΕΕ και διεθνώς.',
      keywords: 'καριέρα Impact Tech, remote δουλειά, θέσεις εργασίας Ελλάδα, web development jobs, designer jobs',
    },
  },
  {
    path: '/impressum',
    changefreq: 'yearly',
    priority: '0.3',
    en: {
      title: 'Impressum | Impact Tech',
      description: 'Legal notice, registered address, and company information for Impact Tech.',
      keywords: 'impressum, legal notice, company information, Impact Tech Greece',
    },
    el: {
      title: 'Νομικές Πληροφορίες | Impact Tech',
      description: 'Νομική δήλωση, έδρα και στοιχεία εταιρείας της Impact Tech.',
      keywords: 'νομικές πληροφορίες, impressum, εταιρικά στοιχεία, Impact Tech Ελλάδα',
    },
  },
  {
    path: '/privacy',
    changefreq: 'yearly',
    priority: '0.3',
    en: {
      title: 'Privacy Policy | Impact Tech',
      description: 'Learn how Impact Tech collects, uses, and protects personal data under GDPR.',
      keywords: 'privacy policy, data protection, GDPR, Impact Tech',
    },
    el: {
      title: 'Πολιτική Απορρήτου | Impact Tech',
      description:
        'Δείτε πώς η Impact Tech συλλέγει, χρησιμοποιεί και προστατεύει δεδομένα σύμφωνα με το GDPR.',
      keywords: 'πολιτική απορρήτου, προστασία δεδομένων, GDPR, Impact Tech',
    },
  },
];

const services = [
  {
    path: '/services/3d-interactive',
    en: {
      title: '3D Web Experiences & WebGL Development | Impact Tech',
      description:
        'WebGL/Three.js configurators, virtual showrooms, and 3D visualizations built for speed. Serving teams in Greece, the EU, and worldwide.',
      keywords:
        '3D web development, WebGL development, Three.js development, product configurator, virtual showroom, 3D visualization, React Three Fiber, Greece 3D studio',
    },
    el: {
      title: '3D & Διαδραστικές Εμπειρίες Web | Impact Tech',
      description:
        'WebGL/Three.js configurators, virtual showrooms και 3D visualizations με έμφαση στην απόδοση για ομάδες σε Ελλάδα, ΕΕ και διεθνώς.',
      keywords:
        '3D web development, WebGL, Three.js, διαδραστικές 3D εμπειρίες, virtual showroom, configurator, 3D visualization, Ελλάδα',
    },
  },
  {
    path: '/services/web-development',
    en: {
      title: 'Web Development & SaaS Builds | React/Next.js | Impact Tech',
      description:
        'High-performance marketing sites, SaaS portals, and dashboards built with React/Next.js for teams in Greece, the EU, and worldwide.',
      keywords:
        'web development, React development, Next.js development, TypeScript, SaaS development, web applications, SEO web development, Greece web development',
    },
    el: {
      title: 'Web Development & SaaS | Impact Tech',
      description:
        'High-performance websites, portals και web apps με React/Next.js για ομάδες σε Ελλάδα, ΕΕ και διεθνώς.',
      keywords: 'web development, ανάπτυξη ιστοσελίδων, React, Next.js, SaaS, SEO, Ελλάδα, web agency',
    },
  },
  {
    path: '/services/ux-ui-design',
    en: {
      title: 'UX/UI Design & Design Systems | Impact Tech',
      description:
        'User research, conversion-focused interfaces, and scalable design systems for products in Greece, the EU, and global markets.',
      keywords:
        'UX design, UI design, design systems, user experience, Figma design, UX research, conversion optimization, UI UX agency Greece',
    },
    el: {
      title: 'UX/UI Design & Design Systems | Impact Tech',
      description:
        'UX/UI σχεδιασμός, user research και design systems που αυξάνουν τη μετατροπή για Ελλάδα, ΕΕ και διεθνείς αγορές.',
      keywords: 'UX UI design, design systems, user experience, interface design, Figma, accessibility, Ελλάδα',
    },
  },
  {
    path: '/services/mobile-apps',
    en: {
      title: 'Mobile App Development | React Native & Flutter | Impact Tech',
      description:
        'Cross-platform iOS/Android apps with React Native or Flutter. Product design, build, and launch for Greece, the EU, and global teams.',
      keywords:
        'mobile app development, React Native, Flutter, iOS development, Android development, cross-platform apps, app development Greece',
    },
    el: {
      title: 'Mobile Apps με React Native/Flutter | Impact Tech',
      description:
        'Cross-platform εφαρμογές iOS/Android με React Native ή Flutter για Ελλάδα, ΕΕ και παγκόσμιες ομάδες.',
      keywords: 'mobile apps, React Native, Flutter, iOS, Android, mobile app development, Ελλάδα',
    },
  },
  {
    path: '/services/backend-apis',
    en: {
      title: 'Backend & API Development | Node.js & GraphQL | Impact Tech',
      description:
        'Secure REST/GraphQL APIs, Node.js services, and scalable data platforms for teams in Greece, the EU, and worldwide.',
      keywords:
        'backend development, API development, Node.js, REST API, GraphQL, database design, PostgreSQL, Greece backend',
    },
    el: {
      title: 'Backend & API Ανάπτυξη | Impact Tech',
      description:
        'Ασφαλή REST/GraphQL APIs, Node.js services και cloud-ready υποδομές για Ελλάδα, ΕΕ και διεθνείς ομάδες.',
      keywords: 'backend ανάπτυξη, API development, Node.js, GraphQL, PostgreSQL, cloud, Ελλάδα',
    },
  },
  {
    path: '/services/devops',
    en: {
      title: 'DevOps & Cloud Infrastructure | AWS & Kubernetes | Impact Tech',
      description:
        'CI/CD, cloud architecture, monitoring, and security hardening for reliable delivery across Greece, the EU, and global teams.',
      keywords:
        'DevOps, CI/CD, AWS, cloud infrastructure, Kubernetes, Docker, Terraform, DevOps services, EU DevOps',
    },
    el: {
      title: 'DevOps & Cloud Υποδομές | Impact Tech',
      description:
        'CI/CD, Kubernetes, monitoring και cloud αρχιτεκτονική για ομάδες σε Ελλάδα, ΕΕ και διεθνώς.',
      keywords: 'DevOps, CI/CD, cloud infrastructure, AWS, Kubernetes, monitoring, Ελλάδα',
    },
  },
  {
    path: '/services/custom-software',
    en: {
      title: 'Custom Software & Business Apps | Impact Tech',
      description:
        'Bespoke web, mobile, and internal software that streamlines operations for teams in Greece, the EU, and worldwide.',
      keywords:
        'custom software development, business application development, bespoke software, workflow automation, internal tools, Greece software team',
    },
    el: {
      title: 'Custom Software & Επιχειρησιακές Λύσεις | Impact Tech',
      description:
        'Προσαρμοσμένες εφαρμογές που αυτοματοποιούν διαδικασίες για Ελλάδα, ΕΕ και διεθνείς οργανισμούς.',
      keywords: 'custom software, επιχειρησιακές εφαρμογές, automation, internal tools, Ελλάδα',
    },
  },
  {
    path: '/services/seo-strategy',
    en: {
      title: 'SEO Strategy & Technical SEO | Impact Tech',
      description:
        'Technical audits, Core Web Vitals optimization, and content strategy for higher rankings in Greece, the EU, and global markets.',
      keywords:
        'SEO services, technical SEO, SEO strategy, Core Web Vitals, SEO audit, content strategy, SEO consulting, SEO Greece',
    },
    el: {
      title: 'SEO Strategy & Optimization | Impact Tech',
      description:
        'Τεχνικό SEO, Core Web Vitals και στρατηγική περιεχομένου για καλύτερα rankings σε Ελλάδα, ΕΕ και διεθνώς.',
      keywords: 'SEO, τεχνικό SEO, content strategy, Core Web Vitals, SEO audit, Ελλάδα',
    },
  },
];

export const BASE_ROUTES = [
  ...pages,
  ...services.map((service) => ({
    ...service,
    changefreq: 'monthly',
    priority: '0.8',
  })),
];

const localizedPath = (basePath, locale) => {
  if (locale === 'en') return basePath;
  if (basePath === '/') return '/el';
  return `/el${basePath}`;
};

export const buildLocalizedRoutes = () =>
  BASE_ROUTES.flatMap((route) =>
    ['en', 'el'].map((locale) => ({
      ...route,
      locale,
      path: localizedPath(route.path, locale),
      canonicalPath: localizedPath(route.path, locale),
      alternates: {
        en: `${SITE_URL}${localizedPath(route.path, 'en')}`,
        el: `${SITE_URL}${localizedPath(route.path, 'el')}`,
        'x-default': `${SITE_URL}${localizedPath(route.path, 'en')}`,
      },
      seo: route[locale],
    })),
  );

export const xmlEscape = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const htmlEscape = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
