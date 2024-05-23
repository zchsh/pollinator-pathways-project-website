import NextLink from "next/link";
import NavDropdown from "./nav-dropdown/nav-dropdown";
import s from "./nav-bar.module.css";

import { NAV_BAR_ITEMS } from "./content";

function NavBar() {
	return (
		<nav className={s.root} aria-label="Main navigation">
			<ul className={s.navList}>
				{NAV_BAR_ITEMS.map((item) => {
					if ("items" in item) {
						return (
							<li key={item.label}>
								<NavDropdown label={item.label} items={item.items} />
							</li>
						);
					} else {
						return (
							<li key={item.label}>
								<NextLink href={item.href} target={item.target}>
									{item.label}
								</NextLink>
							</li>
						);
					}
				})}
			</ul>
		</nav>
	);
}

export default NavBar;
