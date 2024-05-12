import client from "@/../tina/__generated__/client";
import { fetchBlogList } from "../utils/fetch-blog-list";
import { draftMode } from "next/headers";
import PageClient from "./page-client";
import PageServer from "./page-server";

/**
 * TODO: investigate in more detail why this whole "page/-server/-client"
 * business is necessary. Seems related to TinaCMS not fully supporting
 * Next.js's `app` router.
 */
export default async function Page({ params: { filename } }: $TSFixMe) {
	const res = await client.queries.blog({ relativePath: `${filename}.md` });
	const { isEnabled } = draftMode();
	return <>{isEnabled ? <PageClient {...res} /> : <PageServer {...res} />}</>;
}

export async function generateStaticParams() {
	const blogEntries = await fetchBlogList();
	return blogEntries.map(({ filename }) => ({ params: { filename } }));
}
