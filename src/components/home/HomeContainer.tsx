"use client";

import { ContentSection, DailyRecommendationSection } from "@/components/home";
import { DefaultTransition } from "@/components/animated";
import {
  getMoviesByGenre,
  getRandomMedia,
  getSeriesByGenre,
} from "@/lib/utils";
import { useEffect, useState } from "react";
import { Media } from "@/interfaces";

export default function HomeContainer() {
  const numberItems = 28;
  const [recommendation, setRecommendation] = useState<Media | null>(null);
  const [animationSeries, setAnimationSeries] = useState<Media[]>([]);
  const [actionMovies, setActionMovies] = useState<Media[]>([]);
  const [adventureMovies, setAdventureMovies] = useState<Media[]>([]);
  const [animationMovies, setAnimationMovies] = useState<Media[]>([]);
  const [comedyMovies, setComedyMovies] = useState<Media[]>([]);
  const [dramaMovies, setDramaMovies] = useState<Media[]>([]);
  // const [fantasyMovies, setFantasyMovies] = useState<Media[]>([]);
  const [horrorMovies, setHorrorMovies] = useState<Media[]>([]);
  const [suspenseMovies, setSuspenseMovies] = useState<Media[]>([]);

  useEffect(() => {
    setRecommendation(getRandomMedia());
    setAnimationSeries(getSeriesByGenre("Animation", numberItems));
    setActionMovies(getMoviesByGenre("Action", numberItems));
    setAdventureMovies(getMoviesByGenre("Adventure", numberItems));
    setAnimationMovies(getMoviesByGenre("Animation", numberItems));
    setComedyMovies(getMoviesByGenre("Comedy", numberItems));
    setDramaMovies(getMoviesByGenre("Drama", numberItems));
    // setFantasyMovies(getMoviesByGenre("Fantasy", numberItems));
    setHorrorMovies(getMoviesByGenre("Horror", numberItems));
    setSuspenseMovies(getMoviesByGenre("Suspense", numberItems));
  }, []);

  return (
    <>
      {/* Recommendation */}
      {recommendation && (
        <DailyRecommendationSection
          media={recommendation}
          onRefresh={() => setRecommendation(getRandomMedia())}
        />
      )}
      {/* Series */}
      {animationSeries.length > 0 && (
        <DefaultTransition>
          <ContentSection
            media={animationSeries}
            title="Animación"
            subtitle="Series"
            pathname="series"
            genre="animation"
          />
        </DefaultTransition>
      )}
      {/* Movies */}
      {actionMovies.length > 0 && (
        <DefaultTransition>
          <ContentSection
            media={actionMovies}
            title="Acción"
            subtitle="Películas"
            pathname="movies"
            genre="action"
          />
        </DefaultTransition>
      )}
      {adventureMovies.length > 0 && (
        <DefaultTransition>
          <ContentSection
            media={adventureMovies}
            title="Aventura"
            subtitle="Películas"
            pathname="movies"
            genre="adventure"
          />
        </DefaultTransition>
      )}
      {animationMovies.length > 0 && (
        <DefaultTransition>
          <ContentSection
            media={animationMovies}
            title="Animación"
            subtitle="Películas"
            pathname="movies"
            genre="animation"
          />
        </DefaultTransition>
      )}
      {comedyMovies.length > 0 && (
        <DefaultTransition>
          <ContentSection
            media={comedyMovies}
            title="Comedia"
            subtitle="Películas"
            pathname="movies"
            genre="comedy"
          />
        </DefaultTransition>
      )}
      {dramaMovies.length > 0 && (
        <DefaultTransition>
          <ContentSection
            media={dramaMovies}
            title="Drama"
            subtitle="Películas"
            pathname="movies"
            genre="drama"
          />
        </DefaultTransition>
      )}
      {/* {fantasyMovies.length > 0 && (
        <DefaultTransition>
          <ContentSection
            media={fantasyMovies}
            title="Fantasía"
            subtitle="Películas"
            pathname="movies"
            genre="fantasy"
          />
        </DefaultTransition>
      )} */}
      {horrorMovies.length > 0 && (
        <DefaultTransition>
          <ContentSection
            media={horrorMovies}
            title="Terror"
            subtitle="Películas"
            pathname="movies"
            genre="horror"
          />
        </DefaultTransition>
      )}
      {suspenseMovies.length > 0 && (
        <DefaultTransition>
          <ContentSection
            media={suspenseMovies}
            title="Suspenso"
            subtitle="Películas"
            pathname="movies"
            genre="suspense"
          />
        </DefaultTransition>
      )}
    </>
  );
}
