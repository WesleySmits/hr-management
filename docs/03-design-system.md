# 03 — Design System (Product Foundation)

## Core Principles
1. Mobile-first by default.
2. Accessibility is non-negotiable.
3. Fast interactions over visual complexity.
4. Consistency over one-off UI patterns.

## Design Tokens
- Color: semantic tokens (`bg.surface`, `text.primary`, `state.error`, etc.)
- Typography: fixed scale (xs → 3xl)
- Spacing: 4px baseline grid
- Radius: standardized set (sm/md/lg/xl)
- Shadow/elevation: 3-level system

## Component Families (MVP)
- Primitives: Button, Input, Select, Checkbox, Switch, Badge
- Layout: Stack, Grid, Container, Card, Divider
- Navigation: TopBar, BottomNav, Tabs, Breadcrumb
- Feedback: Toast, Banner, EmptyState, Skeleton, Dialog
- Data: Table (responsive), ListRow, StatTile

## Interaction Standards
- Touch target minimum: 44x44px
- Focus states visible for keyboard nav
- Form validation messages inline + summary
- Loading states for every async action

## Accessibility Targets
- WCAG 2.2 AA baseline
- Sufficient contrast in all themes
- Semantic landmarks and screen reader labels
- Keyboard navigable core flows

## Responsiveness Strategy
- Breakpoints should enhance layout, not redefine behavior.
- Core tasks must be fully executable on small screens.


## Locked Design System Stack
- Tailwind CSS + CSS variable token system
- Radix UI primitives through app-owned wrappers
- CVA for typed variants
- WCAG 2.2 AA baseline
- Mandatory test coverage: Unit + Integration + E2E for core components
