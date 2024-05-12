import client from "@/../tina/__generated__/client";

export async function fetchBlogList() {
	const blogListData = await client.queries.blogConnection();
	if (!blogListData?.data?.blogConnection?.edges) {
		throw new Error("Failed to fetch blog list data");
	}

	const blogEntries = [];
	for (const blogEntry of blogListData.data.blogConnection.edges) {
		const blogNode = blogEntry?.node;
		if (!blogNode) {
			throw new Error("Failed to grab node off blog entry");
		}
		const { title } = blogNode;
		const { filename } = blogNode._sys;
		blogEntries.push({ title, filename });
	}

	return blogEntries;
}
