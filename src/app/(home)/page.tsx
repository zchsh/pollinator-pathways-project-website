// Layout
import LayoutRoot from "@/components/layout-root";
import getFooterData from "@/lib/get-footer-data";
// Page components
import PageComponent from "./page-component";
// Page query
import { tinaQuery } from "./tina-config";

/**
 * Render the PageComponent component with data from the given Tina query.
 * This tends to be pretty much identical for every page.
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
