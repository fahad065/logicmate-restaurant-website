"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Truck, UtensilsCrossed } from "lucide-react";
import { locations, cities } from "@/data/locations";

export default function LocationsPage() {
  const [cityFilter, setCityFilter] = useState<string>("all");

  const filtered =
    cityFilter === "all" ? locations : locations.filter((l) => l.city === cityFilter);

  return (
    <div>
      <section className="relative overflow-hidden bg-charcoal py-16 text-cream sm:py-20">
        <div className="absolute -left-20 -top-20 size-72 rounded-full bg-fire/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            <MapPin className="size-3.5" /> {locations.length} Locations
          </span>
          <h1 className="font-display text-balance text-4xl font-bold sm:text-5xl">
            One cloud kitchen in Dubai. Twelve branches across Gujarat.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/70">
            Order delivery anywhere in Dubai, or walk into a dine-in branch across{" "}
            {cities.length - 1} Gujarat cities.
          </p>
        </div>
      </section>

      <section className="border-b border-black/8 bg-cream/95">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 overflow-x-auto px-5 py-4 sm:px-8">
          <button
            onClick={() => setCityFilter("all")}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
              cityFilter === "all"
                ? "border-fire bg-fire text-cream"
                : "border-black/10 bg-white text-foreground/70 hover:border-fire/40 hover:text-fire"
            }`}
          >
            All Cities
          </button>
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setCityFilter(city)}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                cityFilter === city
                  ? "border-fire bg-fire text-cream"
                  : "border-black/10 bg-white text-foreground/70 hover:border-fire/40 hover:text-fire"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((loc) => (
            <div
              key={loc.id}
              className="flex flex-col rounded-2xl border border-black/8 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <span
                    className="mb-2 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide"
                    style={
                      loc.isOnlineOnly
                        ? { color: "#b8862f", backgroundColor: "#d6a24a22" }
                        : { color: "#e0451c", backgroundColor: "#e0451c1a" }
                    }
                  >
                    {loc.isOnlineOnly ? <Truck className="size-3" /> : <UtensilsCrossed className="size-3" />}
                    {loc.tag}
                  </span>
                  <h3 className="font-display text-lg font-bold text-charcoal">{loc.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground/45">
                    {loc.city}, {loc.country}
                  </p>
                </div>
              </div>

              <div className="mt-1 space-y-2.5 text-sm text-foreground/65">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-fire" />
                  {loc.address}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="size-4 shrink-0 text-fire" />
                  <a href={`tel:${loc.phone.replace(/\s+/g, "")}`} className="hover:text-fire">
                    {loc.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="size-4 shrink-0 text-fire" />
                  {loc.hours}
                </p>
              </div>

              {loc.areaTags && (
                <div className="mt-4">
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-foreground/45">
                    Also delivers to
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.areaTags.map((a) => (
                      <span
                        key={a}
                        className="rounded-full bg-cream-soft px-2.5 py-1 text-[11px] font-medium text-foreground/60"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-black/8 pt-4">
                {loc.deliveryPlatforms.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-black/10 px-2.5 py-1 text-[11px] font-medium text-foreground/55"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
