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
    <section className="grid grid-cols-8 gap-2 px-14">
      {results.map((result, index) => (
        <MediaCard key={index} media={result} widthImage={165} />
      ))}
    </section>
  );
}
