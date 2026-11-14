// Serves the site from a sub-path (GitHub Pages project sites live at
// https://<user>.github.io/<repo>/). Set BASE_PATH=/gowigro-clinic-template at build time and
// every root-relative URL in the built HTML is prefixed. Without BASE_PATH nothing changes,
// so the same source deploys to a root domain (dermahouseclinic.com) as before.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Normalise "/repo", "repo/" or "/repo/" to "/repo"; empty when unset or "/". */
export function normaliseBase(raw) {
  const trimmed = (raw ?? '').trim().replace(/^\/+|\/+$/g, '');
  if (!trimmed) return '';
  if (!/^[A-Za-z0-9._-]+(\/[A-Za-z0-9._-]+)*$/.test(trimmed)) {
    throw new Error(`BASE_PATH "${raw}" may only contain letters, digits, ".", "_", "-" and "/"`);
  }
  return `/${trimmed}`;
}

/** Prefix root-relative URLs (not protocol-relative "//") in attributes and meta refresh. */
export function rewriteHtml(html, base) {
  if (!base) return html;
  const prefix = (path) => (path === base || path.startsWith(`${base}/`) ? path : `${base}${path}`);
  return html
    .replace(/(\s(?:href|src|action|poster|data-thanks)=")(\/(?!\/)[^"]*)"/g, (_, attr, path) => `${attr}${prefix(path)}"`)
    .replace(/(content="0;url=)(\/(?!\/)[^"]*)"/g, (_, head, path) => `${head}${prefix(path)}"`);
}

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((e) => (e.isDirectory() ? htmlFiles(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : [])),
  );
  return nested.flat();
}

/** @returns {import('astro').AstroIntegration} */
export function basePath() {
  return {
    name: 'base-path',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const base = normaliseBase(process.env.BASE_PATH);
        if (!base) return;
        const files = await htmlFiles(fileURLToPath(dir));
        await Promise.all(
          files.map(async (file) => {
            const html = await readFile(file, 'utf8');
            await writeFile(file, rewriteHtml(html, base));
          }),
        );
        logger.info(`prefixed root-relative URLs with ${base} in ${files.length} pages`);
      },
    },
  };
}
