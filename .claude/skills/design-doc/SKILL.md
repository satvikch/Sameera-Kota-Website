---
name: design-doc
description: Generate a technical design document for a completed feature
allowed-tools: Read, Write, Bash, Glob, Grep
argument-hint: <feature-name>
---

# Design Document Generator

Generate a comprehensive technical design document for a completed feature.

**Feature name:** `$ARGUMENTS` (REQUIRED — if empty, ask the user for the feature name before proceeding)

---

## Phase 1: Gather

### 1. Collect Feature Changes

```bash
BRANCH=$(git branch --show-current)
git log main...HEAD --oneline --no-merges
git diff main...HEAD --name-only
git diff main...HEAD
git diff main...HEAD --stat
```

### 2. Read All Changed Files

Read every file listed in the diff to understand the full implementation.

### 3. Gather Architecture Context

Read `CLAUDE.md` and `.claude/experts/react-vite-frontend.md` for patterns and conventions.

---

## Phase 2: Synthesize & Write

### Output Path

```
docs/designs/YYYY-MM-DD_<feature-name>.md
```

Create the `docs/designs/` directory if it doesn't exist.

### Document Structure

```markdown
# Design Document: <Feature Name>

## 1. Metadata

| Field | Value |
|-------|-------|
| **Date** | YYYY-MM-DD |
| **Author** | Satvik |
| **Status** | Implemented |
| **Branch** | <branch-name> |
| **Commits** | <count> commits |

---

## 2. Overview

[2-3 sentences: what was built and the key capability it adds]

---

## 3. Problem Statement

[What problem or gap existed before this feature]

---

## 4. Solution Architecture

[High-level design description:]
- Components involved
- Data flow
- Key design decisions and why

---

## 5. UI Changes

### Screen/Component: `Name`
- **Path:** `path/to/component`
- **Purpose:** What it shows/does
- **User flow:** Step-by-step user interaction

---

## 6. Content Changes

[New or modified content in content/site.ts:]
- Procedures added/modified
- Doctor profile / practice detail changes
- FAQ changes
- Testimonial changes
- Stats / technology items changes

---

## 7. Accessibility Considerations

- Keyboard navigation
- Screen reader support
- Color contrast
- Reduced motion support

---

## 8. SEO Considerations

- Meta tag changes
- Heading hierarchy
- Structured data

---

## 9. Deployment Notes

- **Dependencies:** New packages added
- **Config changes:** vite.config.ts, tsconfig.json, index.html
- **Rollback Plan:** How to revert

---

## 10. File Manifest

### Components
| File | Change | Description |
|------|--------|-------------|

### Content & Types
| File | Change | Description |
|------|--------|-------------|

### Config
| File | Change | Description |
|------|--------|-------------|

### Other
| File | Change | Description |
|------|--------|-------------|

---

## 11. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|

---

## 12. Future Considerations

- What was deferred and why
- Potential v2 improvements
```

---

## Phase 3: Confirm

1. Report the file path
2. Show a brief summary
3. Do NOT commit — suggest `/commit` when ready

## Rules

1. Feature name is required
2. Read everything — don't summarize what you haven't read
3. Code-derived — every section based on actual code
4. No secrets — never include actual env values
5. Do not commit — only write the file
