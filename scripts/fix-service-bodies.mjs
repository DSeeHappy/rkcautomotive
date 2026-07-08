import fs from 'fs';
import path from 'path';

const root = path.resolve('app/services');
const skip = new Set(['brake-repair-englewood-co']);

for (const name of fs.readdirSync(root)) {
  if (skip.has(name)) continue;
  const file = path.join(root, name, 'page.tsx');
  if (!fs.existsSync(file)) continue;

  let c = fs.readFileSync(file, 'utf8');

  c = c.replace(/import \{ CheckCircle, ([^}]+) \} from 'lucide-react';/, "import { $1 } from 'lucide-react';");

  c = c.replace(
    /<section className="rounded-3xl bg-surface p-7 ring-1 ring-slate-200\/70 sm:p-8">[\s\S]*?<\/section>/,
    (m) => {
      const title = (m.match(/<h3[^>]*>([^<]+)<\/h3>/) || [, 'When to schedule'])[1];
      return `<section>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">${title}</h3>
        <ul className="mt-6 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {symptoms.map((s) => (
            <li key={s} className="py-4 text-foreground">{s}</li>
          ))}
        </ul>
      </section>`;
    }
  );

  c = c.replace(
    /<ul className="grid gap-3 sm:grid-cols-2">[\s\S]*?<\/ul>/,
    `<ul className="mt-2 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {includes.map((item) => (
            <li key={item} className="py-4 font-medium text-foreground">{item}</li>
          ))}
        </ul>`
  );

  c = c.replace(/text-accent-gray/g, 'text-ink-muted');
  c = c.replace(
    /className="text-3xl font-bold tracking-tight text-foreground"/g,
    'className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"'
  );
  c = c.replace(
    /className="text-2xl font-bold text-foreground"/g,
    'className="text-2xl font-bold tracking-tight text-foreground"'
  );

  fs.writeFileSync(file, c);
  console.log('updated', name);
}
