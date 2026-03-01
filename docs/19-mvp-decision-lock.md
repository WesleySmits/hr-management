# 19 — MVP Decision Lock

## Status
Locked (approved)

## Product/Architecture Decisions
1. **Tenant model (MVP):** Single-tenant.
   - Architecture must remain future-ready for multi-tenant expansion.
2. **Roles (MVP):** admin, manager, employee.
3. **Time-off scope (MVP):** includes accrual + carry-over.
4. **Document storage (MVP):** local browser storage first (IndexedDB strategy).
5. **Notifications (MVP):** in-app + email via Resend.
6. **Languages (MVP):** English default + full Dutch translation.
   - Tenant default language, user-level override allowed.
7. **Region/compliance target:** Netherlands.
8. **AI autonomy:** reminder sending can be autonomous.
9. **Go-to-market context:** SaaS for local Dutch companies.

## Mandatory Post-MVP/End-of-MVP Transition Task
- Plan and implement migration to **S3-compatible storage on Cloudflare** (R2) using the storage strategy abstraction.

## Definition of Done
- All decisions reflected in planning docs and Notion task backlog.
