import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rivtor.com'),
  title: {
    default: "Rivtor: The Business Operating System for AI Startups",
    template: "%s | Rivtor"
  },
  description: "Stop building Frankenstein apps. Rivtor is the first end-to-end platform to validate ideas, generate production code, and operate sustainable companies.",
  keywords: ["Rivtor", "SaaS", "app builder", "no-code", "business automation", "AI builder", "startup tools"],
  authors: [{ name: "Rivtor Team" }],
  openGraph: {
    title: "Rivtor: The Business Operating System for AI Startups",
    description: "Stop building Frankenstein apps. Rivtor is the first end-to-end platform to validate ideas, generate production code, and operate sustainable companies.",
    url: 'https://rivtor.com',
    siteName: 'Rivtor',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rivtor: The Business Operating System for AI Startups",
    description: "Stop building Frankenstein apps. Rivtor is the first end-to-end platform to validate ideas, generate production code, and operate sustainable companies.",
    creator: '@rivtor', // Placeholder or real handle if known
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icons/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icons/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icons/icon-144.png', sizes: '144x144', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {children}
      </body>
    </html>
  );
}
