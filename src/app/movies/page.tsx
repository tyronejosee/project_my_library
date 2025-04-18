import type { Metadata } from "next";

import { Heading } from "@/components/common";
import { LoadMovies } from "@/components/media";
import { ALL_MOVIES, PROJECT_NAME, PROJECT_DOMAIN } from "@/config/constants";

export const metadata: Metadata = {
  title: `Películas - ${PROJECT_NAME}`,
  description: `Página de Películas - ${PROJECT_NAME}.`,
  metadataBase: PROJECT_DOMAIN,
  keywords: ["movies", "collection"],
  robots: "index, follow",
  openGraph: {
    title: `Películas - ${PROJECT_NAME}`,
    description: `Página de Películas - ${PROJECT_NAME}.`,
    url: "/movies",
    siteName: PROJECT_NAME,
    type: "website",
    images: [
      {
        url: "/seo/movies-banner.webp",
        width: 1280,
        height: 720,
        alt: `${PROJECT_NAME} Movies`,
      },
    ],
  },
  twitter: {
    title: `Películas - ${PROJECT_NAME}`,
    card: "summary_large_image",
    description: `Página de Películas - ${PROJECT_NAME}.`,
    images: ["/seo/movies-banner.webp"],
  },
};

export default async function MoviesPage() {
  const data = ALL_MOVIES;

  return (
    <main className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Heading title="Películas" />
      <LoadMovies data={data} />
    </main>
  );
}
