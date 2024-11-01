import LayoutRoot from "@/components/layout-root";
import PagePlaceholder from "@/components/page-placeholder/page";
import { Placeholder } from "@/components/placeholder";
import getFooterData from "@/lib/get-footer-data";
// Style
import s from "./style.module.css";

const GOOGLE_MAPS_EMBED_HTML = `<iframe src="https://www.google.com/maps/d/embed?mid=1aIPgbjac3YiVZggXbno0U4Mf1JaEsYE&ehbc=2E312F" width="640" height="480"></iframe>`;

export default async function CentralLondonPathwayPage() {
	const footer = await getFooterData();
	return (
		<LayoutRoot footer={footer} pathname="/central-london-pathway">
			<PagePlaceholder name="Central London Pathway">
				<Placeholder name="Announcement">
					<div className={s.maxWidthBlock}>
						<h2>Phase 2 now underway!</h2>
						<p>Pollinator Gardens for Central London</p>
						<p>
							In 2023, Pollinator Pathways Project will begin an initiative to
							install free pollinator gardens for homes, businesses, and
							institutions along the Central London Pathway, expanding on our
							2022 Dundas Street Pathway project. This project is being made
							possible by a donation from Lush Cosmetics.
						</p>
						<p>
							The 13 Central London (Ontario) communities in the Dundas Street
							Corridor that we are targeting are: Blackfriars, Carling Heights,
							Downtown, Hamilton Road, Kensington Village, Midtown, North
							Talbot, OEV, Piccadilly, Riverforks, SoHo, The Smokestack
							District, and Woodfield.
						</p>
						<p>
							<a href="https://forms.gle/E12WKrZ49oDEwZNZA" target="_blank">
								Apply for a free garden
							</a>
						</p>
					</div>
				</Placeholder>
				<Placeholder name="Program Details">
					<div className={s.maxWidthBlock}>
						<h1>Central London Pathway</h1>
						<p>
							This program has officially finished!{" "}
							<a href="/resources/central-london-pathway-project-update.pdf">
								Check out our final update!
							</a>
						</p>
						<p>
							Have you seen small wooden planters in front of businesses and
							services along Dundas St? These planters are part of the Dundas
							Pollinator Pathway!
						</p>
						<p>
							We distributed these planters in May of 2022 with diverse
							combinations of geranium, evening primrose, coreopsis, columbine,
							beardtongue, and monarda. Individual businesses and services may
							have decided to change up the planter contents, adding new plants
							as well. So get outside and discover our planters.
						</p>
						<img
							className={s.pathwayImage}
							src="/images/central-london-pathway/01-grooves.jpeg"
							alt="Grooves"
						/>
						<img
							className={s.pathwayImage}
							src="/images/central-london-pathway/02-addictive-tattoo.jpeg"
							alt="Addictive Tattoo"
						/>
						<img
							className={s.pathwayImage}
							src="/images/central-london-pathway/03-rebel-remedy.jpeg"
							alt="Rebel Remedy"
						/>
						<img
							className={s.pathwayImage}
							src="/images/central-london-pathway/04-mystic-bookshop.jpeg"
							alt="Mystic Bookshop"
						/>
						<img
							className={s.pathwayImage}
							src="/images/central-london-pathway/05-tap.jpeg"
							alt="TAP"
						/>
						<img
							className={s.pathwayImage}
							src="/images/central-london-pathway/06-petrov-bridal.jpeg"
							alt="Petrov Bridal"
						/>
						<img
							className={s.pathwayImage}
							src="/images/central-london-pathway/07-jim-anderson-flowers.jpeg"
							alt="Jim Anderson Flowers"
						/>
					</div>
				</Placeholder>
				<Placeholder name="Our Vision">
					<div className={s.maxWidthBlock}>
						<h2>Our Vision For Central London</h2>
						<p>
							Our project started on Dundas Street and has since spread to
							include 13 communities in Central London! In Phase 1, we
							collaborated with businesses, schools, and other organizations
							along Dundas Street to install permanent native plant gardens and
							planters on their property. By adding pollinator-friendly
							vegetation to London's downtown core, we are building a corridor
							for these species to navigate the most densely urbanized area of
							the city. Our downtown focus for this project also helps us reach
							a large audience to raise awareness of the importance of
							pollinators.
						</p>
						<p>
							To date, we have planted permanent gardens located at Museum
							London, the Western Fair, Covent Garden Market, and the London
							Central Library. We have also distributed 40 small pollinator
							planters to our partnering businesses and services. We are
							currently aiming to create additional permanent gardens at H.B.
							Beal Secondary School, Catholic Central High School, and St.
							Leonard’s Community Services.
						</p>
						<p>
							<a href="/resources/central-london-oct-2023-project-update.pdf">
								Check out our October 2023 Update!
							</a>
						</p>
					</div>
				</Placeholder>
				<Placeholder name="Google Maps Embed">
					<div className={s.maxWidthBlock}>
						<p>
							Check out the map below to see where our gardens and planters are
							located.
						</p>
						<div dangerouslySetInnerHTML={{ __html: GOOGLE_MAPS_EMBED_HTML }} />
					</div>
				</Placeholder>
				<Placeholder name="Sponsors">
					<div className={s.maxWidthBlock}>
						<h2>Contributing Artists and Project Sponsors</h2>
						<p>
							We extend our deepest gratitude to the sponsors who supported our
							vision for a greener city, and to the artists who lent their
							talent and passion to create beautiful signage for our
							installations.
						</p>
						<p>Project Sponsors</p>
						<img
							className={s.projectSponsors}
							alt="TD Friends of the Environment, LUSH, London Environmental Network, Wilson Family Foundation, and the Rick and Carol Richardson Family Fund"
							src="/images/central-london-pathway/central-london-project-sponsors.jpeg"
						/>
					</div>
				</Placeholder>
			</PagePlaceholder>
		</LayoutRoot>
	);
}
