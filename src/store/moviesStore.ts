import { Media } from "@/types";
import { create } from "zustand";

interface MoviesState {
  movies: Media[];
  page: number;
  setMovies: (movies: Media[]) => void;
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
