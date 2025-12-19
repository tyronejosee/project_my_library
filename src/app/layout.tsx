import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/app/global.css";
import {
  BackToTop,
  TabToolbar,
  Toolbar
} from "@/components/common";

const bricolageGrotesque = localFont({
  src: [
    { path: "../../public/fonts/bricolage-grotesque-extralight.woff2", weight: "100" },
    { path: "../../public/fonts/bricolage-grotesque-light.woff2", weight: "300" },
    { path: "../../public/fonts/bricolage-grotesque-regular.woff2", weight: "400" },
    { path: "../../public/fonts/bricolage-grotesque-medium.woff2", weight: "500" },
    { path: "../../public/fonts/bricolage-grotesque-semibold.woff2", weight: "600" },
    { path: "../../public/fonts/bricolage-grotesque-bold.woff2", weight: "700" },
    { path: "../../public/fonts/bricolage-grotesque-extrabold.woff2", weight: "800" },
  ],
  variable: "--font-bricolage-grotesque",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tyrone's Collection",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} dark`}
    >
      <body className="antialiased mb-14">
        <Toolbar />
        {children}
        <BackToTop />
        <TabToolbar />
      </body>
    </html>
  );
}
