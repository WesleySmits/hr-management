# BLD-026 — Postgres + Drizzle schema migration

Status: In Progress

Goal

Migrate all data entities to Postgres and use Drizzle ORM for schema and migrations. Ensure no data loss on migration test run and that the conformance suite passes on Postgres adapter.

Acceptance criteria

- Migration plan documented.
- Drizzle migration config and an example migration present.
- Tests/integration run against Postgres adapter and pass.
- No data loss on migration dry-run.

Plan

1. Schema
   - Model all entities in Drizzle schema files under infra/db/schema.

2. Migrations
   - Use drizzle-kit or drift to generate migrations under infra/db/migrations.
   - Provide a sample migration that creates a "documents" table with metadata columns.

3. Testing
   - Add a docker-compose or test runner that spins up a Postgres instance for CI (if not already present).
   - Run migration, run conformance tests.

4. Migration steps
   - Create mapping scripts from existing data sources to Postgres.
   - Run migration in dry-run mode, validate row counts and checksums.

Example migration (SQL)

-- infra/db/migrations/0001_create_documents.sql
CREATE TABLE IF NOT EXISTS documents (
  id UUID PRIMARY KEY,
  filename TEXT NOT NULL,
  content_type TEXT,
  size BIGINT,
  storage_key TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

Notes

This task pairs with BLD-025 (R2) and BLD-027 (R2 implementation). Implementing Drizzle schemas early helps ensure metadata is stored reliably in Postgres.
