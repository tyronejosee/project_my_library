import MediaCard from "./MediaCard";
import { ALL_SERIES } from "@/config/constants";

export default function SeriesList() {
  return (
    <section>
      <h1>Series</h1>
      <section className="grid grid-cols-8 gap-4">
        {ALL_SERIES.map((serie, index) => (
          <MediaCard key={index} media={serie} widthImage={182} />
        ))}
      </section>
    </section>
  );
}
