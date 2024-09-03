import client from "@/../tina/__generated__/client";
import TinaEditablePage from "../../components/tina-editable-page";
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
	const res = await client.queries.homepage({ relativePath: "home.json" });
	const footer = await getFooterData();
	return (
		<LayoutRoot footer={footer}>
			<TinaEditablePage
				tinaQueryResult={res}
				renderPage={(data: $TSFixMe) => {
					return <PageServer data={data} />;
				}}
			/>
		</LayoutRoot>
	);
}
