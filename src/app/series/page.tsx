"use client";

import { Heading } from "@/components/Heading";
import LoadSeries from "@/components/LoadSeries";

export default function SeriesPage() {
  return (
    <section className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Heading title="Series" />
      <LoadSeries />
    </section>
  );
}
