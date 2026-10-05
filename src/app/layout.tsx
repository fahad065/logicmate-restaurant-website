import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { readChatbotEmbed } from "@/lib/chatbot-embed";

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
  // See README.md — paste your real embed snippet, exactly as copied
  // from the chatbot's Channels → Website tab, into chatbot-embed.local.txt
  // at the project root (gitignored, never committed). Nothing to edit
  // here: this reads that file and renders the two real <script> tags
  // JSX needs, so there's no JSX/dangerouslySetInnerHTML to deal with.
  const { inlineScript, widgetSrc } = readChatbotEmbed();

  return (
    <html lang="en" className={`${body.variable} ${display.variable} h-full`}>
      <head>
        {inlineScript && <script dangerouslySetInnerHTML={{ __html: inlineScript }} />}
        {widgetSrc && <script src={widgetSrc} async />}
      </head>
      <body className="flex min-h-full flex-col bg-cream font-sans text-[15px] text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
