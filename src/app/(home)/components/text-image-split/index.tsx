// Third Party
import { PropsWithChildren } from "react";
// Components
import SplitSection from "../split-section";
import OverflowStripe from "../overflow-stripe";
// Styles
import s from "./style.module.css";

/**
 * TODO: add component description.
 */
export default function TextImageSplit({
	heading,
	image,
	children,
	flipOrder = false,
}: PropsWithChildren<{ heading: string; image: string; flipOrder?: boolean }>) {
	return (
		<div className={s.hideOverflow}>
			<SplitSection
				flipOrder={flipOrder}
				firstSection={
					<img
						className={s.splitImage}
						width="480"
						height="320"
						src={image}
						alt=""
					/>
				}
				secondSection={
					<>
						<OverflowStripe
							overflow={flipOrder ? "left" : "right"}
							stripeSlot={<div className={s.stripeBackground} />}
						>
							<h2 className={s.stripeHeading}>{heading}</h2>
						</OverflowStripe>
						<div className={s.children}>{children}</div>
					</>
				}
			/>
		</div>
	);
}
