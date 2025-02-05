import MediaList from "@/components/MediaList";
import { searchMedia } from "@/lib/utils";

export default function SearchPage({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams.query || "";
  const results = searchMedia(query);
  
  return (
    <section className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <MediaList results={results} />
    </section>
  );
}
