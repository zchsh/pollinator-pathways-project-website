import LayoutRoot from "@/components/layout-root";
import PagePlaceholder from "@/components/page-placeholder/page";
import type { NavItem } from "@/components/nav-bar/types";

export default function Placeholder({ data }: { data: $TSFixMe }) {
	const { footer } = data.sitewide;

	const navBarItems: NavItem[] = [
		{ href: "/", label: "Home" },
		{ href: "/connect", label: "Connect" },
		{ href: "/central-london-pathway", label: "Central London Pathway" },
		{
			href: "https://www.google.com/maps/d/u/0/viewer?mid=16MEC2s6Poc1CXqyB0v0wRINtjc9VQDkR&ll=42.99879305728129%2C-81.2673045034648&z=12",
			label: "Pollinator Map",
			target: "_blank",
		},
		{ href: "/resources", label: "Resources" },
		{ href: "/faq", label: "FAQ" },
		{ href: "/photos", label: "Photos" },
		{
			href: "/donate",
			label: "Donate",
		},
		{
			href: "/pollinator-kits",
			label: "Pollinator Kits",
		},
		{
			label: "Test Group",
			items: [
				{
					href: "/pollinator-kits",
					label: "Pollinator Kits",
				},
				{ href: "/resources", label: "Resources" },
		{ href: "/faq", label: "FAQ" },	
			],
		},
		{ href: "/blog", label: "Blog" },
	]

	return (
		<LayoutRoot footer={footer} pathname="/sitewide" navBarItems={navBarItems}>
			<PagePlaceholder name="Sitewide">
				<pre>
				<code>{JSON.stringify({ data }, null, 2)}</code>
			</pre>
			</PagePlaceholder>
		</LayoutRoot>
	);
}
