import folderMain from "../data/movies/folders-main-movies.json";
import systemsMain from "../data/movies/systems-main-movies.json";
import MediaCard from "./MediaCard";

export default function MovieList() {
  const allMovies = [
    ...folderMain,
    ...systemsMain,
  ];

  return (
    <div>
      <h1>Películas</h1>
      <section className="grid grid-cols-5 gap-4">
        {allMovies.map((movie, index) => (
          <MediaCard key={index} media={movie} />
        ))}
      </section>
    </div>
  );
}
