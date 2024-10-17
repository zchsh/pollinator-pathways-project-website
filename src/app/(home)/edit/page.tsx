// Layout
import LayoutRoot from "@/components/layout-root";
import getFooterData from "@/lib/get-footer-data";
// Page components
import EditableClient from "./editable-client";
// Page query
import { tinaQuery } from "../tina-config";
import Head from "next/head";

// The URL of the page where this content is displayed (not in an edit context)
const CANONICAL_HREF = "/";

/**
 * Render an editable page component with data from the given Tina query.
 * This tends to be pretty much identical for every page.
 *
 * We also add <head> tags to specify:
 * - the "canonical" URL for this page
 */
export default async function Page() {
	const res = await tinaQuery();
	const footer = await getFooterData();
	return (
		<LayoutRoot footer={footer}>
			<Head>
				<link rel="canonical" href={CANONICAL_HREF} />
				<meta name="robots" content="noindex,nofollow" />
			</Head>
			<EditableClient tina={res} />
		</LayoutRoot>
	);
}
