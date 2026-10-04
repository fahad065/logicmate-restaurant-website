import Link from "next/link";
import { ChefHat, MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { locations } from "@/data/locations";

export function Footer() {
  const cityCount = new Set(locations.map((l) => l.city)).size;

  return (
    <footer className="border-t border-cream/10 bg-ink text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-full bg-jade text-cream">
              <ChefHat className="size-4" />
            </span>
            <span className="font-display text-lg font-bold text-cream">Canton Kitchen</span>
          </div>
          <p className="text-sm leading-relaxed text-cream/60">
            Pan-Asian, wok-tossed cuisine — {locations.length} locations across{" "}
            {cityCount} cities in California. Fresh, fast, made to order.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="text-cream/60 hover:text-gold">
              <FaInstagram className="size-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-cream/60 hover:text-gold">
              <FaFacebook className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/menu" className="hover:text-gold">Full Menu</Link></li>
            <li><Link href="/locations" className="hover:text-gold">All Locations</Link></li>
            <li><Link href="/about" className="hover:text-gold">Our Story</Link></li>
            <li><Link href="/reservations" className="hover:text-gold">Book a Table</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            Flagship — Los Angeles
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-jade" />
              <span>Arts District, Los Angeles, CA</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-jade" />
              <span>+1 (213) 555-0142</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-jade" />
              <span>hello@cantonkitchen.example</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            Hours
          </h4>
          <p className="text-sm text-cream/60">
            Los Angeles Cloud Kitchen: 11:00 AM – 11:00 PM, daily
            <br />
            Dine-in branches: 11:30 AM – 9:30 PM, daily
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} Canton Kitchen. Demo site for illustrative purposes.
      </div>
    </footer>
  );
}
