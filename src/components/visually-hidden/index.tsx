import { PropsWithChildren } from "react";
import s from "./style.module.css";

export default function VisuallyHidden({ children }: PropsWithChildren<{}>) {
	return <span className={s.root}>{children}</span>;
}
