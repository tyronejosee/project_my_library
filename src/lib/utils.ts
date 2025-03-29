import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ALL_MEDIA, ALL_MOVIES, ALL_SERIES } from "@/config/constants";
import { MinimalDisk } from "@/interfaces";

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
  if (!query) return shuffleArray(ALL_MEDIA).slice(0, 16);

  const lowerQuery = query.toLowerCase();

  return ALL_MEDIA.filter((item) => {
    return (
      (item.folder_name &&
        item.folder_name.toLowerCase().includes(lowerQuery)) ||
      (item.file_name && item.file_name.toLowerCase().includes(lowerQuery)) ||
      (item.genre && item.genre.toLowerCase().includes(lowerQuery)) ||
      (item.location && item.location.toLowerCase().includes(lowerQuery))
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

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getRandomMedia = () => {
  const randomIndex = Math.floor(Math.random() * ALL_MEDIA.length);
  return ALL_MEDIA[randomIndex];
};

export const getMoviesByGenre = (genre: string, count: number) => {
  const movies = ALL_MOVIES.filter((movie) => movie.genre === genre);
  return shuffleArray(movies).slice(0, count);
};

export const getSeriesByGenre = (genre: string, count: number) => {
  const series = ALL_SERIES.filter((serie) => serie.genre === genre);
  return shuffleArray(series).slice(0, count);
};
