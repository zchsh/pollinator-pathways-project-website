import { ContactForm } from "./components/contact-form";
import PagePlaceholder from "@/components/page-placeholder/page";
import PrimaryButtonLink from "@/components/primary-button-link";
import { Placeholder } from "@/components/placeholder";
import Spacer from "@/components/spacer";

const ADMIN_EMAIL = "hi@zch.sh";
const EMAIL_SUBJECT = "Hello from your website!";

export default function PlaceholderPage() {
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
						<Spacer h="2rem" />
						<hr />
						<Spacer h="2rem" />
						<PrimaryButtonLink
							href={`mailto:${ADMIN_EMAIL}?subject=${EMAIL_SUBJECT}`}
						>
							Email us
						</PrimaryButtonLink>
					</>
				</Placeholder>
				<Placeholder>Participate in Pollinator Map</Placeholder>
			</PagePlaceholder>
		</>
	);
}
