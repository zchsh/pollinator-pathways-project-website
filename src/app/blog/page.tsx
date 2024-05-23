import PagePlaceholder from "@/components/page-placeholder/page";
import { fetchBlogList } from "./utils/fetch-blog-list";
import Link from "next/link";
import s from "./blog.module.css";

export default async function Blog() {
	const blogEntries = await fetchBlogList();

	return (
		<PagePlaceholder name="Blog">
			<main>
				<ul>
					{blogEntries.map((entry) => (
						<li key={entry.filename}>
							<Link href={`/blog/${entry.filename}`}>{entry.title}</Link>
						</li>
					))}
				</ul>
			</main>
		</PagePlaceholder>
	);
}
