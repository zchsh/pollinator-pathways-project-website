import LayoutRoot from "@/components/layout-root";
import PagePlaceholder from "@/components/page-placeholder/page";
import getFooterData from "@/lib/get-footer-data";

export default async function Placeholder() {
	const footer = await getFooterData();
	return (
		<LayoutRoot footer={footer}>
			<PagePlaceholder name="FAQ" />
		</LayoutRoot>
	);
}
