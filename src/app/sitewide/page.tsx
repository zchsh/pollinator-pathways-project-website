import client from "@/../tina/__generated__/client";
import { getIsEditableDeployment } from "@/lib/get-is-editable-deployment";
import PageClient from "./page-client";
import PageServer from "./page-server";

/**
 * TODO: investigate in more detail why this whole "page/-server/-client"
 * business is necessary. Seems related to TinaCMS not fully supporting
 * Next.js's `app` router.
 */
export default async function Page() {
	// TODO: avoid publishing this page in production, unless logged in...
	const res = await client.queries.sitewide({ relativePath: "sitewide.json" });
	const isPreviewEnabled = getIsEditableDeployment();
	return (
		<>{isPreviewEnabled ? <PageClient {...res} /> : <PageServer {...res} />}</>
	);
}
