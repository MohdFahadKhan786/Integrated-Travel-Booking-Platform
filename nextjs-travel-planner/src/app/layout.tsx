import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ['latin'] });
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Voyage Vista - Integrated Travel Booking Platform",
  description: "This app is powered by Bright Data",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}