---
name: deploy
description: Build, verify, and push to deploy. TRIGGER when: user says "/deploy", "deploy this", "push to production", "ship it".
---

## Deploy Workflow

No deployment workflow is currently checked into this repo (no `.github/workflows/`, default Vite base path). If the user has set up a hosting target (GitHub Pages, Netlify, Vercel, etc.), this skill still verifies build health and that the repo is in a deployable state. Otherwise, confirm the hosting target with the user before pushing.

### 1. Pre-deploy Checks

```bash
# Verify we're on the right branch
git branch --show-current

# Check for uncommitted changes
git status --short

# Verify remote
git remote -v
```

If there are uncommitted changes, STOP and suggest running `/commit` first.

### 2. Build Verification

```bash
npm run build
```

This MUST pass. If it fails, STOP and fix errors.

After successful build, verify the output:
```bash
ls -la dist/
```

### 3. Deployment Config Verification

Check these before pushing:

- `vite.config.ts` — base path is correct for the hosting target (default `/` currently; change to `/<repo>/` only if the host requires a subpath, e.g. GitHub Pages project sites)
- `index.html` — importmap URLs are correct and font preconnects are in place
- Placeholder content (e.g. `+91 99999 99999`, `picsum.photos` doctor photo) — flag anything that should not go live
- No `.env` or `.env.local` files staged

### 4. Push to Deploy

```bash
git push origin main
```

Then trigger the configured hosting workflow (or inform the user if manual steps are required — e.g. no CI is configured yet).

### 5. Verify Deployment

If GitHub Actions is configured:
```bash
gh run list --limit 3
```

Otherwise, ask the user to share the deployment URL so the live site can be verified.

### 6. Post-deploy

- Report: commit hash, deployment URL (if known), workflow status
- Suggest: verify the live site in browser on mobile + desktop
- Note: static hosts typically take 1-2 minutes to propagate changes
