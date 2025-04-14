"use client";

import type { Channel } from "@/types";

import { Card, CardFooter, Image } from "@heroui/react";

type Props = {
  channel: Channel;
};

export default function TVCard({ channel }: Props) {
  return (
    <Card
      isBlurred
      isPressable
      radius="none"
      className="w-full active:bg-neutral-800 transition-colors duration-1000 !outline-none shadow-none rounded-2xl"
      onPress={() =>
        window.open(
          `https://www.directv.cl/guia/ChannelDetail.aspx?id=${
            Array.isArray(channel.number)
              ? channel.number[channel.number.length - 1]
              : channel.number
          }`,
          "_blank"
        )
      }
    >
      <div className="relative overflow-hidden border border-neutral-800 rounded-2xl h-[140px] sm:h-[168px] flex justify-center items-center">
        <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center">
          <Image
            src={channel.image || "/tv/tvn.webp"}
            alt=""
            height={100}
            width={100}
            className="w-full h-full object-cover blur-3xl scale-150 saturate-200"
            aria-hidden="true"
          />
        </div>
        <Image
          src={channel.image || "/tv/tvn.webp"}
          alt={channel.name}
          title={channel.name}
          height={100}
          width={100}
          loading="lazy"
          className="relative z-10 object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <CardFooter className="flex flex-col text-md h-16">
        <div className="flex justify-center gap-1">
          {Array.isArray(channel.number) ? (
            channel.number.map((num, numIndex) => (
              <span
                key={numIndex}
                className="border border-neutral-darkgrey text-neutral-gray text-xs font-medium px-2 py-0.5 rounded-md"
              >
                {num}
              </span>
            ))
          ) : (
            <span className="border border-neutral-darkgrey text-neutral-gray text-xs font-medium px-2 py-0.5 rounded-md">
              {channel.number}
            </span>
          )}
        </div>
        <h2 className="text-sm font-medium line-clamp-2">{channel.name}</h2>
      </CardFooter>
    </Card>
  );
}
