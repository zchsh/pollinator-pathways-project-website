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
		</PagePlaceholder>
	);
}
