# RKC Automotive — Production Audit Report

**Date:** July 20, 2026 (Lighthouse follow-up)  
**Workspace:** `C:\Users\BS\Desktop\Software\rkcautomotive`  
**Remote:** `https://github.com/DSeeHappy/rkcautomotive.git`  
**Honesty rule:** Nothing is labeled “Spark-generated” without Bifrost HTTP evidence in `scripts/.spark-logs/`.

---

## Production readiness score: **82 / 100**

| Band | Meaning |
|------|---------|
| 90–100 | Ship with confidence after Lighthouse + full browser QA |
| 70–89 | Shipable for content/SEO hubs; verify CWV/a11y post-deploy |
| &lt;70 | Blockers remain |

**Why 82:** Lighthouse mobile CLI verified on production (5 key pages). CLS **0** sitewide; SEO **100** on all samples. Home performance **67** (LCP 3.8 s, TBT 740 ms) — code fixes applied this pass; re-run after deploy. Inner pages **84–93**. Full browser a11y + Aikido still UNVERIFIED.

---

## Lighthouse / Core Web Vitals (VERIFIED — CLI)

**Tool:** `npx lighthouse` v13.4.0 · mobile form factor · July 20, 2026  
**Script:** `scripts/lighthouse-audit.mjs`  
**Raw JSON:** `scripts/.spark-logs/lh-*.json` · summary `scripts/.spark-logs/lh-summary-prod.json`

### Production (`https://rkcautomotive.com`)

| Page | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|------|-----:|-----:|---:|----:|-----|----:|----:|
| Home `/` | **67** | 97 | 96 | 100 | 3.8 s | **0** | 740 ms |
| Service (brake) | 84 | 96 | 100 | 100 | 3.8 s | **0** | 250 ms |
| Vehicle hub (GMC Sierra) | 93 | 96 | 96 | 100 | 3.1 s | **0** | 90 ms |
| Area (Englewood) | 93 | 96 | 100 | 100 | 2.9 s | **0** | 140 ms |
| Contact | 93 | 97 | 100 | 100 | 3.1 s | **0** | 70 ms |

**Notes:**
- **CLS:** No layout-shift issues detected on any sample page.
- **INP:** Not measured in this Lighthouse run (field CWV still UNVERIFIED).
- **Home bottleneck:** LCP element is hero image (`hero-main.webp`); TBT driven by client JS (GSAP, nav, analytics).
- **Local dev inflated LCP** (8–16 s) — Next dev mode; use production URL or `npm run build && npm run start` for honest perf numbers.
- **Spark prose review:** **FAILED** this session — Bifrost curl 56 (4 attempts logged in `session-ledger.jsonl`). Scores above are from Lighthouse CLI only, not AI-generated.

### Fixes applied (this pass)

| Fix | Target | File(s) |
|-----|--------|---------|
| SSR hero LCP image (server `Image` + client overlay) | Home LCP | `HomeHero.tsx`, `HomeHeroClient.tsx`, `page.tsx` |
| Deprioritize nav logo preload vs hero | Home LCP contention | `AnimatedLogo.tsx` (`fetchPriority="low"`, no nav `priority`) |
| Dynamic import below-fold home sections | Home TBT | `HomeContent.tsx` (`BrandSection`, `ReviewCards`, etc.) |
| `fetchPriority="high"` on service cinematic heroes | Service LCP | `ServiceSharedSections.tsx` |
| Lighthouse audit script + bundle helper | Reproducibility | `scripts/lighthouse-audit.mjs`, `scripts/lighthouse-bundle.mjs` |

**Re-verify after deploy:** `LH_BASE=https://rkcautomotive.com node scripts/lighthouse-audit.mjs`

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
- **Lighthouse / CWV: VERIFIED (lab)** — see § Lighthouse above. Home perf 67 pre-fix deploy; inner pages 84–93. CLS 0.
- **Field INP / CrUX:** UNVERIFIED.
- Larger SSG surface (1040 URLs) — expect longer builds.

### 7. Accessibility
- **Lighthouse a11y:** 96–97 on all 5 sample pages (automated only).
- **Full WCAG AA browser QA:** UNVERIFIED.

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

1. Re-run production Lighthouse after deploy to confirm home LCP/TBT gains from SSR hero split  
2. Full interactive a11y browser QA — UNVERIFIED  
3. Aikido — skipped (login required)  
4. Bifrost Spark LH prose review — failed curl 56 this session  
5. `www` Cloudflare 525 — infra (prior)  
6. Tesla OEM-wording — optional Spark rewrite  
7. Dependabot advisories on GitHub remote — separate from this content pass  

---

## Reproduce Spark proof

```bash
node scripts/spark-ping-proof.mjs vllm/research
node scripts/spark-live-burst.mjs
# Inspect scripts/.spark-logs/session-ledger.jsonl and res-*.json
```

*If a claim lacks a log row, treat it as false.*
