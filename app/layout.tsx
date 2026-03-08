import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RouteTransition from "@/components/route-transition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedothmanportfolio.vercel.app"),
  title: "Ahmed M. Othman | Portfolio",
  description: "Petroleum Engineering Student | Reservoir & Well Planning | SPE Vice President",
  openGraph: {
    title: "Ahmed M. Othman | Portfolio",
    description: "Petroleum Engineering Student | Reservoir & Well Planning | SPE Vice President",
    url: "https://ahmedothmanportfolio.vercel.app",
    siteName: "Ahmed M. Othman Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ahmed M. Othman",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed M. Othman | Portfolio",
    description: "Petroleum Engineering Student | Reservoir & Well Planning | SPE Vice President",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RouteTransition>{children}</RouteTransition>
      </body>
    </html>
  );
}
