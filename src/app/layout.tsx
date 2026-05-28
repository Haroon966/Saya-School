import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { RouteLoadingOverlay } from "@/components/route-loading-overlay";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Saya School | Quality Education in Islamabad",
    description: siteConfig.description,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--bg)] text-[var(--ink)]">
        <RouteLoadingOverlay />
        <SiteHeader />
        <main className="w-full flex-1 pt-24">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
