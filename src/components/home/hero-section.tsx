"use client";

import { useState, useEffect } from "react";
import { Image } from "@heroui/react";
import { Noise, RotatingText, TextShimmerWave } from "@/components/animated";
import { HERO_IMAGES } from "@/config/constants";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full"
    >
      <figure className="absolute inset-0 top-0">
        <Noise
          patternSize={250}
          patternScaleX={2}
          patternScaleY={2}
          patternRefreshInterval={2}
          patternAlpha={25}
        />
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out overflow-hidden"
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              zIndex: index === currentImageIndex ? 10 : 0,
            }}
          >
            <Image
              isBlurred
              src={image || "/home/hero-001.webp"}
              alt={`Slide ${index + 1}`}
              width={1920}
              height={1080}
              loading="eager"
              radius="none"
              shadow="none"
              className="object-cover h-full w-full"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black z-10 opacity-25"></div>
      </figure>
      <div className="absolute top-0 z-30 flex h-full w-full items-center justify-center px-4 text-center">
        <h1 className="flex flex-col md:flex-row items-center gap-4 text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4">
          <span>Collection</span>
          <RotatingText
            texts={["Películas", "Series", "Televisión"]}
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
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-4 w-4 rounded-full transition-all duration-300 ${index === currentImageIndex
              ? "bg-primary w-8"
              : "bg-white/50 hover:bg-white/80"
              }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-40 left-0 right-0 z-30 flex justify-center gap-2">
        <TextShimmerWave
          duration={1}
          spread={1}
          zDistance={1}
          scaleDistance={1.1}
          rotateYDistance={20}
        >
          Scroll down...
        </TextShimmerWave>
      </div>
    </section>
  );
}
