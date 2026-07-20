/**
 * Shared Bifrost Spark caller with authoritative routing:
 * - large → vllm/research
 * - small → vllm/smart
 * Every call logged to scripts/.spark-logs/
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, '..');
export const LOG_DIR = path.join(ROOT, 'scripts', '.spark-logs');
fs.mkdirSync(LOG_DIR, { recursive: true });

for (const line of fs.readFileSync('C:/Users/BS/molecule-work/.env.local', 'utf8').split(/\r?\n/)) {
  const m = line.match(/^([^#=]+)=(.*)$/);
  if (m && !process.env[m[1].trim()]) process.env[m[1].trim()] = m[2].trim();
}

export const BASE = process.env.OPENAI_BASE_URL || 'http://100.110.254.98:4001/v1';
export const KEY = process.env.BIFROST_KEY_PARTNER_PROJECT || process.env.OPENAI_API_KEY;
export const MODEL_LARGE = 'vllm/research';
export const MODEL_SMALL = 'vllm/smart';

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
  const model = size === 'large' ? MODEL_LARGE : MODEL_SMALL;
  const why = size === 'large' ? 'large-context→research' : 'small-context→smart';
  const max_tokens = opts.max_tokens ?? (size === 'large' ? 1200 : 500);
  const temperature = opts.temperature ?? (size === 'large' ? 0.3 : 0.15);
  const system =
    opts.system ||
    'You write for RKC Automotive (Englewood CO ASE shop). Return ONLY valid JSON. No markdown. No commentary.';

  CALLS += 1;
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const req = path.join(LOG_DIR, `req-${label}-c${CALLS}-${stamp}.json`);
  const res = path.join(LOG_DIR, `res-${label}-${model.replace(/\//g, '_')}-c${CALLS}-${stamp}.json`);
  fs.writeFileSync(
    req,
    JSON.stringify({
      model,
      temperature,
      max_tokens,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      _routing: { size, why },
    }),
  );

  const t0 = Date.now();
  const r = spawnSync(
    'curl.exe',
    [
      '-sS',
      '--http1.1',
      '-w',
      '%{http_code}',
      '-X',
      'POST',
      `${BASE}/chat/completions`,
      '-H',
      `Authorization: Bearer ${KEY}`,
      '-H',
      `x-bf-vk: ${KEY}`,
      '-H',
      'Content-Type: application/json; charset=utf-8',
      '--data-binary',
      `@${req}`,
      '--max-time',
      String(size === 'large' ? 120 : 60),
      '--connect-timeout',
      '20',
      '-o',
      res,
    ],
    { encoding: 'utf8', timeout: size === 'large' ? 150000 : 90000 },
  );
  const latencyMs = Date.now() - t0;
  const httpStatus = String(r.stdout || '').trim().slice(-3);
  const raw = fs.existsSync(res) ? fs.readFileSync(res, 'utf8') : '';
  let j = {};
  try {
    j = JSON.parse(raw);
  } catch {
    /* empty */
  }
  const content = (j.choices?.[0]?.message?.content || j.choices?.[0]?.message?.reasoning || '').trim();
  const meta = {
    ts: new Date().toISOString(),
    call: CALLS,
    label,
    size,
    why,
    model,
    resolved: j.extra_fields?.resolved_model_used || j.model || null,
    routingKey: j.extra_fields?.routing_info?.key || null,
    httpStatus,
    curlExit: r.status,
    latencyMs,
    responseFirst80: content.slice(0, 80),
    usage: j.usage || null,
    error: j.error || null,
    resFile: path.relative(ROOT, res),
  };
  fs.appendFileSync(path.join(LOG_DIR, 'session-ledger.jsonl'), `${JSON.stringify(meta)}\n`);
  console.log(JSON.stringify(meta));

  if (r.status !== 0 || j.error || !raw.trim()) {
    throw new Error(
      `Bifrost fail ${label}: curl=${r.status} http=${httpStatus} err=${JSON.stringify(j.error)} size=${size}`,
    );
  }

  let c = content;
  // If research dumped reasoning before JSON, extract outermost object
  if (c.startsWith('```')) c = c.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
  const s = c.indexOf('{');
  const e = c.lastIndexOf('}');
  if (s < 0 || e <= s) throw new Error(`no json ${label}: ${c.slice(0, 120)}`);
  let parsed;
  try {
    parsed = JSON.parse(c.slice(s, e + 1));
  } catch (err) {
    throw new Error(`json parse ${label}: ${err.message}`);
  }
  return { parsed, meta, content: c.slice(s, e + 1) };
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
