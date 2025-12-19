"use client";

import { Button, Chip, Image } from "@heroui/react";
import { RefreshCw, Star } from "lucide-react";
import Link from "next/link";

import { DefaultTransition } from "@/components/animated/default-transition";
import type { Media } from "@/types";

type DailyRecommendationSectionProps = {
  media: Media;
  onRefresh: () => void;
};

function DailyRecommendationSection({ media, onRefresh }: DailyRecommendationSectionProps) {
  const imageWidth = media.type === "Movies" ? 165 : 182;
  return (
    <div className="bg-primary text-neutral-950 overflow-hidden">
      <DefaultTransition>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row py-10">
          <div className="relative flex justify-center items-center shrink-0 pt-4 md:pt-0 group">
            <Image
              isBlurred
              src={media.image}
              alt={`${media.folder_name} poster`}
              title={media.folder_name}
              width={imageWidth}
              height={256}
              loading="eager"
              radius="lg"
              className="object-cover w-full h-full border border-neutral-800"
            />
          </div>
          <div className="flex flex-col p-4 md:p-6 grow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <Link href={`/${media.type.toLowerCase()}/${media.slug}`} passHref>
                  <h3 className="font-bold leading-tight tracking-tighter text-4xl lg:leading-[1.1] hover:underline">
                    {media.folder_name}
                  </h3>
                </Link>
                <span>Recomendación del día</span>
              </div>
              <div className="flex flex-col gap-2 ml-4">
                <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded-md">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
                  <span className="font-bold">7.9</span>
                  <span className="text-xs ml-0.5">10</span>
                </div>
                <Button
                  isIconOnly
                  size="sm"
                  color="default"
                  aria-label="Refresh recommendation"
                  onPress={onRefresh}
                  className="w-full bg-neutral-950"
                >
                  <RefreshCw size={16} />
                </Button>
              </div>
            </div>

            <div className="flex mb-3">
              <Chip size="sm" variant="solid" className="font-medium bg-neutral-950">
                {media.genre}
              </Chip>
            </div>

            <div className="flex text-sm font-medium mb-4 space-x-2">
              <p>{media.type === "Movies" ? "Película" : "Serie"}</p>
              <span>•</span>
              <p>2025</p>
              <span>•</span>
              <p>IMDb</p>
            </div>

            <p className="text-sm overflow-y-auto h-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam fugit repellat
              laboriosam sint corporis quidem neque nobis unde, fuga non mollitia nulla labore
              veritatis sequi cumque! Necessitatibus laudantium atque esse.
            </p>
          </div>
        </div>
      </DefaultTransition>
    </div>
  );
}

export { DailyRecommendationSection };
