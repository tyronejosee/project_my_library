"use client";
import React from "react";
import Link from "next/link";
import { Card, CardFooter, Image } from "@heroui/react";
import { IChannel } from "@/interfaces/channel.interface";

interface Props {
  channel: IChannel;
}

export default function TVCard({ channel }: Props) {
  return (
    <article className="group">
      <Link
        href={`https://www.directv.cl/guia/ChannelDetail.aspx?id=${
          Array.isArray(channel.number)
            ? channel.number[channel.number.length - 1]
            : channel.number
        }`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card
          isBlurred
          isPressable
          radius="none"
          className="active:bg-neutral-800 transition-colors duration-1000 !outline-none shadow-none rounded-2xl"
        >
          <div className="relative border border-neutral-800 overflow-hidden rounded-2xl w-[140px] h-[140px] sm:w-[168px] sm:h-[168px] flex justify-center items-center">
            <Image
              src={channel.image || "/tv/tvn.webp"}
              alt={channel.name}
              title={channel.name}
              height={100}
              width={100}
              loading="lazy"
              radius="sm"
              className="object-cover transform transition-transform duration-300 group-hover:scale-105"
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
      </Link>
    </article>
  );
}
