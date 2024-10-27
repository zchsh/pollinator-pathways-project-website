"use server";

// Third-party
import clsx from "clsx";
// Utils
import { fetchBlogList } from "../../utils/fetch-blog-list";
import { BLOG_CATEGORIES } from "../../../../../constants/blog-categories";
import Link from "next/link";
// Styles
import s from "./style.module.css";
import { Placeholder } from "@/components/placeholder";

export async function BlogEntriesList({ category }: { category: string }) {
	const allBlogEntries = await fetchBlogList();

	const blogEntries =
		category === "all"
			? allBlogEntries
			: allBlogEntries.filter((entry) => {
					return entry.category === category;
			  });

	const blogCategories = [
		{ label: "All", value: "all" },
		...BLOG_CATEGORIES,
	].map((entry) => {
		return { ...entry, isActive: entry.value === category };
	});

	return (
		<>
			<Placeholder name="<BlogCategoriesNav />">
				<ul className={s.categoriesList}>
					{blogCategories.map((category) => (
						<li key={category.value}>
							<Link
								href={
									category.value === "all"
										? `/blog`
										: `/blog/categories/${category.value}`
								}
								className={clsx(s.categoryLink, {
									[s.isActive]: category.isActive,
								})}
							>
								{category.label}
							</Link>
						</li>
					))}
				</ul>
			</Placeholder>
			{blogEntries.length > 0 ? (
				<Placeholder name="BlogEntriesList">
					<ul className={s.blogEntriesList}>
						{blogEntries.map((entry) => (
							<li key={entry.filename}>
								<Link href={`/blog/${entry.filename}`}>{entry.title}</Link>
							</li>
						))}
					</ul>
				</Placeholder>
			) : (
				<Placeholder name="BlogNoEntries">
					<p className={s.noEntries}>
						No blog entries found. <Link href="/blog">View all blog posts</Link>
						.
					</p>
				</Placeholder>
			)}
		</>
	);
}
