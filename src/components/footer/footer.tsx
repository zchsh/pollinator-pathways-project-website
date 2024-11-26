import EmailSubscribeForm from "@/components/email-subscribe-form/email-subscribe-form";
import s from "./footer.module.css";
import PrimaryButtonLink from "../primary-button-link";
import VisuallyHidden from "../visually-hidden";

/**
 * TODO: remove placeholders once all pages are wired up
 */
function Footer({
	subscribeHeading = "Subscribe to our newsletter",
	subscribePlaceholder = "you@mail.com",
	links = [],
}: $TSFixMe) {
	return (
		<>
			<div className={s.root}>
				<div className={s.content}>
					<EmailSubscribeForm
						subscribeHeading={subscribeHeading}
						subscribePlaceholder={subscribePlaceholder}
					/>
					<ul className={s.list}>
						{links.map(
							({ text, url, icon, showIconOnly }: $TSFixMe, idx: number) => (
								<li key={idx}>
									<PrimaryButtonLink
										href={url}
										target="_blank"
										className={showIconOnly ? s.iconOnlyButton : ""}
									>
										<span className={s.iconAndText}>
											<img className={s.buttonIcon} src={icon} alt="" />
											{showIconOnly ? (
												<VisuallyHidden>{text}</VisuallyHidden>
											) : (
												text
											)}
										</span>
									</PrimaryButtonLink>
								</li>
							)
						)}
						{/* <li>
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
					</li> */}
					</ul>
				</div>
			</div>
			<div className={s.lowerFooterBarRoot}>
			<div className={s.lowerFooterBar}>
				<div>© 2024</div>
				<a href="/admin/index.html" className={s.lowerFooterBarLink}>Admin</a>
			</div>
			</div>
		</>
	);
}

export default Footer;
