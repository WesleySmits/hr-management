# 17 — Theme System (Linear-Style Direction + 5 Example Themes)

## Objective
Define a runtime theme system with:
- Linear-inspired visual direction
- light mode availability
- instant theme switching
- exactly 5 example themes

## Scope Constraint
This document defines only:
1) **colors**
2) **fonts**

No spacing, radius, shadows, component behavior, or layout tokens are included here.

---

## 1) Visual Direction

## Primary Style Direction
- Product baseline should feel **Linear-inspired**:
  - clean, calm, sharp
  - restrained contrast
  - minimal visual noise
  - premium but productivity-first

## Light Mode
- Mandatory across the system (not optional post-MVP).

## Runtime Theme Switching
- Theme must be changeable **on the fly** at runtime.
- User preference should be persisted per user profile/settings.
- System should support future additional themes without refactoring components.

---

## 2) Theme Contract (Colors + Fonts Only)

Each theme must provide:

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

## 3) Example Themes (5 Total)

## Theme 1 — `linear-dark` (Default)
**Intent:** Core Linear-inspired dark productivity theme.

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

---

## Theme 2 — `linear-light`
**Intent:** Light mode companion to linear-dark.

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

---

## Theme 3 — `graphite-pro`
**Intent:** Neutral dark enterprise look with lower chroma.

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

---

## Theme 4 — `aurora-hc`
**Intent:** Higher-contrast accessibility-friendly option.

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

---

## Theme 5 — `sunset-warm`
**Intent:** Warmer, brand-friendly light theme option.

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

## 4) Theme Switching Rules (Planning)

- Theme selection must apply via top-level `data-theme="<theme-name>"` model or equivalent token map switch.
- Components must only consume semantic tokens (never hard-coded hex values).
- Font stacks switch with theme, same as color tokens.

---

## 5) Definition of Done
- Five example themes approved.
- Linear style direction accepted as baseline.
- Light mode included as first-class theme.
- Runtime theme switching requirement added to planning constraints.
