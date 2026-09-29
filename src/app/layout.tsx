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
  title: "Wok On Fire — Pan-Asian, Wok-Fired Cuisine",
  description:
    "Wok On Fire — pan-Asian wok-fired cuisine across Dubai and Gujarat. Dine in, order delivery, or book a table online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} h-full`}>
      <head>
        {/* ============================================================
            LogicMate chatbot widget — paste the <script> snippet from
            your chatbot's Channels → Website tab here, right before
            </head>. It self-injects a floating chat bubble, nothing
            else on this page needs to change.

            <script>
              window.LMChatbot = { embedKey: "YOUR_EMBED_KEY", ... };
            </script>
            <script src="https://YOUR-FRONTEND-DOMAIN/chatbot-widget.js" async></script>
           ============================================================ */}
      </head>
      <body className="flex min-h-full flex-col bg-cream font-sans text-[15px] text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
