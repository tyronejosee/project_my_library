"use client";

import { MediaCard } from "@/components/media";
import { Media } from "@/interfaces";

interface Props {
  results: Media[];
}

export default function MediaList({ results }: Props) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-0">
      {results.map((result, index) => (
        <MediaCard key={index} media={result} />
      ))}
    </section>
  );
}
