# Facts Dr. Sameera K must confirm before launch

Nothing in this list may be invented or guessed. Each item is either a `{{PLACEHOLDER}}`
in the code, or a specific claim that is currently live but unverified. Until an item is
confirmed, it must stay as a placeholder or be softened — **a wrong fact on a medical
(YMYL) site is worse than a missing one.**

Legend: 📍 = where it lives in the code.

---

## 1 · Identity & credentials

- [ ] **Public name form.** The site uses **“Dr. Sameera K”** everywhere (matches the live
  reference site). The marketing audit and one internal doc call her “Dr. Sameera Kota”.
  Confirm the preferred public-facing name. *(A “Dr. Sameera Kota” greeting in the booking
  form has been corrected to “Dr. Sameera K” for consistency.)*
  📍 `content/site.ts` → `doctor.name`
- [ ] **Post-nominals & issuing bodies.** Code states **MBBS, MS (General Surgery), FMAS, FISCP**,
  with FMAS issued by the **Association of Minimal Access Surgeons of India** and FISCP by the
  **Indian Society for Colorectal Proctology**. Confirm the exact post-nominals *and* both
  issuing bodies. (The audit/internal docs variously said FIAGES, AMASI, “International Society
  of Coloproctology” — **do not ship any of those unless she confirms them.**)
  📍 `content/site.ts` → `doctor.qualifications`, `doctor.memberships`; `index.html` JSON-LD `hasCredential`
- [ ] **Do NOT use “board-certified.”** There is no Indian board-certification construct for
  general surgery; “MS (General Surgery) with fellowship training” is the correct framing. The
  word is not used anywhere — keep it that way.
- [ ] **Years of experience.** Placeholder, not currently shown anywhere. The audit guessed “9+”,
  an internal doc “12+” — both unverified. Confirm the real figure. Safest phrasing:
  “performing laparoscopic surgery since [year]”.
  📍 `content/site.ts` → `doctor.experienceYears` (`{{YEARS_OF_EXPERIENCE}}`)
- [ ] **Medical colleges & graduation years.** Placeholders. The audit asserts “SVS Medical College,
  Mahabubnagar (2011)” and “Mediciti Institute, Ghanpur (2016)” — **not confirmed, never on the
  live site.** Do not publish any college or year without written confirmation. The About page
  already shows “awaiting update” until then.
  📍 `content/site.ts` → `doctor.education`
- [ ] **Telangana State Medical Council registration number.** Required on Indian medical sites.
  📍 `content/site.ts` → `doctor.regNumber` (`{{TSMC-REGISTRATION-NUMBER}}`)

## 2 · Practice facts

- [x] **Primary hospital vs consultancies — RESOLVED (owner, June 2026).** **Susheela Hospital,
  SRK Puram, Kothapet is her OWN hospital** and the site's canonical address/NAP. At **Omni
  Hospitals (Kothapet), V9 Hospitals** and others she is a **visiting consultant**. Keep the site
  address = Susheela; do not swap in a consultancy address. Third-party listings/videos branded
  with those other hospitals are consultancies/media, not a conflict.
  - [ ] **Optional schema upgrade:** add the consultancy hospitals as `hospitalAffiliation` on the
    Physician JSON-LD (invisible entity signal, no visible promotion of other brands). Supply the
    confirmed current list of hospitals where she actively consults before this is added.
    📍 `index.html` Physician node; `content/site.ts` → `doctor.practice`
- [ ] **Pincode.** Placeholder. The audit guessed “500035” — **not used; do not hardcode it.**
  Confirm the real SRK Puram / Kothapet pincode. (The footer hides it until set; schema omits it.)
  📍 `content/site.ts` → `doctor.practice.pincode` (`{{PINCODE}}`)
- [ ] **Consulting hours.** Placeholders. Until confirmed, the `OpeningHoursSpecification`
  schema is intentionally omitted.
  📍 `content/site.ts` → `doctor.practice.hoursGrouped` (`{{OPEN}} – {{CLOSE}}`)
- [ ] **⚠️ Emergency line availability (patient-safety claim).** The contact page states the
  emergency channel is **“24 × 7”** and an after-hours line is shown at the top of every page —
  both using the clinic landline. **Confirm the number is genuinely available as stated, or
  soften the claim.** This is the single most consequential claim on the site.
  📍 `pages/ContactPage.tsx` (`REPLY_CHANNELS` → Emergency), `components/EmergencyBannerSticky.tsx`
- [ ] **Transport facts.** “Dilsukhnagar metro is the nearest rail connection” and “TSRTC buses
  290, 293”. Confirm or soften to “nearby metro and bus connections”.
  📍 `pages/ContactPage.tsx` (`BEFORE_YOU_ARRIVE` → Parking & transport)
- [ ] **Insurance / cashless.** FAQ says “most major Indian health insurance providers, including
  cashless options”. Confirm against Susheela Hospital’s actual empanelment, or soften to “many”.
  📍 `content/site.ts` → `faq` (Payment → “Do you accept health insurance?”)
- [ ] **Verified map coordinates.** GeoCoordinates are omitted from schema. If you want a precise
  map pin / `geo` in schema, supply verified lat/long for Susheela Hospital (do **not** reuse the
  audit’s `17.3769;78.5303` unverified).

## 3 · Profiles & images (for entity signals)

- [ ] **Off-site profile URLs** to add to `sameAs` (clinic + physician) and the footer, for NAP
  consistency: **Google Business Profile, Practo, Omni Hospitals listing, YouTube, LinkedIn.**
  Only Instagram + Facebook are wired today.
  📍 `index.html` JSON-LD `sameAs`; `content/site.ts` → `doctor.practice.socials`; `components/Footer.tsx`
- [ ] **Real doctor portrait** (replaces the “SK” placeholder). Feeds About/Hero, `Physician.image`, OG.
  📍 `content/site.ts` → `doctor.photo` (`{{DOCTOR_PORTRAIT_URL}}`)
- [ ] **Real clinic photos** (replace the gallery placeholders).
  📍 `content/site.ts` → `clinicGallery`
- [ ] **OG image (optional upgrade).** A branded 1200×630 card was generated at
  `public/og-image.jpg` (editable source: `public/og-image.svg`). Optionally re-export it with the
  real logo/portrait and brand fonts.

## 4 · Clinical content sign-off (the byline depends on it)

Procedure pages now carry **“Written and clinically reviewed by Dr. Sameera K … Last reviewed:
June 2026.”** She must actually review the clinical copy for this to be truthful. In particular,
confirm:

- [ ] Laser-piles **grade suitability** (“Grade 2–3, selected fistulas”) and the recurrence framing.
- [ ] Quoted qualitative **risk rates** — “recurrence ~1–3%” (hernia), “bile duct injury under 0.3%”
  (gallbladder), “permanent voice change under 1%” (thyroid). They are presented as “in published
  series / in experienced hands”; confirm they match what she quotes at consent.
- [ ] **Diabetic-foot** diabetologist co-management and **soft-tissue abscess** LA-vs-GA thresholds
  match her actual workflow.

## 5 · Reviews — now real Google reviews (still no rating schema)

Five **real** patient reviews from the Google listing are now live in the testimonials section
(home page), each attributed "Google review · [month]" with a link to the verbatim source. They
carry **no** `Review`/`AggregateRating` schema — re-marking up Google's reviews as our own
first-party rating violates Google's structured-data policy and Indian consumer law for a YMYL site.
**Never** add a self-authored star rating. Confirm before launch:

- [ ] **Display choices are acceptable.** Names are shortened to first-name + surname-initial
  (e.g. "Raji R.", "Chitrarekha T.") given the sensitive procedures; review text is lightly tidied
  for spelling/grammar without changing meaning (originals remain public on Google). If she'd
  prefer full names (as shown publicly on Google) or strictly verbatim text, say so.
  📍 `content/site.ts` → `testimonials`
- [x] **Aggregate rating + review count.** Set to **5.0 / 63** (confirmed June 2026), shown on the
  "5.0 · 63 reviews on Google" button. Re-confirm periodically as the review count grows.
  📍 `content/site.ts` → `doctor.practice.googleRating`, `doctor.practice.googleReviewCount`
- [ ] **Varicose-vein (EVLA) page — now live, needs sign-off.** She confirmed she offers it, so a
  dedicated **`/procedures/varicose-veins`** page was added and the EVLA review now features. Still
  to confirm: (1) the **clinical copy** (technique, suitability, the "high closure rates in
  published series" and recurrence framing — see §4); (2) a **real procedure image** (placeholder
  `{{PROCEDURE_IMAGE_VARICOSE}}` shows a branded plate until then); (3) that the **English rendering
  of the Telugu-mix review** ("Chaitanya") faithfully matches her recollection of that case.
  📍 `content/site.ts` → `procedures` (`varicose-veins`), `testimonials` (`g-chaitanya`)
- [ ] **Consent.** Public Google reviews are republished here under the linked source. If the
  practice prefers explicit written consent before re-displaying any named review, collect it.
