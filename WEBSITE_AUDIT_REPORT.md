# RKC Automotive — Production Audit Report

**Date:** July 20, 2026  
**Workspace:** `C:\Users\BS\Desktop\Software\rkcautomotive`  
**Remote:** `https://github.com/DSeeHappy/rkcautomotive.git`  
**Honesty rule:** Nothing is labeled “Spark-generated” without Bifrost HTTP evidence in `scripts/.spark-logs/` from this session.

---

## Production readiness score: **72 / 100**

| Band | Meaning |
|------|---------|
| 90–100 | Ship with confidence after Lighthouse + full click-through |
| 70–89 | Shipable for content/SEO hubs; verify UX/CWV post-deploy |
| &lt;70 | Blockers remain |

**Why 72:** Five missing brand hubs are now in the app from proven Bifrost calls; build/lint must still confirm green in this pass; Lighthouse, full browser QA, Aikido login, and Acura ES overlays remain **UNVERIFIED / incomplete**.

---

## Spark evidence (THIS session)

**Endpoint:** `http://100.110.254.98:4001/v1/chat/completions`  
**Auth:** `BIFROST_KEY_PARTNER_PROJECT` + `x-bf-vk`  
**Routing:** large context → `vllm/research` (`research-spark`); small context → `vllm/smart` (`smart-spark`)  
**Ledger:** `scripts/.spark-logs/session-ledger.jsonl` + raw `res-*.json` files

| Metric | Count (session ledger) |
|--------|-------------------------|
| Total logged attempts | **138** |
| HTTP 200 successes | **102** |
| Failures (mostly curl 56 / Tailscale reset) | **36** |
| OK `vllm/research` / `research-spark` | **43** |
| OK `vllm/smart` / `smart-spark` | **59** |

### Spark-generated artifacts (copy)

| Artifact | Model(s) | Evidence |
|----------|----------|----------|
| GMC EN hub | research (+ smart picks) | `.tmp-brand-hub-gmc.json` + `res-gmc-*` |
| GMC ES overlays | smart (per-field) | same hub `callMetas` |
| Lexus EN + ES | research EN; smart ES | `.tmp-brand-hub-lexus.json` |
| Acura EN only | research EN; smart picks | `.tmp-brand-hub-acura.json` (`enOnly: true`) |
| Acura ES | **FAILED** | curl 56 after retries — **not invented** |
| Tesla EN + ES | research EN; smart ES + picks-fix | `.tmp-brand-hub-tesla.json` |
| Alfa Romeo EN + ES | research EN; smart ES | `.tmp-brand-hub-alfa-romeo.json` |
| Live bursts / pings | both | `res-burst-*`, `ping-research-*` |
| Phase 9 architecture review | research | **FAILED** (connection reset) — **UNVERIFIED** |

### Agent-wired only (NOT Spark copy)

| Item | Notes |
|------|-------|
| `scripts/apply-brand-hubs.mjs` wiring into TS modules | Mechanical insert from Spark JSON |
| `scripts/spark-routed.mjs`, burst/ping/hub scripts | Tooling |
| `public/images/brands/tesla.svg`, `alfa-romeo.svg` | Simple local SVG assets (not marketing prose) |
| CATEGORY_BRAND_LOGOS featured flags for new makes | Wiring |
| `MODEL_TYPES` entries for new models | Wiring |
| Discovery inventory `discovery-local.json` | Local filesystem scan |
| Prior service body / meta content already in repo | **Not re-proven in this session** — do not claim this pass regenerated them |

---

## Phase results

### 1. Discovery
- **29** App Router `page.tsx` templates (dynamic vehicle/model routes expand at build).
- Missing hubs before this pass: GMC, Lexus, Acura, Tesla, Alfa Romeo — **fixed in data layer** (see §Spark).
- Logos: GMC/Lexus/Acura existed; Tesla + Alfa SVG added (agent-wired).

### 2. Click-through QA
- **UNVERIFIED** — no browser MCP available in this agent session. Recommend manual pass: nav, BrandTabs, `/vehicles/{make}/{model}`, contact form, mobile drawer, footer.

### 3. Visual quality
- **UNVERIFIED** in browser. Design system preserved (RKC navy/brand panels). No intentional layout redesign this pass.

### 4. Automotive data
- `VEHICLE_BRANDS` now includes GMC, Lexus, Acura, Tesla, Alfa Romeo with Spark hub copy.
- `BRAND_FAILURE_PROFILES`, `BRAND_RELIABILITY_SNAPSHOTS` updated for those makes.
- `BRAND_CONTENT_ES`: GMC, Lexus, Tesla, Alfa Romeo from Spark; **Acura ES missing** (failover stopped — EN falls back on ES toggle).
- Note: Some Tesla Spark lines claim “genuine Tesla parts / factory-approved tools” — kept as Spark output; independent-shop accuracy should be edited in a **future Spark rewrite**, not silently hand-rewritten here.

### 5. SEO
- Locked: no AggregateRating, no fake hreflang, no AMP (verified via codebase grep / existing `lib/seo.ts` comments).
- Unique hub content for five new brands improves indexable vehicle surface.
- Full meta uniqueness crawl: **partial / prior tooling** — `npm run verify:seo` to confirm in build step.

### 6. Performance
- **Lighthouse / CWV: UNVERIFIED** (not run).
- More vehicle routes will increase static page count — expect longer builds.

### 7. Accessibility
- **UNVERIFIED** full WCAG AA. Existing a11y script not re-run on live HTML this pass.

### 8. Security
- CSP / security headers present in `next.config.ts`.
- Contact remains `mailto:` pattern (prior).
- Aikido full scan: **UNVERIFIED** this pass — MCP requires `aikido_login` (user sign-in). Not silently skipped as “clean.”
- No secrets committed from molecule-work `.env` (read-only for Bifrost key).

### 9. Sparks (architecture / bug / UX)
- Attempted large `vllm/research` phase-9 review → **connection reset** → **UNVERIFIED**.
- Did **not** invent architecture recommendations.

### 10. Build / lint / smoke
- **`npm run build`:** PASS (exit 0) — static routes expanded; IndexNow submitted **1040** URLs (was ~818).
- **`npm run lint`:** PASS for app errors (0 errors; 19 pre-existing script warnings).
- **`npm run verify:seo`:** PASS.
- Route smoke / browser click-through: **UNVERIFIED**.

**Build evidence:** `scripts/.spark-logs/build-output.txt`
---

## Known open issues (honest)

1. **Acura Spanish overlays** — Spark EN wired; ES translation stopped after Tailscale resets.  
2. **Phase 9 Spark review** — failed; no fabricated findings.  
3. **www.rkcautomotive.com 525** — infra (prior).  
4. **Click-through / Lighthouse / full a11y** — UNVERIFIED.  
5. **Tesla Spark copy** may overstate OEM-part access — schedule Spark rewrite, don’t silently replace.

---

## How to reproduce Spark proof

```bash
node scripts/spark-ping-proof.mjs vllm/research
node scripts/spark-live-burst.mjs
# Inspect:
#   scripts/.spark-logs/session-ledger.jsonl
#   scripts/.spark-logs/res-*.json
```

---

*Report author: agent session with mandatory Bifrost logging. If a claim lacks a log row, treat it as false.*
