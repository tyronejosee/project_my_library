import MediaList from "@/components/MediaList";
import { searchMedia } from "@/lib/utils";

interface Props {
  searchParams: Promise<{ query?: string }>;
}

export default async function SearchPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.query ?? "";

  return (
    <section className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <SearchResults query={query} />
    </section>
  );
}

function SearchResults({ query }: { query: string }) {
  const results = searchMedia(query);

  return <MediaList results={results} />;
}
