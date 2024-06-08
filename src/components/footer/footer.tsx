import EmailSubscribeForm from "@/components/email-subscribe-form/email-subscribe-form";
import s from "./footer.module.css";
import Link from "next/link";

function Footer() {
	return (
		<div className={s.root}>
			<div className={s.content}>
				<EmailSubscribeForm />
				<ul className={s.list}>
					<li>
						<Link
							href="mailto:pollinatorpathwaysproject@gmail.com"
							target="_blank"
						>
							pollinatorpathwaysproject@gmail.com
						</Link>
					</li>
					<li>
						<Link
							href="https://www.instagram.com/pollinatorpathwaysproject/"
							target="_blank"
						>
							Instagram
						</Link>
					</li>
					<li>
						<Link
							href="https://www.facebook.com/pollinatorpathwaysproject/"
							target="_blank"
						>
							Facebook
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;
