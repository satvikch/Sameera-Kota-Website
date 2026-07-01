# Handover — Dr. Sameera K website rework

This rework responds to the TechDr SEO/technical audit. The biggest change is architectural:
the site used to be a **client-rendered SPA** whose page content and per-route meta were invisible
to search crawlers and AI engines (they only saw an empty `<div id="root">`). It is now a
**prerendered static site** — every route ships as a real HTML file with its content, title, meta,
canonical, and JSON-LD baked in.

> Before launch, clear every item in **`DOCTOR_VERIFICATION.md`** — those are facts only Dr. Sameera
> can confirm, and a wrong fact on a medical site is worse than a missing one.

---

## What changed

| Area | Before | After |
|------|--------|-------|
| Rendering | CSR SPA (`BrowserRouter`), content JS-only | **Static prerender** via `vite-react-ssg` — one HTML file per route, hydrated on the client |
| Tailwind | CDN runtime engine (render-blocking, FOUC, not for production) | **Compiled at build** (`tailwind.config.js` + PostCSS); ~38 KB CSS |
| Per-route SEO | One global `<title>`/meta on every URL | **Per-route** `<title>`, description, canonical, OG/Twitter via `components/ui/Seo.tsx` |
| Structured data | Global Physician+Clinic only; `medicalSpecialty` used an invalid enum | Fixed `@graph` (valid `Surgical` enum, E.164 phone, `hasCredential`, `areaServed`, `WebSite` node) **plus per-route** `MedicalProcedure`, `FAQPage`, `BreadcrumbList`, `ItemList` |
| Sitemap | Hand-written, drifted from routes | **Generated at build** from routes + `content/site.ts` (15 URLs) |
| Trust/EEAT | — | Authorship **byline**, visible **breadcrumbs**, self-contained **entity-bio** paragraph (GEO) |
| Compliance | Disclaimer in footer only | Routed **/privacy-policy (DPDP Act 2023)**, **/medical-disclaimer**, **/editorial-policy** |
| Accessibility | Primary CTA failed WCAG AA (3.28:1); SPA nav stranded focus | CTA now `rose-500` (4.6:1 AA); **route-change focus + live-region announcer** |
| Social card | `og-image.jpg` 404’d | Real **1200×630 `og-image.jpg`** generated (source: `og-image.svg`) |

Audit items deliberately **not** done, with reasons: the “Piles in Kothapet / Hernia near
Dilsukhnagar / …” geo pages (doorway-page spam risk — replaced with `areaServed` schema), and any
`AggregateRating`/fabricated star reviews (Google-policy + Indian consumer-law violation for YMYL).
See the architecture plan for the full rationale.

---

## How to deploy

The build switches behaviour by `VITE_DEPLOY_TARGET`:

| Target | Command | `base` | Indexable? | Use |
|--------|---------|--------|-----------|-----|
| **production (handover)** | `npm run build` | `/` (apex root) | yes | the real site at `drsameerakota.com` |
| **preview** | `VITE_DEPLOY_TARGET=preview npm run build` | `/Sameera-Kota-Website/` | **no** (noindex) | the GitHub Pages staging copy |

The GitHub Actions workflow (`.github/workflows/deploy.yml`) already sets `preview` so the staging
URL never competes with the real site in Google.

### Going live on drsameerakota.com (production)

1. `npm ci && npm run build` (no `VITE_DEPLOY_TARGET`) → outputs `dist/`.
2. Deploy `dist/` to the host that serves `drsameerakota.com` **at the root**.
3. **Host must serve clean URLs** — a request to `/about` must return `/about.html` (GitHub Pages,
   Netlify, Cloudflare Pages, and Vercel all do this; verify on yours). `dist/404.html` is the
   not-found page.
4. If hosting on **GitHub Pages with the custom domain**: add a `public/CNAME` file containing
   `drsameerakota.com`, point the registrar’s DNS (apex `A` records to GitHub’s IPs, or `www`
   `CNAME`), and enable “Enforce HTTPS”. *(Only do this once you actually control the domain — the
   current preview repo must NOT claim `drsameerakota.com`.)*
5. The canonical/OG/schema/sitemap origin is fixed to `https://drsameerakota.com` in
   `components/ui/seoConfig.ts` (`SITE_ORIGIN`) and `vite.config.ts`. If the final domain differs,
   change it in **both** places.

### Post-launch SEO checklist

- [ ] Submit `https://drsameerakota.com/sitemap.xml` to **Google Search Console**.
- [ ] Validate structured data with the **Rich Results Test**; validate the social card with the
      **Meta Sharing Debugger** and **Twitter Card Validator**.
- [ ] Claim/complete **Google Business Profile**, **Practo**, and the **Omni Hospitals** listing with
      NAP (name/address/phone) matching the site exactly; add their URLs to `sameAs` in
      `index.html` and to the footer (see `DOCTOR_VERIFICATION.md` §3).
- [ ] Run **PageSpeed Insights**; replace the stock procedure images (below) to improve LCP.

---

## Recommended follow-ups (not in this pass)

Roughly in priority order:

1. **Replace stock procedure images.** All 9 are remote `images.pexels.com` placeholders (flagged
   “illustrative” in `content/site.ts`) — a third-party-LCP, privacy, and longevity risk. Self-host
   real WebP images with explicit `width`/`height`. Same for the doctor portrait and clinic gallery.
2. **Deeper accessibility polish** (the contrast + route-focus essentials are done):
   `Modal` focus-trap + return-focus; `BeforeAfterSlider` keyboard (Home/End/arrows) + `aria-valuetext`
   + restore its focus ring; `FAQAccordion` panel `role="region"` + `aria-pressed` filters;
   `BookingForm` `aria-describedby` linking errors + focus-first-error on submit; mobile-drawer focus trap.
3. **Telugu WhatsApp CTA.** A strong local conversion lever, but the exact Telugu string needs a
   native speaker to verify orthography (the audit’s draft contains a zero-width-joiner that renders
   inconsistently). Add the label (wrapped in `lang="te"` + a Telugu system-font fallback) only after
   sign-off — do not ship machine-translated medical text.
4. **Top up the two thinnest procedure pages** (diabetic-foot, soft-tissue) to ~600 words and add
   explicit **Symptoms / when to see a surgeon** and **How it’s diagnosed** sections (the
   `ProcedureDetailed` type can take optional `symptoms`/`diagnosis` fields). FAQ answers can grow to
   the 60–100-word range the audit suggests; the `FAQPage` schema already reads whatever is in `faqs`.
5. **Optional: a data-driven blog** (`/blog` + `/blog/:slug`) for topical authority and GEO — mirror
   the existing procedures pattern (a `blog` array in `content/site.ts`, no CMS needed). The audit
   suggested 6 patient-education posts.

---

## Project map (for the next developer)

- `content/site.ts` — **single source of truth** for all copy, the doctor, procedures, FAQ, legal pages.
- `App.tsx` — route table consumed by `vite-react-ssg` (`getStaticPaths` enumerates procedure slugs).
- `index.tsx` — `ViteReactSSG` entry; imports the compiled CSS.
- `index.html` — global head + the site-wide JSON-LD `@graph` (present on every prerendered page).
- `components/ui/Seo.tsx` — per-route head (uses `vite-react-ssg`’s `<Head>`); `seoConfig.ts` holds
  `SITE_ORIGIN`; `jsonld.ts` builds per-route schema.
- `vite.config.ts` — `base` env-switch + the build-time **sitemap generator** plugin.
- `tailwind.config.js` / `postcss.config.js` — compiled Tailwind (palette tokens mirror `index.css` vars).

Build: `npm run build` · Type-check: `npx tsc --noEmit` · Dev: `npm run dev` (CSR, fast HMR).
