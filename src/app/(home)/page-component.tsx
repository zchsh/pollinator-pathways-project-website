// Third-party
import { TinaMarkdown } from "tinacms/dist/rich-text";
// Components
import PrimaryButtonLink from "@/components/primary-button-link";
import Spacer from "@/components/spacer";
import SponsorsSection from "./components/sponsors-section";
import TextImageSplit from "./components/text-image-split";
import ThreeFeatures from "./components/three-features";
import VideoHero from "./components/video-hero";
// Styles
import s from "./home-page.module.css";

export default function Home({ data }: $TSFixMe) {
	const {
		heading,
		infoSections,
		callsToAction,
		sponsorsHeading,
		sponsorsText,
		sponsors,
	} = data.homepage;

	return (
		<main className={s.root}>
			{/* <pre>
					<code>{JSON.stringify(data.homepage, null, 2)}</code>
				</pre> */}
			<VideoHero
				videoSrc={"/pollinator-pathways-video.mp4"}
				heading={heading}
			/>
			<div className={s.infoSections}>
				{infoSections.map((section: $TSFixMe, index: number) => {
					const flipOrder = index % 2 !== 0;
					return (
						<TextImageSplit
							key={index}
							flipOrder={flipOrder}
							heading={section.title}
							image={section.image}
						>
							<div className={s.textImageBody}>
								<TinaMarkdown content={section.body} />
							</div>
							{section.linkText && section.linkUrl ? (
								<PrimaryButtonLink
									className={s.textImageLink}
									href={section.linkUrl}
								>
									{section.linkText}
								</PrimaryButtonLink>
							) : null}
						</TextImageSplit>
					);
				})}
			</div>
			<Spacer h="2rem" />
			<ThreeFeatures items={callsToAction} />
			<SponsorsSection
				heading={sponsorsHeading}
				text={sponsorsText}
				sponsors={sponsors}
			/>
		</main>
	);
}
