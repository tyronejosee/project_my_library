"use client";

import type { Media } from "@/types";

import { useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@/components/common";
import { MediaList } from "@/components/media";
import { useMoviesStore } from "@/store/movies-store";
import { delay } from "@/lib/utils";

type Props = {
  data: Media[];
  isGenre?: boolean;
};

export default function LoadMovies({ data, isGenre }: Props) {
  const { movies, setMovies, page, setPage, resetMovies } = useMoviesStore();

  const itemsPerPage = 28;
  const { ref, inView } = useInView();

  const loadMoreMovies = useCallback(async () => {
    await delay(300);
    const startIndex = (page - 1) * itemsPerPage;
    const nextMovies = data.slice(startIndex, startIndex + itemsPerPage);

    if (nextMovies.length > 0) {
      setMovies([...movies, ...nextMovies]);
      setPage(page + 1);
    }
  }, [data, page, movies, setMovies, setPage]);

  useEffect(() => {
    if (isGenre) {
      resetMovies();
    }
  }, [isGenre, resetMovies]);

  useEffect(() => {
    if (inView) {
      loadMoreMovies();
    }
  }, [inView, loadMoreMovies]);

  return (
    <>
      <MediaList results={movies} />
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Spinner />
      </div>
    </>
  );
}
