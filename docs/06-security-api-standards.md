# 06 — Security & API Standards

## Security Principles
1. Least privilege everywhere.
2. Validate all boundary inputs.
3. Audit sensitive actions.
4. Default deny for protected routes.

## API Standards (Planning)
- Endpoint ownership documented per domain.
- Request/response schemas versioned.
- Authentication requirements explicit per endpoint.
- Authorization checks tied to permission matrix.
- Sensitive endpoints include rate limiting and audit events.

## Data Protection
- Data classification labels (public/internal/restricted).
- PII handling rules documented per field.
- Retention policy documented by domain entity.

## Threat Modeling (Baseline)
- Session hijack
- Broken access control
- Input injection attacks
- Data exposure via logs
- Excessive data access by role

## Definition of Done for Security Planning
- Security checklist exists per feature.
- API boundary standards approved.
- Audit event requirements defined for all sensitive workflows.
