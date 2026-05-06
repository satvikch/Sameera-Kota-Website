---
name: security-review
description: OWASP-informed security scan on code changes for a public-facing medical website
disable-model-invocation: true
allowed-tools: Read, Grep, Glob
context: fork
---

## Security Review

Scan changed code for security issues relevant to a static React website with CDN dependencies.

### XSS & Content Injection
- `dangerouslySetInnerHTML` without DOMPurify sanitization
- User input rendered without escaping (form fields echoed back)
- URL parameters used in rendering without validation
- `eval()` or dynamic script injection
- Unescaped content in meta tags

### External Dependencies & Supply Chain
- Tailwind CDN loaded without SRI (Subresource Integrity) hash
- esm.sh imports using version ranges (could serve unexpected code)
- New npm dependencies — check for typosquatting, known CVEs
- Third-party scripts (analytics, tracking) added without review

### Data Exposure
- Personal contact info (phone, email, WhatsApp) — verify intentional
- Google Maps embed URL exposing API keys
- Internal comments or metadata in HTML source
- `.env` or `.env.local` files committed
- Hardcoded production URLs or credentials

### Content Integrity
- External image URLs that could be swapped
- Links without `rel="noopener noreferrer"` on `target="_blank"`
- Form action URLs pointing to unexpected destinations
- Open redirects via URL parameters

### Medical Website Compliance
- No patient data collection without disclosure
- Contact forms should indicate data handling practices
- WhatsApp links properly formatted

### Secret Scanning
- Grep for: API keys, tokens, passwords, private keys
- Check for hardcoded production URLs
- Verify `.env` files not committed
- Check `index.html` for exposed keys in CDN URLs or map embeds

### Output Format
For each finding:
- **Severity:** CRITICAL / HIGH / MEDIUM / LOW
- **Location:** file:line
- **Issue:** What's wrong
- **Fix:** How to fix it

Use $ARGUMENTS for specific files or areas to focus on.
