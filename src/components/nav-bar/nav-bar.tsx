import NextLink from "next/link";
import clsx from "clsx";
import NavDropdown from "./nav-dropdown/nav-dropdown";
import s from "./nav-bar.module.css";

import { NAV_BAR_ITEMS } from "./content";
import NavLink from "./nav-link/nav-link";

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
								<NavLink
									href={item.href}
									label={item.label}
									target={item.target}
								/>
							</li>
						);
					}
				})}
			</ul>
		</nav>
	);
}

export default NavBar;
