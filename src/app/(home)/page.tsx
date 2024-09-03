import client from "@/../tina/__generated__/client";
import EditablePage from "./editable-page";
import PageServer from "./page-server";
import LayoutRoot from "@/components/layout-root";
import getFooterData from "@/lib/get-footer-data";

/**
 * TODO: investigate in more detail why this whole "page/-server/-client"
 * business is necessary. Seems related to TinaCMS not fully supporting
 * Next.js's `app` router.
 *
 * TODO: could this be abstracted into a shared component?
 * Seems to be necessary to use TinaCMS "visual editing" with `app` router
 */
export default async function Page() {
	const { data } = await client.queries.homepage({ relativePath: "home.json" });
	const footer = await getFooterData();
	return (
		<LayoutRoot footer={footer}>
			<EditablePage data={data} PageComponent={PageServer} />
		</LayoutRoot>
	);
}
