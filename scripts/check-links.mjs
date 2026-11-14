// Crawls the built site in dist/ and fails if any internal link, image or
// redirect target points at a page that does not exist. Run after `npm run build`.
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)])),
  );
  return files.flat();
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

function targetFile(href) {
  const clean = decodeURIComponent(href.split('#')[0].split('?')[0]);
  if (clean === '' || clean === '/') return join(DIST, 'index.html');
  if (/\.[a-z0-9]+$/i.test(clean)) return join(DIST, clean);
  return join(DIST, clean, 'index.html');
}

const files = (await walk(DIST)).filter((f) => f.endsWith('.html'));
const broken = [];
const missingSlash = [];
let checked = 0;

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const page = '/' + relative(DIST, file).split(sep).join('/').replace(/index\.html$/, '');
  const refs = [...html.matchAll(/(?:href|src)="(\/[^"]*)"/g)].map((m) => m[1]);
  const refresh = html.match(/http-equiv="refresh" content="0;url=([^"]+)"/);
  if (refresh) refs.push(refresh[1]);
  for (const ref of refs) {
    if (ref.startsWith('//') || ref.startsWith('/_astro/')) continue;
    checked += 1;
    if (!(await exists(targetFile(ref)))) broken.push(`${page} -> ${ref}`);
    const path = ref.split('#')[0].split('?')[0];
    if (path && !path.endsWith('/') && !/\.[a-z0-9]+$/i.test(path)) missingSlash.push(`${page} -> ${ref}`);
  }
}

console.log(`Checked ${checked} internal references across ${files.length} pages.`);
if (missingSlash.length) {
  console.log(`\nLinks without trailing slash (${missingSlash.length}):`);
  [...new Set(missingSlash)].forEach((l) => console.log('  ' + l));
}
if (broken.length) {
  console.error(`\nBroken internal links (${broken.length}):`);
  [...new Set(broken)].forEach((l) => console.error('  ' + l));
  process.exit(1);
}
console.log('No broken internal links.');
