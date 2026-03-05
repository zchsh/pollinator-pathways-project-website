import path from "path";
import sharp from "sharp";
// Lib
import { getIsEditableDeployment } from "@/lib/get-is-editable-deployment";
import { getBaseUrl } from "@/lib/get-base-url";
// Types
import type { CSSProperties } from "react";
import type { Metadata } from "next";
// Font faces
import { Inter, Orelega_One, Lato } from "next/font/google";
// Styles
import "../styles/reset.css";
import "../styles/custom-properties.css";
import "../styles/globals.css";

const baseUrl = getBaseUrl();

const inter = Inter({ subsets: ["latin"] });
const gFontLato = Lato({ weight: "400", subsets: ["latin"] });
const orelegaOne = Orelega_One({ weight: "400", subsets: ["latin"] });

const fontFamilyCssVariables = {
  "--font-display": `${orelegaOne.style.fontFamily}`,
  "--font-body": `${inter.style.fontFamily}`,
} as CSSProperties;

const isEditable = getIsEditableDeployment();

const siteTitle = "Pollinator Pathways Project";
const siteDescription =
  "Pollinator Pathways Project is a grassroots community organization started in London, Canada that educates how to grow a pollinator garden.";

const ogImageUrl = "/opengraph-image.jpeg";
const ogImageFilePath = path.join(process.cwd(), "public", ogImageUrl);

export async function generateMetadata(): Promise<Metadata> {
  // Get the width and height of the image using sharp.js
  const { width, height } = await sharp(ogImageFilePath).metadata();
  const ogImage = { url: baseUrl + ogImageUrl, width, height };
  //
  const metadata = {
    title: siteTitle,
    description: siteDescription,
    robots: {
      index: isEditable ? false : true,
    },
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: baseUrl,
      siteName: "Pollinator Pathways Project",
      images: [ogImage],
      locale: "en_CA",
      type: "website",
    },
  };
  return metadata;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={fontFamilyCssVariables} className={gFontLato.className}>
        {children}
      </body>
    </html>
  );
}
