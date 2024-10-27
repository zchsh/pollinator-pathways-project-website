"use server";

// Third-party
import clsx from "clsx";
// Utils
import { fetchBlogList } from "../../utils/fetch-blog-list";
import { BLOG_CATEGORIES } from "../../../../../constants/blog-categories";
import Link from "next/link";
// Styles
import s from "./style.module.css";

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
			{blogEntries.length > 0 ? (
				<ul className={s.blogEntriesList}>
					{blogEntries.map((entry) => (
						<li key={entry.filename}>
							<Link href={`/blog/${entry.filename}`}>{entry.title}</Link>
						</li>
					))}
				</ul>
			) : (
				<p className={s.noEntries}>
					No blog entries found. <Link href="/blog">View all blog posts</Link>.
				</p>
			)}
		</>
	);
}
