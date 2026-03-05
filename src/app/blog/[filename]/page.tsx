import client from "@/../tina/__generated__/client";
import { fetchBlogList } from "../utils/fetch-blog-list";
import { getIsEditableDeployment } from "@/lib/get-is-editable-deployment";
import PageClient from "./page-client";
import PageServer from "./page-server";
import LayoutRoot from "@/components/layout-root";
import getSitewideData from "@/lib/get-sitewide-data";
// Types
import type { Metadata, ResolvingMetadata } from "next";

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
const BASE_URL = "https://www.pollinatorpathwaysproject.com";

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
  const blogImageUrl = blogImage ? `${BASE_URL}${blogImage}` : null;
  // TODO: figure out width and height for blogImage, if applicable
  const blogImagesOpenGraph: {
    url: string;
    width?: number;
    height?: number;
  }[] = blogImageUrl ? [{ url: blogImageUrl }] : [];
  const openGraphImages = [...previousImages, ...blogImagesOpenGraph];
  return {
    title: blogTitle + METADATA_TITLE_SUFFIX,
    openGraph: {
      title: blogTitle,
      url: `${BASE_URL}/blog/${filename}`,
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
