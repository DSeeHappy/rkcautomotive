/**
 * Bifrost Spark client — delegates to fail-closed scripts/lib/sparkClient.mjs.
 * PRIMARY: vllm/smart → smart-spark
 */
import { spawnSync } from 'child_process';
import {
  sparkCall,
  assertSparkOk,
  MODEL_SMART,
  ROOT,
} from './lib/sparkClient.mjs';

export { ROOT };
export const SPARK_MODEL = MODEL_SMART;

const SYSTEM = `You translate RKC Automotive (Englewood CO) website copy to natural US/Mexican Spanish.
Return ONLY valid JSON with the same keys. No markdown fences. No commentary.
Keep: RKC Automotive, Englewood, Denver, Littleton, Aurora, ASE, AllData, Mitchell, brand/part names, I-70, I-25, C-470, Evans Ave, Broadway, Santa Fe Drive, DOT ratings, $120/hr, OBD-II, VIN, technical acronyms (MLS, CCA, AGM, CVT, ABS, AFM, HEMI, PCV).
Use usted where natural.`;

export function sparkChat(messages, { model = SPARK_MODEL, max_tokens = 8000, label = 'spark-client' } = {}) {
  const result = sparkCall({
    model,
    messages,
    max_tokens,
    temperature: 0.12,
    timeoutSec: 180,
    label,
  });
  assertSparkOk(result, 'sparkChat');
  return {
    content: result.content,
    sparkKey: result.telemetry.routingKey,
    model: result.telemetry.modelResolved,
    finish: result.json?.choices?.[0]?.finish_reason,
  };
}

export async function translateObject(obj, label, { model = SPARK_MODEL, retries = 3 } = {}) {
  let lastErr;
  for (let i = 0; i < retries; i++) {
    try {
      const { content, sparkKey, finish } = sparkChat(
        [
          { role: 'system', content: SYSTEM },
          {
            role: 'user',
            content: `Translate every string value in this JSON to Spanish. Preserve keys and array structure exactly.\n\n${JSON.stringify(obj)}`,
          },
        ],
        { model, max_tokens: 10000, label: `translate-${label}` },
      );
      let cleaned = content.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
      const s = cleaned.indexOf('{');
      const e = cleaned.lastIndexOf('}');
      if (s >= 0 && e > s) cleaned = cleaned.slice(s, e + 1);
      const parsed = JSON.parse(cleaned);
      console.log(`[spark] ${label} OK sparkKey=${sparkKey} finish=${finish} attempt=${i + 1}`);
      return parsed;
    } catch (err) {
      lastErr = err;
      console.error(`[spark] ${label} attempt ${i + 1} failed:`, err.message?.slice(0, 200));
      spawnSync('powershell', ['-Command', 'Start-Sleep -Seconds 2'], { stdio: 'ignore' });
    }
  }
  throw lastErr;
}
