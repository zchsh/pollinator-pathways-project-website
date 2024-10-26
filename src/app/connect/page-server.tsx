import { ContactForm } from "./components/contact-form";
import PagePlaceholder from "@/components/page-placeholder/page";
import PrimaryButtonLink from "@/components/primary-button-link";
import { Placeholder } from "@/components/placeholder";
import Spacer from "@/components/spacer";

export default function PlaceholderPage({ data }: { data: $TSFixMe }) {
	const { email, emailLinkText, emailSubject } = data.connect;
	return (
		<>
			<PagePlaceholder name="Connect">
				<Placeholder>Contact Form</Placeholder>
				<ContactForm />
				<Placeholder>Volunteer With Us</Placeholder>
				<Placeholder>Builders, Writes, Gardeners</Placeholder>
				<Placeholder>
					<>
						<div>Questions? Email us</div>
						<pre>
							<code>
								{JSON.stringify(
									{ email, emailLinkText, emailSubject },
									null,
									2
								)}
							</code>
						</pre>
						<Spacer h="2rem" />
						<hr />
						<Spacer h="2rem" />
						<PrimaryButtonLink href={`mailto:${email}?subject=${emailSubject}`}>
							{emailLinkText}
						</PrimaryButtonLink>
					</>
				</Placeholder>
				<Placeholder>Participate in Pollinator Map</Placeholder>
			</PagePlaceholder>
		</>
	);
}
