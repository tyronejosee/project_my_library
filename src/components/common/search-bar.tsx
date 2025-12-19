"use client";

import { Input } from "@heroui/react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const debounceTimeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    setQuery(searchParams.get("query") || "");
  }, [searchParams]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchValue = e.target.value;
      setQuery(searchValue);

      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }

      debounceTimeoutRef.current = setTimeout(() => {
        const params = new URLSearchParams();
        if (searchValue.trim()) {
          params.set("query", searchValue);
          router.push(`/search?${params.toString()}`);
        } else {
          router.push("/");
        }
      }, 50);
    },
    [router]
  );

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        isClearable
        value={query}
        onChange={handleSearchChange}
        onClear={() => {
          setQuery("");
          router.push("/");
        }}
        className="w-full"
        classNames={{
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90 text-center focus:text-left focus:ml-2",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent md:w-[720px]",
          inputWrapper: [
            "backdrop-blur-xl backdrop-saturate-150 bg-black/50",
            "active:bg-default/70",
            "!cursor-text",
            "border border-neutral-700",
          ],
        }}
        placeholder="Buscar..."
        aria-label="Search"
        radius="lg"
        startContent={
          <Search className="dark:text-white/90 text-slate-400 pointer-events-none shrink-0" />
        }
      />
    </form>
  );
}

export { SearchBar };
