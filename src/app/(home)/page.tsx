// Tina CMS Client
import client from "@/../tina/__generated__/client";
// Utilities
import getIsPreviewEnabled from "@/lib/get-is-preview-enabled";
// Layout
import LayoutRoot from "@/components/layout-root";
import getFooterData from "@/lib/get-footer-data";
// Page components
import EditableClient from "./editable-client";
import PageComponent from "./page-component";

/**
 * This is the only part of the page we expect to be significantly different
 * from page to page. The rest of this file is a pattern that enables TinaCMS
 * hooks in client components in some environments, and server components in
 * others, that I wish could be abstracted, but I can't seem to get right.
 */
async function tinaQuery() {
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
	const isEditable = getIsPreviewEnabled();
	return (
		<LayoutRoot footer={footer}>
			{isEditable ? (
				<EditableClient tina={res} />
			) : (
				<PageComponent data={res.data} />
			)}
		</LayoutRoot>
	);
}
