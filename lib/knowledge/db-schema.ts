/**
 * DB-ready schema mirror for Phase 2 → future Postgres migration.
 * Not executed at runtime — documents the target data plane from RKC_ARCHITECTURE_REPORT.md.
 */
export const KNOWLEDGE_DB_SCHEMA = `
-- RKC Automotive knowledge graph (Phase 2 prep)
-- Hierarchy: manufacturer → model → generation → model_year → trim → spec_field

CREATE TABLE manufacturers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  logo_path TEXT,
  category TEXT CHECK (category IN ('domestic', 'import')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE models (
  id TEXT PRIMARY KEY,
  manufacturer_id TEXT NOT NULL REFERENCES manufacturers(id),
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  vehicle_type TEXT NOT NULL,
  UNIQUE (manufacturer_id, slug)
);

CREATE TABLE generations (
  id TEXT PRIMARY KEY,
  model_id TEXT NOT NULL REFERENCES models(id),
  name TEXT NOT NULL,
  year_start INTEGER NOT NULL,
  year_end INTEGER,
  notes TEXT
);

CREATE TABLE model_years (
  id TEXT PRIMARY KEY,
  generation_id TEXT NOT NULL REFERENCES generations(id),
  year INTEGER NOT NULL,
  UNIQUE (generation_id, year)
);

CREATE TABLE trims (
  id TEXT PRIMARY KEY,
  model_year_id TEXT NOT NULL REFERENCES model_years(id),
  name TEXT NOT NULL,
  slug TEXT NOT NULL
);

CREATE TABLE sources (
  id TEXT PRIMARY KEY,
  label TEXT NOT NULL,
  url TEXT,
  license TEXT,
  retrieved_at TIMESTAMPTZ
);

CREATE TABLE spec_fields (
  id TEXT PRIMARY KEY,
  trim_id TEXT NOT NULL REFERENCES trims(id),
  category TEXT NOT NULL,
  field_key TEXT NOT NULL,
  field_label TEXT NOT NULL,
  value_text TEXT,
  value_number DOUBLE PRECISION,
  confidence TEXT NOT NULL CHECK (confidence IN ('high', 'medium', 'low', 'none')),
  review_status TEXT NOT NULL,
  UNIQUE (trim_id, category, field_key)
);

CREATE TABLE spec_field_sources (
  spec_field_id TEXT NOT NULL REFERENCES spec_fields(id),
  source_id TEXT NOT NULL REFERENCES sources(id),
  PRIMARY KEY (spec_field_id, source_id)
);

CREATE TABLE claims (
  id TEXT PRIMARY KEY,
  entity_type TEXT NOT NULL CHECK (entity_type IN ('manufacturer', 'model', 'generation', 'year', 'trim')),
  entity_id TEXT NOT NULL,
  topic TEXT NOT NULL,
  statement TEXT NOT NULL,
  confidence TEXT NOT NULL,
  review_status TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE claim_sources (
  claim_id TEXT NOT NULL REFERENCES claims(id),
  source_id TEXT NOT NULL REFERENCES sources(id),
  PRIMARY KEY (claim_id, source_id)
);

CREATE INDEX idx_models_manufacturer ON models(manufacturer_id);
CREATE INDEX idx_claims_entity ON claims(entity_type, entity_id);
CREATE INDEX idx_spec_fields_trim ON spec_fields(trim_id);
` as const;

export type KnowledgeDbTable =
  | 'manufacturers'
  | 'models'
  | 'generations'
  | 'model_years'
  | 'trims'
  | 'sources'
  | 'spec_fields'
  | 'claims';
