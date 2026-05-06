# React + Vite Frontend Expert — Dr. Sameera Kota Website

Stack: Vite 6, React 19, TypeScript 5.8, Tailwind CSS (CDN), Framer Motion 12, Lucide React

---

## Project-Specific Patterns

### Architecture (Component-Split Single-Page App)
```
index.html                    — Entry point, Tailwind CDN config, importmap, global styles
index.tsx                     — React root mount (StrictMode)
App.tsx                       — Thin composition of section components inside <Layout>
components/Layout.tsx         — Page shell (sticky header, emergency banner, footer wrapper)
components/HeaderSticky.tsx   — Sticky top navigation
components/EmergencyBannerSticky.tsx — Emergency contact banner
components/MobileStickyCTA.tsx — Floating mobile CTA
components/HeroSplit.tsx      — Hero section (headline, stats, primary CTAs)
components/StatsBar.tsx       — Stats band
components/ProceduresBentoGrid.tsx — Procedures grid (reads site.procedures)
components/AboutDoctor.tsx    — Doctor intro + bio card
components/TechnologySection.tsx — Technology/equipment section
components/TestimonialsCarousel.tsx — Testimonials
components/FAQAccordion.tsx   — Accordion FAQs
components/ContactSection.tsx — Contact block (map, hours, phone)
components/BookingForm.tsx    — Consultation booking form
components/Footer.tsx         — Footer
components/ui/Button.tsx      — Shared button primitive
components/ui/Modal.tsx       — Shared modal primitive
content/site.ts               — All content data (doctor, stats, procedures, tech, testimonials, faq, legal)
types.ts                      — TypeScript interfaces (Procedure, Testimonial, FAQ, Stat)
```

### Tailwind via CDN (NOT PostCSS)
- Tailwind is loaded via `<script src="https://cdn.tailwindcss.com">` in `index.html`
- Config is inline in `index.html` inside a `<script>tailwind.config = {...}</script>` block
- Custom theme tokens (current):
  - Colours: `surgical` (teal, 50–900, DEFAULT `#70C4C0`), `rose` (50–900), `slate` (50–900)
  - Fonts: `sans` (Mulish), `serif` (Playfair Display), `script` (Dancing Script)
  - Border-radius: `4xl` (2.5rem), `5xl` (3.5rem), `arch` (150px 150px 20px 20px)
  - Background images: `soft-gradient`, `teal-gradient`
- **NEVER create a tailwind.config.js** — the CDN approach is intentional
- **NEVER install tailwindcss as a dependency** — it's loaded via CDN

### Import Map (ESM CDN)
- Dependencies are loaded via `esm.sh` CDN URLs defined in `index.html` importmap
- `react`, `react-dom`, `lucide-react`, `framer-motion` all resolve to esm.sh
- Local `node_modules` exist for TypeScript type-checking and Vite tooling

### Path Alias
- `@/*` maps to project root in both `tsconfig.json` and `vite.config.ts`
- Current code uses relative imports (`../content/site`, `./ui/Button`). Either pattern works; keep files consistent with their neighbours.

### Icon System
- Icons come from `lucide-react`
- `site.procedures[].icon` and `site.technology.items[].icon` store Lucide icon names as strings (e.g., `"Zap"`, `"Shield"`, `"Stethoscope"`)
- Components that render these resolve the string to a Lucide component via a local map or direct import
- When adding a new procedure with a new icon, import it in the consuming component and add it to that component's icon map

### Content Management
- All text content lives in `content/site.ts` — never hardcode text in section components
- `site.doctor` — name, qualifications, specialisation, experienceYears, photo, practice details (hospital, addressLine, city, phone, whatsapp, emergencyPhone, email, hours)
- `site.stats[]` — label/value pairs for hero stats band
- `site.procedures[]` — surgical procedures (slug, title, icon, summary, bullets, disclaimer)
- `site.technology.items[]` — equipment/technology
- `site.testimonials[]` — patient quotes (name, text, tag)
- `site.faq[]` — question/answer pairs
- `site.legal` — disclaimer + privacy blurbs
- To add/edit content, modify `content/site.ts` only

### Animation Patterns
- **Scroll reveals:** `motion.div` with `initial` / `whileInView` / `transition` (Framer Motion)
- **Modals/Accordions:** `AnimatePresence` for enter/exit transitions
- **Hover:** spring-based transforms on buttons and cards
- Prefer `viewport={{ once: true }}` so scroll animations don't retrigger

### Component Library (`components/ui/`)
- `Button.tsx` — primary/secondary/ghost variants, size options, optional icon slot
- `Modal.tsx` — animated overlay with body-scroll locking
- Add new primitives here rather than duplicating JSX across section components

### Styling Conventions
- Font hierarchy: `font-serif` (Playfair Display) for h1/h2 display text, `font-sans` (Mulish) for body, `font-script` (Dancing Script) for accents
- Colour palette: `surgical` teal as primary brand colour, `rose` for warm accents, `slate` for neutrals
- Spacing: generous whitespace, `py-20`/`py-24` for sections
- Rounded: `rounded-[3rem]`, `rounded-4xl`, `rounded-5xl`, `rounded-full` for badges/buttons
- Shadows: `shadow-xl` on interactive elements, `shadow-2xl` on cards
- Mobile-first responsive: `md:` for tablet, `lg:` for desktop breakpoints
- Glass cards: `.glass-card` utility defined in `index.html` `<style>`

### Hosting
- Vite `base` is default (`/`) — no subpath prefix is currently configured
- No GitHub Actions workflow is checked into the repo
- If GitHub Pages hosting is added, update `vite.config.ts` `base` to match the repo name, and add a workflow under `.github/workflows/`
- Build output: `dist/`

---

## Industry Best Practices (React 19 + Vite SPA)

### React 19 Patterns
- **StrictMode** — already enabled, catches side-effect bugs in dev
- **Automatic batching** — state updates in event handlers are batched by default
- **use() hook** — new in React 19 for reading promises/context directly
- **ref as prop** — React 19 forwards refs without forwardRef (but forwardRef still works)
- **Actions** — form actions for async state transitions (useful for the consultation booking form)

### Vite Best Practices
- **HMR** — instant hot module replacement in dev, no config needed
- **Tree-shaking** — only used exports are bundled (important for lucide-react icons)
- **Code splitting** — use `React.lazy()` for heavy component splitting
- **Asset handling** — images in `public/` for static, imported for hashed filenames
- **Build analysis** — `npx vite-bundle-visualizer` to check bundle size

### Performance for Static Sites
- **Lighthouse audit** — target 90+ on all categories (Performance, Accessibility, Best Practices, SEO)
- **Image optimisation** — use WebP format, lazy load below-fold images, set explicit width/height. The current doctor photo uses a placeholder (`picsum.photos`) and should be replaced with a real, optimised image
- **Font loading** — `preconnect` to Google Fonts (already done), `font-display: swap`
- **Critical CSS** — Tailwind CDN handles this via JIT
- **Reduce motion** — respect `prefers-reduced-motion` for animation-heavy sites:
  ```tsx
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  ```

### Accessibility (Critical for Medical Websites)
- **Semantic HTML** — use `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` landmarks
- **ARIA labels** — on interactive elements (buttons, links, modals, accordions)
- **Focus management** — trap focus in modals, visible focus rings
- **Colour contrast** — WCAG AA minimum (4.5:1 for body text, 3:1 for large text). Verify the `surgical` teal against white backgrounds for small text
- **Keyboard navigation** — all interactive elements reachable via Tab, activated via Enter/Space
- **Screen reader** — alt text on images, `aria-expanded` on accordions, `role="dialog"` on modals
- **Skip to content** — hidden link at top for keyboard users

### SEO for Medical Practice Sites
- **Meta tags** — title, description, Open Graph, Twitter card
- **Structured data** — JSON-LD for `Physician`, `MedicalBusiness` / `MedicalClinic`, `MedicalProcedure` schemas
- **Canonical URL** — prevent duplicate content issues
- **Mobile-friendly** — responsive design (already mobile-first)
- **Page speed** — Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1)

### Framer Motion Best Practices
- **Layout animations** — use `layout` prop for smooth reflows
- **AnimatePresence** — always wrap conditional renders for exit animations
- **Viewport once** — `viewport={{ once: true }}` prevents re-triggering
- **Reduced motion** — check `useReducedMotion()` hook and skip animations
- **Performance** — use `will-change: transform` sparingly, avoid animating layout properties (width/height)

### TypeScript Patterns
- **Strict mode** — keep `strict: true` in tsconfig
- **No `any`** — use proper types for all props, state, and event handlers
- **Component props** — always define interfaces, export when shared
- **Event handlers** — type as `React.MouseEvent`, `React.FormEvent`, etc.
- **Const assertions** — `site` in `content/site.ts` is `as const` so string-literal unions flow through; be mindful when mutating types
