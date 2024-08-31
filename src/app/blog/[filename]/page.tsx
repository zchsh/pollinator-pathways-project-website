import client from "@/../tina/__generated__/client";
import { fetchBlogList } from "../utils/fetch-blog-list";
// import getIsPreviewEnabled from "@/lib/get-is-preview-enabled";
import PageClient from "./page-client";
// import PageServer from "./page-server";
import LayoutRoot from "@/components/layout-root";
import getFooterData from "@/lib/get-footer-data";

/**
 * TODO: investigate in more detail why this whole "page/-server/-client"
 * business is necessary. Seems related to TinaCMS not fully supporting
 * Next.js's `app` router.
 */
export default async function Page({ params: { filename } }: $TSFixMe) {
	const res = await client.queries.blog({ relativePath: `${filename}.md` });
	const footer = await getFooterData();
	// const isPreviewEnabled = getIsPreviewEnabled();
	return (
		<LayoutRoot footer={footer}>
			<PageClient {...res} />
		</LayoutRoot>
	);
}

export async function generateStaticParams() {
	const blogEntries = await fetchBlogList();
	return blogEntries.map(({ filename }) => ({ params: { filename } }));
}
