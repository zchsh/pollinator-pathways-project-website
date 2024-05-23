import { defineConfig } from "tinacms";

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

	admin: {
		// This should match the value in your .env file
		token: process.env.TINA_TOKEN,
		// This should match the value in your .env file
		clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
		// TODO: investigate whether all properties need to be defined here
		// @ts-expect-error - I don't think all properties are needed here?
		auth: {
			onLogin: async ({ token }) => {
				//  When the user logs, we in enter preview mode
				location.href =
					`/api/preview/enter?token=${token.id_token}&slug=` + location;
			},
			onLogout: async () => {
				// When the user logs out, exit preview mode, and redirect to home
				location.href = `/api/preview/exit`;
			},
		},
	},
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
				label: "Home Page",
				name: "homepage",
				path: "content/home",
				format: "json",
				ui: {
					allowedActions: {
						create: true,
						delete: false,
					},
					router: () => `/`,
				},
				fields: [
					{
						type: "string",
						label: "Home page string",
						name: "homestring",
					},
					{
						type: "image",
						label: "Home page image",
						name: "homeimage",
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
