import s from "./style.module.css";

interface Item {
	iconSrc: string;
	title: string;
	text: string;
	linkText: string;
	linkUrl: string;
}

export default function ThreeFeatures({ items }: { items: Item[] }) {
	return (
		<div className={s.root}>
			<div className={s.items}>
				{items.map((item, idx) => {
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
							<p className={s.itemText}>{item.text}</p>
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
