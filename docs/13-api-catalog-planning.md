# 13 — API Catalog Planning (No Implementation)

## Purpose
Define a secure API inventory and permission model early so implementation tasks are unambiguous.

## API Principles
1. Expose APIs only where trust boundaries require server-side control.
2. Validate all inputs and outputs with explicit schemas.
3. Enforce role-based authorization for every protected action.
4. Emit audit events for sensitive mutations.

## Role Model (Planning Baseline)
- `admin`
- `manager`
- `employee`

---

## Domain: Auth & Session

### `POST /api/auth/login`
- **Purpose:** Authenticate user session.
- **Auth Required:** No (public)
- **Rate Limit:** Yes (strict)
- **Audit:** Failed login attempts

### `POST /api/auth/logout`
- **Purpose:** End active session.
- **Auth Required:** Yes
- **Audit:** Session termination

### `GET /api/auth/me`
- **Purpose:** Retrieve current principal context.
- **Auth Required:** Yes
- **Audit:** No (read)

---

## Domain: Employee Directory

### `GET /api/employees`
- **Purpose:** List employee profiles.
- **Allowed Roles:** admin, manager
- **Audit:** Optional (read access analytics)

### `GET /api/employees/:id`
- **Purpose:** View employee profile.
- **Allowed Roles:** admin, manager, employee (self)
- **Audit:** No (unless sensitive fields accessed)

### `POST /api/employees`
- **Purpose:** Create profile.
- **Allowed Roles:** admin
- **Audit:** Yes

### `PATCH /api/employees/:id`
- **Purpose:** Update profile fields.
- **Allowed Roles:** admin, manager (scoped), employee (limited self fields)
- **Audit:** Yes

### `POST /api/employees/:id/archive`
- **Purpose:** Archive employee profile.
- **Allowed Roles:** admin
- **Audit:** Yes (required)

---

## Domain: Time-Off

### `GET /api/timeoff/requests`
- **Purpose:** List requests.
- **Allowed Roles:** admin, manager, employee (self)
- **Audit:** No

### `POST /api/timeoff/requests`
- **Purpose:** Submit request.
- **Allowed Roles:** employee, manager, admin
- **Audit:** Yes

### `POST /api/timeoff/requests/:id/approve`
- **Purpose:** Approve request.
- **Allowed Roles:** manager, admin
- **Audit:** Yes (required)

### `POST /api/timeoff/requests/:id/reject`
- **Purpose:** Reject request.
- **Allowed Roles:** manager, admin
- **Audit:** Yes (required)

### `POST /api/timeoff/requests/:id/cancel`
- **Purpose:** Cancel request.
- **Allowed Roles:** requester, manager, admin
- **Audit:** Yes

---

## Domain: Documents

### `GET /api/documents/types`
- **Purpose:** List document type definitions.
- **Allowed Roles:** admin, manager

### `GET /api/employees/:id/documents`
- **Purpose:** List employee document metadata.
- **Allowed Roles:** admin, manager, employee (self)

### `POST /api/employees/:id/documents`
- **Purpose:** Register submitted document metadata.
- **Allowed Roles:** admin, manager, employee (self upload path)
- **Audit:** Yes

### `PATCH /api/employees/:id/documents/:docId/status`
- **Purpose:** Update document status.
- **Allowed Roles:** admin, manager
- **Audit:** Yes (required)

---

## Domain: Reminder Rules

### `GET /api/reminders/rules`
- **Purpose:** List active reminder rules.
- **Allowed Roles:** admin

### `POST /api/reminders/rules`
- **Purpose:** Create rule.
- **Allowed Roles:** admin
- **Audit:** Yes

### `PATCH /api/reminders/rules/:id`
- **Purpose:** Update rule.
- **Allowed Roles:** admin
- **Audit:** Yes

---

## Domain: Audit

### `GET /api/audit/events`
- **Purpose:** Query audit logs.
- **Allowed Roles:** admin
- **Audit:** Optional self-audit entry

### `GET /api/audit/events/:id`
- **Purpose:** View specific audit event.
- **Allowed Roles:** admin

---

## Endpoint Specification Template
Use per endpoint before implementation:
- Path + method
- Business purpose
- Auth required
- Allowed roles
- Input schema
- Output schema
- Error schema
- Rate limit policy
- Audit requirements
- Data sensitivity classification

## Definition of Done
- Endpoint inventory approved.
- Role permissions validated against matrix.
- Each endpoint has a spec stub before coding tasks are created.
