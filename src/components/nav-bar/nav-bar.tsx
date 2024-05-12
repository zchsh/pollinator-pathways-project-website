import Link from "next/link";
import s from "./nav-bar.module.css";

function NavBar() {
	return (
		<nav className={s.placeholder}>
			<div>NAV BAR</div>
			<ul className={s.navList}>
				<li>
					<Link href="/">{`/ (Home)`}</Link>
				</li>
				<li>
					<Link href="/blog">{`Blog`}</Link>
				</li>
				<li>
					<Link href="/central-london-pathway">{`Central London Pathway`}</Link>
				</li>
				<li>
					<Link href="/connect">{`Connect`}</Link>
				</li>
				<li>
					<Link href="/donate">{`Donate`}</Link>
				</li>
				<li>
					<Link href="/faq">{`FAQ`}</Link>
				</li>
				<li>
					<Link href="/photos">{`Photos`}</Link>
				</li>
				<li>
					<Link href="/pollinator-kits">{`Pollinator Kits`}</Link>
				</li>
				<li>
					<Link href="/resources">{`Resources`}</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
