import client from "../../../../tina/__generated__/client";
import { draftMode } from "next/headers";
import PageClient from "./page-client";
import PageServer from "./page-server";

export default async function Page({ params: { filename } }: $TSFixMe) {
	const res = await client.queries.post({
		relativePath: `${filename}.md`,
	});

	const { isEnabled } = draftMode();

	return <>{isEnabled ? <PageClient {...res} /> : <PageServer {...res} />}</>;
}

export async function generateStaticParams() {
	const postsListData = await client.queries.postConnection();
	if (!postsListData?.data?.postConnection?.edges) {
		throw new Error("Failed to fetch posts list data");
	}

	const staticParams = [];
	for (const post of postsListData.data.postConnection.edges) {
		const filename = post?.node?._sys?.filename;
		if (!filename) {
			throw new Error("Failed to grab filename off post entry");
		} else {
			staticParams.push({ params: { filename } });
		}
	}

	return staticParams;
}
