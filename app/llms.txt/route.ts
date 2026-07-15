import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';

/** Explicit route so auditors receive a stable text/plain /llms.txt (also mirrored from public/). */
export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'llms.txt');
  const body = await readFile(filePath, 'utf8');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
}
