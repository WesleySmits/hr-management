# 05 — Task Breakdown (Notion-Ready v2)

## Purpose
Execution-grade backlog for autonomous agents. Every task includes scope, dependencies, acceptance criteria, and clear DoD.

## Global Rules
- One task = one meaningful, reviewable story/commit (or tight commit set).
- No task may enter `Ready` without Scope In/Out + Acceptance Criteria.
- No task may enter `Done` without DoD evidence linked.
- Testing policy is mandatory: Unit + Integration + E2E (unless explicitly waived in writing).

---

## HR-001 — Finalize Product Scope and Non-Goals
- **Feature:** Foundation
- **Objective:** Freeze MVP boundaries.
- **Scope In:** In/out list for MVP.
- **Scope Out:** Any implementation details.
- **Dependencies:** None.
- **Deliverables:** `01-product-scope.md` approved section.
- **Definition of Done:** Scope + non-goals signed off.
- **Acceptance Criteria:**
  - [ ] MVP in-scope list explicit
  - [ ] Out-of-scope list explicit
  - [ ] No ambiguous “maybe later” items
- **Risks/Notes:** Prevents scope creep.
- **Execution Order:** 1
- **Estimated Complexity:** S

## HR-002 — Define Domain Vocabulary
- **Feature:** Foundation
- **Objective:** Standardize terminology.
- **Scope In:** Entity/state glossary.
- **Scope Out:** DB schema implementation.
- **Dependencies:** HR-001
- **Deliverables:** Glossary section in domain docs.
- **Definition of Done:** Shared vocabulary approved.
- **Acceptance Criteria:**
  - [ ] Terms for employee/user/tenant clarified
  - [ ] State naming standardized
  - [ ] Referenced by all planning docs
- **Execution Order:** 2
- **Estimated Complexity:** S

## HR-003 — Lock MVP Decisions (Tenant/Roles/Locales/Notifications)
- **Feature:** Foundation
- **Objective:** Remove decision ambiguity before build.
- **Scope In:** Decision lock doc alignment.
- **Scope Out:** Feature implementation.
- **Dependencies:** HR-001, HR-002
- **Deliverables:** `19-mvp-decision-lock.md` approved.
- **Definition of Done:** Decisions reflected in all impacted docs.
- **Acceptance Criteria:**
  - [ ] Single-tenant now / future multi-tenant ready
  - [ ] Roles locked
  - [ ] EN/NL locale policy locked
  - [ ] Notification channels locked
- **Execution Order:** 3
- **Estimated Complexity:** S

## HR-004 — Define Role & Permission Matrix
- **Feature:** Identity & Access
- **Objective:** Action-level authorization matrix.
- **Scope In:** CRUD + approval permissions.
- **Scope Out:** Auth implementation.
- **Dependencies:** HR-003
- **Deliverables:** Permission matrix document/table.
- **Definition of Done:** Role-action matrix approved.
- **Acceptance Criteria:**
  - [ ] Every sensitive action has allowed roles
  - [ ] Self vs manager vs admin scopes clear
  - [ ] API catalog references this matrix
- **Execution Order:** 4
- **Estimated Complexity:** M

## HR-005 — Define Employee Profile Schema
- **Feature:** Employee Directory
- **Objective:** Field model and constraints.
- **Scope In:** Required/optional fields + validation rules.
- **Scope Out:** Storage implementation.
- **Dependencies:** HR-002, HR-004
- **Deliverables:** Schema spec in domain model docs.
- **Definition of Done:** Field-level schema finalized.
- **Acceptance Criteria:**
  - [ ] Unique fields identified
  - [ ] Lifecycle states defined
  - [ ] PII classification attached
- **Execution Order:** 5
- **Estimated Complexity:** M

## HR-006 — Define NL Time-Off Policy Baseline (Accrual/Carry-over/Expiry)
- **Feature:** Time-Off
- **Objective:** Product-default rules aligned to NL baseline.
- **Scope In:** Statutory/extra-statutory rules, part-time, sickness.
- **Scope Out:** Legal advice/counsel signoff.
- **Dependencies:** HR-003
- **Deliverables:** `22-nl-timeoff-policy-rules.md` approved.
- **Definition of Done:** Rule set + test matrix approved.
- **Acceptance Criteria:**
  - [ ] 4x weekly-hours rule captured
  - [ ] expiry/carry-over rules captured
  - [ ] part-time + sick scenarios defined
- **Execution Order:** 6
- **Estimated Complexity:** M

## HR-007 — Define Time-Off State Machine
- **Feature:** Time-Off
- **Objective:** Request lifecycle and transitions.
- **Scope In:** Draft/submitted/approved/rejected/cancelled transitions.
- **Scope Out:** UI implementation.
- **Dependencies:** HR-004, HR-006
- **Deliverables:** State diagram + transition rules.
- **Definition of Done:** State machine approved.
- **Acceptance Criteria:**
  - [ ] Terminal/non-terminal states clear
  - [ ] Role-based transition permissions mapped
  - [ ] Edge cases listed
- **Execution Order:** 7
- **Estimated Complexity:** M

## HR-008 — Define Document Metadata Model + Local Storage Constraints
- **Feature:** Documents
- **Objective:** Metadata model for MVP with IndexedDB constraints.
- **Scope In:** Metadata schema + local storage limits/risks.
- **Scope Out:** Cloud storage implementation.
- **Dependencies:** HR-003, HR-005
- **Deliverables:** Updated domain + storage strategy docs.
- **Definition of Done:** Metadata + local constraints approved.
- **Acceptance Criteria:**
  - [ ] Required metadata fields defined
  - [ ] Retention/status fields defined
  - [ ] IndexedDB risk notes included
- **Execution Order:** 8
- **Estimated Complexity:** M

## HR-009 — Define Reminder Rules Engine Spec
- **Feature:** Notifications
- **Objective:** Trigger/cadence/suppression/escalation rules.
- **Scope In:** In-app + email policy alignment.
- **Scope Out:** Implementation.
- **Dependencies:** HR-006, HR-007, HR-018
- **Deliverables:** Reminder rules table and examples.
- **Definition of Done:** Rules approved and auditable.
- **Acceptance Criteria:**
  - [ ] Quiet hours defined
  - [ ] Retry/escalation defined
  - [ ] Deduplication/suppression defined
- **Execution Order:** 9
- **Estimated Complexity:** M

## HR-010 — Define Resend Email Notification Standards
- **Feature:** Notifications
- **Objective:** Email template/delivery/error standards.
- **Scope In:** Sender identity, retry policy, template requirements.
- **Scope Out:** Template coding.
- **Dependencies:** HR-003
- **Deliverables:** Notification standards doc section.
- **Definition of Done:** Resend standards approved.
- **Acceptance Criteria:**
  - [ ] Delivery retry policy documented
  - [ ] Failure handling documented
  - [ ] Localization requirement included
- **Execution Order:** 10
- **Estimated Complexity:** S

## HR-011 — Define Localization Policy (EN/NL + Overrides)
- **Feature:** Internationalization
- **Objective:** Translation-key-based localization policy.
- **Scope In:** Locale resolution and fallback model.
- **Scope Out:** Translation file implementation.
- **Dependencies:** HR-003
- **Deliverables:** Localization policy doc.
- **Definition of Done:** Locale policy approved.
- **Acceptance Criteria:**
  - [ ] Translation keys as source of truth
  - [ ] Tenant default + user override rules documented
  - [ ] Fallback chain documented
- **Execution Order:** 11
- **Estimated Complexity:** S

## HR-012 — Define API Boundary + Security Standards
- **Feature:** Security/API
- **Objective:** Secure API contract rules.
- **Scope In:** Authn/authz/validation/audit/rate-limit requirements.
- **Scope Out:** Endpoint implementation.
- **Dependencies:** HR-004, HR-010
- **Deliverables:** `13-api-catalog-planning.md`, `06-security-api-standards.md` updates.
- **Definition of Done:** API security standards approved.
- **Acceptance Criteria:**
  - [ ] Endpoint template complete
  - [ ] Sensitive endpoints require audit + rate limit
  - [ ] Permission mapping linked
- **Execution Order:** 12
- **Estimated Complexity:** M

## HR-013 — Define Storage Strategy Contracts
- **Feature:** Architecture
- **Objective:** Interface-first storage abstraction.
- **Scope In:** Contracts for IndexedDB now and Postgres/R2 later.
- **Scope Out:** Concrete adapter code.
- **Dependencies:** HR-008, HR-012
- **Deliverables:** Contract spec + migration constraints.
- **Definition of Done:** Strategy interfaces approved.
- **Acceptance Criteria:**
  - [ ] No provider-specific leakage in feature layer
  - [ ] Migration compatibility constraints listed
  - [ ] Conformance test approach documented
- **Execution Order:** 13
- **Estimated Complexity:** M

## HR-014 — Define PWA Compliance Requirements
- **Feature:** PWA
- **Objective:** Lock installability/offline/sync requirements.
- **Scope In:** Manifest/service worker/offline UX criteria.
- **Scope Out:** Service worker implementation.
- **Dependencies:** HR-009, HR-013
- **Deliverables:** `07-pwa-compliance-checklist.md` finalized.
- **Definition of Done:** PWA checklist approved.
- **Acceptance Criteria:**
  - [ ] Installability criteria complete
  - [ ] Offline queue behavior defined
  - [ ] Sync conflict policy documented
- **Execution Order:** 14
- **Estimated Complexity:** M

## HR-015 — Define Mobile-First Performance Budgets
- **Feature:** Performance
- **Objective:** Enforce measurable performance ceilings.
- **Scope In:** LCP/INP/CLS/JS budgets + release gates.
- **Scope Out:** Performance optimization implementation.
- **Dependencies:** HR-014
- **Deliverables:** `08-performance-mobile-first.md` finalized.
- **Definition of Done:** Budgets + enforcement approach approved.
- **Acceptance Criteria:**
  - [ ] Numeric budgets set
  - [ ] Gate ownership defined
  - [ ] Measurement method defined
- **Execution Order:** 15
- **Estimated Complexity:** S

## HR-016 — Define Design Token Dictionary v1
- **Feature:** Design System
- **Objective:** Finalize semantic token taxonomy.
- **Scope In:** Color/font token namespaces and naming.
- **Scope Out:** Component implementation.
- **Dependencies:** HR-011
- **Deliverables:** DS token dictionary.
- **Definition of Done:** Token schema approved.
- **Acceptance Criteria:**
  - [ ] Semantic naming only
  - [ ] No raw values in component guidance
  - [ ] Theme compatibility verified
- **Execution Order:** 16
- **Estimated Complexity:** S

## HR-017 — Define Theme Contract + 5 Example Themes
- **Feature:** Design System
- **Objective:** Lock runtime-switchable color/font themes.
- **Scope In:** 5 themes + Linear style baseline + light mode.
- **Scope Out:** Theme switch implementation.
- **Dependencies:** HR-016
- **Deliverables:** `17-theme-system-and-examples.md` + master DS spec alignment.
- **Definition of Done:** Contract + 5 themes approved.
- **Acceptance Criteria:**
  - [ ] 5 themes complete
  - [ ] linear-dark + linear-light included
  - [ ] runtime switch rules documented
- **Execution Order:** 17
- **Estimated Complexity:** M

## HR-018 — Define Component Catalog v1 + Interaction Rules
- **Feature:** Design System
- **Objective:** Freeze component set and UX behavior standards.
- **Scope In:** Primitive/composed components, states, a11y rules.
- **Scope Out:** UI coding.
- **Dependencies:** HR-016, HR-017
- **Deliverables:** `18-design-system-v1-master-spec.md` updates.
- **Definition of Done:** Catalog and interaction rules approved.
- **Acceptance Criteria:**
  - [ ] Required components listed
  - [ ] loading/empty/error states defined
  - [ ] WCAG 2.2 AA mappings included
- **Execution Order:** 18
- **Estimated Complexity:** M

## HR-019 — Define Responsive Pattern Library
- **Feature:** Design System / UX
- **Objective:** Mobile/tablet/desktop behavior patterns.
- **Scope In:** Form/list/table/nav responsive patterns.
- **Scope Out:** CSS implementation.
- **Dependencies:** HR-018
- **Deliverables:** Responsive pattern matrix.
- **Definition of Done:** Pattern library approved.
- **Acceptance Criteria:**
  - [ ] Mobile-first paths fully executable
  - [ ] Desktop is enhancement-only
  - [ ] Table-to-list transformation rules clear
- **Execution Order:** 19
- **Estimated Complexity:** S

## HR-020 — Define Design System Testing Matrix
- **Feature:** Design System / QA
- **Objective:** Map unit/integration/E2E obligations per component class.
- **Scope In:** Test matrix and ownership.
- **Scope Out:** Actual tests.
- **Dependencies:** HR-018, HR-019
- **Deliverables:** DS testing matrix doc.
- **Definition of Done:** Test obligations approved.
- **Acceptance Criteria:**
  - [ ] Unit expectations per component type
  - [ ] Integration expectations per interaction type
  - [ ] E2E coverage for critical journeys
- **Execution Order:** 20
- **Estimated Complexity:** S

## HR-021 — Define Data Lifecycle + Retention Policy
- **Feature:** Compliance / Security
- **Objective:** Retention, soft-delete, legal hold, hard-delete governance.
- **Scope In:** Policy and audit requirements.
- **Scope Out:** Deletion workflow coding.
- **Dependencies:** HR-003, HR-012
- **Deliverables:** Policy document section (`23-policy-decisions-v1.md` alignment).
- **Definition of Done:** Lifecycle policy approved.
- **Acceptance Criteria:**
  - [ ] Data category retention windows defined
  - [ ] Legal hold behavior defined
  - [ ] Delete/export governance defined
- **Execution Order:** 21
- **Estimated Complexity:** M

## HR-022 — Plan Cloudflare R2 Migration (End-of-MVP Mandatory)
- **Feature:** Architecture / Documents
- **Objective:** Prepare guaranteed transition from local storage to R2.
- **Scope In:** Adapter plan, key schema, cutover, rollback, verification.
- **Scope Out:** Build migration code.
- **Dependencies:** HR-013, HR-021
- **Deliverables:** `20-document-storage-strategy.md` + migration acceptance checklist.
- **Definition of Done:** R2 migration task is Ready before MVP sign-off.
- **Acceptance Criteria:**
  - [ ] Object key standard documented
  - [ ] Migration verification criteria documented
  - [ ] Rollback plan documented
- **Execution Order:** 22
- **Estimated Complexity:** M

## HR-023 — Prepare Notion Import Structure
- **Feature:** Operations
- **Objective:** Ensure backlog is operationally executable in Notion.
- **Scope In:** Property schema, views, workflow rules.
- **Scope Out:** Running implementation tasks.
- **Dependencies:** HR-001..HR-022
- **Deliverables:** `10-notion-schema.md` finalized + import-ready task rows.
- **Definition of Done:** All tasks importable and dependency-safe.
- **Acceptance Criteria:**
  - [ ] Required properties present
  - [ ] Views configured for Ready/Blocked/Review
  - [ ] Dependencies represented and validated
- **Execution Order:** 23
- **Estimated Complexity:** M

## HR-024 — Define Strict MVP Completion Gates
- **Feature:** QA / Release
- **Objective:** Hard pass/fail release criteria.
- **Scope In:** Functional, quality, security, performance, compliance gates.
- **Scope Out:** Release execution.
- **Dependencies:** HR-014, HR-015, HR-020, HR-021, HR-022
- **Deliverables:** Completion gate document (`23-policy-decisions-v1.md` + checklist alignment).
- **Definition of Done:** Written go/no-go gates approved.
- **Acceptance Criteria:**
  - [ ] All gate categories defined
  - [ ] Evidence required per gate defined
  - [ ] Failure handling path defined
- **Execution Order:** 24
- **Estimated Complexity:** S

## HR-025 — Build Authorization Package
- **Feature:** Operations / Governance
- **Objective:** Final pre-build approval package.
- **Scope In:** Checklist status + unresolved risks + explicit approval template.
- **Scope Out:** Any coding.
- **Dependencies:** HR-023, HR-024
- **Deliverables:** Build-authorization note/doc with owner signoff.
- **Definition of Done:** Explicit implementation permission captured.
- **Acceptance Criteria:**
  - [ ] Pre-build checklist resolved
  - [ ] Open risks acknowledged
  - [ ] Written “start build” authorization recorded
- **Execution Order:** 25
- **Estimated Complexity:** S

---

## Conversion Note
This v2 backlog should be used as the source for Notion import instead of v1.
