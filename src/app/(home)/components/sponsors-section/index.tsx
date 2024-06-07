import s from "./style.module.css";

const LOGOS = ["TD", "LUSH", "LEN", "WFF", "RFF"];

export default function SponsorsSection() {
	return (
		<div className={s.root}>
			<div className={s.content}>
				<div className={s.textContent}>
					<h2 className={s.heading}>Contributing Artists & Project Sponsors</h2>
					<p className={s.text}>
						We extend our deepest gratitude to the sponsors who support our
						vision for a greener city, and to the artists who lent their talent
						and passion to create beautiful signage for our installations.
					</p>
				</div>
				<div className={s.sponsors}>
					{LOGOS.map((logo) => {
						return (
							<img
								key={logo}
								className={s.sponsorLogo}
								src="https://via.placeholder.com/180x70"
								alt=""
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
