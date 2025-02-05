"use client"

import { useState } from "react";
import Image from "next/image";
// import { useAnimateOnView } from "@/hooks/useAnimateOnView";
import { Button } from "@heroui/react";
import MediaCard from "./MediaCard";
import { ALL_MOVIES } from "@/config/constants";
import { AnimatePresence } from "framer-motion";
import { IMedia } from "@/interfaces/media.interface";

export default function MovieList() {
  // const { ref, controls, itemVariants } = useAnimateOnView(0.1, false);
  const [selectedTattoo, setSelectedTattoo] = useState<IMedia | null>(null);

  const openModal = (movie: IMedia) => {
    setSelectedTattoo(movie);
  };

  const closeModal = () => {
    setSelectedTattoo(null);
  };

  return (
    <>
      <h1>Películas</h1>
      <section className="grid grid-cols-8 gap-6 z-10">
        {ALL_MOVIES.map((movie, index) => (
          <article key={index} onClick={() => openModal(movie)}>
            <MediaCard media={movie} widthImage={165} />
          </article>
        ))}
      </section>
      {/* Modal */}
      {/* ! TODO: Add component */}
      <AnimatePresence>
        {selectedTattoo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
            onClick={closeModal}
          >
            <figure
              className="group rounded-2xl size-[400px] sm:size-[450px] md:size-[500px] lg:size-[550px] xl:size-[600px] relative border border-neutral-800 overflow-hidden"
            >
              <Image
                src={selectedTattoo.image}
                alt={selectedTattoo.file_name}
                fill
                className="object-cover"
              />
              <Button
                size="sm"
                isIconOnly
                className="absolute top-2 right-2 invisible group-hover:visible transition-all duration-100"
                onClick={closeModal}
              >
                x
              </Button>
            </figure>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
