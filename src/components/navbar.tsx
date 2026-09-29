"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Flame, Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-charcoal text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-full bg-fire text-cream">
            <Flame className="size-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-wide">
            Wok On Fire
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-gold" : "text-cream/80 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+97145550192"
            className="flex items-center gap-1.5 text-sm text-cream/80 hover:text-gold"
          >
            <Phone className="size-3.5" /> Call Nearest Branch
          </a>
          <Link
            href="/reservations"
            className="rounded-full bg-fire px-5 py-2 text-sm font-semibold text-cream shadow-sm shadow-fire/40 transition-colors hover:bg-fire-dark"
          >
            Book a Table
          </Link>
        </div>

        <button
          className="text-cream md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-charcoal px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium ${
                  pathname === link.href ? "text-gold" : "text-cream/85"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reservations"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-fire px-5 py-2.5 text-center text-sm font-semibold text-cream"
            >
              Book a Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
