import fs from "fs";
import path from "path";

// Lets the real, exact LogicMate embed snippet (copied verbatim from the
// chatbot's Channels → Website tab) be pasted as plain text — no JSX, no
// dangerouslySetInnerHTML, nothing React-specific to understand — into a
// gitignored local file. This server component reads that file at
// render/build time, pulls the inline script's JS body and the widget
// script's src out of it, and renders the two real <script> elements
// JSX actually needs. See README.md for the one-step paste instructions.
const EMBED_FILE = path.join(process.cwd(), "chatbot-embed.local.txt");

export interface ChatbotEmbed {
  inlineScript: string | null;
  widgetSrc: string | null;
}

export function readChatbotEmbed(): ChatbotEmbed {
  let raw = "";
  try {
    raw = fs.readFileSync(EMBED_FILE, "utf8");
  } catch {
    return { inlineScript: null, widgetSrc: null };
  }

  // The inline config script — a <script> tag with no src attribute.
  const inlineMatch = raw.match(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/i);
  // The widget loader — a <script src="..."> tag.
  const srcMatch = raw.match(/<script[^>]*\bsrc=["']([^"']+)["'][^>]*>/i);

  return {
    inlineScript: inlineMatch ? inlineMatch[1].trim() : null,
    widgetSrc: srcMatch ? srcMatch[1] : null,
  };
}
