import MediaList from "@/components/MediaList";
import { ALL_MOVIES } from "@/config/constants";

export default function MoviesPage() {
  return (
    <section className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <MediaList results={ALL_MOVIES} />
    </section>
  );
}
