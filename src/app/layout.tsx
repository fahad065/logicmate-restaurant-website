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
            </head>. It self-injects a floating chat bubble, nothing
            else on this page needs to change.

            NOTE: in JSX, a raw <script>...</script> with a JS object body
            doesn't work — { and } inside JSX children are parsed as an
            embedded expression, not literal text, and React throws
            "Objects are not valid as a React child". Use
            dangerouslySetInnerHTML for the inline script body instead,
            exactly as below. The second <script src="..."> tag has no
            text content, so it's fine as plain JSX.
           ============================================================ */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.LMChatbot = {
                embedKey: "6aba8d1b636e2b52cc3f9ae7628f41bf",
                color: "#e07a3f",
                apiUrl: "http://localhost:4000/api/v1",
                botName: "Sunset Cafe Bot",
                welcomeMessage: "Hi! Welcome to Sunset Cafe 🌅 Ask me about our menu, hours, or specials!",
                welcomeMessageAr: "هلا! هذا مساعد Sunset Cafe. اسألني عن القائمة أو أوقات الدوام أو العروض!"
              };
            `,
          }}
        />
        <script src="http://localhost:3000/chatbot-widget.js" async></script>
      </head>
      <body className="flex min-h-full flex-col bg-cream font-sans text-[15px] text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
