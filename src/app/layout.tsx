import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://zeno.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zeno — Local AI Desktop Assistant",
    template: "%s · Zeno",
  },
  description:
    "Zeno is a free, open-source, cross-platform desktop AI assistant powered by Ollama — with voice I/O, local-first privacy, and a plugin system you control.",
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
    title: "Zeno — Local AI Desktop Assistant",
    description:
      "A free, open-source desktop AI assistant powered by Ollama. Voice I/O, local-first privacy, and a plugin system you control.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zeno — Local AI Desktop Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeno — Local AI Desktop Assistant",
    description:
      "A free, open-source desktop AI assistant powered by Ollama. Voice I/O, local-first privacy, and a plugin system you control.",
    images: ["/og-image.png"],
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
  themeColor: "#060809",
  colorScheme: "dark",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
