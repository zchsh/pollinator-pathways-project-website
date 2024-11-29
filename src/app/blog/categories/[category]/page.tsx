// Components
import PagePlaceholder from "@/components/page-placeholder/page";
import LayoutRoot from "@/components/layout-root";
import { BlogEntriesList } from "../../components/blog-entries-list";
import { PageTitle } from "../../components/page-title";
// Constants
// import { BLOG_CATEGORIES } from "../../../../../constants/blog-categories";
// Utils
import getSitewideData from "@/lib/get-sitewide-data";

export default async function BlogCategoryPage({
	params: { category },
}: $TSFixMe) {
	const { footer } = await getSitewideData();

	// const matchedCategory = BLOG_CATEGORIES.find(
	// 	(blogCategory) => blogCategory.value === category
	// );

	return (
		<LayoutRoot footer={footer} pathname={"/blog"}>
			<PagePlaceholder name="Blog Category">
				<main>
					<PageTitle>Blog</PageTitle>
					<BlogEntriesList category={category} />
				</main>
			</PagePlaceholder>
		</LayoutRoot>
	);
}
