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

1. Copy `chatbot-embed.local.example.txt` to a new file named
   `chatbot-embed.local.txt`, in this same folder (the project root).
2. Copy the embed snippet from your chatbot's **Channels → Website** tab in
   the LogicMate dashboard, and paste it into that file — replacing the
   placeholder, exactly as copied. No code to edit, no quotes to escape.
3. Save, then (re)start `npm run dev`.

`chatbot-embed.local.txt` is gitignored, so your real embed key never gets
committed. `src/app/layout.tsx` reads this file and renders the widget for
every page automatically — nothing else to touch.

(If you're wiring the same embed snippet into a *different* site that's
also built in React, Next.js, or Vue, you'll need to paste it the way those
frameworks expect raw inline `<script>` content — e.g. React's
`dangerouslySetInnerHTML` or Next's `next/script` — the same thing true of
any third-party script tag, not specific to this widget. Plain HTML,
WordPress, Shopify, Wix, and Squarespace sites need zero changes; paste the
snippet in as copied.)

## Notes

- Images are hotlinked from Unsplash and gracefully fall back to a branded
  gradient placeholder (`src/components/safe-img.tsx`) if a URL ever fails to
  load — verify these render correctly on the machine you're demoing from.
- All menu items, prices (USD), locations, addresses and phone numbers are
  fabricated for demo purposes. Phone numbers use the `555` prefix reserved
  for fictional use.
