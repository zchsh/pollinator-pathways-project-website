import { isUserAuthorized } from "@tinacms/auth";
import { NextApiRequest } from "next";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: NextApiRequest) {
	if (typeof request.url !== "string") {
		throw new Error("Expected request.url to be a string");
	}
	const { searchParams } = new URL(request.url);
	const slug = searchParams.get("slug");

	if (typeof slug !== "string") {
		throw new Error("Expected slug to be a string");
	}

	if (process.env.NODE_ENV === "development") {
		draftMode().enable();
	} else {
		const clientID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
		if (typeof clientID !== "string") {
			throw new Error("Expected NEXT_PUBLIC_TINA_CLIENT_ID to be a string");
		}

		const token = searchParams.get("token");
		const isAuthorizedRes = await isUserAuthorized({
			token: `Bearer ${token}`,
			clientID,
		});

		if (isAuthorizedRes) {
			draftMode().enable();
		}
	}

	return redirect(slug);
}
