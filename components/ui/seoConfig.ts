// Single source of truth for the site's public origin and canonical URLs.
//
// IMPORTANT: this is the *handover* production domain, NOT import.meta.env.BASE_URL
// (which is the GitHub Pages project subpath on the preview deploy). Canonicals,
// Open Graph URLs, JSON-LD @ids and the sitemap must all point at the real domain
// the site is handed over to, regardless of where the preview is hosted.
export const SITE_ORIGIN = 'https://drsameerakota.com';

export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-image.jpg`;

// The production handover build is served from the apex root (Vite base '/').
// The GitHub Pages preview is served from '/Sameera-Kota-Website/' and must stay
// out of search indexes so it never competes with the real site. Deriving this
// from BASE_URL means we never ship an indexable preview by accident.
export const isIndexable = import.meta.env.BASE_URL === '/';

/** Build an absolute canonical URL for a route path (e.g. '/about'). */
export function canonical(routePath: string): string {
  if (!routePath || routePath === '/') return `${SITE_ORIGIN}/`;
  const clean = '/' + routePath.replace(/^\/+/, '').replace(/\/+$/, '');
  return `${SITE_ORIGIN}${clean}`;
}
