# 11 — Release Roadmap (Planning-Only)

## Constraint
No code execution/implementation starts without explicit authorization.

## Phase 0 — Planning Foundation (Current)
### Outcome
Complete high-quality planning artifacts that are directly executable by autonomous agents later.

### Includes
- Product scope and non-goals
- Domain model
- Feature decomposition
- Task backlog with order and DoD
- Security/API standards
- PWA + performance standards
- Notion task schema

### Exit Criteria
- All markdown docs reviewed and approved.
- Task backlog marked ready for Notion import.

---

## Phase 1 — Architecture Decision Freeze (Still No Code)
### Outcome
Finalize all irreversible technical decisions before any build work.

### Includes
- Strict TypeScript policy final sign-off
- Storage strategy contracts sign-off
- Security baseline sign-off
- API boundary sign-off
- Design system v1 sign-off

### Exit Criteria
- ADR-style markdown decisions approved.
- No unresolved architectural blockers.

---

## Phase 2 — Build Authorization Gate
### Outcome
Explicit go/no-go checkpoint from you.

### Includes
- Confirm implementation permission in writing
- Confirm first sprint scope
- Confirm owner agent assignments

### Exit Criteria
- Written authorization exists.
- Build tasks moved to `Ready` in Notion.

---

## Phase 3 — Implementation Wave A (MVP Core)
### Proposed Scope
- Identity & access baseline
- Employee directory
- Time-off request lifecycle
- Reminder engine minimal viable paths
- Audit event baseline

### Release Objective
Internal alpha usable on mobile and desktop.

---

## Phase 4 — Implementation Wave B (Compliance + UX Hardening)
### Proposed Scope
- PWA installability + offline support
- Document metadata workflows
- Performance budget enforcement
- Security hardening and QA pass

### Release Objective
Production-ready beta.

---

## Phase 5 — Storage Migration Track (Future)
### Proposed Scope
- Introduce Postgres strategy implementation
- Data migration tooling/process
- Validation and rollback plan

### Release Objective
Seamless transition from browser-native storage to Postgres with no feature contract breaks.

---

## Milestone Checklist
- [ ] M0: Planning docs approved
- [ ] M1: Architecture decisions frozen
- [ ] M2: Build authorized
- [ ] M3: MVP alpha complete
- [ ] M4: Beta hardening complete
- [ ] M5: Storage migration complete

## Definition of Done
Roadmap accepted as sequencing reference and mapped to Notion phases/sprints.
