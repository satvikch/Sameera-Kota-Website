/**
 * Resolve a local public asset (e.g. "/dr-sameera-portrait.jpg") against the
 * deploy base, so it works on both the apex domain and the preview subpath.
 * External http(s) URLs pass through unchanged.
 *
 * NOTE: lives in a component module (not content/site.ts), because site.ts is
 * imported by vite.config.ts at config-load time, where import.meta.env is
 * undefined.
 */
export function assetUrl(url?: string): string {
  if (!url) return '';
  if (/^https?:\/\//.test(url)) return url;
  return import.meta.env.BASE_URL + url.replace(/^\/+/, '');
}
