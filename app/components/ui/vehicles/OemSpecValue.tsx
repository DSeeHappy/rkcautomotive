'use client';

import { useId, useMemo, useState } from 'react';
import {
  parseOemSpecText,
  parseProseClauses,
  type OemProseClause,
  type OemSpecGeneration,
  type OemSpecLineItem,
} from '@/lib/knowledge/parseOemSpecText';

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
          <dd className="mt-0.5 text-[0.9375rem] leading-relaxed text-foreground">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * Prose broken into stacked clause items — bold lead-in labels where
 * detectable, per-item unverified badges, generous line spacing.
 */
function ClauseList({
  clauses,
  unverifiedLabel,
}: {
  clauses: OemProseClause[];
  unverifiedLabel: string;
}) {
  if (clauses.length === 0) return null;

  if (clauses.length === 1 && !clauses[0].label && !clauses[0].unverified) {
    return (
      <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-foreground">
        {clauses[0].text}
      </p>
    );
  }

  return (
    <ul className="max-w-2xl space-y-2.5">
      {clauses.map((clause, index) => (
        <li
          key={index}
          className="border-l-2 border-primary-green/25 pl-3.5 text-[0.9375rem] leading-relaxed text-foreground sm:pl-4"
        >
          {clause.label ? (
            <span className="font-semibold text-foreground">{clause.label}</span>
          ) : null}
          {clause.label && clause.text ? <span aria-hidden> — </span> : null}
          {clause.text ? <span className={clause.label ? 'text-ink-muted' : ''}>{clause.text}</span> : null}
          {clause.unverified ? (
            <span className="ml-2 inline-flex align-middle">
              <UnverifiedBadge
                note={clause.notes[0] ?? unverifiedLabel}
                label={unverifiedLabel}
              />
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

function GenerationContent({
  generation,
  unverifiedLabel,
}: {
  generation: OemSpecGeneration;
  unverifiedLabel: string;
}) {
  if (generation.contentFormat === 'structured' && generation.lineItems.length > 0) {
    return (
      <div className="space-y-3">
        {generation.unverifiedNotes.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {generation.unverifiedNotes.map((note) => (
              <UnverifiedBadge key={note} note={note} label={unverifiedLabel} />
            ))}
          </div>
        ) : null}
        <SpecLineItems items={generation.lineItems} />
      </div>
    );
  }

  return <ClauseList clauses={generation.clauses} unverifiedLabel={unverifiedLabel} />;
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
  const fallbackClauses = useMemo(
    () => (parsed.clauses.length > 0 ? parsed.clauses : parseProseClauses(parsed.raw)),
    [parsed],
  );

  if (parsed.layout === 'generations' && parsed.generations.length >= 2) {
    return (
      <GenerationTabs
        generations={parsed.generations}
        unverifiedLabel={unverifiedLabel}
        selectGenerationLabel={selectGenerationLabel}
      />
    );
  }

  if (parsed.contentFormat === 'structured' && parsed.lineItems.length > 0) {
    return (
      <div className="space-y-3">
        {parsed.unverifiedNotes.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {parsed.unverifiedNotes.map((note) => (
              <UnverifiedBadge key={note} note={note} label={unverifiedLabel} />
            ))}
          </div>
        ) : null}
        <SpecLineItems items={parsed.lineItems} />
      </div>
    );
  }

  return <ClauseList clauses={fallbackClauses} unverifiedLabel={unverifiedLabel} />;
}
