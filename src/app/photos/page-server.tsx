import PagePlaceholder from "@/components/page-placeholder/page";
import s from "./photos.module.css";

export default function PhotosPage({ data }: $TSFixMe) {
	const { photoSections } = data.photos;
	return (
		<PagePlaceholder name="Photos">
			<main>
				{photoSections?.map((section: $TSFixMe, index: number) => {
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
			</main>
		</PagePlaceholder>
	);
}
