import PageServer from "./page-server";
import LayoutRoot from "@/components/layout-root";
import getFooterData from "@/lib/get-footer-data";

export default async function Page() {
	const footer = await getFooterData();

	return (
		<LayoutRoot footer={footer}>
			<PageServer />
		</LayoutRoot>
	);
}
