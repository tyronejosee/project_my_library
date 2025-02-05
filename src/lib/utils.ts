import { ALL_MEDIA } from "@/config/constants";


export const searchMedia = (query: string) => {
  if (!query) return ALL_MEDIA

  const lowerQuery = query.toLowerCase();

  return ALL_MEDIA.filter((item) =>
    item.folder_name.toLowerCase().includes(lowerQuery) ||
    item.file_name.toLowerCase().includes(lowerQuery)
  );
};
