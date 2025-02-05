import MediaList from "@/components/MediaList";
import { ALL_SERIES } from "@/config/constants";

export default function SeriesPage() {
  return (
    <section className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <MediaList results={ALL_SERIES} />
    </section>
  );
}
