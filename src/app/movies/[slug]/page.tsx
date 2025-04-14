import type { Metadata } from "next";
import type { Media } from "@/types";

import { MediaDetail } from "@/components/media";
import { ALL_MOVIES, PROJECT_NAME, PROJECT_DOMAIN } from "@/config/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const movie = ALL_MOVIES.find((movie) => movie.slug === slug);

  if (!movie) {
    return {
      title: "Película no encontrada",
      description:
        "La película que buscas no fue encontrada en nuestro catálogo.",
      robots: "noindex, nofollow",
    };
  }

  const pageUrl = new URL(`/movies/${slug}`, PROJECT_DOMAIN).toString();

  return {
    title: movie.folder_name,
    description: `${movie.file_name} - ${movie.genre} - ${movie.type}`,
    metadataBase: PROJECT_DOMAIN,
    keywords: [
      `"${movie.file_name}", "${movie.folder_name}", "${movie.genre}", "${movie.type}"`,
    ],
    authors: [{ name: PROJECT_NAME, url: PROJECT_DOMAIN.toString() }],
    creator: PROJECT_NAME,
    publisher: PROJECT_NAME,
    robots: "index, follow",
    openGraph: {
      title: movie.folder_name,
      description: `${movie.file_name} - ${movie.genre} - ${movie.type}`,
      url: pageUrl,
      siteName: PROJECT_NAME,
      images: movie.image ? [movie.image] : [],
      type: "video.movie",
    },
    twitter: {
      title: movie.folder_name,
      description: `${movie.file_name} - ${movie.genre} - ${movie.type}`,
      card: "summary_large_image",
      images: movie.image ? [movie.image] : [],
    },
    formatDetection: {
      telephone: false,
    },
  };
}

export default async function MoviesDetail({ params }: Props) {
  const { slug } = await params;
  const movie: Media | undefined = ALL_MOVIES.find(
    (movie) => movie.slug === slug
  );

  if (!movie) {
    return <p className="text-gray-500">Película no encontrada.</p>;
  }

  return <MediaDetail media={movie} />;
}
