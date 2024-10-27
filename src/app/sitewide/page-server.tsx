import LayoutRoot from "@/components/layout-root";
import PagePlaceholder from "@/components/page-placeholder/page";

export default function Placeholder({ data }: { data: $TSFixMe }) {
	const { footer } = data.sitewide;
	return (
		<LayoutRoot footer={footer} pathname="/sitewide">
			<PagePlaceholder name="Sitewide">
				{/* <pre>
				<code>{JSON.stringify({ data }, null, 2)}</code>
			</pre> */}
			</PagePlaceholder>
		</LayoutRoot>
	);
}
