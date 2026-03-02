# 27 — Architecture Boundaries

This project enforces module boundaries between five layers:

- `domain` — business entities/rules (pure core)
- `app` — application services/use-cases
- `infra` — adapters and persistence
- `ui` — presentation/view-models
- `api` — transport/boundary handlers

## Import Rules

- `domain` may not import from `app`, `infra`, `ui`, or `api`
- `app` may not import from `infra`, `ui`, or `api`
- `infra` may not import from `app`, `ui`, or `api`
- `ui` may not import from `infra` or `api`
- `api` may not import from `ui` or `infra`

These rules are enforced in `eslint.config.mjs` via `no-restricted-imports`.

## Verification

`tests/integration/architecture-boundaries.test.ts` uses ESLint's Node API to verify that an invalid cross-layer import is rejected.
