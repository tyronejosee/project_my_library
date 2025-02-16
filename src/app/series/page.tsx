"use client";
import { ALL_SERIES } from "@/config/constants";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import MediaList from "@/components/MediaList";
import { Heading } from "@/components/Heading";

const PAGE_SIZE = 28;

export default function SeriesPage() {
  const {data: series, loading} = useInfiniteScroll(ALL_SERIES, PAGE_SIZE);

  return (
    <section className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Heading title="Series" />
      <MediaList results={series} />
      {loading && <div>Cargando...</div>}
    </section>
  );
}
