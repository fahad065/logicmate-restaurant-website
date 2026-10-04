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
        {/* ============================================================
            LogicMate chatbot widget — paste the <script> snippet from
            your chatbot's Channels → Website tab here, right before
            </head>. On a plain HTML page, WordPress, Shopify, Wix,
            Squarespace, or any non-React site, paste it in exactly as
            copied — it works immediately, no changes needed.

            This demo site is built with Next.js/React, which has one
            React-specific quirk: a raw <script>...</script> tag with a
            JS object body can't be pasted as literal JSX children,
            because JSX parses { and } as an embedded expression rather
            than text, and React throws "Objects are not valid as a
            React child" if you try. This is NOT something real
            customers hit — it only applies here because this demo
            happens to be a React app. To paste your real snippet here,
            wrap just the inline <script> in dangerouslySetInnerHTML:

            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.LMChatbot = { embedKey: "YOUR_EMBED_KEY", ... };
                `,
              }}
            />
            <script src="https://YOUR-FRONTEND-DOMAIN/chatbot-widget.js" async></script>

            Keep your real embedKey and config out of version control —
            paste it locally for the recording, don't commit it.
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
