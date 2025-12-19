import type { Metadata } from "next";

import { Heading } from "@/components/common";
import { TVContainer } from "@/components/media";
import { PROJECT_NAME, PROJECT_DOMAIN } from "@/config/constants";

export const metadata: Metadata = {
  title: `Televisión - ${PROJECT_NAME}`,
  description: `Página de Televisión - ${PROJECT_NAME}.`,
  metadataBase: PROJECT_DOMAIN,
  keywords: ["tv", "collection"],
  robots: "index, follow",
  openGraph: {
    title: `Televisión - ${PROJECT_NAME}`,
    description: `Página de Televisión - ${PROJECT_NAME}.`,
    url: "/tv",
    siteName: PROJECT_NAME,
    type: "website",
    images: [
      {
        url: "/seo/tv-banner.webp",
        width: 1280,
        height: 720,
        alt: `${PROJECT_NAME} TV`,
      },
    ],
  },
  twitter: {
    title: `Televisión - ${PROJECT_NAME}`,
    card: "summary_large_image",
    description: `Página de Televisión - ${PROJECT_NAME}.`,
    images: ["/seo/tv-banner.webp"],
  },
};

export default function TVPage() {
  return (
    <main className="max-w-screen-2xl mx-auto text-center py-6 px-6 mt-12">
      <Heading title="Televisión" />
      <TVContainer />
    </main>
  );
}
