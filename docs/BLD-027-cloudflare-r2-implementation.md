# BLD-027 — Cloudflare R2 document storage implementation

Status: In Progress

Goal

Implement document upload/download via Cloudflare R2 with signed URL expiry, migrate old local stubs, and ensure GDPR-compliant deletion.

Acceptance criteria

- R2 adapter implemented (stub) and documented.
- Endpoints for upload/download that return signed URLs.
- Migration plan for old local files described.
- Tests to verify signed URL expiry behavior.

Implementation notes

- Provide an adapter in src/infra/storage/r2Adapter.ts that exposes: uploadSignedUrl(key, expires), downloadSignedUrl(key, expires), deleteObject(key).
- Use AWS S3-compatible client (e.g., @aws-sdk/client-s3) configured for R2, or Cloudflare SDK.
- Ensure metadata stored in Postgres references the storage key (see BLD-026).

Migration

- Provide a node script to iterate local storage and copy to R2, updating metadata.

GDPR

- Deleting a document will remove metadata and call deleteObject on R2. Implement soft-delete and retention window if required.

