export const SITE_NAME = 'Impact Tech';
export const SITE_URL = 'https://impacttech.gr';
export const SITE_DESCRIPTION =
  'Impact Tech builds websites, custom CMS platforms, SaaS products, AI systems, mobile apps, business software, secure APIs, and cloud/QA pipelines for teams in Greece and the EU.';
export const SITE_LAST_MODIFIED = '2026-04-16';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const DEFAULT_TWITTER_IMAGE = DEFAULT_OG_IMAGE;

const home = {
  path: '/',
  changefreq: 'weekly',
  priority: '1.0',
  en: {
    title: 'Impact Tech | Web, SaaS, AI & IT Consulting Studio in Greece',
    description:
      'Founder-led digital product studio building websites, custom CMS platforms, SaaS products, AI systems, mobile apps, business software, APIs, and cloud/QA pipelines.',
    keywords:
      'web development Greece, SaaS development Greece, AI product development, custom CMS development, IT consulting Greece, business software, mobile app development, API development, cloud QA pipelines, workflow automation',
  },
  el: {
    title: 'Impact Tech | Web, SaaS, AI & IT Consulting στην Ελλάδα',
    description:
      'Founder-led digital product studio που χτίζει websites, custom CMS platforms, SaaS products, AI systems, mobile apps, business software, APIs και cloud/QA pipelines.',
    keywords:
      'ανάπτυξη ιστοσελίδων Ελλάδα, SaaS development Ελλάδα, AI product development, custom CMS development, IT consulting Ελλάδα, business software, mobile app development, API development, cloud QA pipelines, workflow automation',
  },
};

const pages = [
  home,
  {
    path: '/portfolio',
    changefreq: 'weekly',
    priority: '0.9',
    en: {
      title: 'Works | Selected Web, App, SaaS & AI Work | Impact Tech',
      description:
        'Explore selected client work, internal products, SaaS platforms, AI systems, CMS builds, and business software from Impact Tech.',
      keywords: 'selected web work, SaaS projects, AI systems, CMS platforms, mobile app projects, custom software Greece, smart home software',
    },
    el: {
      title: 'Works | Selected Web, App, SaaS & AI Work | Impact Tech',
      description:
        'Επιλεγμένη δουλειά σε client projects, internal products, SaaS platforms, AI systems, CMS builds και business software από την Impact Tech.',
      keywords: 'selected web work, SaaS projects, AI systems, CMS platforms, mobile app projects, custom software Ελλάδα, smart home software',
    },
  },
  {
    path: '/about',
    changefreq: 'yearly',
    priority: '0.7',
    en: {
      title: 'About Impact Tech | Founder-Led Digital Product Studio',
      description:
        'Small senior team turning ideas, workflows, and technical problems into websites, CMS platforms, SaaS tools, AI systems, mobile apps, APIs, and internal software.',
      keywords: 'about Impact Tech, founder-led digital studio, digital product studio Greece, IT consulting team, SaaS development team, AI systems team, custom software Greece',
    },
    el: {
      title: 'Σχετικά με την Impact Tech | Founder-Led Digital Product Studio',
      description:
        'Small senior team που μετατρέπει ιδέες, workflows και τεχνικά προβλήματα σε websites, CMS platforms, SaaS tools, AI systems, mobile apps, APIs και internal software.',
      keywords: 'σχετικά με Impact Tech, founder-led digital studio, digital product studio Ελλάδα, IT consulting team, SaaS development team, AI systems team, custom software Ελλάδα',
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
      title: 'IT Consulting & Product Strategy | Impact Tech',
      description:
        'Technical audits, MVP planning, architecture reviews, workflow mapping, cloud/QA planning, and performance roadmaps for teams in Greece and the EU.',
      keywords:
        'IT consulting, product strategy, technical audit, MVP planning, architecture review, workflow automation, cloud strategy, QA planning, Greece IT consulting',
    },
    el: {
      title: 'IT Consulting & Product Strategy | Impact Tech',
      description:
        'Technical audits, MVP planning, architecture reviews, workflow mapping, cloud/QA planning και performance roadmaps για ομάδες στην Ελλάδα και την ΕΕ.',
      keywords: 'IT consulting, product strategy, technical audit, MVP planning, architecture review, workflow automation, cloud strategy, QA planning, Ελλάδα',
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
