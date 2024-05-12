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
			</ul>
		</nav>
	);
}

export default NavBar;
