import { shuffleArray } from "@/lib/utils";
import { ALL_SERIES } from "@/config/constants";

export const getAnimationSeries = (count: number) => {
  const animationSeries = ALL_SERIES.filter(
    (serie) => serie.genre === "Animation"
  );
  return shuffleArray(animationSeries).slice(0, count);
};
