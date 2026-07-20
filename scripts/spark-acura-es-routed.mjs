/**
 * Acura ES with correct routing:
 * - titles / short lines → small → smart
 * - descriptions / paragraphs → large → research
 * Checkpoint progress so we can resume.
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { ROOT, sparkRouted, sparkRoutedRetry, getCallCount, BASE } from './spark-routed.mjs';

function sleep(sec) {
  spawnSync('powershell', ['-Command', `Start-Sleep -Seconds ${sec}`], { stdio: 'ignore' });
}

const hubPath = path.join(ROOT, '.tmp-brand-hub-acura.json');
const progressPath = path.join(ROOT, 'scripts', '.spark-logs', 'acura-es-progress.json');
const hub = JSON.parse(fs.readFileSync(hubPath, 'utf8'));
if (hub.via !== 'bifrost-spark' || !hub.en?.failureProfiles) {
  console.error('Acura EN missing — STOP');
  process.exit(1);
}

let progress = { failureProfiles: [], fields: {}, callMetas: [] };
if (fs.existsSync(progressPath)) {
  progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));
  console.log(`[resume] fp=${progress.failureProfiles.length} fields=${Object.keys(progress.fields).length}`);
}

function saveProgress() {
  fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2));
}

try {
  const ping = sparkRouted('small', 'acura-es2-health', 'Return ONLY JSON: {"ok":true}', { max_tokens: 40 });
  console.log('HEALTH OK', ping.meta.routingKey, ping.meta.httpStatus);
} catch (err) {
  console.error('BIFROST UNREACHABLE — STOP.');
  console.error(String(err.message || err).slice(0, 300));
  process.exit(1);
}

const ES_SYS =
  'Translate to natural US/Mexican Spanish. Return ONLY JSON same keys. Keep Acura model names, ASE, Englewood, Colorado. Use usted.';

try {
  for (let i = 0; i < hub.en.failureProfiles.length; i++) {
    if (progress.failureProfiles[i]?.title && progress.failureProfiles[i]?.description) continue;
    const fp = hub.en.failureProfiles[i];
    sleep(3);
    // title = small → smart
    let title = progress.failureProfiles[i]?.title;
    if (!title) {
      const t = sparkRoutedRetry(
        'small',
        `acura-es2-t${i}`,
        `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ title: fp.title })}`,
        { system: ES_SYS, max_tokens: 100 },
        4,
      );
      progress.callMetas.push(t.meta);
      title = t.parsed.title;
      progress.failureProfiles[i] = { title, description: null };
      saveProgress();
    }
    sleep(5);
    // description = multi-sentence → large → research
    if (!progress.failureProfiles[i]?.description) {
      const d = sparkRoutedRetry(
        'large',
        `acura-es2-d${i}`,
        `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ description: fp.description })}`,
        { system: ES_SYS, max_tokens: 400 },
        4,
      );
      progress.callMetas.push(d.meta);
      progress.failureProfiles[i] = { title, description: d.parsed.description };
      saveProgress();
    }
  }

  for (const field of ['buyerWarning', 'coloradoNotes', 'higherScrutiny', 'coloradoAngle']) {
    if (progress.fields[field]) continue;
    sleep(5);
    // paragraphs → large/research; one-liners → small/smart
    const isShort = field === 'higherScrutiny' || field === 'coloradoAngle';
    const size = isShort ? 'small' : 'large';
    const r = sparkRoutedRetry(
      size,
      `acura-es2-${field}`,
      `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ [field]: hub.en[field] })}`,
      { system: ES_SYS, max_tokens: isShort ? 200 : 450 },
      4,
    );
    progress.callMetas.push(r.meta);
    progress.fields[field] = r.parsed[field];
    saveProgress();
  }
} catch (err) {
  saveProgress();
  console.error(`SPARK FAILED after ${getCallCount()} calls — STOP. Progress saved to ${progressPath}`);
  console.error(String(err.message || err).slice(0, 400));
  process.exit(1);
}

hub.es = {
  failureProfiles: progress.failureProfiles,
  ...progress.fields,
};
hub.enOnly = false;
hub.esCallMetas = progress.callMetas;
hub.endpoint = `${BASE}/chat/completions`;
fs.writeFileSync(hubPath, JSON.stringify(hub, null, 2));
console.log(`WROTE Acura ES complete sessionCalls=${getCallCount()}`);
