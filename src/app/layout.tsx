import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  Instrument_Sans,
  Newsreader,
} from "next/font/google";
import "./globals.css";

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
  title: "AFTHO — Business System Diagnostics",
  description:
    "AFTHO traces what happens between an opportunity entering your business and revenue reaching your account.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${primary.variable} ${editorial.variable} ${technical.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
