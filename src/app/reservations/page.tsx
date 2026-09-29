"use client";

import { useState, type FormEvent } from "react";
import { CalendarDays, Clock, Users, CheckCircle2 } from "lucide-react";
import { locations } from "@/data/locations";

const dineInLocations = locations.filter((l) => !l.isOnlineOnly);

export default function ReservationsPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    branch: dineInLocations[0]?.id ?? "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Demo site — no backend. Simulates a network round trip only.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    const branch = dineInLocations.find((l) => l.id === form.branch);
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-5 py-28 text-center sm:px-8">
        <span className="mb-5 flex size-16 items-center justify-center rounded-full bg-fire/10 text-fire">
          <CheckCircle2 className="size-8" />
        </span>
        <h1 className="font-display text-2xl font-bold text-charcoal">
          Table request received
        </h1>
        <p className="mt-3 text-foreground/65">
          Thanks, {form.name.split(" ")[0] || "there"} — we&apos;ve noted your request for{" "}
          {form.guests} guests at <strong>{branch?.name}</strong> on {form.date || "your chosen date"}
          {form.time ? ` at ${form.time}` : ""}. A team member will call{" "}
          {form.phone || "you"} shortly to confirm.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 rounded-full border border-black/10 px-6 py-2.5 text-sm font-semibold text-charcoal hover:border-fire hover:text-fire"
        >
          Book another table
        </button>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-charcoal py-14 text-center text-cream sm:py-16">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
          <CalendarDays className="size-3.5" /> Reservations
        </span>
        <h1 className="font-display text-balance px-5 text-4xl font-bold sm:text-5xl">
          Book a table
        </h1>
        <p className="mx-auto mt-3 max-w-xl px-5 text-cream/70">
          Available at every dine-in branch across Gujarat. We&apos;ll confirm by phone.
        </p>
      </section>

      <section className="mx-auto max-w-xl px-5 py-14 sm:px-8">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-black/8 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" required>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your name"
                className="input"
              />
            </Field>
            <Field label="Phone number" required>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+91 98765 xxxxx"
                className="input"
              />
            </Field>
          </div>

          <Field label="Email (optional)">
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@example.com"
              className="input"
            />
          </Field>

          <Field label="Branch" required>
            <select
              required
              value={form.branch}
              onChange={(e) => update("branch", e.target.value)}
              className="input"
            >
              {dineInLocations.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name} — {l.city}
                </option>
              ))}
            </select>
          </Field>

          <div className="grid gap-5 sm:grid-cols-3">
            <Field label="Date" required>
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-foreground/35" />
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="input pl-10"
                />
              </div>
            </Field>
            <Field label="Time" required>
              <div className="relative">
                <Clock className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-foreground/35" />
                <input
                  required
                  type="time"
                  value={form.time}
                  onChange={(e) => update("time", e.target.value)}
                  className="input pl-10"
                />
              </div>
            </Field>
            <Field label="Guests" required>
              <div className="relative">
                <Users className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-foreground/35" />
                <select
                  value={form.guests}
                  onChange={(e) => update("guests", e.target.value)}
                  className="input pl-10"
                >
                  {Array.from({ length: 10 }).map((_, i) => (
                    <option key={i + 1} value={String(i + 1)}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </Field>
          </div>

          <Field label="Special requests (optional)">
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Jain menu, birthday, high chair needed, etc."
              className="input resize-none"
            />
          </Field>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-fire py-3 text-sm font-semibold text-cream shadow-lg shadow-fire/30 transition-colors hover:bg-fire-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Sending request…" : "Request table"}
          </button>
          <p className="text-center text-xs text-foreground/45">
            This confirms availability by phone — it doesn&apos;t guarantee the table until we call you back.
          </p>
        </form>
      </section>

      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: #fff;
          padding: 0.65rem 0.9rem;
          font-size: 0.9rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.15s;
        }
        .input:focus {
          border-color: var(--brand-fire);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-charcoal">
        {label}
        {required && <span className="text-fire"> *</span>}
      </span>
      {children}
    </label>
  );
}
