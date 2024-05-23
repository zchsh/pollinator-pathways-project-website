import Footer from "@/components/footer/footer";
import Min100Layout from "@/components/min-100-layout/min-100-layout";
import NavBar from "@/components/nav-bar/nav-bar";
import { Inter } from "next/font/google";
import "../styles/reset.css";
import "../styles/globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Pollinator Pathways Project | London",
	description:
		"Pollinator Pathways Project is the London, Ontario chapter of a movement started in 2007 by Sarah Bergmann.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Min100Layout footer={<Footer />}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Link href="/" tabIndex={-1}>
							<span
								style={{
									display: "block",
									width: "100px",
									height: "100px",
									border: "1px solid magenta",
								}}
							>
								LOGO
							</span>
						</Link>
						<h1 style={{ border: "1px solid magenta" }}>
							<Link href="/">Pollinator Pathways Project</Link>
						</h1>
					</div>
					<NavBar />
					{children}
				</Min100Layout>
			</body>
		</html>
	);
}
