import client from "@/../tina/__generated__/client";
import getIsPreviewEnabled from "@/lib/get-is-preview-enabled";
import PageClient from "./page-client";
import PageServer from "./page-server";

/**
 * TODO: investigate in more detail why this whole "page/-server/-client"
 * business is necessary. Seems related to TinaCMS not fully supporting
 * Next.js's `app` router.
 *
 * TODO: could this be abstracted into a shared component?
 * Seems to be necessary to use TinaCMS "visual editing" with `app` router
 */
export default async function Page() {
	const res = await client.queries.homepage({ relativePath: "home.json" });
	const isPreviewEnabled = getIsPreviewEnabled();
	return (
		<>{isPreviewEnabled ? <PageClient {...res} /> : <PageServer {...res} />}</>
	);
}
