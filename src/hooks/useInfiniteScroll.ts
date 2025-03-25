"use client";

import { useState, useEffect, useRef } from "react";

export function useInfiniteScroll<T>(items: T[], pageSize: number) {
  const dataRef = useRef<T[]>([]);
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedIndex = localStorage.getItem("lastLoadedIndex");
    const initialIndex = savedIndex ? parseInt(savedIndex, 10) : 0;
    dataRef.current = items.slice(0, initialIndex + pageSize);
    setData(dataRef.current);
  }, [items, pageSize]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (documentHeight - (scrollTop + windowHeight) < 25 && !loading) {
        loadMoreItems();
      }
    };

    const loadMoreItems = () => {
      setLoading(true);
      setTimeout(() => {
        const nextItems = items.slice(
          dataRef.current.length,
          dataRef.current.length + pageSize
        );
        if (nextItems.length > 0) {
          dataRef.current = [...dataRef.current, ...nextItems];
          setData([...dataRef.current]);
          localStorage.setItem(
            "lastLoadedIndex",
            dataRef.current.length.toString()
          );
        }
        setLoading(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, items, pageSize]);

  return { data, loading };
}
