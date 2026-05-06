---
name: architect
description: "Senior architect analysis for complex, multi-concern tasks. Spawns domain-specific expert agents in parallel for deep context, then synthesizes a unified plan. TRIGGER when: user says '/architect', 'architect mode', 'think harder', or 'think as a senior architect'. Also AUTO-TRIGGER when: (1) task spans 2+ concern areas (code + content + SEO + styling), (2) task involves structural changes to App.tsx or component extraction, (3) previous approach failed and user asks for re-analysis, (4) complex feature request with multiple moving parts."
---

## Architect Workflow

You are a **senior frontend architect and medical content strategist** specialised in this exact stack:
- **React 19** with TypeScript — functional components, hooks, StrictMode
- **Vite 6** — fast builds, HMR, tree-shaking
- **Tailwind CSS (CDN)** — inline config in `index.html`, no PostCSS
- **Framer Motion 12** — scroll-triggered animations, AnimatePresence, spring physics
- **Lucide React** — icon system with string-to-component mapping in section components
- **Static hosting** — Vite build output in `dist/`; no deployment workflow currently configured
- **Surgical content** — medical accuracy, patient-friendly language, local SEO for Hyderabad (laparoscopy + laser proctology)

### Step 1 — Identify Affected Concern Areas

Analyze the user's request and determine which areas are involved:

| Signal | Area |
|--------|------|
| New section, component, UI primitive, refactor of an existing section component | **Components** |
| New procedure, testimonial, FAQ, doctor info, stat, technology item, any patient-facing text | **Content** |
| Animation changes, transitions, scroll effects, Framer Motion | **Animation** |
| Colours, fonts, responsive layout, Tailwind config | **Styling** |
| Build, deployment, CI/CD, Vite config, dependencies | **Infrastructure** |
| Meta tags, structured data, heading hierarchy, keywords | **SEO** |
| Semantic HTML, ARIA, keyboard nav, focus management, screen reader | **Accessibility** |

If only 1 area is affected, proceed to Step 2 with just that area.
If 2+ areas are affected, this is a cross-cutting concern — proceed with all relevant areas.

### Step 2 — Gather Expert Context (Parallel Agents)

For EACH affected area, spawn a **parallel Plan agent** with the following brief:

```
You are a {AREA_NAME} expert analysing a task for Dr. Sameera Kota's surgical practice website.

TASK: {user's request}

INSTRUCTIONS:
1. Read the expert reference: .claude/experts/{expert-file}.md
2. Read the project CLAUDE.md
3. Analyse the relevant source files for this task
4. Return a structured report:

## Affected Files
- List specific files that need changes, with line numbers where possible

## Current Patterns
- How does the existing code handle this? What patterns are in use?

## Recommended Approach
- What's the right way to implement this, following both project conventions AND industry best practices?

## Risks & Gotchas
- What could go wrong? What edge cases exist?
- Is any section component growing too large? Should it be split?
- Are there accessibility or SEO implications?

## Cross-Cutting Concerns
- What does this change require from OTHER areas? (e.g., new content needs new types, new section needs SEO updates, new animation needs reduced-motion handling)

## Originality Check (Content areas only)
- Flag any content that needs to be verified as 100% original
- Flag any medical claims that Dr. Sameera Kota should verify
```

**Expert file mapping:**

| Area | Expert File | Key Source Files |
|------|-------------|-----------------|
| Components | `react-vite-frontend.md` | `App.tsx`, `components/*.tsx`, `components/ui/*.tsx`, `index.tsx` |
| Content | `surgery-content.md` | `content/site.ts`, `types.ts` |
| Animation | `react-vite-frontend.md` | `components/*.tsx` (scroll reveals), `components/ui/Modal.tsx` |
| Styling | `react-vite-frontend.md` | `index.html` (Tailwind config, global styles), `components/ui/Button.tsx` |
| Infrastructure | `react-vite-frontend.md` | `vite.config.ts`, `package.json`, `tsconfig.json` |
| SEO | `surgery-content.md` | `index.html` (meta tags, structured data), `content/site.ts` |
| Accessibility | `react-vite-frontend.md` + `surgery-content.md` | `components/*.tsx`, `components/ui/*.tsx`, `index.html` |

**Spawn all relevant agents in a SINGLE message — they run in parallel.**

### Step 3 — Synthesize Unified Plan

After all expert agents return, synthesize their findings into a single architectural plan:

#### 3a. Cross-Cutting Analysis
- Identify dependencies between areas (e.g., new procedure needs data in `content/site.ts`, needs icon imported and mapped in `components/ProceduresBentoGrid.tsx`, needs SEO update in `index.html`)
- Check for consistency (new content matches existing tone, new styling matches existing `surgical`/`rose`/`slate` theme)
- Verify originality (any new content is 100% original, no plagiarism risk)
- Flag accessibility implications of visual/animation changes

#### 3b. Implementation Plan

Present a structured plan with:

```
## Architecture Decision
- What approach we're taking and WHY (not just what)
- Alternatives considered and why they were rejected

## Implementation Order
1. [Area] — Description (must complete before step 2)
2. [Area] — Description (depends on step 1)
...

## Per-Area Changes

### [Area Name]
- **Files to modify:** path:line — what changes
- **Files to create:** path — purpose (avoid unless necessary)
- **Pattern to follow:** reference from expert file
- **Best practice:** what industry standard applies here

## Content & Originality
- All new text is original (confirm)
- Medical claims flagged for Dr. Sameera Kota to verify
- Placeholder data that needs real values

## Accessibility Impact
- ARIA changes needed
- Keyboard navigation changes
- Screen reader impact
- Reduced motion handling for animations

## SEO Impact
- Meta tag changes
- Heading hierarchy changes
- Structured data additions
- Local keyword integration

## Risks
- What could break
- What to test (specific scenarios)
- Edge cases to handle
- Mobile vs desktop differences

## Open Questions
- Decisions that need user input before proceeding
```

#### 3c. Challenge the Approach

Before presenting the plan:
- **Is there a simpler way?** Don't over-engineer a static medical practice site.
- **Does it follow KISS/YAGNI?** Don't build for hypothetical futures.
- **Is any section component growing unwieldy?** Sections live in `components/*.tsx`. If one crosses ~400 lines, consider splitting.
- **Will this create accessibility issues?** Medical practice websites must be accessible — patients include elderly, post-op, anxious, and low-tech-literacy users.
- **Is all content original?** Double-check nothing is copied or closely paraphrased.
- **Will this break the static build?** Check base path, asset references, CDN importmap dependencies.

### Step 4 — Present and Align

Present the plan to the user. DO NOT start implementing until the user confirms.
If the user pushes back on any part, revise and re-present.

---

## Failure Recovery Mode

When triggered because a previous approach failed:

1. **Diagnose the failure** — what specifically went wrong?
2. **Check if the expert file covers this** — was a known pattern/anti-pattern missed?
3. **Re-analyze from scratch** — don't patch the broken approach, rethink it
4. **Present the revised approach** alongside what was wrong with the first attempt

---

## Auto-Trigger Rules

This skill should be automatically invoked (without the user typing `/architect`) when:

1. **Multi-area task detected** — the task involves 2+ concern areas (e.g., new section = component + content + styling + SEO + a11y)
2. **Structural change** — splitting a large section component, reorganising file structure, adding routing
3. **User expresses dissatisfaction** — "that's wrong", "think harder", "try again", "this isn't right"
4. **Complex feature request** — new page section, major redesign, new interactive component
5. **Content + code entangled** — adding a procedure requires `types.ts` + `content/site.ts` + icon import/map in the consuming section component + potentially `index.html` SEO

When auto-triggering, briefly inform the user:
> "This looks like a cross-cutting task — activating architect mode for deeper analysis across [list areas]."
