# 10 — Notion Schema (Autonomous Task Execution)

## Purpose
Define a Notion database schema that supports autonomous AI task pickup with clear sequencing, scope control, and done criteria.

## Database: `HR Tasks`

## Required Properties
1. **Task ID** (Title or Text)
   - Format: `HR-001`
2. **Title** (Title)
3. **Feature** (Select)
   - Foundation
   - Identity & Access
   - Employee Directory
   - Time-Off
   - Documents
   - Security/API
   - PWA
   - Performance
   - Operations
4. **Status** (Status)
   - Backlog
   - Ready
   - In Progress
   - Blocked
   - Review
   - Done
5. **Priority** (Select)
   - P0
   - P1
   - P2
6. **Execution Order** (Number)
7. **Complexity** (Select)
   - S
   - M
   - L
8. **Scope In** (Rich text)
9. **Scope Out** (Rich text)
10. **Dependencies** (Relation -> HR Tasks)
11. **Definition of Done** (Rich text)
12. **Acceptance Criteria** (Rich text)
13. **Deliverables** (Rich text)
14. **Owner Agent** (Select)
   - Hanno
   - Forge
   - Quill
   - Scout
   - Pulse
   - Unassigned
15. **Risk Notes** (Rich text)
16. **Blocked Reason** (Rich text)
17. **Ready Check** (Checkbox)
18. **Done Check** (Checkbox)

## Optional Properties
- **Estimate (hours)** (Number)
- **Sprint/Phase** (Select)
- **Last Updated By** (Text)
- **Links/Artifacts** (URL or Rich text)

## Notion Views

### 1) `Execution Queue`
- Filter: `Status` in (Ready, In Progress, Blocked, Review)
- Sort: `Execution Order` asc, `Priority` asc

### 2) `Blocked Tasks`
- Filter: `Status = Blocked`
- Show: `Blocked Reason`, `Dependencies`

### 3) `Ready for AI Pickup`
- Filter:
  - `Status = Ready`
  - `Ready Check = true`
  - all dependencies Done (manually verified or formula helper)
- Sort: `Execution Order` asc

### 4) `Definition of Done QA`
- Filter: `Status = Review`
- Show: DoD, Acceptance Criteria, Deliverables

### 5) `Completed`
- Filter: `Status = Done`
- Sort: last edited desc

## Operating Rules
1. No task enters `Ready` unless scope + DoD + acceptance criteria are complete.
2. No task enters `Done` unless `Done Check = true` and deliverables are linked.
3. Tasks with unresolved dependencies cannot move to `In Progress`.
4. Any scope change requires updating `Scope Out` to prevent silent expansion.

## Task Body Template (Paste in each task page)

```md
## Objective

## Scope In
- 

## Scope Out
- 

## Dependencies
- 

## Deliverables
- 

## Definition of Done
- 

## Acceptance Criteria
- [ ] 
- [ ] 

## Risks / Notes
- 
```

## Definition of Done
- Schema finalized and applied consistently.
- Views created and named as above.
- Existing HR-001..012 tasks mapped into this structure.
