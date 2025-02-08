"use client";
import { IMedia } from "@/interfaces/media.interface";
import { Card, CardFooter, Image } from "@heroui/react";
import Link from "next/link";
import React from "react";

interface Props {
  media: IMedia;
}

export default function MediaCard({ media }: Props) {
  const imageWidth = media.type === "Movies" ? 165 : 182;
  return (
    <article className="group">
      <Link href={`/${media.type.toLowerCase()}/${media.slug}`} passHref>
        <Card
          isBlurred
          radius="none"
          className="h-full p-1 active:bg-neutral-900 transition-colors duration-1000"
        >
          <div className="relative border border-neutral-800 overflow-hidden rounded-xl mx-auto">
            <span className="hidden group-hover:block absolute top-2 right-2 bg-primary text-neutral-950 px-2 py-1 rounded-lg text-xs z-50">
              {media.file_size}
            </span>
            <Image
              src={media.image}
              alt={media.folder_name}
              title={media.folder_name}
              height={256}
              width={imageWidth}
              loading="lazy"
              radius="none"
              className="transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <CardFooter className="flex flex-col text-md h-16 p-2">
            <h2 className="font-medium line-clamp-2">{media.folder_name}</h2>
          </CardFooter>
        </Card>
      </Link>
    </article>
  );
}
