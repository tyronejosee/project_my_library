"use client";

import { Input, Kbd } from "@heroui/react";
import { Loader2, Search } from "lucide-react";
import { memo, useEffect, useState } from "react";

import { ScrollArea } from "@/components/common/scroll-area";
import { MediaMorphingDialog } from "@/components/media/media-morphing-dialog";
import { searchMedia } from "@/lib/utils";
import type { Media } from "@/types";

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SearchResults = memo(
  ({ results, onClose, query }: { results: Media[]; onClose: () => void; query: string }) => {
    if (results.length > 0) {
      return (
        <ScrollArea className="h-[60vh] max-h-125">
          <div className="flex flex-col gap-1">
            {results.map((media, idx) => (
              <MediaMorphingDialog
                key={idx}
                media={media}
                dialogType="search"
                onTriggerClick={onClose}
              />
            ))}
          </div>
        </ScrollArea>
      );
    }

    if (query.trim()) {
      return (
        <div className="py-8 text-center text-muted-foreground">
          No se encontraron resultados para "{query}"
        </div>
      );
    }

    return <div className="py-8 text-center text-muted-foreground">Escribe para buscar...</div>;
  }
);

function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Media[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const search = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const data = searchMedia(query, 20);
        setResults(data);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(search, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-start justify-center pt-20 px-4">
      <div
        className="absolute inset-0 backdrop-blur-md backdrop-saturate-150 bg-overlay/30"
        onClick={onClose}
      />
      <div className="w-full z-50 max-w-2xl relative animate-in fade-in zoom-in-95 duration-200 p-4 backdrop-blur-3xl backdrop-saturate-150 bg-black/50 border border-content2 rounded-3xl">
        <Input
          autoFocus
          type="text"
          size="lg"
          radius="lg"
          variant="underlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar serie o película..."
          classNames={{
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              "!outline-none focus:!outline-none focus-visible:!outline-none outline-transparent",
            ],
            innerWrapper: "bg-transparent",
          }}
          startContent={<Search size={16} className="text-white pointer-events-none shrink-0" />}
          endContent={<Kbd keys={["escape"]}>esc</Kbd>}
        />

        <div className="p-2">
          {loading ? (
            <div className="py-8 text-center text-muted-foreground">
              <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
              Buscando...
            </div>
          ) : (
            <SearchResults results={results} onClose={onClose} query={query} />
          )}
        </div>
      </div>
    </div>
  );
}

export { SearchModal };
