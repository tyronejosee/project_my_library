import MediaCard from "./MediaCard";
import { ALL_MOVIES } from "@/config/constants";

export default function MovieList() {
  return (
    <section>
      <h1>Películas</h1>
      <section className="grid grid-cols-8 gap-6">
        {ALL_MOVIES.map((movie, index) => (
          <MediaCard key={index} media={movie} widthImage={165} />
        ))}
      </section>
    </section>
  );
}
