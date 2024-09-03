"use client";

import { useTina } from "tinacms/dist/react";

/**
 * TODO: keep working this into a re-usable component.
 * Seems to be necessary to use TinaCMS with `app` router
 */
export default function PageClient({
	query,
	variables,
	data,
	PageComponent,
}: $TSFixMe) {
	const { data: tinaData } = useTina({
		query: query,
		variables: variables,
		data: data,
	});

	return <PageComponent data={tinaData} />;
}
