/**
 * Phase 1 Architecture Audit — live Bifrost Spark traffic with retries.
 * large → vllm/research | small → vllm/smart
 */
import fs from 'fs';
import path from 'path';
import { sparkRoutedRetry, LOG_DIR, ROOT, getCallCount } from './spark-routed.mjs';

const OUT = path.join(LOG_DIR, `phase1-arch-audit-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);

const CTX = `RKC Automotive verified codebase:
- Next.js 16.0.7 App Router, React 19.2, Tailwind 4, TS5; Vercel; no middleware, no API routes, no database
- 1040 sitemap URLs: 13 core, 13 services, 20 areas, 127 vehicle hubs, 867 model×service deep dives
- Data: lib/constants.ts (NAP, services, FAQ), vehicleBrands.ts (~19 brands), vehicleModels.ts, modelDeepDiveContent.ts (templates), brandFailureProfiles.ts, modelReliabilityNotes.ts, serviceAreas.ts, i18n client EN|ES (HAS_LOCALE_URL_SEGMENTS=false)
- SEO: JSON-LD LocalBusiness/AutoRepair, sharded sitemaps, IndexNow, llms.txt
- Perf: home LCP bottleneck; CLS 0; SEO 100 on Lighthouse samples
- Spark: offline content scripts only — no in-product AI/RAG
- CURRENT: Englewood CO ASE repair marketing site
- VISION: automotive media/education/authority (MotorTrend/Edmunds hybrid) — NOT dealership
- KEEP shop NAP/services/local SEO; NEVER invent vehicle specs; AI needs confidence/sources/"Unable to verify"`;

const SYS = `Senior architecture reviewer for RKC Phase 1. Return ONLY valid JSON. Honest: shop marketing today, NOT MotorTrend. No fabricated vehicle specs.`;

const results = { startedAt: new Date().toISOString(), calls: [] };

function push(label, r) {
  results.calls.push({
    label,
    model: r.meta.model,
    routingKey: r.meta.routingKey,
    httpStatus: r.meta.httpStatus,
    latencyMs: r.meta.latencyMs,
    usage: r.meta.usage,
    resFile: r.meta.resFile,
    parsed: r.parsed,
    content: r.content,
  });
  console.log(`[ok] ${label} key=${r.meta.routingKey} http=${r.meta.httpStatus} ms=${r.meta.latencyMs}`);
}

try {
  console.log('[phase1] research critique');
  push(
    'critique',
    sparkRoutedRetry(
      'large',
      'phase1-critique',
      `${CTX}\n\nJSON keys: currentStateSummary,strengths,technicalDebt,visionGap,opportunities,keepList,doNotBuild,phase2to10Roadmap([{phase,name,focus}]),aiSafetyRules`,
      { system: SYS, max_tokens: 2400, temperature: 0.25 },
      6,
    ),
  );

  console.log('[phase1] smart debt');
  push(
    'debt',
    sparkRoutedRetry(
      'small',
      'phase1-debt',
      `Top 8 technical debt items as JSON {items:string[]}. Context: ${CTX}`,
      { system: SYS, max_tokens: 550 },
      5,
    ),
  );

  console.log('[phase1] research roadmap');
  push(
    'roadmap',
    sparkRoutedRetry(
      'large',
      'phase1-roadmap',
      `Phases 2-10 roadmap shop→authority platform. JSON {roadmap:[{phase,name,goal,deliverables,exitCriteria,risks}],keepVsAvoid:{keep,avoid},dataIntegrity}. Cover: knowledge DB, vehicle authority pages, AI assistant, comparison, content engine, community, SEO authority, design, testing. Never fabricate specs; keep repair shop.`,
      { system: SYS, max_tokens: 2800, temperature: 0.3 },
      6,
    ),
  );

  console.log('[phase1] smart keep/avoid');
  push(
    'keepAvoid',
    sparkRoutedRetry(
      'small',
      'phase1-keep-avoid',
      'JSON {keep:string[6],avoid:string[6]} — keep NAP/services/local SEO; avoid inventory/financing/trade-in/sales funnel/fabricated specs',
      { system: SYS, max_tokens: 400 },
      5,
    ),
  );

  console.log('[phase1] research opportunities');
  push(
    'opportunities',
    sparkRoutedRetry(
      'large',
      'phase1-opp',
      `${CTX}\nReuse failure profiles, reliability notes, deep-dives, warranty. JSON {opportunities:[{title,why,reuse,phase}],aiSafety:{must,refusePatterns,sourcePolicy},honestGap}`,
      { system: SYS, max_tokens: 2200, temperature: 0.25 },
      6,
    ),
  );

  console.log('[phase1] smart verdict');
  push(
    'verdict',
    sparkRoutedRetry(
      'small',
      'phase1-verdict',
      'JSON {verdict,scoreOutOf10,oneLiner} — honest shop SEO site vs MotorTrend vision',
      { system: SYS, max_tokens: 200 },
      5,
    ),
  );

  results.finishedAt = new Date().toISOString();
  results.totalCalls = getCallCount();
  fs.writeFileSync(OUT, JSON.stringify(results, null, 2));
  console.log(`[phase1] DONE calls=${results.totalCalls} out=${path.relative(ROOT, OUT)}`);
} catch (err) {
  results.error = String(err.message || err);
  results.finishedAt = new Date().toISOString();
  fs.writeFileSync(OUT, JSON.stringify(results, null, 2));
  console.error('BIFROST STOP:', err.message || err);
  process.exit(1);
}
