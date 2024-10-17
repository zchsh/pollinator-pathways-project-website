import type { Collection } from "tinacms";

export const homePageTinaConfig: Collection = {
	label: "Home Page",
	name: "homepage",
	path: "content/home",
	format: "json",
	ui: {
		allowedActions: {
			create: false,
			delete: false,
		},
		router: () => `/edit`,
	},
	fields: [
		{
			type: "string",
			label: "Heading",
			name: "heading",
		},
		{
			list: true,
			type: "object",
			label: "Info Sections",
			name: "infoSections",
			ui: { itemProps: (item) => ({ label: item?.title }) },
			fields: [
				{
					type: "string",
					label: "Title",
					name: "title",
				},
				{
					type: "image",
					label: "Image",
					name: "image",
				},
				{
					type: "rich-text",
					name: "body",
					label: "Body",
					isBody: true,
				},
				{
					type: "string",
					label: "Link Text",
					name: "linkText",
				},
				{
					type: "string",
					label: "Link URL",
					name: "linkUrl",
				},
			],
		},
		{
			list: true,
			type: "object",
			label: "Calls To Action",
			name: "callsToAction",
			ui: { itemProps: (item) => ({ label: item?.title }) },
			fields: [
				{
					type: "image",
					label: "Icon",
					name: "iconSrc",
				},
				{
					type: "string",
					label: "Title",
					name: "title",
				},
				{
					type: "string",
					label: "Text",
					name: "text",
				},
				{
					type: "string",
					label: "Link Text",
					name: "linkText",
				},
				{
					type: "string",
					label: "Link URL",
					name: "linkUrl",
				},
			],
		},
		{
			type: "string",
			label: "Sponsors Heading",
			name: "sponsorsHeading",
		},
		{
			type: "string",
			label: "Sponsors Text",
			ui: {
				component: "textarea",
			},
			name: "sponsorsText",
		},
		{
			type: "object",
			label: "Sponsors",
			name: "sponsors",
			ui: { itemProps: (item) => ({ label: item?.name }) },
			fields: [
				{
					type: "string",
					label: "Name",
					name: "name",
				},
				{
					type: "image",
					label: "Logo",
					name: "logo",
				},
			],
			list: true,
		},
	],
};