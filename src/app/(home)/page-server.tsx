// Third-party
import { TinaMarkdown } from "tinacms/dist/rich-text";
// Components
import Spacer from "@/components/spacer";
import VideoHero from "./components/video-hero";
import TextImageSplit from "./components/text-image-split";
// Styles
import s from "./page.module.css";
import ThreeFeatures from "./components/three-features";

export default function Home({ data }: $TSFixMe) {
	const { heading, videoUrl, infoSections } = data.homepage;

	return (
		<main className={s.root}>
			{/* <pre>
				<code>{JSON.stringify({ heading, videoUrl }, null, 2)}</code>
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
			<ThreeFeatures />

			<div className={s.sectionPlaceholder}>
				<p>Contributing Artists & Project Sponsors</p>
				<p>
					We extend our deepest gratitude to the sponsors who support our vision
					for a greener city, and to the artists who lent their talent and
					passion to create beautiful signage for our installations.
				</p>
				<div style={{ display: "flex" }}>
					<p style={{ width: "20%" }}>[TD LOGO]</p>
					<p style={{ width: "20%" }}>[LUSH LOGO]</p>
					<p style={{ width: "20%" }}>[LONDON ENVIRO NETWORK]</p>
					<p style={{ width: "20%" }}>[WILSON FAMILY FOUNDATION]</p>
					<p style={{ width: "20%" }}>[RICHARDSON FAMILY FUND]</p>
				</div>
			</div>
		</main>
	);
}
