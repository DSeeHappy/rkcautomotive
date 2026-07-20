/**
 * LIVE-METER-PROOF burst for Spark dashboard visibility.
 * Uses fail-closed sparkClient telemetry.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sparkCall, BIFROST_ENDPOINT, MODEL_SMART, MODEL_RESEARCH, ROOT, LOG_DIR } from './lib/sparkClient.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const OUT = path.join(LOG_DIR, `LIVE-METER-PROOF-${stamp}.json`);

const report = {
  startedAt: new Date().toISOString(),
  endpoint: BIFROST_ENDPOINT,
  auth: {
    bearerPrefix: process.env.BIFROST_KEY_PARTNER_PROJECT
      ? process.env.BIFROST_KEY_PARTNER_PROJECT.slice(0, 12) + '...'
      : null,
    xBfVk: 'same as bearer key (spark-routed pattern)',
    expectedRoutingKeys: { 'vllm/smart': 'smart-spark', 'vllm/research': 'research-spark' },
  },
  bursts: [],
};

function call(model, label, prompt, max_tokens, burstName) {
  const result = sparkCall({
    model,
    label: `meter-${label}`,
    max_tokens,
    temperature: 0.2,
    timeoutSec: model.includes('research') ? 120 : 60,
    messages: [{ role: 'user', content: prompt }],
  });
  const t = result.telemetry;
  const entry = {
    burst: burstName,
    ts: t.ts,
    label,
    model,
    endpoint: t.endpoint,
    httpStatus: t.httpStatus,
    curlExit: t.curlExit,
    latencyMs: t.latencyMs,
    tokensPerSec: t.tokensPerSec,
    resolvedModel: t.modelResolved,
    routingKey: t.routingKey,
    routingVerified: t.routingVerified,
    requestId: t.requestId,
    responseId: t.responseId,
    gpuUtil: t.gpuUtil,
    cached: t.cached,
    usage: t.usage,
    error: t.error,
    ok: result.ok,
  };
  console.log(
    JSON.stringify({
      label,
      model,
      httpStatus: entry.httpStatus,
      routingKey: entry.routingKey,
      routingVerified: entry.routingVerified,
      ok: entry.ok,
      latencyMs: entry.latencyMs,
    }),
  );
  return entry;
}

function runBurst(name, specs) {
  const entries = [];
  for (const [model, label, prompt, max_tokens] of specs) {
    entries.push(call(model, label, prompt, max_tokens, name));
  }
  const http200 = entries.filter((e) => e.httpStatus === '200').length;
  const ok = entries.filter((e) => e.ok).length;
  const burst = { name, callCount: entries.length, http200, ok, failures: entries.filter((e) => !e.ok), calls: entries };
  report.bursts.push(burst);
  return burst;
}

const smartPrompt = (n) =>
  `Return ONLY JSON: {"meter":"smart-spark","burst":1,"n":${n},"shop":"RKC Automotive","city":"Englewood CO","task":"live-dashboard-proof"}`;
const researchPrompt = (n) =>
  `You are documenting RKC Automotive Phase 2 vehicle knowledge work. Write a structured JSON object with keys summary (2 sentences), verifiedFields (array of 5 field names we may store without inventing HP/torque), quarantineRules (array of 4 rules), pilotMakes (array of 3 makes), and proofId "research-spark-${n}". Do not invent OEM specs. Return ONLY valid JSON.`;

const burst1Smart = Array.from({ length: 12 }, (_, i) => ['vllm/smart', `b1-smart-${i + 1}`, smartPrompt(i + 1), 180]);
const burst1Research = Array.from({ length: 6 }, (_, i) => [
  'vllm/research',
  `b1-research-${i + 1}`,
  researchPrompt(i + 1),
  900,
]);

runBurst('burst-1-primary', [...burst1Smart, ...burst1Research]);

const burst2 = [];
for (let i = 1; i <= 8; i++) {
  burst2.push(['vllm/smart', `b2-smart-${i}`, smartPrompt(100 + i), 200]);
}
for (let i = 1; i <= 4; i++) {
  burst2.push(['vllm/research', `b2-research-${i}`, researchPrompt(100 + i), 800]);
}
runBurst('burst-2-confirm-routing', burst2);

report.finishedAt = new Date().toISOString();
const allCalls = report.bursts.flatMap((b) => b.calls);
report.summary = {
  totalCalls: allCalls.length,
  http200Count: allCalls.filter((c) => c.httpStatus === '200').length,
  okCount: allCalls.filter((c) => c.ok).length,
  failCount: allCalls.filter((c) => !c.ok).length,
  smartCalls: allCalls.filter((c) => c.model === MODEL_SMART).length,
  researchCalls: allCalls.filter((c) => c.model === MODEL_RESEARCH).length,
  routingKeys: [...new Set(allCalls.map((c) => c.routingKey).filter(Boolean))],
  failures: allCalls.filter((c) => !c.ok).map((c) => ({
    label: c.label,
    httpStatus: c.httpStatus,
    error: c.error,
    routingKey: c.routingKey,
  })),
};

fs.writeFileSync(OUT, JSON.stringify(report, null, 2) + '\n', 'utf8');
console.log('\n=== LIVE METER PROOF SUMMARY ===');
console.log(JSON.stringify(report.summary, null, 2));
console.log('LOG:', path.relative(ROOT, OUT));
process.exit(report.summary.failCount > 0 ? 1 : 0);
