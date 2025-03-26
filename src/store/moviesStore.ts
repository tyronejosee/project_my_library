import { create } from "zustand";
import { IMedia } from "@/interfaces/media.interface";

interface MoviesState {
  movies: IMedia[];
  page: number;
  setMovies: (movies: IMedia[]) => void;
  setPage: (page: number) => void;
  resetMovies: () => void;
}

export const useMoviesStore = create<MoviesState>((set) => ({
  movies: [],
  page: 1,
  setMovies: (movies) => set({ movies }),
  setPage: (page) => set({ page }),
  resetMovies: () => set({ movies: [], page: 1 }),
}));
