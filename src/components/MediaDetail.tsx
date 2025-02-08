"use client";
import { IMedia } from "@/interfaces/media.interface";
import { Chip, Image } from "@heroui/react";
import { BadgePlus, Clock, BadgeCheck, BadgeAlert } from "lucide-react";

interface Props {
  media: IMedia;
}

export const MediaDetail = ({ media }: Props) => {
  const imageWidth = media.type === "Movies" ? 165 : 182;
  
  return (
    <section className="min-h-[calc(100vh-20vh)] flex justify-center items-center relative">
      <div
        className="fixed inset-0 bg-cover bg-center before:absolute before:inset-0 
        before:bg-black/80 before:backdrop-blur-2xl"
        style={{ backgroundImage: `url(${media.image})` }}
      ></div>
      <section className="relative w-[100vw] sm:w-[70vw] lg:w-[40vw] xl:w-[35vw] p-4">
        <figure className="flex flex-col items-center gap-4 pb-4">
          <Image
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
          {media.has_file ? (
            <Chip
              color="success"
              startContent={<BadgeCheck size={18} />}
              variant="solid"
            >
              Disponible
            </Chip>
          ) : (
            <Chip
              color="danger"
              startContent={<BadgeAlert size={18} />}
              variant="solid"
            >
              No Disponible
            </Chip>
          )}
        </figure>

        <article className="rounded-2xl p-4 text-center border border-neutral-800">
          <h2 className="text-xl font-medium text-gray-300">Información</h2>
          <ul className="space-y-1 text-gray-400">
            <li>
              <strong>Género:</strong> {media.genre}
            </li>
            <li>
              <strong>Ubicación:</strong> {media.location}
            </li>
            <li>
              <strong>Tamaño</strong> {media.file_size}
            </li>
          </ul>

          <div className="mt-auto text-gray-400">
            <Chip
              color="primary"
              startContent={<BadgePlus size={18} />}
              variant="faded"
            >
              {media.created_at}
            </Chip>
            <Chip
              color="primary"
              startContent={<Clock size={18} />}
              variant="faded"
            >
              {media.updated_at}
            </Chip>
          </div>
        </article>
      </section>
    </section>
  );
};
