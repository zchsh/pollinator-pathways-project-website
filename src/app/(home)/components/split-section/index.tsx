import { ReactNode } from "react";
import s from "./style.module.css";
import clsx from "clsx";

export default function SplitSection({
	firstSection,
	secondSection,
	flipOrder = false,
}: {
	firstSection: ReactNode;
	secondSection: ReactNode;
	flipOrder?: boolean;
}) {
	return (
		<div className={clsx(s.root, { [s.flipOrder]: flipOrder })}>
			<div className={s.firstSection}>{firstSection}</div>
			<div className={s.secondSection}>{secondSection}</div>
		</div>
	);
}
