export interface NavLink {
	href: string;
	label: string;
	target?: string;
	isCurrentPage?: boolean;
}

interface NavSubmenu {
	label: string;
	items: NavLink[];
}

export type NavItem = NavLink | NavSubmenu;
