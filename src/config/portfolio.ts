/** Edit only this value to choose the public homepage design.
 *  classic = V1 warm editorial / evolved = V2 lime editorial / dark = V3 amber night / fieldnotes = V4 field journal.
 *  Pushing this change automatically redeploys GitHub Pages.
 *  The visitor sees no version chooser. Unlinked preview routes remain noindex.
 */
export const EDITIONS = ['classic', 'evolved', 'dark', 'fieldnotes'] as const;
export type PortfolioEdition = (typeof EDITIONS)[number];
export const ACTIVE_EDITION: PortfolioEdition = 'dark';
