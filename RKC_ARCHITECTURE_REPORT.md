# RKC Automotive — Phase 1 Architecture Report

**Date:** July 20, 2026  
**Workspace:** `C:\Users\BS\Desktop\Software\rkcautomotive`  
**Remote:** `https://github.com/DSeeHappy/rkcautomotive.git`  
**Scope:** Foundation audit only — **no product rewrite** in this phase.

---

## Executive honesty check

| | Current codebase | Master vision |
|---|---|---|
| **What it is** | Englewood, CO ASE auto **repair shop marketing site** | Automotive **media / education / vehicle intelligence / authority** platform (MotorTrend × Edmunds × Wikipedia-AI hybrid) |
| **Primary job** | Convert local drivers → call / visit bay | Teach, compare, cite sources, build topical authority at national scale |
| **Monetization signal** | `$120/hr` labor, phone CTAs, warranty claims advocacy | Authority → trust → (still) shop demand + future content products |
| **Dealership?** | No | **Still no** — never inventory / financing / trade-in / sales funnel |

**Verdict (code + Spark):** This repo is a **strong local SEO repair funnel with programmatic vehicle pages**, not MotorTrend. That gap is the point of Phases 2–10 — not something to paper over.

Spark one-liner (`vllm/smart`, HTTP 200): *“Local trust beats national hype”* — useful as a reminder to **keep the shop**, not as a claim that the site already is an authority platform.

---

## 1. Current state (verified)

### 1.1 Framework & deploy

| Item | Reality |
|---|---|
| Framework | **Next.js 16.0.7** App Router |
| UI | React **19.2**, Tailwind **4**, Headless UI, Lucide, GSAP |
| Fonts | Bebas Neue + Manrope (`app/layout.tsx`) |
| Hosting | Vercel (`@vercel/analytics`) + optional GA |
| Middleware | **None** |
| API routes | **None** (`app/api` absent) |
| Database | **None** — all content in `lib/*.ts` / JSON overlays |
| Dev | `npm run dev` → **port 3000** |

Security headers (CSP, nosniff, frame options) live in `next.config.ts`. Preferred canonical is apex `https://rkcautomotive.com` (www SSL historically broken — documented in config comments).

### 1.2 Route map (crawlable sitemap)

Source of truth: `node scripts/count-routes.mjs` → **1040 unique** URLs.

| Family | Count | Paths |
|---:|---:|---|
| Core | 13 | `/`, about, reviews, contact, pricing, warranty, services, englewood-co-auto-repair, FAQ, privacy, terms, areas-we-serve, vehicles-we-service |
| Services | 13 | `/services/*-englewood-co` |
| Areas | 20 | `/areas-we-serve/[slug]` |
| Vehicle hubs | 127 | `/vehicles/[make]/[model]` |
| Deep dives | 867 | `/vehicles/[make]/[model]/[serviceSlug]` |
| **Total** | **1040** | |

Static generation: `generateStaticParams` + `dynamicParams = false` on vehicle and area dynamic routes (unknown slugs → real 404).

### 1.3 Data model (static, not a knowledge DB)

| Module | Role |
|---|---|
| `lib/constants.ts` | **BUSINESS NAP**, hours, labor rate, SERVICES (13), FAQ, warranty providers, nav |
| `lib/vehicleBrands.ts` | **19 brands** — marketing paragraphs, Colorado notes, common models |
| `lib/vehicleModels.ts` | `VEHICLE_MODELS` = brands × `commonModels` (+ types, 3D category GLBs, images) |
| `lib/modelCommonServices.ts` | Per-type service catalog feeding deep-dive params |
| `lib/modelDeepDiveContent.ts` | **Template-generated** model×service marketing copy |
| `lib/brandFailureProfiles.ts` | Brand failure / buyer-warning narratives (Spark-assisted marketing; **not OEM-certified specs**) |
| `lib/modelReliabilityNotes.ts` | Sparse per-model reliability snapshots + FAQs |
| `lib/serviceAreas.ts` | Area landings + geo/flag metadata |
| `lib/seo.ts` / `lib/og.ts` | JSON-LD, sitemap shards, metadata helpers |
| `lib/i18n/*` | Spanish overlays for services/areas/brands/etc. |
| `lib/language.tsx` | Client **EN\|ES** toggle (`localStorage`) |

**Important:** There is no VIN graph, no OEM spec tables, no recall feed, no parts catalog DB. Deep dives are **repair-shop SEO content**, not a verified vehicle knowledge graph.

### 1.4 SEO / GEO

**Strengths (verified in code):**

- Sitewide `LocalBusiness` + `AutoRepair` JSON-LD with stable `@id` (`lib/seo.ts`)
- Service, FAQ, breadcrumb, WebPage schemas; intentionally **no hollow AggregateRating / fake Offers**
- Sharded sitemaps (`core|services|cities|vehicles`), IndexNow on `postbuild`, `robots`, `llms.txt`
- Canonical redirects for legacy service aliases (`next.config.ts`)
- GEO cite components (`GeoCiteFacts*`) for machine-readable local facts

**Limits:**

- English-only crawlable URLs; `HAS_LOCALE_URL_SEGMENTS = false` — **no hreflang** (correct per `lib/i18n/localeSeo.ts`)
- Spanish is UX-only; Google indexes SSR English
- ~994 vehicle URLs are thin-ish programmatic SEO; risk of template sameness without stronger E-E-A-T / unique data

### 1.5 Performance & UX

Prior Lighthouse CLI samples (`scripts/.spark-logs/lh-summary*.json`, production):

| Page | Perf (samples) | Notes |
|---|---:|---|
| Home | ~59–67 | LCP hero bottleneck; TBT from client JS (GSAP, nav, analytics) |
| Inner (service / vehicle / area / contact) | ~64–95 | CLS **0** on samples; SEO **100** |

UX is **shop conversion**: splash, sticky call bar, floating call button, warranty advocacy storytelling, brand tabs, model hubs with 3D category viewers (`@google/model-viewer`). First viewport is repair marketing, not media editorial.

### 1.6 i18n

- Toggle: `LanguageProvider` + `LanguageToggle`
- Copy: large ES overlays under `lib/i18n/` (much of it Spark-translated offline)
- Policy documented: do **not** emit hreflang until real `/es` routes exist

### 1.7 AI / Spark usage today

| Mode | Reality |
|---|---|
| In-product assistant | **None** |
| RAG / knowledge API | **None** |
| Offline content pipeline | **Heavy** — `scripts/spark-*.mjs`, Bifrost `http://100.110.254.98:4001/v1` |
| Models | `vllm/research` (large) · `vllm/smart` (small) |
| Auth | `BIFROST_KEY_PARTNER_PROJECT` + `x-bf-vk` |
| Logs | `scripts/.spark-logs/` (+ `session-ledger.jsonl`) |

Spark is a **build-time copy factory**, not a runtime intelligence layer.

---

## 2. Spark evidence for this Phase 1 audit

**Honesty rule:** Nothing below is labeled Spark-derived without HTTP logs.

### Session traffic (this audit)

| Batch | Result | Log |
|---|---|---|
| Live bursts ×3 | **18/18 HTTP 200** (research + smart alternating) | `res-burst-*-*.json`, `session-ledger.jsonl` |
| Architecture critique | **research-spark** 200 · 61.7s · 1725 tokens | `res-p1-critique-a1-vllm_research-c1-*.json` |
| Tech debt bullets | **smart-spark** 200 | `res-p1-debt-a4-vllm_smart-c5-*.json` |
| Roadmap 2–10 | **research-spark** 200 · 81s · 2209 tokens | `res-p1-roadmap-a2-vllm_research-c7-*.json` |
| Keep / avoid | **smart-spark** 200 | `res-p1-keep-a1-vllm_smart-c8-*.json` |
| Opportunities + AI safety | **research-spark** 200 | `res-p1-opp-a1-vllm_research-c9-*.json` |
| Verdict | **smart-spark** 200 | `res-p1-verdict-a1-vllm_smart-c10-*.json` |
| Aggregate | `scripts/.spark-logs/phase1-arch-audit-retry.json` | |

**Note:** First large call collided with a burst and failed curl **56** (logged). Retries succeeded. Transient Tailscale/Bifrost resets remain an operational risk.

### Spark vs code — corrections applied in this report

| Spark claim | Correction from code inspection |
|---|---|
| “Excellent Core Web Vitals” / “fast static” as unqualified strength | Home LCP still weak (~3.8–5s in samples); CLS is the bright spot |
| “ES toggle = feature flags” | It is a **language** toggle, not feature flags |
| Smart keep/avoid listed “warranty” / “parts” under avoid | **Wrong for RKC** — warranty *claims advocacy* and repair parts usage are core shop value; avoid means **dealership sales**, not shop warranty work |
| Critique roadmap renamed phases away from Master Vision | Prefer Master Vision phase names (below); Spark detail used as input, not gospel |

---

## 3. Technical debt

Grounded in code inspection; Spark debt bullets used as secondary signal.

1. **No knowledge DB** — 1040 pages from TS templates; cannot power cited AI answers or verified specs.
2. **Programmatic thinness** — 867 deep dives share template DNA (`modelDeepDiveContent.ts`); uniqueness uneven vs brand hubs / reliability snapshots.
3. **Content sprawl / governance** — `constants.ts` is huge; Spark scripts + `.tmp-*` artifacts litter the tree; no formal “source → citation → publish” pipeline.
4. **Failure profiles ≠ verified facts** — marketing narratives can be mistaken for OEM truth if reused by future AI without confidence gates.
5. **i18n not crawlable** — bilingual UX without `/es` URLs; Spanish SEO unrealized.
6. **Home performance** — hero LCP + client JS (GSAP, splash, sticky chrome) hurt mobile perf.
7. **No automated route/SEO regression CI** — 1040 URLs; scripts exist (`verify-seo`, lighthouse) but not a hard gate.
8. **No runtime API surface** — blocks Phase 4 assistant until a safe data plane exists.
9. **Image / media provenance mixed** — Wikimedia, Unsplash, local assets; authority platform will need stricter attribution.
10. **Spark dependency for copy** — great for volume; dangerous without human ASE review + “unable to verify” policy.

---

## 4. Opportunities aligned to authority-platform vision

Reuse what already exists; do not pretend it is MotorTrend yet.

| Opportunity | Reuse | Phase |
|---|---|---|
| **Vehicle knowledge graph** | Brands, models, failure profiles, reliability notes as *candidates* → promote only with sources | 2 |
| **Authority model pages** | Evolve hubs from “repair in Englewood” → “model intelligence + shop CTA” | 3 |
| **Cited AI assistant** | Bifrost already proven for offline gen; productize with RAG over **verified** rows only | 4 |
| **Comparisons** | Reliability / ownership themes — never MSRP inventory or finance | 5 |
| **Content engine** | Spark scripts → editorial workflow with review gates | 6 |
| **Community (careful)** | Reviews / Q&A later; moderation + no fake specs | 7 |
| **SEO authority** | Keep local NAP cluster; add topical authority beyond geo suffixes | 8 |
| **Design system for media** | Preserve RKC brand; separate “shop” vs “learn” IA | 9 |
| **Testing / CWV / a11y gates** | Lighthouse scripts + SEO verify → CI | 10 |

Spark (`p1-opp`) correctly stressed: reuse `brandFailureProfiles` / reliability notes / deep-dives / warranty **without fabricating specs**, and keep NAP consistency.

---

## 5. Recommended roadmap (Phases 2–10)

Phase 1 = this report. Phases below follow Master Architecture Vision naming. Spark roadmap JSON informed deliverables; **shop-first constraints** override Spark where it drifted toward generic shop-software or inventory.

### Phase 2 — Knowledge DB (foundation)

- Introduce a real data plane (Postgres or equivalent) with tables for: Make, Model, Generation, Topic, Claim, Source, Confidence.
- Migrate **curated** subsets of failure profiles / reliability notes as `Claim` rows with `source_url` / `review_status`.
- **Exit:** queries return only rows with confidence ≥ threshold; otherwise `"Unable to verify with available data."`
- **Do not ship** a half-empty DB as “done” — Phase-2-prep scaffolding only until sources land.

### Phase 3 — Vehicle authority pages

- Redesign `/vehicles/...` from pure repair SEO → **authority layout** (overview, known issues *with citations*, maintenance themes, Colorado notes, shop CTA).
- Keep Englewood service CTAs; stop implying dealer inventory.
- Deduplicate template sameness; promote sparse high-quality models first.

### Phase 4 — AI assistant

- Runtime chat via Bifrost (`vllm/smart` for short, `vllm/research` for hard) **grounded on Phase 2**.
- UI must show: answer, confidence, sources, or explicit inability to verify.
- **Never** invent torque specs, fluid capacities, TSBs, or prices beyond posted labor.

### Phase 5 — Comparison

- Compare models / powertrains / ownership themes using verified claims only.
- No “which car should I finance” dealership flows.

### Phase 6 — Content engine

- Replace ad-hoc Spark scripts with: brief → generate → ASE review → publish → IndexNow.
- Editorial calendar for education (not inventory).

### Phase 7 — Community

- Optional Q&A / tips after moderation exists.
- Ban unverified “facts” from UGC surfaces.

### Phase 8 — SEO authority

- Keep local cluster (services + areas + NAP).
- Add non-geo authority URLs carefully; measure crawl budget vs 867 deep dives (prune or consolidate thin pages).

### Phase 9 — Design

- Dual IA: **Shop** (call, book, warranty) vs **Learn** (authority).
- Preserve RKC visual identity; avoid generic “AI purple” redesigns.
- Fix home LCP as part of media-quality bar.

### Phase 10 — Testing

- CI: route count sanity, SEO verify, Lighthouse budgets, a11y smoke, Spark log policy (no “Spark said” without HTTP proof).
- Security: CSP already present; revisit when APIs ship.

---

## 6. KEEP vs DO NOT BUILD

### KEEP (business still repairs cars)

- NAP: **2120 W Evans Ave, Englewood, CO 80110** · **(720) 749-3965** · hours · `$120/hr`
- ASE / shop story (Ray, Oscar), reviews, contact, pricing transparency
- 13 service landings + areas-we-serve local SEO
- Warranty **claims advocacy** (shop differentiator — not a finance product)
- Bilingual staff UX (and later real `/es` if prioritized)
- Phone / sticky conversion patterns that pay the bills
- JSON-LD LocalBusiness integrity

### DO NOT BUILD

- Dealership **inventory**, VDP clones, “cars for sale”
- Financing, credit apps, lenders, “monthly payment” funnels
- Trade-in estimators / instant cash offers
- Marketplace / classifieds
- Fake AggregateRating or invented specs “to fill the page”
- Unsourced AI answers presented as fact

### NON-NEGOTIABLE (all future AI / content)

1. **Never fabricate vehicle specifications.**  
2. Every AI answer needs **confidence + sources**, or:  
   **“Unable to verify with available data.”**  
3. Marketing copy ≠ knowledge-graph truth until reviewed and sourced.  
4. Spark HTTP logs required before claiming Spark involvement.

---

## 7. Current vs vision — one diagram

```text
TODAY                          TARGET (Ph 2–10)
─────                          ────────────────
Static TS marketing            Verified knowledge DB
Repair SEO (1040 URLs)         Authority pages + citations
Offline Spark copy gen         Cited in-product assistant
Local NAP / call CTAs    ──►   Same shop CTAs + national education
Client ES toggle               Optional crawlable /es
No dealership                  Still no dealership
```

---

## 8. Immediate next actions (after Phase 1)

1. Accept this report as the baseline; **do not rewrite the site yet**.
2. Phase 2 spike: schema for `Claim` + `Source` + confidence (scaffolding labeled Phase-2-prep).
3. Inventory which `brandFailureProfiles` / reliability notes can be promoted vs must be quarantined until sourced.
4. Keep Bifrost metering discipline: large → `vllm/research`, small → `vllm/smart`, always log under `scripts/.spark-logs/`.

---

## Appendix A — Key file tree

```text
app/                    App Router pages + UI
lib/constants.ts        NAP, services, FAQ
lib/vehicleBrands.ts    Brand marketing hubs
lib/vehicleModels.ts    Model list builder
lib/modelDeepDive*.ts   Deep-dive routes + templates
lib/seo.ts              Schema + sitemap shards
lib/i18n/               ES overlays + locale SEO policy
scripts/spark-*.mjs     Bifrost content / audit tooling
scripts/.spark-logs/    HTTP proof for Spark
```

## Appendix B — Phase 1 Spark call IDs (routing)

All `routingKey` values observed this session: `research-spark` | `smart-spark`.  
Aggregate file: `scripts/.spark-logs/phase1-arch-audit-retry.json`.

---

*End of Phase 1. Success criterion met: honest architecture report + roadmap. No product rewrite shipped.*

---

## 9. Phase 2 update (July 20, 2026)

**Status:** Foundation shipped — see `PHASE2_NOTES.md` for full detail.

| Deliverable | Location |
|---|---|
| Knowledge types + verified field helpers | `lib/knowledge/` |
| Catalog migration (127 models, 19 makes) | `lib/knowledge/buildCatalog.ts` |
| Postgres DDL mirror | `lib/knowledge/db-schema.ts` |
| JSON snapshot export | `data/knowledge/catalog.snapshot.json` |
| Pilot authority UI | 5 Toyota pilots (`rav4`, `4runner`, `highlander`, `camry`, `corolla`) → `ModelKnowledgeOverview` + Phase 3 shells |
| Phase 3 section builder | `lib/knowledge/phase3Sections.ts` |
| Spark batch logs | `scripts/.spark-logs/phase2-foundation-*.json`, `phase2-burst-*.json`, `phase2-expand-*.json` |

**Policy:** OEM specs populate from verified kimi data pack (`data/knowledge/oem-pack.json`) when a catalog model matches; gaps stay `"Unable to verify with available data."` Shop observations labeled separately.

**OEM ingest (2026-07-20 v2):** `npm run ingest:oem-vehicle-data` — 128 pack models (126 parsed + 2 Type S aliases), **127/127** site hubs verified. Coverage: `data/knowledge/oem-coverage.json`.

**Next:** Split generations/years/trims when pack adds trim-level rows; expand pack to remaining 53 catalog models.
