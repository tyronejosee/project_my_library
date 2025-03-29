"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { Heading } from "@/components/common";
import { TVCard } from "@/components/media";
import { ALL_TV_CHANNELS } from "@/config/constants";
import { Channel } from "@/interfaces";
import { AnimatedContent } from "@/components/animated";

const groupedChannels = ALL_TV_CHANNELS.reduce((acc, channel) => {
  acc[channel.category] = acc[channel.category] || [];
  acc[channel.category].push(channel);
  return acc;
}, {} as Record<string, Channel[]>);

export default function TVPage() {
  return (
    <main className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Heading title="Televisión" />
      <Accordion
        selectionMode="multiple"
        // defaultExpandedKeys={["Nacionales"]}
      >
        {Object.entries(groupedChannels).map(([category, channels]) => (
          <AccordionItem
            key={category}
            aria-label={category}
            title={`${category} (${channels.length})`}
            classNames={{
              title:
                "font-bold leading-tight tracking-tighter text-2xl lg:leading-[1.1]",
            }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
              {channels.map((channel, index) => (
                <AnimatedContent
                  key={index}
                  distance={25}
                  direction="vertical"
                  reverse={true}
                  config={{ tension: 100, friction: 20 }}
                  initialOpacity={1.0}
                  animateOpacity
                  scale={1.0}
                  threshold={0.1}
                >
                  <TVCard channel={channel} />
                </AnimatedContent>
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}
