import { Heading } from "@/components/common/heading";
import { LoadMovies } from "@/components/media/load-movies";
import { getMoviesByGenre } from "@/lib/utils";

type GenrePageProps = {
  params: Promise<{ genre: string }>;
};

export default async function GenrePage({ params }: GenrePageProps) {
  const { genre } = await params;
  const data = await getMoviesByGenre(genre);

  return (
    <main className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Heading title="Películas" />
      <LoadMovies data={data} isGenre />
    </main>
  );
}
