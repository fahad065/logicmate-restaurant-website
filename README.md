# Canton Kitchen — Demo Restaurant Website

A standalone, frontend-only Next.js demo site built for LogicMate's own
marketing demo video showing how a chatbot widget gets added to a restaurant
website. **This is a fictional brand** — content, menu, locations, phone
numbers and quotes are all invented, built to look like a real, live
restaurant site for demo purposes only. It is not based on, and carries no
identifying details of, any real business.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- `lucide-react` + `react-icons/fa` for icons
- No backend, no database, no API calls — every page is static, all content
  lives in `src/data/*.ts`. Forms (Reservations, Contact) simulate a network
  request and show a success state, but submit nowhere.

## Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Pages

- `/` — Home
- `/menu` — Full categorized menu (40+ dishes, diet filters: Veg / Non-Veg / Vegan / Jain)
- `/locations` — All 13 branches (LA cloud kitchen + 12 California dine-in locations), filterable by city
- `/about` — Brand story, values, timeline
- `/reservations` — Table booking request form (mock submit)
- `/contact` — Contact form (mock submit)

## Adding the LogicMate chatbot widget

1. Copy the embed snippet from your chatbot's **Channels → Website** tab in
   the LogicMate dashboard.
2. Open `src/app/layout.tsx` and paste it directly inside `<head>`, right
   below the comment that marks the spot — exactly as copied, no edits.
3. Save, then (re)start `npm run dev`.

The snippet is a single, self-closing `<script>` tag with no inline code —
just `src` plus a few `data-*` attributes — so it pastes straight into JSX
as-is. There's no object literal or script body for Next.js/React/Vue's
compiler to choke on, so this works identically whether you're pasting it
into this Next.js file's JSX, a plain HTML page's `<head>`, or any other
site builder (WordPress, Shopify, Wix, Squarespace) — same snippet, no
framework-specific syntax, nothing to adapt.

## Notes

- Images are hotlinked from Unsplash and gracefully fall back to a branded
  gradient placeholder (`src/components/safe-img.tsx`) if a URL ever fails to
  load — verify these render correctly on the machine you're demoing from.
- All menu items, prices (USD), locations, addresses and phone numbers are
  fabricated for demo purposes. Phone numbers use the `555` prefix reserved
  for fictional use.
