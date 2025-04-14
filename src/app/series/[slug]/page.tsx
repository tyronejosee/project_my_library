import type { Metadata } from "next";
import type { Media } from "@/types";

import { MediaDetail } from "@/components/media";
import { ALL_SERIES, PROJECT_NAME, PROJECT_DOMAIN } from "@/config/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const serie = ALL_SERIES.find((serie) => serie.slug === slug);

  if (!serie) {
    return {
      title: "Serie no encontrada",
      description: "La serie que buscas no fue encontrada en nuestro catálogo.",
      robots: "noindex, nofollow",
    };
  }

  const pageUrl = new URL(`/series/${slug}`, PROJECT_DOMAIN).toString();

  return {
    title: serie.folder_name,
    description: `${serie.file_name} - ${serie.genre} - ${serie.type}`,
    metadataBase: PROJECT_DOMAIN,
    keywords: [
      `"${serie.file_name}", "${serie.folder_name}", "${serie.genre}", "${serie.type}"`,
    ],
    authors: [{ name: PROJECT_NAME, url: PROJECT_DOMAIN.toString() }],
    creator: PROJECT_NAME,
    publisher: PROJECT_NAME,
    robots: "index, follow",
    openGraph: {
      title: serie.folder_name,
      description: `${serie.file_name} - ${serie.genre} - ${serie.type}`,
      url: pageUrl,
      siteName: PROJECT_NAME,
      images: serie.image ? [serie.image] : [],
      type: "video.tv_show",
    },
    twitter: {
      title: serie.folder_name,
      description: `${serie.file_name} - ${serie.genre} - ${serie.type}`,
      card: "summary_large_image",
      images: serie.image ? [serie.image] : [],
    },
    formatDetection: {
      telephone: false,
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
