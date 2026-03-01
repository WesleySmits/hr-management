# 09 — Domain Model (Entities, States, Relationships)

## Purpose
Define a shared, implementation-agnostic domain model so all future tasks use identical language and boundaries.

## Core Entities

## 1) User
Represents an authenticated account that can access the platform.

### Key Fields
- `id`
- `email`
- `role` (admin | manager | employee)
- `status` (invited | active | suspended | deactivated)
- `createdAt`
- `updatedAt`

### Notes
- `User` is for platform access.
- `EmployeeProfile` is for HR person data.
- One `User` may map to one `EmployeeProfile` (optional during onboarding).

---

## 2) EmployeeProfile
Represents HR-facing employee data record.

### Key Fields
- `id`
- `employeeCode`
- `firstName`
- `lastName`
- `displayName`
- `workEmail`
- `phone` (optional)
- `department`
- `jobTitle`
- `managerEmployeeId` (optional)
- `employmentType` (full_time | part_time | contractor | intern)
- `startDate`
- `endDate` (optional)
- `status` (active | leave | archived)
- `createdAt`
- `updatedAt`

### Constraints
- `employeeCode` unique.
- `workEmail` unique.
- archived profiles are immutable except admin restoration metadata.

---

## 3) TimeOffPolicy
Defines entitlement and carry-over rules.

### Key Fields
- `id`
- `name`
- `countryCode` (optional)
- `accrualModel` (annual_grant | monthly_accrual | custom)
- `annualDays`
- `carryOverEnabled`
- `carryOverLimitDays` (optional)
- `active`

---

## 4) TimeOffBalance
Stores employee leave balances per period.

### Key Fields
- `id`
- `employeeId`
- `policyId`
- `period` (e.g., 2026)
- `allocatedDays`
- `usedDays`
- `pendingDays`
- `remainingDays`
- `lastCalculatedAt`

### Constraints
- (`employeeId`, `policyId`, `period`) unique.

---

## 5) TimeOffRequest
Represents leave request lifecycle.

### Key Fields
- `id`
- `employeeId`
- `requestedByUserId`
- `startDate`
- `endDate`
- `daysRequested`
- `reason` (optional)
- `status` (draft | submitted | approved | rejected | cancelled)
- `approverUserId` (optional)
- `decisionAt` (optional)
- `decisionReason` (optional)
- `createdAt`
- `updatedAt`

### State Rules (high level)
- draft -> submitted
- submitted -> approved | rejected | cancelled
- approved -> cancelled (policy-dependent)
- rejected terminal

---

## 6) DocumentType
Template-level definition of required HR document classes.

### Key Fields
- `id`
- `key` (e.g., contract, id_verification)
- `label`
- `requiredForEmploymentTypes` (list)
- `hasExpiry`
- `defaultValidityDays` (optional)
- `active`

---

## 7) EmployeeDocument
Employee-specific document record (metadata-first).

### Key Fields
- `id`
- `employeeId`
- `documentTypeId`
- `status` (missing | submitted | approved | expired | rejected)
- `issuedAt` (optional)
- `expiresAt` (optional)
- `submittedAt` (optional)
- `approvedAt` (optional)
- `reviewedByUserId` (optional)
- `storageRef` (optional, provider-specific handle)
- `notes` (optional)

### Constraints
- Document status transitions must be auditable.

---

## 8) ReminderRule
Defines automation trigger + cadence.

### Key Fields
- `id`
- `domain` (time_off | documents | onboarding)
- `triggerType` (date_offset | status_duration | threshold)
- `triggerConfig` (structured JSON)
- `channel` (in_app | email)
- `cadence` (once | daily | weekly)
- `suppressionWindowHours`
- `active`

---

## 9) ReminderEvent
Materialized reminder execution log.

### Key Fields
- `id`
- `ruleId`
- `targetEntityType`
- `targetEntityId`
- `recipientUserId`
- `scheduledFor`
- `sentAt` (optional)
- `status` (scheduled | sent | failed | cancelled)
- `failureReason` (optional)

---

## 10) AuditEvent
Immutable log for sensitive actions.

### Key Fields
- `id`
- `actorUserId`
- `actorRole`
- `action`
- `resourceType`
- `resourceId`
- `before` (optional, redacted)
- `after` (optional, redacted)
- `ipHash` (optional)
- `userAgent` (optional)
- `occurredAt`

### Rules
- Append-only.
- Redact sensitive fields before persistence.

---

## Entity Relationships (Logical)
- `User` 0..1 -> 1 `EmployeeProfile`
- `EmployeeProfile` 1 -> N `TimeOffRequest`
- `EmployeeProfile` 1 -> N `EmployeeDocument`
- `TimeOffPolicy` 1 -> N `TimeOffBalance`
- `ReminderRule` 1 -> N `ReminderEvent`
- All sensitive mutations -> N `AuditEvent`

## State Canonicalization Rule
All enums/states must be centrally documented and reused without aliases to prevent drift.

## Definition of Done
- Entities accepted by product + engineering.
- Field ownership and constraints agreed.
- State machines aligned with feature docs.
