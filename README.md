# Wok On Fire — Demo Restaurant Website

A standalone, frontend-only Next.js demo site built for a live LogicMate chatbot
demo with a prospective client ("Wok On Fire," a pan-Asian wok-fired restaurant
chain). **This is not a real business** — content, menu, locations, phone
numbers and quotes are illustrative, built to look like a real, live restaurant
site for demo purposes only.

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
- `/locations` — All 13 branches (Dubai cloud kitchen + 12 Gujarat dine-in locations), filterable by city
- `/about` — Brand story, values, timeline
- `/reservations` — Table booking request form (mock submit)
- `/contact` — Contact form (mock submit)

## Adding the LogicMate chatbot widget

Open `src/app/layout.tsx` and find the commented placeholder inside `<head>`.
Paste the `<script>` snippet from your chatbot's **Channels → Website** tab
right there — it self-injects a floating chat bubble, nothing else on the
page needs to change.

```tsx
<script>
  window.LMChatbot = { embedKey: "YOUR_EMBED_KEY", ... };
</script>
<script src="https://YOUR-FRONTEND-DOMAIN/chatbot-widget.js" async></script>
```

## Notes

- Images are hotlinked from Unsplash and gracefully fall back to a branded
  gradient placeholder (`src/components/safe-img.tsx`) if a URL ever fails to
  load — verify these render correctly on the machine you're demoing from.
- All menu items, prices (AED), locations, addresses and phone numbers are
  fabricated for demo purposes.
