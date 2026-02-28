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
    default: "Rivtor — Infrastructure for Autonomous Organizations",
    template: "%s | Rivtor"
  },
  description: "Rivtor is the engine that converts a single directive into a fully operational, production-grade digital environment. Deploy globally secure infrastructure in under 60 seconds with The Kernel — deterministic security at the infrastructure layer.",
  keywords: ["Rivtor", "autonomous organizations", "AI agents", "deterministic security", "enterprise infrastructure", "global edge deployment", "data sovereignty", "AI operations", "agent infrastructure"],
  authors: [{ name: "Rivtor" }],
  openGraph: {
    title: "Rivtor — Infrastructure for Autonomous Organizations",
    description: "Rivtor is the engine that converts a single directive into a fully operational, production-grade digital environment. Deploy globally secure infrastructure in under 60 seconds with The Kernel — deterministic security at the infrastructure layer.",
    url: 'https://rivtor.com',
    siteName: 'Rivtor',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rivtor — Infrastructure for Autonomous Organizations",
    description: "Rivtor is the engine that converts a single directive into a fully operational, production-grade digital environment. Deploy globally secure infrastructure in under 60 seconds.",
    creator: '@rivtor',
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
