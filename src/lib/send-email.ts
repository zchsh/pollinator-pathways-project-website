import sgMail from "@sendgrid/mail";

/**
 * Set up the SendGrid API key.
 */
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (typeof SENDGRID_API_KEY !== "string") {
	throw new Error(
		"Error in sendMail: Missing SENDGRID_API_KEY environment variable. Please provide a SENDGRID_API_KEY in order for the contact form to work."
	);
}
sgMail.setApiKey(SENDGRID_API_KEY);

/**
 * Send an email.
 *
 * Currently wraps SendGrid's send method. In theory, we could drop in
 * any email sending library or service here instead of SendGrid.
 * SendGrid seemed convenient for now, since it has a decent free tier.
 */
export async function sendMail({
	to,
	from,
	subject,
	html,
}: {
	to: string;
	from: string;
	subject: string;
	html: string;
}): Promise<
	{ err: null; status: "success" } | { err: string; status: "error" }
> {
	const [clientResponse] = await sgMail.send({
		to,
		from,
		subject,
		html,
	});
	const wasSuccessfulSend = clientResponse.statusCode === 202;
	if (wasSuccessfulSend) {
		return { err: null, status: "success" };
	} else {
		const errorMessage = clientResponse.body.toString() || "No body";
		return { err: errorMessage, status: "error" };
	}
}
