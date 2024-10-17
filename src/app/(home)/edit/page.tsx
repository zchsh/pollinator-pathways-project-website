// Layout
import LayoutRoot from "@/components/layout-root";
import getFooterData from "@/lib/get-footer-data";
// Page components
import EditableClient from "./editable-client";
import { tinaQuery } from "../page";

/**
 * Render the PageComponent component with data from the given Tina query.
 * This tends to be pretty much identical for every page.
 */
export default async function Page() {
	const res = await tinaQuery();
	const footer = await getFooterData();
	return (
		<LayoutRoot footer={footer}>
			<EditableClient tina={res} />
		</LayoutRoot>
	);
}
