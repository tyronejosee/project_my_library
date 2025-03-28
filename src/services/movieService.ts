import { shuffleArray } from "@/lib/utils";
import { ALL_MOVIES } from "@/config/constants";

export const getActionMovies = (count: number) => {
  const actionMovies = ALL_MOVIES.filter((movie) => movie.genre === "Action");
  return shuffleArray(actionMovies).slice(0, count);
};

export const getAdventureMovies = (count: number) => {
  const adventureMovies = ALL_MOVIES.filter(
    (movie) => movie.genre === "Adventure"
  );
  return shuffleArray(adventureMovies).slice(0, count);
};

export const getAnimationMovies = (count: number) => {
  const animationMovies = ALL_MOVIES.filter(
    (movie) => movie.genre === "Animation"
  );
  return shuffleArray(animationMovies).slice(0, count);
};

export const getComedyMovies = (count: number) => {
  const comedyMovies = ALL_MOVIES.filter((movie) => movie.genre === "Comedy");
  return shuffleArray(comedyMovies).slice(0, count);
};

export const getDramaMovies = (count: number) => {
  const dramaMovies = ALL_MOVIES.filter((movie) => movie.genre === "Drama");
  return shuffleArray(dramaMovies).slice(0, count);
};

export const getFantasyMovies = (count: number) => {
  const fantasyMovies = ALL_MOVIES.filter((movie) => movie.genre === "Fantasy");
  return shuffleArray(fantasyMovies).slice(0, count);
};

export const getHorrorMovies = (count: number) => {
  const horrorMovies = ALL_MOVIES.filter((movie) => movie.genre === "Horror");
  return shuffleArray(horrorMovies).slice(0, count);
};

export const getSuspenseMovies = (count: number) => {
  const suspenseMovies = ALL_MOVIES.filter(
    (movie) => movie.genre === "Suspense"
  );
  return shuffleArray(suspenseMovies).slice(0, count);
};
