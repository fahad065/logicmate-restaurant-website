import { Flame, Users, Leaf, Award } from "lucide-react";
import { SafeImg } from "@/components/safe-img";
import { locations, cities } from "@/data/locations";

const VALUES = [
  {
    icon: Flame,
    title: "Fired, Not Steamed",
    desc: "Every wok is lit before service starts and stays lit until the last order — that's non-negotiable across every branch.",
  },
  {
    icon: Leaf,
    title: "A Real Jain Menu",
    desc: "Not two token dishes — a full no-onion-no-garlic menu at every location, built for families who eat together.",
  },
  {
    icon: Users,
    title: "Family-Run, Still",
    desc: "We started as one kitchen. Every branch since has been opened by people who trained in that same kitchen.",
  },
  {
    icon: Award,
    title: "Consistency Over Everything",
    desc: "The Dragon Chicken in Dubai tastes the same as the one in Surat. That's the whole point of a chain done right.",
  },
];

const TIMELINE = [
  { year: "2014", text: "Opened our first kitchen — a 400 sq ft space in Surat, Gujarat." },
  { year: "2017", text: "Expanded to Ahmedabad and Vadodara as word spread beyond Surat." },
  { year: "2020", text: "Opened our first Rajkot and Bhavnagar branches, plus Anand." },
  { year: "2022", text: "Launched our Dubai cloud kitchen — our first location outside India." },
  { year: "2024", text: "Crossed 13 locations across Dubai and 7 Gujarat cities." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-charcoal text-cream">
        <SafeImg
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=70"
          alt="Chef cooking in a wok kitchen"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/50" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            Our Story
          </span>
          <h1 className="font-display text-balance text-4xl font-bold sm:text-5xl">
            From one small kitchen to {locations.length} locations, two countries
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-cream/75">
            Wok On Fire started with a simple idea: pan-Asian street food, cooked the
            way it&apos;s meant to be — fast, hot, and fired fresh for every single order.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-fire">
              How it started
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold text-charcoal">
              A wok, a flame, and a family recipe book
            </h2>
            <p className="mt-4 text-foreground/65">
              In 2014, our founders opened a 400 sq ft kitchen in Surat with three
              recipes and one promise — everything gets fired hot, to order, no
              exceptions. No steaming trays, no pre-cooked batches sitting under a
              heat lamp.
            </p>
            <p className="mt-4 text-foreground/65">
              That promise is still why every branch — from our original Surat
              kitchen to our Dubai cloud kitchen covering Business Bay, Downtown and
              DIFC — cooks the exact same way today.
            </p>
          </div>
          <SafeImg
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=70"
            alt="Wok-fired noodles being tossed"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="bg-cream-soft py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-fire">
              What We Stand For
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
              Four things that never change
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-black/8 bg-white p-6 text-center"
              >
                <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-fire/10 text-fire">
                  <v.icon className="size-6" />
                </span>
                <h3 className="font-display text-base font-bold text-charcoal">{v.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-fire">
            Our Journey
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
            {locations.length} locations, {cities.length} cities, one kitchen at a time
          </h2>
        </div>
        <div className="space-y-0">
          {TIMELINE.map((t, i) => (
            <div key={t.year} className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-fire font-display text-sm font-bold text-cream">
                  {t.year.slice(2)}
                </span>
                {i < TIMELINE.length - 1 && (
                  <span className="my-1 w-px flex-1 bg-black/10" />
                )}
              </div>
              <div className="pb-10">
                <p className="font-display text-base font-bold text-charcoal">{t.year}</p>
                <p className="mt-1 text-sm text-foreground/60">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-16 text-cream">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Flame className="mx-auto mb-5 size-9 animate-flicker text-fire" />
          <p className="font-display text-balance text-2xl font-semibold leading-relaxed sm:text-3xl">
            &ldquo;We never wanted to be the biggest chain. We wanted to be the one
            where every branch still tastes like the first kitchen we opened.&rdquo;
          </p>
          <p className="mt-5 text-sm font-semibold text-gold">— Founders, Wok On Fire</p>
        </div>
      </section>
    </div>
  );
}
