import PagePlaceholder from "@/components/page-placeholder/page";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import s from "./blog-entry.module.css";
import { Placeholder } from "@/components/placeholder";

export default function PageServer({ data }: { data: $TSFixMe }) {
	const {
		author,
		body,
		category,
		coverImage,
		coverImageDescription,
		date,
		title,
	} = data.blog;
	const metadata = {
		author,
		date,
		category,
	};
	return (
		<>
			{/* <Placeholder name="Breadcrumbs">
				<div className={s.breadcrumbs}>
					<Link className={s.breadcrumbItemLinked} href={`/blog`}>{`Blog`}</Link>
					<div className={s.breadcrumbItemDivider}>{`/`}</div>
					<div className={s.breadcrumbItemUnlinked}>{title}</div>
				</div>
			</Placeholder> */}
			<Placeholder name="Author, date, & category">
				<pre style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
					<code>{JSON.stringify(metadata, null, 2)}</code>
				</pre>
			</Placeholder>
			<Placeholder name="Author, date, & category">
				<div className={s.metadata}>
					<div className={s.authorIcon}>ICON</div>
					<div className={s.authorName}>{metadata.author}</div>
					<div className={s.date}>{metadata.date}</div>
					{/* TODO: actually implement reading time */}
					<div className={s.readingTime}>{`2 min read`}</div>
				<pre style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
					<code>{JSON.stringify(metadata, null, 2)}</code>
				</pre>
				</div>
			</Placeholder>
			<Placeholder name="Page Title">
				<h1 className={s.pageTitle} >{title}</h1>
			</Placeholder>
			
			<Placeholder name="Cover image">
				{coverImage ? (
					<img
						style={{ display: "block", margin: "0 auto" }}
						src={coverImage}
						alt={coverImageDescription}
					/>
				) : null}
			</Placeholder>
			<Placeholder name="Blog body">
				<div className={s.blogBody}>
					<TinaMarkdown content={body} />
				</div>
			</Placeholder>
		</>
	);
}
