/**
 * Collect all canonical sitemap routes via tsx + lib/seo.ts getAllSiteRoutes().
 */
import { spawnSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

export function collectSitemapRoutes() {
  const script = path.join(__dirname, 'collect-sitemap-routes.ts');
  const r = spawnSync('npx --yes tsx "' + script.replace(/\\/g, '/') + '"', {
    cwd: root,
    encoding: 'utf8',
    timeout: 120_000,
    shell: true,
    env: { ...process.env, FORCE_COLOR: '0' },
  });

  if (r.status !== 0) {
    throw new Error(
      `collect-sitemap-routes.ts failed (${r.status}): ${(r.stderr || r.stdout || '').slice(0, 400)}`,
    );
  }

  const lines = (r.stdout || '').trim().split(/\r?\n/).filter(Boolean);
  const last = lines[lines.length - 1];
  const routes = JSON.parse(last);
  if (!Array.isArray(routes)) throw new Error('Expected JSON array of routes');
  return routes;
}
