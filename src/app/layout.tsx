import "./globals.css";

import type { Metadata } from "next";
import { Outfit, Roboto_Mono } from "next/font/google";

import {
  TabToolbar,
  Toolbar,
  ScrollToTop,
  BackToTop,
} from "@/components/common";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tyrone's Collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${robotoMono.variable} dark`}
    >
      <body className="antialiased mb-14">
        <ScrollToTop>
          <Toolbar />
          {children}
          <BackToTop />
          <TabToolbar />
        </ScrollToTop>
      </body>
    </html>
  );
}
