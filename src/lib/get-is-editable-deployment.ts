/**
 * Preview mode allows TinaCMS to preview changes to the site as they're made.
 * However, it also means we ship a bunch of extra code to support editing,
 * which has significant performance implications.
 *
 * This function is used to determine if we should enable editing, based on the
 * presence of a related environment variable. We also enable editing in
 * development mode, as performance is less of a concern.
 *
 * @returns {boolean} Returns true if this deployment is meant to be editable.
 */
export function getIsEditableDeployment(): boolean {
	// If the related env variable is set, the we want an "editable" deployment
	const isEditable = process.env.NEXT_PUBLIC_EDITABLE === "true";
	// If we're in development mode, we'll enable editing, even if env is not set
	const isLocalDev = process.env.NODE_ENV === "development";
	// Return true if we want to enable preview mode
	return isLocalDev || isEditable;
}
