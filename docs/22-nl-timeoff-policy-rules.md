# 22 — NL Time-Off Policy Rules (MVP Baseline)

## Purpose
Set default Dutch time-off rules for MVP, with configurable employer overrides (CAO/contract).

## Important
This is a product policy baseline, not legal advice. Final legal validation should be done by Dutch employment counsel.

## Baseline Rules (Default)

1. **Minimum statutory entitlement**
   - Employee receives statutory vacation equal to **4x weekly working hours** per year.
   - Examples:
     - 40h/week -> 160 hours/year
     - 24h/week -> 96 hours/year

2. **Part-time handling**
   - Entitlement is pro-rata by contract hours.
   - Store contract hours history to avoid incorrect accrual after schedule changes.

3. **Carry-over and expiry**
   - Unused statutory days generally expire **6 months after year-end** (typically 1 July next year).
   - Unused extra-statutory days generally expire after **5 years** unless otherwise agreed.

4. **Inability to take leave**
   - If employee could not reasonably take statutory leave (e.g., sickness or employer obstacle), treat days as non-expired and apply longer validity per policy/legal basis.

5. **Sickness and accrual**
   - Statutory accrual continues during sickness.
   - If employee is sick during approved vacation days, affected days must be restorable as sick leave days.

6. **Payout rules**
   - Statutory leave is generally not paid out during employment.
   - On contract termination, remaining leave can be settled as payout according to legal constraints.

7. **Zero-hours/variable-hours contracts**
   - Support accrual by worked-hours model where applicable.
   - Formula must be configurable at tenant policy level.

## Required Configurability
Per-tenant policy settings must allow:
- statutory accrual model
- extra-statutory grants
- carry-over/expiry overrides when legally allowed
- CAO-specific exceptions
- sickness-related expiry suspension behavior

## Compliance Traceability
Any policy override must capture:
- who changed it
- when
- reason
- legal basis reference (free text field)

## Suggested MVP Test Matrix (minimum)
- Full-time default accrual
- Part-time accrual
- Mid-year contract-hours change
- Statutory expiry at 1 July
- Extra-statutory 5-year ageing
- Sick during planned vacation restoration
- Employee unable to take leave before expiry
- Termination payout flow

## Sources consulted
- Rijksoverheid: right to vacation days and usage/expiry pages
- Ondernemersplein / Business.gov.nl: statutory vs extra-statutory holiday rules and expiry examples

## Definition of Done
- Rules approved as product defaults.
- Override model approved for CAO/contract variability.
- Test matrix linked to implementation tasks.
