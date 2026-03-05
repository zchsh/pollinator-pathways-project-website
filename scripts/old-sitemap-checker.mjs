import fs from "fs";
import path from "path";
import { gatherSitemapUrls } from "./gather-sitemap-urls.mjs";

const PATH_CWD = process.cwd();
const PATH_SITEMAPS = path.join(PATH_CWD, "old-sitemaps");

const SITEMAP_PATHS_OLD = [
  path.join(PATH_SITEMAPS, "blog-categories-sitemap.xml"),
  path.join(PATH_SITEMAPS, "pages-sitemap.xml"),
  path.join(PATH_SITEMAPS, "blog-posts-sitemap.xml"),
];

const SITEMAP_PATHS_NEW = [
  path.join(PATH_CWD, "public", "sitemap-blog-posts.xml"),
  path.join(PATH_CWD, "public", "sitemap-pages.xml"),
  path.join(PATH_CWD, "public", "sitemap-projects.xml"),
];

async function gatherSitemapUrls_OLD() {
  const urls = [];
  for (const sitemapPath of SITEMAP_PATHS_OLD) {
    const urlsForSitemap = await gatherSitemapUrls(sitemapPath);
    urls.push(...urlsForSitemap);
  }
  return urls;
}

async function gatherSitemapUrls_NEW() {
  const urls = [];
  for (const sitemapPath of SITEMAP_PATHS_NEW) {
    const urlsForSitemap = await gatherSitemapUrls(sitemapPath);
    urls.push(...urlsForSitemap);
  }
  return urls;
}

main();

async function main() {
  // const urls = await gatherSitemapUrls_OLD();
  const urls = await gatherSitemapUrls_NEW();
  // Check that all URLs are returning appropriate status codes
  const urlResults = [];
  for (const url of urls) {
    if (!("loc" in url) || typeof url.loc !== "string") {
      console.log("Non-string URL...");
      console.log({ loc: url.loc });
      continue;
    }
    // Modify the URL (for now, testing script before actually moving site)
    const urlModified = url.loc.replace(
      "https://www.pollinatorpathwaysproject.com",
      "http://localhost:3000"
    );
    // Make a request to the URL, and retrieve the status code
    const response = await fetch(urlModified);
    const statusCode = response.status;
    if (statusCode !== 200) {
      console.log(`${statusCode} for ${urlModified}`);
    }
    urlResults.push({ url: urlModified, statusCode });
  }
  // Write the URL results to a file
  const outFile = path.join(PATH_SITEMAPS, "url-results.json");
  fs.writeFileSync(outFile, JSON.stringify(urlResults, null, 2), "utf8");
  console.log(`✅ Wrote URL results to ${outFile}`);
}
