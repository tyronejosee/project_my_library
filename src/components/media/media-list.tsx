"use client";

import { DefaultTransition } from "@/components/animated/default-transition";
import { MediaCard } from "@/components/media/media-card";
import type { Media } from "@/types";

type MediaListProps = {
  results: Media[];
};

function MediaList({ results }: MediaListProps) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-0">
      {results.map((result, index) => (
        <DefaultTransition key={index}>
          <MediaCard media={result} />
        </DefaultTransition>
      ))}
    </section>
  );
}

export { MediaList };
