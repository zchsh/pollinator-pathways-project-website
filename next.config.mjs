/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/admin",
				destination: "https://p3-website-editable.vercel.app/admin",
				permanent: false,
			},
		];
	},
	images: {
		domains: ["assets.tina.io"],
	},
};

export default nextConfig;
