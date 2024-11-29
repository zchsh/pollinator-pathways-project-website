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
	/**
	 * TODO: avoid publishing this page in production, unless editing...
	 * Could probably hook in to `isEditable` to achieve this.
	 * Or, could maybe put `no-index` stuff on this page instead?
	 */
	const res = await client.queries.sitewide({ relativePath: "sitewide.json" });
	const isEditable = getIsEditableDeployment();
	// Note that `LayoutRoot` is used _within_ the component.
	return (
		<>
			{isEditable ? (
				<PageClient tina={res} />
			) : (
				<PageServer data={res.data} />
			)}
		</>
	);
}
