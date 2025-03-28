import { ContentSection } from "@/components/home";
import {
  getActionMovies,
  getAdventureMovies,
  getAnimationMovies,
  getComedyMovies,
  getDramaMovies,
  // getFantasyMovies,
  getHorrorMovies,
  getSuspenseMovies,
} from "@/services/movieService";
import { getAnimationSeries } from "@/services/serieService";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  const numberOfItems = 28;

  // Movies
  const actionMovies = getActionMovies(numberOfItems);
  const adventureMovies = getAdventureMovies(numberOfItems);
  const animationMovies = getAnimationMovies(numberOfItems);
  const comedyMovies = getComedyMovies(numberOfItems);
  const dramaMovies = getDramaMovies(numberOfItems);
  // const fantasyMovies = getFantasyMovies(numberOfItems);
  const horrorMovies = getHorrorMovies(numberOfItems);
  const suspenseMovies = getSuspenseMovies(numberOfItems);

  // Series
  const animationSeries = getAnimationSeries(numberOfItems);

  return (
    <main>
      <HeroSection />

      {/* Content Sections */}
      <ContentSection
        media={animationSeries}
        title="Animación"
        subtitle="Series"
        pathname="series"
      />
      <ContentSection
        media={actionMovies}
        title="Acción"
        subtitle="Películas"
        pathname="movies"
      />
      <ContentSection
        media={adventureMovies}
        title="Aventura"
        subtitle="Películas"
        pathname="movies"
      />
      <ContentSection
        media={animationMovies}
        title="Animación"
        subtitle="Películas"
        pathname="movies"
      />
      <ContentSection
        media={comedyMovies}
        title="Comedia"
        subtitle="Películas"
        pathname="movies"
      />
      <ContentSection
        media={dramaMovies}
        title="Drama"
        subtitle="Películas"
        pathname="movies"
      />
      {/* <ContentSection
        media={fantasyMovies}
        title="Fantasía"
        subtitle="Películas"
        pathname="movies"
      /> */}
      <ContentSection
        media={horrorMovies}
        title="Terror"
        subtitle="Películas"
        pathname="movies"
      />
      <ContentSection
        media={suspenseMovies}
        title="Suspenso"
        subtitle="Películas"
        pathname="movies"
      />
    </main>
  );
}
