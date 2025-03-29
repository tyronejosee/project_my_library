"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@heroui/react";

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = useState(false);
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setQuery(searchParams.get("query") || "");
    }
  }, [searchParams, isClient]);

  if (!isClient) return null;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setQuery(searchValue);

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      const params = new URLSearchParams();
      if (searchValue.trim().length > 4) {
        params.set("query", searchValue);
      }
      router.push(`/search?${params.toString()}`);
    }, 100);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        value={query}
        onChange={handleSearchChange}
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
          <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
    </form>
  );
}
