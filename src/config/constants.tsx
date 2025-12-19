import { Home, Tv, Server, TvMinimal } from "lucide-react";

// Movies
import folderMainMovies from "../data/movies/folders-main-movies.json";
import systemsMainMovies from "../data/movies/systems-main-movies.json";
import folderAnimationMovies from "../data/movies/folders-animation-movies.json";
import folderMoviesMovies from "../data/movies/folders-movies-movies.json";
import folderSecondaryMovies from "../data/movies/folders-secondary-movies.json";
import folderTertiaryMovies from "../data/movies/folders-tertiary-movies.json";

// Series
import folderMainSeries from "../data/series/folders-main-series.json";
import folderAnimesSeries from "../data/series/folders-animes-series.json";

// TV
import channels from "../data/tv/channels.json";

// Disks
import folderMainInfo from "../data/disks/folders-main-info.json";
import systemsMainInfo from "../data/disks/systems-main-info.json";
import folderSecondaryInfo from "../data/disks/folders-secondary-info.json";
import systemsSecondaryInfo from "../data/disks/systems-secondary-info.json";
import folderTertiaryInfo from "../data/disks/folders-tertiary-info.json";
import systemsTertiaryInfo from "../data/disks/systems-tertiary-info.json";
import foldersAnimationInfo from "../data/disks/folders-animation-info.json";
import foldersMoviesInfo from "../data/disks/folders-movies-info.json";
import foldersAnimesInfo from "../data/disks/folders-animes-info.json";

// Project
export const PROJECT_NAME = "Tyrone's Collection";
export const PROJECT_DESCRIPTION = "Pending description";
export const PROJECT_DOMAIN = new URL(
  process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"
);

// Media
export const ALL_MOVIES = [
  ...folderMainMovies,
  ...systemsMainMovies,
  ...folderAnimationMovies,
  ...folderMoviesMovies,
  ...folderSecondaryMovies,
  ...folderTertiaryMovies,
];

export const ALL_SERIES = [...folderMainSeries, ...folderAnimesSeries];
export const ALL_TV_CHANNELS = [...channels];
export const ALL_DISKS = [
  ...folderMainInfo,
  ...systemsMainInfo,
  ...folderSecondaryInfo,
  ...systemsSecondaryInfo,
  ...folderTertiaryInfo,
  ...systemsTertiaryInfo,
  ...foldersAnimationInfo,
  ...foldersMoviesInfo,
  ...foldersAnimesInfo,
];
export const ALL_MEDIA = [...ALL_MOVIES, ...ALL_SERIES];

// UI Items
export const NAV_ITEMS = [
  { key: "home", href: "/", label: "Inicio" },
  { key: "movies", href: "/movies", label: "Películas" },
  { key: "series", href: "/series", label: "Series" },
  { key: "tv", href: "/tv", label: "TV" },
  { key: "dashboard", href: "/dashboard", label: "Dashboard" },
];

export const NAV_ITEMS_MOBILE = [
  { id: 1, href: "/", label: "Dashboard", icon: Home },
  { id: 2, href: "/movies", label: "Películas", icon: TvMinimal },
  { id: 3, href: "/series", label: "Series", icon: TvMinimal },
  { id: 4, href: "/tv", label: "Televisión", icon: Tv },
  { id: 5, href: "/dashboard", label: "Dashboard", icon: Server },
];

export const GENRE_CHOICES = [
  { key: "action", name: "Action" },
  { key: "animation", name: "Animation" },
  { key: "adventure", name: "Adventure" },
  { key: "comedy", name: "Comedy" },
  { key: "drama", name: "Drama" },
  { key: "documental", name: "Documental" },
  { key: "fantasy", name: "Fantasy" },
  { key: "horror", name: "Horror" },
];

// Banners

export const HERO_IMAGES = [
  "/home/hero-001.webp",
  "/home/hero-002.webp",
  "/home/hero-003.webp",
  "/home/hero-004.webp",
  "/home/hero-005.webp",
  "/home/hero-006.webp",
  "/home/hero-007.webp",
  "/home/hero-008.webp",
  "/home/hero-009.webp",
  "/home/hero-010.webp",
  "/home/hero-011.webp",
];
