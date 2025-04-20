import { create } from "zustand";
import { Media } from "@/types";

interface SeriesState {
  series: Media[];
  page: number;
  setSeries: (series: Media[]) => void;
  setPage: (page: number) => void;
  resetSeries: () => void;
}

export const useSeriesStore = create<SeriesState>((set) => ({
  series: [],
  page: 1,
  setSeries: (series) => set({ series }),
  setPage: (page) => set({ page }),
  resetSeries: () => set({ series: [], page: 1 }),
}));
