import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import {
  DEFAULT_IMAGE,
  SITE_URL,
  canonicalUrl,
  routes,
  structuredData,
} from "../src/seo/siteMeta.js";

const root = process.cwd();

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const headFor = (route) => {
  const url = canonicalUrl(route.path);
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  // "<" is escaped so page text can never close the script element early.
  const jsonLd = JSON.stringify(structuredData(route)).replace(/</g, "\\u003c");
  return [
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="NaijaGo" />`,
    `<meta property="og:locale" content="en_NG" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${DEFAULT_IMAGE}" />`,
    `<meta property="og:image:alt" content="NaijaGo logo" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${DEFAULT_IMAGE}" />`,
    `<link rel="apple-touch-icon" href="/naijaLogo.jpg" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ]
    .map((line) => `    ${line}`)
    .join("\n");
};

const renderRoute = (baseHtml, route) => {
  const html = baseHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`)
    .replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${escapeHtml(route.description)}" />`,
    )
    .replace("</head>", `${headFor(route)}\n  </head>`);
  if (!html.includes(`<title>${escapeHtml(route.title)}</title>`)) {
    throw new Error(`Could not set the title for ${route.path}`);
  }
  return html;
};

const sitemapXml = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(
      (route) =>
        `  <url>\n    <loc>${canonicalUrl(route.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${route.priority}</priority>\n  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};

const robotsTxt = () =>
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
const indexPath = path.join(root, "index.html");
const templatePath = path.join(root, "index.template.html");

const restoreIndex = async (backup) => {
  if (backup === null) {
    if (existsSync(indexPath)) {
      await fs.unlink(indexPath);
    }
    return;
  }

  await fs.writeFile(indexPath, backup, "utf8");
};

const run = async () => {
  const template = await fs.readFile(templatePath, "utf8");
  const originalIndex = existsSync(indexPath)
    ? await fs.readFile(indexPath, "utf8")
    : null;

  try {
    await fs.writeFile(indexPath, template, "utf8");
    execSync("npx vite build", { stdio: "inherit", cwd: root });

    // GitHub Pages has no SPA history fallback. Write a physical page for
    // every public route so direct requests return HTTP 200, each with its
    // own title, description, canonical URL and structured data.
    const distPath = path.join(root, "dist");
    const distIndexPath = path.join(distPath, "index.html");
    const baseHtml = (await fs.readFile(distIndexPath, "utf8")).replace(
      /\r\n/g,
      "\n",
    );
    for (const route of routes) {
      const routeDir = path.join(distPath, route.path);
      await fs.mkdir(routeDir, { recursive: true });
      await fs.writeFile(
        path.join(routeDir, "index.html"),
        renderRoute(baseHtml, route),
        "utf8",
      );
    }
    await fs.writeFile(path.join(distPath, "sitemap.xml"), sitemapXml(), "utf8");
    await fs.writeFile(path.join(distPath, "robots.txt"), robotsTxt(), "utf8");
  } finally {
    await restoreIndex(originalIndex);
  }
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
