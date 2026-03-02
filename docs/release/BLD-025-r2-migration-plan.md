# BLD-025 — Cloudflare R2 migration implementation plan (Ready)

Status: Ready

Acceptance criteria (approved):
- Steps to migrate assets to R2 documented
- Rollback plan defined
- Cost estimate provided
- Integration tests or smoke validations identified

Plan:
1. Inventory current asset locations and usage
2. Setup R2 bucket(s) and configure keys
3. Implement upload script and update build/deploy to push assets to R2
4. Update app to serve assets from R2 (public URLs or signed URLs)
5. Run smoke validation
6. Monitor and rollback if needed

Owner signoff: @wesleysmits (pending)
