// Components
import PagePlaceholder from "@/components/page-placeholder/page";
import LayoutRoot from "@/components/layout-root";
// Utils
import getFooterData from "@/lib/get-footer-data";
import { fetchBlogList } from "../../utils/fetch-blog-list";
import { BLOG_CATEGORIES } from "../../../../../constants/blog-categories";
import { BlogEntriesList } from "../../components/blog-entries-list";

export default async function BlogCategoryPage({
	params: { category },
}: $TSFixMe) {
	const blogEntries = await fetchBlogList();
	const footer = await getFooterData();

	return (
		<LayoutRoot footer={footer}>
			<PagePlaceholder name="Blog Category">
				<main>
					<BlogEntriesList
						blogEntries={blogEntries.filter((entry) => {
							return entry.category === category;
						})}
						blogCategories={[
							{ label: "All", value: "all" },
							...BLOG_CATEGORIES,
						].map((entry) => {
							const isActive = entry.value === category;
							return { ...entry, isActive };
						})}
					/>
				</main>
			</PagePlaceholder>
		</LayoutRoot>
	);
}
