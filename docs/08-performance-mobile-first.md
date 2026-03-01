# 08 — Performance & Mobile-First Standards

## Mobile-First Mandate
- Primary UX target is mobile viewport first.
- Desktop enhancements are additive.

## Performance Budget Baseline (Draft)
- Initial JS budget: <= 170KB gz (MVP route target)
- LCP target: < 2.5s on mid-range mobile
- INP target: < 200ms
- CLS target: < 0.1

## UI/UX Performance Rules
- Avoid heavy client-side hydration where unnecessary.
- Use progressive loading and skeletons for data-heavy views.
- Keep interaction latency low for all form operations.

## Data Access Performance Rules
- Minimize round trips.
- Batch operations where possible.
- Cache with explicit invalidation rules.

## Definition of Done
Performance budgets are adopted as release gates and linked to QA validation.
