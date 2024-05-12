import Footer from "@/components/footer/footer";
import Min100Layout from "@/components/min-100-layout/min-100-layout";
import NavBar from "@/components/nav-bar/nav-bar";
import { Inter } from "next/font/google";
import "../styles/reset.css";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "TODO Pollinator Pathways Project",
	description: "TODO add a better metadata description to the site",
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
					<NavBar />
					{children}
				</Min100Layout>
			</body>
		</html>
	);
}
