---
name: audit-feature
description: Comprehensive pre-merge quality gate — scans all feature changes, finds issues, recommends fixes
allowed-tools: Read, Grep, Glob, Bash
context: fork
argument-hint: [base-branch]
---

# Feature Audit

Pre-merge quality gate for feature branches. Scans all changed files, runs parallel analysis for 6 concern areas, and produces a structured report with severity-rated findings.

**Base branch:** `$ARGUMENTS` (default: `main` if empty)

---

## Phase 1: Discovery

### 1. Gather Changes

```bash
BASE="${ARGUMENTS:-main}"

git diff "$BASE"...HEAD --stat
git diff "$BASE"...HEAD --name-only
git log "$BASE"...HEAD --oneline
git diff "$BASE"...HEAD
```

### 2. Categorize Files

Group changed files by type:
- **Components** — `App.tsx`, `components/*.tsx`, `components/ui/*.tsx`
- **Content** — `content/site.ts`, `types.ts`
- **Config** — `vite.config.ts`, `tsconfig.json`, `package.json`, `index.html`
- **Deployment** — `.github/workflows/*.yml` (if present)
- **Other** — Everything else

Read every changed file to understand the full scope.

---

## Phase 2: Parallel Analysis

Run these 6 analyses across all changed files.

### Analysis 1: Code Quality
- **File size** — Flag any section component in `components/*.tsx` if it grows past 400 lines (MEDIUM) or 600 lines (HIGH). `App.tsx` should stay thin (composition only).
- **Dead code** — Unused imports, unreachable code, commented-out blocks
- **Debug statements** — `console.log` left in production code
- **TODO/FIXME/HACK** — Flag any new ones
- **Duplicated logic** — Similar JSX blocks that should use data mapping
- **Magic numbers/strings** — Hardcoded values that should be constants
- **Missing types** — `any` usage, untyped event handlers

### Analysis 2: Security
- **XSS** — `dangerouslySetInnerHTML` without sanitization
- **CDN integrity** — Tailwind CDN, esm.sh without SRI hashes
- **Data exposure** — Personal info (phone, email) intentional vs accidental
- **External links** — Missing `rel="noopener noreferrer"`
- **Dependency vulnerabilities** — New packages with known CVEs

### Analysis 3: Architecture
- Content data in `content/site.ts`, not hardcoded in components
- Types in `types.ts`, not inline
- Shared UI primitives in `components/ui/`, not duplicated across section components
- Section components in `components/*.tsx` stay focused — don't let any grow into a monolith
- Icon name strings in `content/site.ts` are actually imported and resolved in the consuming component
- Tailwind config changes in `index.html`, not a separate config file

### Analysis 4: Performance & Accessibility
- **Images** — Lazy loading, explicit dimensions, WebP format
- **Animations** — `prefers-reduced-motion` respected
- **Bundle size** — Large imports (entire icon library vs individual icons)
- **Accessibility** — ARIA labels, semantic HTML, keyboard navigation, focus management, color contrast
- **Core Web Vitals** — LCP, FID, CLS implications of changes

### Analysis 5: SEO & UX
- **Meta tags** — title, description, Open Graph
- **Heading hierarchy** — single h1, logical structure
- **Mobile responsiveness** — works at 320px to 1440px
- **Touch targets** — minimum 44px on mobile
- **Smooth scroll** — all nav anchor links work correctly

### Analysis 6: Deployment & Integration
- **Vite base path** — matches the hosting target (default `/` currently)
- **GitHub Actions** — if a workflow exists, it is intact
- **Asset paths** — work with the configured base path
- **Importmap** — versions match `package.json`
- **CDN dependencies** — all URLs accessible
- **Placeholder data** — placeholder phone numbers, WhatsApp, email, addresses, or `picsum.photos` images that must not ship to production

---

## Phase 3: Report

### Severity Definitions

| Level | Meaning | Action |
|-------|---------|--------|
| **CRITICAL** | Security holes, broken builds, data exposure | Must fix before merge |
| **HIGH** | Accessibility violations, broken functionality | Should fix before merge |
| **MEDIUM** | Code quality, SEO gaps, minor UX issues | Consider fixing |
| **LOW** | Style, minor improvements, nice-to-haves | Optional |

### Report Format

For each finding:
```
### [SEVERITY] — Short description
**File:** `path/to/file.ext:line`
**Category:** Code Quality | Security | Architecture | Performance | SEO | Deployment
**Issue:** What's wrong and why it matters.
**Fix:** Code snippet or specific instruction.
```

### Summary Scorecard

```
## Audit Summary

| Category | Critical | High | Medium | Low |
|----------|----------|------|--------|-----|
| Code Quality | 0 | 0 | 0 | 0 |
| Security | 0 | 0 | 0 | 0 |
| Architecture | 0 | 0 | 0 | 0 |
| Performance & A11y | 0 | 0 | 0 | 0 |
| SEO & UX | 0 | 0 | 0 | 0 |
| Deployment | 0 | 0 | 0 | 0 |
| **Total** | **0** | **0** | **0** | **0** |

## Recommendation: GO / NO-GO
```

---

## Rules

1. **Read-only** — do not modify any files, only report findings
2. **Evidence-based** — every finding must reference a specific file and line
3. **Actionable** — every finding must include a concrete fix
4. **No false positives** — if uncertain, note it as "potential" not definitive
5. **Prioritized** — CRITICAL and HIGH findings first, then MEDIUM, then LOW
