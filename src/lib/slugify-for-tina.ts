/**
 * Given a string, which may be undefined,
 * Return a slug suitable for use in TinaCMS.
 *
 * @param {string} title
 * @returns {string}
 */
export function slugifyForTina(title: string | undefined): string {
	const dateNow = new Date();
	const yyyymmdd = dateNow.toISOString().substring(0, 10);
	const hhmmss = dateNow.toISOString().substring(11, 19).replace(/:/g, "-");
	const slugFallback = `${yyyymmdd}-at-${hhmmss}`;
	return `${(title ?? slugFallback)
		.toLowerCase()
		.replace(/[^a-z0-9]/g, "-")
		// Replace multiple dashes with a single dash
		.replace(/-+/g, "-")}`;
}
