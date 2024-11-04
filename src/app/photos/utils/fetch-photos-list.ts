import client from "@/../tina/__generated__/client";

export async function fetchPhotosList() {
	/**
	 * TODO: implement pagination.
	 * We can probably wait to implement pagination
	 * until we have more than 50 photo albums.
	 */
	const photoListData = await client.queries.photosConnection({
		sort: "date",
		last: 50,
	});
	if (!photoListData?.data?.photosConnection?.edges) {
		throw new Error("Failed to fetch photo list data");
	}

	const photoEntries = [];
	for (const photoEntry of photoListData.data.photosConnection.edges) {
		const photoNode = photoEntry?.node;
		if (!photoNode) {
			throw new Error("Failed to grab node off blog entry");
		}
		const { title } = photoNode;
		const { filename } = photoNode._sys;
		photoEntries.push({ title, filename });
	}

	return photoEntries;
}
