# BLD-025 — Cloudflare R2 migration implementation plan

Status: Ready

Goal

Migrate document storage from local or existing provider to Cloudflare R2 with an approved implementation plan and acceptance criteria before MVP closure.

Acceptance criteria

- A written implementation plan exists in the repository (this file).
- Risks and roll-back plan defined.
- Storage API design and signed URL strategy documented.
- Migration steps and data verification described.

Plan summary

1. Architecture
   - Use Cloudflare R2 for object storage.
   - Access via official Cloudflare SDK (or AWS S3-compatible API) from backend services.
   - Store metadata in Postgres (refer to BLD-026).
   - Use signed URLs for upload/download with short expiry for downloads and longer for uploads where necessary.

2. Implementation steps
   - Create R2 bucket(s) and credentials.
   - Add configuration and secrets to deployment (use environment variables and secrets manager).
   - Implement storage adapter (r2 adapter) behind an interface used by application code.
   - Implement upload endpoint that creates signed PUT URLs and server-side upload handling if needed.
   - Implement download endpoint that issues signed GET URLs, applying permission checks.
   - Implement background migration script to copy existing files to R2 and update metadata.

3. Migration strategy
   - Run a dry-run migration that copies files to R2 and records mapping without switching traffic.
   - Verify checksums and metadata for migrated files.
   - Switch reads to R2 behind a feature flag.
   - Decommission local storage after verification and a retention window.

4. Security & GDPR
   - Ensure deletion propagates: deleting metadata triggers object deletion in R2 and retention logs.
   - Implement audit logs for deletions and downloads.
   - Use short-lived signed URLs and scope them to required operations.

5. Testing & Verification
   - Unit tests for adapter behavior.
   - Integration tests to verify signed URL expiry and upload/download.
   - Migration verification script: sample-set checksum comparison and object existence checks.

6. Rollback
   - Keep local copies until migration verification passes.
   - Feature-flag to switch back to local storage if issues.

7. Timeline & Owners
   - Draft plan (this file) — Owner: backend lead.
   - Implementation & tests — Owner: backend engineer.

Notes

This document accompanies tasks BLD-026 and BLD-027. Implementation will depend on Postgres migration (metadata) and the R2 adapter integration.
