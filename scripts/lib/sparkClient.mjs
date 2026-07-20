/**
 * Fail-closed Bifrost Spark client with full telemetry.
 * Only vllm/smart and vllm/research — never claim Spark ran without routing proof.
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, '../..');
export const LOG_DIR = path.join(ROOT, 'scripts', '.spark-logs');
export const TELEMETRY_LEDGER = path.join(LOG_DIR, 'TELEMETRY_LEDGER.jsonl');

export const MODEL_SMART = 'vllm/smart';
export const MODEL_RESEARCH = 'vllm/research';
export const ALLOWED_MODELS = new Set([MODEL_SMART, MODEL_RESEARCH]);

export const EXPECTED_ROUTING = {
  [MODEL_SMART]: 'smart-spark',
  [MODEL_RESEARCH]: 'research-spark',
};

fs.mkdirSync(LOG_DIR, { recursive: true });

function loadEnv() {
  const envPath = 'C:/Users/BS/molecule-work/.env.local';
  if (!fs.existsSync(envPath)) {
    throw new Error(`Missing env file: ${envPath}`);
  }
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (!m) continue;
    const k = m[1].trim();
    if (!process.env[k]) process.env[k] = m[2].trim();
  }
}
loadEnv();

export const BIFROST_BASE = process.env.OPENAI_BASE_URL || 'http://100.110.254.98:4001/v1';
export const BIFROST_ENDPOINT = `${BIFROST_BASE.replace(/\/$/, '')}/chat/completions`;
export const BIFROST_KEY = process.env.BIFROST_KEY_PARTNER_PROJECT || process.env.OPENAI_API_KEY;

/** @param {Record<string, string>} headers */
function parseHeaders(raw) {
  const out = {};
  for (const line of raw.split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx <= 0) continue;
    const k = line.slice(0, idx).trim().toLowerCase();
    const v = line.slice(idx + 1).trim();
    if (k) out[k] = v;
  }
  return out;
}

function pickRequestId(headers, clientRequestId) {
  return (
    headers['x-request-id'] ||
    headers['x-bf-request-id'] ||
    headers['x-litellm-request-id'] ||
    clientRequestId
  );
}

function extractGpuUtil(headers, body) {
  const headerKeys = [
    'x-gpu-utilization',
    'x-gpu-util',
    'x-bf-gpu-util',
    'gpu-utilization',
    'x-vllm-gpu-util',
  ];
  for (const k of headerKeys) {
    if (headers[k] != null && headers[k] !== '') return headers[k];
  }
  const extra = body?.extra_fields || {};
  for (const k of ['gpu_utilization', 'gpu_util', 'gpuUtilization', 'gpu_percent']) {
    if (extra[k] != null && extra[k] !== '') return extra[k];
  }
  if (body?.gpu_utilization != null) return body.gpu_utilization;
  return 'unavailable';
}

function extractCached(headers, body) {
  const extra = body?.extra_fields || {};
  if (typeof extra.cached === 'boolean') return extra.cached;
  if (extra.cache_hit != null) return Boolean(extra.cache_hit);
  if (typeof body?.cached === 'boolean') return body.cached;
  const cacheHeader =
    headers['x-cache'] ||
    headers['x-bf-cache'] ||
    headers['cf-cache-status'] ||
    headers['x-cache-status'] ||
    null;
  if (!cacheHeader) return null;
  const lower = cacheHeader.toLowerCase();
  if (lower.includes('hit')) return true;
  if (lower.includes('miss') || lower.includes('bypass') || lower.includes('dynamic')) return false;
  return cacheHeader;
}

function computeTokensPerSec(completionTokens, latencyMs) {
  if (!completionTokens || !latencyMs || latencyMs <= 0) return null;
  return Math.round((completionTokens / (latencyMs / 1000)) * 100) / 100;
}

function writeTelemetryRecord(record) {
  const stamp = record.ts.replace(/[:.]/g, '-');
  const file = path.join(LOG_DIR, `telemetry-${stamp}.json`);
  fs.writeFileSync(file, `${JSON.stringify(record, null, 2)}\n`, 'utf8');
  fs.appendFileSync(TELEMETRY_LEDGER, `${JSON.stringify(record)}\n`, 'utf8');
  return file;
}

/**
 * @param {{
 *   model: string,
 *   messages: object[],
 *   label?: string,
 *   max_tokens?: number,
 *   temperature?: number,
 *   timeoutSec?: number,
 *   requireRouting?: boolean,
 * }} opts
 */
export function sparkCall({
  model,
  messages,
  label = 'spark-call',
  max_tokens = 256,
  temperature = 0.15,
  timeoutSec = 90,
  requireRouting = true,
}) {
  const ts = new Date().toISOString();
  const clientRequestId = randomUUID();
  const routingExpected = EXPECTED_ROUTING[model] ?? null;

  const baseTelemetry = {
    ts,
    label,
    endpoint: BIFROST_ENDPOINT,
    provider: 'bifrost',
    modelRequested: model,
    modelResolved: null,
    routingKey: null,
    routingExpected,
    routingVerified: false,
    requestId: clientRequestId,
    responseId: null,
    httpStatus: null,
    curlExit: null,
    curlStderr: null,
    latencyMs: null,
    bifrostLatencyMs: null,
    tokensPerSec: null,
    usage: null,
    cached: null,
    cacheHeader: null,
    gpuUtil: 'unavailable',
    bifrostError: null,
    ok: false,
    error: null,
  };

  if (!BIFROST_KEY) {
    const record = { ...baseTelemetry, error: 'MISSING BIFROST_KEY_PARTNER_PROJECT' };
    writeTelemetryRecord(record);
    return { ok: false, error: record.error, telemetry: record, json: null, content: '' };
  }

  if (!ALLOWED_MODELS.has(model)) {
    const record = {
      ...baseTelemetry,
      error: `INVALID_MODEL: ${model} — must be vllm/smart or vllm/research`,
    };
    writeTelemetryRecord(record);
    return { ok: false, error: record.error, telemetry: record, json: null, content: '' };
  }

  const stamp = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const reqPath = path.join(LOG_DIR, `req-${label}-${stamp}.json`);
  const resPath = path.join(LOG_DIR, `res-${label}-${stamp}.json`);
  const hdrPath = path.join(LOG_DIR, `hdr-${label}-${stamp}.txt`);

  const bodyObj = { model, messages, max_tokens, temperature };
  fs.writeFileSync(reqPath, JSON.stringify(bodyObj), 'utf8');

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
      BIFROST_ENDPOINT,
      '-H',
      `Authorization: Bearer ${BIFROST_KEY}`,
      '-H',
      `x-bf-vk: ${BIFROST_KEY}`,
      '-H',
      'Content-Type: application/json; charset=utf-8',
      '-D',
      hdrPath,
      '--data-binary',
      `@${reqPath}`,
      '--max-time',
      String(timeoutSec),
      '--connect-timeout',
      '20',
      '-o',
      resPath,
    ],
    { encoding: 'utf8', timeout: (timeoutSec + 30) * 1000 },
  );
  const latencyMs = Date.now() - t0;
  const httpStatus = String(r.stdout || '').trim().slice(-3) || null;
  const curlStderr = (r.stderr || '').trim() || null;

  let headers = {};
  let raw = '';
  let json = null;
  try {
    if (fs.existsSync(hdrPath)) headers = parseHeaders(fs.readFileSync(hdrPath, 'utf8'));
    if (fs.existsSync(resPath)) raw = fs.readFileSync(resPath, 'utf8');
    if (raw.trim()) json = JSON.parse(raw);
  } catch {
    /* parse errors handled below */
  }

  const msg = json?.choices?.[0]?.message || {};
  let content = (msg.content || '').trim();
  if (!content && msg.reasoning) content = String(msg.reasoning).trim();

  const routingKey = json?.extra_fields?.routing_info?.key ?? null;
  const modelResolved = json?.extra_fields?.resolved_model_used || json?.model || null;
  const responseId = json?.id ?? null;
  const requestId = pickRequestId(headers, clientRequestId);
  const bifrostLatencyMs = json?.extra_fields?.latency ?? null;
  const usage = json?.usage
    ? {
        prompt_tokens: json.usage.prompt_tokens ?? null,
        completion_tokens: json.usage.completion_tokens ?? null,
        total_tokens: json.usage.total_tokens ?? null,
      }
    : null;
  const tokensPerSec = computeTokensPerSec(usage?.completion_tokens, latencyMs);
  const cached = extractCached(headers, json);
  const cacheHeader =
    headers['x-cache'] || headers['x-bf-cache'] || headers['cf-cache-status'] || null;
  const gpuUtil = extractGpuUtil(headers, json);
  const bifrostError = json?.error ? JSON.stringify(json.error) : null;

  let error = null;
  if (r.status !== 0) error = `curl exit ${r.status}${curlStderr ? `: ${curlStderr.slice(0, 200)}` : ''}`;
  else if (httpStatus !== '200') error = `HTTP ${httpStatus}${raw ? `: ${raw.slice(0, 200)}` : ''}`;
  else if (bifrostError) error = `Bifrost error: ${bifrostError}`;
  else if (!raw.trim()) error = 'empty response body';
  else if (requireRouting && routingExpected && routingKey !== routingExpected) {
    error = `ROUTING_MISMATCH: expected ${routingExpected}, got ${routingKey ?? 'null'}`;
  }

  const routingVerified = Boolean(routingExpected && routingKey === routingExpected);
  const ok = !error;

  const record = {
    ...baseTelemetry,
    modelResolved,
    routingKey,
    routingVerified,
    requestId,
    responseId,
    httpStatus,
    curlExit: r.status,
    curlStderr,
    latencyMs,
    bifrostLatencyMs,
    tokensPerSec,
    usage,
    cached,
    cacheHeader,
    gpuUtil,
    bifrostError,
    ok,
    error,
    reqFile: path.relative(ROOT, reqPath),
    resFile: path.relative(ROOT, resPath),
    contentPreview: content.slice(0, 120),
  };

  writeTelemetryRecord(record);

  try {
    fs.unlinkSync(hdrPath);
  } catch {}

  return { ok, error, telemetry: record, json, content };
}

export function assertSparkOk(result, context = 'spark call') {
  if (!result?.ok) {
    throw new Error(`${context} failed: ${result?.error || 'unknown'}`);
  }
  return result;
}

export function extractJsonObject(content) {
  let c = String(content || '').trim();
  if (c.startsWith('```')) c = c.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
  const s = c.indexOf('{');
  const e = c.lastIndexOf('}');
  if (s < 0 || e <= s) throw new Error(`no JSON object: ${c.slice(0, 160)}`);
  return JSON.parse(c.slice(s, e + 1));
}

export function formatTelemetryTable(rows) {
  const cols = [
    ['label', 14],
    ['modelRequested', 16],
    ['routingKey', 16],
    ['routingVerified', 8],
    ['httpStatus', 6],
    ['responseId', 28],
    ['requestId', 36],
    ['latencyMs', 10],
    ['tokensPerSec', 12],
    ['gpuUtil', 12],
    ['cached', 8],
    ['ok', 4],
  ];
  const header = cols.map(([k, w]) => k.padEnd(w)).join(' ');
  const sep = cols.map(([, w]) => '-'.repeat(w)).join(' ');
  const lines = rows.map((r) =>
    cols
      .map(([k, w]) => {
        const v = r[k];
        const s = v == null ? '' : String(v);
        return s.length > w ? `${s.slice(0, w - 1)}…` : s.padEnd(w);
      })
      .join(' '),
  );
  return [header, sep, ...lines].join('\n');
}
