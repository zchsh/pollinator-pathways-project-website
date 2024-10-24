import Link from "next/link";
// Styles
import s from "./style.module.css";
import clsx from "clsx";

export function BlogEntriesList({
	blogCategories,
	blogEntries,
}: {
	blogCategories: { label: string; value: string; isActive: boolean }[];
	blogEntries: any[];
}) {
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
				<ul>
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
