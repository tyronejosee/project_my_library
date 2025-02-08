// Disks
import folderMainInfo from "../data/disks/folders-main-info.json";
import systemsMainInfo from "../data/disks/systems-main-info.json";
import folderSecondaryInfo from "../data/disks/folders-secondary-info.json";
import systemsSecondaryInfo from "../data/disks/systems-secondary-info.json";
import folderTertiaryInfo from "../data/disks/folders-tertiary-info.json";
import systemsTertiaryInfo from "../data/disks/systems-tertiary-info.json";
import foldersAnimationInfo from "../data/disks/folders-animation-info.json";
import foldersMoviesInfo from "../data/disks/folders-movies-info.json";

// Movies
import folderMainMovies from "../data/movies/folders-main-movies.json";
import systemsMainMovies from "../data/movies/systems-main-movies.json";
import folderAnimationMovies from "../data/movies/folders-animation-movies.json";
import folderMoviesMovies from "../data/movies/folders-movies-movies.json";
import folderSecondaryMovies from "../data/movies/folders-secondary-movies.json";
import folderTertiaryMovies from "../data/movies/folders-tertiary-movies.json";


// Series
import folderMainSeries from "../data/series/folders-main-series.json";

export const PROJECT_NAME = "Tyrone's Collection";

export const COMPANY_DESCRIPTION = `
lorem ipsum
`;

export const ALL_DISKS = [
  ...folderMainInfo,
  ...systemsMainInfo,
  ...folderSecondaryInfo,
  ...systemsSecondaryInfo,
  ...folderTertiaryInfo,
  ...systemsTertiaryInfo,
  ...foldersAnimationInfo,
  ...foldersMoviesInfo,
];

export const ALL_MOVIES = [
  ...folderMainMovies,
  ...systemsMainMovies,
  ...folderAnimationMovies,
  ...folderMoviesMovies,
  ...folderSecondaryMovies,
  ...folderTertiaryMovies,
];

export const ALL_SERIES = [
  ...folderMainSeries,
];

export const ALL_MEDIA = [
  ...ALL_MOVIES,
  ...ALL_SERIES,
];

export const NAV_CTA = { label: "Random", href: "/random" };

export const NAV_ITEMS = [
  { id: 1, href: "/movies", label: "Películas" },
  { id: 2, href: "/series", label: "Series" },
];

// export const MENU_ITEMS = [
//   { id: 1, href: "/movies", label: "Películas" },
// ];
