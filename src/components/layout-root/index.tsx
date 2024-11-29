import Min100Layout from "../min-100-layout/min-100-layout";
import Footer from "../footer/footer";
import SiteHeader from "../site-header/site-header";
import NavBar from "../nav-bar/nav-bar";
import type { NavItem } from "../nav-bar/types";
import { PropsWithChildren } from "react";

/**
 * TODO: move this into tina CMS somehow?
 */
import { NAV_BAR_ITEMS } from "./content";

export default function LayoutRoot({
	children,
	footer,
	pathname,
	navBarItems = NAV_BAR_ITEMS
}: PropsWithChildren<{ footer: $TSFixMe; pathname: $TSFixMe, navBarItems?: NavItem[] }>) {
	const navBarItemsWithActive = navBarItems.map((item) => {
		if ("items" in item) {
			return {
				...item,
				items: item.items.map((subItem) => {
					return { ...subItem, isCurrentPage: subItem.href === pathname };
				}),
			};
		} else {
			return { ...item, isCurrentPage: item.href === pathname };
		}
	});

	return (
		<Min100Layout footer={<Footer {...footer} />}>
			<SiteHeader />
			<div style={{ zIndex: 1 }}>
				<NavBar navBarItems={navBarItemsWithActive} />
			</div>
			<div style={{ zIndex: 0 }}>{children}</div>
		</Min100Layout>
	);
}
