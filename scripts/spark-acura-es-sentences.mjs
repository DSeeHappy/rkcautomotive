/**
 * Acura ES: sentence-chunked smart calls (avoids Tailscale reset on long completions).
 * Resumes from scripts/.spark-logs/acura-es-progress.json
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { ROOT, sparkRouted, sparkRoutedRetry, getCallCount, BASE } from './spark-routed.mjs';

function sleep(sec) {
  spawnSync('powershell', ['-Command', `Start-Sleep -Seconds ${sec}`], { stdio: 'ignore' });
}

function splitSentences(text) {
  const parts = String(text)
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  return parts.length ? parts : [String(text)];
}

const hubPath = path.join(ROOT, '.tmp-brand-hub-acura.json');
const progressPath = path.join(ROOT, 'scripts', '.spark-logs', 'acura-es-progress.json');
const hub = JSON.parse(fs.readFileSync(hubPath, 'utf8'));

let progress = { failureProfiles: [], fields: {}, callMetas: [], chunks: {} };
if (fs.existsSync(progressPath)) {
  progress = { chunks: {}, ...JSON.parse(fs.readFileSync(progressPath, 'utf8')) };
  if (!progress.chunks) progress.chunks = {};
}

function save() {
  fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2));
}

const ES_SYS =
  'Translate to natural US/Mexican Spanish. Return ONLY JSON {"t":"..."}. Keep proper nouns. Use usted.';

try {
  const ping = sparkRouted('small', 'acura-es3-health', 'Return ONLY JSON: {"ok":true}', { max_tokens: 40 });
  console.log('HEALTH', ping.meta.routingKey);
} catch (err) {
  console.error('BIFROST UNREACHABLE — STOP');
  process.exit(1);
}

sleep(8);

try {
  for (let i = 0; i < hub.en.failureProfiles.length; i++) {
    const fp = hub.en.failureProfiles[i];
    if (!progress.failureProfiles[i]) progress.failureProfiles[i] = { title: null, description: null };

    if (!progress.failureProfiles[i].title) {
      sleep(3);
      const t = sparkRoutedRetry(
        'small',
        `acura-es3-t${i}`,
        `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ title: fp.title })}`,
        { system: ES_SYS.replace('{"t":"..."}', 'same keys'), max_tokens: 100 },
        4,
      );
      progress.callMetas.push(t.meta);
      progress.failureProfiles[i].title = t.parsed.title;
      save();
    }

    if (!progress.failureProfiles[i].description) {
      const sents = splitSentences(fp.description);
      const key = `fp${i}`;
      if (!progress.chunks[key]) progress.chunks[key] = [];
      for (let s = 0; s < sents.length; s++) {
        if (progress.chunks[key][s]) continue;
        sleep(4);
        const out = sparkRoutedRetry(
          'small',
          `acura-es3-fp${i}-s${s}`,
          `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ t: sents[s] })}`,
          { system: ES_SYS, max_tokens: 160 },
          5,
        );
        progress.callMetas.push(out.meta);
        progress.chunks[key][s] = out.parsed.t;
        save();
      }
      progress.failureProfiles[i].description = progress.chunks[key].join(' ');
      save();
    }
  }

  for (const field of ['buyerWarning', 'coloradoNotes', 'higherScrutiny', 'coloradoAngle']) {
    if (progress.fields[field]) continue;
    const sents = splitSentences(hub.en[field]);
    const key = `field-${field}`;
    if (!progress.chunks[key]) progress.chunks[key] = [];
    for (let s = 0; s < sents.length; s++) {
      if (progress.chunks[key][s]) continue;
      sleep(4);
      const out = sparkRoutedRetry(
        'small',
        `acura-es3-${field}-s${s}`,
        `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ t: sents[s] })}`,
        { system: ES_SYS, max_tokens: 180 },
        5,
      );
      progress.callMetas.push(out.meta);
      progress.chunks[key][s] = out.parsed.t;
      save();
    }
    progress.fields[field] = progress.chunks[key].join(' ');
    save();
  }
} catch (err) {
  save();
  console.error(`SPARK FAILED after ${getCallCount()} — STOP. Progress saved.`);
  console.error(String(err.message || err).slice(0, 400));
  process.exit(1);
}

hub.es = {
  failureProfiles: progress.failureProfiles,
  buyerWarning: progress.fields.buyerWarning,
  coloradoNotes: progress.fields.coloradoNotes,
  higherScrutiny: progress.fields.higherScrutiny,
  coloradoAngle: progress.fields.coloradoAngle,
};
hub.enOnly = false;
hub.esMethod = 'sentence-chunked-smart';
hub.esCallMetas = progress.callMetas;
hub.endpoint = `${BASE}/chat/completions`;
fs.writeFileSync(hubPath, JSON.stringify(hub, null, 2));
console.log(`WROTE Acura ES complete calls=${getCallCount()} chunks=${Object.keys(progress.chunks).length}`);
