import Link from "next/link";
import EmailSubscribeForm from "@/components/email-subscribe-form/email-subscribe-form";
import s from "./page.module.css";

export default function Home({ data }: $TSFixMe) {
	// const { homestring, homeimage, photo_sections } = data.homepage;

	return (
		<main className={s.root}>
			<div className={s.sectionPlaceholder}>
				<p>Pollinator Pathways Project</p>
				<p>A non-profit helping to educate the public about pollinators.</p>
			</div>
			<div className={s.sectionPlaceholder}>
				<p>{`[VIDEO]`}</p>
			</div>
			<div className={s.sectionPlaceholder}>
				<p>
					Subscribe to our Monthly Newsletter for Local Updates, Announcements,
					and Contests!
				</p>
				<EmailSubscribeForm />
			</div>
			<div className={s.sectionPlaceholder}>
				<p>
					Pollinators keep ecosystems alive, donating helps us build more
					pollinators gardens for them, your help make this all happen.
				</p>
			</div>
			<div className={s.sectionPlaceholder}>
				<p>
					Interested in creating a pollinator garden for your backyard, within
					your community, or at your workplace? We are here to help.
				</p>
				<p>
					<Link
						href="mailto:pollinatorpathwaysproject@gmail.com"
						target="_blank"
					>
						pollinatorpathwaysproject@gmail.com
					</Link>
				</p>
			</div>
			<div className={s.sectionPlaceholder}>
				<p>We&apos;re on Instagram! Follow us to find out more!</p>
				<Link
					href="https://www.instagram.com/pollinatorpathwaysproject/"
					target="_blank"
				>
					Instagram
				</Link>
			</div>

			{/* <div className={s.placeholder}>
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
			</div> */}
		</main>
	);
}
