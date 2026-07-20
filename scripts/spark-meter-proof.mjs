/**
 * LIVE meter proof — tiny Bifrost chat completions users can see on Spark meters.
 * Uses fail-closed sparkClient (routing key verified + telemetry ledger).
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { sparkCall, BIFROST_ENDPOINT, ROOT, LOG_DIR } from './lib/sparkClient.mjs';

const OUT = path.join(
  LOG_DIR,
  `meter-proof-${new Date().toISOString().replace(/[:.]/g, '-')}.json`,
);

function call(model, label, user, max_tokens = 64) {
  const result = sparkCall({
    model,
    label: `meter-${label}`,
    max_tokens,
    temperature: 0.1,
    timeoutSec: 45,
    messages: [
      { role: 'system', content: 'Return ONLY valid JSON. No markdown.' },
      { role: 'user', content: user },
    ],
  });
  const t = result.telemetry;
  let parsed = null;
  if (result.ok && result.content) {
    try {
      const s = result.content.indexOf('{');
      const e = result.content.lastIndexOf('}');
      if (s >= 0 && e > s) parsed = JSON.parse(result.content.slice(s, e + 1));
    } catch {
      /* parse optional */
    }
  }
  const row = {
    label,
    model,
    httpStatus: t.httpStatus,
    curlExit: t.curlExit,
    latencyMs: t.latencyMs,
    routingKey: t.routingKey,
    routingVerified: t.routingVerified,
    gpuUtil: t.gpuUtil,
    ok: result.ok,
    contentFirst80: result.content.slice(0, 80),
    error: t.error,
    reqFile: t.reqFile,
    resFile: t.resFile,
    parsed,
  };
  console.log(JSON.stringify(row));
  return row;
}

const results = { startedAt: new Date().toISOString(), base: BIFROST_ENDPOINT, calls: [] };

const jobs = [
  ['vllm/smart', 'ping-s1', 'Return ONLY JSON {"ok":true,"meter":"smart","n":1}'],
  ['vllm/research', 'ping-r1', 'Return ONLY JSON {"ok":true,"meter":"research","n":1}'],
  ['vllm/smart', 'ping-s2', 'Return ONLY JSON {"ok":true,"meter":"smart","n":2,"task":"rkc-live"}'],
  ['vllm/research', 'ping-r2', 'Return ONLY JSON {"ok":true,"meter":"research","n":2,"task":"rkc-live"}'],
  ['vllm/smart', 'ping-s3', 'Return ONLY JSON {"ok":true,"meter":"smart","n":3,"shop":"RKC"}'],
  ['vllm/research', 'ping-r3', 'Return ONLY JSON {"ok":true,"meter":"research","n":3,"shop":"RKC"}'],
  ['vllm/smart', 'ping-s4', 'Return ONLY JSON {"ok":true,"meter":"smart","n":4,"proof":"bifrost"}'],
  ['vllm/research', 'ping-r4', 'Return ONLY JSON {"ok":true,"meter":"research","n":4,"proof":"bifrost"}'],
];

for (const [model, label, user] of jobs) {
  results.calls.push(call(model, label, user));
  spawnSync('powershell', ['-Command', 'Start-Sleep -Milliseconds 800'], { stdio: 'ignore' });
}

results.finishedAt = new Date().toISOString();
results.okCount = results.calls.filter((c) => c.ok).length;
results.failCount = results.calls.filter((c) => !c.ok).length;
fs.writeFileSync(OUT, `${JSON.stringify(results, null, 2)}\n`);
console.log(
  `[meter-proof] ok=${results.okCount}/${results.calls.length} fail=${results.failCount} log=${path.relative(ROOT, OUT)}`,
);
if (results.okCount === 0) process.exit(1);
