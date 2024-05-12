import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import s from "./blog-entry.module.css";

export default function PageServer({ data }: $TSFixMe) {
	return (
		<>
			<div className={s.breadcrumbs}>
				<Link href={`/blog`}>{`Blog`}</Link>
				<div>{`/`}</div>
				<div>{data.blog.title}</div>
			</div>
			<h1>{data.blog.title}</h1>
			<TinaMarkdown content={data.blog.body} />
		</>
	);
}
