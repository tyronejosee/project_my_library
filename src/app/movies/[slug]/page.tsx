"use client";

import { useParams } from "next/navigation";
import { Chip, Image } from "@heroui/react";
import { BadgePlus, Clock, BadgeCheck, BadgeAlert } from "lucide-react";
import { IMedia } from "@/interfaces/media.interface";
import { ALL_MOVIES } from "@/config/constants";

export default function MovieDetail() {
  const { slug } = useParams();
  const movie: IMedia | undefined = ALL_MOVIES.find(
    (movie) => movie.file_name === slug
  );

  if (!movie) {
    return <p className="text-gray-500">Película no encontrada.</p>;
  }

  const imageWidth = movie.type === "Movies" ? 165 : 182;

  return (
    <section className="min-h-[calc(100vh-20vh)] flex justify-center items-center relative">
      {/* Fondo de la imagen */}
      <div
        className="fixed inset-0 bg-cover bg-center before:absolute before:inset-0 
        before:bg-black/80 before:backdrop-blur-xl"
        style={{ backgroundImage: `url(${movie.image})` }}
      ></div>

      {/* Contenido principal */}
      <section className="relative w-[100vw] sm:w-[70vw] lg:w-[40vw] xl:w-[35vw] p-4">
        <figure className="flex flex-col items-center gap-4 pb-4">
          <Image
            src={movie.image}
            alt={movie.folder_name}
            height={256}
            width={imageWidth}
            className="rounded-2xl w-full object-cover border border-neutral-800"
          />
          <header className="text-center">
            <h1 className="text-3xl font-semibold">{movie.folder_name}</h1>
            <span className="text-neutral-500">{movie.file_name}</span>
          </header>
          {movie.has_file ? (
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
              <strong>Género:</strong> {movie.genre}
            </li>
            <li>
              <strong>Ubicación:</strong> {movie.location}
            </li>
            <li>
              <strong>Tamaño</strong> {movie.file_size}
            </li>
          </ul>

          <div className="mt-auto text-gray-400">
            <Chip
              color="primary"
              startContent={<BadgePlus size={18} />}
              variant="faded"
            >
              {movie.created_at}
            </Chip>
            <Chip
              color="primary"
              startContent={<Clock size={18} />}
              variant="faded"
            >
              {movie.updated_at}
            </Chip>
          </div>
        </article>
      </section>
    </section>
  );
}
