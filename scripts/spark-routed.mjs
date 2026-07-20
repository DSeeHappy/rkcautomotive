/**
 * Shared Bifrost Spark caller with authoritative routing:
 * - large → vllm/research
 * - small → vllm/smart
 * Uses scripts/lib/sparkClient.mjs — fail closed on routing mismatch.
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import {
  sparkCall,
  assertSparkOk,
  extractJsonObject,
  MODEL_SMART,
  MODEL_RESEARCH,
  LOG_DIR,
  ROOT,
} from './lib/sparkClient.mjs';

export { LOG_DIR, ROOT, MODEL_SMART as MODEL_SMALL, MODEL_RESEARCH as MODEL_LARGE };
export const BASE = process.env.OPENAI_BASE_URL || 'http://100.110.254.98:4001/v1';
export const KEY = process.env.BIFROST_KEY_PARTNER_PROJECT || process.env.OPENAI_API_KEY;

let CALLS = 0;
export function getCallCount() {
  return CALLS;
}

/**
 * @param {'large'|'small'} size
 * @param {string} label
 * @param {string} user
 * @param {{ system?: string, max_tokens?: number, temperature?: number }} [opts]
 */
export function sparkRouted(size, label, user, opts = {}) {
  if (!KEY) throw new Error('Missing BIFROST_KEY_PARTNER_PROJECT');
  const model = size === 'large' ? MODEL_RESEARCH : MODEL_SMART;
  const why = size === 'large' ? 'large-context→research' : 'small-context→smart';
  const max_tokens = opts.max_tokens ?? (size === 'large' ? 1200 : 500);
  const temperature = opts.temperature ?? (size === 'large' ? 0.3 : 0.15);
  const system =
    opts.system ||
    'You write for RKC Automotive (Englewood CO ASE shop). Return ONLY valid JSON. No markdown. No commentary.';

  CALLS += 1;
  const callLabel = `${label}-c${CALLS}`;

  const result = sparkCall({
    model,
    label: callLabel,
    max_tokens,
    temperature,
    timeoutSec: size === 'large' ? 120 : 60,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user },
    ],
  });

  const t = result.telemetry;
  const meta = {
    ts: t.ts,
    call: CALLS,
    label,
    size,
    why,
    model,
    resolved: t.modelResolved,
    routingKey: t.routingKey,
    routingVerified: t.routingVerified,
    httpStatus: t.httpStatus,
    curlExit: t.curlExit,
    latencyMs: t.latencyMs,
    tokensPerSec: t.tokensPerSec,
    gpuUtil: t.gpuUtil,
    cached: t.cached,
    responseId: t.responseId,
    requestId: t.requestId,
    responseFirst80: result.content.slice(0, 80),
    usage: t.usage,
    error: t.error,
    resFile: t.resFile,
  };
  fs.appendFileSync(path.join(LOG_DIR, 'session-ledger.jsonl'), `${JSON.stringify(meta)}\n`);
  console.log(JSON.stringify(meta));

  assertSparkOk(result, `Bifrost fail ${label}`);

  let parsed;
  try {
    parsed = extractJsonObject(result.content);
  } catch (err) {
    throw new Error(`json parse ${label}: ${err.message}`);
  }
  return { parsed, meta, content: result.content };
}

export function sparkRoutedRetry(size, label, user, opts = {}, attempts = 4) {
  let lastErr;
  for (let i = 1; i <= attempts; i++) {
    try {
      return sparkRouted(size, `${label}-a${i}`, user, opts);
    } catch (err) {
      lastErr = err;
      console.error(`[retry] ${label} attempt=${i}: ${String(err.message).slice(0, 160)}`);
      spawnSync('powershell', ['-Command', 'Start-Sleep -Seconds 2'], { stdio: 'ignore' });
    }
  }
  throw lastErr;
}

export function extractJsonFromSparkFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const j = JSON.parse(raw);
  let c = (j.choices?.[0]?.message?.content || j.choices?.[0]?.message?.reasoning || '').trim();
  if (c.startsWith('```')) c = c.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
  const s = c.indexOf('{');
  const e = c.lastIndexOf('}');
  if (s < 0 || e <= s) throw new Error(`no json in ${filePath}`);
  return {
    parsed: JSON.parse(c.slice(s, e + 1)),
    model: j.extra_fields?.resolved_model_used || j.model,
    sparkKey: j.extra_fields?.routing_info?.key,
    id: j.id,
  };
}
