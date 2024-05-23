import { PropsWithChildren } from "react";
import s from "./page-placeholder.module.css";

export default function PagePlaceholder({
	name,
	children,
}: PropsWithChildren<{ name: string }>) {
	return (
		<div className={s.root}>
			<div className={s.underConstruction}>🚧 Under Construction</div>
			<div className={s.soonMessage}>
				{`The ${name} page will be here soon.`}
				{children ? (
					<>
						<br />
						For now, here is some very rough work in progress.
					</>
				) : null}
			</div>
			{children ? <div className={s.children}>{children}</div> : null}
		</div>
	);
}
