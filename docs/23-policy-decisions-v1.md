# 23 — Policy Decisions v1 (Chosen by Hanno, strict defaults)

## 1) Reminder Policy (Autonomous AI)
- Quiet hours: **20:00–08:00 tenant local time** (no non-critical sends)
- Send windows: weekdays 09:00–17:00 default
- Cadence:
  - First reminder at trigger time
  - Retry after 24h if unresolved
  - Final reminder after 72h
- Escalation:
  - After final reminder unresolved -> manager notification
- Suppression:
  - No duplicate reminder for same target within 24h
- Audit:
  - Every autonomous reminder send logged (rule, target, recipient, timestamp)

## 2) Localization Policy
- Source of truth: **translation keys** (preferred by owner)
- Locales: `en`, `nl`
- Tenant default locale applies to new users
- User profile can override locale
- Fallback chain: user locale -> tenant locale -> `en`
- No hard-coded user-facing strings in features

## 3) Security Baseline
- Password min 12 chars, block common breached passwords
- Session max age: 12h idle, 7d absolute
- Login protection: progressive throttling + temporary lockout after repeated failures
- All protected API endpoints require authn + authz + schema validation
- Audit events required for all sensitive mutations
- Secrets only in managed env secret store (never in repo)

## 4) Data Lifecycle Policy
- Soft-delete first for employee/document records
- Hard-delete only via privileged flow with audit reason
- Legal hold flag prevents deletion
- Retention clock configurable by data category/tenant policy
- Export-before-delete support for compliance operations

## 5) Strict MVP Completion Gates
MVP is NOT complete unless all are true:
1. All in-scope flows pass unit + integration + E2E
2. Mobile performance budgets pass
3. PWA installability/offline checklist passes
4. NL time-off baseline behavior passes test matrix
5. Reminder and email workflows pass retry/escalation tests
6. Security checks pass (authz, validation, rate limit, audit)
7. EN/NL localization complete for all in-scope screens and emails
8. Mandatory post-MVP Cloudflare R2 migration task is Ready with accepted plan

## Definition of Done
- Owner approves this policy set or provides edits.
- Approved policies are linked from architecture + task docs.
