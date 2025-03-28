import { Metadata } from "next";
import { Heading } from "@/components/common";
import { LoadMovies } from "@/components/media";

// interface Props {
//   searchParams: IMediaQueryParams;
// }

export const metadata: Metadata = {
  title: "Películas - Tyrone's Collection",
  description:
    "Movies page of Tyrone's Collection. A place to store and organize a personal collection of movies and series. Keep track of favorites, discover new titles, and manage what you've watched.",
};

export default async function MoviesPage() {
  // const params = await searchParams;
  // const { genre } = params || {};

  // const filteredParams = {
  //   ...(genre && { genre }),
  // };

  return (
    <main className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Heading title="Movies" />
      {/* <MediaToolbar /> */}
      <LoadMovies />
    </main>
  );
}
