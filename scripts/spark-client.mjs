/**
 * Bifrost Spark client via curl (more reliable than node fetch on this host).
 * PRIMARY: vllm/smart → smart-spark
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, '..');

function loadEnv() {
  const p = 'C:/Users/BS/molecule-work/.env.local';
  for (const line of fs.readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (!m) continue;
    const k = m[1].trim();
    if (!process.env[k]) process.env[k] = m[2].trim();
  }
}
loadEnv();

export const BIFROST_BASE = process.env.OPENAI_BASE_URL || 'http://100.110.254.98:4001/v1';
export const SPARK_MODEL = 'vllm/smart';

const SYSTEM = `You translate RKC Automotive (Englewood CO) website copy to natural US/Mexican Spanish.
Return ONLY valid JSON with the same keys. No markdown fences. No commentary.
Keep: RKC Automotive, Englewood, Denver, Littleton, Aurora, ASE, AllData, Mitchell, brand/part names, I-70, I-25, C-470, Evans Ave, Broadway, Santa Fe Drive, DOT ratings, $120/hr, OBD-II, VIN, technical acronyms (MLS, CCA, AGM, CVT, ABS, AFM, HEMI, PCV).
Use usted where natural.`;

function curlJson(url, bodyObj, timeoutSec = 180) {
  const key = process.env.OPENAI_API_KEY || process.env.BIFROST_KEY_PARTNER_PROJECT;
  if (!key) throw new Error('Missing Bifrost API key');
  const reqPath = path.join(ROOT, `.tmp-spark-req-${Date.now()}-${Math.random().toString(36).slice(2)}.json`);
  const resPath = path.join(ROOT, `.tmp-spark-res-${Date.now()}-${Math.random().toString(36).slice(2)}.json`);
  fs.writeFileSync(reqPath, JSON.stringify(bodyObj), 'utf8');
  const r = spawnSync(
    'curl.exe',
    [
      '-sS',
      '-X',
      'POST',
      url,
      '-H',
      `Authorization: Bearer ${key}`,
      '-H',
      'Content-Type: application/json; charset=utf-8',
      '--data-binary',
      `@${reqPath}`,
      '--max-time',
      String(timeoutSec),
      '-o',
      resPath,
    ],
    { encoding: 'utf8', timeout: (timeoutSec + 30) * 1000 },
  );
  try {
    if (r.status !== 0) throw new Error(`curl exit ${r.status}: ${r.stderr || r.stdout}`);
    const raw = fs.readFileSync(resPath, 'utf8');
    return JSON.parse(raw);
  } finally {
    try {
      fs.unlinkSync(reqPath);
    } catch {}
    try {
      fs.unlinkSync(resPath);
    } catch {}
  }
}

export function sparkChat(messages, { model = SPARK_MODEL, max_tokens = 8000 } = {}) {
  const json = curlJson(`${BIFROST_BASE}/chat/completions`, {
    model,
    messages,
    max_tokens,
    temperature: 0.12,
  });
  if (json.error) throw new Error(JSON.stringify(json.error));
  const msg = json.choices?.[0]?.message || {};
  let content = (msg.content || '').trim();
  if (!content && msg.reasoning) content = String(msg.reasoning);
  return {
    content,
    sparkKey: json.extra_fields?.routing_info?.key,
    model: json.extra_fields?.resolved_model_used || json.model,
    finish: json.choices?.[0]?.finish_reason,
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
        { model, max_tokens: 10000 },
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
