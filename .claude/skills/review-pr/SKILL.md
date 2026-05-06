---
name: review-pr
description: "Review a PR. Fetches latest changes, diffs against base, launches 6 parallel review agents, produces structured report. Usage: /review-pr #<PR-number> OR /review-pr <branch> [base-branch]"
---

## PR Review

You are the review orchestrator for reviewing a PR. You fetch the branch, analyze the diff, dispatch 6 specialist agents in parallel, and produce a structured review report.

**CRITICAL TOOL CONSTRAINT: You MUST use the `Agent` tool (with `subagent_type: "general-purpose"`) to launch review agents. NEVER use TaskCreate, TaskGet, TaskOutput, or any Task-prefixed tools.**

### Argument Parsing

Two invocation forms:

**Form 1 (PR number — preferred):** `/review-pr #<number>`
- Uses `gh pr view <number>` to auto-detect head branch, base branch, author, title

**Form 2 (branch names):** `/review-pr <branch> [base-branch]`
- `<branch>` — the PR's head branch
- `[base-branch]` — optional, defaults to `main`

If arguments are missing or ambiguous, ask the user before proceeding.

### Step 0: Resolve PR Details (Form 1 only)

```bash
gh pr view <number> --json headRefName,baseRefName,title,author,additions,deletions,changedFiles,state
```

### Step 1: Fetch and Gather

```bash
git fetch origin --quiet
git fetch origin <base-branch> --quiet
git fetch origin <branch> --quiet

git diff --stat origin/<base-branch>...origin/<branch>
git diff origin/<base-branch>...origin/<branch> -- . ':(exclude)package-lock.json' ':(exclude)node_modules'
```

**Important:** Diff against `origin/<base-branch>...origin/<branch>` (both remote refs). Do NOT checkout the branch.

### Step 2: Analyze the Diff

Before launching agents, analyze the diff yourself and write a **diff briefing** (5-10 bullets).

### Step 3: Launch All 6 Agents in Parallel

**MANDATORY: All 6 `Agent` tool calls in a SINGLE message.**

Use the same agent template as `/review` but with remote refs:

```
Read and follow the review instructions in <PROJECT_ROOT>/.claude/agents/<agent-file>.md

## Scope
- **Branch:** origin/<branch>
- **Base:** origin/<base-branch>
- **Repo:** <absolute path to repo>
- **Changed files:** <file list>

## Orchestrator Briefing
<Your tailored analysis>

## How to get the diff
Run: git diff origin/<base-branch>...origin/<branch> -- . ':(exclude)package-lock.json' ':(exclude)node_modules'

IMPORTANT: Do NOT checkout any branches. Use origin/<branch> refs only.
To read a file as it appears on the PR branch, use:
  git show origin/<branch>:<relative-file-path>

This is a RESEARCH-ONLY task. Do NOT modify any code. Report findings only.
```

**Agent configuration:**

| Agent File | description | model |
|------------|-------------|-------|
| `review-build.md` | Build review | sonnet |
| `review-security.md` | Security review | sonnet |
| `review-logic.md` | Logic review | **opus** |
| `review-quality.md` | Quality review | sonnet |
| `review-conflicts.md` | Conflicts review | sonnet |
| `review-gaps.md` | Gaps review | sonnet |

### Step 4: Synthesize Results

Same format as `/review` with addition of:
- **Author** field (if known)
- Save report to `docs/pr-reviews/` directory

### Step 5: Draft PR Comment

Draft a constructive PR comment. **Always ask for permission before posting to GitHub.**

```bash
gh pr comment <number> --body "<comment>"
```

### Verdict Rules

- **READY TO MERGE**: Zero critical findings. Build passes.
- **NEEDS ATTENTION**: No criticals, but 3+ warnings.
- **NEEDS WORK**: Any critical, build failure, or merge conflicts.
