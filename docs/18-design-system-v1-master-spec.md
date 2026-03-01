# 18 — Design System v1 Master Spec (Canonical)

## Purpose
This is the single canonical design system reference for HR Management v1 planning.
It consolidates and supersedes fragmented planning guidance across:
- `03-design-system.md`
- `16-design-system-choices.md`
- `17-theme-system-and-examples.md`

## Scope of This Master Spec
- Design principles
- Component architecture standards
- Accessibility and interaction rules
- Responsive/mobile-first patterns
- Theme system contract (colors + fonts only)
- Theme examples (5)
- Design-system quality/test gates

## Constraint
Planning-only artifact. No implementation work is authorized unless explicitly approved.

---

## 1) Product Experience Direction

### Style Direction
- **Linear-inspired** product feel: clean, focused, minimal-noise, premium productivity.

### UX Priorities
1. Speed of task completion over decorative visuals.
2. Consistency over one-off patterns.
3. Mobile-first usability with desktop enhancement.
4. Accessibility as baseline, not an add-on.

---

## 2) Foundation Choices (Locked)

- **Styling:** Tailwind CSS
- **Token system:** CSS variables with semantic names
- **Primitive layer:** Radix UI primitives
- **Variant typing:** class-variance-authority (CVA)
- **Typography strategy:** performance-first stacks
- **Testing policy:** Unit + Integration + E2E required for core DS components

---

## 3) Design Token Principles

## Allowed Token Domains
- Colors
- Fonts
- (Other token domains are handled in separate specs and are not defined here.)

## Naming Rules
- Semantic-first naming only (e.g., `color.bg.surface`, `color.text.primary`).
- No raw hex in components.
- State tokens must use semantic intents: success/warning/danger/info.

---

## 4) Theme System (Runtime Switching Required)

## Mandatory Capabilities
- Dark and light options available.
- Full runtime theme switching on the fly.
- User theme preference persistence required.
- Component styles must resolve via semantic tokens only.

## Theme Application Model
- Theme applied via top-level selector (e.g., `data-theme="<theme-name>"`) or equivalent token context.

## Theme Contract (Colors + Fonts only)
Each theme defines:

- `font.family.sans`
- `font.family.mono`

- `color.bg.canvas`
- `color.bg.surface`
- `color.bg.elevated`
- `color.text.primary`
- `color.text.secondary`
- `color.text.muted`
- `color.border.default`
- `color.border.strong`
- `color.brand.primary`
- `color.brand.onPrimary`
- `color.state.success`
- `color.state.warning`
- `color.state.danger`
- `color.state.info`
- `color.focus.ring`

---

## 5) Approved Example Themes (5)

## Theme A — `linear-dark` (default)
- **Fonts**
  - `font.family.sans`: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`
  - `font.family.mono`: `JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace`
- **Colors**
  - `color.bg.canvas`: `#08090A`
  - `color.bg.surface`: `#111216`
  - `color.bg.elevated`: `#171922`
  - `color.text.primary`: `#F5F7FA`
  - `color.text.secondary`: `#C8CED8`
  - `color.text.muted`: `#8E97A6`
  - `color.border.default`: `#262A33`
  - `color.border.strong`: `#343A46`
  - `color.brand.primary`: `#5E6AD2`
  - `color.brand.onPrimary`: `#F8FAFF`
  - `color.state.success`: `#22C55E`
  - `color.state.warning`: `#F59E0B`
  - `color.state.danger`: `#EF4444`
  - `color.state.info`: `#38BDF8`
  - `color.focus.ring`: `#7C8BFF`

## Theme B — `linear-light`
- **Fonts**
  - `font.family.sans`: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`
  - `font.family.mono`: `JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace`
- **Colors**
  - `color.bg.canvas`: `#F7F8FA`
  - `color.bg.surface`: `#FFFFFF`
  - `color.bg.elevated`: `#F2F4F8`
  - `color.text.primary`: `#0F1222`
  - `color.text.secondary`: `#3A4255`
  - `color.text.muted`: `#667085`
  - `color.border.default`: `#DEE3EC`
  - `color.border.strong`: `#C7CFDC`
  - `color.brand.primary`: `#4F5BD5`
  - `color.brand.onPrimary`: `#FFFFFF`
  - `color.state.success`: `#16A34A`
  - `color.state.warning`: `#D97706`
  - `color.state.danger`: `#DC2626`
  - `color.state.info`: `#0284C7`
  - `color.focus.ring`: `#5B6EFF`

## Theme C — `graphite-pro`
- **Fonts**
  - `font.family.sans`: `Manrope, Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif`
  - `font.family.mono`: `IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace`
- **Colors**
  - `color.bg.canvas`: `#0C0E11`
  - `color.bg.surface`: `#14171B`
  - `color.bg.elevated`: `#1A1F27`
  - `color.text.primary`: `#EEF1F6`
  - `color.text.secondary`: `#C2CAD6`
  - `color.text.muted`: `#8C97AA`
  - `color.border.default`: `#2A303B`
  - `color.border.strong`: `#3A4150`
  - `color.brand.primary`: `#7C879D`
  - `color.brand.onPrimary`: `#0B0D11`
  - `color.state.success`: `#34D399`
  - `color.state.warning`: `#FBBF24`
  - `color.state.danger`: `#F87171`
  - `color.state.info`: `#60A5FA`
  - `color.focus.ring`: `#94A3B8`

## Theme D — `aurora-hc`
- **Fonts**
  - `font.family.sans`: `Atkinson Hyperlegible, Inter, ui-sans-serif, system-ui, Arial, sans-serif`
  - `font.family.mono`: `JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace`
- **Colors**
  - `color.bg.canvas`: `#050608`
  - `color.bg.surface`: `#0D1117`
  - `color.bg.elevated`: `#131A24`
  - `color.text.primary`: `#FFFFFF`
  - `color.text.secondary`: `#DCE4F2`
  - `color.text.muted`: `#A8B5CC`
  - `color.border.default`: `#2E3B52`
  - `color.border.strong`: `#41526F`
  - `color.brand.primary`: `#6AA8FF`
  - `color.brand.onPrimary`: `#041226`
  - `color.state.success`: `#22C55E`
  - `color.state.warning`: `#F59E0B`
  - `color.state.danger`: `#F43F5E`
  - `color.state.info`: `#38BDF8`
  - `color.focus.ring`: `#93C5FD`

## Theme E — `sunset-warm`
- **Fonts**
  - `font.family.sans`: `Plus Jakarta Sans, Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif`
  - `font.family.mono`: `Fira Code, ui-monospace, SFMono-Regular, Menlo, monospace`
- **Colors**
  - `color.bg.canvas`: `#FFF9F5`
  - `color.bg.surface`: `#FFFFFF`
  - `color.bg.elevated`: `#FFF1E8`
  - `color.text.primary`: `#2C1E1A`
  - `color.text.secondary`: `#5B3D33`
  - `color.text.muted`: `#8A6B62`
  - `color.border.default`: `#F0D7CA`
  - `color.border.strong`: `#E6BFAE`
  - `color.brand.primary`: `#E86F51`
  - `color.brand.onPrimary`: `#FFFFFF`
  - `color.state.success`: `#2F9E44`
  - `color.state.warning`: `#D97706`
  - `color.state.danger`: `#D94841`
  - `color.state.info`: `#2563EB`
  - `color.focus.ring`: `#FB923C`

---

## 6) Accessibility and Interaction Baseline

- WCAG 2.2 AA baseline required.
- Visible focus states required.
- Keyboard accessibility required for critical flows.
- Theme choices must preserve accessible contrast.

---

## 7) Governance

- New themes must implement the exact contract.
- No component may bypass semantic tokens.
- Any theme change requires contrast validation pass.

---

## 8) Quality Gates

Design-system work is only complete when:
1. Theme contract is complete.
2. Five reference themes are defined.
3. Runtime switching rules are documented.
4. Testing policy is mapped to component tasks (unit + integration + E2E).

---

## 9) Status
Canonical for DS v1 planning.

