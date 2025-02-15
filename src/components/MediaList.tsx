"use client";
import MediaCard from "./MediaCard";
import { IMedia } from "@/interfaces/media.interface";

interface Props {
  results: IMedia[];
}

export default function MediaList({ results }: Props) {
  if (results.length === 0) {
    return <p className="text-gray-500">No se encontraron resultados.</p>;
  }

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-0">
      {results.map((result, index) => (
        <MediaCard key={index} media={result} />
      ))}
    </section>
  );
}
