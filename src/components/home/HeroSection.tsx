"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HERO_IMAGES } from "@/config/constants";
import { RotatingText } from "@/components/animated";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="top-0 h-screen w-full overflow-hidden">
      <figure className="absolute inset-0">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              zIndex: index === currentImageIndex ? 10 : 0,
            }}
          >
            <Image
              src={image || "/home/hero-001.webp"}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
              unoptimized
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-20"></div>
      </figure>
      <div className="absolute top-0 z-30 flex h-full w-full items-center justify-center px-4 text-center">
        <h1 className="flex items-center gap-4 text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-100">
            Collection
          </span>
          <RotatingText
            texts={["Películas", "Series", "Televisión", "Discos"]}
            mainClassName="px-2 sm:px-2 md:px-3 text-neutral-950 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-xl bg-primary"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h1>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-20 left-0 right-0 z-30 flex justify-center gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
