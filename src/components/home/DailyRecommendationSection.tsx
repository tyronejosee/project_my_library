"use client";

import Link from "next/link";
import { Chip, Image } from "@heroui/react";
import { Star } from "lucide-react";
import { DefaultTransition } from "@/components/animated";
import { Media } from "@/interfaces";

interface Props {
  media: Media;
}

export default function DailyRecommendationSection({ media }: Props) {
  return (
    <div className="bg-primary text-neutral-950">
      <DefaultTransition>
        <div className="max-w-screen-md mx-auto flex flex-col md:flex-row py-10">
          <div className="relative flex justify-center items-center shrink-0 pt-4 md:pt-0">
            <Image
              src={media.image}
              alt={`${media.folder_name} poster`}
              className="object-cover w-full h-full"
              width={165}
              height={256}
            />

            <Chip
              size="sm"
              color="primary"
              className="absolute z-50 top-2 right-2 text-neutral-950"
            >
              {media.type === "Movie" ? "Película" : "Serie"}
            </Chip>
          </div>
          <div className="flex flex-col p-4 md:p-6 flex-grow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <Link
                  href={`/${media.type.toLowerCase()}/${media.slug}`}
                  passHref
                >
                  <h3 className="font-bold leading-tight tracking-tighter text-4xl lg:leading-[1.1]">
                    {media.folder_name}
                  </h3>
                </Link>
                <span>Recomendación del día</span>
              </div>
              <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded-md">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
                <span className="font-bold">7.9</span>
                <span className="text-xs ml-0.5">10</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-3">
              <Chip size="sm" variant="faded" className="font-medium">
                {media.genre}
              </Chip>
            </div>

            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <p className="text-muted-foreground">2025</p>
              {/* {media.type === "Movie" ? (
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>
                    {Math.floor(media.duration / 60)}h{" "}
                    {media.duration % 60}m
                  </span>
                </div>
              ) : (
                <div className="flex items-center">
                  <Tv className="h-4 w-4 mr-1" />
                  <span>
                    {media.seasons}{" "}
                    {media.seasons === 1 ? "Temporada" : "Temporadas"}
                  </span>
                </div>
              )} */}
              <span className="mx-2">•</span>
              <span>IMDb</span>
            </div>

            <p className="text-sm flex-grow">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              fugit repellat laboriosam sint corporis quidem neque nobis unde,
              fuga non mollitia nulla labore veritatis sequi cumque!
              Necessitatibus laudantium atque esse.
            </p>
          </div>
        </div>
      </DefaultTransition>
    </div>
  );
}
