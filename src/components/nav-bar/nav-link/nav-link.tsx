"use client";

// Third-party
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
// Styles
import s from "./nav-link.module.css";

export default function NavLink({
	href,
	target,
	label,
}: {
	href: string;
	target?: string;
	label: string;
}) {
	const pathname = usePathname();
	const isCurrentPage = pathname === href;
	return (
		<NextLink
			className={clsx(s.link, { [s.isCurrentPage]: isCurrentPage })}
			href={href}
			target={target}
		>
			{label}
		</NextLink>
	);
}
