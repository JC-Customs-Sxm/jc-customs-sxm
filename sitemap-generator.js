import { create } from "xmlbuilder2";
import fs from "fs";

const baseUrl = "https://jccustomssxm.com";

// Define your routes and languages
const routes = [
  { path: "/en/", lang: "en" },
  { path: "/en/home", lang: "en" },
  { path: "/en/blog", lang: "en" },
  { path: "/en/contact", lang: "en" },
  { path: "/fr/", lang: "fr" },
  { path: "/fr/accueil", lang: "fr" },
  { path: "/fr/blog", lang: "fr" },
  { path: "/fr/contactez-nous", lang: "fr" },
  // Add all your routes here
];

async function generateSitemap(lang) {
  const langRoutes = routes.filter((route) => route.lang === lang);

  const doc = create({ version: "1.0", encoding: "UTF-8" }).ele("urlset", {
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
  });

  langRoutes.forEach((route) => {
    const fullUrl = `${baseUrl}${route.path}`;
    doc.ele("url").ele("loc").txt(fullUrl);
  });

  const xml = doc.end({ prettyPrint: true });

  await fs.promises.writeFile(`dist/sitemap-${lang}.xml`, xml);
}

async function runSitemapGenerators() {
  await generateSitemap("en");
  await generateSitemap("fr");
  console.log("Sitemaps generated!");
}

runSitemapGenerators();
