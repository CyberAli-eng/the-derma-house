import type { APIRoute } from 'astro';
import { categories, treatments } from '../data/categories';

const staticPaths = [
  '/',
  '/about/',
  '/treatments/',
  '/hair-transplant/',
  '/food-nutrition/',
  '/case-studies/',
  '/book-consultation/',
  '/contact-us/',
  '/privacy-policy/',
  '/terms-of-service/',
  '/refund-return-policy/',
];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://dermahouseclinic.com/').replace(/\/$/, '');
  const paths = [
    ...staticPaths,
    ...categories.map((c) => `/${c.slug}/`),
    ...treatments.map((t) => `/${t.slug}/`),
  ];
  const unique = [...new Set(paths)];
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    unique.map((p) => `  <url><loc>${base}${p}</loc></url>`).join('\n') +
    '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
