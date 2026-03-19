# Copilot Instructions for expense-tracker-ai

## Project Overview

**NPS trust** - A Next.js 16 application for NPS (Net Promoter Score) calculation with Clerk authentication and PostgreSQL database. Currently in `shadcn_config` branch with pricing and calculator components.

## Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript
- **UI Framework:** shadcn/ui (Radix UI components) + Tailwind CSS v4
- **Authentication:** Clerk (sign-in/up via `@clerk/nextjs`)
- **Database:** PostgreSQL with Prisma ORM (`@prisma/adapter-pg`)
- **Icons:** lucide-react

## Architecture Patterns

### Database Layer

- Prisma client is generated to `app/generated/prisma/` (non-default location)
- Singleton instance managed in [`lib/prisma.ts`](../lib/prisma.ts) with NODE_ENV check for development
- Uses `PrismaPg` adapter for PostgreSQL connection pooling
- Schema defined in [`prisma/schema.prisma`](../prisma/schema.prisma) - currently minimal with User model only

### API Routes

- RESTful routes in `app/api/` (Next.js App Router)
- Example: [`app/api/users/route.ts`](../app/api/users/route.ts) - simple GET endpoint returning all users
- Server functions preferred over client-side API calls when possible

### Component Structure

- **UI Components:** `components/ui/` - shadcn presets (button, card, input, select, slider, radio-group, dialog, tabs, navigation-menu, badge, label)
- **Feature Components:** `components/` - domain-specific (navbar, hero, footer, nps-calculator, nps-hero, footerBanner)
- **Client Components:** Use `"use client"` directive (navbar is client-side for Clerk integration, home page is client-side)
- **Styling:** Tailwind CSS v4 with custom theme variables in [`app/globals.css`](../app/globals.css)

### Authentication Flow

- ClerkProvider wraps entire app in [`app/layout.tsx`](../app/layout.tsx)
- Use `<SignedIn>`, `<SignedOut>`, `<UserButton>`, `<SignInButton>`, `<SignUpButton>` components
- navbar.tsx demonstrates Clerk integration pattern
- Avoid direct API calls to Clerk when possible; rely on built-in components for auth state

## Build & Development

```bash
npm run dev        # Start dev server (Next.js)
npm run build      # Build (runs `prisma generate && next build`)
npm run vercel-build # Vercel deployment build
npm run start      # Production server
npm run lint       # ESLint check
```

**Critical:** Build command includes `prisma generate` - regenerates Prisma client after schema changes.

## Key Conventions

### Import Paths

- Use `@/` alias (configured in tsconfig.json) for absolute imports: `@/components/ui/button`, `@/lib/prisma`
- Avoid relative imports (../../)

### Type Safety

- strict mode enabled in tsconfig
- Always import `Metadata` type from `next` for page metadata
- React 19 - use updated patterns where applicable

### Database Migrations

- Migrations stored in `prisma/migrations/`
- After schema changes: run `npm run build` to trigger `prisma generate`
- Current state: migration `20260121064424_init/` exists

### Styling

- MUST use Shadecn UI components for styling (no custom CSS files except `globals.css`)
- **No custom CSS files** - Tailwind classes or shadcn components only (except globals.css)
- Theme variables defined via CSS custom properties in `app/globals.css`
- responsive-first: use md:, lg: breakpoints (navbar uses `hidden md:flex`)

## Common Workflows

**Adding a new model:**

1. Update `prisma/schema.prisma`
2. Run `npm run build` (auto-generates Prisma client to `app/generated/prisma/`)
3. Use in API routes: `import prisma from "@/lib/prisma"`; `await prisma.modelName.findMany()`

**Creating new pages:**

- Use `app/page.tsx` pattern (App Router)
- Add `"use client"` if using hooks or Clerk components
- Import shadcn components as needed

**Clerk integration:**

- Always wrap components needing auth info in ClerkProvider (done in layout)
- Use built-in UI components; avoid direct API calls when possible

## Files to Know

- [`app/layout.tsx`](../app/layout.tsx) - Root layout with ClerkProvider
- [`lib/prisma.ts`](../lib/prisma.ts) - Database singleton (reference when adding new models)
- [`prisma/schema.prisma`](../prisma/schema.prisma) - Source of truth for data model
- [`components/ui/`](../components/ui/) - Reusable UI primitives
- [`tsconfig.json`](../tsconfig.json) - Path aliases and strict mode

## Known Quirks

- Prisma client output directory is non-standard (`app/generated/prisma/` vs `node_modules/.prisma/client`)
- Page component on [`app/page.tsx`](../app/page.tsx) fetches users client-side despite having a GET API endpoint
