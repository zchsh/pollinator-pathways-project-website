/**
 * Preview mode allows TinaCMS to preview changes to the site as they're made.
 * However, it also means we ship a bunch of extra code to support this...
 * So we want to avoid enabling this UNLESS we're actually editing the site!
 * The two scenarios where we are editing the site are:
 *
 * First: if we're in development mode. This is relatively straightforward to
 * check for, as we can just look at the `NODE_ENV` environment variable.
 *
 * Second, if the user is logged in to TinaCMS. This is a bit more complicated.
 *
 * To detect this, we've set up some configuration in `tina/config.ts` under
 * the `admin.auth` section. When a user logs in (`onLogin`), we make a request
 * to the API route `/api/preview/enter`, and this sets a cookie that enables
 * "draftMode". When a user logs out (`onLogout`), we make a request to the API
 * route `/api/preview/exit`, and this removes the "draftMode" cookie.
 *
 * Finally, here in this function, we can call `draftMode()` to check if the
 * cookie is set. If it is, we know the user is logged in and we should
 * enable preview mode, even if it'll slow down the site a bit.
 *
 * TODO: may deprecate this in favour of "edit" routes.
 * See `home` page for example... I think that pattern works a lil better?
 *
 * @returns {boolean} Returns true if we should enable preview mode.
 */
export default function getIsPreviewEnabled(): boolean {
	// If the user is logged in to TinaCMS, as indicated by a "draftMode" cookie,
	// then we'll enable the extra client code needed to support preview mode.
	// const { isEnabled } = draftMode();
	// If we're in development mode, we'll also enable preview mode.
	const isLocalDev = process.env.NODE_ENV === "development";
	// If we're in the "editable" deployment, then enable editing
	const isEditable = process.env.NEXT_PUBLIC_EDITABLE === "true";
	// Return true if we want to enable preview mode
	return isLocalDev || isEditable;
}
