import PagePlaceholder from "@/components/page-placeholder/page";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import s from "./blog-entry.module.css";

function Image({ url, alt, caption }: $TSFixMe) {
	return (
		<figure>
			<img src={url} alt={alt} />
			{caption && <figcaption>{caption}</figcaption>}
		</figure>
	);
}

export default function PageServer({ data }: $TSFixMe) {
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
		<PagePlaceholder name="Blog Entry">
			<div className={s.breadcrumbs}>
				<Link href={`/blog`}>{`Blog`}</Link>
				<div>{`/`}</div>
				<div>{title}</div>
			</div>
			<h1>{title}</h1>
			<br />
			<hr />
			<pre>
				<code>{JSON.stringify(metadata, null, 2)}</code>
			</pre>
			<hr />
			<br />
			{coverImage && <img src={coverImage} alt={coverImageDescription} />}
			<div className={s.blogBody}>
				<TinaMarkdown content={body} components={{ img: Image }} />
			</div>
		</PagePlaceholder>
	);
}
