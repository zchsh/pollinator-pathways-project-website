"use client";

import { useId, useRef, useState, useEffect } from "react";
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import s from "./nav-dropdown.module.css";
import useOnClickOutside from "@/lib/hooks/use-on-click-outside";
// Types
import type { NavLink } from "../types";

export default function NavDropdown({
	label,
	items,
}: {
	label: string;
	items: NavLink[];
}) {
	const pathname = usePathname();
	const rootRef = useRef<HTMLDivElement>(null);
	useOnClickOutside([rootRef], () => setIsOpen(false));
	const [isOpen, setIsOpen] = useState(false);

	const dropdownId = useId();

	/**
	 * This effect ensures that when a visitor navigates to a different page,
	 * the NavDropdown component closes. This is necessary because, during
	 * client-side navigation, the NavDropdown component remains mounted.
	 */
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	return (
		<div className={s.root} ref={rootRef} key={pathname}>
			<button
				aria-expanded={isOpen}
				aria-controls={dropdownId}
				className={s.navDropdownTrigger}
				onClick={() => setIsOpen(!isOpen)}
				style={{ cursor: "pointer" }}
			>
				{label}
			</button>
			<ul id={dropdownId} className={clsx(s.list, { [s.isOpen]: isOpen })}>
				{items.map((item) => {
					return (
						<li key={item.label}>
							<NextLink href={item.href} target={item.target}>
								{item.label}
							</NextLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
