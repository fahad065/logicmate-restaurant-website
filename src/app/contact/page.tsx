"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Demo site — no backend. Simulates a network round trip only.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <div>
      <section className="bg-ink py-14 text-center text-cream sm:py-16">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
          <Mail className="size-3.5" /> Get in Touch
        </span>
        <h1 className="font-display text-balance px-5 text-4xl font-bold sm:text-5xl">
          We&apos;d love to hear from you
        </h1>
        <p className="mx-auto mt-3 max-w-xl px-5 text-cream/70">
          Franchise enquiries, feedback, catering — send us a message and we&apos;ll get back
          to you within one business day.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-bold text-ink">Contact details</h2>
            <div className="mt-5 space-y-5">
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-jade/10 text-jade">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Head Office</p>
                  <p className="text-sm text-foreground/60">
                    Arts District, Los Angeles, CA
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-jade/10 text-jade">
                  <Phone className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Phone</p>
                  <a href="tel:+12135550142" className="text-sm text-foreground/60 hover:text-jade">
                    +1 (213) 555-0142
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-jade/10 text-jade">
                  <Mail className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <a
                    href="mailto:hello@cantonkitchen.example"
                    className="text-sm text-foreground/60 hover:text-jade"
                  >
                    hello@cantonkitchen.example
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-black/10 text-foreground/60 hover:border-jade hover:text-jade"
              >
                <FaInstagram className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-full border border-black/10 text-foreground/60 hover:border-jade hover:text-jade"
              >
                <FaFacebook className="size-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-black/8 bg-white p-10 text-center">
                <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-jade/10 text-jade">
                  <CheckCircle2 className="size-7" />
                </span>
                <h3 className="font-display text-lg font-bold text-ink">
                  Message sent
                </h3>
                <p className="mt-2 max-w-sm text-sm text-foreground/60">
                  Thanks for reaching out — someone from our team will reply within one
                  business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-black/10 px-5 py-2 text-sm font-semibold text-ink hover:border-jade hover:text-jade"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-black/8 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-ink">
                      Name <span className="text-jade">*</span>
                    </span>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-jade"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-ink">
                      Email <span className="text-jade">*</span>
                    </span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-jade"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink">
                    Subject <span className="text-jade">*</span>
                  </span>
                  <input
                    required
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    placeholder="What's this about?"
                    className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-jade"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink">
                    Message <span className="text-jade">*</span>
                  </span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us a bit more..."
                    className="w-full resize-none rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-jade"
                  />
                </label>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-jade py-3 text-sm font-semibold text-cream shadow-lg shadow-jade/30 transition-colors hover:bg-jade-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
