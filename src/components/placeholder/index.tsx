import { PropsWithChildren } from "react";
import s from "./style.module.css";

export function Placeholder({
	name,
	children,
}: PropsWithChildren<{ name?: string }>) {
	return (
		<div className={s.root}>
			<div className={s.text}>
				<div>🚧 PLACEHOLDER</div>
				{name ? <div style={{ textAlign: "center" }}>{name}</div> : null}
			</div>
			<div className={s.children}>
				{children ? (
					children
				) : (
					<div style={{ textAlign: "center", padding: "1rem 0" }}>{name}</div>
				)}
			</div>
		</div>
	);
}
