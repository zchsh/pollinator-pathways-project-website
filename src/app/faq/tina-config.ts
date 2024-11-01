// Tina CMS Client
import client from "../../../tina/__generated__/client";
// Types
import type { Collection } from "tinacms";

/**
 * Fetch data for this specific page. Varies from page to page.
 * Exported for use in `_edit` pages.
 */
export async function tinaQuery() {
	return await client.queries.faq({ relativePath: "faq.json" });
}

/**
 * Define the shape of this data in the CMS.
 * This is the data that ultimately gets saved to a JSON file,
 * and returned by the `tinaQuery` function above.
 */
export const faqPageTinaConfig: Collection = {
	label: "FAQ",
	name: "faq",
	path: "content/faq",
	format: "json",
	ui: {
		allowedActions: {
			create: false,
			delete: false,
		},
		router: () => `/faq`,
	},
	fields: [
		{
			list: true,
			type: "object",
			label: "FAQ Sections",
			name: "faqSections",
			ui: { itemProps: (item) => ({ label: item?.heading }) },
			fields: [
				{
					type: "string",
					label: "Heading",
					name: "heading",
				},
				{
					type: "rich-text",
					name: "body",
					label: "Body",
					isBody: true,
				},
			],
		},
	],
};
