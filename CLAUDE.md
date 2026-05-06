# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page-app marketing website for **Dr. Sameera K** — a consultant general, laparoscopic and laser surgeon practising at **Susheela Hospital, 11-12-147, Road No. 3, SRK Puram, Kothapet, Hyderabad**. She holds **MBBS, MS (General Surgery), FMAS, FISCP** and treats hernia, gallstones, appendicitis, piles / fissures / fistula, breast lumps, thyroid nodules, diabetic foot and soft-tissue abscesses.

Built with React 19, TypeScript, Vite 6, Tailwind CSS (CDN), Framer Motion and Lucide React. Content lives in a single `content/site.ts` file. No backend.

The live reference site is `https://drsameerakota.com` — that is the source of truth for name, clinic, address, phone and email.

## Commands

- **Dev server:** `npm run dev`
- **Production build:** `npm run build` (outputs to `dist/`)
- **Preview build:** `npm run preview`
- **Type check only:** `npx tsc --noEmit`

## Deployment

No CI workflow is checked into the repo yet. The Vite `base` is default (`/`). A `public/404.html` SPA fallback exists so deep-linked routes survive hosts that don't rewrite unknown paths (e.g. GitHub Pages project sites).

## Architecture

A component-split SPA with React Router v6 on a `BrowserRouter`:

```
index.html              — Tailwind CDN + inline config, JSON-LD, fonts, importmap
index.css               — Paper texture, Atlas utilities (leader dots, figure captions, rule lines)
index.tsx               — React root + SPA fallback recovery
App.tsx                 — <BrowserRouter> with 7 routes under <Layout>
types.ts                — Procedure, Condition, ProcessStep, etc.
content/site.ts         — Single source of truth for all copy
components/
  Layout.tsx            — Page shell (emergency banner + header + <Outlet/> + footer + mobile CTA)
  HeaderSticky.tsx      — Top nav (Home / About / Procedures / Results / Contact)
  EmergencyBannerSticky.tsx  — Thin top strip with signal-red dot + emergency phone
  MobileStickyCTA.tsx   — Bottom 3-button sticky bar on mobile
  HeroSplit.tsx         — Anatomical body-diagram hero with numbered pins
  ProceduresBentoGrid.tsx — FeaturedProcedures list + ProcedureCard row
  AboutDoctor.tsx       — Portrait plate + bio (teaser / full variants)
  WhyChooseUs.tsx       — Long-form essay with marginalia
  Process.tsx           — 5-step horizontal flow with inline expand
  TechnologySection.tsx — Equipment table
  TestimonialsCarousel.tsx — Stacked signed block quotes (marked as templates)
  FAQAccordion.tsx      — Ruled-register FAQ with category filter
  ContactSection.tsx    — Letterhead block + intake form + map
  BookingForm.tsx       — Validated WhatsApp intake form
  ClinicGallery.tsx     — Grid of plate-framed clinic photos
  CTABanner.tsx         — Dark ink band used as section break
  Footer.tsx            — Site footer
  ui/
    Button.tsx, Modal.tsx, SectionHeading.tsx, Reveal.tsx, BeforeAfterSlider.tsx, cn.ts
pages/
  HomePage, AboutPage, ProceduresPage, ProcedureDetailPage, ResultsPage, ContactPage, NotFoundPage
public/
  favicon.svg · 404.html · robots.txt · sitemap.xml
CONTENT_AUDIT.md        — Tiered risk list for pre-launch sign-off
```

## Design system

- **Typography:** Bricolage Grotesque (display, variable), Commissioner (body, variable), JetBrains Mono (figures, labels, numerics). All three from Google Fonts.
- **Palette:** `paper-*` (warm ivory), `ink-*` (espresso dark text), `shell-*` (pastel coral-pink primary — per the doctor's brief), `forest-*` (deep surgical-scrubs green), `signal` (single cherry red, emergency only).
- **Motifs:** paper texture (SVG grain overlay), plate corner ticks (`atlas-corner-*`), hairline rules, figure captions (`atlas-figcap`), mono labels for tabular data, section chapter marks (`atlas-chapter`).

## Content Policy — Originality Requirement

All content on this website must be 100% original. Zero tolerance for copying or close paraphrasing from any source — competitor practice websites, health portals, medical device manufacturers, or any other origin.

- Write from first principles using medical knowledge
- Template testimonials are clearly flagged as templates; never present fabricated text as real patient words
- Never claim cures — use "treats", "manages", "improves", "helps recover"
- Indian English conventions: centre, colour, programme, specialise
- **Dr. Sameera K is female — use she/her in third person**
- See `.claude/experts/surgery-content.md` for the full content style guide

## Data to verify before launch

See `CONTENT_AUDIT.md` for the tiered launch-blocker list. Biggest items: real portrait photo, registration number, pincode, consulting hours, and real (consented) patient testimonials. Name, address, phone, email, qualifications and socials are now from the live site.

## Available Skills

### Engineering
| Skill | Command | Purpose |
|-------|---------|---------|
| Commit | `/commit` | Build-verify and commit |
| Review | `/review` | 6-agent parallel review before PR |
| Review PR | `/review-pr` | Review a PR by number or branch |
| Audit Feature | `/audit-feature` | Pre-merge quality gate |
| Security Review | `/security-review` | OWASP security scan |
| Architect | `/architect` | Deep analysis for complex tasks |
| Design Doc | `/design-doc` | Generate technical design document |
| Deploy | `/deploy` | Build, verify, push |
| Test | `/test` | Run build and type checks |
| Wrap | `/wrap` | Session wrap-up with logs |

### Content (Surgery-Specific)
| Skill | Command | Purpose |
|-------|---------|---------|
| Content Writer | `/content-writer` | Write original website copy |
| Write Service | `/write-service` | Add or rewrite a procedure |
| SEO Optimize | `/seo-optimize` | Local SEO tuning |
| Write Blog | `/write-blog` | Original patient-education blog posts |
