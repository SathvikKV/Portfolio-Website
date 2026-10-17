import type React from "react";
import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "@/components/site/smooth-scroll";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["wdth"],
  display: "swap",
});
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sathvik-vadavatha-portfolio.vercel.app"),
  title: "Sathvik Vadavatha · Software, AI & Data Engineer",
  description: "Sathvik Vadavatha builds data platforms, machine-learning systems and AI agents that hold up in production.",
  openGraph: {
    title: "Sathvik Vadavatha · Software, AI & Data Engineer",
    description: "Data platforms, machine-learning systems and AI agents that hold up in production.",
    images: ["/img/profile/profile.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F6F2",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="grain font-sans">
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
