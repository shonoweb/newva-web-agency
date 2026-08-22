import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTopButton } from "@/components/layout/BackToTopButton";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { ScrollRestorationManager } from "@/components/ScrollRestorationManager";
import { Opening } from "@/components/Opening";
import { siteConfig } from "@/lib/site";

const pageTitle = `${siteConfig.name} | 飲食店・美容室・個人店のためのWebサイト制作会社`;
const ogTitle = `${siteConfig.name} | ${siteConfig.tagline}`;
const ogDescription =
  "飲食店・美容室・個人店のためのWebサイト制作会社。世界観を伝えるデザインと、集客につながる導線設計であなたのお店をサポートします。";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: pageTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: ogTitle,
    description: ogDescription,
    images: ["/images/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: ["/images/hero.jpg"],
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: "飲食店・美容室・個人店に特化したWebサイト制作会社。",
  areaServed: "JP",
  url: siteConfig.url,
  sameAs: [],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full">
        <ScrollRestorationManager />
        <Opening />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-[14px] focus:bg-dark focus:px-5 focus:py-3 focus:text-white"
        >
          本文へスキップ
        </a>

        <Header />
        {children}
        <Footer />
        <BackToTopButton />
        <MobileCtaBar />
      </body>
    </html>
  );
}
