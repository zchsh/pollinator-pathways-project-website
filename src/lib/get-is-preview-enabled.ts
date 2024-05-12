import { draftMode } from "next/headers";

export default function getIsPreviewEnabled() {
	const { isEnabled } = draftMode();
	const isLocalDev = process.env.NODE_ENV === "development";
	return isLocalDev || isEnabled;
}
