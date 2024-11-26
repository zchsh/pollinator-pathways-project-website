// Layout
import getFooterData from "@/lib/get-footer-data";
import LayoutRoot from "@/components/layout-root";
// Utils
import { fetchPhotosList } from "./utils/fetch-photos-list";
import PagePlaceholder from "@/components/page-placeholder/page";

export default async function Page() {
	const photoEntries = await fetchPhotosList();

	const footer = await getFooterData();
	return (
		<LayoutRoot footer={footer} pathname="/photos">
			<PagePlaceholder name="Photos Landing">
				<div style={{ margin: '0 auto', maxWidth: '800px' }}>
					<h1>Featured Photo Albums</h1>
					<p>Take a look below at photos from our team who have helped put up Gardens as well as photos that are publicly submitted to give others an idea of how to structure their own gardens.</p>
					<br/>
					<p>Submit your photos by clicking the button and using the automated email function or directly emailing to pollinatorpathwaysproject@gmail.com</p>
					<br/>
					<a href='mailto:pollinatorpathwaysproject@gmail.com?subject=Photo Submission - Pollinator Garden'>Submit Your Photos</a>
				</div>
				<br />
				<br />
				{photoEntries.map((entry) => {
					return <div key={entry.title} style={{ margin: '0 auto', maxWidth: '800px' }}>
						<h2>{entry.title}</h2>
						{Array.isArray(entry.images) ? <ImageGrid images={entry.images.filter((e) => typeof e === "string")} /> : null}
						{/* <pre>
							<code>{JSON.stringify(entry, null, 2)}</code>
						</pre> */}
						<br />
						<br />
					</div>
				})}
			</PagePlaceholder>
		</LayoutRoot>
	);
}

function ImageGrid({ images }: { images: string[] }) {
	return <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '8px' }}>
		{images.map((image) => {
			return <div key={image} style={{ position: 'relative', border: '1px solid lightgray', width: '240px', height: '240px' }} ><img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={image} /></div>
		})}
	</div>
}
