import Link from "next/link";
import { Flame, Leaf, Truck, Star, MapPin, ArrowRight } from "lucide-react";
import { SafeImg } from "@/components/safe-img";
import { menu } from "@/data/menu";
import { locations, cities } from "@/data/locations";

const SIGNATURE = [
  { item: menu[4].items[3], img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=70" },
  { item: menu[0].items[1], img: "https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?auto=format&fit=crop&w=900&q=70" },
  { item: menu[2].items[0], img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=70" },
  { item: menu[5].items[0], img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=70" },
];

const FEATURES = [
  {
    icon: Flame,
    title: "Wok-Fired, Never Steamed",
    desc: "Every dish is flash-cooked over an open flame — the way pan-Asian street food is meant to taste.",
  },
  {
    icon: Leaf,
    title: "Vegetarian & Jain Friendly",
    desc: "A full no-onion-no-garlic Jain menu at every branch, not an afterthought.",
  },
  {
    icon: Truck,
    title: "13 Locations, 2 Countries",
    desc: "Dine in across Gujarat, or order delivery in Dubai through Talabat, Deliveroo, Noon Food and Careem.",
  },
  {
    icon: Star,
    title: "Family-Run Since 2014",
    desc: "Started as one cloud kitchen in Dubai — now a growing family of branches, still run the same way.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Best Dragon Chicken in Dubai, hands down. We order from the Al Quoz kitchen every week.",
    name: "Farah A.",
    place: "Business Bay, Dubai",
  },
  {
    quote: "The Jain menu at the Vesu branch is genuinely full — not just two sad dishes. My whole family eats here.",
    name: "Priyesh S.",
    place: "Surat",
  },
  {
    quote: "Booked a table for 8 through the website in under a minute. Food came out fast and properly hot off the wok.",
    name: "Meera D.",
    place: "Ahmedabad",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal text-cream">
        <SafeImg
          src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1800&q=70"
          alt="Wok cooking over an open flame"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-charcoal/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
            <Flame className="size-3.5 animate-flicker" /> Pan-Asian · Wok-Fired · Fresh Daily
          </span>
          <h1 className="font-display text-balance text-4xl font-bold leading-[1.1] sm:text-6xl">
            Fired hot. <span className="text-fire">Served fast.</span>
            <br />
            Tastes like it should.
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-base text-cream/75 sm:text-lg">
            Wok On Fire brings authentic pan-Asian street food — noodles, fried rice
            and wok specialties — to {cities.length} cities across Gujarat and to Dubai,
            fired to order, every single time.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="rounded-full bg-fire px-7 py-3 text-sm font-semibold shadow-lg shadow-fire/30 transition-colors hover:bg-fire-dark"
            >
              View Full Menu
            </Link>
            <Link
              href="/reservations"
              className="rounded-full border border-cream/30 px-7 py-3 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Book a Table
            </Link>
          </div>

          <div className="mt-14 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-cream/15 pt-8">
            <Stat value={`${locations.length}`} label="Locations" />
            <Stat value={`${cities.length}`} label="Cities" />
            <Stat value="40+" label="Wok Dishes" />
          </div>
        </div>
      </section>

      {/* Signature dishes */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-fire">
              Signature Dishes
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
              Crowd favorites, straight off the wok
            </h2>
          </div>
          <Link
            href="/menu"
            className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-fire hover:text-fire-dark"
          >
            See full menu <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNATURE.map(({ item, img }) => (
            <div
              key={item.name}
              className="group overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-44 overflow-hidden">
                <SafeImg
                  src={img}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {item.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-fire px-2.5 py-1 text-[11px] font-semibold text-cream">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base font-bold text-charcoal">{item.name}</h3>
                  <span className="shrink-0 font-display text-base font-bold text-fire">
                    {item.price} AED
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-foreground/60">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-cream-soft py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-fire">
              Why Wok On Fire
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
              Built for real cravings, not tasting menus
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-black/8 bg-white p-6 text-center"
              >
                <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-fire/10 text-fire">
                  <f.icon className="size-6" />
                </span>
                <h3 className="font-display text-base font-bold text-charcoal">{f.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations teaser */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-fire">
              Find Us
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
              One cloud kitchen in Dubai. Twelve branches across Gujarat.
            </h2>
            <p className="mt-4 text-foreground/65">
              Order delivery anywhere in Dubai through our Al Quoz cloud kitchen, or
              walk into any of our dine-in branches across {cities.length} Gujarat
              cities — Surat, Ahmedabad, Vadodara, Rajkot, Bhavnagar, Anand and
              Jamnagar.
            </p>
            <Link
              href="/locations"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-cream hover:bg-charcoal-soft"
            >
              View all locations <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {cities.map((city) => {
              const count = locations.filter((l) => l.city === city).length;
              return (
                <div
                  key={city}
                  className="flex items-center gap-2.5 rounded-xl border border-black/8 bg-white px-4 py-3.5"
                >
                  <MapPin className="size-4 shrink-0 text-fire" />
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{city}</p>
                    <p className="text-xs text-foreground/50">
                      {count} {count === 1 ? "branch" : "branches"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-charcoal py-20 text-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              What People Say
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
              Straight from our regulars
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-cream/10 bg-charcoal-soft p-6"
              >
                <div className="mb-3 flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-cream/80">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-cream">{t.name}</p>
                <p className="text-xs text-cream/50">{t.place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-fire px-6 py-14 text-center text-cream sm:px-16">
          <Flame className="size-10 animate-flicker" />
          <h2 className="font-display text-balance text-3xl font-bold sm:text-4xl">
            Hungry already?
          </h2>
          <p className="max-w-xl text-cream/90">
            Order delivery in Dubai, or book a table at your nearest Gujarat branch —
            either way, it comes off the wok fired hot.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="rounded-full bg-charcoal px-7 py-3 text-sm font-semibold text-cream hover:bg-charcoal-soft"
            >
              Browse the Menu
            </Link>
            <Link
              href="/reservations"
              className="rounded-full border border-cream/50 px-7 py-3 text-sm font-semibold text-cream hover:bg-cream/10"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold text-gold sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-cream/60">{label}</p>
    </div>
  );
}
