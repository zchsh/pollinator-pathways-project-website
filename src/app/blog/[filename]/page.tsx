import client from "@/../tina/__generated__/client";

import PageClient from "./page-client";
import PageServer from "./page-server";
import LayoutRoot from "@/components/layout-root";
import getSitewideData from "@/lib/get-sitewide-data";
// Types
import type { Metadata, ResolvingMetadata } from "next";
// Server functions
import path from "path";
import sharp from "sharp";
import { fetchBlogList } from "../utils/fetch-blog-list";
import { getIsEditableDeployment } from "@/lib/get-is-editable-deployment";

/**
 * TODO: investigate in more detail why this whole "page/-server/-client"
 * business is necessary. Seems related to TinaCMS not fully supporting
 * Next.js's `app` router.
 */
export default async function Page({ params: { filename } }: $TSFixMe) {
  const res = await client.queries.blog({ relativePath: `${filename}.md` });
  const { footer, nav } = await getSitewideData();
  const isPreviewEnabled = getIsEditableDeployment();

  return (
    <LayoutRoot
      footer={footer}
      navBarItems={nav.items}
      pathname={`/blog/${filename}`}
    >
      {isPreviewEnabled ? (
        <PageClient
          query={res.query}
          variables={res.variables}
          data={res.data}
        />
      ) : (
        <PageServer data={res.data} />
      )}
    </LayoutRoot>
  );
}

const METADATA_TITLE_SUFFIX = " | Pollinator Pathways Project";
const BASE_URL_SHORT =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || "localhost:3000";
const BASE_URL = `https://www.${BASE_URL_SHORT}`;

export async function generateMetadata(
  { params }: { params: Promise<{ filename: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { filename } = await params;
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  // grab the blog data
  const res = await client.queries.blog({ relativePath: `${filename}.md` });
  const blogTitle = res.data.blog.title;
  const blogImage = res.data.blog.coverImage;
  const blogImagesOpenGraph: {
    url: string;
    width?: number;
    height?: number;
  }[] = [];
  if (blogImage) {
    const blogImageFilePath = path.join(process.cwd(), "public", blogImage);
    // Get the width and height of the image using sharp.js
    const { width, height } = await sharp(blogImageFilePath).metadata();
    // TODO: figure out width and height for blogImage, if applicable
    const blogImageUrl = `${BASE_URL}${blogImage}`;
    blogImagesOpenGraph.push({ url: blogImageUrl, width, height });
  }
  const openGraphImages = [...previousImages, ...blogImagesOpenGraph];
  const blogUrlAbsolute = `${BASE_URL}/blog/${filename}`;
  console.log({ blogUrlAbsolute });
  return {
    title: blogTitle + METADATA_TITLE_SUFFIX,
    openGraph: {
      title: blogTitle,
      url: blogUrlAbsolute,
      siteName: "Pollinator Pathways Project",
      images: openGraphImages,
      locale: "en_CA",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const blogEntries = await fetchBlogList();
  if (!Array.isArray(blogEntries) || blogEntries.length === 0) {
    return [{ filename: "not-found" }];
  }
  const staticParams = blogEntries.map(({ filename }) => ({ filename }));
  return staticParams;
}
