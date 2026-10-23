import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://zeno.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zeno — A local AI assistant for your desktop",
    template: "%s · Zeno",
  },
  description:
    "Zeno is a free, open-source desktop AI assistant that runs on your own Ollama models. Voice in, voice out, encrypted local history, and a plugin system you control.",
  keywords: [
    "Zeno",
    "local AI assistant",
    "Ollama",
    "offline AI",
    "desktop assistant",
    "open source AI",
    "privacy-first AI",
    "voice assistant",
  ],
  authors: [{ name: "Zeno" }],
  creator: "Zeno",
  applicationName: "Zeno",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Zeno",
    title: "Zeno — A local AI assistant for your desktop",
    description:
      "A free, open-source desktop assistant that runs on local Ollama models. No account, no cloud, no telemetry.",
  },
  twitter: {
    card: "summary",
    title: "Zeno — A local AI assistant for your desktop",
    description:
      "A free, open-source desktop assistant that runs on local Ollama models. No account, no cloud, no telemetry.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5f0",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Zeno",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Windows, macOS, Linux",
  description:
    "A cross-platform desktop AI assistant powered by Ollama, featuring voice I/O, local-first privacy, and an extensible plugin system.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  license: "https://opensource.org/licenses/MIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/*
          Security headers (CSP, X-Frame-Options, Referrer-Policy, etc.) are
          set as real HTTP response headers in next.config.ts rather than
          meta tags — meta tags can't enforce frame-ancestors or several
          other directives that browsers only honor over HTTP.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
