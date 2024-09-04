"use client";

export default function HtmlEmbed({ html }: { html: string }) {
	return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
