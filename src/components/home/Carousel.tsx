"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button, Card, Image } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Media } from "@/interfaces";

interface Props {
  items: Media[];
}

export default function Carousel({ items }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrowVisibility = () => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", updateArrowVisibility);
      updateArrowVisibility();

      return () => {
        carousel.removeEventListener("scroll", updateArrowVisibility);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const { clientWidth } = carouselRef.current;
    const scrollAmount =
      direction === "left" ? -clientWidth / 2 : clientWidth / 2;

    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      {showLeftArrow && (
        <Button
          isIconOnly
          onPress={() => scroll("left")}
          radius="lg"
          aria-label="Scroll left"
          className="absolute left-2 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 bg-none backdrop-blur-xl backdrop-saturate-150 bg-black/50 border border-neutral-700"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      )}

      <div
        ref={carouselRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => {
          const imageWidth = item.type === "Movies" ? 165 : 182;
          return (
            <div
              key={item.slug}
              className="group flex-none transition-transform duration-300"
            >
              <Link href={`/${item.type.toLowerCase()}/${item.slug}`} passHref>
                <Card
                  isBlurred
                  radius="none"
                  className="active:bg-neutral-800 transition-colors duration-1000 !outline-none shadow-none"
                >
                  <figure className="relative border border-neutral-800 rounded-2xl overflow-hidden mx-auto">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.folder_name}
                      title={item.folder_name}
                      height={256}
                      width={imageWidth}
                      loading="lazy"
                      radius="none"
                    />
                  </figure>
                  <div className="absolute z-10 inset-0 bg-gradient-to-t from-black w-full to-transparent opacity-0 transition-opacity hover:opacity-100">
                    <div className="absolute bottom-0 px-4 py-4">
                      <h3 className="text-md font-bold">{item.folder_name}</h3>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>

      {showRightArrow && (
        <Button
          isIconOnly
          aria-label="Scroll right"
          onPress={() => scroll("right")}
          className="absolute right-2 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 bg-none backdrop-blur-xl backdrop-saturate-150 bg-black/50 border border-neutral-700"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
