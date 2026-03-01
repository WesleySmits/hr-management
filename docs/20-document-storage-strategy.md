# 20 — Document Storage Strategy (MVP -> Cloudflare R2)

## Decision
- **MVP:** Local browser storage (IndexedDB-backed strategy).
- **Planned migration target:** S3-compatible storage via **Cloudflare R2**.

## Why this sequence
- MVP ships faster with local-first storage.
- Strategy pattern avoids lock-in and allows migration without rewriting feature logic.

## Storage Strategy Requirements
- Feature code can only use `StorageStrategy` contract.
- No direct provider-specific calls in feature/domain services.
- Document metadata model must be provider-agnostic (`storageRef`, `contentHash`, `mimeType`, etc.).

## MVP Constraints (IndexedDB)
- Suitable for early validation and local/offline-first behavior.
- Not final architecture for SaaS reliability/compliance.

## Migration Target (Cloudflare R2)
- Add `S3StorageStrategy` (R2-compatible).
- Use scoped object keys (tenant/user/document).
- Use signed URL access patterns.
- Keep metadata in app DB with migration markers.

## Required Transition Tasks
1. Define R2 object key and bucket policy standard.
2. Build R2 strategy implementation behind existing interface.
3. Add document migration pipeline and verification.
4. Add rollback plan and cutover checklist.
5. Validate audit + retention behavior after migration.

## Definition of Done
- Transition task exists in backlog with explicit execution order and dependencies.
