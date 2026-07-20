'use client';

import FadeIn from '@/app/components/ui/FadeIn';
import { useLanguage } from '@/lib/language';
import { knowledgeCopy } from '@/lib/i18n/knowledgeCopy';
import type { ModelKnowledgeOverview as ModelKnowledgeOverviewData } from '@/lib/knowledge/types';

type ModelKnowledgeOverviewProps = {
  overview: ModelKnowledgeOverviewData;
  brandName: string;
  modelName: string;
};

function reviewBadgeLabel(
  reviewStatus: string,
  copy: ReturnType<typeof knowledgeCopy>['badges'],
): string {
  switch (reviewStatus) {
    case 'verified':
      return copy.verified;
    case 'shop_observation':
      return copy.shopObservation;
    case 'marketing_unverified':
      return copy.marketing;
    default:
      return copy.unverified;
  }
}

export default function ModelKnowledgeOverview({
  overview,
  brandName,
  modelName,
}: ModelKnowledgeOverviewProps) {
  const { lang } = useLanguage();
  const copy = knowledgeCopy(lang);

  return (
    <section
      className="border-b border-[color:var(--line)] bg-white py-16 sm:py-20"
      aria-labelledby="model-knowledge-heading"
    >
      <div className="wrap">
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
            {copy.eyebrow}
          </p>
          <h2
            id="model-knowledge-heading"
            className="mt-3 font-display text-4xl tracking-wide text-foreground sm:text-5xl"
          >
            {copy.heading(brandName, modelName)}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">{copy.intro}</p>
          {overview.isPilot ? (
            <p className="mt-3 text-sm font-medium text-primary-blue">{copy.pilotNote}</p>
          ) : null}
        </FadeIn>

        <div className="mt-10 space-y-8">
          {overview.sections.map((section) => (
            <div
              key={section.id}
              className="rounded-2xl border border-[color:var(--line)] bg-[var(--background)] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl tracking-wide text-foreground">{section.title}</h3>
                <span className="rounded-full bg-primary-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary-green">
                  {reviewBadgeLabel(section.reviewStatus, copy.badges)}
                </span>
              </div>

              {section.items.length > 0 ? (
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <div key={`${section.id}-${item.label}`} className="rounded-xl border border-[color:var(--line)] bg-white p-4">
                      <dt className="text-xs font-bold uppercase tracking-[0.14em] text-primary-green">
                        {item.label}
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-ink-muted">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : section.emptyMessage ? (
                <p className="mt-6 text-sm leading-relaxed text-ink-muted">{section.emptyMessage}</p>
              ) : null}

              {section.sources.length > 0 ? (
                <ul className="mt-6 flex flex-wrap gap-2 text-xs text-ink-muted">
                  {section.sources.map((source) => (
                    <li key={source.id} className="rounded-full border border-[color:var(--line)] px-3 py-1">
                      {source.url ? (
                        <a
                          href={source.url}
                          className="hover:text-primary-green"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {source.label}
                        </a>
                      ) : (
                        source.label
                      )}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          {overview.specCategories.length > 0 ? (
            <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--accent-gray-light)] p-6 sm:p-8">
              <h3 className="font-display text-2xl tracking-wide text-foreground">{copy.specScaffoldTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{copy.specScaffoldIntro}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {overview.specCategories.map((category) => (
                  <li
                    key={category.category}
                    className="rounded-xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm text-ink-muted"
                  >
                    <span className="font-semibold text-foreground">{category.label}</span>
                    <span className="mt-1 block text-xs">{copy.unverifiedCategory}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
