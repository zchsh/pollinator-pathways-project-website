import s from "./style.module.css";

const ITEMS: {
	iconSrc: string;
	title: string;
	body: string;
	linkText: string;
	linkUrl: string;
}[] = [
	{
		iconSrc: "https://via.placeholder.com/64",
		title: "Start your garden",
		body: "Interested in creating a pollinator garden for your backyard or within your community? Our kits are one way to get started!",
		linkText: "Browse garden kits",
		linkUrl: "/pollinator-kits",
	},
	{
		iconSrc: "https://via.placeholder.com/64",
		title: "Work with us",
		body: "For larger projects for your community or workplace, we can help plan and plant gardens on a case by case basis. We do charge a fee for these services.",
		linkText: "Help me plan",
		linkUrl: "/",
	},
	{
		iconSrc: "https://via.placeholder.com/64",
		title: "Sponsor us",
		body: "Interested in supporting our vision, within your community, or at your workplace? We’re here to help!",
		linkText: "Get in touch",
		linkUrl: "/",
	},
];

export default function ThreeFeatures() {
	return (
		<div className={s.root}>
			<div className={s.items}>
				{ITEMS.map((item, idx) => {
					return (
						<div className={s.item} key={idx}>
							<img
								className={s.itemIcon}
								width={64}
								height={64}
								src={item.iconSrc}
								alt=""
							/>
							<h2 className={s.itemTitle}>{item.title}</h2>
							<p className={s.itemBody}>{item.body}</p>
							<a className={s.itemLink} href={item.linkUrl}>
								{item.linkText}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
