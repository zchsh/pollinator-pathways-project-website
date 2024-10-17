// Tina CMS Client
import client from "@/../tina/__generated__/client";
// Layout
import LayoutRoot from "@/components/layout-root";
import getFooterData from "@/lib/get-footer-data";
// Page components
import PageComponent from "./page-component";

/**
 * Fetch data for this specific page. Varies from page to page.
 * Exported for use in `_edit` pages.
 */
export async function tinaQuery() {
	return await client.queries.homepage({ relativePath: "home.json" });
}

/**
 * Render the PageComponent component with data from the given Tina query.
 * Switch between a client component for TinaCMS editing, and a server component
 * for production rendering, where performance is more important.
 */
export default async function Page() {
	const res = await tinaQuery();
	const footer = await getFooterData();
	return (
		<LayoutRoot footer={footer}>
			<PageComponent data={res.data} />
		</LayoutRoot>
	);
}
