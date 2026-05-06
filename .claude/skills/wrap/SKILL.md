---
name: wrap
description: Wrap session - save context, create session log, commit changes
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
argument-hint: [session-name]
---

# Session Wrap-Up

Save all important context from this session. Session name: `$ARGUMENTS` (if empty, auto-detect 2-4 word kebab-case name from conversation). Date: $DATE

## Phase 1: Analyze (DO NOT WRITE YET)

### 1. Session Setup

**Session name:** Use provided name or derive from conversation (e.g., "hero-redesign", "services-update").

**Session log path:** `sessions/[DATE]_[session-name].md`

**Collision check:** Check if file already exists — append `-2` if it does.

### 2. Scan & Plan

Find files that may need updates:
- `CLAUDE.md` (check if architecture or commands changed)

**Analyze conversation** for:
- Decisions made
- Key learnings or architecture insights
- Files changed
- New patterns discovered

**Identify open items** — scan the full conversation for:
- Explicit "TODO" or "need to" statements
- Unfinished work
- Next steps discussed but not yet tracked

## Phase 2: Execute

### 3. Update Context Files

**CRITICAL — Context Preservation Rules:**
- NEVER delete existing content that is still active
- ADD new items alongside existing ones
- When in doubt, keep it

**CLAUDE.md:** Edit specific sections if commands, rules, or architecture changed.

### 4. Create Session Log

Path: `sessions/[DATE]_[session-name].md`

```markdown
---
wrap_id: [DATE]_[session-name]
date: [DATE]
tags: [3-6 searchable keywords]
summary: One-line summary (max 100 chars)
status: closed
---

# Session: [session-name]

**Wrap ID:** `[DATE]_[session-name]`
**Commit:** [fill after git commit]

## Summary

[2-3 sentences of what was accomplished]

## Key Decisions

- [decisions made this session]

## Changes Made

- [file]: [what changed and why]

## Open Items

- [unresolved items, next steps]
```

**Tags:** Use consistent keywords:
- Topics: `hero`, `services`, `contact`, `faq`, `testimonials`, `navbar`, `footer`, `animations`, `accessibility`, `seo`, `performance`, `deployment`
- Actions: `feature`, `bugfix`, `refactor`, `content-update`, `style`, `a11y`

### 5. Git Commits (Code first, then Wrap)

**Step 1:** `git status --short`

**Step 2:** Categorize files:
- **Code files:** Source code, configs
- **Wrap files:** Session logs, CLAUDE.md

**Step 3:** Code commit (if code files exist):
```bash
git add [code files explicitly]
git commit -m "<type>: <description>"
```

**Step 4:** Wrap commit:
```bash
git add -A
git commit -m "wrap: [DATE]_[session-name] - [summary]"
```

### 6. Confirm

Report:
- Files updated
- Session log path
- Git commit hash(es)
- Open items for next session

## Rules

1. Read before editing — never overwrite blindly
2. Preserve existing file structure
3. Be concise — bullets over prose
4. Session logs are append-only — never modify past sessions
5. No AI co-author lines
