/** Empty on localhost and user/organization pages, /repo-name on project pages. */
export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const asset = (path: string) => `${siteBasePath}${path.startsWith('/')?path:'/'+path}`;
