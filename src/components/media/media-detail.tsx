"use client";

import { Button, Chip, Image } from "@heroui/react";
import {
  BadgeAlert,
  BadgeCheck,
  Box,
  Calendar,
  Clapperboard,
  Folder,
  FolderClock,
  FolderPlus,
  Play,
} from "lucide-react";

import { normalizeString } from "@/lib/utils";
import type { Media } from "@/types";

type MediaDetailProps = {
  media: Media;
};

function MediaDetail({ media }: MediaDetailProps) {
  const imageWidth = media.type === "Movies" ? 165 : 182;

  return (
    <main className="h-full flex items-center justify-center mt-18">
      <div
        className="fixed inset-0 bg-cover bg-center before:absolute before:inset-0 
        before:bg-black/90 before:backdrop-blur-2xl"
        style={{ backgroundImage: `url(${media.image})` }}
      ></div>
      <section className="relative w-screen sm:w-[70vw] lg:w-[40vw] xl:w-[30vw] p-4">
        <figure className="flex flex-col items-center gap-4 pb-4">
          <Image
            isBlurred
            src={media.image}
            alt={media.folder_name}
            height={256}
            width={imageWidth}
            className="rounded-2xl w-full object-cover border border-neutral-800"
          />
          <header className="text-center">
            <h1 className="text-3xl font-semibold">{media.folder_name}</h1>
            <span className="text-2xl text-neutral-500">{media.file_name}</span>
          </header>
          <div className="flex items-center gap-4">
            <Button
              color="primary"
              size="md"
              aria-label="Play Trailer"
              className="font-medium text-neutral-950"
              startContent={<Play size={18} />}
              onPress={() =>
                window.open(
                  `https://www.youtube.com/results?search_query=${normalizeString(
                    media.slug
                  )}+trailer`,
                  "_blank"
                )
              }
            >
              Trailer
            </Button>
            {media.has_file ? (
              <Chip color="success" startContent={<BadgeCheck size={18} />} variant="solid">
                Disponible
              </Chip>
            ) : (
              <Chip color="danger" startContent={<BadgeAlert size={18} />} variant="solid">
                No Disponible
              </Chip>
            )}
          </div>
        </figure>

        <article className="mt-auto rounded-2xl p-4 text-center border border-neutral-800 bg-black space-y-4">
          <h2 className="text-xl font-medium border-b border-neutral-800 pb-2">Información</h2>
          <div className="flex justify-center gap-4">
            <ul>
              <li className="flex gap-2">
                <Clapperboard size={20} />
                {media.genre}
              </li>
              <li className="flex gap-2">
                <Box size={20} />
                {media.location}
              </li>
              <li className="flex gap-2">
                <Folder size={20} />
                {media.file_size}
              </li>
            </ul>
            <ul>
              <li className="flex gap-2">
                <Calendar size={20} />
                0000
              </li>
              <li className="flex gap-2">
                <FolderPlus size={20} />
                {media.created_at}
              </li>
              <li className="flex gap-2">
                <FolderClock size={20} />
                {media.updated_at}
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}

export { MediaDetail };
