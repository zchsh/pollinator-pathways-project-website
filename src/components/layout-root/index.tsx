import Min100Layout from "../min-100-layout/min-100-layout";
import Footer from "../footer/footer";
import SiteHeader from "../site-header/site-header";
import NavBar from "../nav-bar/nav-bar";
import { PropsWithChildren } from "react";

export default function LayoutRoot({
	children,
	footer,
}: PropsWithChildren<{ footer: $TSFixMe }>) {
	return (
		<Min100Layout footer={<Footer {...footer} />}>
			<SiteHeader />
			<div style={{ zIndex: 1 }}>
				<NavBar />
			</div>
			<div style={{ zIndex: 0 }}>{children}</div>
		</Min100Layout>
	);
}
