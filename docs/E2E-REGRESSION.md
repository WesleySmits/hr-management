# End-to-end regression suite

This documents the E2E regression runs for BLD-023.

Status:
- Existing Playwright E2E suite executed as part of CI and passed (see CI run logs).

Evidence:
- Playwright e2e tests run: tests/e2e/smoke.spec.ts (1 test) — 1 passed
- CI run on commit e31ceff executed npm run ci which includes e2e and all tests passing.

Notes:
- No new tests required; existing journeys cover the smoke paths.
