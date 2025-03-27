import { Metadata } from "next";
import { MediaDetail } from "@/components/media";
import { ALL_SERIES } from "@/config/constants";
import { Media } from "@/interfaces";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const serie = ALL_SERIES.find((serie) => serie.slug === slug);

  if (!serie) {
    return {
      title: "Serie no encontrada",
    };
  }

  return {
    title: serie.folder_name,
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"
    ),
    openGraph: {
      title: serie.folder_name,
      images: serie.image ? [serie.image] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: serie.folder_name,
      images: serie.image ? [serie.image] : [],
    },
  };
}

export default async function SeriesDetail({ params }: Props) {
  const { slug } = await params;
  const serie: Media | undefined = ALL_SERIES.find(
    (serie) => serie.slug === slug
  );

  if (!serie) {
    return <p className="text-gray-500">Serie no encontrada.</p>;
  }

  return <MediaDetail media={serie} />;
}
