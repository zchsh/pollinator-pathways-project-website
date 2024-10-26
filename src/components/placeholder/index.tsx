import { PropsWithChildren } from "react";
import s from "./style.module.css";

export function Placeholder({ children }: PropsWithChildren<{}>) {
	return (
		<div className={s.root}>
			<div>🚧 PLACEHOLDER</div>
			<div>{children}</div>
		</div>
	);
}
