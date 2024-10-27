import { ContactForm } from "./components/contact-form";
import PagePlaceholder from "@/components/page-placeholder/page";
import PrimaryButtonLink from "@/components/primary-button-link";
import { Placeholder } from "@/components/placeholder";
import Spacer from "@/components/spacer";

const ADMIN_EMAIL = "hi@zch.sh";
const EMAIL_SUBJECT = "Hello from your website!";

export default function ConnectPage() {
	return (
		<>
			<PagePlaceholder name="Connect">
				<Placeholder name="Contact Form">
					<ContactForm />
				</Placeholder>
				<Placeholder name="Volunteer With Us" />
				<Placeholder name="Builders, Writes, Gardeners" />
				<Placeholder name="Questions? Email us">
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							maxWidth: "30rem",
							margin: "0 auto",
							padding: "1rem",
						}}
					>
						<div style={{ textAlign: "center" }}>Questions? Email us</div>
						<Spacer h="1rem" />
						<PrimaryButtonLink
							href={`mailto:${ADMIN_EMAIL}?subject=${EMAIL_SUBJECT}`}
						>
							Email us
						</PrimaryButtonLink>
					</div>
				</Placeholder>
				<Placeholder name="Participate in Pollinator Map" />
			</PagePlaceholder>
		</>
	);
}
