import type { Metadata } from "next";

import { HomeContainer, HeroSection } from "@/components/home";
import { PROJECT_NAME, PROJECT_DOMAIN } from "@/config/constants";

export const metadata: Metadata = {
  title: `Inicio - ${PROJECT_NAME}`,
  description: `Página de Inicio - ${PROJECT_NAME}.`,
  metadataBase: PROJECT_DOMAIN,
  keywords: ["home", "collection"],
  robots: "index, follow",
  openGraph: {
    title: `Inicio - ${PROJECT_NAME}`,
    description: `Página de Inicio - ${PROJECT_NAME}.`,
    url: "/",
    siteName: PROJECT_NAME,
    type: "website",
    images: [
      {
        url: "/seo/home-banner.webp",
        width: 1280,
        height: 720,
        alt: `${PROJECT_NAME} Home`,
      },
    ],
  },
  twitter: {
    title: `Inicio - ${PROJECT_NAME}`,
    card: "summary_large_image",
    description: `Página de Inicio - ${PROJECT_NAME}.`,
    images: ["/seo/home-banner.webp"],
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HomeContainer />
    </main>
  );
}
