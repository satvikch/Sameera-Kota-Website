# Content Audit — Dr. Sameera K Surgical Practice

Last reviewed: 2026-04-19

This document lists every content claim and placeholder on the site that carries reputational, legal, or clinical risk. Nothing in **Tier 1** should go to production until it is resolved.

## How to read this document

| Tier | Meaning | Action |
|------|---------|--------|
| **Tier 1** | Launch-blocking. A real patient acting on this, or a regulator reviewing it, could reasonably raise a problem. | Must be replaced with verified values before the site is made public. |
| **Tier 2** | Needs doctor sign-off. The content is defensible in principle but Dr. Sameera K should personally confirm every detail. | Get written approval before launch. |
| **Tier 3** | Approved. Original wording, clinically sound, no unverifiable claims. | No action needed. |

## Data confirmed from the live site (https://drsameerakota.com)

| Field | Value |
|------|------|
| Name | Dr. Sameera K |
| Qualifications | MBBS, MS (General Surgery), FMAS, FISCP |
| Clinic | Susheela Hospital |
| Address line | 11-12-147, Road No. 3, SRK Puram, Kothapet, Hyderabad |
| Phone | +91 81252 05698 |
| Email | drsameerakota@gmail.com |
| Instagram | https://www.instagram.com/drsameera.genralsurgeon/ |
| Facebook | https://www.facebook.com/profile.php?id=61575129399475 |
| Google Maps | https://maps.app.goo.gl/kDN6jZzNM1M8Lqwf6 |

## Tier 1 — Launch Blockers

### T1-1 · Placeholder doctor portrait
- **File:** `content/site.ts` → `doctor.photo`
- **Current:** `{{DOCTOR_PORTRAIT_URL}}`
- **Risk:** The About section falls back to an initials tile. Shipping that is unambiguously unfinished.
- **Action:** Commission a real professional portrait. Save to `public/` and reference by path.

### T1-2 · Missing pincode
- **File:** `content/site.ts` → `doctor.practice.pincode`
- **Current:** `{{PINCODE}}`
- **Risk:** JSON-LD structured data, footer address and Google Maps embed all need the real pincode to be accurate.
- **Action:** Confirm the clinic's 6-digit pincode and replace.

### T1-3 · Consulting hours not set
- **File:** `content/site.ts` → `doctor.practice.hoursGrouped`
- **Current:** `{{OPEN}} – {{CLOSE}}` placeholders
- **Risk:** Patients may arrive at closed hours. The live reference site did not list hours either — we need Dr. Sameera K to confirm.
- **Action:** Fill in the real weekday and Saturday schedule.

### T1-4 · Missing medical council registration number
- **File:** `content/site.ts` → `doctor.regNumber`
- **Current:** `{{TSMC-REGISTRATION-NUMBER}}`
- **Risk:** Medical-practice websites in India are expected to display the doctor's Medical Council registration number.
- **Action:** Replace with the real Telangana State Medical Council number.

### T1-5 · Template testimonials
- **File:** `content/site.ts` → `testimonials`
- **Current:** Three entries, all marked `isTemplate: true` and rendered with a "Template review" chip.
- **Risk:** Publishing fabricated testimonials is illegal under India's Consumer Protection Act 2019 and the IMA's advertising guidelines.
- **Action:** Collect real consented reviews, or link out to a live Google Business Profile and remove the section.

### T1-6 · Clinic gallery images
- **File:** `content/site.ts` → `clinicGallery`
- **Current:** All `src` values are `{{CLINIC_PHOTO_*}}` placeholders.
- **Risk:** Ships as visibly unfinished.
- **Action:** Replace with real photographs of Susheela Hospital — reception, consultation room, procedure room, waiting area, diode laser console, team.

### T1-7 · Unverified education timeline
- **File:** `content/site.ts` → `doctor.education`
- **Current:** Every year and institution is a `{{YEAR}}` / `{{INSTITUTION}}` placeholder. Live site lists only the credentials, not the institutions.
- **Risk:** Fabricating or omitting credentials is high-risk.
- **Action:** Dr. Sameera K to fill these in personally.

### T1-8 · Emergency number not distinct
- **File:** `content/site.ts` → `doctor.practice.emergencyPhone`
- **Current:** Same as the clinic landline (`+91 81252 05698`).
- **Risk:** Patients in a genuine emergency at 2 am may get voicemail if this is a clinic-hours number.
- **Action:** Confirm whether the published number is 24×7; if not, add or remove the emergency banner accordingly.

## Tier 2 — Needs Doctor Sign-off

### T2-1 · Philosophy & bio
- **File:** `content/site.ts` → `doctor.philosophy`, `doctor.bio`
- These are drafted in Dr. Sameera K's voice but were written by the content draft, not by her. She should read every paragraph aloud and amend anything that doesn't sound like her.

### T2-2 · Procedure detailed content
- **File:** `content/site.ts` → `procedures[].detailed`
- Each procedure has an overview, how-it-works, benefits, risks, session info (theatre time / hospital stay / recovery / return to work), pre-care, post-care, and three FAQs. Accurate in principle but not personalised. Dr. Kota should verify:
  - **Session info** (duration, stay, recovery, return to work, results visible in) — must match the practice's actual experience
  - **Risk rates** quoted qualitatively (e.g., "around 1–3%", "under 0.3%", "under 1%") — confirm these match the figures she quotes at consent
  - **Laser piles grading suitability** ("Grade 2 and 3, selected fistulas") — confirm
  - **Diabetic foot pathway** — confirm the diabetologist coordination is how the practice actually operates
  - **Soft-tissue abscess** — confirm local-anaesthesia vs GA thresholds

### T2-3 · Trust strip metrics
- **File:** `content/site.ts` → `trustMetrics`
- Current entries are qualitative ("Female-led", "Fellowship trained"). No quantitative claims made. If volume-of-procedure metrics are added later (e.g. "2,000+ laparoscopic cases"), they must be grounded in actual practice data.

### T2-4 · FAQ content
- **File:** `content/site.ts` → `faq`
- 13 entries across five categories. Two operational claims need confirmation:
  - "We work with most major Indian health insurance providers, including cashless options" — confirm this reflects Susheela Hospital's arrangements
  - "WhatsApp channel handles post-operative questions" — confirm who monitors, and hours

### T2-5 · Process steps
- **File:** `content/site.ts` → `processSteps`
- The 5-step pathway is typical for a minimal-access surgical practice. Dr. Kota should confirm the diagnostic partners, pre-op phone-call practice, and post-op WhatsApp channel match the clinic's actual workflow.

### T2-6 · Technology descriptions
- **File:** `content/site.ts` → `technology[]`
- Diode laser, HD laparoscopy tower, and energy devices described in general terms only. No brand names. Confirm the clinic has reliable access to each.

## Tier 3 — Approved Copy

- Hero headline, rotating-word list, subhead — original, patient-friendly, non-superlative.
- Section headings (About the surgeon / How we work / What to expect / Equipment / Patient reviews / Common questions / Inside the clinic / Contact) — original, plain English.
- Why-we-do-things-this-way card copy — defensible and consistent with an evidence-first practice.
- Results page placeholder copy — consent-led, sets expectations honestly.
- Legal disclaimer and privacy note (`site.legal`) — appropriately conservative.
- 404 page copy — plain and clear.

## SEO / metadata

| Item | Status |
|------|--------|
| `<title>` | Approved (includes name, specialty, Kothapet, Hyderabad). |
| `<meta description>` | Approved. |
| Open Graph + Twitter Card | Approved. `og:image` points to `/og-image.jpg` which **does not exist**. Bundle a 1200×630 image before launch. |
| Canonical URL | Approved (`https://drsameerakota.com/`). |
| JSON-LD | Approved structurally. `openingHoursSpecification` has been removed until real hours are confirmed (Tier 1). |
| `robots.txt` | Approved. |
| `sitemap.xml` | Approved — now includes 7 procedures (including Diabetic Foot and Soft Tissue). |
| Favicon | Approved (custom SVG mark). |
| `og-image.jpg` | **Missing.** Produce 1200×630 before launch. |

## Technical verification checklist (pre-launch)

- [ ] `npm run build` passes with no TypeScript errors
- [ ] Site loads at 320px, 768px, 1024px and 1440px without layout breaks
- [ ] Every `tel:`, `mailto:`, `wa.me/` link opens the expected application
- [ ] Google Maps embed on `/contact` drops the pin at Susheela Hospital
- [ ] Keyboard-only navigation reaches every interactive element
- [ ] Screen reader announces each page's `h1` and each modal's title
- [ ] `prefers-reduced-motion` disables the rotating hero word and reveals
- [ ] Emergency banner is distinguishable from the sticky header on mobile
- [ ] Lighthouse scores: target ≥ 90 for Performance, Accessibility, Best Practices, and SEO
