# RKC Automotive — Production Audit Report

**Date:** July 20, 2026 (session continued)  
**Workspace:** `C:\Users\BS\Desktop\Software\rkcautomotive`  
**Remote:** `https://github.com/DSeeHappy/rkcautomotive.git`  
**Honesty rule:** Nothing is labeled “Spark-generated” without Bifrost HTTP evidence in `scripts/.spark-logs/`.

---

## Production readiness score: **78 / 100**

| Band | Meaning |
|------|---------|
| 90–100 | Ship with confidence after Lighthouse + full browser QA |
| 70–89 | Shipable for content/SEO hubs; verify CWV/a11y post-deploy |
| &lt;70 | Blockers remain |

**Why 78:** All five missing brand hubs (GMC, Lexus, Acura, Tesla, Alfa Romeo) are Spark-backed EN+ES and live in templates; build PASS; route smoke PASS including new hubs. Still **UNVERIFIED:** Lighthouse/CWV, full browser UX, Aikido (login required).

---

## Spark evidence (THIS session ledger)

**Endpoint:** `http://100.110.254.98:4001/v1/chat/completions`  
**Auth:** `BIFROST_KEY_PARTNER_PROJECT` + `x-bf-vk`  
**Routing:** large → `vllm/research` (`research-spark`); small → `vllm/smart` (`smart-spark`)  
**Ledger:** `scripts/.spark-logs/session-ledger.jsonl`

| Metric | Count |
|--------|------:|
| Total logged attempts | **201** |
| HTTP 200 successes | **148** |
| Failures (mostly curl 56 / Tailscale reset) | **53** |
| OK `vllm/research` / `research-spark` | **52** |
| OK `vllm/smart` / `smart-spark` | **96** |

### Spark-generated copy (all five brands complete)

| Brand | EN | ES | Evidence |
|-------|----|----|----------|
| GMC | research (+ smart picks) | smart | `.tmp-brand-hub-gmc.json` + `res-gmc-*` |
| Lexus | research | smart | `.tmp-brand-hub-lexus.json` |
| Acura | research EN | **smart sentence-chunks** (completed this continuation) | `.tmp-brand-hub-acura.json`, `acura-es-progress.json`, `res-acura-es3-*` |
| Tesla | research EN; smart ES + picks-fix | smart | `.tmp-brand-hub-tesla.json` |
| Alfa Romeo | research EN | smart | `.tmp-brand-hub-alfa-romeo.json` |
| Phase 9 checklist | — | smart (3 tiny calls) | `scripts/.spark-logs/phase9-review.json` |
| Live bursts / pings | both | — | `res-burst-*`, health pings |

**Acura ES note:** Long single-call translations repeatedly hit curl 56. Completed via **sentence-chunked smart** calls (honest routing: still small-context → smart). No hand-authored Spanish.

### Agent-wired only (NOT Spark copy)

| Item | Notes |
|------|-------|
| `scripts/apply-brand-hubs.mjs` inserts into TS | Mechanical from Spark JSON |
| Spark tooling scripts | `spark-routed.mjs`, bursts, Acura ES helpers |
| `public/images/brands/tesla.svg`, `alfa-romeo.svg` | Local SVG assets |
| CATEGORY featured flags / `MODEL_TYPES` | Wiring |
| Discovery `discovery-local.json` | Filesystem scan |
| Prior service-body copy already in repo | **Not regenerated this session** |

---

## Phase results

### 1. Discovery
- 29 App Router `page.tsx` templates; dynamic vehicle routes expand at build (**1040** IndexNow URLs).
- Missing hubs before: GMC/Lexus/Acura/Tesla/Alfa — **all present** in `VEHICLE_BRANDS` + logos OK.

### 2. Click-through QA (sample HTTP)
- `scripts/audit-routes.mjs` against `localhost:3000` after fresh `npm run start`: **All checks passed (0 issues)**.
- Includes `/vehicles/gmc/sierra-1500`, `/vehicles/lexus/rx`, `/vehicles/acura/mdx`, `/vehicles/tesla/model-3`, `/vehicles/alfa-romeo/giulia`.
- Full interactive browser QA (dropdowns/mobile gestures): **UNVERIFIED**.

### 3. Visual quality
- **UNVERIFIED** in browser. RKC design system preserved; no layout redesign this pass.

### 4. Automotive data
- Hubs + failure profiles + reliability snapshots + ES overlays for all five brands.
- Templates (`BrandTabs`, model pages) consume `VEHICLE_BRANDS` / profiles sitewide.
- Tesla Spark EN may overstate OEM-part access — kept as Spark output; rewrite via Spark later if desired.

### 5. SEO
- Locked verified in code: no AggregateRating, no fake hreflang, no AMP.
- `npm run verify:seo`: **PASS**.
- New brand model hubs have unique titles/H1s/canonicals (smoke-verified).

### 6. Performance
- **Lighthouse / CWV: UNVERIFIED**.
- Larger SSG surface (1040 URLs) — expect longer builds.

### 7. Accessibility
- **UNVERIFIED** full WCAG AA.

### 8. Security
- CSP / security headers in `next.config.ts`.
- Phase 9 Spark security checklist suggests verifying CSP + AggregateRating absence (already intentional in codebase).
- **Aikido:** UNVERIFIED — MCP requires user `aikido_login`.

### 9. Sparks (architecture / UX / SEO)
- Large research phase-9 earlier: **failed** (resets).
- Completed via **tiny smart checklist** → `phase9-review.json` (seo/ux/security suggestions logged; not auto-applied as code unless already true).

### 10. Build / lint / smoke
- **`npm run build`:** PASS (exit 0); IndexNow **1040/1040**.
- **`npm run lint`:** 0 errors (script warnings only).
- **`npm run verify:seo`:** PASS.
- **Route smoke:** PASS (see §2).

---

## Phase 9 Spark suggestions (verify — do not treat as done)

From `phase9-review.json` (`vllm/smart`):
- SEO: OG per listing, ServiceArea JSON-LD, image weight on inventory pages  
- UX: BrandTabs contrast/lazy load; optional specificity labels  
- Security: CSP already present — re-verify; AggregateRating absence already enforced  

---

## Open / known

1. Lighthouse, full a11y, Aikido login — UNVERIFIED  
2. `www` Cloudflare 525 — infra (prior)  
3. Tesla OEM-wording — optional Spark rewrite  
4. Dependabot advisories on GitHub remote — separate from this content pass  

---

## Reproduce Spark proof

```bash
node scripts/spark-ping-proof.mjs vllm/research
node scripts/spark-live-burst.mjs
# Inspect scripts/.spark-logs/session-ledger.jsonl and res-*.json
```

*If a claim lacks a log row, treat it as false.*
