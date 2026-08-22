import fs from 'node:fs';
import path from 'node:path';

const root = '/home/ubuntu/alamyasas-web/html-site';
const files = fs.readdirSync(root).filter(file => file.endsWith('.html')).sort();
const issues = [];
let localPages = 0;
let schemaPages = 0;
const titles = new Map();
const descriptions = new Map();
const canonicals = new Map();

function value(html, name) {
  const match = html.match(new RegExp(`<meta[^>]+name="${name}"[^>]+content="([^"]+)"`, 'i'));
  return match?.[1] || '';
}

for (const file of files) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const isLocation = file !== 'index.html' && !['about.html','services.html','team.html','pricing.html','faq.html','blog.html','contact.html','areas.html','404.html'].includes(file);
  if (isLocation) localPages += 1;
  const title = (html.match(/<title>([^<]+)<\/title>/i) || [,''])[1].trim();
  const description = value(html, 'description');
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/i) || [,''])[1];
  if (file !== '404.html') {
    for (const [label, record, text] of [['title', titles, title], ['description', descriptions, description], ['canonical', canonicals, canonical]]) {
      if (!text) continue;
      const first = record.get(text);
      if (first) issues.push(`${file}: duplicate ${label} also used by ${first}`);
      else record.set(text, file);
    }
  }
  if (/موفيون|Movion|#ee1d38|west-somид/i.test(html)) issues.push(`${file}: legacy brand/color/slug reference`);
  if (!/<html lang="ar" dir="rtl">/.test(html)) issues.push(`${file}: missing Arabic RTL document root`);
  if (file !== '404.html') {
    if (!/<meta name="description" content="[^"]{70,}"/.test(html)) issues.push(`${file}: missing or short description`);
    if (!/<link rel="canonical" href="https:\/\/alamyasas\.vercel\.app\//.test(html)) issues.push(`${file}: missing canonical`);
    if (!/<meta property="og:image" content="https:\/\/alamyasas\.vercel\.app\/assets\//.test(html)) issues.push(`${file}: missing Open Graph image`);
  }
  const jsonBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => match[1]);
  if (!jsonBlocks.length && file !== '404.html') issues.push(`${file}: missing JSON-LD`);
  else {
    schemaPages += 1;
    for (const block of jsonBlocks) {
      try { JSON.parse(block); } catch { issues.push(`${file}: invalid JSON-LD`); }
    }
  }
  if (isLocation && !/BreadcrumbList/.test(html)) issues.push(`${file}: missing breadcrumb schema`);
  if (isLocation && !/FAQPage/.test(html)) issues.push(`${file}: missing FAQ schema`);
  if (isLocation && !/location-breadcrumbs/.test(html)) issues.push(`${file}: missing visible breadcrumbs`);

  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(match => match[1]);
  for (const ref of refs) {
    if (/^(?:https?:|mailto:|tel:|#|data:)/.test(ref)) continue;
    const target = path.resolve(root, ref.split(/[?#]/)[0]);
    if (!fs.existsSync(target)) issues.push(`${file}: missing local reference ${ref}`);
  }
}

for (const required of ['robots.txt','sitemap.xml','styles.css','script.js','assets/alalami-logo.png']) {
  if (!fs.existsSync(path.join(root, required))) issues.push(`missing required output ${required}`);
}

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = (sitemap.match(/<loc>/g) || []).length;
if (sitemapUrls !== files.length - 1) issues.push(`sitemap URL count ${sitemapUrls} does not match indexable HTML ${files.length - 1}`);

console.log(JSON.stringify({htmlPages:files.length,locationPages:localPages,schemaPages,sitemapUrls,uniqueTitles:titles.size,uniqueDescriptions:descriptions.size,uniqueCanonicals:canonicals.size,issues}, null, 2));
if (issues.length) process.exit(1);
