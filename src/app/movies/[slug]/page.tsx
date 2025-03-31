import { Metadata } from "next";
import { MediaDetail } from "@/components/media";
import { ALL_MOVIES, PROJECT_NAME, SITE_URL } from "@/config/constants";
import { Media } from "@/interfaces";

interface Props {
  params: Promise<{ slug: string }>;
}

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

  const pageUrl = new URL(`/movies/${slug}`, SITE_URL).toString();

  return {
    title: movie.folder_name,
    description: `${movie.file_name} - ${movie.genre} - ${movie.type}`,
    metadataBase: SITE_URL,
    keywords: [
      `"${movie.file_name}", "${movie.folder_name}", "${movie.genre}", "${movie.type}"`,
    ],
    authors: [{ name: PROJECT_NAME, url: SITE_URL.toString() }],
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
