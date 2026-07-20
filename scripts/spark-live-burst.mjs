/**
 * Immediate multi-model Bifrost burst for live dashboard visibility.
 * Usage: node scripts/spark-live-burst.mjs
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LOG = path.join(ROOT, 'scripts', '.spark-logs');
fs.mkdirSync(LOG, { recursive: true });

for (const line of fs.readFileSync('C:/Users/BS/molecule-work/.env.local', 'utf8').split(/\r?\n/)) {
  const m = line.match(/^([^#=]+)=(.*)$/);
  if (m && !process.env[m[1].trim()]) process.env[m[1].trim()] = m[2].trim();
}

const KEY = process.env.BIFROST_KEY_PARTNER_PROJECT || process.env.OPENAI_API_KEY;
const BASE = 'http://100.110.254.98:4001/v1';
if (!KEY) {
  console.error('NO KEY — STOP');
  process.exit(1);
}

function call(model, label, prompt, max_tokens = 1200) {
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const req = path.join(LOG, `req-${label}-${stamp}.json`);
  const res = path.join(LOG, `res-${label}-${model.replace(/\//g, '_')}-${stamp}.json`);
  fs.writeFileSync(
    req,
    JSON.stringify({
      model,
      temperature: 0.25,
      max_tokens,
      messages: [{ role: 'user', content: prompt }],
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
      '150',
      '--connect-timeout',
      '20',
      '-o',
      res,
    ],
    { encoding: 'utf8', timeout: 180000 },
  );
  const latencyMs = Date.now() - t0;
  const httpStatus = String(r.stdout || '').trim().slice(-3);
  const raw = fs.existsSync(res) ? fs.readFileSync(res, 'utf8') : '';
  let j = {};
  try {
    j = JSON.parse(raw);
  } catch {
    /* keep empty */
  }
  const content = (j.choices?.[0]?.message?.content || j.choices?.[0]?.message?.reasoning || '').trim();
  const meta = {
    ts: new Date().toISOString(),
    label,
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
  fs.appendFileSync(path.join(LOG, 'session-ledger.jsonl'), `${JSON.stringify(meta)}\n`);
  console.log(JSON.stringify(meta));
  if (r.status !== 0 || j.error || !raw.trim()) {
    throw new Error(`Bifrost fail ${label}: curl=${r.status} http=${httpStatus} err=${JSON.stringify(j.error)}`);
  }
  return meta;
}

const jobs = [
  ['vllm/research', 'burst-research-a', 'Return ONLY JSON: {"spark":"research","shop":"RKC Automotive","city":"Englewood","n":1}'],
  ['vllm/smart', 'burst-smart-a', 'Return ONLY JSON: {"spark":"smart","shop":"RKC Automotive","city":"Englewood","n":2}'],
  ['vllm/research', 'burst-research-b', 'Return ONLY JSON: {"ok":true,"task":"brand-hubs","brands":["gmc","lexus","acura","tesla","alfa-romeo"]}'],
  ['vllm/smart', 'burst-smart-b', 'Return ONLY JSON: {"ok":true,"task":"seo-audit","focus":["metas","alt","thin-pages"]}'],
  ['vllm/research', 'burst-research-c', 'Return ONLY JSON: {"ok":true,"proof":"continuous-traffic","ts":"live"}'],
  ['vllm/smart', 'burst-smart-c', 'Return ONLY JSON: {"ok":true,"proof":"smart-route-lit","ts":"live"}'],
];

const results = [];
try {
  for (const [model, label, prompt] of jobs) {
    results.push(call(model, label, prompt));
  }
} catch (err) {
  console.error('SPARK UNREACHABLE OR FAILED — STOP. Do not invent copy.');
  console.error(String(err.message || err));
  process.exit(1);
}

console.log(
  'SUMMARY',
  JSON.stringify({
    callCount: results.length,
    models: results.map((r) => r.model),
    routingKeys: results.map((r) => r.routingKey),
    httpStatuses: results.map((r) => r.httpStatus),
  }),
);
