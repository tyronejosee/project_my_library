import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ALL_MEDIA, ALL_MOVIES, ALL_SERIES } from "@/config/constants";
import { MinimalDisk } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const searchMedia = (query: string) => {
  const lowerQuery = query.toLowerCase();

  return ALL_MEDIA.filter((item) => {
    return (
      (item.folder_name && item.folder_name.toLowerCase().includes(lowerQuery)) ||
      (item.file_name && item.file_name.toLowerCase().includes(lowerQuery))
    );
  });
};

export const getDiskSummary = (disks: MinimalDisk[]) => {
  const total = Math.floor(disks.reduce((sum, disk) => sum + disk.total, 0));
  const used = Math.floor(disks.reduce((sum, disk) => sum + disk.used, 0));
  const free = Math.floor(disks.reduce((sum, disk) => sum + disk.free, 0));
  const percentUsed = total > 0 ? Math.round((used / total) * 100) : 0;
  return { total, used, free, percentUsed };
};

export const normalizeString = (input: string) => {
  return input
    .replace(/-\d{4,}/g, "")
    .toLowerCase()
    .replace(/[-]/g, "+");
};

export const normalizeStringImdb = (input: string) => {
  return input
    .replace(/-\d{4,}/g, "")
    .toLowerCase()
    .replace(/[-]/g, "%20");
};

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getRandomMedia = () => {
  const randomIndex = Math.floor(Math.random() * ALL_MEDIA.length);
  return ALL_MEDIA[randomIndex];
};

export const getMoviesByGenre = (genre: string, count?: number) => {
  if (!genre || typeof genre !== "string") {
    throw new Error("Invalid genre parameter");
  }

  const movies = ALL_MOVIES.filter((movie) => movie.genre.toLowerCase() === genre.toLowerCase());

  if (movies.length === 0) {
    return [];
  }

  if (count) {
    return shuffleArray(movies).slice(0, count);
  } else {
    return movies;
  }
};

export const getSeriesByGenre = (genre: string, count?: number) => {
  const series = ALL_SERIES.filter((serie) => serie.genre === genre);
  return shuffleArray(series).slice(0, count);
};
