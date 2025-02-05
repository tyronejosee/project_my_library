"use client"

import { IMedia } from "@/interfaces/media.interface";
import {Card, CardFooter, Image} from "@heroui/react";

interface Props {
    media: IMedia;
    widthImage: number;
}

export default function MediaCard({ media, widthImage }: Props) {
  return (
    <Card isFooterBlurred isPressable className="border-none" shadow="sm" radius="lg">
      <Image
        alt={media.folder_name}
        className="object-cover"
        height={256}
        src="https://heroui.com/images/hero-card.jpeg"
        width={widthImage}
        loading="lazy"
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{media.folder_name}</p>
      </CardFooter>
    </Card>
  );
}
