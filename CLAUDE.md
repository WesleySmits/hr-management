# HR Management - Project Guide

## 🏗️ Technical Stack (Target)
- **Frontend/Backend:** Next.js (App Router)
- **Database:** PostgreSQL (Prisma or Drizzle ORM)
- **Authentication:** NextAuth.js or Clerk
- **AI Integration:** OpenAI/Anthropic/Gemini APIs for automation triggers
- **Environment:** Node.js 22.x

## 📁 Repository Structure
- `src/app`: Next.js pages and API routes
- `src/components`: UI components (Shadcn/UI target)
- `src/lib`: Shared utilities and DB clients
- `src/hooks`: Custom React hooks

## 🛠️ Build & Run (Planned)
- Development: `npm run dev`
- Build: `npm run build`
- Docker: Use a standard Node-Alpine Dockerfile for Dokploy deployment

## 📜 Development Guidelines
- Follow strict TypeScript types.
- Prioritize AI-friendly code architecture (separation of concerns, clean interfaces).
- Document all automated "reminders" and "auto-mail" logic in `src/lib/automation`.
