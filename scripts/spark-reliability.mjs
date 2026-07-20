/**
 * Translate model reliability snapshots via Bifrost ds.
 * Writes lib/i18n/reliabilitySnapshotsEs.ts and patches getModelReliabilitySnapshot for lang.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';
import {
  sparkTranslate,
  DS_SMART,
  DS_RESEARCH,
  flattenStrings,
  unflattenStrings,
} from './spark-ds-parallel.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function sleep(ms) {
  spawnSync('powershell', ['-Command', `Start-Sleep -Milliseconds ${ms}`], { stdio: 'ignore' });
}

function extractSnapshots() {
  const src = fs.readFileSync(path.join(ROOT, 'lib/modelReliabilityNotes.ts'), 'utf8');
  const m = src.match(/const MODEL_RELIABILITY_SNAPSHOTS[^=]*=\s*(\[[\s\S]*?\n\]);/);
  if (!m) throw new Error('snapshots array not found');
  return Function('return ' + m[1])();
}

async function main() {
  const snapshots = extractSnapshots();
  console.log('snapshots', snapshots.length);
  const ping = sparkTranslate({ ping: 'REL_OK' }, 'rel-ping', { models: [DS_SMART, DS_RESEARCH] });
  console.log('ping', ping.sparkKey);

  const esById = {};
  for (const snap of snapshots) {
    const { id, ...rest } = snap;
    // Translate labels to Spanish fixed map
    const flat = flattenStrings(rest);
    const esFlat = {};
    for (const [k, v] of Object.entries(flat)) {
      if (v === 'Common issues' || v === 'Colorado angle' || v === 'Service notes') {
        const map = {
          'Common issues': 'Problemas comunes',
          'Colorado angle': 'Ángulo Colorado',
          'Service notes': 'Notas de servicio',
        };
        esFlat[k] = map[v] || v;
        continue;
      }
      const { parsed } = sparkTranslate({ [k]: v }, `rel-${id}-${k.replace(/[^a-z0-9]/gi, '_')}`, {
        models: [DS_SMART, DS_RESEARCH],
      });
      esFlat[k] = parsed[k];
      sleep(250);
    }
    esById[id] = unflattenStrings(esFlat);
    console.log('OK', id);
  }

  const code = `import type { Lang } from '@/lib/language';
import type { ModelReliabilitySnapshot } from '@/lib/modelReliabilityNotes';

/** Reliability hub snapshots — ES via Bifrost ds. */
export const RELIABILITY_SNAPSHOTS_ES: Record<string, Omit<ModelReliabilitySnapshot, 'id'>> = ${JSON.stringify(esById, null, 2)};

export function localizeReliabilitySnapshot(
  snap: ModelReliabilitySnapshot,
  lang: Lang,
): ModelReliabilitySnapshot {
  if (lang !== 'es') return snap;
  const es = RELIABILITY_SNAPSHOTS_ES[snap.id];
  if (!es) return snap;
  return { id: snap.id, ...es };
}
`;
  fs.writeFileSync(path.join(ROOT, 'lib/i18n/reliabilitySnapshotsEs.ts'), code, 'utf8');
  console.log('WROTE reliabilitySnapshotsEs.ts');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
