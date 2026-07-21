'use client';

import Image from 'next/image';
import FadeIn from '@/app/components/ui/FadeIn';
import { useLanguage } from '@/lib/language';
import { knowledgeCopy } from '@/lib/i18n/knowledgeCopy';
import OemSpecValue from '@/app/components/ui/vehicles/OemSpecValue';
import type {
  DataSource,
  ModelKnowledgeOverview as ModelKnowledgeOverviewData,
  ModelOverviewSection,
  SpecCategory,
} from '@/lib/knowledge/types';

type ModelKnowledgeOverviewProps = {
  overview: ModelKnowledgeOverviewData;
  brandName: string;
  modelName: string;
  imageSrc?: string;
  imageAlt?: string;
  imageSourceLabel?: string;
};

type SectionLayout = 'identity' | 'prose' | 'observations' | 'spec-grid';

const PROSE_SECTION_IDS = new Set(['engineering', 'enthusiast', 'comparison']);
const EMPTY_SHELL_IDS = new Set(['engineering', 'enthusiast', 'comparison']);

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

function humanizeLabel(raw: string): string {
  const normalized = raw.trim().replace(/_/g, ' ').replace(/-/g, ' ');
  if (!normalized) return raw;
  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
}

function getSectionLayout(section: ModelOverviewSection): SectionLayout {
  if (section.id === 'identity' || section.id === 'overview') return 'identity';
  if (section.id === 'shop-observations' || section.id === 'ownership') return 'observations';
  if (section.id === 'oem-specs') return 'spec-grid';
  if (PROSE_SECTION_IDS.has(section.id)) return 'prose';
  return 'identity';
}

function shouldRenderSection(section: ModelOverviewSection): boolean {
  if (section.items.length > 0) return true;
  if (section.emptyMessage && EMPTY_SHELL_IDS.has(section.id)) return false;
  if (section.id === 'oem-specs' && section.emptyMessage) return false;
  return Boolean(section.emptyMessage);
}

function buildDisplaySections(overview: ModelKnowledgeOverviewData): ModelOverviewSection[] {
  const phase3 = overview.phase3Sections.filter(shouldRenderSection);
  const hasPhase3Overview = phase3.some((section) => section.id === 'overview');

  const legacy = overview.sections.filter((section) => {
    if (section.id === 'identity' && hasPhase3Overview) return false;
    return shouldRenderSection(section);
  });

  return [...phase3, ...legacy];
}

function collectUniqueSources(sections: ModelOverviewSection[]): DataSource[] {
  const seen = new Set<string>();
  const sources: DataSource[] = [];

  for (const section of sections) {
    for (const source of section.sources) {
      const key = source.url ?? source.id;
      if (seen.has(key)) continue;
      seen.add(key);
      sources.push(source);
    }
  }

  return sources;
}

function itemLabelIsRedundant(section: ModelOverviewSection, label: string): boolean {
  const normalizedSection = section.title.trim().toLowerCase();
  const normalizedLabel = label.trim().toLowerCase();
  return normalizedSection === normalizedLabel;
}

function IdentityGrid({ items }: { items: ModelOverviewSection['items'] }) {
  return (
    <dl className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
            {humanizeLabel(item.label)}
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-foreground">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProseBody({ section }: { section: ModelOverviewSection }) {
  return (
    <div className="mt-5 space-y-4">
      {section.items.map((item) => (
        <div key={`${section.id}-${item.label}`}>
          {!itemLabelIsRedundant(section, item.label) ? (
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
              {humanizeLabel(item.label)}
            </p>
          ) : null}
          <p
            className={`text-sm leading-relaxed text-ink-muted${
              itemLabelIsRedundant(section, item.label) ? '' : ' mt-1.5'
            }`}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

function ObservationsBody({ section }: { section: ModelOverviewSection }) {
  return (
    <div className="mt-5 space-y-5">
      {section.items.map((item) => (
        <div
          key={`${section.id}-${item.label}`}
          className="border-l-2 border-primary-green/30 pl-4 sm:pl-5"
        >
          <h4 className="text-sm font-semibold text-foreground">{humanizeLabel(item.label)}</h4>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

function OemSpecCategoryBlock({
  category,
  subtitle,
  copy,
}: {
  category: SpecCategory;
  subtitle?: string;
  copy: ReturnType<typeof knowledgeCopy>;
}) {
  const populated = category.fields.filter((field) => field.verified.value !== null);
  if (populated.length === 0) return null;

  const primary = populated[0];
  const displayText = primary.verified.displayValue ?? String(primary.verified.value ?? '');

  return (
    <div className="py-6 first:pt-0 last:pb-0">
      <h4 className="font-display text-lg tracking-wide text-foreground">{category.label}</h4>
      <div className="mt-4">
        <OemSpecValue
          text={displayText}
          subtitle={subtitle}
          unverifiedLabel={copy.needsOemSource}
          selectGenerationLabel={copy.selectGeneration}
        />
      </div>
    </div>
  );
}

function OemSpecsBody({
  items,
  subtitle,
  copy,
}: {
  items: ModelOverviewSection['items'];
  subtitle?: string;
  copy: ReturnType<typeof knowledgeCopy>;
}) {
  return (
    <div className="mt-5 space-y-8">
      {items.map((item) => (
        <div key={item.label}>
          <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-green">
            {humanizeLabel(item.label)}
          </h4>
          <div className="mt-3">
            <OemSpecValue
              text={item.value}
              subtitle={subtitle}
              unverifiedLabel={copy.needsOemSource}
              selectGenerationLabel={copy.selectGeneration}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function KnowledgeSection({
  section,
  copy,
  oemSubtitle,
}: {
  section: ModelOverviewSection;
  copy: ReturnType<typeof knowledgeCopy>;
  oemSubtitle?: string;
}) {
  const layout = getSectionLayout(section);

  return (
    <section className="py-8 sm:py-9">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
        <h3 className="font-display text-xl tracking-wide text-foreground sm:text-2xl">
          {section.title}
        </h3>
        <span className="rounded-full bg-primary-green/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-primary-green">
          {reviewBadgeLabel(section.reviewStatus, copy.badges)}
        </span>
      </div>

      {section.items.length > 0 ? (
        layout === 'identity' ? (
          <IdentityGrid items={section.items} />
        ) : layout === 'prose' ? (
          <ProseBody section={section} />
        ) : layout === 'observations' ? (
          <ObservationsBody section={section} />
        ) : (
          <OemSpecsBody items={section.items} subtitle={oemSubtitle} copy={copy} />
        )
      ) : section.emptyMessage ? (
        <p className="mt-5 text-sm italic leading-relaxed text-ink-muted">{section.emptyMessage}</p>
      ) : null}
    </section>
  );
}

function SourcesFooter({
  sources,
  label,
}: {
  sources: DataSource[];
  label: string;
}) {
  if (sources.length === 0) return null;

  return (
    <div className="border-t border-[color:var(--line)] pt-6 sm:pt-8">
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">{label}</p>
      <ul className="mt-3 flex flex-wrap gap-2 text-xs text-ink-muted">
        {sources.map((source) => (
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
    </div>
  );
}

export default function ModelKnowledgeOverview({
  overview,
  brandName,
  modelName,
  imageSrc,
  imageAlt,
  imageSourceLabel,
}: ModelKnowledgeOverviewProps) {
  const { lang } = useLanguage();
  const copy = knowledgeCopy(lang);
  const resolvedAlt =
    imageAlt ?? `${brandName} ${modelName} service at RKC Automotive Englewood CO`;

  const displaySections = buildDisplaySections(overview);
  const pageSources = collectUniqueSources(displaySections);

  return (
    <section
      className="border-b border-[color:var(--line)] bg-white py-12 sm:py-16"
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
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{copy.intro}</p>
          {overview.isPilot ? (
            <p className="mt-3 text-sm font-medium text-primary-blue">{copy.pilotNote}</p>
          ) : null}
        </FadeIn>

        {imageSrc ? (
          <FadeIn className="mt-8 sm:mt-10">
            <figure className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--accent-gray-light)]">
              <div className="relative aspect-[16/9] w-full max-w-3xl">
                <Image
                  src={imageSrc}
                  alt={resolvedAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              {imageSourceLabel ? (
                <figcaption className="border-t border-[color:var(--line)] px-4 py-2 text-xs text-ink-muted">
                  {imageSourceLabel}
                </figcaption>
              ) : null}
            </figure>
          </FadeIn>
        ) : null}

        {displaySections.length > 0 ? (
          <FadeIn className="mt-8 divide-y divide-[color:var(--line)] sm:mt-10">
            {displaySections.map((section) => (
              <KnowledgeSection
                key={section.id}
                section={section}
                copy={copy}
                oemSubtitle={overview.oemSubtitle}
              />
            ))}
            <SourcesFooter sources={pageSources} label={copy.sourcesLabel} />
          </FadeIn>
        ) : null}

        {!overview.hasVerifiedSpecs && overview.specCategories.length > 0 ? (
          <FadeIn className="mt-8 border-t border-[color:var(--line)] pt-8 sm:mt-10 sm:pt-10">
            <h3 className="font-display text-xl tracking-wide text-foreground sm:text-2xl">
              {copy.specScaffoldTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {copy.specScaffoldCollapsed}
            </p>
          </FadeIn>
        ) : overview.hasVerifiedSpecs ? (
          <FadeIn className="mt-8 border-t border-[color:var(--line)] pt-8 sm:mt-10 sm:pt-10">
            <h3 className="font-display text-xl tracking-wide text-foreground sm:text-2xl">
              {copy.specScaffoldTitleVerified}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {copy.specScaffoldIntroVerified}
            </p>
            <div className="mt-6 divide-y divide-[color:var(--line)]">
              {overview.specCategories.map((category) => (
                <OemSpecCategoryBlock
                  key={category.category}
                  category={category}
                  subtitle={overview.oemSubtitle}
                  copy={copy}
                />
              ))}
            </div>
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}
