import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Canton Kitchen — Pan-Asian, Wok-Tossed Cuisine",
  description:
    "Canton Kitchen — pan-Asian, wok-tossed cuisine across California. Dine in, order delivery, or book a table online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} h-full`}>
      <head>
        {/* ↓↓↓ Paste your LogicMate chatbot embed snippet on the line below — OUTSIDE this comment, not inside it. It's a single <script> tag copied verbatim from the Channels → Website tab, nothing to edit. ↓↓↓ */}

        {/* ↑↑↑ Paste it above this line, not between these two comments. ↑↑↑ */}
      </head>
      <body className="flex min-h-full flex-col bg-cream font-sans text-[15px] text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
