import { PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";
// Styles
import s from "./style.module.css";

export default function OverflowStripe({
	children,
	overflow,
	stripeSlot,
}: PropsWithChildren<{
	overflow: "left" | "right";
	stripeSlot?: ReactNode;
}>) {
	return (
		<div className={s.root}>
			<div className={clsx(s.stripe, s[`overflow_${overflow}`])}>
				{stripeSlot}
			</div>
			<div className={s.children}>{children}</div>
		</div>
	);
}
