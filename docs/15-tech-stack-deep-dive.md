# 15 — Tech Stack Deep Dive (Planning)

## Objective
Lock a practical, secure, high-performance stack that supports:
- strict TypeScript
- mobile-first PWA
- browser-native DB first
- smooth migration to Postgres later
- autonomous AI task execution later

---

## 1) Core Platform Choices

## Runtime + Framework
- **Node.js:** 22 LTS
- **Framework:** Next.js **16.x** (App Router)
- **Language:** TypeScript **latest stable** (strict)

### Why
- Single project for UI + API routes + background handlers.
- Mature ecosystem for PWA and deployment.
- Good fit for typed domain boundaries.

---

## 2) Frontend/UI Stack

## Styling
- **Tailwind CSS** + design tokens (CSS variables)
- `class-variance-authority` for typed variant components

## Components
- **Radix UI primitives** (a11y baseline)
- Project-owned design system wrappers (Button, Input, Card, etc.)

## Forms
- `react-hook-form` + `zod`

## Why
- Fast mobile UI iteration.
- Typed forms and predictable validation.
- Accessibility baseline out of the box.

---

## 3) Validation, Types, and API Contracts

## Runtime Validation
- **Zod** as shared contract layer for API + domain input validation.

## API Typing
- Option A (recommended): Next route handlers + Zod schemas + typed client wrapper.
- Option B: tRPC (strong typing, but tighter coupling).

### Decision (recommended for MVP)
Use **Option A** for clearer API boundary control/security hardening and easier future integration flexibility.

---

## 4) Storage Layer (Strategy Pattern)

## Data Access Rule
Feature services depend only on abstract contracts.

## Planned Interfaces
- `StorageStrategy`
- `TransactionStrategy` (optional in phase 1, required before Postgres migration)
- `QuerySpec<T>` for typed filtering/sorting/pagination behavior

## Provider Implementations
### Phase 1
- **IndexedDB** via `Dexie` (recommended wrapper)

### Phase 2
- **Postgres** via server-side adapter (likely `Drizzle` + `postgres`)

## Why Dexie first
- Great IndexedDB ergonomics.
- Strong TS support.
- Easy to model offline-first workflows.

---

## 5) Server/Data Layer (Future-ready)

## ORM/SQL Toolkit (Postgres phase)
- **Drizzle ORM** (recommended)

### Why Drizzle
- TS-first, schema clarity, SQL-like control.
- Leaner mental model than heavy ORMs.
- Good migration workflow.

---

## 6) Authentication and Authorization

## Authentication
- **Auth.js (NextAuth successor)** with secure session strategy.

## Authorization
- App-level RBAC policy engine (role + action + resource scope).
- Policy checks at API boundary and sensitive service methods.

## Security Additions
- `@upstash/ratelimit` or equivalent rate limiting for sensitive endpoints.
- CSRF protections where applicable.
- Security headers (CSP, X-Frame-Options, etc.) via middleware.

---

## 7) PWA Stack

## Required Libraries/Approach
- **Custom service worker with Workbox from day one** (selected) for maximum offline/sync control and long-term flexibility.

## Caching Strategy (initial)
- App shell: cache-first
- API GET data: stale-while-revalidate
- Mutations: queue + retry strategy (domain-specific)

## Offline UX
- Explicit offline banners
- Pending action queue visibility
- Conflict resolution policy UI (when sync ambiguity occurs)

---

## 8) State Management

## Server/Data State
- `@tanstack/react-query`

## Local UI State
- React state/context only (add Zustand only if complexity justifies)

## Why
- Prevent premature state over-engineering.
- Great control for stale/revalidate/invalidate patterns.

---

## 9) Logging, Monitoring, Observability

## App Logging
- `pino` (structured logs)

## Error Monitoring
- Sentry (or equivalent)

## Audit Logging
- Dedicated audit event writer in service layer.

## Performance Monitoring
- Web Vitals collection (LCP/INP/CLS)
- Route-level timing logs for slow API calls

---

## 10) Testing Strategy Stack

## Unit + Integration
- `vitest`
- `@testing-library/react`

## E2E
- `playwright`

## Contract Tests
- API schema tests against zod contracts
- Storage strategy conformance tests (same test suite for IndexedDB and Postgres adapters)

---

## 11) Tooling & Quality Gates

## Lint/Format
- ESLint + Prettier

## TS Quality
- `tsc --noEmit` in CI

## Commit Quality
- Conventional commits (optional but recommended)
- Pre-commit hooks with lint + type checks (`husky` + `lint-staged`)

## CI (future build phase)
- Type check
- Lint
- Unit/integration tests
- E2E smoke
- Performance budget check

---

## 12) Security Baseline Packages (Planning)

- `zod` input validation
- `helmet`-style headers policy (or Next middleware equivalent)
- Rate limiting middleware
- Dependabot/Renovate for security updates
- Secret management via environment vault/provider

---

## 13) Recommended MVP Stack Decision (Locked)

- Next.js 16.x (App Router)
- TypeScript latest stable + strict mode
- Tailwind + Radix + CVA
- Zod + React Hook Form
- TanStack Query
- Dexie (IndexedDB strategy)
- Auth.js + RBAC policy checks
- Pino + Sentry
- Vitest + Testing Library + Playwright
- PWA via custom Workbox service worker

---

## 14) Decisions Confirmed
1. **API style:** Route Handlers + Zod.
2. **Auth scope (MVP):** Credentials-only.
3. **PWA approach:** Custom Workbox from day one.
4. **Postgres phase toolkit:** Drizzle.

## 15) Mandatory Testing Policy (Release Gate)
Every feature must include:
- **Unit tests** (domain logic, utilities, pure functions)
- **Integration tests** (API handlers, storage strategy behavior, permission checks)
- **E2E tests** (critical user journeys on mobile-first flows)

No task can be marked Done unless all three test levels are present or explicitly waived by written approval.

## Definition of Done
- Decisions above marked locked.
- Stack locked in ADR format.
- Notion tasks generated for each stack area.
- Testing policy included in quality gates and task templates.
