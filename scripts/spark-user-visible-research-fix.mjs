/**
 * USER-VISIBLE research refill — higher max_tokens so research emits content.
 * Uses fail-closed sparkClient; accepts proof in content OR reasoning.
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { sparkCall, ROOT, LOG_DIR } from './lib/sparkClient.mjs';

const RUN = `UV-RESEARCHFIX-${Date.now()}`;
const stamp = new Date().toISOString().replace(/[:.]/g, '-');

function call(model, label, proof) {
  const result = sparkCall({
    model,
    label: `uvfix-${label}`,
    max_tokens: 220,
    temperature: 0,
    timeoutSec: 60,
    messages: [
      {
        role: 'system',
        content: 'Output ONLY the JSON object in the assistant content field. Minimal reasoning.',
      },
      {
        role: 'user',
        content: `Return ONLY this JSON exactly: {"ok":true,"proof":"${proof}","model":"${model}","runId":"${RUN}","label":"${label}"}`,
      },
    ],
  });
  const t = result.telemetry;
  const msg = result.json?.choices?.[0]?.message || {};
  const content = (msg.content || '').trim();
  const reasoning = (msg.reasoning || '').trim();
  const blob = `${content}\n${reasoning}`;
  const row = {
    label,
    model,
    proof,
    httpStatus: t.httpStatus,
    curlExit: t.curlExit,
    latencyMs: t.latencyMs,
    routingKey: t.routingKey,
    routingVerified: t.routingVerified,
    gpuUtil: t.gpuUtil,
    ok: result.ok && blob.includes(proof),
    proofInContent: content.includes(proof),
    proofInReasoning: reasoning.includes(proof),
    contentFirst120: content.slice(0, 120),
    reasoningFirst120: reasoning.slice(0, 120),
    resFile: t.resFile,
    error: t.error,
    wallClockUtc: new Date().toISOString(),
  };
  console.log(JSON.stringify(row));
  return row;
}

const jobs = [
  ['vllm/research', 'rr1', `${RUN}-RESEARCH-DELTA`],
  ['vllm/research', 'rr2', `${RUN}-RESEARCH-ECHO`],
  ['vllm/smart', 'rs1', `${RUN}-SMART-DELTA`],
];

const results = {
  startedAt: new Date().toISOString(),
  runId: RUN,
  honesty:
    'ok=true requires sparkClient routing verified AND proof string in content or reasoning. HTTP 200 alone is not enough.',
  calls: [],
};

for (const [model, label, proof] of jobs) {
  results.calls.push(call(model, label, proof));
  spawnSync('powershell', ['-Command', 'Start-Sleep -Milliseconds 700'], { stdio: 'ignore' });
}

results.finishedAt = new Date().toISOString();
results.okCount = results.calls.filter((c) => c.ok).length;
results.failCount = results.calls.filter((c) => !c.ok).length;
const out = path.join(LOG_DIR, `USER-VISIBLE-SUMMARY-${stamp}.json`);
fs.writeFileSync(out, `${JSON.stringify(results, null, 2)}\n`);
console.log(
  `[USER-VISIBLE-FIX] ok=${results.okCount}/${results.calls.length} log=${path.relative(ROOT, out)}`,
);
process.exit(results.failCount ? 2 : 0);
