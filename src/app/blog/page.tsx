import PagePlaceholder from "@/components/page-placeholder/page";
// Components
import { PageTitle } from "./components/page-title";
import LayoutRoot from "@/components/layout-root";
import getSitewideData from "@/lib/get-sitewide-data";
import { BlogEntriesList } from "./components/blog-entries-list";
// Styles
// import s from "./blog.module.css";

export default async function Blog() {
	const { footer } = await getSitewideData();

	return (
		<LayoutRoot footer={footer} pathname="/blog">
			<PagePlaceholder name="Blog">
				<main>
					<PageTitle>Blog</PageTitle>
					<BlogEntriesList category="all" />
				</main>
			</PagePlaceholder>
		</LayoutRoot>
	);
}
