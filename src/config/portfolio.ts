/** Edit only this value to choose the public homepage design.
 *  classic = V1 warm editorial / evolved = V2 lime editorial / dark = V3 amber night.
 *  Pushing this change automatically redeploys GitHub Pages.
 *  The visitor sees no version chooser. Unlinked preview routes remain noindex.
 */
export type PortfolioEdition = 'classic' | 'evolved' | 'dark';
export const ACTIVE_EDITION: PortfolioEdition = 'dark';
