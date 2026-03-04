// Components
import PagePlaceholder from "@/components/page-placeholder/page";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Placeholder } from "@/components/placeholder";
// Styles
import s from "./style.module.css";

export default function FaqPage({ data }: $TSFixMe) {
	const { faqSections } = data.faq;
	return (
		<PagePlaceholder name="FAQ">
			{faqSections && faqSections.length
				? faqSections.map(({ heading, body }: $TSFixMe) => {
						return (
							<Placeholder key={heading} name="FAQ Section">
								<section className={s.section}>
									<h2 className={s.sectionHeading}>{heading}</h2>
									<TinaMarkdown content={body} />
								</section>
							</Placeholder>
						);
				  })
				: null}
			<Placeholder name="FAQ Contact Form">
				<div style={{ margin: "0 auto", maxWidth: "400px" }}>
					<h2 style={{ textAlign: "center" }}>Ask us a question</h2>
					<br />
					<input style={{ width: "100%" }} placeholder="Name" />
					<br />
					<br />
					<input style={{ width: "100%" }} placeholder="Email" />
					<br />
					<br />
					<textarea style={{ width: "100%" }} placeholder="Message" />
					<br />
					<br />
				</div>
			</Placeholder>
		</PagePlaceholder>
	);
}
