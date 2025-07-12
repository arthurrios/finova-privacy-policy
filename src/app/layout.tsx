import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finova - Mobile App Privacy Policy",
  description: "Comprehensive privacy policy for mobile applications. Learn how we collect, use, and protect your personal information in compliance with App Store and Google Play requirements.",
  keywords: ["privacy policy", "mobile app", "data protection", "GDPR", "CCPA", "app store", "google play"],
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Finova - Mobile App Privacy Policy",
    description: "Comprehensive privacy policy for mobile applications",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Finova - Mobile App Privacy Policy",
    description: "Comprehensive privacy policy for mobile applications",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
