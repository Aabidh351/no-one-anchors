# NoOne Anchors

A website for a ship chandler and marine services company in Chattogram, Bangladesh. It shows what the company supplies, which ports it covers, and lets visitors request a quote for their vessel.

## Key Features

- Homepage with services, certifications, port coverage, and testimonials
- Services and product catalog pages with detail views
- Interactive port map linked to a selectable port list
- Photo gallery with a bento grid, pagination, and a zoomable lightbox
- News section with a featured post and article pages
- Request a Quote form with client and server validation
- Animated navbar and footer, responsive down to mobile

## Tech Stack

- Next.js (App Router), React, TypeScript
- Tailwind CSS v4
- Framer Motion
- React Hook Form and Zod
- lucide-react
- Planned: PostgreSQL with Prisma

## Getting Started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes

- All content lives in `src/lib/data.ts` and is placeholder data. Replace it with real content before publishing.
- The quote form currently only logs submissions to the server console. Add email notification or database storage before launch.
- Gallery images use `next/image`, so add each image host to `images.remotePatterns` in `next.config.ts`.
