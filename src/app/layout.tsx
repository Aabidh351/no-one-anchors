import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Meridian Ship Supply — Marine Provisioning & Ship Chandlery",
  description:
    "Marine provisioning, deck and engine stores, safety equipment, and port agency services across a five-port network, available around the clock.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}