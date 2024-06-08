// Third-party
import clsx from "clsx";
// Styles
import s from "./style.module.css";

export default function PrimaryButton({
	children,
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button {...props} className={clsx(s.button, className)}>
			{children}
		</button>
	);
}
