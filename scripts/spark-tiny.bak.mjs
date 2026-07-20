/**
 * Bifrost Spark translator for Spanish.
 * User map:
 *   ds  = vllm/research → research-spark (Nemotron 1M) — PRIMARY for Spanish batches
 *   ds  = vllm/smart → smart-spark — failover when research times out
 *   ds2 = Qwen chat + Qwen VL rerank (vllm/rerank) + Qwen VL embed (vllm/embed-visual)
 *        Qwen chat ID not allowed on this partner VK (vllm/qwen → 403)
 */
import fs from 'fs';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

for (const line of fs.readFileSync('C:/Users/BS/molecule-work/.env.local', 'utf8').split(/\r?\n/)) {
  const m = line.match(/^([^#=]+)=(.*)$/);
  if (m && !process.env[m[1].trim()]) process.env[m[1].trim()] = m[2].trim();
}

const BASE = process.env.OPENAI_BASE_URL;
const KEY = process.env.OPENAI_API_KEY;
export const SPARK_MODEL = 'vllm/research';
export const SPARK_MODELS = ['vllm/research', 'vllm/smart'];
export const DS2_QWEN_CHAT = 'vllm/qwen'; // intent; 403 on this VK
export const DS2_QWEN_RERANK = 'vllm/rerank';
export const DS2_QWEN_EMBED = 'vllm/embed-visual';

export function sparkTranslate(obj, label, { retries = 8, max_tokens = 2500 } = {}) {
  let lastErr;
  for (let attempt = 1; attempt <= retries; attempt++) {
    const model = SPARK_MODELS[(attempt - 1) % SPARK_MODELS.length];
    const maxTime = model === 'vllm/research' ? '75' : '55';
    const req = `.tmp-sreq-${label}-${attempt}.json`;
    const res = `.tmp-sres-${label}-${attempt}.json`;
    fs.writeFileSync(
      req,
      JSON.stringify({
        model,
        temperature: 0.1,
        max_tokens,
        messages: [
          {
            role: 'system',
            content:
              'Translate to US/Mexican Spanish for RKC Automotive. Return ONLY JSON same keys. Keep proper nouns/tech codes. No markdown.',
          },
          {
            role: 'user',
            content: `Translate string values to Spanish:\n${JSON.stringify(obj)}`,
          },
        ],
      }),
    );
    const r = spawnSync(
      'curl.exe',
      [
        '-sS',
        '--http1.1',
        '-X',
        'POST',
        `${BASE}/chat/completions`,
        '-H',
        `Authorization: Bearer ${KEY}`,
        '-H',
        'Content-Type: application/json; charset=utf-8',
        '--data-binary',
        `@${req}`,
        '--max-time',
        maxTime,
        '--connect-timeout',
        '10',
        '-o',
        res,
      ],
      { encoding: 'utf8', timeout: (Number(maxTime) + 15) * 1000 },
    );
    try {
      if (r.status !== 0) throw new Error(`curl ${r.status}: ${r.stderr || ''}`);
      const raw = fs.readFileSync(res, 'utf8');
      if (!raw.trim()) throw new Error('empty response');
      const j = JSON.parse(raw);
      if (j.error) throw new Error(JSON.stringify(j.error));
      const sparkKey = j.extra_fields?.routing_info?.key;
      let c = (j.choices?.[0]?.message?.content || '').trim();
      if (c.startsWith('```')) c = c.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
      const s = c.indexOf('{');
      const e = c.lastIndexOf('}');
      if (s < 0 || e <= s) throw new Error(`no json: ${c.slice(0, 100)}`);
      const parsed = JSON.parse(c.slice(s, e + 1));
      console.log(`[spark] ${label} OK model=${model} sparkKey=${sparkKey} a=${attempt}`);
      try {
        fs.unlinkSync(req);
      } catch {}
      try {
        fs.unlinkSync(res);
      } catch {}
      return { parsed, sparkKey, model };
    } catch (err) {
      lastErr = err;
      console.error(`[spark] ${label} FAIL model=${model} a=${attempt}: ${String(err.message).slice(0, 120)}`);
      spawnSync('powershell', ['-Command', 'Start-Sleep -Milliseconds 400'], { stdio: 'ignore' });
    }
  }
  throw lastErr;
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);
if (isMain) {
  const r = sparkTranslate({ t: 'Exhaust System Repair' }, 'ping');
  console.log(JSON.stringify(r));
}
