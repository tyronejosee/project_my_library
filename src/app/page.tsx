import { HomeContainer } from "@/components/home";
import {
  getMoviesByGenre,
  getRandomMedia,
  getSeriesByGenre,
} from "@/lib/utils";

export default function Home() {
  const numberItems = 28;

  // Recommendation
  const recommendation = getRandomMedia();

  // Movies
  const actionMovies = getMoviesByGenre("Action", numberItems);
  const adventureMovies = getMoviesByGenre("Adventure", numberItems);
  const animationMovies = getMoviesByGenre("Animation", numberItems);
  const comedyMovies = getMoviesByGenre("Comedy", numberItems);
  const dramaMovies = getMoviesByGenre("Drama", numberItems);
  // const fantasyMovies = getMoviesByGenre("Fantasy", numberItems);
  const horrorMovies = getMoviesByGenre("Horror", numberItems);
  const suspenseMovies = getMoviesByGenre("Suspense", numberItems);

  // Series
  const animationSeries = getSeriesByGenre("Animation", numberItems);

  return (
    <main>
      <HomeContainer
        actionMovies={actionMovies}
        adventureMovies={adventureMovies}
        animationMovies={animationMovies}
        comedyMovies={comedyMovies}
        dramaMovies={dramaMovies}
        // fantasyMovies={fantasyMovies}
        horrorMovies={horrorMovies}
        suspenseMovies={suspenseMovies}
        animationSeries={animationSeries}
        recommendation={recommendation}
      />
    </main>
  );
}
