// Third-party
import { TinaMarkdown } from "tinacms/dist/rich-text";
// Components
import Spacer from "@/components/spacer";
import VideoHero from "./components/video-hero";
import TextImageSplit from "./components/text-image-split";
import ThreeFeatures from "./components/three-features";
// Styles
import s from "./page.module.css";
import SponsorsSection from "./components/sponsors-section";

export default function Home({ data }: $TSFixMe) {
	const { heading, videoUrl, infoSections, callsToAction } = data.homepage;

	return (
		<main className={s.root}>
			{/* <pre>
				<code>{JSON.stringify({ callsToAction }, null, 2)}</code>
			</pre> */}
			<VideoHero videoSrc={videoUrl} heading={heading} />
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
							<TinaMarkdown content={section.body} />
							{section.link ? (
								<a href={section.link.url}>{section.link.text}</a>
							) : null}
						</TextImageSplit>
					);
				})}
			</div>
			<Spacer h="2rem" />
			<ThreeFeatures items={callsToAction} />
			<SponsorsSection />
		</main>
	);
}
