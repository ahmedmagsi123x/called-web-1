import type { Metadata } from "next";
import {
  Anton,
  Poppins,
  Caveat,
  Hanken_Grotesk,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

// Big condensed poster face — hero headline + intro wordmark.
const display = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Geometric headings ("OUR SERVICES", statement band) — bold + italic.
const heading = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

// Handwritten accent band.
const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono-coord",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meridianmedia.co"),
  title: {
    default: "Meridian Media — Become the name your market trusts first",
    template: "%s — Meridian Media",
  },
  description:
    "Meridian is a full-service branding agency for real estate operators — strategy, creative, content, and production that turn expertise into recognition, trust, and market demand. Book a call.",
  openGraph: {
    title: "Meridian Media — Become the name your market trusts first",
    description:
      "Done-for-you content that makes you the obvious authority in your market.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${heading.variable} ${hand.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
