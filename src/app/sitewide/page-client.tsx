"use client";

import { useTina } from "tinacms/dist/react";
import PageServer from "./page-server";

/**
 * TODO: could this be abstracted into a shared component?
 * Seems to be necessary to use TinaCMS with `app` router
 */
export default function PageClient({tina}: $TSFixMe) {
	const { query, variables, data } = tina 
 
	const { data: tinaData } = useTina({
		query: query,
		variables: variables,
		data: data,
	});


	return <PageServer data={tinaData} />;
}
