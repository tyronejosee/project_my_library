"use client";

import { useParams } from "next/navigation";
import { Chip, Image } from "@heroui/react";
import { BadgePlus, Clock } from "lucide-react";
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
    <section className="min-h-screen flex lg:justify-center overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center before:absolute before:inset-0 
    before:bg-black/75 before:backdrop-blur-md"
        style={{ backgroundImage: `url(${movie.image})` }}
      ></div>

      <section className="w-full h-[450px] p-4 rounded-xl border border-neutral-600 backdrop-blur-2xl m-4">
        <header className="text-center border-b pb-4">
          <h1 className="text-3xl font-semibold">{movie.folder_name}</h1>
        </header>
        <section className="flex gap-4 py-4">
          <figure>
            <Image
              src={movie.image}
              alt={movie.folder_name}
              height={256}
              width={imageWidth}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </figure>

          <article className="space-y-2">
            <h2 className="text-xl font-medium text-gray-300">Información</h2>
            <ul className="space-y-1 text-gray-400">
              <li>
                <strong>Título [ES]:</strong> {movie.folder_name}
              </li>
              <li>
                <strong>Título [OR]</strong> {movie.file_name}
              </li>
              <li>
                <strong>Tamaño</strong> {movie.file_size}
              </li>
              <li>
                <strong>Género:</strong> {movie.genre}
              </li>
              <li>
                <strong>Tipo:</strong> {movie.type}
              </li>
              <li>
                <strong>Ubicación:</strong> {movie.location}
              </li>
            </ul>

            <div className="space-x-2 text-gray-400">
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
    </section>
  );
}
