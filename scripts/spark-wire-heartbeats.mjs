/**
 * Wire-time Bifrost smart heartbeats — keeps meters alive during ownership wiring.
 * Uses fail-closed sparkClient (routing key verified + telemetry ledger).
 * Logs: scripts/.spark-logs/USER-VISIBLE-WIRE-HEARTBEATS-*.json
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { sparkCall, MODEL_SMART, ROOT, LOG_DIR } from './lib/sparkClient.mjs';

const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const results = { startedAt: new Date().toISOString(), task: 'wiring_ownership_heartbeats', calls: [] };

for (let i = 1; i <= 10; i++) {
  const proof = `WIRE-HB-${Date.now()}-${i}`;
  const result = sparkCall({
    model: MODEL_SMART,
    label: `wire-hb-${i}`,
    max_tokens: 48,
    temperature: 0,
    timeoutSec: 40,
    messages: [
      { role: 'system', content: 'Return ONLY valid JSON.' },
      {
        role: 'user',
        content: `Return ONLY {"ok":true,"proof":"${proof}","n":${i},"task":"wiring_ownership"}`,
      },
    ],
  });
  const t = result.telemetry;
  const row = {
    n: i,
    proof,
    httpStatus: t.httpStatus,
    curlExit: t.curlExit,
    latencyMs: t.latencyMs,
    routingKey: t.routingKey,
    routingVerified: t.routingVerified,
    gpuUtil: t.gpuUtil,
    ok: result.ok && result.content.includes(proof),
    error: t.error,
    wallClockUtc: new Date().toISOString(),
  };
  results.calls.push(row);
  console.log(JSON.stringify(row));
  spawnSync('powershell', ['-Command', 'Start-Sleep -Seconds 6'], { stdio: 'ignore' });
}

results.finishedAt = new Date().toISOString();
results.okCount = results.calls.filter((c) => c.ok).length;
results.failCount = results.calls.filter((c) => !c.ok).length;
const out = path.join(LOG_DIR, `USER-VISIBLE-WIRE-HEARTBEATS-${stamp}.json`);
fs.writeFileSync(out, `${JSON.stringify(results, null, 2)}\n`);
console.log(`[wire-hb] ok=${results.okCount}/${results.calls.length} log=${path.relative(ROOT, out)}`);
process.exit(results.okCount === 0 ? 1 : 0);
