// Tina CMS Client
import { slugifyForTina } from "../../lib/slugify-for-tina";
import client from "../../../tina/__generated__/client";
// Types
import type { Collection } from "tinacms";

/**
 * Fetch data for this specific page. Varies from page to page.
 * Exported for use in `_edit` pages.
 */
export async function tinaQuery() {
	return await client.queries.photos({ relativePath: "photos.json" });
}

/**
 * Define the shape of this data in the CMS.
 * This is the data that ultimately gets saved to a JSON file,
 * and returned by the `tinaQuery` function above.
 */

export const photoSectionsTinaConfig: Collection = {
	label: "Photos",
	name: "photos",
	path: "content/photos",
	format: "json",
	fields: [
		{
			type: "string",
			name: "title",
			label: "Title",
			isTitle: true,
			required: true,
		},
		{
			type: "datetime",
			name: "date",
			label: "Date",
		},
		{
			type: "image",
			label: "Images",
			name: "images",
			list: true,
		},
	],
	ui: {
		allowedActions: {
			create: true,
			delete: true,
		},
		router: ({ document }) => `/blog/${document._sys.filename}`,
		filename: {
			// Disable slug editing, it causes more confusion than it's worth.
			// If we ever need to change the slug of a post, we can do so
			// manually... but it's rarely a good idea, because it breaks links.
			readonly: true,
			// Custom slugify function, default does not lower-case
			slugify: (values) => slugifyForTina(values?.title),
		},
	},
};
