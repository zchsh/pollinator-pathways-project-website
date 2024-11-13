// Layout
import getFooterData from "@/lib/get-footer-data";
import LayoutRoot from "@/components/layout-root";
// Utils
import { fetchPhotosList } from "./utils/fetch-photos-list";

export default async function Page() {
	const photoEntries = await fetchPhotosList();

	const footer = await getFooterData();
	return (
		<LayoutRoot footer={footer} pathname="/photos">
			<pre>
				<code>{JSON.stringify({ photoEntries }, null, 2)}</code>
			</pre>
		</LayoutRoot>
	);
}
