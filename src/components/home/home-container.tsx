"use client";

import { useEffect, useState } from "react";

import { DefaultTransition } from "@/components/animated/default-transition";
import { ContentSection } from "@/components/home/content-section";
import { DailyRecommendationSection } from "@/components/home/daily-recommendation-section";
import { getMoviesByGenre, getRandomMedia, getSeriesByGenre } from "@/lib/utils";
import type { Media } from "@/types";

const numberItems = 28;

const genreSections = [
  {
    key: "animationSeries",
    title: "Animación",
    subtitle: "Series",
    pathname: "series",
    genre: "Animation",
    type: "series",
  },
  {
    key: "actionMovies",
    title: "Acción",
    subtitle: "Películas",
    pathname: "movies",
    genre: "Action",
    type: "movies",
  },
  {
    key: "adventureMovies",
    title: "Aventura",
    subtitle: "Películas",
    pathname: "movies",
    genre: "Adventure",
    type: "movies",
  },
  {
    key: "animationMovies",
    title: "Animación",
    subtitle: "Películas",
    pathname: "movies",
    genre: "Animation",
    type: "movies",
  },
  {
    key: "comedyMovies",
    title: "Comedia",
    subtitle: "Películas",
    pathname: "movies",
    genre: "Comedy",
    type: "movies",
  },
  {
    key: "dramaMovies",
    title: "Drama",
    subtitle: "Películas",
    pathname: "movies",
    genre: "Drama",
    type: "movies",
  },
  {
    key: "horrorMovies",
    title: "Terror",
    subtitle: "Películas",
    pathname: "movies",
    genre: "Horror",
    type: "movies",
  },
  {
    key: "suspenseMovies",
    title: "Suspenso",
    subtitle: "Películas",
    pathname: "movies",
    genre: "Suspense",
    type: "movies",
  },
];

function HomeContainer() {
  const [recommendation, setRecommendation] = useState<Media | null>(null);
  const [sectionsData, setSectionsData] = useState<Record<string, Media[]>>({});

  useEffect(() => {
    setRecommendation(getRandomMedia());

    const newData: Record<string, Media[]> = {};

    for (const section of genreSections) {
      const media =
        section.type === "series"
          ? getSeriesByGenre(section.genre, numberItems)
          : getMoviesByGenre(section.genre, numberItems);
      newData[section.key] = media;
    }

    setSectionsData(newData);
  }, []);

  return (
    <>
      {/* Recommendation section */}
      {recommendation && (
        <DailyRecommendationSection
          media={recommendation}
          onRefresh={() => setRecommendation(getRandomMedia())}
        />
      )}

      {/* Genre sections */}
      {genreSections.map(({ key, title, subtitle, pathname, genre }) => {
        const media = sectionsData[key];
        if (!media || media.length === 0) return null;

        return (
          <DefaultTransition key={key}>
            <ContentSection
              media={media}
              title={title}
              subtitle={subtitle}
              pathname={pathname}
              genre={genre.toLowerCase()}
            />
          </DefaultTransition>
        );
      })}
    </>
  );
}

export { HomeContainer };
