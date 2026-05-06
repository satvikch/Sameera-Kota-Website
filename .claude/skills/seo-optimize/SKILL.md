---
name: seo-optimize
description: "Optimise website content for local SEO — meta tags, structured data, heading hierarchy, and keyword placement for a surgical practice (laparoscopy + laser proctology) in Hyderabad. TRIGGER when: user says '/seo-optimize', 'improve SEO', 'optimize for search', 'add structured data', 'fix meta tags'."
allowed-tools: Read, Edit, Write, Grep, Glob, WebSearch, WebFetch
argument-hint: [specific-area]
---

# Local SEO Optimiser — Surgical Practice

Optimise Dr. Sameera Kota's website for local search visibility in Hyderabad, specifically for general surgery and laser proctology queries in the Bandlaguda Jagir / Sun City / greater Hyderabad area.

**Focus area:** `$ARGUMENTS` (if empty, run a full-site SEO audit)

---

## ORIGINALITY — NON-NEGOTIABLE

- **All meta descriptions, structured data content, and heading text must be 100% original**
- **NEVER copy meta descriptions or title tags** from competitor websites
- **NEVER replicate another clinic's structured data content** — write descriptions from scratch
- **Keyword usage must be natural** — forced keyword stuffing is both a Google penalty risk and a plagiarism vector when it mirrors competitor phrasing
- **If you use WebSearch to research keyword strategies**, use the STRATEGY (what keywords to target) but write all actual content from scratch

---

## Phase 1: Audit Current State

### 1. Check `index.html`

```
Read index.html for:
- <title> tag content
- <meta name="description"> content
- <meta name="viewport"> tag
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags
- Canonical URL
- Structured data (JSON-LD)
- Language attribute
- Favicon
```

### 2. Check Content Files

```
Read content/site.ts for:
- site.doctor — name, qualifications, specialisation, practice details
- site.procedures — titles, summaries, bullets (these feed SEO through page content)
- Location references for local SEO signals
```

### 3. Check Section Components

```
Scan components/*.tsx for:
- Heading hierarchy (h1, h2, h3 usage across HeroSplit, ProceduresBentoGrid, AboutDoctor, etc.)
- Alt text on images
- Semantic HTML landmarks (<nav>, <main>, <section>, <footer>)
- Internal anchor links
```

---

## Phase 2: Optimise

### Meta Tags (`index.html`)

**Title tag** (50-60 characters):
- Pattern: `Dr. Sameera Kota | Laparoscopic Surgeon & Laser Proctologist, Hyderabad`
- Must be original — check that it doesn't match any competitor's title
- Include primary location (Bandlaguda Jagir or Hyderabad)

**Meta description** (150-160 characters):
- Write as a compelling, original summary of the practice
- Include: doctor name, specialty (laparoscopy + laser proctology), 1-2 key procedures, location
- Must read naturally, not keyword-stuffed
- Include a soft CTA ("Book a consultation")

**Open Graph tags:**
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://[actual-domain]/" />
<meta property="og:image" content="[clinic-or-doctor-photo-url]" />
<meta property="og:locale" content="en_IN" />
```

**Canonical URL:**
```html
<link rel="canonical" href="https://[actual-domain]/" />
```

### Structured Data (JSON-LD in `index.html`)

Add **original** structured data — write all descriptions from scratch:

**Physician schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Sameera Kota",
  "description": "[ORIGINAL 1-2 sentence description — DO NOT COPY from any source]",
  "medicalSpecialty": ["Surgery", "GeneralSurgery"],
  "qualification": "MBBS, MS (General Surgery), FMAS, FIAGES",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sun City, Bandlaguda Jagir",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "[actual pincode]",
    "addressCountry": "IN"
  },
  "telephone": "[from site.doctor.practice.phone]",
  "email": "[from site.doctor.practice.email]",
  "worksFor": {
    "@type": "MedicalClinic",
    "name": "Dr. Sameera's Surgical Clinic"
  }
}
```

**MedicalClinic schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Dr. Sameera's Surgical Clinic",
  "description": "[ORIGINAL description of the clinic — NOT copied from any source]",
  "medicalSpecialty": ["Surgery", "GeneralSurgery"],
  "openingHours": ["Mo-Sa 10:00-20:00"],
  "address": { ... },
  "telephone": "...",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[real latitude]",
    "longitude": "[real longitude]"
  },
  "priceRange": "$$"
}
```

**Per-procedure `MedicalProcedure` schemas** are worth adding for the high-intent procedures (laser proctology, laparoscopic cholecystectomy, hernia repair).

### Heading Hierarchy

Verify and recommend across section components:
- **Single `<h1>`** — the main hero headline (contains doctor specialty + location cue)
- **`<h2>`** — each page section (Procedures, About, Technology, Testimonials, FAQ, Contact)
- **`<h3>`** — individual items within sections (procedure titles, FAQ questions)
- **No skipped levels** (no h1 → h3 without h2)

### Content-Level SEO

**Natural keyword placement** (NOT stuffing) in `content/site.ts`:
- Doctor bio should naturally mention "laparoscopic surgeon in Bandlaguda Jagir" or "Hyderabad"
- Procedure summaries should include condition names patients search for (piles, hernia, gallstones, appendicitis)
- FAQ questions should mirror how real patients type into Google

**Target keywords** (use naturally, never force):
- `laparoscopic surgeon in Bandlaguda Jagir Hyderabad`
- `laser proctologist Hyderabad`
- `piles treatment Hyderabad`, `laser piles treatment near me`
- `hernia surgery Hyderabad`, `laparoscopic hernia repair`
- `gallbladder surgery Hyderabad`, `laparoscopic cholecystectomy`
- `general surgeon Sun City Bandlaguda Jagir`
- `female surgeon Hyderabad` (underserved search intent)

### Image SEO (when images are added)

- Descriptive `alt` text (not "image1.jpg")
- File names: `dr-sameera-kota-laparoscopic-surgeon-hyderabad.webp` pattern
- Lazy loading for below-fold images
- Explicit `width` and `height` attributes
- Replace `picsum.photos` placeholder in `site.doctor.photo` with a real, optimised doctor photo before going live

---

## Phase 3: Implement

1. Edit `index.html` with meta tags, Open Graph, and structured data
2. Edit section components in `components/*.tsx` if heading hierarchy needs fixing
3. Edit `content/site.ts` if content needs natural keyword integration
4. Run `npm run build` to verify

---

## Phase 4: Report

- Changes made (with file:line references)
- Current SEO score assessment (what's good, what's missing)
- **Placeholder flags** — mark any data that needs real values (address, pincode, coordinates, phone, WhatsApp, emergency phone, doctor photo URL)
- Recommendations for off-site SEO (Google Business Profile for "Dr. Sameera's Surgical Clinic", Practo / Lybrate / JustDial listings, directory backlinks)

---

## Rules

1. **All SEO content must be 100% original** — meta descriptions, structured data descriptions, alt text
2. **Never copy competitor meta tags or structured data**
3. **Natural keyword usage** — if it reads awkwardly, remove the keyword
4. **Use real data only** — flag placeholders clearly, don't fabricate addresses or credentials
5. **Google's guidelines** — no keyword stuffing, no hidden text, no deceptive structured data
6. **Verify with build** — all changes must pass `npm run build`
