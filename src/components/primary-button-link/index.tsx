// Third-party
import clsx from "clsx";
import Link from "next/link";
import type { LinkProps } from "next/link";
// Styles
import s from "./style.module.css";
import { PropsWithChildren } from "react";

export default function PrimaryButtonLink({
	children,
	className,
	...props
}: PropsWithChildren<LinkProps> & { className?: string; target?: string }) {
	return (
		<Link {...props} className={clsx(s.link, className)}>
			{children}
		</Link>
	);
}
