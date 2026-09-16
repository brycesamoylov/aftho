import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  Instrument_Sans,
  Newsreader,
} from "next/font/google";
import "./globals.css";
import "./reposition.css";

const primary = Instrument_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const editorial = Newsreader({
  variable: "--font-editorial",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const technical = IBM_Plex_Mono({
  variable: "--font-technical",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AFTHO | Find Where Calls and Jobs Are Getting Lost",
  description:
    "AFTHO helps local service businesses find where calls, quote requests, and follow-up are getting missed, then helps fix the process.",
  icons: {
    icon: "/aftho-logo.png",
    apple: "/aftho-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-US"
      className={`${primary.variable} ${editorial.variable} ${technical.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
