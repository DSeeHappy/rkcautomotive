# RKC Automotive — Phase 2 Notes

**Date:** July 20, 2026  
**Status:** Foundation shipped (Phase-2-prep)  
**Workspace:** `C:\Users\BS\Desktop\Software\rkcautomotive`

---

## What shipped

### 1. Modular knowledge types (`lib/knowledge/`)

Hierarchy aligned to Master Vision:

`Manufacturer → Model → Generation → Year → Trim → Specs`

Core modules:

| File | Purpose |
|---|---|
| `types.ts` | Records, `VerifiedField`, `ClaimRecord`, overview types |
| `constants.ts` | `UNABLE_TO_VERIFY`, pilot model IDs, confidence threshold |
| `verified.ts` | Field builders — never invent values |
| `specs.ts` | Empty OEM spec scaffold (12 categories) |
| `buildCatalog.ts` | Migrates existing static catalog at import time |
| `queries.ts` | Read API + `getModelKnowledgeOverview()` |
| `db-schema.ts` | Postgres DDL mirror for future migration |
| `index.ts` | Public exports |

### 2. Migration (no invented specs)

| Source | Mapped to | Confidence |
|---|---|---|
| `vehicleBrands.ts` | `ManufacturerRecord` | high (catalog) |
| `vehicleModels.ts` | `ModelRecord` identity + body type | high / medium |
| `vehicleImages.ts` | `yearRange` + generation placeholder | medium when Wikimedia sourced |
| `modelReliabilityNotes.ts` | `ClaimRecord` (`shop_observation`) | medium — **not OEM specs** |

All HP, torque, dimensions, MPG, trim specs remain **empty** with `"Unable to verify with available data."`

### 3. Pilot authority wiring

- **Wired makes (19):** all brands with `brandReliabilityNotes` — Honda, Ford, Chevy, Jeep, BMW, Mercedes, Audi, Nissan, Subaru, Ram, Hyundai, Kia, VW, GMC, Lexus, Acura, Tesla, Alfa Romeo, plus Toyota
- **Model hubs wired:** 127 catalog models across those makes get `ModelKnowledgeOverview` + Phase 3 authority shells
- **Ownership populated:** 5 Toyota models with `modelReliabilityNotes` only — other hubs show honest `"Unable to verify"` gaps in Ownership until model notes land
- **Manufacturer claims:** `brandReliabilityNotes` → manufacturer `ClaimRecord` (`shop_observation`)
- Component: `ModelKnowledgeOverview.tsx`
- Shows: model identity, shop observations when present, Phase 3 authority shells (Overview / Engineering / Ownership / Enthusiast / Comparison), spec category scaffold with honest gaps
- Remaining 0 hubs outside wired makes unchanged

### 4. Storage approach

- **Now:** typed TS modules + runtime-built catalog (`KNOWLEDGE_CATALOG`)
- **Snapshot:** `data/knowledge/catalog.snapshot.json` via `npm run generate:knowledge-catalog`
- **Future:** `db-schema.ts` DDL → Postgres when sourced rows land

### 5. Spark proof (live Bifrost — required)

| Script | Result | Aggregate log |
|---|---|---|
| `spark-phase2-retry.mjs` | 4/4 HTTP 200 (2 smart + 2 research) | `phase2-foundation-retry-*.json` |
| `spark-phase2-burst.mjs` | 7/7 HTTP 200 (4 smart + 3 research) | `phase2-burst-*.json` |
| `spark-phase2-expand.mjs` | 6/6 HTTP 200 (3 smart + 3 research) | `phase2-expand-*.json` |
| `spark-phase2-multi-make.mjs` | Bifrost ping + multi-make batch | `phase2-multi-make-*.json` |

Raw responses: `scripts/.spark-logs/res-*-vllm_*.json`  
Decisions pipe: `scripts/.spark-logs/PHASE2_SPARK_DECISIONS.md`

**Spark-backed schema (research `p2-schema-design`):** tables Manufacturer → Model → Generation → Year → Trim → Specs; `doNotFabricate` includes horsepower, torque, MPG, dimensions, OEM claims.  
**Code override:** confidence stays enum (`high|medium|low|none`), not numeric 0–1; Phase-2-prep exit ≠ “all OEM fields populated” (report § Phase 2).

---

## Exit criteria (Phase 2)

| Criterion | Status |
|---|---|
| Schema with source/confidence | ✅ |
| Existing catalog migrated without invented specs | ✅ |
| Pilot pages wired to knowledge layer | ✅ (127 hubs / 19 makes) |
| Build + typecheck pass | ✅ (`npm run build`) |
| Spark logs for schema batches | ✅ continuous HTTP 200 |

---

## Explicitly NOT built (Phases 4–7)

- AI chat assistant
- Comparison engine
- Community / UGC
- Full CMS / editorial workflow

---

## Phase 3 preview (active on wired makes)

- **Authority shells:** Overview / Engineering / Ownership / Enthusiast / Comparison (`lib/knowledge/phase3Sections.ts`)
- Overview populated from verified catalog identity; Ownership from `modelReliabilityNotes` when present
- Engineering, Enthusiast, Comparison show `"Unable to verify with available data."` until sourced
- Brand-level shop observations in catalog (`brandReliabilityNotes`) — not copied into model Ownership
- Next: promote model-level reliability notes for Honda, Ford, Chevy, etc.
- Split generations with sourced OEM data
- Populate spec fields only when `review_status = verified` and confidence ≥ medium

---

*See also: `RKC_ARCHITECTURE_REPORT.md` § Phase 2*
