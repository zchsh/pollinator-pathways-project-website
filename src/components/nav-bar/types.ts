export interface NavLink {
	href: string;
	label: string;
	target?: string;
	isCurrentPage?: boolean;
}

export interface NavSubmenu {
	label: string;
	links: NavLink[];
}

export type NavItem = NavLink | NavSubmenu;
