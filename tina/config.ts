import { defineConfig } from "tinacms";
import { homePageTinaConfig } from "../src/app/(home)/tina-config";

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	"main";

export default defineConfig({
	branch,

	// Get this from tina.io
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,
	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "uploads",
			publicFolder: "public",
		},
	},
	/**
	 * See docs on content modeling for more info on
	 * how to setup new content models:
	 * https://tina.io/docs/schema/
	 */
	schema: {
		collections: [
			{
				label: "Site-wide",
				name: "sitewide",
				path: "content/sitewide",
				format: "json",
				ui: {
					allowedActions: {
						create: false,
						delete: false,
					},
					router: () => `/sitewide`,
				},
				fields: [
					{
						type: "object",
						label: "Footer",
						name: "footer",
						fields: [
							{
								type: "string",
								label: "Subscribe Heading",
								name: "subscribeHeading",
							},
							{
								type: "string",
								label: "Subscribe Placeholder",
								name: "subscribePlaceholder",
							},
							{
								list: true,
								type: "object",
								label: "Links",
								name: "links",
								ui: { itemProps: (item) => ({ label: item?.text }) },
								fields: [
									{
										type: "string",
										label: "Text",
										name: "text",
									},
									{
										type: "string",
										label: "URL",
										name: "url",
									},
									{
										type: "image",
										label: "Icon",
										name: "icon",
									},
									{
										type: "boolean",
										label: "Show Icon Only",
										name: "showIconOnly",
									},
								],
							},
						],
					},
				],
			},
			homePageTinaConfig,
			{
				label: "Connect Page",
				name: "connect",
				path: "content/connect",
				format: "json",
				ui: {
					allowedActions: {
						create: true,
						delete: false,
					},
					router: () => `/connect`,
				},
				fields: [
					{
						type: "string",
						label: "Email",
						name: "email",
					},
					{
						type: "string",
						label: "Email Link Text",
						name: "emailLinkText",
					},
					{
						type: "string",
						label: "Email Subject",
						name: "emailSubject",
					},
				],
			},
			{
				label: "Photos",
				name: "photos",
				path: "content/photos",
				format: "json",
				ui: {
					allowedActions: {
						create: true,
						delete: false,
					},
					router: () => `/photos`,
				},
				fields: [
					{
						list: true,
						type: "object",
						label: "Photo Sections",
						name: "photoSections",
						ui: { itemProps: (item) => ({ label: item?.title }) },
						fields: [
							{
								type: "string",
								label: "Title",
								name: "title",
							},
							{
								type: "image",
								label: "Images",
								name: "images",
								list: true,
							},
						],
					},
				],
			},
			{
				name: "blog",
				label: "Blog",
				path: "content/blog",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
				],
				ui: {
					router: ({ document }) => `/blog/${document._sys.filename}`,
				},
			},
		],
	},
});
