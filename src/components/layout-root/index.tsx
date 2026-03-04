import Min100Layout from "../min-100-layout/min-100-layout";
import Footer from "../footer/footer";
import SiteHeader from "../site-header/site-header";
import NavBar from "../nav-bar/nav-bar";
// Types
import type { PropsWithChildren } from "react";
import type { NavItem, NavSubmenu } from "../nav-bar/types";

export default function LayoutRoot({
  children,
  footer,
  pathname,
  navBarItems,
}: PropsWithChildren<{
  footer: $TSFixMe;
  pathname: $TSFixMe;
  navBarItems: NavItem[];
}>) {
  const navBarItemsWithActive: NavItem[] = navBarItems.map((item) => {
    if ("links" in item) {
      const dropdown: NavSubmenu = {
        ...item,
        links: item.links.map((link) => {
          return {
            ...link,
            isCurrentPage: isActiveHref(link.href, pathname),
            target: link.href?.startsWith("http") ? "_blank" : undefined,
          };
        }),
      };
      return dropdown;
    } else {
      const link: NavItem = {
        ...item,
        isCurrentPage: isActiveHref(item.href, pathname),
        target: item.href?.startsWith("http") ? "_blank" : undefined,
      };
      return link;
    }
  });

  return (
    <Min100Layout footer={<Footer {...footer} pathname={pathname} />}>
      <SiteHeader />
      <div style={{ zIndex: 1 }}>
        <NavBar navBarItems={navBarItemsWithActive} />
      </div>
      <div style={{ zIndex: 0 }}>{children}</div>
    </Min100Layout>
  );
}

function isActiveHref(href: string, pathname: string): boolean {
  return href === "/" ? href === pathname : pathname.startsWith(href);
}
