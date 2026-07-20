/**
 * USER-VISIBLE Bifrost proof — unique strings so meters/logs are unmistakable.
 * Uses fail-closed sparkClient (routing key verified + telemetry ledger).
 * Writes scripts/.spark-logs/USER-VISIBLE-*
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { sparkCall, BIFROST_ENDPOINT, ROOT, LOG_DIR } from './lib/sparkClient.mjs';

const RUN_ID = `UV-${Date.now()}`;
const stamp = new Date().toISOString().replace(/[:.]/g, '-');

if (!process.env.BIFROST_KEY_PARTNER_PROJECT && !process.env.OPENAI_API_KEY) {
  const fail = { ok: false, reason: 'MISSING BIFROST_KEY_PARTNER_PROJECT', runId: RUN_ID };
  fs.writeFileSync(path.join(LOG_DIR, `USER-VISIBLE-FAIL-${stamp}.json`), JSON.stringify(fail, null, 2));
  console.error(JSON.stringify(fail));
  process.exit(1);
}

function call(model, label, proof) {
  const result = sparkCall({
    model,
    label: `uv-${label}`,
    max_tokens: 80,
    temperature: 0,
    timeoutSec: 45,
    messages: [
      { role: 'system', content: 'Return ONLY valid JSON. No markdown.' },
      {
        role: 'user',
        content: `Echo this exact proof string in JSON. Return ONLY {"ok":true,"proof":"${proof}","model":"${model}","runId":"${RUN_ID}","label":"${label}"}`,
      },
    ],
  });
  const t = result.telemetry;
  const ok = result.ok && result.content.includes(proof);
  const row = {
    label,
    model,
    proof,
    runId: RUN_ID,
    httpStatus: t.httpStatus,
    curlExit: t.curlExit,
    latencyMs: t.latencyMs,
    routingKey: t.routingKey,
    routingVerified: t.routingVerified,
    gpuUtil: t.gpuUtil,
    ok,
    contentEcho: result.content.slice(0, 200),
    error: t.error,
    reqFile: t.reqFile,
    resFile: t.resFile,
    wallClockUtc: new Date().toISOString(),
  };
  console.log(JSON.stringify(row));
  return row;
}

const jobs = [
  ['vllm/smart', 's1', `${RUN_ID}-SMART-ALPHA`],
  ['vllm/research', 'r1', `${RUN_ID}-RESEARCH-ALPHA`],
  ['vllm/smart', 's2', `${RUN_ID}-SMART-BRAVO`],
  ['vllm/research', 'r2', `${RUN_ID}-RESEARCH-BRAVO`],
  ['vllm/smart', 's3', `${RUN_ID}-SMART-CHARLIE`],
  ['vllm/research', 'r3', `${RUN_ID}-RESEARCH-CHARLIE`],
];

const results = {
  startedAt: new Date().toISOString(),
  runId: RUN_ID,
  base: BIFROST_ENDPOINT,
  honesty:
    'ok=true only when sparkClient routing verified AND response echoes unique proof string. HTTP 200 alone is not enough.',
  calls: [],
};

for (const [model, label, proof] of jobs) {
  results.calls.push(call(model, label, proof));
  spawnSync('powershell', ['-Command', 'Start-Sleep -Milliseconds 600'], { stdio: 'ignore' });
}

results.finishedAt = new Date().toISOString();
results.okCount = results.calls.filter((c) => c.ok).length;
results.failCount = results.calls.filter((c) => !c.ok).length;
results.allRoutingVerified = results.calls.every((c) => c.routingVerified);

const out = path.join(LOG_DIR, `USER-VISIBLE-SUMMARY-${stamp}.json`);
fs.writeFileSync(out, `${JSON.stringify(results, null, 2)}\n`);
console.log(
  `[USER-VISIBLE] runId=${RUN_ID} ok=${results.okCount}/${results.calls.length} allRoutingVerified=${results.allRoutingVerified} log=${path.relative(ROOT, out)}`,
);
if (results.okCount === 0) process.exit(1);
if (results.failCount > 0) process.exit(2);
