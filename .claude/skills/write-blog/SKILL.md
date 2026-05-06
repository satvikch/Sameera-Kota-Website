---
name: write-blog
description: "Write original, medically accurate surgical patient-education blog posts for Dr. Sameera Kota's practice. TRIGGER when: user says '/write-blog', 'write a blog post', 'blog about', 'article about'. Argument: the topic."
allowed-tools: Read, Write, Edit, Glob, Grep, WebSearch
argument-hint: <topic>
---

# Surgical Blog Writer

Write original, patient-education blog posts for Dr. Sameera Kota's surgical practice. These posts serve dual purpose: educating patients and improving local SEO visibility.

**Topic:** `$ARGUMENTS` (REQUIRED — if empty, suggest 5 topic ideas based on the procedures in `content/site.ts`)

---

## ORIGINALITY — ABSOLUTE REQUIREMENT

This is the #1 rule. Blog posts are the highest plagiarism risk because medical content is widely duplicated across the internet.

- **NEVER copy or closely paraphrase** from any source — WebMD, Healthline, Mayo Clinic, NHS, Wikipedia, competitor blogs, medical journals, or any other website
- **NEVER use the structure of an existing article** with different words — restructuring someone else's outline is still derivative work
- **Write from your understanding of surgical science**, not by rewording existing content
- **If you use WebSearch for medical facts** (recurrence rates, technique comparisons, study findings), cite the finding but write your own explanation around it. Include the factual source as a note for the practice to verify
- **Every analogy, metaphor, and explanation must be your own invention**
- **Run a mental plagiarism check**: after writing each paragraph, ask "could this paragraph exist word-for-word on another website?" If yes, rewrite it
- **Common medical explanations** (e.g., "the appendix is a small pouch attached to the large intestine") are factual and fine. But the surrounding context, framing, and narrative must be original

**Why this matters critically for blogs:**
- Google actively penalises duplicate medical content (YMYL — Your Money Your Life category)
- Medical blogs are in Google's highest scrutiny tier for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
- A single plagiarised post can damage the entire site's search ranking
- Copied medical content from unverified sources can spread misinformation

---

## Blog Post Structure

### Format

```markdown
# [Title — 8-12 words, includes condition/procedure + location context]

*Written by Dr. Sameera Kota, Consultant General & Laparoscopic Surgeon, Bandlaguda Jagir, Hyderabad*
*[Date]*

## Introduction (2-3 paragraphs)
[Hook with a relatable patient scenario — NOT a real patient, clearly generalised]
[Why this topic matters for patients in Hyderabad's lifestyle/diet context]
[What this post will cover]

## Understanding [Condition/Procedure] (2-3 paragraphs)
[What it is — explained simply with medical terms in parentheses]
[What causes it — factors relevant to the local population]
[How to recognise it — signs and symptoms, when to worry]

## Treatment Options (3-5 subsections)
### [Option 1 — e.g., Medical management / lifestyle]
[When it's appropriate]

### [Option 2 — e.g., Laser / laparoscopic procedure]
[How it works, who it's for, what to expect]

### [Option 3 — e.g., Traditional surgery]
[When it's still indicated, trade-offs]

## What to Expect at Your Consultation
[What happens when you visit Dr. Sameera Kota for this concern]
[De-mystify the process — reduce patient anxiety, especially for proctology]

## Recovery & Home Care
[Evidence-based guidance patients can act on]
[When to call if something isn't right]
[Dietary or activity advice, if relevant]

## When to See a Surgeon
[Clear indicators that surgical consultation is needed]
[Red-flag symptoms that warrant urgent assessment]
[Gentle CTA to book a consultation]

## Key Takeaways
[3-5 bullet points summarising the post]

*This post is for informational purposes and does not replace a professional consultation.*
```

### Length
- Target: 800-1200 words
- Not so short it's unhelpful, not so long patients abandon it

### Tone
- Educational, not salesy
- A surgeon explaining to a patient in the consultation room
- Empathetic — acknowledge that surgical concerns (especially proctology, breast lumps, hernias) cause real fear and embarrassment
- Empowering — give patients knowledge to make informed decisions
- Honest — include limitations of procedures, risks, recurrence possibilities, not just benefits

---

## Content Guidelines

### Medical Accuracy
- Only discuss procedures and approaches within standard surgical practice
- Include caveats: "individual results may vary", "consult a surgeon before making treatment decisions"
- Never contradict established surgical consensus
- Distinguish between emergency and elective indications
- If mentioning studies, note: "[Practice should verify this reference]"

### Local Relevance (Hyderabad / Bandlaguda Jagir Context)
- Reference local lifestyle factors (spicy/rich diet → gallstones, piles; sedentary desk work → haemorrhoids; heavy lifting → hernias)
- Monsoon context for wound care where relevant
- Accessibility: neighbourhood surgical care in Bandlaguda Jagir vs travelling to central Hyderabad
- Cultural context: dignity concerns, preference for female surgeons for breast/thyroid/proctology

### SEO Integration (Natural, Not Forced)
- Title includes the condition/procedure + geographic context where natural
- Use H2/H3 headings that match how patients search (question format works well)
- Natural mention of "laparoscopic surgeon in Hyderabad" or "Bandlaguda Jagir" once or twice — not in every paragraph
- Internal linking opportunity: reference related procedures from `content/site.ts`

### What to NEVER Include
- Specific device or mesh brand recommendations (unless practice-approved)
- Guaranteed outcome or "zero recurrence" claims
- Fear-based urgency ("Your hernia will strangulate tonight!")
- Competitor mentions or comparisons
- Patient case studies (unless provided by the practice with consent, de-identified)
- Prescription medication names with dosage advice (liability risk)
- Home remedies without evidence basis

---

## Process

### Phase 1: Research
1. Read `content/site.ts` to check which related procedures exist (link opportunities)
2. If the topic needs current medical knowledge, use WebSearch for facts — but write all content originally
3. Note any claims that need Dr. Sameera Kota's verification

### Phase 2: Write
1. Draft the full post following the structure above
2. **Originality self-check:** Re-read each paragraph. Rewrite anything that sounds like it could exist elsewhere
3. Medical accuracy check: flag any claims you're less than 90% confident about
4. Verify local relevance: is this useful for a patient in Hyderabad specifically?

### Phase 3: Output
1. Write the blog post to `blog/[slug].md` (create `blog/` directory if needed)
2. If the project has a blog component, integrate with the existing structure
3. If no blog component exists yet, save as markdown and note that a blog section would need to be built

### Phase 4: Report
- Post title and file path
- Word count
- Target keywords (naturally used)
- Related procedures from `content/site.ts` that could be cross-linked
- **Medical claims to verify** — list anything Dr. Sameera Kota should review
- **Placeholder flags** — anything that needs real data

---

## Topic Suggestion Engine

If no topic provided, suggest 5 based on existing procedures and common patient concerns:

1. Read `site.procedures` from `content/site.ts`
2. For each procedure, identify a patient-education angle. Example STYLE (generate fresh titles each time):
   - **Laser Proctology:** "Laser Treatment for Piles: What Recovery Really Looks Like"
   - **Hernia:** "Is My Groin Lump a Hernia? When to See a Surgeon"
   - **Gallbladder:** "Gallstone Pain After Meals — Causes and Modern Treatment"
   - **Appendicitis:** "Sudden Right-Side Abdominal Pain: Recognising Appendicitis"
   - **Thyroid / Breast:** "Finding a Lump: What to Expect from a Surgical Consultation"

These are STYLE examples only — generate fresh, original titles each time.

---

## Rules

1. **100% original content — this is non-negotiable and the single most important rule**
2. **Never copy structure, phrasing, or framing from any existing article**
3. **Medical accuracy** — flag uncertain claims for doctor review
4. **No prescription advice** — never recommend specific medications with dosages
5. **No fabricated case studies or statistics**
6. **Indian English spelling** — centre, colour, programme, specialise
7. **Author attribution** — always credit Dr. Sameera Kota (she/her) as the author
8. **Disclaimer** — include "This post is for informational purposes and does not replace a professional consultation" at the end
9. **Dignity in sensitive topics** — proctology and breast/thyroid posts should preserve patient dignity throughout
