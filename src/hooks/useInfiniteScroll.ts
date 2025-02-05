import { useState, useEffect } from "react";

export function useInfiniteScroll<T>(items: T[], pageSize: number) {
  const [data, setData] = useState<T[]>(items.slice(0, pageSize));
  const [loading, setLoading] = useState(false);

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
        const nextItems = items.slice(data.length, data.length + pageSize);
        if (nextItems.length > 0) {
          setData((prevData) => [...prevData, ...nextItems]);
        }
        setLoading(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data, loading, items, pageSize]);

  return { data, loading };
}
