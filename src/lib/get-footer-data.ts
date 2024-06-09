import client from "../../tina/__generated__/client";

export default async function getFooterData() {
	const { data } = await client.queries.sitewide({
		relativePath: "sitewide.json",
	});
	return data.sitewide.footer;
}
