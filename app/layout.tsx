import "@/app/globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "AI recruitment",
    "candidate application simulations",
    "HR software",
    "candidate screening",
    "CV parsing",
    "interview assistant",
    "hiring platform",
    "recruitment automation",
    "talent acquisition",
  ],
  authors: [
    {
      name: "Employcase",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: "Employcase",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Employcase - Candidate simulations for smarter hiring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@employcase",
  },
  icons: {
    icon: [
      { url: "/images/Employcase_logo_small.png", sizes: "16x16", type: "image/png" },
      { url: "/images/Employcase_logo_small.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/images/Employcase_logo_small.png", sizes: "180x180" },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Employcase",
    "description": "AI-powered recruitment platform that streamlines hiring with intelligent CV parsing, candidate analysis, and automated interview assistance.",
    "url": "https://employcase.com",
    "logo": "https://employcase.com/logo.png",
    "foundingDate": "2024",
    "industry": "Human Resources Technology",
    "sameAs": [
      "https://linkedin.com/company/employcase",
      "https://twitter.com/employcase",
      "https://instagram.com/employcase"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "availableLanguage": [
        "en",
        "es",
        "fr",
        "de",
        "it",
        "pt",
        "ru",
        "ar",
        "hi",
        "ja",
        "ko",
        "nl",
        "tr",
        "zh"
      ]
    },
    "service": {
      "@type": "Service",
      "name": "AI-Powered Recruitment Platform",
      "description": "Automated candidate screening, CV parsing, and interview assistance using artificial intelligence.",
      "category": "Software",
      "provider": {
        "@type": "Organization",
        "name": "Employcase"
      }
    }
  };

  return (
    <html lang="en" style={{ colorScheme: "dark" }} className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
