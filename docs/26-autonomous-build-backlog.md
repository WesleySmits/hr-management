# 26 — Autonomous Build Backlog (Coding Agent Execution)

## Purpose
Implementation-ready backlog for coding agents to build the app step-by-step autonomously.

## Execution Rules
- Each task must be shippable in one PR.
- Each task must include Unit + Integration + E2E tests.
- No task marked Done without evidence links (tests, screenshots, logs).
- Follow locked decisions (Next.js 16.x, TS latest strict, Route Handlers + Zod, credentials auth, Drizzle for Postgres phase, IndexedDB first, PWA + Workbox, EN/NL, Linear-style theming).

---

## Phase A — Bootstrap & Guardrails

### BLD-001 Initialize project skeleton
- **Goal:** Create Next.js 16.x strict TS app structure.
- **Depends on:** none
- **Deliverables:** app skeleton, strict tsconfig, lint/format config.
- **DoD:** CI runs typecheck + lint + tests (placeholder).

### BLD-002 Quality gates and test harness
- **Goal:** Wire Vitest, Testing Library, Playwright, coverage thresholds.
- **Depends on:** BLD-001
- **Deliverables:** test scripts, CI workflow, baseline sample tests.
- **DoD:** All three test layers execute in CI.

### BLD-003 Architecture boundaries
- **Goal:** Implement folder/module boundaries (domain/app/infra/ui/api).
- **Depends on:** BLD-001
- **Deliverables:** boundary docs + enforced import rules.
- **DoD:** Invalid cross-layer import test fails as expected.

---

## Phase B — Design System Foundation

### BLD-004 Token system + 5 themes
- **Goal:** Implement color/font token contract and 5 runtime themes.
- **Depends on:** BLD-001
- **Deliverables:** token map, theme provider, persistence.
- **DoD:** Theme switches instantly; persists user preference.

### BLD-005 Core primitives
- **Goal:** Build Button/Input/Select/Checkbox/Switch/Badge wrappers.
- **Depends on:** BLD-004
- **Deliverables:** typed variants (CVA), accessibility-compliant primitives.
- **DoD:** unit+integration tests for all states/variants.

### BLD-006 Core layout/feedback components
- **Goal:** Build Card/Container/Stack/Grid + Toast/Banner/Skeleton/Dialog.
- **Depends on:** BLD-005
- **Deliverables:** mobile-first layout kit and feedback components.
- **DoD:** E2E covers loading/empty/error views.

---

## Phase C — Security + Auth + i18n

### BLD-007 Credentials auth foundation
- **Goal:** Implement credentials login/logout/session management.
- **Depends on:** BLD-001, BLD-002
- **Deliverables:** auth routes, session middleware, lockout throttling.
- **DoD:** auth flow tested; brute-force protections validated.

### BLD-008 RBAC policy engine
- **Goal:** Implement role/resource/action checks.
- **Depends on:** BLD-007
- **Deliverables:** policy module + route guards.
- **DoD:** forbidden access returns correct codes and audit entries.

### BLD-009 Localization framework EN/NL
- **Goal:** Translation-key system with tenant default + user override.
- **Depends on:** BLD-001
- **Deliverables:** i18n loader, locale resolution chain.
- **DoD:** E2E verifies language switching and fallback chain.

---

## Phase D — Storage & Domain Core

### BLD-010 StorageStrategy interfaces
- **Goal:** Implement strategy contracts (query, write, transaction abstraction).
- **Depends on:** BLD-003
- **Deliverables:** provider-agnostic interfaces + conformance test suite.
- **DoD:** adapter test harness reusable across providers.

### BLD-011 IndexedDB adapter (Dexie)
- **Goal:** Build BrowserStorageStrategy for MVP.
- **Depends on:** BLD-010
- **Deliverables:** Dexie-backed adapter for domain entities.
- **DoD:** conformance suite passes for IndexedDB strategy.

### BLD-012 Domain models + validation
- **Goal:** Implement domain schemas (employee, time-off, document, reminder, audit).
- **Depends on:** BLD-010
- **Deliverables:** zod domain models + mappers.
- **DoD:** schema tests + invalid payload rejection tests.

---

## Phase E — Feature Implementation (MVP)

### BLD-013 Employee directory feature
- **Goal:** CRUD + search/filter + lifecycle states.
- **Depends on:** BLD-008, BLD-011, BLD-012, BLD-005
- **Deliverables:** UI + API + service layer + audit hooks.
- **DoD:** full test pyramid passes on employee flows.

### BLD-014 Time-off policy engine (NL baseline)
- **Goal:** Accrual/carry-over/expiry and part-time support.
- **Depends on:** BLD-012
- **Deliverables:** policy calculators + edge-case handling.
- **DoD:** test matrix from NL rules fully green.

### BLD-015 Time-off request lifecycle
- **Goal:** Draft/submitted/approve/reject/cancel flows.
- **Depends on:** BLD-014, BLD-008, BLD-013
- **Deliverables:** state machine service + UI flows + APIs.
- **DoD:** E2E for employee and manager scenarios.

### BLD-016 Document management (metadata + local file references)
- **Goal:** Metadata-first docs with local storage references.
- **Depends on:** BLD-011, BLD-012, BLD-013
- **Deliverables:** doc type rules, status lifecycle, expiry metadata.
- **DoD:** full CRUD/status tests + audit coverage.

### BLD-017 Reminder engine + autonomous sends
- **Goal:** trigger/cadence/suppression/escalation rules.
- **Depends on:** BLD-015, BLD-016
- **Deliverables:** scheduler service + reminder evaluation + event logs.
- **DoD:** deterministic integration tests for reminder timing and dedupe.

### BLD-018 Notifications: in-app + Resend email
- **Goal:** Notification delivery channels with retries.
- **Depends on:** BLD-017, BLD-009
- **Deliverables:** in-app notification center + Resend adapter + templates EN/NL.
- **DoD:** retry/failure/escalation tests pass.

### BLD-019 Audit trail implementation
- **Goal:** immutable audit events for sensitive actions.
- **Depends on:** BLD-008, BLD-012
- **Deliverables:** audit writer, redaction, query endpoints.
- **DoD:** sensitive mutation coverage = 100% mapped actions.

---

## Phase F — PWA + Performance + Hardening

### BLD-020 Workbox PWA implementation
- **Goal:** installable app + offline strategy + sync queue.
- **Depends on:** BLD-011, BLD-017
- **Deliverables:** manifest, SW, offline UI states, sync conflict handling.
- **DoD:** PWA checklist fully green.

### BLD-021 Performance budgets enforcement
- **Goal:** enforce LCP/INP/CLS/JS budgets in CI and QA.
- **Depends on:** BLD-020
- **Deliverables:** budget checks + report artifacts.
- **DoD:** performance gates block regressions.

### BLD-022 Security hardening pass
- **Goal:** headers, rate limits, secret policy, abuse controls.
- **Depends on:** BLD-007, BLD-008, BLD-012
- **Deliverables:** middleware hardening + security tests.
- **DoD:** security checklist complete and evidenced.

---

## Phase G — Release Readiness

### BLD-023 End-to-end regression suite
- **Goal:** full happy path + critical edge cases on mobile-first flows.
- **Depends on:** BLD-013..BLD-022
- **Deliverables:** stable E2E suite + flake policy.
- **DoD:** required journeys green on CI.

### BLD-024 Release checklist + go/no-go report
- **Goal:** enforce strict MVP completion gates.
- **Depends on:** BLD-023
- **Deliverables:** gate report with evidence links.
- **DoD:** explicit owner signoff recorded.

---

## Phase H — Mandatory Next Task (post-MVP readiness)

### BLD-025 Cloudflare R2 migration implementation plan (Ready state)
- **Goal:** prepare final migration from local storage to S3-compatible Cloudflare R2.
- **Depends on:** BLD-010, BLD-016, BLD-024
- **Deliverables:** adapter spec, object key standard, cutover/rollback plan, verification checklist.
- **DoD:** task marked Ready with approved acceptance criteria before MVP closure.

---

## Suggested Agent Assignment
- **Forge:** implementation-heavy tasks (BLD-001..025)
- **Quill:** docs/update/changelog for each task
- **Scout:** legal/regulatory checks, source traceability for NL policy updates
- **Hanno:** orchestration, quality gate enforcement, go/no-go summaries

