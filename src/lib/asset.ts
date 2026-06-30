// Prefixes static asset paths (e.g. images in /public) with the basePath so
// they resolve correctly when the site is served from a sub-path on GitHub
// Pages. next/link and next/image handle basePath automatically, but plain
// <img src="/..."> does not — use this for those.
export const ASSET_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${ASSET_PREFIX}${path}`;
}
