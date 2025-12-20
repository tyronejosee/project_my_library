import type { Metadata } from "next";

import { Heading } from "@/components/common/heading";
import { LoadSeries } from "@/components/media/load-series";
import { PROJECT_DOMAIN, PROJECT_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Series - ${PROJECT_NAME}`,
  description: `Página de Series - ${PROJECT_NAME}.`,
  metadataBase: PROJECT_DOMAIN,
  keywords: ["series", "collection"],
  robots: "index, follow",
  openGraph: {
    title: `Series - ${PROJECT_NAME}`,
    description: `Página de Series - ${PROJECT_NAME}.`,
    url: "/series",
    siteName: PROJECT_NAME,
    type: "website",
    images: [
      {
        url: "/seo/series-banner.webp",
        width: 1280,
        height: 720,
        alt: `${PROJECT_NAME} Series`,
      },
    ],
  },
  twitter: {
    title: `Series - ${PROJECT_NAME}`,
    card: "summary_large_image",
    description: `Página de Series - ${PROJECT_NAME}.`,
    images: ["/seo/series-banner.webp"],
  },
};

export default function SeriesPage() {
  return (
    <main className="max-w-screen-2xl mx-auto text-center py-6 px-6 md:mt-12">
      <Heading title="Series" />
      <LoadSeries />
    </main>
  );
}
