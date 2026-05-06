---
name: review
description: Comprehensive multi-agent code review. Launches 6 parallel review agents (build, security, logic, quality, conflicts, gaps) like a senior dev team. Use before every PR push.
---

## Multi-Agent Code Review

You are the review orchestrator. You analyze the diff, plan a targeted review, then dispatch 6 specialist agents in parallel.

**CRITICAL TOOL CONSTRAINT: You MUST use the `Agent` tool (with `subagent_type: "general-purpose"`) to launch review agents. NEVER use TaskCreate, TaskGet, TaskOutput, or any Task-prefixed tools.**

### Step 1: Gather and Analyze

Run these commands:
```bash
git branch --show-current
git fetch origin main --quiet
git diff --stat origin/main...HEAD
git diff origin/main...HEAD -- . ':(exclude)package-lock.json' ':(exclude)node_modules'
```

Then **analyze the diff yourself** before launching agents. Identify:
- **Categories of change**: new files, deleted files, refactors, dependency additions, security-relevant changes, content changes
- **Risk areas**: which files are most complex or most likely to have bugs
- **Key decisions the author made**: architectural choices visible in the diff

Write a short **diff briefing** (5-10 bullets) summarizing what this PR does and what's risky. You will tailor each agent's scope from this briefing.

### Step 2: Launch All 6 Agents in Parallel

**MANDATORY: All 6 `Agent` tool calls in a SINGLE message.**

Each agent gets:
1. A reference to its instructions file (it reads it itself)
2. Your **tailored briefing** for that agent's specialty
3. The scope context (branch, files, working directory)

**Agent prompt template:**

```
Read and follow the review instructions in <PROJECT_ROOT>/.claude/agents/<agent-file>.md

## Scope
- **Branch:** <branch>
- **Base:** origin/main
- **Repo:** <absolute path to repo>
- **Changed files:** <file list>

## Orchestrator Briefing
<Your analysis tailored to THIS agent's specialty>

## How to get the diff
Run: git diff origin/main...HEAD -- . ':(exclude)package-lock.json' ':(exclude)node_modules'

This is a RESEARCH-ONLY task. Do NOT modify any code. Report findings only.
```

**The briefing is the key.** Tell each agent specifically what to look for based on your diff analysis.

**Agent configuration:**

| Agent File | description | model |
|------------|-------------|-------|
| `review-build.md` | Build review | sonnet |
| `review-security.md` | Security review | sonnet |
| `review-logic.md` | Logic review | **opus** |
| `review-quality.md` | Quality review | sonnet |
| `review-conflicts.md` | Conflicts review | sonnet |
| `review-gaps.md` | Gaps review | sonnet |

Replace `<PROJECT_ROOT>` with the absolute path to the project root.

### Step 3: Synthesize Results

After all 6 agents complete, create a unified report:

```
# Code Review Report

**Branch:** <branch-name>
**Base:** main
**Files Changed:** X files (+Y/-Z lines)
**Date:** YYYY-MM-DD

## Verdict: READY TO MERGE / NEEDS ATTENTION / NEEDS WORK

### Summary
<2-3 sentence overview>

### Critical (must fix before merge)
| # | Agent | File:Line | Issue | Fix |
|---|-------|-----------|-------|-----|

### Warnings (should fix)
| # | Agent | File:Line | Issue | Recommendation |
|---|-------|-----------|-------|----------------|

### Notes (informational)
- ...

### Agent Results
| Agent | Verdict | Critical | Warnings | Notes |
|-------|---------|----------|----------|-------|
| Build | PASS/FAIL | 0 | 0 | 0 |
| Security | PASS/FAIL | 0 | 0 | 0 |
| Logic | PASS/FAIL | 0 | 0 | 0 |
| Quality | PASS/FAIL | 0 | 0 | 0 |
| Conflicts | PASS/FAIL | 0 | 0 | 0 |
| Gaps | PASS/FAIL | 0 | 0 | 0 |

### What Looks Good
- (Highlight things done well)
```

### Verdict Rules

- **READY TO MERGE**: Zero critical findings. Build passes.
- **NEEDS ATTENTION**: No criticals, but 3+ warnings.
- **NEEDS WORK**: Any critical, build failure, or merge conflicts.

### Deduplication & Polish

- If two agents flag the same issue, keep the more detailed one
- Collapse clean results ("Security: PASS — no issues found")
- Every finding: exact file:line + concrete fix
- Do NOT flag pre-existing issues unless the PR makes them worse
- Acknowledge good work — this is a review, not just a bug hunt
