"use client";

import {
  ContentSection,
  DailyRecommendationSection,
  HeroSection,
} from "@/components/home";
import { DefaultTransition } from "@/components/animated";
import { Media } from "@/interfaces";

interface Props {
  actionMovies: Media[];
  adventureMovies: Media[];
  animationMovies: Media[];
  comedyMovies: Media[];
  dramaMovies: Media[];
  //   fantasyMovies: Media[];
  horrorMovies: Media[];
  suspenseMovies: Media[];
  animationSeries: Media[];
  recommendation: Media;
}

export default function HomeContainer({
  actionMovies,
  adventureMovies,
  animationMovies,
  comedyMovies,
  dramaMovies,
  //   fantasyMovies,
  horrorMovies,
  suspenseMovies,
  animationSeries,
  recommendation,
}: Props) {
  return (
    <>
      <HeroSection />
      <DailyRecommendationSection media={recommendation} />
      <DefaultTransition>
        <ContentSection
          media={animationSeries}
          title="Animación"
          subtitle="Series"
          pathname="series"
        />
      </DefaultTransition>
      <DefaultTransition>
        <ContentSection
          media={actionMovies}
          title="Acción"
          subtitle="Películas"
          pathname="movies"
        />
      </DefaultTransition>
      <DefaultTransition>
        <ContentSection
          media={adventureMovies}
          title="Aventura"
          subtitle="Películas"
          pathname="movies"
        />
      </DefaultTransition>
      <DefaultTransition>
        <ContentSection
          media={animationMovies}
          title="Animación"
          subtitle="Películas"
          pathname="movies"
        />
      </DefaultTransition>
      <DefaultTransition>
        <ContentSection
          media={comedyMovies}
          title="Comedia"
          subtitle="Películas"
          pathname="movies"
        />
      </DefaultTransition>
      <DefaultTransition>
        <ContentSection
          media={dramaMovies}
          title="Drama"
          subtitle="Películas"
          pathname="movies"
        />
      </DefaultTransition>
      {/* <DefaultTransition>
        <ContentSection
          media={fantasyMovies}
          title="Fantasía"
          subtitle="Películas"
          pathname="movies"
        />
      </DefaultTransition> */}
      <DefaultTransition>
        <ContentSection
          media={horrorMovies}
          title="Terror"
          subtitle="Películas"
          pathname="movies"
        />
      </DefaultTransition>
      <DefaultTransition>
        <ContentSection
          media={suspenseMovies}
          title="Suspenso"
          subtitle="Películas"
          pathname="movies"
        />
      </DefaultTransition>
    </>
  );
}
