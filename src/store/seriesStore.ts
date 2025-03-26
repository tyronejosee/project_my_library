import { create } from "zustand";
import { IMedia } from "@/interfaces/media.interface";

interface SeriesState {
  series: IMedia[];
  page: number;
  setSeries: (series: IMedia[]) => void;
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
