/**
 * Spark-assisted failure profile filter proof + model-scoped mapping audit.
 * node scripts/spark-filter-failure-profiles.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sparkCall, formatTelemetryTable } from './lib/sparkClient.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Read acura profile titles from TS source (no TS import in .mjs)
const fpPath = path.join(ROOT, 'lib', 'brandFailureProfiles.ts');
const fpSource = fs.readFileSync(fpPath, 'utf8');
const acuraBlock = fpSource.match(/id: 'acura',[\s\S]*?coloradoNotes:[\s\S]*?\n  },/);
const profilesMatch = acuraBlock?.[0]?.match(/failureProfiles: \[([\s\S]*?)\],\s*\n\s*buyerWarning/) ?? [];
const titles = [...(profilesMatch[1] ?? '').matchAll(/title: '([^']+)'/g)].map((m) => m[1]);

const auditCases = [
  { model: 'TLX', expectTitles: [] },
  { model: 'TLX Type S', expectTitles: ['Transmission Shudder in TLX Type S'] },
  { model: 'MDX', expectTitles: ['Excessive Oil Consumption in MDX'] },
  { model: 'RDX', expectTitles: ['Infotainment Screen Glitches in RDX'] },
];

const userPrompt = `Audit model-scoped failure profile filtering for Acura.
Profiles in source: ${JSON.stringify(titles)}.
For each model, list ONLY profile titles that explicitly name that model (TLX must NOT inherit TLX Type S, MDX Type S, or RDX issues).
Return ONLY JSON: {"models":[{"model":"...","titles":[...]}],"doNotFabricate":true}`;

const result = sparkCall({
  model: 'vllm/smart',
  label: 'p2-filter-failure-acura',
  max_tokens: 600,
  temperature: 0.1,
  messages: [
    {
      role: 'system',
      content:
        'RKC Phase 2 failure profile filter auditor. Return ONLY valid JSON. NEVER invent failure modes.',
    },
    { role: 'user', content: userPrompt },
  ],
});

console.log(formatTelemetryTable([result]));
console.log('routingVerified:', result.telemetry?.routingVerified);
if (result.ok && result.parsed) {
  for (const c of auditCases) {
    const row = result.parsed.models?.find((m) => m.model === c.model);
    console.log(`${c.model}: spark=${JSON.stringify(row?.titles ?? [])} expect=${JSON.stringify(c.expectTitles)}`);
  }
}
process.exit(result.ok && result.telemetry?.routingVerified ? 0 : 1);
