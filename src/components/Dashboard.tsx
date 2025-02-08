"use client";

import { CircularProgress, Chip } from "@heroui/react";
import { ALL_DISKS } from "@/config/constants";

export const Dashboard = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {ALL_DISKS.map((disk, index) => {
        const strokeColor =
          disk.percent_used > 90 ? "stroke-red-600" : "stroke-primary";

        return (
          <article
            key={index}
            className="bg-neutral-950 rounded-2xl border border-neutral-800 p-4 group"
          >
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h2 className="text-left text-xl font-medium">
                  {disk.volume_label}
                </h2>
                <ul className="text-left mt-4">
                  <li>Total: {disk.total}</li>
                  <li>Libre: {disk.free}</li>
                  <li>Usado: {disk.used}</li>
                </ul>
                <Chip className="mt-auto group-hover:bg-primary group-hover:text-neutral-950">Disco {disk.drive_name}</Chip>
              </div>
              <CircularProgress
                classNames={{
                  svg: "w-44 h-44 drop-shadow-md",
                  indicator: strokeColor,
                  track: "stroke-white/10",
                  value: "text-3xl font-semibold text-white",
                }}
                showValueLabel={true}
                strokeWidth={4}
                value={disk.percent_used}
              />
            </div>
          </article>
        );
      })}
    </section>
  );
};
