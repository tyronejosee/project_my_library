import { Metadata } from "next";
import { Heading } from "@/components/common";
import { LoadSeries } from "@/components/media";

export const metadata: Metadata = {
  title: "Series - Tyrone's Collection",
  description:
    "Series page of Tyrone's Collection. A place to store and organize a personal collection of movies and series. Keep track of favorites, discover new titles, and manage what you've watched.",
};

export default function SeriesPage() {
  return (
    <section className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Heading title="Series" />
      <LoadSeries />
    </section>
  );
}
