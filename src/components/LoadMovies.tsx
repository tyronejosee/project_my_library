"use client";

import { useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MediaList from "./MediaList";
import Spinner from "./Spinner";
import { ALL_MOVIES } from "@/config/constants";
import { delay } from "@/lib/utils";
import { useMoviesStore } from "@/store/moviesStore";

export default function LoadMovies() {
  const { movies, setMovies, page, setPage } = useMoviesStore();

  const itemsPerPage = 28;
  const { ref, inView } = useInView();

  const loadMoreMovies = useCallback(async () => {
    await delay(300);
    const startIndex = (page - 1) * itemsPerPage;
    const nextMovies = ALL_MOVIES.slice(startIndex, startIndex + itemsPerPage);

    if (nextMovies.length > 0) {
      setMovies([...movies, ...nextMovies]);
      setPage(page + 1);
    }
  }, [page, movies, setMovies, setPage]);

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
