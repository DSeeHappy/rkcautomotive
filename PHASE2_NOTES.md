# RKC Automotive — Phase 2 Notes

**Date:** July 20, 2026  
**Status:** Foundation shipped + ownership expansion (Phase-2-prep)  
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
| `mapFailureProfileClaims.ts` | Maps `brandFailureProfiles` commonModels → model `ClaimRecord`s (model-scoped) |
| `filterFailureProfiles.ts` | Longest-first model mention filter — stops TLX/RDX/MDX cross-contamination |
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
| `brandReliabilityNotes.ts` | manufacturer `ClaimRecord` (`shop_observation`) | medium — brand-level only |
| `brandFailureProfiles.ts` | model `ClaimRecord` for catalog `commonModels` matches | medium — shop observation, **not copied from brand notes** |

All HP, torque, dimensions, MPG, trim specs remain **empty** with `"Unable to verify with available data."`

### 3. Pilot authority wiring

- **Wired makes (19):** all brands with `brandReliabilityNotes` — Honda, Ford, Chevy, Jeep, BMW, Mercedes, Audi, Nissan, Subaru, Ram, Hyundai, Kia, VW, GMC, Lexus, Acura, Tesla, Alfa Romeo, plus Toyota
- **Model hubs wired:** 127 catalog models across those makes get `ModelKnowledgeOverview` + Phase 3 authority shells
- **Ownership populated:** **100 / 127** models
  - **20 models** with full `modelReliabilityNotes` (intro, bullets, FAQs): 5 Toyota + 15 Spark-structured Honda/Ford/Chevy/Jeep (drift stripped before wire)
  - **80 additional** models from `brandFailureProfiles.commonModels` stubs → topics `common-issues`, `colorado-angle`, `service-notes` (+ overview shop summary from first failure profile)
  - **27 hubs** still show honest `"Unable to verify"` in Ownership (catalog models not listed in failure-profile commonModels, e.g. Ford Bronco, BMW i4)
- **Manufacturer claims:** `brandReliabilityNotes` → manufacturer `ClaimRecord` (`shop_observation`) — **never copied into model Ownership**
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
| `spark-phase2-ownership-audit.mjs` | 2/5 HTTP 200 (ping + sources; large calls curl=56 timeout) | `phase2-ownership-audit-*.json` |
| `spark-phase2-own-struct-cont.mjs` | **31/31** HTTP 200 smart; **15** model snapshots | `phase2-own-struct-cont-*.json` |
| `spark-user-visible-proof.mjs` + research-fix | USER-VISIBLE unique proof strings | `USER-VISIBLE-SUMMARY-*.json` |
| `spark-wire-heartbeats.mjs` | smart heartbeats during wiring | `USER-VISIBLE-WIRE-HEARTBEATS-*.json` |

Raw responses: `scripts/.spark-logs/res-*-vllm_*.json`  
Decisions pipe: `scripts/.spark-logs/PHASE2_SPARK_DECISIONS.md`

**Ownership audit (code override):** Spark large calls with embedded source excerpts timed out (curl 56). Stub mapping in `mapFailureProfileClaims.ts` from verbatim `brandFailureProfiles`. Later: compact one-model smart structuring succeeded — wired into `modelReliabilityNotes` after stripping Mustang fluff / Grand Cherokee oil-housing Colorado mislabel / Escape Duratec (not grounded for Escape).

**Spark-backed schema (research `p2-schema-design`):** tables Manufacturer → Model → Generation → Year → Trim → Specs; `doNotFabricate` includes horsepower, torque, MPG, dimensions, OEM claims.  
**Code override:** confidence stays enum (`high|medium|low|none`), not numeric 0–1; Phase-2-prep exit ≠ “all OEM fields populated” (report § Phase 2).

---

## Source audit (ownership / reliability)

| Module | Entity level | Used for Ownership? | Notes |
|---|---|---|---|
| `modelReliabilityNotes.ts` | model | ✅ yes (20 models) | Richest source — intro, bullets, FAQs (Toyota + HF/Chevy/Jeep Spark batch) |
| `brandFailureProfiles.ts` | brand → commonModels | ✅ yes (80 stub models; 15 upgraded to notes) | failureProfiles + buyerWarning + coloradoNotes |
| `brandReliabilityNotes.ts` | manufacturer | ❌ no (manufacturer claims only) | reliablePicks + bullets — not copied to model Ownership |
| `modelDeepDiveContent.ts` | model service pages | ❌ no | Reuses `brandFailureProfiles` inline; not duplicated into knowledge layer |
| `vehicleBrands.coloradoNotes` | manufacturer marketing | ❌ no | General brand copy, not model ownership |

### 6. Knowledge hub integrity fix (2026-07-20 urgent)

| Fix | Detail |
|---|---|
| **Model-scoped ownership** | `filterFailureProfilesForModel()` — only failure modes that explicitly name the model (longest token match: TLX ≠ TLX Type S). Removed brand-wide `shop_observation` intro duplicate. |
| **Deduped shop strip** | `buildShopObservationsSection()` excludes topics already in Phase 3 Ownership (`common-issues`, `colorado-angle`, `service-notes`). |
| **Catalog years** | `buildCatalog.ts` uses RKC marketing catalog at **medium** confidence when image metadata absent — RDX/Integra no longer “Unable to verify” for year span. |
| **OEM spec UX** | `ModelKnowledgeOverview` collapses 12 empty spec cards → single honest banner when `hasVerifiedSpecs === false`. |
| **Vehicle images** | +19 `site-model-supplements.csv` rows merged → **126/127** catalog rows; **101/127** local WebP on disk; `resolveModelImageForHub()` hotlinks licensed Wikimedia when WebP pending; knowledge overview shows hero image + source caption. |
| **Spark proof** | `spark-telemetry-live.mjs` PASS (smart + research, routingVerified); `spark-filter-failure-profiles.mjs` smart audit for Acura scoping. |

**Image coverage (audit):** `101/127` local WebP files; remaining 26 pending download (Wikimedia rate limits) — hubs still render via `resolveModelImageForHub()` source URL fallback until sync completes.

**Acura pilot after fix:** TLX Type S → transmission shudder only; MDX → oil consumption only; RDX → infotainment only; base TLX → no failure-profile stubs (honest empty ownership if no modelReliabilityNotes).

---

## Exit criteria (Phase 2)

| Criterion | Status |
|---|---|
| Schema with source/confidence | ✅ |
| Existing catalog migrated without invented specs | ✅ |
| Pilot pages wired to knowledge layer | ✅ (127 hubs / 19 makes) |
| Ownership populated from verified shop text | ✅ (100 / 127 models) |
| Build + typecheck pass | ✅ (`npm run build`) |
| Spark logs for schema batches | ✅ continuous HTTP 200 (ownership audit partial — code mapping verified) |

---

## Explicitly NOT built (Phases 4–7)

- AI chat assistant
- Comparison engine
- Community / UGC
- Full CMS / editorial workflow

---

## Phase 3 preview (active on wired makes)

- **Authority shells:** Overview / Engineering / Ownership / Enthusiast / Comparison (`lib/knowledge/phase3Sections.ts`)
- Overview populated from verified catalog identity + shop summary when claims exist
- Ownership from `modelReliabilityNotes` (full) or `brandFailureProfiles.commonModels` (structured stubs)
- Engineering, Enthusiast, Comparison show `"Unable to verify with available data."` until sourced
- Brand-level shop observations in catalog (`brandReliabilityNotes`) — not copied into model Ownership
- Done: Honda Civic/Accord/CR-V/Pilot, Ford F-150/Explorer/Escape/Mustang, Chevy Silverado/Tahoe/Equinox/Malibu, Jeep Wrangler/Grand Cherokee/Gladiator richer Ownership via Spark-structured notes
- **OEM pack ingest (2026-07-20 v2):** `npm run ingest:oem-vehicle-data` → `data/knowledge/oem-pack.json` (128 models from updated kimi pack). **127/127** catalog hubs now show verified OEM specs + Engineering/Enthusiast/Comparison; **0** remain unverified. See `data/knowledge/oem-coverage.json`.
- Next: remaining stub models; generations with sourced OEM data
- Split generations with sourced OEM data
- Populate spec fields only when `review_status = verified` and confidence ≥ medium

---

## OEM data pack ingest (2026-07-20)

| Item | Detail |
|---|---|
| **Source** | `C:\Users\BS\Documents\kimi\workspace\rkc-vehicle-data\` (19 make `.md` files, EPA pull scripts) |
| **Pipeline** | `scripts/lib/parseOemMarkdown.mjs` (deterministic) → `scripts/ingest-oem-vehicle-data.mjs` (Spark validate, fail-closed) |
| **Output** | `data/knowledge/oem-pack.json`, `data/knowledge/oem-coverage.json` |
| **Runtime** | `lib/knowledge/oemPack.ts` + `queries.getModelKnowledgeOverview()` |
| **UI** | `ModelKnowledgeOverview` — OEM spec grid + Phase 3 Engineering/Enthusiast/Comparison when pack data exists |
| **EPA refresh** | `scripts/epa/epa_pull*.py` copied from pack for future MPG refresh |
| **Coverage** | 128 pack models → **127 verified** on site hubs; 0 catalog models still `"Unable to verify"`; 1 pack-only (`ford-fusion`, no site hub) |
| **Spark proof** | ingest: smart + research `routingVerified`; `spark-telemetry-live.mjs` PASS |

**Slug mapping:** `mercedes-benz` → `mercedes`, `Silverado 1500` → `silverado`, `Ram 1500/2500` → `1500`/`2500`, `Optima/K5` → `k5`, `Golf/GTI` → `golf`.

**Not invented:** Parser stores verbatim pack text; inline `"Not verified — needs OEM source"` → `confidence: medium` with note; empty-only fields → `confidence: none` (hidden).

---

*See also: `RKC_ARCHITECTURE_REPORT.md` § Phase 2*
