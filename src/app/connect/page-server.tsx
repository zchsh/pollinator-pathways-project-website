import { ContactForm } from "./components/contact-form";
import PagePlaceholder from "@/components/page-placeholder/page";
import PrimaryButtonLink from "@/components/primary-button-link";
import { Placeholder } from "@/components/placeholder";
import Spacer from "@/components/spacer";
import ThreeFeatures from "./components/three-features";

const ADMIN_EMAIL = "hi@zch.sh";
const EMAIL_SUBJECT = "Hello from your website!";

export default function ConnectPage() {
  return (
    <>
      {/*<PagePlaceholder name="Connect">*/}
      {/*<Placeholder name="Contact Form">
					<ContactForm />
				</Placeholder>*/}
      <Placeholder name="Connect with us" />
      <Placeholder name="Volunteer opportunities" />
      <Placeholder name="Builders, Writes, Gardeners" />
      <ThreeFeatures
        items={[
          {
            iconSrc: "/uploads/Home Page/icon-house.png",
            title: "Builders",
            text: "We are looking for builders to help us with our pollinator gardens.  We are looking for experienced, and inexperienced alike.  We need help with building pollinator garden planter boxes.  We also have insect hotels to be made, these include bee, butterfly, and other insect homes.  Access to a woodworking shop of sorts is ideal.",
            // linkText: "Browse kits",
            // linkUrl: "/pollinator-kits",
          },
          {
            iconSrc: "/uploads/Home Page/icon-potted-plant.png",
            title: "Writers",
            text: "We are looking for a writer to join our community group,  someone who can contribute a blog article (300-500 words) once a month or a social media post once a week. As a writer, you need not have extensive experience with writing. Ideally, you should have some interest in environmental conservation and protection of wild species.",
            // linkText: "Help me plan",
            // linkUrl: "/connect",
          },
          {
            iconSrc: "/uploads/Home Page/icon-handshake.png",
            title: "Gardeners",
            text: "We are looking for volunteers to help keep our public gardens beautiful and pollinators happy by maintaining a good mix of pollinator plants and keeping the gardens tidy and watered. Gardener volunteers may help with weeding, watering, and planting. No experience necessary, we look forward to hearing from you!",
            // linkText: "Get in touch",
            // linkUrl: "/connect",
          },
        ]}
      />
      {/*<Placeholder name="Questions? Email us">
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
				</Placeholder>*/}
      {/*<Placeholder name="Participate in Pollinator Map" />*/}
      {/*</PagePlaceholder>*/}
    </>
  );
}
