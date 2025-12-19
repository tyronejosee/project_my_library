"use client";

import { Select, SelectItem } from "@heroui/react";
import { useRouter } from "next/navigation";

import { GENRE_CHOICES } from "@/config/constants";

function MediaToolbar() {
  const router = useRouter();

  const handleGenreChange = (value: string) => {
    router.push(`/movies?genre=${value}`);
  };

  return (
    <aside className="pb-8">
      <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Genre field */}
        <Select
          size="sm"
          label="Select genre"
          className="w-full md:w-1/4"
          onChange={(e) => handleGenreChange(e.target.value)}
        >
          {GENRE_CHOICES.map((genre) => (
            <SelectItem key={genre.key}>{genre.name}</SelectItem>
          ))}
        </Select>

        {/* Year field */}
        {/* <Select
          size="sm"
          label="Select year"
          className="w-full md:w-1/4"
          onChange={(e) => handleYearChange(e.target.value)}
        >
          {YEAR_CHOICES.map((year) => (
            <SelectItem key={year.key} value={year.name}>
              {year.name}
            </SelectItem>
          ))}
        </Select> */}

        {/* Sort_by field */}
        {/* <Select
          size="sm"
          label="Sort by"
          className="w-full md:w-1/4"
          onChange={(e) => handleSortChange(e.target.value)}
        >
          {SORT_CHOICES.map((choices) => (
            <SelectItem key={choices.key} value={choices.key}>
              {choices.label}
            </SelectItem>
          ))}
        </Select> */}
      </nav>
    </aside>
  );
}

export { MediaToolbar };
