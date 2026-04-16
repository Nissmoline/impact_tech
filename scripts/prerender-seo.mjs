import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_TWITTER_IMAGE,
  SITE_LAST_MODIFIED,
  SITE_NAME,
  SITE_URL,
  buildLocalizedRoutes,
  htmlEscape,
} from './seo-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distRoot = path.join(projectRoot, 'dist');
const rootIndexPath = path.join(distRoot, 'index.html');

const replaceOrThrow = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) {
    throw new Error(`Could not replace ${label} in built index.html`);
  }
  return html.replace(pattern, replacement);
};

const metaName = (name, content) => `<meta name="${name}" content="${htmlEscape(content)}" />`;
const metaProperty = (property, content) => `<meta property="${property}" content="${htmlEscape(content)}" />`;
const linkTag = (rel, attrs) =>
  `<link rel="${rel}" ${Object.entries(attrs)
    .map(([key, value]) => `${key}="${htmlEscape(value)}"`)
    .join(' ')} />`;

const applyRouteSeo = (baseHtml, route) => {
  const canonicalUrl = `${SITE_URL}${route.canonicalPath}`;
  const ogLocale = route.locale === 'el' ? 'el_GR' : 'en_GB';
  const ogAlternateLocale = route.locale === 'el' ? 'en_GB' : 'el_GR';
  const alternateBlock = `<!-- Alternate Languages (hreflang) -->
    ${linkTag('alternate', { hreflang: 'en', href: route.alternates.en })}
    ${linkTag('alternate', { hreflang: 'el', href: route.alternates.el })}
    ${linkTag('alternate', { hreflang: 'x-default', href: route.alternates['x-default'] })}`;

  let html = baseHtml;
  html = replaceOrThrow(html, /<html lang="[^"]*"/, `<html lang="${route.locale}"`, 'html language');
  html = replaceOrThrow(html, /<title>[\s\S]*?<\/title>/, `<title>${htmlEscape(route.seo.title)}</title>`, 'title');
  html = replaceOrThrow(html, /<meta name="title" content="[^"]*" \/>/, metaName('title', route.seo.title), 'meta title');
  html = replaceOrThrow(
    html,
    /<meta name="description" content="[^"]*" \/>/,
    metaName('description', route.seo.description),
    'meta description',
  );
  html = replaceOrThrow(html, /<meta name="keywords" content="[^"]*" \/>/, metaName('keywords', route.seo.keywords), 'meta keywords');
  html = replaceOrThrow(html, /<link rel="canonical" href="[^"]*" \/>/, linkTag('canonical', { href: canonicalUrl }), 'canonical');
  html = replaceOrThrow(
    html,
    /<!-- Alternate Languages \(hreflang\) -->[\s\S]*?<!-- Favicon -->/,
    `${alternateBlock}\n\n    <!-- Favicon -->`,
    'alternate links',
  );
  html = replaceOrThrow(html, /<meta property="og:url" content="[^"]*" \/>/, metaProperty('og:url', canonicalUrl), 'og url');
  html = replaceOrThrow(html, /<meta property="og:title" content="[^"]*" \/>/, metaProperty('og:title', route.seo.title), 'og title');
  html = replaceOrThrow(
    html,
    /<meta property="og:description" content="[^"]*" \/>/,
    metaProperty('og:description', route.seo.description),
    'og description',
  );
  html = replaceOrThrow(html, /<meta property="og:image" content="[^"]*" \/>/, metaProperty('og:image', DEFAULT_OG_IMAGE), 'og image');
  html = replaceOrThrow(html, /<meta property="og:locale" content="[^"]*" \/>/, metaProperty('og:locale', ogLocale), 'og locale');
  html = replaceOrThrow(
    html,
    /<meta property="og:locale:alternate" content="[^"]*" \/>/,
    metaProperty('og:locale:alternate', ogAlternateLocale),
    'og alternate locale',
  );
  html = replaceOrThrow(html, /<meta name="twitter:url" content="[^"]*" \/>/, metaName('twitter:url', canonicalUrl), 'twitter url');
  html = replaceOrThrow(html, /<meta name="twitter:title" content="[^"]*" \/>/, metaName('twitter:title', route.seo.title), 'twitter title');
  html = replaceOrThrow(
    html,
    /<meta name="twitter:description" content="[^"]*" \/>/,
    metaName('twitter:description', route.seo.description),
    'twitter description',
  );
  html = replaceOrThrow(html, /<meta name="twitter:image" content="[^"]*" \/>/, metaName('twitter:image', DEFAULT_TWITTER_IMAGE), 'twitter image');

  if (html.includes('property="og:image:secure_url"')) {
    html = replaceOrThrow(
      html,
      /<meta property="og:image:secure_url" content="[^"]*" \/>/,
      metaProperty('og:image:secure_url', DEFAULT_OG_IMAGE),
      'og secure image',
    );
  }

  if (html.includes('property="og:image:alt"')) {
    html = replaceOrThrow(html, /<meta property="og:image:alt" content="[^"]*" \/>/, metaProperty('og:image:alt', route.seo.title), 'og image alt');
  }

  if (html.includes('name="twitter:image:alt"')) {
    html = replaceOrThrow(html, /<meta name="twitter:image:alt" content="[^"]*" \/>/, metaName('twitter:image:alt', route.seo.title), 'twitter image alt');
  }

  if (html.includes('property="og:updated_time"')) {
    html = replaceOrThrow(html, /<meta property="og:updated_time" content="[^"]*" \/>/, metaProperty('og:updated_time', SITE_LAST_MODIFIED), 'og updated time');
  }

  if (html.includes('name="application-name"')) {
    html = replaceOrThrow(html, /<meta name="application-name" content="[^"]*" \/>/, metaName('application-name', SITE_NAME), 'application name');
  }

  return html;
};

const outputPathForRoute = (routePath) => {
  if (routePath === '/') return rootIndexPath;
  return path.join(distRoot, routePath.replace(/^\//, ''), 'index.html');
};

const baseHtml = await readFile(rootIndexPath, 'utf8');
const routes = buildLocalizedRoutes();

for (const route of routes) {
  const outputPath = outputPathForRoute(route.path);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, applyRouteSeo(baseHtml, route), 'utf8');
}

console.log(`[seo] Wrote route-specific HTML metadata for ${routes.length} routes.`);
