/**
 * Parallel Bifrost Spark ds translator for whole-site Spanish.
 * Models: vllm/research (research-spark / Nemotron) + vllm/smart (smart-spark)
 * ds2/Qwen: NOT exposed on http://100.110.254.98:4001 — skip until user provides URL/IDs
 *
 * Tiny batches (~4 strings) to avoid Tailscale ECONNRESET.
 */
import fs from 'fs';
import path from 'path';
import { spawnSync, spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

for (const line of fs.readFileSync('C:/Users/BS/molecule-work/.env.local', 'utf8').split(/\r?\n/)) {
  const m = line.match(/^([^#=]+)=(.*)$/);
  if (m && !process.env[m[1].trim()]) process.env[m[1].trim()] = m[2].trim();
}

export const BASE = process.env.OPENAI_BASE_URL || 'http://100.110.254.98:4001/v1';
/** Prefer partner VK — OPENAI_API_KEY in molecule-work .env.local is truncated (missing leading s). */
export const KEY = process.env.BIFROST_KEY_PARTNER_PROJECT || process.env.OPENAI_API_KEY;
/** Spark ds — Nemotron 1M (prefer for quality) */
export const DS_RESEARCH = 'vllm/research';
/** Spark ds — smart */
export const DS_SMART = 'vllm/smart';

const SYSTEM =
  'Translate RKC Automotive Englewood CO auto shop website copy to natural US/Mexican Spanish. Return ONLY a JSON object with identical keys. Keep proper nouns and tech codes. No markdown. Use usted.';

export function sparkOnce(model, obj, label, attempt = 1) {
  const req = path.join(ROOT, `.tmp-par-req-${label}-${attempt}.json`);
  const res = path.join(ROOT, `.tmp-par-res-${label}-${attempt}.json`);
  fs.writeFileSync(
    req,
    JSON.stringify({
      model,
      temperature: 0.1,
      max_tokens: 3500,
      messages: [
        { role: 'system', content: SYSTEM },
        { role: 'user', content: `Translate string values to Spanish:\n${JSON.stringify(obj)}` },
      ],
    }),
  );
  const r = spawnSync(
    'curl.exe',
    [
      '-sS',
      '--http1.1',
      '-X',
      'POST',
      `${BASE}/chat/completions`,
      '-H',
      `Authorization: Bearer ${KEY}`,
      '-H',
      'Content-Type: application/json; charset=utf-8',
      '--data-binary',
      `@${req}`,
      '--max-time',
      '120',
      '--connect-timeout',
      '15',
      '-o',
      res,
    ],
    { encoding: 'utf8', timeout: 150000 },
  );
  try {
    if (r.status !== 0) throw new Error(`curl ${r.status}: ${(r.stderr || '').slice(0, 120)}`);
    const raw = fs.readFileSync(res, 'utf8');
    if (!raw.trim()) throw new Error('empty body');
    const j = JSON.parse(raw);
    if (j.error) throw new Error(JSON.stringify(j.error));
    const sparkKey = j.extra_fields?.routing_info?.key;
    let c = (j.choices?.[0]?.message?.content || '').trim();
    if (c.startsWith('```')) c = c.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
    const s = c.indexOf('{');
    const e = c.lastIndexOf('}');
    if (s < 0 || e <= s) throw new Error(`no json: ${c.slice(0, 80)}`);
    return { parsed: JSON.parse(c.slice(s, e + 1)), sparkKey, model };
  } finally {
    try {
      fs.unlinkSync(req);
    } catch {}
    try {
      fs.unlinkSync(res);
    } catch {}
  }
}

export function sparkTranslate(obj, label, { models = [DS_RESEARCH, DS_SMART] } = {}) {
  let lastErr;
  for (let attempt = 1; attempt <= 8; attempt++) {
    const model = models[(attempt - 1) % models.length];
    try {
      const out = sparkOnce(model, obj, label, attempt);
      console.log(`[ds] ${label} OK model=${out.model} sparkKey=${out.sparkKey} attempt=${attempt}`);
      return out;
    } catch (err) {
      lastErr = err;
      console.error(`[ds] ${label} fail model=${model} attempt=${attempt}: ${String(err.message).slice(0, 140)}`);
      spawnSync('powershell', ['-Command', 'Start-Sleep -Milliseconds 1200'], { stdio: 'ignore' });
    }
  }
  throw lastErr;
}

/** Flatten nested object to dotted keys of strings / string arrays leaf objects */
export function flattenStrings(obj, prefix = '', out = {}) {
  if (typeof obj === 'string') {
    out[prefix] = obj;
    return out;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => flattenStrings(item, `${prefix}[${i}]`, out));
    return out;
  }
  if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      const p = prefix ? `${prefix}.${k}` : k;
      flattenStrings(v, p, out);
    }
  }
  return out;
}

export function unflattenStrings(flat) {
  const root = {};
  for (const [key, value] of Object.entries(flat)) {
    const parts = key.replace(/\[(\d+)\]/g, '.$1').split('.');
    let cur = root;
    for (let i = 0; i < parts.length - 1; i++) {
      const p = parts[i];
      const next = parts[i + 1];
      const idx = /^\d+$/.test(next);
      if (cur[p] === undefined) cur[p] = idx ? [] : {};
      cur = cur[p];
    }
    cur[parts[parts.length - 1]] = value;
  }
  return root;
}

export function chunkEntries(entries, size = 4) {
  const chunks = [];
  for (let i = 0; i < entries.length; i += size) chunks.push(entries.slice(i, i + size));
  return chunks;
}

export async function translateObjectParallel(enObj, labelBase, { concurrency = 2 } = {}) {
  const flat = flattenStrings(enObj);
  const entries = Object.entries(flat);
  const chunks = chunkEntries(entries, 4);
  const esFlat = {};
  let i = 0;
  async function worker(workerId) {
    while (i < chunks.length) {
      const my = i++;
      const chunk = chunks[my];
      const obj = Object.fromEntries(chunk);
      const model = workerId % 2 === 0 ? DS_RESEARCH : DS_SMART;
      const { parsed } = sparkTranslate(obj, `${labelBase}-${my}`, { models: [model, DS_SMART, DS_RESEARCH] });
      Object.assign(esFlat, parsed);
    }
  }
  // sequential-ish via sync sparkTranslate but alternate models across chunks in parallel using Promise
  // Node: run two sync loops in worker_threads is heavy; use simple serial with alternating models for reliability
  for (let idx = 0; idx < chunks.length; idx++) {
    const obj = Object.fromEntries(chunks[idx]);
    const model = idx % 2 === 0 ? DS_RESEARCH : DS_SMART;
    const { parsed } = sparkTranslate(obj, `${labelBase}-${idx}`, { models: [model, DS_SMART, DS_RESEARCH] });
    Object.assign(esFlat, parsed);
  }
  return unflattenStrings(esFlat);
}

// CLI smoke: translate a few strings on both models
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const a = sparkTranslate({ t: 'Engine Diagnostics in Englewood, CO' }, 'smoke-research', {
    models: [DS_RESEARCH],
  });
  const b = sparkTranslate({ t: 'Book Diagnostics' }, 'smoke-smart', { models: [DS_SMART] });
  console.log(JSON.stringify({ research: a, smart: b, note: 'ds2/Qwen not on this Bifrost' }, null, 2));
}
