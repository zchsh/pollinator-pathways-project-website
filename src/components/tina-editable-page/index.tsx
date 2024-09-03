import getIsPreviewEnabled from "@/lib/get-is-preview-enabled";
import PageClientReusable from "./page-client";

/**
 * A server component that renders a page with the given PageComponent.
 *
 * When `getIsPreviewEnabled` returns true, it renders the page with the
 * `PageClientReusable` component, which uses the `useTina` hook to fetch
 * the page data from TinaCMS. This allows visual editing of the page.
 *
 * When `getIsPreviewEnabled` returns false, it renders the page with the
 * given `PageComponent`. This component may be a server component, in which
 * case we'll have a more efficient page, as unnecessary client-side code
 * will not be rehydrated.
 *
 * @param {object} tinaQueryResult A bundle of Tina { data, query, variables }.
 * @param {function} renderPage The component to render the page with.
 * @returns
 */
export default function TinaEditablePage({
	tinaQueryResult,
	renderPage,
}: $TSFixMe) {
	if (getIsPreviewEnabled()) {
		return <PageClientReusable {...tinaQueryResult} renderPage={renderPage} />;
	} else {
		return renderPage(tinaQueryResult.data);
	}
}
