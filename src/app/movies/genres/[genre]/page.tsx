import { Heading } from "@/components/common";
import { LoadMovies } from "@/components/media";
import { getMoviesByGenre } from "@/lib/utils";

interface Props {
  params: Promise<{ genre: string }>;
}

export default async function GenrePage({ params }: Props) {
  const { genre } = await params;
  const data = await getMoviesByGenre(genre);

  return (
    <main className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Heading title="Películas" />
      <LoadMovies data={data} isGenre />
    </main>
  );
}
