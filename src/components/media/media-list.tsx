"use client";

import { DefaultTransition } from "@/components/animated/default-transition";
import { MediaMorphingDialog } from "@/components/media/media-morphing-dialog";
import type { Media } from "@/types";

type MediaListProps = {
  results: Media[];
};

function MediaList({ results }: MediaListProps) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
      {results.map((result, index) => (
        <DefaultTransition key={index}>
          <MediaMorphingDialog media={result} />
        </DefaultTransition>
      ))}
    </section>
  );
}

export { MediaList };
