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
        {/*
          LogicMate Chatbot Widget — paste your embed code here, exactly as
          copied from the chatbot's Channels → Website tab in the dashboard.
          It's a single, self-closing <script> tag with no inline code, so
          it pastes directly as JSX with nothing to edit, no
          dangerouslySetInnerHTML, no escaping — paste it right below this
          comment and it just works:

          <script
            src="http://localhost:3000/chatbot-widget.js"
            data-embed-key="YOUR_EMBED_KEY"
            data-api-url="http://localhost:4000/api/v1"
            data-color="#7c3aed"
            async
          />
        */}
      </head>
      <body className="flex min-h-full flex-col bg-cream font-sans text-[15px] text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
