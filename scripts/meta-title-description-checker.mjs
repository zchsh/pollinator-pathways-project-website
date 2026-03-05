import fs from "fs";
import path from "path";
import { gatherSitemapUrls } from "./gather-sitemap-urls.mjs";

const PATH_CWD = process.cwd();

const SITEMAP_PATHS_NEW = [
  path.join(PATH_CWD, "public", "sitemap-blog-posts.xml"),
  path.join(PATH_CWD, "public", "sitemap-pages.xml"),
  path.join(PATH_CWD, "public", "sitemap-projects.xml"),
];

main(SITEMAP_PATHS_NEW);

async function main(sitemapPaths) {
  const urls = await gatherSitemapUrlsFromPaths(sitemapPaths);
  // Retrieve HTML page content for each URL
  const results = [];
  for (const url of urls) {
    // Modify the URL (for now, testing script before actually moving site)
    const urlRelative = url.loc.replace(
      "https://www.pollinatorpathwaysproject.com",
      ""
    );
    const urlModified = `http://localhost:3000${urlRelative}`;
    // Grab the HTML content of the modified URL
    const response = await fetch(urlModified);
    const responseText = await response.text();
    // Look for a <title> tag, all pages should have these
    let titleString = null;
    const titleMatch = responseText.match(/<title>([^<]+)<\/title>/);
    if (Array.isArray(titleMatch) && titleMatch.length > 1) {
      titleString = titleMatch[1];
    }
    // Look for a <meta name="description" /> tag
    let descriptionString = null;
    const descriptionMatch = responseText.match(
      /<meta name="description" content="([^"]+)"/
    );
    if (Array.isArray(descriptionMatch) && descriptionMatch.length > 1) {
      descriptionString = descriptionMatch[1];
    }
    console.log(`💼 Fetched content from "${urlRelative}"...`);
    results.push({
      url: urlModified,
      title: titleString,
      description: descriptionString,
    });
  }
  //
  const invalidPages = results.filter((e) => !e.title || !e.description);
  if (invalidPages.length) {
    console.log({ invalidPages });
    console.log(
      `💥 Found ${invalidPages.length} pages that have a missing title, or description. Please review these pages above, if applicable.`
    );
  } else {
    console.log(
      `✅ All pages seem to have valid <title> and <meta name="description" /> tags.`
    );
  }
}

/**
 * Given an array of paths to sitemap XML files,
 * Return an array of URLs contained in those sitemaps.
 *
 * @param {string[]} sitemapPaths
 * @returns
 */
async function gatherSitemapUrlsFromPaths(sitemapPaths) {
  const urls = [];
  for (const sitemapPath of sitemapPaths) {
    const urlsForSitemap = await gatherSitemapUrls(sitemapPath);
    urls.push(...urlsForSitemap);
  }
  return urls;
}
