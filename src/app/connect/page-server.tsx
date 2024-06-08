import PagePlaceholder from "@/components/page-placeholder/page";
import PrimaryButtonLink from "@/components/primary-button-link";
import Spacer from "@/components/spacer";

export default function Placeholder({ data }: { data: $TSFixMe }) {
	const { email, emailLinkText, emailSubject } = data.connect;
	return (
		<PagePlaceholder name="Connect">
			<pre>
				<code>
					{JSON.stringify({ email, emailLinkText, emailSubject }, null, 2)}
				</code>
			</pre>
			<Spacer h="2rem" />
			<hr />
			<Spacer h="2rem" />
			<PrimaryButtonLink href={`mailto:${email}?subject=${emailSubject}`}>
				{emailLinkText}
			</PrimaryButtonLink>
		</PagePlaceholder>
	);
}
