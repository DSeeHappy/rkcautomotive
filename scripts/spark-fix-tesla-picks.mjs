/**
 * Fix Tesla reliablePicks via small→smart Spark call.
 */
import fs from 'fs';
import path from 'path';
import { ROOT, sparkRoutedRetry, getCallCount } from './spark-routed.mjs';

const hubPath = path.join(ROOT, '.tmp-brand-hub-tesla.json');
const hub = JSON.parse(fs.readFileSync(hubPath, 'utf8'));

const r = sparkRoutedRetry(
  'small',
  'tesla-picks-fix',
  'For Tesla at independent shop RKC Englewood. Models we service: Model 3, Model Y, Model S, Model X, Cybertruck. Return ONLY JSON: {"reliablePicks":["3-5 actual Tesla model names with optional year notes"],"higherScrutiny":"1 sentence on what used buyers should inspect","coloradoAngle":"1 sentence Colorado altitude/winter EV angle"}',
  { max_tokens: 350 },
  4,
);

hub.en.reliablePicks = r.parsed.reliablePicks;
hub.en.higherScrutiny = r.parsed.higherScrutiny;
hub.en.coloradoAngle = r.parsed.coloradoAngle;
hub.picksFix = r.meta;
fs.writeFileSync(hubPath, JSON.stringify(hub, null, 2));
console.log('FIXED picks', JSON.stringify(r.parsed), 'calls=', getCallCount());
