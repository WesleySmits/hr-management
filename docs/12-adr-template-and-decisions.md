# 12 — ADR Template + Initial Architecture Decisions

## Purpose
Capture irreversible or high-impact technical decisions in a consistent format before implementation.

## ADR Template

```md
# ADR-XXX: <Decision Title>

## Status
Proposed | Accepted | Superseded

## Date
YYYY-MM-DD

## Context
What problem are we solving? What constraints matter?

## Decision
What was decided?

## Alternatives Considered
- Option A
- Option B
- Option C

## Consequences
### Positive
- 
### Negative
- 
### Risks
- 

## Rollback / Revisit Trigger
When should this decision be revisited?

## Owner

## Related Docs
- 
```

---

## ADR-001: Enforce Strict TypeScript
### Status
Accepted

### Context
Long-term maintainability and safe autonomous coding require strong type guarantees.

### Decision
Use strict TypeScript settings by default (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`) and disallow `any` in domain/application code.

### Alternatives Considered
- Relaxed TypeScript config
- JavaScript with JSDoc typing

### Consequences
- Better reliability and refactor safety
- Slightly higher upfront coding effort

### Revisit Trigger
If strictness causes major delivery slowdown without quality benefits.

---

## ADR-002: Storage Abstraction via Strategy Pattern
### Status
Accepted

### Context
Phase 1 begins with browser-native database, but migration to Postgres is planned.

### Decision
All data operations must go through `StorageStrategy` contracts. Features cannot depend on provider-specific APIs.

### Alternatives Considered
- Direct IndexedDB coupling
- Repository layer tied to one DB

### Consequences
- Easier migration path
- Additional abstraction design effort

### Revisit Trigger
If the abstraction blocks performance-critical operations and cannot be optimized cleanly.

---

## ADR-003: Mobile-First as Primary UX Target
### Status
Accepted

### Context
Primary daily usage is expected on mobile devices.

### Decision
Design and validate all critical workflows on small screens first; desktop is enhancement-only.

### Alternatives Considered
- Desktop-first then responsive retrofit

### Consequences
- Better real-world usability
- Requires strict component/layout discipline

### Revisit Trigger
If user telemetry later shows dominant desktop-only workflows.

---

## ADR-004: Security Boundary at API Layer
### Status
Accepted

### Context
Sensitive HR actions require explicit trust boundaries and auditability.

### Decision
Protected operations must be routed through validated API boundaries with authn/authz and audit events.

### Alternatives Considered
- Client-heavy direct data access patterns

### Consequences
- Better security posture
- More backend/API planning required

### Revisit Trigger
If selected boundary introduces unnecessary complexity for low-risk operations.

---

## ADR-005: PWA Compliance Required for MVP
### Status
Accepted

### Context
App should be installable, resilient, and usable in intermittent connectivity conditions.

### Decision
PWA compliance checklist is part of MVP definition, not post-MVP enhancement.

### Alternatives Considered
- Traditional web app first

### Consequences
- Better mobile UX and retention
- Additional service worker/offline design overhead

### Revisit Trigger
If compliance requirements materially delay core business value without user demand.

---

## Definition of Done
- ADR template frozen.
- Initial ADRs accepted or marked proposed with owners.
- New major decisions must be recorded before implementation begins.


---

## ADR-006: API Contract Style — Route Handlers + Zod
### Status
Accepted

### Context
Need explicit secure boundaries, validation, and implementation flexibility.

### Decision
Use Next.js Route Handlers with Zod runtime schemas for request/response validation.

### Alternatives Considered
- tRPC

### Consequences
- Clear boundary control and explicit schema governance
- Slightly more manual client typing work than end-to-end RPC inference

### Revisit Trigger
If contract maintenance overhead outweighs boundary/security benefits.

---

## ADR-007: MVP Authentication Scope — Credentials Only
### Status
Accepted

### Context
MVP should minimize auth complexity and focus on core HR workflows.

### Decision
Credentials-only authentication for MVP; OAuth is deferred.

### Alternatives Considered
- Add OAuth in MVP

### Consequences
- Faster MVP path and fewer external auth dependencies
- OAuth user convenience deferred

### Revisit Trigger
When external identity federation becomes a business requirement.

---

## ADR-008: PWA Implementation — Custom Workbox from Day One
### Status
Accepted

### Context
Offline behavior and sync conflict handling are core product requirements, not optional add-ons.

### Decision
Implement PWA service worker with custom Workbox setup from the start.

### Alternatives Considered
- `next-pwa` quick start then later migration

### Consequences
- Maximum control over caching/queueing/offline policies
- Higher initial setup complexity

### Revisit Trigger
If custom setup introduces disproportionate maintenance burden without measurable benefit.

---

## ADR-009: Postgres Phase Toolkit — Drizzle ORM
### Status
Accepted

### Context
Need a TS-first SQL toolkit for the future migration from browser storage to Postgres.

### Decision
Adopt Drizzle ORM for Postgres phase.

### Alternatives Considered
- Prisma

### Consequences
- Strong schema clarity and SQL control
- Team must align on Drizzle workflows/conventions

### Revisit Trigger
If migration velocity or maintainability is materially hindered.

---

## ADR-010: Testing Is Mandatory at Unit + Integration + E2E Levels
### Status
Accepted

### Context
Autonomous execution requires strong quality guarantees and regression protection.

### Decision
Every feature must include unit, integration, and E2E tests before considered done (unless explicitly waived in writing).

### Alternatives Considered
- Unit + selective integration only
- E2E-only smoke strategy

### Consequences
- Higher confidence and safer autonomous delivery
- Increased test authoring effort per feature

### Revisit Trigger
If test maintenance costs significantly exceed quality gains and a better policy emerges.
