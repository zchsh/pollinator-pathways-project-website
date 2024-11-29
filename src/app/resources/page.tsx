import LayoutRoot from "@/components/layout-root";
import PagePlaceholder from "@/components/page-placeholder/page";
import getSitewideData from "@/lib/get-sitewide-data";

export default async function Placeholder() {
	const { footer } = await getSitewideData();
	return (
		<LayoutRoot footer={footer} pathname="/resources">
			<PagePlaceholder name="Resources" />
		</LayoutRoot>
	);
}
