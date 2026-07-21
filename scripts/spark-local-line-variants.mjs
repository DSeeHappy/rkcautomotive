/**
 * Generate truthful variants of the repeated vehicle-page locality sentence
 * (SEO audit finding 3: verbatim "serves south Denver..." repetition at scale).
 * Fail-closed Bifrost Spark (vllm/smart). Calls kept tiny — this network resets
 * larger requests (curl 56), same pattern as prior Acura ES sentence work.
 * Output reviewed before hard-coding into lib/modelCommonServices.ts.
 */
import { sparkCall } from './lib/sparkClient.mjs';

const ORIGINAL =
  'RKC Automotive in Englewood serves south Denver, Littleton, Aurora, and Highlands Ranch drivers.';

const SYSTEM =
  'Rewrite the sentence keeping the exact same facts: shop is RKC Automotive in Englewood, Colorado; it serves drivers from south Denver, Littleton, Aurora, and Highlands Ranch. No new cities, prices, ratings, or superlatives. One sentence. Return only the sentence.';

const ANGLES = [
  'Lead with the cities.',
  'Lead with Englewood.',
  'Phrase around drivers coming to the shop.',
  'Use the phrase "south Denver metro" plus the city names.',
  'Phrase around the shop welcoming drivers.',
  'Plain and factual, different word order.',
];

const variants = [];
for (let i = 0; i < ANGLES.length; i++) {
  let got = null;
  for (let attempt = 1; attempt <= 5 && !got; attempt++) {
    const r = sparkCall({
      model: 'vllm/smart',
      messages: [
        { role: 'system', content: SYSTEM },
        { role: 'user', content: `${ORIGINAL}\nStyle: ${ANGLES[i]}` },
      ],
      max_tokens: 60,
      temperature: 0.35,
      timeoutSec: 45,
      label: `local-line-v${i + 1}`,
    });
    if (r.ok && r.content.trim()) {
      got = r.content.trim().replace(/^["'`]+|["'`]+$/g, '');
      console.error(`[v${i + 1}] ok routing=${r.telemetry.routingKey} attempt=${attempt}`);
    } else {
      console.error(`[v${i + 1}] attempt ${attempt} failed: ${r.error}`);
    }
  }
  if (!got) {
    console.error(`FATAL: variant ${i + 1} failed after retries`);
    process.exit(1);
  }
  variants.push(got);
}

console.log(JSON.stringify(variants, null, 2));
