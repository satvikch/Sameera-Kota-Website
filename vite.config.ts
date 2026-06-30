import path from 'path';
import fs from 'node:fs';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { site } from './content/site';

// Deploy targets:
//   production (default) — served from the apex domain (drsameerakota.com) at root.
//   preview              — GitHub Pages project site under /Sameera-Kota-Website/.
// The GitHub Pages workflow sets VITE_DEPLOY_TARGET=preview; the handover build
// uses the default. Client code derives "is this the indexable production build?"
// from import.meta.env.BASE_URL === '/' (see components/ui/seoConfig.ts), so the
// preview is marked noindex without leaking a separate flag into the bundle.
const isPreview = process.env.VITE_DEPLOY_TARGET === 'preview';

// Sitemap always points at the handover production origin (keep in sync with
// SITE_ORIGIN in components/ui/seoConfig.ts). The preview build is noindex, so a
// production-origin sitemap there is harmless.
const SITE_ORIGIN = 'https://drsameerakota.com';

// Generate dist/sitemap.xml from the same data that drives the routes, so adding
// a procedure (or, later, a blog post / policy page) automatically lists its URL.
function sitemapPlugin(): Plugin {
  const staticRoutes: Array<{ path: string; priority: string }> = [
    { path: '/', priority: '1.0' },
    { path: '/procedures', priority: '0.9' },
    { path: '/contact', priority: '0.9' },
    { path: '/about', priority: '0.8' },
    { path: '/results', priority: '0.5' },
    { path: '/privacy-policy', priority: '0.3' },
    { path: '/medical-disclaimer', priority: '0.3' },
    { path: '/editorial-policy', priority: '0.3' },
  ];
  const procedureRoutes = site.procedures.map((p) => ({
    path: `/procedures/${p.slug}`,
    priority: '0.7',
  }));

  return {
    name: 'generate-sitemap',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(distDir)) return;
      const urls = [...staticRoutes, ...procedureRoutes];
      const body = urls
        .map(
          (u) =>
            `  <url>\n    <loc>${SITE_ORIGIN}${u.path}</loc>\n    <priority>${u.priority}</priority>\n  </url>`
        )
        .join('\n');
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
      fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf-8');
    },
  };
}

export default defineConfig({
  base: isPreview ? '/Sameera-Kota-Website/' : '/',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react(), sitemapPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
