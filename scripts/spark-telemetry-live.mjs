/**
 * Live Spark telemetry proof — 1 smart + 1 research call, fail closed.
 * node scripts/spark-telemetry-live.mjs
 */
import {
  sparkCall,
  formatTelemetryTable,
  BIFROST_ENDPOINT,
  MODEL_SMART,
  MODEL_RESEARCH,
  TELEMETRY_LEDGER,
} from './lib/sparkClient.mjs';

const RUN_ID = `telemetry-${Date.now()}`;

const jobs = [
  {
    model: MODEL_SMART,
    label: 'live-smart',
    prompt: `Return ONLY JSON {"ok":true,"meter":"smart-spark","runId":"${RUN_ID}","task":"telemetry-live"}`,
    max_tokens: 120,
    timeoutSec: 60,
  },
  {
    model: MODEL_RESEARCH,
    label: 'live-research',
    prompt: `Return ONLY JSON {"ok":true,"meter":"research-spark","runId":"${RUN_ID}","task":"telemetry-live","note":"RKC Phase 2 honesty check"}`,
    max_tokens: 200,
    timeoutSec: 120,
  },
];

console.log('=== RKC Spark Telemetry Live ===');
console.log(`endpoint: ${BIFROST_ENDPOINT}`);
console.log(`runId: ${RUN_ID}`);
console.log(`ledger: ${TELEMETRY_LEDGER}`);
console.log('');

const results = [];

for (const job of jobs) {
  const result = sparkCall({
    model: job.model,
    label: job.label,
    max_tokens: job.max_tokens,
    temperature: 0.1,
    timeoutSec: job.timeoutSec,
    messages: [
      { role: 'system', content: 'Return ONLY valid JSON. No markdown.' },
      { role: 'user', content: job.prompt },
    ],
  });
  results.push(result);
}

const tableRows = results.map(({ ok, telemetry }) => ({
  label: telemetry.label,
  modelRequested: telemetry.modelRequested,
  modelResolved: telemetry.modelResolved,
  routingKey: telemetry.routingKey,
  routingExpected: telemetry.routingExpected,
  routingVerified: telemetry.routingVerified,
  endpoint: telemetry.endpoint,
  httpStatus: telemetry.httpStatus,
  responseId: telemetry.responseId,
  requestId: telemetry.requestId,
  latencyMs: telemetry.latencyMs,
  bifrostLatencyMs: telemetry.bifrostLatencyMs,
  tokensPerSec: telemetry.tokensPerSec,
  gpuUtil: telemetry.gpuUtil,
  cached: telemetry.cached,
  usage: telemetry.usage,
  ok,
  error: telemetry.error,
}));

console.log(formatTelemetryTable(tableRows));
console.log('');

for (const row of tableRows) {
  console.log(`--- ${row.label} ---`);
  console.log(`  endpoint:         ${row.endpoint}`);
  console.log(`  model requested:  ${row.modelRequested}`);
  console.log(`  model resolved:   ${row.modelResolved}`);
  console.log(`  routing key:      ${row.routingKey} (expected ${row.routingExpected})`);
  console.log(`  routing verified: ${row.routingVerified}`);
  console.log(`  request id:       ${row.requestId}`);
  console.log(`  response id:      ${row.responseId}`);
  console.log(`  http status:      ${row.httpStatus}`);
  console.log(`  latency ms:       ${row.latencyMs} (bifrost: ${row.bifrostLatencyMs})`);
  console.log(`  tokens/sec:       ${row.tokensPerSec}`);
  console.log(`  usage:            ${JSON.stringify(row.usage)}`);
  console.log(`  cached:           ${row.cached}`);
  console.log(`  gpu util:         ${row.gpuUtil}`);
  console.log(`  ok:               ${row.ok}`);
  if (row.error) console.log(`  error:            ${row.error}`);
  console.log('');
}

const allOk = results.every((r) => r.ok);
console.log(allOk ? 'RESULT: PASS — both routes verified on DGX Spark' : 'RESULT: FAIL — see errors above');
process.exit(allOk ? 0 : 1);
