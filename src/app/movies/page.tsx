import { Heading } from "@/components/Heading";
import LoadMovies from "@/components/LoadMovies";

// interface Props {
//   searchParams: IMediaQueryParams;
// }

export default async function MoviesPage() {
  // const params = await searchParams;
  // const { genre } = params || {};

  // const filteredParams = {
  //   ...(genre && { genre }),
  // };

  return (
    <section className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Heading title="Movies" />
      {/* <MediaToolbar /> */}
      <LoadMovies />
    </section>
  );
}
