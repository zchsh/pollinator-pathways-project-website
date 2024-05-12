import { fetchBlogList } from "./utils/fetch-blog-list";
import Link from "next/link";
import s from "./blog.module.css";

export default async function Blog() {
	const blogEntries = await fetchBlogList();

	return (
		<main>
			<div className={s.placeholder}>
				<div>BLOG PAGE PLACEHOLDER</div>
				<div>BLOG POSTS:</div>

				<ul>
					{blogEntries.map((entry) => (
						<li key={entry.filename}>
							<Link href={`/blog/${entry.filename}`}>{entry.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
