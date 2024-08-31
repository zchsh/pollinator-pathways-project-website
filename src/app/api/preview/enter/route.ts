// import { isUserAuthorized } from "@tinacms/auth";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
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

		// 2024-08-30
		// Testing out NOT requiring authentication to enter preview mode.
		// If an unauthorized user enters preview mode, they'll have to log in
		// to Tina Cloud to edit anything anyways.

		// const token = searchParams.get("token");
		// const isAuthorizedRes = await isUserAuthorized({
		// 	token: `Bearer ${token}`,
		// 	clientID,
		// });
		// if (isAuthorizedRes) {
		// 	draftMode().enable();
		// }

		draftMode().enable();
	}

	return redirect(slug);
}
