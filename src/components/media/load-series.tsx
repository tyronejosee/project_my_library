"use client";

import { useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@/components/common";
import { MediaList } from "@/components/media";
import { useSeriesStore } from "@/store/seriesStore";
import { delay } from "@/lib/utils";
import { ALL_SERIES } from "@/config/constants";

export default function LoadSeries() {
  const { series, setSeries, page, setPage } = useSeriesStore();

  const itemsPerPage = 28;
  const { ref, inView } = useInView();

  const loadMoreSeries = useCallback(async () => {
    await delay(300);
    const startIndex = (page - 1) * itemsPerPage;
    const nextSeries = ALL_SERIES.slice(startIndex, startIndex + itemsPerPage);

    if (nextSeries.length > 0) {
      setSeries([...series, ...nextSeries]);
      setPage(page + 1);
    }
  }, [page, series, setSeries, setPage]);

  useEffect(() => {
    if (inView) {
      loadMoreSeries();
    }
  }, [inView, loadMoreSeries]);

  return (
    <>
      <MediaList results={series} />
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Spinner />
      </div>
    </>
  );
}
