// Types
import React from "react";
import type { HTMLProps } from "react";
// Styles
import s from "./style.module.css";
import clsx from "clsx";
import { Placeholder } from "@/components/placeholder";

export function PageTitle({
	children,
	className,
	...rest
}: HTMLProps<HTMLHeadingElement>) {
	return (
		<Placeholder name="<PageTitle />">
			<h1 className={clsx(s.root, className)} {...rest}>
				{children}
			</h1>
		</Placeholder>
	);
}
