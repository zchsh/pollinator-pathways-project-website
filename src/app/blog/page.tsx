import PagePlaceholder from "@/components/page-placeholder/page";
// Components
import { PageTitle } from "./components/page-title";
import LayoutRoot from "@/components/layout-root";
import getFooterData from "@/lib/get-footer-data";
import { BlogEntriesList } from "./components/blog-entries-list";
// Styles
// import s from "./blog.module.css";

export default async function Blog() {
	const footer = await getFooterData();

	return (
		<LayoutRoot footer={footer}>
			<PagePlaceholder name="Blog">
				<main>
					<PageTitle>Blog</PageTitle>
					<BlogEntriesList category="all" />
				</main>
			</PagePlaceholder>
		</LayoutRoot>
	);
}
