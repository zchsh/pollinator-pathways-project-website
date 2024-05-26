import imgLogo from "./pollinator-pathways-logo.png";
import Link from "next/link";
import s from "./site-header.module.css";

export default function SiteHeader() {
	return (
		<div className={s.root}>
			<Link href="/" tabIndex={-1}>
				<img alt="" src={imgLogo.src} className={s.logo} />
			</Link>
			<h1>
				<Link className={s.siteTitle} href="/">
					Pollinator Pathways Project
				</Link>
			</h1>
		</div>
	);
}
