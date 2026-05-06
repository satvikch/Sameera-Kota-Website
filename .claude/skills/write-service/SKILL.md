---
name: write-service
description: "Add or rewrite a surgical procedure for Dr. Sameera Kota's practice with medically accurate, patient-friendly, 100% original descriptions. TRIGGER when: user says '/write-service', 'add a service', 'add procedure', 'write service for', 'new procedure'. Argument: the procedure name."
allowed-tools: Read, Edit, Write, Grep, Glob
argument-hint: <procedure-name>
---

# Surgical Procedure Writer

You write original, medically accurate procedure descriptions for Dr. Sameera Kota's surgical practice website.

**Procedure:** `$ARGUMENTS` (REQUIRED — if empty, ask the user which procedure to write about)

---

## ORIGINALITY — NON-NEGOTIABLE

- **Every description must be written from scratch.** Do NOT copy, paraphrase, or closely adapt text from any source — no competitor surgical websites, no medical device manufacturer descriptions, no health portals, no Wikipedia
- **Do NOT reuse sentence structures** from other sites with synonyms swapped in — this is still plagiarism
- **Explain procedures using your own understanding** of surgical science. If describing how a diode laser seals a haemorrhoid, explain the physics/tissue-interaction in original language
- **Avoid stock medical marketing phrases** commonly found on other clinic websites. If a phrase sounds like something you'd find on 10 other surgical sites ("world-class care", "state-of-the-art facility"), don't use it
- **Google penalty risk:** Duplicate or near-duplicate content gets flagged by search engines and can tank the site's ranking
- **Legal risk:** Copying content from another practice's website is copyright infringement

---

## Phase 1: Research the Procedure

1. **Read existing procedures** in `content/site.ts` (`site.procedures`) to match tone and depth
2. **Read `types.ts`** to understand the `Procedure` interface:
   ```typescript
   interface Procedure {
     slug: string;                // kebab-case slug
     title: string;               // Display name
     icon: string;                // Lucide icon name (string)
     summary: string;             // 20-35 words, card summary
     bullets: readonly string[];  // 3 short patient-facing phrases
     disclaimer: string;          // 1 sentence candidacy/caveat
   }
   ```
3. **Understand the procedure** from your medical knowledge — indications, technique, candidacy, expected recovery, risks

---

## Phase 2: Write the Procedure

### Field-by-Field Guide

**`slug`**: kebab-case, descriptive (e.g., `laser-proctology`, `hernia`, `gallbladder`, `varicose-veins`)

**`title`**:
- 2-5 words
- Patient-friendly name
- Examples of naming STYLE (write your own, don't copy these):
  - "Laser Proctology" — covers piles, fissures, fistulas
  - "Laparoscopic Hernia Repair" — clearer than just "Hernia"
  - "Emergency Appendectomy" — signals urgent context

**`icon`**: Lucide icon name as a string. Check which icons the site currently imports. Common options in use:
- `Zap` — laser / energy-based procedures
- `Shield` — structural repair (hernia)
- `Activity` — visceral / abdominal procedures
- `Stethoscope` — emergency / clinical
- `HeartHandshake` — sensitive care (thyroid, breast)
- If a new icon is needed, note it so the consuming component can import and map it

**`summary`** (20-35 words):
- Lead with what the patient is struggling with or what the procedure delivers
- One or two sentences
- Do NOT start with "We offer" or "Our clinic provides"
- Write originally — do NOT adapt descriptions from other sites

**`bullets`** (3 short phrases, ~3-8 words each):
- Concrete, patient-facing facts: incision size, discharge timing, recurrence rate, return-to-activity, scar profile
- Parallel grammatical structure
- Example style (write your own, don't copy):
  - "No incisions or stitches"
  - "Same-day discharge"
  - "Return to work in 3-5 days"

**`disclaimer`** (1 sentence):
- Candidacy or caveat
- "Ideal for Grades 2 & 3. Clinical assessment required."
- "Technique tailored to hernia size and location."
- "Immediate consultation advised for acute pain."
- Honest about when the procedure is / isn't right

---

## Phase 3: Medical Accuracy Check

Before writing into the codebase, verify:

- [ ] **No off-label claims** — procedure described only for its indicated uses
- [ ] **No cure-claim overreach** — "manages", "repairs", "treats", "reduces" not "cures permanently", "zero recurrence"
- [ ] **Honest recovery** — don't minimise downtime to sound appealing
- [ ] **No specific device brand names** unless confirmed by the practice
- [ ] **Candidacy captured in the disclaimer** — grades, sizes, emergency status
- [ ] **No superlative claims** — no "best", "most advanced", "guaranteed"
- [ ] **Every sentence is original** — nothing copied or closely paraphrased from any source
- [ ] **Dignity preserved** — proctology descriptions are calm and private, not salesy

---

## Phase 4: Implement

1. Add the new procedure object to the `procedures` array in `content/site.ts`
2. If a new icon is used:
   - Import the icon in the section component that renders procedures (`components/ProceduresBentoGrid.tsx`)
   - Add it to that component's local icon map
3. Run `npm run build` to verify no type errors
4. Report to user:
   - The procedure added
   - The icon assigned
   - Any medical claims they should verify with Dr. Sameera Kota
   - Any placeholder info that needs real data

---

## Existing Procedures (for tone matching, NOT for copying)

Read `content/site.ts` to see the existing procedures and match:
- Similar sentence length and complexity
- Same level of medical detail
- Consistent patient-first perspective
- Same honest approach to recurrence/recovery/results

---

## Rules

1. **100% original — zero copied or closely paraphrased content from any source**
2. **Medical accuracy over marketing appeal**
3. **Must fit the `Procedure` TypeScript interface exactly**
4. **Match existing content tone** — don't introduce a jarring style shift
5. **Indian English spelling** — centre, colour, programme, specialise
6. **No competitor references** — never mention other clinics, doctors, or branded treatments from other practices
7. **No fabricated statistics** — no "99% success rate" unless the practice provides this data
8. **Flag uncertainties** — tell the user what Dr. Sameera Kota should verify
9. **Preserve patient dignity** — especially for proctology and intimate-area procedures
