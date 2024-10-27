// Third-party
import clsx from "clsx";
import NextLink from "next/link";
// Styles
import s from "./nav-link.module.css";

export default function NavLink({
	href,
	target,
	label,
	isCurrentPage,
}: {
	href: string;
	target?: string;
	label: string;
	isCurrentPage?: boolean;
}) {
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
