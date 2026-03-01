# 14 — Risk Register (Planning)

## Purpose
Track delivery, product, security, and operational risks with ownership and mitigation.

## Severity Scale
- **Impact:** Low / Medium / High
- **Likelihood:** Low / Medium / High

## Risk Register

## R-001 — Scope Creep During Planning
- **Category:** Delivery
- **Impact:** High
- **Likelihood:** High
- **Description:** Features/tasks expand without clear boundaries, reducing execution quality.
- **Mitigation:** Enforce Scope In/Out on every task; reject tasks without DoD.
- **Owner:** Product
- **Trigger:** New requirements added without reprioritization.

## R-002 — Weak Task Definitions for Autonomous Agents
- **Category:** Delivery
- **Impact:** High
- **Likelihood:** Medium
- **Description:** AI agents execute inconsistently when tasks are underspecified.
- **Mitigation:** Use strict Notion template with acceptance criteria and dependencies.
- **Owner:** Operations
- **Trigger:** Frequent clarification loops during execution.

## R-003 — Security Gaps in API Design
- **Category:** Security
- **Impact:** High
- **Likelihood:** Medium
- **Description:** Missing authz or validation requirements cause data exposure risk.
- **Mitigation:** API spec checklist mandatory before implementation.
- **Owner:** Engineering/Security
- **Trigger:** Endpoints proposed without role checks or audit requirements.

## R-004 — Storage Migration Friction (Browser DB -> Postgres)
- **Category:** Architecture
- **Impact:** High
- **Likelihood:** Medium
- **Description:** Tight coupling to browser DB breaks migration path.
- **Mitigation:** Enforce StorageStrategy contracts and migration acceptance tests.
- **Owner:** Engineering
- **Trigger:** Provider-specific logic in domain services.

## R-005 — PWA Compliance Deferred Too Late
- **Category:** Product/Tech
- **Impact:** Medium
- **Likelihood:** Medium
- **Description:** Installability/offline concerns postponed and become expensive.
- **Mitigation:** Keep PWA criteria in MVP definition and planning tasks.
- **Owner:** Product + Engineering
- **Trigger:** PWA tasks moved after core release without approval.

## R-006 — Performance Regressions on Mobile
- **Category:** Performance
- **Impact:** High
- **Likelihood:** Medium
- **Description:** Slow interactions reduce adoption and trust.
- **Mitigation:** Define performance budgets early and require release gates.
- **Owner:** Engineering
- **Trigger:** Budget exceedance in pre-release checks.

## R-007 — Unclear Data Retention/PII Rules
- **Category:** Compliance/Security
- **Impact:** High
- **Likelihood:** Medium
- **Description:** HR-sensitive data lacks retention/deletion clarity.
- **Mitigation:** Classify fields and map retention per entity during planning.
- **Owner:** Product + Security
- **Trigger:** Disagreement on what data can be stored/logged.

## R-008 — Approval Bottlenecks Block Execution
- **Category:** Operations
- **Impact:** Medium
- **Likelihood:** High
- **Description:** Too many tasks wait on undefined approvers.
- **Mitigation:** Assign explicit owner and reviewer per phase.
- **Owner:** Operations
- **Trigger:** Growing queue in Review/Blocked without SLA.

## R-009 — Over-Engineering MVP
- **Category:** Product
- **Impact:** Medium
- **Likelihood:** Medium
- **Description:** Building enterprise-grade breadth before validating core value.
- **Mitigation:** Enforce out-of-scope list and phased roadmap.
- **Owner:** Product
- **Trigger:** New integrations/features added before MVP criteria met.

## R-010 — Incomplete Audit Coverage
- **Category:** Security/Compliance
- **Impact:** High
- **Likelihood:** Medium
- **Description:** Sensitive actions occur without immutable traceability.
- **Mitigation:** Audit event requirements attached to endpoint specs.
- **Owner:** Engineering/Security
- **Trigger:** Mutation endpoints lacking audit event definition.

## Review Cadence
- Weekly risk review during planning.
- Re-score likelihood/impact on major scope changes.

## Definition of Done
- Risks accepted with owners.
- Top 5 risks linked to concrete mitigation tasks in Notion.
- Register reviewed at each phase gate.
