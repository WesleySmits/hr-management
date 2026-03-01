# 16 — Design System Choices (Locked for Planning)

## Constraint
Planning only. No implementation/code execution until explicit approval.

## Objective
Freeze design system decisions so AI tasks can execute with minimal ambiguity and no stylistic drift.

---

## 1) Foundation Stack Decisions

## Styling Engine
- **Tailwind CSS** as styling engine.
- **Design tokens via CSS variables** (semantic-first naming).

## Component Primitive Layer
- **Radix UI primitives** for accessibility and interaction reliability.

## Variant Management
- **class-variance-authority (CVA)** for typed component variants.

## Why this combo
- Fast mobile-first delivery.
- Predictable accessibility baseline.
- Strictly typed variants (matches strict TS policy).

---

## 2) Token Strategy (Semantic, Not Raw)

## Token Categories
- Color
- Typography
- Spacing
- Radius
- Elevation
- Motion
- Z-index

## Naming Rules
- Use semantic names (e.g., `color.bg.surface`, `color.text.primary`), not hard-coded values.
- For states use intent names: `success`, `warning`, `danger`, `info`.
- Never use brand hex directly in components; only via tokens.

## Theme Model
- Start with **light theme** plus architecture ready for dark theme.
- Brand accents as token layer, never component-level one-offs.

---

## 3) Typography System

## Font Approach
- System-first performant font stack for MVP.
- Add custom brand font only if performance budget is preserved.

## Scale (locked)
- `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`

## Usage Rules
- Body text defaults to `md`.
- Heading scale must follow hierarchy and never skip levels for visual effect alone.

---

## 4) Spacing and Layout

## Spacing
- 4px baseline scale (4, 8, 12, 16, 20, 24, 32, 40, 48...)

## Layout
- Mobile-first single-column flow by default.
- Progressive enhancement for tablet/desktop.
- Max content width tokens for readability.

## Touch Targets
- Minimum interactive hit area: **44x44px**.

---

## 5) Component Architecture

## Layers
1. **Primitive wrappers** (Button, Input, Select, Checkbox, Switch)
2. **Composed components** (FormField, DataRow, ModalShell)
3. **Feature components** (TimeOffRequestCard, EmployeeStatusPill)

## Rules
- Domain features cannot consume raw Radix primitives directly.
- Use app-owned wrappers to ensure consistent styles, behavior, and analytics hooks.

---

## 6) Accessibility Standards (Hard Requirements)

- WCAG **2.2 AA** baseline.
- Keyboard navigable flows for all critical actions.
- Visible focus rings (never removed without equivalent replacement).
- Color contrast compliance for text and controls.
- Screen-reader labels for icon-only controls.
- Motion reduction support (`prefers-reduced-motion`).

---

## 7) Motion and Feedback

## Motion Principles
- Subtle, short, purposeful transitions.
- No decorative motion that impacts task completion speed.

## Feedback Components (required)
- Loading: skeleton + inline spinners
- Success/failure: toast/banner patterns
- Empty states: instructional with next action
- Error states: actionable guidance, not generic failures

---

## 8) Data Display Patterns

## Table Strategy
- Mobile: card/list representation first.
- Desktop: enhanced table view where useful.
- Same data model, different responsive presentation.

## State Coverage
Every data component must define:
- loading
- empty
- error
- populated

---

## 9) Form UX Standards

- Inline field validation + top-level summary for submit errors.
- Required fields explicitly marked.
- Preserve input state on recoverable failures.
- Clear success confirmation after save/submit.

---

## 10) Performance Constraints for Design System

- Keep component wrappers lightweight.
- Avoid over-abstracted style systems that bloat client JS.
- Prefer CSS-native behaviors over JS-heavy interaction when possible.

---

## 11) Governance Rules

- No one-off component variants without design-system update.
- New component proposal must include:
  - usage context
  - props/variants
  - accessibility behavior
  - test requirements (unit + integration + E2E impact)

---

## 12) Design System Testing Requirements

Every core component requires:
- **Unit tests** (render, variants, states)
- **Integration tests** (form behavior, keyboard interactions)
- **E2E coverage** for critical user journeys using those components

No component is production-ready without all three test layers (unless explicitly waived in writing).

---

## 13) Final Choices Locked
- Tailwind CSS + CSS variable tokens
- Radix UI primitives under app-owned wrappers
- CVA for typed variants
- WCAG 2.2 AA baseline
- Mobile-first responsive behavior
- Strict 3-layer testing policy

## Definition of Done
- Choices approved and treated as default constraints for all future feature/task planning.
- Notion tasks created for token spec, component catalog, and accessibility validation.


## 14) Theme Direction and Runtime Switching
- Base style direction: Linear-inspired (clean, focused, low-noise).
- Light mode is required.
- Full runtime theme switching is required.
- Reference themes and token contract are defined in `17-theme-system-and-examples.md` (colors + fonts only).
