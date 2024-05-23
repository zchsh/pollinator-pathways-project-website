export interface NavLink {
	href: string;
	label: string;
	target?: string;
}

interface NavSubmenu {
	label: string;
	items: NavLink[];
}

export type NavItem = NavLink | NavSubmenu;
