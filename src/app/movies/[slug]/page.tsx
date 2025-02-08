"use client";
import { useParams } from "next/navigation";
import { IMedia } from "@/interfaces/media.interface";
import { ALL_MOVIES } from "@/config/constants";
import { MediaDetail } from "@/components/MediaDetail";

export default function MoviesDetail() {
  const { slug } = useParams();
  const movie: IMedia | undefined = ALL_MOVIES.find(
    (movie) => movie.slug === slug
  );

  if (!movie) {
    return <p className="text-gray-500">Película no encontrada.</p>;
  }

  return (
    <MediaDetail media={movie}/>
  );
}
