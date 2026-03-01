# 02 — Tech Stack & Architecture (Planning)

## Guiding Constraints
- Implementation language: **strict TypeScript**.
- App architecture must support future DB migration.
- Security and performance are first-class design concerns.

## Proposed Stack (When Build Starts)
- Frontend/App shell: Next.js 16.x (App Router)
- Language: TypeScript latest stable (`strict: true`)
- Styling system: tokenized design system + utility-first approach
- Local-first data (phase 1): IndexedDB wrapper
- Future data backend (phase 2+): Postgres

## Storage Strategy Pattern

### Objective
Allow swapping storage providers without changing feature/business logic.

### Planned Contracts
- `StorageStrategy` (interface)
- `BrowserStorageStrategy` (IndexedDB-backed)
- `PostgresStorageStrategy` (future)
- `StorageStrategyFactory` (selection by runtime config)

### Architectural Rule
Feature services can only depend on `StorageStrategy` contracts, never concrete providers.

## API Architecture (Relevant Areas)
- API endpoints exposed only for operations requiring server trust boundaries.
- AuthZ checks per endpoint.
- Input validation at boundary.
- Rate limit and audit logging where sensitive.

## TypeScript Strictness Baseline
- `strict: true`
- `noUncheckedIndexedAccess: true`
- `exactOptionalPropertyTypes: true`
- Ban `any` in app code (except explicit external boundary adapters).


## Mandatory Testing Policy
- Every feature requires Unit + Integration + E2E tests.
- No task is Done without all three test layers (unless explicitly waived in writing).
