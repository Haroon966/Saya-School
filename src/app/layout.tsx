import type { Metadata } from "next";
import "./globals.css";
import { BackToTop } from "@/components/BackToTop";
import { RouteLoadingOverlay } from "@/components/route-loading-overlay";
import { ScrollRevealProvider } from "@/components/scroll-reveal-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dmMono, dmSans, playfair } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";

const ogImageUrl = siteConfig.ogImagePath;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Saya School | Quality Education in Islamabad",
    template: "%s | Saya School",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.domain,
    title: "Saya School | Quality Education in Islamabad",
    description: siteConfig.description,
    siteName: "Saya School",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Saya School — quality education in Islamabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saya School | Quality Education in Islamabad",
    description: siteConfig.description,
    images: [ogImageUrl],
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
      className={`${dmSans.variable} ${dmMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--bg)] text-[var(--ink)]">
        <RouteLoadingOverlay />
        <SiteHeader />
        <main className="relative w-full flex-1 pt-[7.25rem]">
          <ScrollRevealProvider>{children}</ScrollRevealProvider>
        </main>
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
