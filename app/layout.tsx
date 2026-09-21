import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Psychologie Humaine — Comprendre les comportements, les émotions et les relations",
  description:
    "Un e-book en 35 chapitres pour comprendre les mécanismes psychologiques humains : émotions, comportements, mensonge, manipulation, confiance en soi et relations sociales.",
  openGraph: {
    title: "Psychologie Humaine",
    description:
      "Comprendre les comportements, les émotions, la manipulation, le mensonge et développer une confiance en soi solide.",
    url: siteUrl,
    siteName: "Psychologie Humaine",
    images: [{ url: "/images/book-cover.png", width: 1024, height: 1365 }],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychologie Humaine",
    description:
      "Comprendre les comportements, les émotions, la manipulation, le mensonge et développer une confiance en soi solide.",
    images: ["/images/book-cover.png"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body className="bg-ink text-parchment font-body antialiased selection:bg-silver/30">
        {children}
      </body>
    </html>
  );
}
