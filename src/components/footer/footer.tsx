import EmailSubscribeForm from "@/components/email-subscribe-form/email-subscribe-form";
import s from "./footer.module.css";
import PrimaryButtonLink from "../primary-button-link";
import VisuallyHidden from "../visually-hidden";

function Footer() {
	return (
		<div className={s.root}>
			<div className={s.content}>
				<EmailSubscribeForm />
				<ul className={s.list}>
					<li>
						<PrimaryButtonLink
							href="mailto:pollinatorpathwaysproject@gmail.com"
							target="_blank"
						>
							<span className={s.iconAndText}>
								<img className={s.buttonIcon} alt="" />
								Email us
							</span>
						</PrimaryButtonLink>
					</li>
					<li>
						<PrimaryButtonLink
							href="https://www.instagram.com/pollinatorpathwaysproject/"
							target="_blank"
						>
							<span className={s.iconAndText}>
								<img className={s.buttonIcon} alt="" />
								<VisuallyHidden>Instagram</VisuallyHidden>
							</span>
						</PrimaryButtonLink>
					</li>
					<li>
						<PrimaryButtonLink
							href="https://www.facebook.com/pollinatorpathwaysproject/"
							target="_blank"
						>
							<span className={s.iconAndText}>
								<img className={s.buttonIcon} alt="" />
								<VisuallyHidden>Facebook</VisuallyHidden>
							</span>
						</PrimaryButtonLink>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;
