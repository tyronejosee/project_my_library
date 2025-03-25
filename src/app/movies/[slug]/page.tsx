import { Metadata } from "next";
import { MediaDetail } from "@/components/MediaDetail";
import { ALL_MOVIES } from "@/config/constants";
import { IMedia } from "@/interfaces/media.interface";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const movie = ALL_MOVIES.find((movie) => movie.slug === slug);

  if (!movie) {
    return {
      title: "Película no encontrada",
    };
  }

  return {
    title: movie.folder_name,
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"
    ),
    openGraph: {
      title: movie.folder_name,
      images: movie.image ? [movie.image] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: movie.folder_name,
      images: movie.image ? [movie.image] : [],
    },
  };
}

export default async function MoviesDetail({ params }: Props) {
  const { slug } = await params;
  const movie: IMedia | undefined = ALL_MOVIES.find(
    (movie) => movie.slug === slug
  );

  if (!movie) {
    return <p className="text-gray-500">Película no encontrada.</p>;
  }

  return <MediaDetail media={movie} />;
}
