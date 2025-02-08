"use client";
import { useParams } from "next/navigation";
import { IMedia } from "@/interfaces/media.interface";
import { ALL_SERIES } from "@/config/constants";
import { MediaDetail } from "@/components/MediaDetail";

export default function SeriesDetail() {
  const { slug } = useParams();
  const serie: IMedia | undefined = ALL_SERIES.find(
    (serie) => serie.slug === slug
  );

  if (!serie) {
    return <p className="text-gray-500">Serie no encontrada.</p>;
  }

  return (
    <MediaDetail media={serie}/>
  );
}
