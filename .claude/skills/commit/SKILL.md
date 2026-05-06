---
name: commit
description: Stage, review, and commit changes with a clean message. Runs build verification before committing. TRIGGER when: user says "/commit", "commit this", "commit changes". DO NOT TRIGGER automatically - only on explicit user request.
---

## Commit Workflow

### 1. Pre-commit Review

- Run `git diff --staged` to see what's being committed
- If nothing staged, run `git diff` to show unstaged changes and ask what to stage
- Check for:
  - Hardcoded secrets, .env references
  - `console.log()` statements
  - TODO/FIXME comments
  - Placeholder data (fake phone numbers, test emails)
- Verify no `.env` or `.env.local` files are staged
- Ensure changes match the intended scope (no unrelated files)

### 2. Code Quality Check

- Path aliases (`@/`) or consistent relative imports — don't mix styles within a component
- New shared primitives in `components/ui/`, not duplicated across section components
- Content data in `content/site.ts`, not hardcoded in JSX
- Types in `types.ts`, not inline
- Icon names referenced in `content/site.ts` are actually imported and mapped in the consuming section component

### 3. Build Verification (MANDATORY -- do NOT skip)

```bash
npm run build
```

This runs TypeScript type-checking + Vite bundling. If it fails locally, it will fail anywhere else. Do NOT skip this step.

If build fails, isolate the cause:
```bash
npx tsc --noEmit    # TypeScript type-check only
```

**Report results to the user before proceeding. If build fails, STOP. Fix the errors first.**

### 4. Stage and Commit

- Stage only relevant files (never `git add .` or `git add -A`)
- Write a concise commit message: imperative mood, under 72 chars
- Format: `type: description` where type is feat|fix|refactor|docs|chore|style
- No AI co-author lines

### 5. Post-commit

- Run `git log --oneline -3` to verify
- Remind: push with `git push origin <branch-name>` when ready
- Remind: run `/review` before creating a PR
