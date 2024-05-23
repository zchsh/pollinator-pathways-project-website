import s from "./photos.module.css";

export default function Photos() {
	return (
		<main>
			<div className={s.placeholder}>PHOTOS PAGE PLACEHOLDER</div>
			{/* <div className={s.placeholder}>
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
			</div> */}
		</main>
	);
}
