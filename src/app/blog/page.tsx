import PagePlaceholder from "@/components/page-placeholder/page";
import { fetchBlogList } from "./utils/fetch-blog-list";
import Link from "next/link";
import LayoutRoot from "@/components/layout-root";
import getFooterData from "@/lib/get-footer-data";
import { BlogEntriesList } from "./components/blog-entries-list";
import { BLOG_CATEGORIES } from "../../../constants/blog-categories";
import s from "./blog.module.css";

export default async function Blog() {
	const blogEntries = await fetchBlogList();
	const footer = await getFooterData();

	return (
		<LayoutRoot footer={footer}>
			<PagePlaceholder name="Blog">
				<main>
					<BlogEntriesList
						blogEntries={blogEntries}
						blogCategories={[
							{ label: "All", value: "all" },
							...BLOG_CATEGORIES,
						].map((entry) => {
							return { ...entry, isActive: entry.value === "all" };
						})}
					/>
				</main>
			</PagePlaceholder>
		</LayoutRoot>
	);
}
