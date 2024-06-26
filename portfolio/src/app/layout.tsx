import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react"

const Circular_Std = localFont({ src: "./CircularStd-Book.ttf" });

export const metadata: Metadata = {
  title: "⚡️ Srinath Hariharan",
  description: "Srinath's home on the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Circular_Std.className}>{children}</body>
      <GoogleAnalytics gaId="G-HQ4CNKT8M0" />
    </html>
  );
}
