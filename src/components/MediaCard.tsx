"use client";

import { IMedia } from "@/interfaces/media.interface";
import { Card, Image } from "@heroui/react";

interface Props {
  media: IMedia;
  widthImage: number;
}

export default function MediaCard({ media, widthImage }: Props) {
  return (
    <Card
      isHoverable
      isPressable
      className="border-none"
      shadow="sm"
      radius="lg"
    >
      <Image
        alt={media.folder_name}
        className="object-cover"
        height={256}
        src={media.image}
        width={widthImage}
        loading="lazy"
      />
    </Card>
  );
}
