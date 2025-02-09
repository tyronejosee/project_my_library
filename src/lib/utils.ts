import { ALL_MEDIA } from "@/config/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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

  return ALL_MEDIA.filter((item) =>
    item.folder_name.toLowerCase().includes(lowerQuery) ||
    item.file_name.toLowerCase().includes(lowerQuery)
  );
};
