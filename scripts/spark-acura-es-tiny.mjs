/**
 * Ultra-tiny Acura ES via smart (one string per call). STOP if Bifrost dead.
 * Usage: node scripts/spark-acura-es-tiny.mjs
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { ROOT, sparkRouted, sparkRoutedRetry, getCallCount, BASE } from './spark-routed.mjs';

function sleep(sec) {
  spawnSync('powershell', ['-Command', `Start-Sleep -Seconds ${sec}`], { stdio: 'ignore' });
}

const hubPath = path.join(ROOT, '.tmp-brand-hub-acura.json');
const hub = JSON.parse(fs.readFileSync(hubPath, 'utf8'));
if (hub.via !== 'bifrost-spark' || !hub.en?.failureProfiles) {
  console.error('Acura hub EN missing or not Spark — STOP');
  process.exit(1);
}

// Health ping (small → smart)
try {
  const ping = sparkRouted('small', 'acura-es-health', 'Return ONLY JSON: {"ok":true}', { max_tokens: 40 });
  console.log('HEALTH OK', ping.meta.routingKey);
} catch (err) {
  console.error('BIFROST UNREACHABLE — STOP. Do not invent Acura ES.');
  console.error(String(err.message || err).slice(0, 300));
  process.exit(1);
}

sleep(5);
const ES_SYS =
  'Translate to natural US/Mexican Spanish. Return ONLY JSON same keys. Keep Acura, MDX, TLX, RDX, Integra, ASE, Englewood. Use usted.';

const es = { failureProfiles: [] };
const callMetas = [];

try {
  for (let i = 0; i < hub.en.failureProfiles.length; i++) {
    const fp = hub.en.failureProfiles[i];
    sleep(4);
    const t = sparkRoutedRetry(
      'small',
      `acura-es-t${i}`,
      `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ title: fp.title })}`,
      { system: ES_SYS, max_tokens: 120 },
      5,
    );
    callMetas.push(t.meta);
    sleep(4);
    const d = sparkRoutedRetry(
      'small',
      `acura-es-d${i}`,
      `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ description: fp.description })}`,
      { system: ES_SYS, max_tokens: 220 },
      5,
    );
    callMetas.push(d.meta);
    es.failureProfiles.push({ title: t.parsed.title, description: d.parsed.description });
  }

  for (const field of ['buyerWarning', 'coloradoNotes', 'higherScrutiny', 'coloradoAngle']) {
    sleep(4);
    const r = sparkRoutedRetry(
      'small',
      `acura-es-${field}`,
      `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ [field]: hub.en[field] })}`,
      { system: ES_SYS, max_tokens: 260 },
      5,
    );
    callMetas.push(r.meta);
    es[field] = r.parsed[field];
  }
} catch (err) {
  console.error(`SPARK FAILED after ${getCallCount()} calls — STOP. Partial ES not applied.`);
  console.error(String(err.message || err).slice(0, 400));
  process.exit(1);
}

hub.es = es;
hub.enOnly = false;
hub.esCallMetas = callMetas;
hub.endpoint = `${BASE}/chat/completions`;
fs.writeFileSync(hubPath, JSON.stringify(hub, null, 2));
console.log(`WROTE Acura ES complete calls=${getCallCount()} profiles=${es.failureProfiles.length}`);
