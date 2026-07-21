'use client';

import { useId, useMemo, useState } from 'react';
import { parseOemSpecText, type OemSpecGeneration, type OemSpecLineItem } from '@/lib/knowledge/parseOemSpecText';

type OemSpecValueProps = {
  text: string;
  subtitle?: string;
  unverifiedLabel: string;
  selectGenerationLabel: string;
};

function UnverifiedBadge({ note, label }: { note: string; label: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-amber-200/80 bg-amber-50 px-2.5 py-0.5 text-[0.65rem] font-medium leading-snug text-amber-900/90"
      title={note}
    >
      {label}
    </span>
  );
}

function SpecLineItems({ items }: { items: OemSpecLineItem[] }) {
  return (
    <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <div key={`${item.label}-${index}`} className="min-w-0">
          <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-ink-muted">
            {item.label}
          </dt>
          <dd className="mt-0.5 text-sm leading-relaxed text-foreground">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProseBody({ body }: { body: string }) {
  const paragraphs = body
    .split(/\.\s+(?=[A-Z(0-9])/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => (part.endsWith('.') ? part : `${part}.`));

  if (paragraphs.length <= 1) {
    return <p className="text-sm leading-relaxed text-foreground">{body}</p>;
  }

  return (
    <div className="space-y-2.5">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-sm leading-relaxed text-foreground">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function GenerationContent({
  generation,
  unverifiedLabel,
}: {
  generation: OemSpecGeneration;
  unverifiedLabel: string;
}) {
  return (
    <div className="space-y-3">
      {generation.unverifiedNotes.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {generation.unverifiedNotes.map((note) => (
            <UnverifiedBadge key={note} note={note} label={unverifiedLabel} />
          ))}
        </div>
      ) : null}
      {generation.contentFormat === 'structured' && generation.lineItems.length > 0 ? (
        <SpecLineItems items={generation.lineItems} />
      ) : generation.body ? (
        <ProseBody body={generation.body} />
      ) : null}
    </div>
  );
}

function GenerationTabs({
  generations,
  unverifiedLabel,
  selectGenerationLabel,
}: {
  generations: OemSpecGeneration[];
  unverifiedLabel: string;
  selectGenerationLabel: string;
}) {
  const baseId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = generations[activeIndex] ?? generations[0];

  return (
    <div>
      <div
        className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden"
        role="tablist"
        aria-label={selectGenerationLabel}
      >
        {generations.map((generation, index) => {
          const isActive = index === activeIndex;
          const tabId = `${baseId}-tab-${index}`;
          const panelId = `${baseId}-panel-${index}`;
          return (
            <button
              key={generation.code}
              type="button"
              id={tabId}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              onClick={() => setActiveIndex(index)}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide transition sm:text-sm ${
                isActive
                  ? 'border-primary-green bg-primary-green text-white shadow-sm'
                  : 'border-[color:var(--line)] bg-white text-ink-muted hover:border-primary-green/40 hover:text-foreground'
              }`}
            >
              {generation.displayLabel}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${activeIndex}`}
        className="mt-4 rounded-xl border border-[color:var(--line)] bg-[color:var(--accent-gray-light)]/40 p-4 sm:p-5 lg:hidden"
      >
        {active ? (
          <GenerationContent generation={active} unverifiedLabel={unverifiedLabel} />
        ) : null}
      </div>

      <div className={`mt-0 hidden gap-4 lg:grid ${generations.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}`}>
        {generations.map((generation) => (
          <div
            key={`card-${generation.code}`}
            className="rounded-xl border border-[color:var(--line)] bg-[color:var(--accent-gray-light)]/30 p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-green">
              {generation.displayLabel}
            </p>
            <div className="mt-3">
              <GenerationContent generation={generation} unverifiedLabel={unverifiedLabel} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OemSpecValue({
  text,
  subtitle,
  unverifiedLabel,
  selectGenerationLabel,
}: OemSpecValueProps) {
  const parsed = useMemo(() => parseOemSpecText(text, subtitle), [text, subtitle]);

  if (parsed.layout === 'generations' && parsed.generations.length >= 2) {
    return (
      <GenerationTabs
        generations={parsed.generations}
        unverifiedLabel={unverifiedLabel}
        selectGenerationLabel={selectGenerationLabel}
      />
    );
  }

  const proseBody =
    parsed.unverifiedNotes.length > 0
      ? parsed.generations.length === 0
        ? parsed.raw.replace(UNVERIFIED_PATTERN, '').trim() || parsed.raw
        : parsed.raw
      : parsed.raw;

  return (
    <div className="space-y-3">
      {parsed.unverifiedNotes.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {parsed.unverifiedNotes.map((note) => (
            <UnverifiedBadge key={note} note={note} label={unverifiedLabel} />
          ))}
        </div>
      ) : null}
      {parsed.contentFormat === 'structured' && parsed.lineItems.length > 0 ? (
        <SpecLineItems items={parsed.lineItems} />
      ) : (
        <ProseBody body={proseBody} />
      )}
    </div>
  );
}

const UNVERIFIED_PATTERN = /\*{0,2}\s*Not verified\s*[—-]\s*needs OEM source\*{0,2}/gi;
