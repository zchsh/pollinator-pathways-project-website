/** @type {import('next').NextConfig} */
const isEditable = process.env.NEXT_PUBLIC_EDITABLE === "true";

const nextConfig = {
	async redirects() {
		const redirectEntries = [];
		if (isEditable) {
			redirectEntries.push({
				source: "/admin",
				destination: "https://p3-website-editable.vercel.app/admin",
				permanent: false,
			});
		}
		return redirectEntries;
	},
	images: {
		domains: ["assets.tina.io"],
	},
};

export default nextConfig;
