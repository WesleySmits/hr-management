# 21 — Pre-Build Readiness Checklist (Strict Gate)

## Status
Proposed by Hanno. Requires explicit approval to begin implementation.

## Gate A — Scope and Product
- [x] MVP scope lock exists (`19-mvp-decision-lock.md`)
- [x] Single-tenant now, future multi-tenant architecture direction
- [x] Roles locked: admin/manager/employee
- [ ] Final MVP feature list signed off with explicit out-of-scope list

## Gate B — Legal/Compliance (Netherlands)
- [x] Region target: Netherlands
- [ ] Privacy policy + processor/subprocessor list drafted
- [ ] Data retention schedule approved by data category
- [ ] Data subject request process defined (access/export/delete/correct)
- [ ] Breach response playbook defined (roles + SLA)

## Gate C — Time-Off Policy Rules (NL)
- [x] Accrual + carry-over included in MVP
- [x] Baseline legal references documented (`22-nl-timeoff-policy-rules.md`)
- [ ] Employer override model (CAO/contract rules) approved
- [ ] Test cases approved for part-time, sickness, and expiry edge cases

## Gate D — Platform & Architecture
- [x] Next.js 16.x + latest TS strict mode
- [x] Route Handlers + Zod
- [x] Credentials-only auth for MVP
- [x] Drizzle for Postgres phase
- [x] IndexedDB first, R2 migration task mandatory

## Gate E — Notifications
- [x] In-app + Resend email channel decision
- [ ] Reminder policy approved (quiet hours/cadence/retry/escalation)
- [ ] Email template standard approved (legal footer, tenant identity)

## Gate F — Security Baseline
- [ ] Password/session/lockout policy approved
- [ ] Audit event minimum set approved
- [ ] Rate limiting policy approved
- [ ] Secrets handling policy approved

## Gate G — Localization
- [x] EN default + NL full translation
- [x] Tenant default locale + user override
- [ ] i18n source-of-truth policy approved (translation keys preferred)

## Gate H — Quality Gates
- [x] Unit + Integration + E2E mandatory
- [ ] MVP completion criteria approved (`25-mvp-completion-gates.md`)

## Build Authorization Condition
Implementation can start only when:
1. All unchecked gates are resolved, and
2. Explicit written permission is provided by project owner.
