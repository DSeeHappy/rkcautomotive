# Spark Telemetry — Verify DGX Spark Actually Ran

RKC scripts **never claim Spark inference succeeded** without proof from Bifrost routing metadata.

## Quick check

```bash
node scripts/spark-telemetry-live.mjs
```

Exits **0** only when both routes pass. Exits **1** on any failure (fail closed).

## What gets recorded

Every call through `scripts/lib/sparkClient.mjs` writes:

| Field | Source |
|-------|--------|
| `endpoint` | `OPENAI_BASE_URL` or `http://100.110.254.98:4001/v1` |
| `modelRequested` | Must be `vllm/smart` or `vllm/research` |
| `modelResolved` | `extra_fields.resolved_model_used` |
| `routingKey` | `extra_fields.routing_info.key` |
| `routingExpected` | `smart-spark` or `research-spark` |
| `routingVerified` | `routingKey === routingExpected` |
| `requestId` | `x-request-id` / client UUID |
| `responseId` | OpenAI-style `chatcmpl-…` |
| `httpStatus` | curl HTTP code |
| `latencyMs` | wall clock |
| `bifrostLatencyMs` | `extra_fields.latency` |
| `tokensPerSec` | `completion_tokens / (latencyMs/1000)` |
| `cached` | headers/body cache flags (or `null`) |
| `gpuUtil` | headers/body if present, else **`unavailable`** |

Logs:

- Per call: `scripts/.spark-logs/telemetry-{iso}.json`
- Ledger: `scripts/.spark-logs/TELEMETRY_LEDGER.jsonl`

## Pass criteria

For `vllm/smart`:

- HTTP 200
- `routingKey === "smart-spark"`
- Non-empty response body

For `vllm/research`:

- HTTP 200
- `routingKey === "research-spark"`
- Non-empty response body

If routing key is missing or wrong → **`ok: false`** — do not use the response.

## Auth

Loads from `C:/Users/BS/molecule-work/.env.local`:

- `BIFROST_KEY_PARTNER_PROJECT` (preferred)
- `OPENAI_BASE_URL` (optional override)

Headers: `Authorization: Bearer …` + `x-bf-vk: …` (same key).

## Scripts using the client

| Script | Role | Status |
|--------|------|--------|
| `scripts/lib/sparkClient.mjs` | Fail-closed core client + telemetry ledger | ✅ |
| `scripts/spark-telemetry-live.mjs` | 1 smart + 1 research smoke test | ✅ |
| `scripts/spark-routed.mjs` | Phase 2 / hub batch router | ✅ |
| `scripts/spark-live-meter-proof.mjs` | Dashboard meter burst | ✅ |
| `scripts/spark-meter-proof.mjs` | Short smart/research meter ping burst | ✅ |
| `scripts/spark-user-visible-proof.mjs` | User-visible proof strings (smart + research) | ✅ |
| `scripts/spark-user-visible-research-fix.mjs` | Research proof in content or reasoning | ✅ |
| `scripts/spark-wire-heartbeats.mjs` | Ownership wiring heartbeats | ✅ |
| `scripts/spark-client.mjs` | Legacy ES translator (delegates to sparkClient) | ✅ |
| `scripts/spark-phase2-*.mjs` | Phase 2 bursts via `spark-routed.mjs` | ✅ |

### Migration checklist (HTTP-200-only → sparkClient)

- [x] `spark-routed.mjs`
- [x] `spark-live-meter-proof.mjs`
- [x] `spark-telemetry-live.mjs`
- [x] `spark-meter-proof.mjs`
- [x] `spark-user-visible-proof.mjs`
- [x] `spark-user-visible-research-fix.mjs`
- [x] `spark-wire-heartbeats.mjs`
- [x] `spark-client.mjs`
- [x] `spark-phase2-burst.mjs` (via spark-routed)
- [x] `spark-phase2-expand.mjs` (via spark-routed)
- [x] `spark-phase2-multi-make.mjs` (via spark-routed)
- [x] `spark-phase2-ownership-audit.mjs` (via spark-routed)
- [x] `spark-phase2-ownership-structured.mjs` (via spark-routed)
- [x] `spark-phase2-hf-struct.mjs` (via spark-routed)
- [x] `spark-phase2-own-struct-cont.mjs` (via spark-routed)

Older one-off scripts (`spark-brand-hubs.mjs`, `spark-tiny.mjs`, etc.) still use raw curl — migrate when next touched.

## Migration note

Scripts that only check `httpStatus === 200` without verifying `routingKey` are **not trustworthy**. Refactor to:

```js
import { sparkCall, assertSparkOk } from './lib/sparkClient.mjs';

const result = sparkCall({ model: 'vllm/smart', messages, label: 'my-task' });
assertSparkOk(result, 'my-task');
// use result.content — only after ok === true
```
