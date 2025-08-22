# CoreFlow360 - Clean Deployment

This is a clean, simplified version of CoreFlow360 designed for reliable deployment.

## Features

- ✅ Next.js 15 with TypeScript
- ✅ Prisma ORM with PostgreSQL
- ✅ Tailwind CSS
- ✅ Build-safe database connection
- ✅ Health check API endpoint
- 🔄 Ready for v0.dev UI integration

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

3. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

4. Run development server:
   ```bash
   npm run dev
   ```

## API Endpoints

- `GET /api/health` - System health check and database connection test

## Deployment

This version is optimized for Vercel deployment with minimal dependencies and no complex monitoring systems.