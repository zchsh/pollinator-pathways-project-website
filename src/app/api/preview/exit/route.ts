import { NextApiRequest } from "next";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: NextApiRequest) {
	if (typeof request.url !== "string") {
		throw new Error("Expected request.url to be a string");
	}
	const { searchParams } = new URL(request.url);
	const slug = searchParams.get("slug");

	draftMode().disable();
	return redirect(`/${slug}`);
}
