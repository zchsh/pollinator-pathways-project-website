import s from "./style.module.css";

export default function SponsorsSection({
	heading,
	text,
	sponsors,
}: {
	heading: string;
	text: string;
	sponsors: { name: string; logo: string }[];
}) {
	return (
		<div className={s.root}>
			<div className={s.content}>
				<div className={s.textContent}>
					<h2 className={s.heading}>{heading}</h2>
					<p className={s.text}>{text}</p>
				</div>
				<div className={s.sponsors}>
					{sponsors.map((sponsor) => {
						return (
							<img
								key={sponsor.name}
								className={s.sponsorLogo}
								src={sponsor.logo}
								alt={sponsor.name}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
