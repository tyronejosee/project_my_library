import { Heading } from "@/components/common";
import { MediaList } from "@/components/media";
import { searchMedia } from "@/lib/utils";
import { PROJECT_NAME } from "@/config/constants";

type Props = {
  searchParams: Promise<{ query?: string }>;
};

export async function generateMetadata({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.query ?? "";

  return {
    title: `${
      query ? `Resultados para "${query}"` : "Explorar"
    } - ${PROJECT_NAME}`,
  };
}

function SearchResults({ query }: { query: string }) {
  const results = searchMedia(query);

  if (results.length === 0) {
    return <p className="text-gray-500">No se encontraron resultados.</p>;
  }

  return <MediaList results={results} />;
}

export default async function SearchPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.query ?? "";

  return (
    <section className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Heading title={query ? `Resultados para "${query}"` : "Explorar"} />
      <SearchResults query={query} />
    </section>
  );
}
