import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ALL_MEDIA } from "@/config/constants";
import { IMinimalDisk } from "@/interfaces/disk.interface";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const shuffleArray = <T>(array: T[]): T[] => {
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

export const getDiskSummary = (disks: IMinimalDisk[]) => {
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
