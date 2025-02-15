"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import { IChannel } from "@/interfaces/channel.interface";
import channels from "../../data/tv/channels.json";
import TVCard from "@/components/TVCard";

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
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
            {channels.map((channel, index) => (
              <TVCard key={index} channel={channel}/>
            ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
