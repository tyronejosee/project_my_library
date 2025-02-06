"use client";

import { IMedia } from "@/interfaces/media.interface";
import { Card, Image } from "@heroui/react";

interface Props {
  media: IMedia;
  widthImage: number;
}

export default function MediaCard({ media, widthImage }: Props) {
  return (
    <article className="group">
      <Card
        isPressable
        shadow="sm"
        radius="lg"
        className="relative border border-neutral-800 overflow-hidden"
      >
        <Image
          src={media.image}
          alt={media.folder_name}
          title={media.folder_name}
          height={256}
          width={widthImage}
          loading="lazy"
          radius="none"
          className="transform transition-transform duration-300 group-hover:scale-110"
        />
      </Card>
    </article>
  );
}
