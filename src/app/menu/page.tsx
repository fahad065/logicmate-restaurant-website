"use client";

import { useState } from "react";
import { Flame, Leaf, Sprout } from "lucide-react";
import { menu, dietLabel, dietColor, type DietTag } from "@/data/menu";

const DIET_FILTERS: { value: DietTag | "all"; label: string }[] = [
  { value: "all", label: "All Dishes" },
  { value: "veg", label: "Veg" },
  { value: "non-veg", label: "Non-Veg" },
  { value: "vegan", label: "Vegan" },
  { value: "jain", label: "Jain" },
];

export default function MenuPage() {
  const [filter, setFilter] = useState<DietTag | "all">("all");

  const categories = menu
    .map((cat) => ({
      ...cat,
      items: filter === "all" ? cat.items : cat.items.filter((i) => i.diet === filter),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div>
      <section className="relative overflow-hidden bg-charcoal py-16 text-cream sm:py-20">
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-fire/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            <Flame className="size-3.5" /> Full Menu
          </span>
          <h1 className="font-display text-balance text-4xl font-bold sm:text-5xl">
            Everything, straight off the wok
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/70">
            40+ dishes across starters, soups, noodles, fried rice and wok specialties —
            with a full Jain and vegetarian menu at every branch.
          </p>
        </div>
      </section>

      <section className="sticky top-[57px] z-40 border-b border-black/8 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 overflow-x-auto px-5 py-4 sm:px-8">
          {DIET_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                filter === f.value
                  ? "border-fire bg-fire text-cream"
                  : "border-black/10 bg-white text-foreground/70 hover:border-fire/40 hover:text-fire"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        {categories.length === 0 && (
          <p className="py-20 text-center text-foreground/50">
            No dishes match this filter yet — try another tag.
          </p>
        )}

        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <div className="mb-6 border-b border-black/8 pb-4">
                <h2 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
                  {cat.title}
                </h2>
                {cat.subtitle && (
                  <p className="mt-1 text-sm text-foreground/55">{cat.subtitle}</p>
                )}
              </div>

              <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-base font-bold text-charcoal">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="rounded-full bg-fire/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-fire">
                            {item.badge}
                          </span>
                        )}
                        {item.spicy && (
                          <span className="flex items-center gap-0.5 text-[11px] text-fire">
                            {Array.from({ length: item.spicy }).map((_, i) => (
                              <Flame key={i} className="size-3" />
                            ))}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-foreground/60">{item.description}</p>
                      <span
                        className="mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                        style={{
                          color: dietColor[item.diet],
                          backgroundColor: `${dietColor[item.diet]}18`,
                        }}
                      >
                        {item.diet === "jain" ? (
                          <Sprout className="size-3" />
                        ) : (
                          <Leaf className="size-3" />
                        )}
                        {dietLabel[item.diet]}
                      </span>
                    </div>
                    <span className="shrink-0 font-display text-base font-bold text-fire">
                      {item.price} AED
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
