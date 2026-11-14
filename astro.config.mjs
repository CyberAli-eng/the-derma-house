// @ts-check
import { writeFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';

// Old WordPress URLs that were duplicates, typos, thin landing pages or test pages.
// Each one now points to its single canonical page.
const redirects = {
  '/derma-house/': '/about/',
  '/book-now/': '/book-consultation/',
  '/skin-hair-care-session/': '/book-consultation/',
  '/canada-appointment/': '/book-consultation/',
  '/canada-appointment-2/': '/book-consultation/',
  '/canada-appointment-3/': '/book-consultation/',
  '/kaithal-appointment/': '/book-consultation/',
  '/derma-house-online-consultation-usa/': '/book-consultation/',
  '/thank-you-consultation/': '/thank-you/',
  '/privacy-policy-2/': '/privacy-policy/',
  '/template-service-page/': '/',
  '/blogs/': '/treatments/',
  '/xanthelasma-excisiom/': '/xanthelasma-excision/',
  '/skin-tag/': '/skin-tag-removal/',
  '/micro-blading-powder-brows/': '/microblading-powder-brows/',
  '/hyperhydrosis/': '/hyperhidrosis/',
  '/prophilo/': '/profhilo/',
  '/non-surgical-face-lift-2/': '/non-surgical-face-lift/',
  '/non-surgical-eyebrow-lift-2/': '/non-surgical-eyebrow-lift/',
  '/laser-for-pigmentation-tattoo/': '/laser-for-pigmentation-tattoo-removal-birth-mark/',
  '/hair-transplant/types-of-hair-transplant/': '/hair-transplant/',
  '/2025/03/28/the-truth-about-laser-hair-removal-does-it-really-work/': '/laser-hair-reduction/',
  '/2025/03/02/the-ultimate-guide-to-healthy-and-glowing-skin/': '/skin-treatments/',
};

// Astro emits meta-refresh pages for static redirects. This also writes a host-level
// _redirects file (Netlify / Cloudflare Pages format) so the same map serves real 301s.
/** @type {import('astro').AstroIntegration} */
const hostRedirects = {
  name: 'host-redirects',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const lines = Object.entries(redirects).map(([from, to]) => `${from} ${to} 301`);
      await writeFile(new URL('_redirects', dir), `${lines.join('\n')}\n`);
    },
  },
};

export default defineConfig({
  site: 'https://dermahouseclinic.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  redirects,
  integrations: [hostRedirects],
});
