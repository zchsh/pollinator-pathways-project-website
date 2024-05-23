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
					your community, or at your workplace? We&apos;re here to help.
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
				<p>We&apos;re on Instagram! Follow us for our latest updates.</p>
				<Link
					href="https://www.instagram.com/pollinatorpathwaysproject/"
					target="_blank"
				>
					Instagram
				</Link>
			</div>
		</main>
	);
}
