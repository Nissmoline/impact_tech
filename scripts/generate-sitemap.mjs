import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  DEFAULT_OG_IMAGE,
  SITE_LAST_MODIFIED,
  SITE_NAME,
  SITE_URL,
  BASE_ROUTES,
  xmlEscape,
} from './seo-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');

const localizedPath = (basePath, locale) => {
  if (locale === 'en') return basePath;
  if (basePath === '/') return '/el';
  return `/el${basePath}`;
};

const buildUrlEntry = (route, locale) => {
  const loc = `${SITE_URL}${localizedPath(route.path, locale)}`;
  const alternates = {
    en: `${SITE_URL}${localizedPath(route.path, 'en')}`,
    el: `${SITE_URL}${localizedPath(route.path, 'el')}`,
    'x-default': `${SITE_URL}${localizedPath(route.path, 'en')}`,
  };

  return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${xmlEscape(alternates.en)}" />
    <xhtml:link rel="alternate" hreflang="el" href="${xmlEscape(alternates.el)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(alternates['x-default'])}" />
    <image:image>
      <image:loc>${xmlEscape(DEFAULT_OG_IMAGE)}</image:loc>
      <image:title>${xmlEscape(route[locale].title)}</image:title>
      <image:caption>${xmlEscape(SITE_NAME)} - ${xmlEscape(route[locale].description)}</image:caption>
    </image:image>
    <lastmod>${SITE_LAST_MODIFIED}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
};

const entries = BASE_ROUTES.flatMap((route) => [
  buildUrlEntry(route, 'en'),
  buildUrlEntry(route, 'el'),
]).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries}
</urlset>
`;

await writeFile(sitemapPath, sitemap, 'utf8');
console.log(`[seo] Wrote ${path.relative(projectRoot, sitemapPath)} with ${BASE_ROUTES.length * 2} URLs.`);
