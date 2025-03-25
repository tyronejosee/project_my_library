"use client";
import { ALL_MOVIES } from "@/config/constants";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import MediaList from "@/components/MediaList";
import { Heading } from "@/components/Heading";

const PAGE_SIZE = 28;

export default function MoviesPage() {
  const { data: movies, loading } = useInfiniteScroll(ALL_MOVIES, PAGE_SIZE);

  return (
    <section className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Heading title="Películas" />
      <MediaList results={movies} />
      {loading && <div>Cargando...</div>}
    </section>
  );
}
