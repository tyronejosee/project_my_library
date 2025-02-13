"use client";
import Image from "next/image";
import { Accordion, AccordionItem } from "@heroui/react";

import { IChannel } from "@/interfaces/channel.interface";
import channels from "../../data/tv/channels.json";

const groupedChannels = channels.reduce((acc, channel) => {
  acc[channel.category] = acc[channel.category] || [];
  acc[channel.category].push(channel);
  return acc;
}, {} as Record<string, IChannel[]>);

export default function TVPage() {
  return (
    <section className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Accordion defaultExpandedKeys={["Canales Nacionales"]}>
        {Object.entries(groupedChannels).map(([category, channels]) => (
          <AccordionItem
            key={category}
            aria-label={category}
            title={`${category} (${channels.length})`}
          >
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
              {channels.map((channel) => (
                <article
                  key={channel.number}
                  className="rounded-lg flex flex-col items-center gap-4"
                >
                  <figure className="relative border border-neutral-700 rounded-2xl">
                    <span className="absolute top-2 right-2 bg-primary px-2 py-0.5 text-neutral-dark text-xs font-medium text-center rounded-lg">
                      {channel.number}
                    </span>
                    <Image
                      src={channel.image || "/tv/tvn.webp"}
                      alt={channel.name}
                      width={168}
                      height={168}
                      className="object-contain p-4"
                    />
                  </figure>
                  <div className="pb-4">
                    <h2 className="text-medium text-center line-clamp-2">
                      {channel.name}
                    </h2>
                  </div>
                </article>
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
