// Components
import Spacer from "@/components/spacer";
import OverflowStripe from "./components/overflow-stripe";
import SplitSection from "./components/split-section";
import VideoHero from "./components/video-hero";
// Styles
import s from "./page.module.css";

export default function Home({ data }: $TSFixMe) {
	// const { homestring, homeimage, photo_sections } = data.homepage;

	return (
		<main className={s.root}>
			<VideoHero
				videoSrc={"/pollinator-pathways-video.mp4"}
				heading={
					"A grassroots organization helping to educate the public about pollinators."
				}
			/>
			<Spacer h="2rem" />
			<div className={s.hideOverflow}>
				<SplitSection
					firstSection={
						<img
							className={s.splitImage}
							width="480"
							height="320"
							src="https://plchldr.co/i/480x320?&bg=DDDDDD&fc=666666"
							alt=""
						/>
					}
					secondSection={
						<>
							<OverflowStripe
								overflow="right"
								stripeSlot={<div className={s.stripeBackground} />}
							>
								<h2 className={s.stripeHeading}>
									Pollinators keep ecosystems alive
								</h2>
							</OverflowStripe>
							<p>
								Donating helps us build more gardens, and keep our ecosystems
								healthy. Your help makes this all happen.
							</p>
							<a href="https://www.example.com">Donate</a>
						</>
					}
				/>
			</div>
			<Spacer h="2rem" />
			<div className={s.hideOverflow}>
				<SplitSection
					flipOrder
					firstSection={
						<img
							className={s.splitImage}
							width="480"
							height="320"
							src="https://plchldr.co/i/480x320?&bg=DDDDDD&fc=666666"
							alt=""
						/>
					}
					secondSection={
						<>
							<OverflowStripe
								overflow="left"
								stripeSlot={<div className={s.stripeBackground} />}
							>
								<h2 className={s.stripeHeading}>Why do pollinators matter?</h2>
							</OverflowStripe>

							<p>
								Pollinator species are responsible for 1 out of every 3 bites of
								food we eat. Pollination is a crucial process in the
								reproductive system of most flowering plants. These plants:
							</p>
							<ul>
								<li>Supply nearly all our fruits, vegetables, and nuts</li>
								<li>
									Supply half the world’s natural oils, fibres, and raw
									materials
								</li>
								<li>Prevent soil erosion</li>
								<li>Increase carbon sequestration</li>
							</ul>
							<p>
								A healthy ecosystem of pollinator species is incredibly
								important not just for the species themselves, but for humanity
								as well.
							</p>
						</>
					}
				/>
			</div>
			<Spacer h="2rem" />
			<div className={s.hideOverflow}>
				<SplitSection
					firstSection={
						<img
							className={s.splitImage}
							width="480"
							height="320"
							src="https://plchldr.co/i/480x320?&bg=DDDDDD&fc=666666"
							alt=""
						/>
					}
					secondSection={
						<>
							<OverflowStripe
								overflow="right"
								stripeSlot={<div className={s.stripeBackground} />}
							>
								<h2 className={s.stripeHeading}>
									What are pollinator pathways?
								</h2>
							</OverflowStripe>

							<p>
								Pollinator pathways are interconnected green areas where
								pollinators can find food and shelter and go about their
								day-to-day pollination.
							</p>
							<p>
								These areas allow species such as birds, bees, bats,
								butterflies, beetles, and other small mammals to travel safely
								through cities and neighbourhoods, carrying pollen between
								plants.
							</p>
							<p>
								Without these pathways, it’s difficult for pollinators to
								survive. Our aim is to help pollinating species by encouraging
								the public to plant more native flower species.
							</p>
						</>
					}
				/>
			</div>
			<Spacer h="2rem" />
			<div style={{ display: "flex" }}>
				<div className={s.sectionPlaceholder} style={{ width: "33.3%" }}>
					<p>[ICON]</p>
					<p>Start your garden</p>
					<p>
						Interested in creating a pollinator garden for your backyard or
						within your community? Our kits are one way to get started!
					</p>
					<p>[Browse garden kits]</p>
				</div>
				<div className={s.sectionPlaceholder} style={{ width: "33.3%" }}>
					<p>[ICON]</p>
					<p>Work with use</p>
					<p>
						For larger projects for your community or workplace, we can help
						plan and plant gardens on a case by case basis. We do charge a fee
						for these services.
					</p>
					<p>[Help me plan]</p>
				</div>
				<div className={s.sectionPlaceholder} style={{ width: "33.3%" }}>
					<p>[ICON]</p>
					<p>Sponsor us</p>
					<p>
						Interested in supporting our vision, within your community, or at
						your workplace? We’re here to help!
					</p>
					<p>[Get in touch]</p>
				</div>
			</div>

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
