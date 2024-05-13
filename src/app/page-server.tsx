import Image from "next/image";
import s from "./page.module.css";

export default function Home({ data }: $TSFixMe) {
	const { homestring, homeimage, photo_sections } = data.homepage;

	return (
		<main>
			<div className={s.placeholder}>
				HOME PAGE PLACEHOLDER
				<img className={s.image} src={homeimage} alt="" />
				{photo_sections?.map((section: $TSFixMe, index: number) => {
					if (!section.images?.length) return null;
					return (
						<div key={index}>
							<h2>{section.title}</h2>
							<div className={s.imageList}>
								{section.images.map((image: string, index: number) => (
									<img className={s.image} key={index} src={image} alt="" />
								))}
							</div>
						</div>
					);
				})}
				{/* <pre>
					<code>
						{JSON.stringify({ homestring, homeimage, photo_sections }, null, 2)}
					</code>
				</pre> */}
			</div>
		</main>
	);
}
