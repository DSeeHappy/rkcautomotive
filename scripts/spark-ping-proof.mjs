/**
 * Mandatory Bifrost Spark ping — logs HTTP evidence before any content batch.
 * Usage: node scripts/spark-ping-proof.mjs [model]
 * Default model: vllm/research (ds / Nemotron 1M)
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LOG = path.join(ROOT, '.tmp-spark-ping-proof.log');

for (const line of fs.readFileSync('C:/Users/BS/molecule-work/.env.local', 'utf8').split(/\r?\n/)) {
  const m = line.match(/^([^#=]+)=(.*)$/);
  if (m && !process.env[m[1].trim()]) process.env[m[1].trim()] = m[2].trim();
}

const BASE = process.env.OPENAI_BASE_URL || 'http://100.110.254.98:4001/v1';
const KEY = process.env.BIFROST_KEY_PARTNER_PROJECT || process.env.OPENAI_API_KEY;
const model = process.argv[2] || 'vllm/research';
const endpoint = `${BASE}/chat/completions`;

const body = {
  model,
  temperature: 0.1,
  max_tokens: 400,
  messages: [
    {
      role: 'user',
      content: 'Return ONLY JSON: {"ok":true,"name":"RKC Automotive","city":"Englewood","proof":"spark-live"}',
    },
  ],
};

const reqPath = path.join(ROOT, '.tmp-spark-ping-req.json');
const resPath = path.join(ROOT, '.tmp-spark-ping-res.json');
fs.writeFileSync(reqPath, JSON.stringify(body));

const t0 = Date.now();
const r = spawnSync(
  'curl.exe',
  [
    '-sS',
    '--http1.1',
    '-X',
    'POST',
    endpoint,
    '-H',
    `Authorization: Bearer ${KEY}`,
    '-H',
    `x-bf-vk: ${KEY}`,
    '-H',
    'Content-Type: application/json; charset=utf-8',
    '--data-binary',
    `@${reqPath}`,
    '--max-time',
    '120',
    '--connect-timeout',
    '20',
    '-o',
    resPath,
  ],
  { encoding: 'utf8', timeout: 150000 },
);

const latencyMs = Date.now() - t0;
const raw = fs.existsSync(resPath) ? fs.readFileSync(resPath, 'utf8') : '';
let parsed;
try {
  parsed = JSON.parse(raw);
} catch {
  parsed = { parseError: true, rawHead: raw.slice(0, 200) };
}

const msg = parsed.choices?.[0]?.message || {};
const content = (msg.content || msg.reasoning || '').trim();
const sparkKey = parsed.extra_fields?.routing_info?.key || null;
const resolvedModel = parsed.extra_fields?.resolved_model_used || parsed.model || null;
const finish = parsed.choices?.[0]?.finish_reason || null;

const evidence = {
  ts: new Date().toISOString(),
  endpoint,
  modelRequested: model,
  resolvedModel,
  routingKey: sparkKey,
  finish,
  curlExit: r.status,
  latencyMs,
  responseFirst80: content.slice(0, 80),
  usage: parsed.usage || null,
  error: parsed.error || null,
};

const line = JSON.stringify(evidence);
console.log(line);
fs.appendFileSync(LOG, `${line}\n`, 'utf8');

if (r.status !== 0 || parsed.error) {
  console.error('SPARK PING FAILED');
  process.exit(1);
}
if (!content) {
  console.error('SPARK PING EMPTY CONTENT');
  process.exit(1);
}

console.log('SPARK PING OK');
